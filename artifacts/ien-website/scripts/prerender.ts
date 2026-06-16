/*
 * Static pre-render of the SPA.
 *
 * Why this exists:
 *   The site is a Vite + React SPA. Crawlers that don't execute JavaScript —
 *   notably Facebook, Twitter/X, LinkedIn, Slack, Discord, and iMessage when
 *   they generate link previews — only see the contents of dist/public/
 *   index.html. Without pre-rendering, every URL has the same <title>,
 *   description, and Open Graph tags, so every share looks identical.
 *
 * What it does:
 *   1. Boots a local static-file server over the freshly-built dist/public/
 *      output (the same files Vercel will serve in production).
 *   2. Launches headless Chrome via Puppeteer and visits each known route.
 *   3. Waits for React + react-helmet-async to populate the <head>, then
 *      snapshots the fully-rendered HTML.
 *   4. Writes each snapshot to dist/public/<route>/index.html. Vercel's
 *      filesystem lookup serves these BEFORE the SPA-fallback rewrite kicks
 *      in, so crawlers get the right HTML and humans still get the SPA.
 *
 * Wired into package.json:  "build": "vite build && tsx scripts/prerender.ts"
 *
 * If you add a new route to the React Router, add it to ROUTES below so the
 * pre-renderer covers it. (We don't auto-derive from wouter because routes
 * sometimes have params, glob children, or admin-only branches we'd skip.)
 */

import { createServer } from "node:http";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import handler from "serve-handler";
import puppeteer, { Browser } from "puppeteer";

const ROUTES = [
  "/",
  "/about",
  "/why-esports",
  "/leagues",
  "/leagues/ihsen",
  "/leagues/imsen",
  "/leagues/iuen",
  "/schedule",
  "/events",
  "/news",
  "/hall-of-champions",
  "/schools",
  "/partners",
  "/partner-with-ien",
  "/start-a-program",
  "/contact",
  "/privacy",
  "/terms",
];

const DIST = resolve("dist/public");
const PORT = 4173;

async function serveDist(): Promise<{ close: () => Promise<void> }> {
  const server = createServer((req, res) =>
    handler(req, res, {
      public: DIST,
      // Mirror Vercel's SPA fallback so unknown paths return index.html during
      // pre-render. Without this, the first-load HTTP would 404 and the
      // headless browser would never reach the SPA shell.
      rewrites: [{ source: "**", destination: "/index.html" }],
    }),
  );
  await new Promise<void>((r) => server.listen(PORT, r));
  return { close: () => new Promise((r) => server.close(() => r())) };
}

/**
 * Helmet quirk in SPA snapshots: wouter briefly renders the root route's
 * component before the URL match settles, which leaves stale <title> / OG
 * tags from that first render in the DOM alongside the correct ones from the
 * actual page. Browsers tolerate it, but crawlers (and SEO auditors) don't
 * like duplicates. This pass keeps exactly one of each Helmet-managed tag.
 *
 *   - For <title>: Helmet PREPENDS new titles, so the FIRST <title> in source
 *     is the newest (target page's title). Keep the first, drop the rest.
 *   - For <meta>, <link rel="canonical">: Helmet APPENDS, so the LAST
 *     occurrence is the newest. Keep the last, drop the rest.
 */
function dedupeHelmetTags(html: string): string {
  let out = html;

  // 1) Titles: keep first <title>, remove all subsequent ones.
  let titleSeen = false;
  out = out.replace(/<title[^>]*>[\s\S]*?<\/title>/g, (match) => {
    if (!titleSeen) {
      titleSeen = true;
      return match;
    }
    return "";
  });

  // 2) For each kind of meta/link tag, keep only the LAST occurrence.
  //    We collect all matches, drop earlier ones with the same identity key,
  //    and rewrite the document.
  const META_KIND_KEY = (tag: string): string | null => {
    const name = tag.match(/\sname=["']([^"']+)["']/i)?.[1];
    if (name && /^(description|robots|twitter:|keywords)/i.test(name)) {
      return `meta:name:${name.toLowerCase()}`;
    }
    const property = tag.match(/\sproperty=["']([^"']+)["']/i)?.[1];
    if (property && /^og:/i.test(property)) {
      return `meta:property:${property.toLowerCase()}`;
    }
    return null;
  };

  // Collect all <meta> tags with their start positions
  const metaTags: Array<{ index: number; full: string; key: string }> = [];
  const metaRe = /<meta\b[^>]*\/?>/g;
  let m: RegExpExecArray | null;
  while ((m = metaRe.exec(out)) !== null) {
    const key = META_KIND_KEY(m[0]);
    if (key) metaTags.push({ index: m.index, full: m[0], key });
  }
  // Identify the LAST occurrence per key — those are the keepers.
  const lastIndexPerKey = new Map<string, number>();
  for (const t of metaTags) lastIndexPerKey.set(t.key, t.index);
  // Build a set of indices to DROP (anything that's not the last for its key).
  const dropIndices = new Set<number>();
  for (const t of metaTags) {
    if (lastIndexPerKey.get(t.key) !== t.index) dropIndices.add(t.index);
  }
  // Reconstruct the document, splicing out the unwanted tags.
  if (dropIndices.size > 0) {
    let result = "";
    let cursor = 0;
    for (const t of metaTags) {
      if (dropIndices.has(t.index)) {
        result += out.slice(cursor, t.index);
        cursor = t.index + t.full.length;
      }
    }
    result += out.slice(cursor);
    out = result;
  }

  // 3) Canonical: keep the LAST <link rel="canonical">.
  const canonicalRe = /<link\b[^>]*\srel=["']canonical["'][^>]*\/?>/gi;
  const canonicals = [...out.matchAll(canonicalRe)];
  if (canonicals.length > 1) {
    const last = canonicals[canonicals.length - 1];
    for (let i = 0; i < canonicals.length - 1; i++) {
      out = out.replace(canonicals[i][0], "");
    }
    void last; // we already kept the last by removing earlier ones
  }

  return out;
}

async function prerenderRoute(browser: Browser, route: string): Promise<void> {
  const page = await browser.newPage();
  try {
    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30_000 });

    // Belt-and-suspenders: react-helmet-async writes <head> asynchronously.
    // networkidle0 usually catches it, but give Helmet one tick.
    await new Promise((r) => setTimeout(r, 100));

    let html = await page.content();
    html = dedupeHelmetTags(html);

    const outPath =
      route === "/"
        ? join(DIST, "index.html")
        : join(DIST, route.slice(1), "index.html");

    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");

    process.stdout.write(`  ✓ ${route.padEnd(24)} → ${outPath.replace(DIST + "/", "")}\n`);
  } finally {
    await page.close();
  }
}

async function main() {
  console.log(`Pre-rendering ${ROUTES.length} routes from ${DIST}`);
  const server = await serveDist();
  const browser = await puppeteer.launch({ headless: true });
  try {
    for (const route of ROUTES) {
      await prerenderRoute(browser, route);
    }
  } finally {
    await browser.close();
    await server.close();
  }
  console.log("Pre-render complete.");
}

main().catch((err) => {
  console.error("Pre-render failed:", err);
  process.exit(1);
});

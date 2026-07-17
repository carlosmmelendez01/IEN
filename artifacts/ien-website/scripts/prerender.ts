

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
  "/sponsor",
  "/support",
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

      rewrites: [{ source: "**", destination: "/index.html" }],
    }),
  );
  await new Promise<void>((r) => server.listen(PORT, r));
  return { close: () => new Promise((r) => server.close(() => r())) };
}

function dedupeHelmetTags(html: string): string {
  let out = html;

  let titleSeen = false;
  out = out.replace(/<title[^>]*>[\s\S]*?<\/title>/g, (match) => {
    if (!titleSeen) {
      titleSeen = true;
      return match;
    }
    return "";
  });

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
  const metaTags: Array<{ index: number; full: string; key: string }> = [];
  const metaRe = /<meta\b[^>]*\/?>/g;
  let m: RegExpExecArray | null;
  while ((m = metaRe.exec(out)) !== null) {
    const key = META_KIND_KEY(m[0]);
    if (key) metaTags.push({ index: m.index, full: m[0], key });
  }
  const lastIndexPerKey = new Map<string, number>();
  for (const t of metaTags) lastIndexPerKey.set(t.key, t.index);
  const dropIndices = new Set<number>();
  for (const t of metaTags) {
    if (lastIndexPerKey.get(t.key) !== t.index) dropIndices.add(t.index);
  }
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
  const canonicalRe = /<link\b[^>]*\srel=["']canonical["'][^>]*\/?>/gi;
  const canonicals = [...out.matchAll(canonicalRe)];
  if (canonicals.length > 1) {
    const last = canonicals[canonicals.length - 1];
    for (let i = 0; i < canonicals.length - 1; i++) {
      out = out.replace(canonicals[i][0], "");
    }
    void last;
  }

  return out;
}

async function prerenderRoute(browser: Browser, route: string): Promise<void> {
  const page = await browser.newPage();
  try {
    const url = `http://localhost:${PORT}${route}`;
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45_000 });

    await new Promise((r) => setTimeout(r, 250));

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

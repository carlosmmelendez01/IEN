import { Helmet } from "react-helmet-async";

const SITE_URL = "https://indianaesportsnetwork.org";
const SITE_NAME = "Indiana Esports Network";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOProps {
  /** Page title (without the "— Indiana Esports Network" suffix). */
  title: string;
  /** Short page description — keep under ~160 characters for search snippets. */
  description: string;
  /** Path of the current page, e.g. "/iuen". Used for canonical + og:url. */
  path: string;
  /** Optional override for the social-share image. Defaults to the site's
   *  Open Graph image at /opengraph.jpg. Pass an absolute URL or a path
   *  starting with "/". */
  image?: string;
  /** Optional og:type override. Defaults to "website"; pass "article" for
   *  news posts, "event" for event pages, etc. */
  type?: "website" | "article" | "event";
  /** Pass additional <script type="application/ld+json"> structured-data
   *  payloads (BreadcrumbList, Article, Event, etc.) to render in <head>. */
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  /** Set true on legal/utility pages we'd rather not have indexed. Off
   *  by default. */
  noindex?: boolean;
}

/**
 * Per-page SEO controls. Each page should render exactly one <SEO />.
 *
 * Why this lives in its own component:
 * - Centralizes the URL/site-name conventions so we don't typo them per page.
 * - Lets us swap implementations later (e.g. drop helmet for React 19 native
 *   metadata) without touching every page.
 * - Pre-rendering at build time captures the rendered <head> output so social
 *   crawlers (FB, Twitter, LinkedIn, Slack, Discord) see the correct preview
 *   for every route, not just the homepage.
 */
export function SEO({
  title,
  description,
  path,
  image,
  type = "website",
  jsonLd,
  noindex = false,
}: SEOProps) {
  const fullTitle = `${title} — ${SITE_NAME}`;
  const canonical = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
  const ogImage = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image.startsWith("/") ? image : `/${image}`}`
    : DEFAULT_OG_IMAGE;

  const jsonLdEntries = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@EsportsIndiana" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLdEntries.map((entry, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}

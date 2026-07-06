import { Helmet } from "react-helmet-async";

const SITE_URL = "https://indianaesportsnetwork.org";
const SITE_NAME = "Indiana Esports Network";
const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article" | "event";
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  noindex?: boolean;
}

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

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

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

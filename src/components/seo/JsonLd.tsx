import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/seo";

/** Organization + WebSite structured data, emitted once site-wide from the root
 *  layout. Helps search engines understand the brand entity and sitelinks. Plain
 *  <script type="application/ld+json"> — no client JS, safe in a Server Component. */
export default function JsonLd() {
  const graph = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logos/souvenir-logo.svg`,
      description: SITE_DESCRIPTION,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];

  return (
    <script
      type="application/ld+json"
      // Static, server-rendered JSON — no user input, so this is safe.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}

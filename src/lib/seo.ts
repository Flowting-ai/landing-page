import type { Metadata } from "next";

/** Canonical production origin (matches the GA4 stream + Vercel domain). No
 *  trailing slash. Override per-environment with NEXT_PUBLIC_SITE_URL if needed. */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.getsouvenir.com"
).replace(/\/$/, "");

export const SITE_NAME = "Souvenir";

/** Default sharing copy — used when a page doesn't override it. */
export const SITE_TAGLINE = "Your company's AI brain, in Slack";
export const SITE_DESCRIPTION =
  "Souvenir is an AI workforce that lives where your team works. Agents that remember your context, run your workflows, and connect every tool you use.";

/** Build a page's Metadata with a self-referencing canonical URL plus Open Graph
 *  and Twitter cards inherited from the root defaults. Pass the route `path`
 *  (leading slash, no origin) so the canonical resolves against SITE_URL.
 *  `title` should be the page-specific part — the brand suffix (" — Souvenir")
 *  is appended automatically if not already present, matching the site's
 *  self-contained title convention. Set `noindex` for test/duplicate routes. */
export function pageMeta({
  title,
  description,
  path,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: { title: fullTitle, description },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
  };
}

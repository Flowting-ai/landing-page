---
name: seo
description: SEO + indexing rules for the Souvenir marketing site. Apply whenever creating a new page/route, editing page metadata, adding routes to the IA, or touching titles, descriptions, sharing/OG, sitemap, robots, canonical URLs, or structured data. Ensures every page is correctly indexed and shareable.
---

# SEO — Souvenir marketing site

These are **rules, not suggestions**. The goal is clean indexing + good link/social previews
without polluting the index with duplicates or test routes. Infra lives in `src/lib/seo.ts`,
`src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/opengraph-image.tsx`,
`src/components/seo/JsonLd.tsx`, and the defaults in `src/app/layout.tsx`.

## Hard rules (every new page)

1. **Every indexable page exports `metadata`** with a UNIQUE `title` and `description`. Never let a
   page fall back to the root default. Use the helper:
   ```ts
   import { pageMeta } from "@/lib/seo";
   export const metadata = pageMeta({
     title: "Brain & Automation",          // " — Souvenir" is appended automatically
     description: "One clear sentence, ~120–160 chars, human, no keyword stuffing.",
     path: "/product/brain",               // self-referencing canonical
   });
   ```
   - **Self-contained titles, no template.** `pageMeta` appends ` — Souvenir` if the brand isn't
     already in the title (the site convention). Don't write `"Brain · Souvenir"` yourself.
   - Titles ≤ ~60 chars (incl. ` — Souvenir`); descriptions ≤ ~160 chars.
2. **Add the route to `src/app/sitemap.ts`** (static export = manual list). Pick a sensible
   `priority` (home 1.0, product 0.9, solutions/pricing 0.8, secondary 0.6, legal 0.3).
3. **Canonical is mandatory and self-referencing** — `pageMeta` sets it from `path`. One canonical
   URL per piece of content; never point two routes at the same content without a canonical.
4. **`metadataBase` is set once** in the root layout (`https://www.getsouvenir.com`). All OG/canonical
   URLs resolve against it — keep relative paths in page metadata, never hardcode the origin.

## Noindex these (keep them out of the index)

- A/B experiment routes (`/v/*`) — handled by `src/app/v/layout.tsx`.
- Legacy / superseded pages (e.g. `home-v1`) — `robots: { index: false, follow: false }`.
- Pure redirects (e.g. `/solutions/personal` → `/individuals`) — do NOT add to the sitemap.
- Anything duplicate or pre-launch: `pageMeta({ …, noindex: true })`.
- Also list disallowed path prefixes in `src/app/robots.ts`.

## Sharing / Open Graph

- Root layout supplies default `openGraph` + `twitter` (`summary_large_image`). Pages inherit and
  override `title`/`description` via `pageMeta`.
- The site-wide share image is generated at build by `src/app/opengraph-image.tsx`
  (1200×630). It is **brand-by-color** (cream `#F7F2ED` / ink `#26211E` / dusty-mauve `#674F68`) —
  obey `souvenir-taste`: no banned gradients, no coral. A page can add its own `opengraph-image`.

## Structured data

- `JsonLd.tsx` emits Organization + WebSite once site-wide. Add page-type schema (e.g. `Product`,
  `FAQPage`, `BreadcrumbList`) only when the page genuinely is that type, and keep it accurate —
  Google penalises mismatched/spammy structured data.

## Conversion / analytics note

- SEO and analytics are separate: indexing here, GA4 events in `docs/analytics-events.md`. Don't
  conflate them, but a new high-intent page usually wants both a sitemap entry AND a CTA event.

## Verify before done

- `next build`, then confirm in `out/`: `sitemap.xml` lists exactly the live routes (no `/v/*`,
  no `home-v1`), `robots.txt` points at the sitemap, the new page's `<title>`/`<meta description>`/
  `<link rel="canonical">`/`og:*` are present and correct, and `opengraph-image*.png` exists.
- No two pages share a title or canonical. No console/metadata warnings in the build.

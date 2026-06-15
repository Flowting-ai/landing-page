# Souvenir Website — Systems & GEO Roadmap

Research synthesis (2026-06-09). What a competitive AI-product marketing site needs,
prioritized for a seed-stage startup. Sources cited inline.

## The headline insight
For an AI-orchestration / "agents in Slack" product, the moves that get you cited when
someone asks an LLM *"best AI orchestration tool"* are: **(a) Slack-integration +
security/trust pages, (b) "X vs Y" comparison pages, (c) stat- & quote-dense,
answer-first content with FAQPage schema, (d) Reddit/community presence.** Classic SEO
still matters, but GEO (Generative Engine Optimization) is the new high-leverage layer.

## GEO — what actually works in 2026
- **Add statistics, quotations, citations** to content. Princeton GEO study lifts:
  quotes +41%, stats +32%, citations +30% AI-answer visibility. *(directional — restated by secondary sources)*
- **Answer-first**: answer the query in the first 60–120 words (~44% of AI citations come from the first third of a page).
- **Freshness**: content updated <30 days reportedly gets ~3.2× more citations (Perplexity esp.).
- **Per-engine reality**: ChatGPT → Wikipedia-heavy; Perplexity → Reddit-heavy (~47%) + recency; Google AI Overviews → already-ranking + E-E-A-T + structured data. Only ~11% domain overlap — optimize per engine.
- **FAQPage JSON-LD** = highest-impact schema for GEO.
- **Third-party mentions beat backlinks ~3:1** for AI visibility. **Reddit ~5× G2** for B2B SaaS unbranded queries.
- **llms.txt verdict: ship it as a cheap dev-utility checkbox, NOT a marketing strategy.** ~10% adoption, no major LLM vendor reads it in production (Google confirmed it won't). BUT genuinely useful for coding agents (Cursor/Claude Code/Copilot) consuming our API/docs — relevant since Souvenir is dev-adjacent.
- **Measurement**: Otterly.ai (~$29/mo) is the right seed-stage tool to track "are we cited." Profound = enterprise, later.

## What every serious AI product site has (OpenAI/Anthropic/ElevenLabs/Cursor/Linear/Vercel)
Home · Product/Features · **Pricing** (usage-based) · **Docs** (first-class) · **Changelog** (expected of dev tools) · Blog/News · Customers/Case studies · **Security/Trust** (SOC 2 — table stakes for Slack/enterprise) · Enterprise · Careers · **Integrations** · increasingly **"vs" comparison pages**.

## Technical stack (Next.js, 2026 best practice)
Lean on native App Router APIs; minimal libraries.
- **Metadata**: `generateMetadata` per route + `metadataBase`. Native OG/Twitter.
- **Sitemap/robots**: file-based `sitemap.ts` + `robots.ts`.
- **Dynamic OG images**: `opengraph-image.tsx` + `ImageResponse` (no external service).
- **JSON-LD**: `schema-dts` (Google, typed) → Organization, SoftwareApplication, FAQPage.
- **CWV targets**: LCP <2.5s, INP <200ms (most-failed; now primary signal), CLS <0.1, mobile/p75.

## Content management (eng-free updates)
- ⚠️ **Contentlayer is abandoned** — don't use it.
- **Recommended: Keystatic** (git-based, `/keystatic` UI, content as MDX in repo, team edits via GitHub PRs, free) for marketing pages. **Sanity** if non-technical marketers need a fully hosted editor. **Fumadocs/MDX** for docs.

## Analytics & conversion
**PostHog** (product analytics + funnels + replay + flags; free to 1M events, apply for $50k startup credits) + **Vercel Analytics** (zero-config traffic) + **Cal.com** (demo booking). Skip GA4 unless running Google Ads. Instrument intent events: CTA click, started/booked demo, viewed pricing, lead submit. Track LLM referral sources via UTM/referrer.

## Verified GitHub tools
- `google/schema-dts`, `google/react-schemaorg` — typed JSON-LD
- `garmeeh/next-seo`, `next-sitemap` — SEO helpers
- `thedaviddias/llms-txt-hub`, `TurboDocx/next-plugin-llms` — llms.txt generation
- `vercel/nextjs-saas-starter`, `ixartz/SaaS-Boilerplate` — starters (reference, not base)

## PRIORITIZED ROADMAP
**Tier 0 — at launch:** native SEO foundation (metadata/sitemap/robots/OG) · core pages incl. Security/Trust + Integrations + Changelog · JSON-LD (Org/SoftwareApplication/FAQPage) · answer-first stat-dense copy + FAQ · PostHog + Vercel Analytics + Cal.com w/ events · CWV green.
**Tier 1 — 30–60 days:** "vs" comparison pages · Reddit/community seeding · customers/case studies · Keystatic CMS · Otterly.ai monitoring.
**Tier 2 — later:** llms.txt (dev-utility) · Enterprise page · Fumadocs · G2 presence · Profound.

*Caveats: competitor nav lists + some GEO stats are from search summaries of secondary sources; verify exact site structures and the Princeton percentages before quoting externally.*

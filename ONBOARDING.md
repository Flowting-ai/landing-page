# Souvenir Marketing Website — Onboarding

> **Treat this repo as a skeleton.** Every page is built and renders, but several areas are
> intentionally placeholder (see "Skeleton status"). The goal of this doc is to give you the
> context you can't infer from the code: the design system rules, the non-obvious gotchas, the
> Figma source-of-truth, and what's deliberately unfinished.

## What this is
Marketing site for **Souvenir** — a unified AI workspace / "AI agent orchestration + company brain
in Slack" product (getsouvenir.com). The site is built in a design language **derived from the real
product design system (Kaya Design System / "KDS")** — same tokens, fonts, components — recomposed
for marketing. Positioning is **agents / Brain / Slack-led (B2B)** with **Personal AI OS (B2C)**
secondary. The home page (`/`) is a B2C/B2B router ("Two ways to use Souvenir").

## Tech stack
- **Next.js (App Router) + React + TypeScript + Tailwind v4 + GSAP + Framer Motion**
- Run dev: `npm install` then `npx next dev -p 4321` → http://localhost:4321
- **Private dependency gotcha:** `@strange-huge/icons` is installed from a **private GitHub repo**
  pinned to a commit (`git+https://github.com/strange-rock/strange-huge-icons.git#<sha>`). `npm
  install` will FAIL without access to that repo — make sure the cloud environment has GitHub
  credentials for it, or vendor the package.

## Architecture
- Route group **`src/app/(site)/`** has the shared `layout.tsx` = `<SiteNav/> + children +
  <SiteFooter/>`. Every page lives under `(site)/` so nav/footer are identical everywhere. **Never
  add per-page nav/footer.**
- Pages are thin: a `page.tsx` composes section components from `src/components/<Area>Page/*`.
- **Reusable components to prefer before building new ones:**
  - `components/sections/SectionHeading`, `FinalCTABand` (dark closing CTA + connector band; props
    `title, body, primary?, secondary?`)
  - `components/AIAgentsPage/FeatureSplit` (copy+visual split; props incl. `flip`, optional `bullets`)
  - `components/ChatspacePage/FeaturePair` (2-up feature cards)
  - `components/SlackPage/TriSection` (eyebrow/title/lead + 3 cards, optional `mono` title)
  - `components/CompanyBrainPage/Comparison` (Without/With table; prop-driven `eyebrow?/title?/intro/
    without/withSouvenir`)
  - `components/LegalPage/LegalPage` + `data.ts` (legal template; add a doc to `data.ts` + a thin route)
  - `components/showcase/ShowcaseFrame` (the product "window" frame for visuals)
  - `components/ui/{Container, Reveal, ClientOnly}` and the vendored KDS components in `components/`
    (Avatar, Badge, Chip, Button, MessageBubble, StatCard, UsageBarChart, etc.)

## Design system rules (READ — these are the silent footguns)
- **Tokens** are imported in `src/app/globals.css` from `src/styles/tokens/*`. Use semantic
  utilities (`text-ink`, `text-ink-muted`, `bg-surface`, `border-line`, `bg-dark-bg`, etc.) and the
  type-scale vars (`text-[length:var(--text-h2)]`, `--text-display`, `--text-lead`, …).
- Fonts: **Besley** (display, `font-display`) + **Geist** (body, `font-sans`).
- Depth = KDS emboss: outer shadow + inner-highlight overlay span + squircle corners. Copy the
  pattern from any existing card (`boxShadow: "var(--shadow-sm)"` + an absolute inset span with
  `var(--shadow-inner)`).
- **Tailwind v4 gotcha:** `text-[var(--someColor)]` is ambiguous (color vs length) and gets silently
  dropped → invisible text. Use a semantic utility (`text-dark-ink`) or `text-[color:var(--x)]`.
  Font-size vars like `text-[length:var(--text-h2)]` are fine.
- **`ConnectorIcon` (from `@strange-huge/icons/connectors`) — only these IDs render:**
  `slack, gmail, notion, stripe, github, linear, hubspot, figma`. **`shopify`, `google-drive`,
  `drive`, `klaviyo` render BLANK at every size — do not use them.**
- **`MessageBubble` causes SSR hydration mismatch** (it computes inline styles on the client). Any
  visual containing it (e.g. `ChatPinVisual`, Brain's `SlackPlanVisual`) must be wrapped in
  `<ClientOnly minHeight={…}>` (`components/ui/ClientOnly.tsx`).
- **`UsageBarChart` (recharts)** must be mount-gated (render after a `requestAnimationFrame`) or it
  logs a 0-size dev warning.
- **Mobile overflow:** CSS grid items default to `min-width:auto` → use `min-w-0` + `minmax(0,…)` to
  stop horizontal overflow. Wide tables go in an `overflow-x-auto` wrapper with a `min-w-[…]` table.

## Design source (Figma)
- File: **Kaya Design System**, fileKey `VhtVr4Hhje26XKwc0E5uNP`.
- Build pages from real Figma nodes (verbatim copy + composition). To read a node you need the
  **claude.ai Figma connector** (`get_screenshot` on `fileKey` + `nodeId`) — it has been flaky; the
  reliable fallback is to **export the frame as a PNG and build from the image** (the token system
  covers exact values).
- The full **node → route map and per-page section breakdowns live in `SITE-MAP.md`.** Read it.

## Per-page build recipe (the workflow that produced this repo)
1. Read the Figma node (screenshot → slice with PIL to read copy) or a PNG export.
2. Log section order + verbatim copy into `SITE-MAP.md`.
3. Build `src/components/<Name>Page/*`, reusing the components above; real product components, not
   hand-drawn mocks.
4. Add the route under `src/app/(site)/…/page.tsx` with `Metadata`.
5. Verify: run the app, screenshot full-page at 1440 + 390 with **reduced-motion** (so GSAP reveals
   render), confirm `document.documentElement.scrollWidth <= viewport` at 390/768/1024, and check for
   console errors. (The local Playwright harness at `~/.shot-harness` does NOT travel with this repo —
   set up your own screenshot/verify step in the cloud.)

## Skeleton status — what's done vs. deliberately unfinished
**Built (15 routes, all 200 / no overflow / no console errors):** `/` (B2C/B2B landing),
`/individuals`, `/product/{ai-assistants,brain,slack,chatspace}`, `/solutions/company-brain`
(`/solutions/personal` redirects → `/individuals`), `/pricing`, `/about` (Contact), `/integrations`,
`/guide`, `/legal/{terms,acceptable-use,privacy,cookies,copyright}`, plus `/home-v1` (the previous
home, preserved).

**TODO / placeholder (the "skeleton" parts):**
- **Legal copy is scaffolded.** Section structure is correct; most bodies say "Final reviewed copy
  for this section will be published here." → paste the firm-reviewed legal text into
  `src/components/LegalPage/data.ts`.
- **Guide (`/guide`) non-lead sections** have concise blurbs written from product knowledge — proof
  against the intended docs copy.
- **Contact form** (`/about`) submits via `mailto:` only — wire to Formspree/an API for production.
- **Animations:** deferred Phase 2. Use **Framer Motion, not Lottie** (the old site's ~14MB Lottie
  is what we're avoiding). One purposeful infographic per section, on top of the locked structure.
- **SEO not done:** no sitemap/robots/JSON-LD/OG yet. See `WEBSITE-SYSTEMS.md` for the GEO/SEO plan.
- **Not deployed.** Target: Vercel.
- **Missing pages:** a real **Blogs** page (footer link is `#`); a real **About** page (currently
  `/about` is the Contact page — rename to `/contact` + add About if desired).
- **Dead code:** old pre-`(site)` component dirs (`components/Common/`, `AboutPage/`, `FeaturesPage/`,
  `GetStartedPage/`, `HomePage/` except where `/home-v1` uses it) are unused — safe to delete in a
  cleanup pass. Nothing imports them.

## Environment & external sources (machine-state — mostly NOT in this repo)
> The durable home for the local paths + run/verify setup a fresh session can't infer. A section
> kickoff can just say "read ONBOARDING.md" instead of re-pasting these. (These are local to Chai's
> machine — they may be absent in a cloud/CI run; fall back to the in-repo tokens + vendored copies.)
- **Dev server:** `npx next dev -p 4321` — ALWAYS pass `-p 4321` (the `dev` script has no port flag and
  defaults to 3000; the screenshot scripts assume 4321). Stuck CSS/build error after a *correct* fix =
  Turbopack cache → kill dev, `rm -rf .next`, restart.
- **Verify / screenshots:** repo scripts `node scripts/shot.mjs <route> <label> [768 1024]` (reduced-
  motion full-page) and the hero-specific `scripts/hero/{audit,live,poster}.mjs`; plus the `design-audit`
  skill. They borrow the Playwright install at **`~/.shot-harness`** (NOT in this repo — set up your own
  in the cloud).
- **Kaya Design System source = `~/may-day`** (the `kaya-design-system` repo). THE source for
  re-vendoring or checking any KDS component. Storybook: `npm run storybook` → **:6006**; a prebuilt
  `~/may-day/storybook-static` can be served with `python3 -m http.server` to screenshot real stories.
  **Extend Kaya, never fork** — strip/restyle marketing tweaks via scoped CSS, don't edit vendored copies.
- **Icons = `@strange-huge/icons`** (private repo — see Tech stack gotcha). Use ONLY via the `size`
  prop, never inline SVG / CSS-scale. Valid `ConnectorIcon` IDs are listed in Design-system rules above.
  LLM/model logos: `@strange-huge/icons/llm` → `<LlmIcon id="Claude" variant="color" />` (valid ids in
  `LLM_COLOR`, e.g. Claude, OpenAI, Anthropic, Gemini). Full icon source: `~/Downloads/strange-huge-icons-main`.
- **Live product front-end:** `~/Downloads/front-end-ds-dev (2).zip` — real product screens, if you need
  a surface not in `~/may-day`. App reference screenshots of real pin/composer behaviour:
  `~/Desktop/Screenshot 2026-06-16 at 11.56–57.* PM.png`.

## Companion docs in this repo
- **`SITE-MAP.md`** — official nav→route map + per-page section/copy breakdowns + build status.
- **`WEBSITE-SYSTEMS.md`** — SEO / GEO / CMS / analytics roadmap.
- **`docs/STORY-SPINE.md`** — the Home narrative arc + per-section beats (the visual-director seed).
- **`docs/HERO_LOOP_HANDOFF.md`** — the hero product-window loop: built-state, design, what remains.

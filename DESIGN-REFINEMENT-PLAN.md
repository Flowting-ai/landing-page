# Design Refinement Plan — make the Souvenir site exceptional

> ⚠️ **SUPERSEDED (Jun 15) by `docs/STRATEGY.md`** — the merged single source of truth (this plan +
> the cloud `souvenir-website-plan.md` + the locked decisions: mauve accent, 50/50 positioning,
> nostalgia spine). Read `docs/STRATEGY.md` first; this file is kept for history only.

> **Starting point:** the site is content-complete (16 real pages, consistent nav/footer, on-brand,
> no overflow, no console errors) but it's a *skeleton* — "correct and consistent," not yet
> "best-in-class." This plan takes it to the bar of ElevenLabs / Linear / Vercel.
> **Run this in Claude Code on `~/souvenir-website`** (the screenshot harness at `~/.shot-harness`
> is essential for design iteration). Read `ONBOARDING.md` + `SITE-MAP.md` first; the build history
> is in the `project_website_build.md` memory.

## How to start the new chat
First message:
> "Read the `project_website_build.md` memory, then `ONBOARDING.md` and `DESIGN-REFINEMENT-PLAN.md`
> in `~/souvenir-website`. We're starting the design-refinement phase. Begin with Phase 0."

## Quality bar / north star
Premium, calm, editorial. Besley display + Geist body, warm-neutral KDS palette, embossed depth,
squircle corners. Every screen should feel intentional — type rhythm, spacing, motion, and visual
craft at the level of the best AI-product sites. Reference feel: ElevenLabs (surface nav, richness),
Linear (precision), Vercel (restraint).

## Phases (sequence matters)

### Phase 0 — Foundation cleanup (fast; unblocks perf + clarity)
- Delete the **154 MB of legacy media** in `public/` (the 74 MB `.mov`, old persona/About SVGs, mp4s) —
  none of it is referenced by the new build.
- Delete **dead component dirs**: `Common, AboutPage, FeaturesPage, GetStartedPage, variants`, and
  `HomePage` once `/home-v1` is retired (decide: keep `/home-v1` or drop it).
- Confirm **tokens are the single source of truth** — grep for ad-hoc hex/px that should be vars.
- Set up `next/image`, font `display: swap`, and a repo-local `scripts/shot.mjs` so verification
  travels with the code.

### Phase 1 — Design QA audit (the honest baseline)
- Screenshot all 16 pages at 1440 / 768 / 390 (reduced-motion). Build a visual evidence board.
- Log every **inconsistency**: section vertical padding drift, type-scale misuse, shadow/emboss
  variance, eyebrow/heading spacing, button sizing, container widths, alignment. Fix drift to a
  documented spacing + type system before adding polish.

### Phase 2 — Typography & layout craft
- Tune the type scale and **vertical rhythm**; cap measure (~60–70ch) on body; balance headings
  (`text-balance`/`text-pretty`); optical spacing for eyebrows/kickers. Lock a spacing scale.

### Phase 3 — Visual elevation (biggest lever)
- Push the section/product visuals from "good KDS recreations" to **premium**: richer composition,
  real-looking data, layered depth, considered use of the coral accent, dot-grid/glow refinement.
- Replace placeholders: the Guide "Coming soon" video tiles, any monogram stand-ins, the
  `mailto` contact form (wire Formspree/API).

### Phase 4 — Motion pass (Framer Motion — NOT Lottie)
- Purposeful scroll-reveals + staggered entrances (replace/augment the GSAP reveals).
- **One signature infographic animation per key section**: chaos→order (Breaking), agent-handoff
  flow (Brain/Crew), connector-constellation pulse, model auto-route. Light, crisp, themeable.
- **Reduced-motion safe** everywhere. No heavy media (the old site's ~14 MB Lottie is the anti-goal).

### Phase 5 — Responsive + accessibility + performance
- True mobile-first polish (beyond "no overflow"): tap targets, stacking, nav sheet refinement.
- Focus-visible states, AA contrast, semantic landmarks, alt text, keyboard nav.
- LCP/CLS, image optimization, Lighthouse ≥ 95.

### Phase 6 — Dark mode (revisit)
- Was deferred because KDS had no dark tokens. Define dark token set, then theme the marketing layer.

### Phase 7 — Content & assets finalize
- Paste firm-reviewed **legal copy** into `src/components/LegalPage/data.ts`.
- Finalize Guide copy. Add real **OG images** per page. Add **Blogs** + a real **About** page if wanted
  (currently `/about` is Contact).

### Phase 8 — SEO + deploy
- Tier-0 SEO (sitemap, robots, JSON-LD, metadata, OG) per `WEBSITE-SYSTEMS.md`. Deploy to Vercel.

## Verification standard (every change)
Screenshot full-page at 1440 + 390 with reduced-motion; confirm `scrollWidth <= viewport` at
390/768/1024; zero console errors; spot Lighthouse after Phase 5.

## Known gotchas to carry forward (full list in ONBOARDING.md)
- `ConnectorIcon` valid IDs only: `slack, gmail, notion, stripe, github, linear, hubspot, figma`.
- `MessageBubble` → wrap in `<ClientOnly>` (hydration). `UsageBarChart` → mount-gate.
- Tailwind v4: `text-[var(--color)]` drops silently → use semantic util or `text-[color:var()]`.
- Private `@strange-huge/icons` dep (GitHub access required for `npm install`).

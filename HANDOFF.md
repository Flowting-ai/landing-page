# SOUVENIR WEBSITE — COMPLETE HANDOFF

_Consolidated record of the build. Reading order: roadmap → onboarding → site map → systems → foundations._
_For continuing in Claude Code here, you don't strictly need this — persistent memory auto-loads. This is the portable/durable copy._

> ⚠️ **PRE-REFINEMENT SNAPSHOT (predates the Jun 15 decisions).** Does NOT include the mauve accent,
> the 50/50 positioning, or the nostalgia/"memory" philosophy. Current truth = `docs/STRATEGY.md` +
> `docs/LEARNINGS.md` + the `souvenir-taste` skill. Kept as build history.


---

# ════════ DESIGN-REFINEMENT-PLAN.md ════════

# Design Refinement Plan — make the Souvenir site exceptional

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


---

# ════════ ONBOARDING.md ════════

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

## Companion docs in this repo
- **`SITE-MAP.md`** — official nav→route map + per-page section/copy breakdowns + build status.
- **`WEBSITE-SYSTEMS.md`** — SEO / GEO / CMS / analytics roadmap.


---

# ════════ SITE-MAP.md ════════

# Souvenir Website — Site Map

Source of truth for pages, routes, and navigation. Derived from the Figma canvas
(file `VhtVr4Hhje26XKwc0E5uNP`, canvas node `4457-5987`) + confirmed nav `4818-11839`.
Grows as each page is mapped one-by-one into the per-page sections below.

## Navigation (top-level)
Bar: Logo · **Product ▾** · **Solution ▾** · **Pricing** · **About** · Sign in · Get started for free

### Product ▾ (4 feature pages)
| Item | Route | Figma node | One-liner (first pass) |
|---|---|---|---|
| AI Assistants | `/product/ai-assistants` | `4670:36897` | A coordinated team of AI assistants for every task. |
| Brain & Automation | `/product/brain` | `4676:11733` | Goal in, answer out — automations that run on their own. |
| Slack Manager | `/product/slack` | `4676:14065` | Delegate to your agents from inside Slack. |
| Unified Chatspace | `/product/chatspace` | `4676:12458` | Every frontier model, one prompt. |

### Solution ▾ (2 audiences)
| Item | Route | Figma node | One-liner (first pass) |
|---|---|---|---|
| Personal AI OS (For Individuals) | `/solutions/personal` | `4676:15506` | Your personal AI operating system. |
| Company Brain (For Teams) | `/solutions/company-brain` | `4676:14608` | One shared brain for your whole company. |

### Direct links
| Item | Route | Figma node |
|---|---|---|
| Pricing | `/pricing` | `4676:16572` |
| About | `/about` | _(no dedicated node yet; Contact = `4676:17044`)_ |

## Pages — build status
- [x] **Home** (`/`) — BUILT. node `4457:5995`. Sections: Hero(tabbed showcase) · Problem · Stats · Context · Pillars · Comparison · FinalCTA · Footer.
- [x] **AI Assistants** (`/product/ai-assistants`) — BUILT. node `4670:36897`. 7 sections (see per-page map below).
- [x] **Brain & Automation** (`/product/brain`) — BUILT from REAL node `4676:11733` (verbatim copy, Jun 12). 11 sections (verified section-by-section against current node Jun 12): Hero "From Intention to Completed. Automate all your manual work." (OrchestrationMap) · Stats(∞ unlimited / 2 run modes / 4 model labs) · FeatureSplit "A goal in. An answer out. Everything in between, automatic." (BrainRunPanel dark) · FeatureSplit "Every run, a little smarter." (LearningTimeline) · ConnectorBand 250+ constellation (app-icon row + center node + 13 capability chips) · FeatureSplit+bullets "Coordinate multi-agent workflows." (AgentChainVisual w/ Done/Running/Queued + @handles) · FeatureSplit+bullets "Build & run Automations from Slack." (SlackPlanVisual) · RunModes "Run it once. Or run it forever." · BrainSteps "Build it in Slack. Run it from Slack. Get results back in Slack." (3 dark cards + caption) · FeatureSplit "Every workflow you've deployed. One dashboard." (ScheduleDashboard) · FinalCTA "Tell it the goal. It handles the rest." Note: extended shared FeatureSplit with optional `bullets` prop.
- [x] **Slack Manager** (`/product/slack`) — BUILT from real node `4676:14065` (Jun 13). Hero(text-left + SlackWorkforceMap) · FeatureSplit "What it looks like in your Slack." (SlackConvoPanel dark) · CommandGrid "No syntax to learn." (6 @Souvenir example cards) · TriSection "Every channel. Every DM." (Public/Private/DM) · TriSection "Slack Master is the front door." (The Brain/Specialist Agents/Chat & Saved work) · FinalCTA "Hire your first AI co-worker." Components in `src/components/SlackPage/`. New reusable: `TriSection` (eyebrow/title/lead + 3 cards w/ optional mono title).
- [x] **Unified Chatspace** (`/product/chatspace`) — BUILT. node `4676:12458` (see per-page map below).
- [x] **Personal AI OS** (`/solutions/personal`) — BUILT from real node `4676:15506` (Jun 13). Hero "Your personal AI operating system." (PersonalHeroVisual: 900+ Connectors constellation) · Comparison "Why Souvenir?" (reused generalized Comparison, Without/With ×5) · "Your knowledge, organized." (PinsBoard: 4 folders ×3 pins) · "Personal team of AI Agents" (AgentRosterGrid: 6 agent cards w/ quotes) · FeatureSplit "Set it once. Runs forever." (AutomationCard) · FeatureSplit flip "Souvenir picks. You don't think about it." (ModelPickerVisual: Muse/Advanced + Top Models) · FinalCTA "Stop re-teaching AI." Components in `src/components/PersonalPage/`. NOTE: Content Writer agent quote was an off-brand placeholder in Figma (espresso) — replaced with a fitting on-brand line; verify w/ Chai. ⚠️ Generalized `Comparison` (now takes eyebrow?/title?/intro/without/withSouvenir props) — Company Brain page updated to pass its data.
- [x] **Company Brain** (`/solutions/company-brain`) — BUILT from real node `4676:14608` (Jun 13). Hero "The autonomous company brain." · ConnectorBand(250+ constellation, reused from BrainPage) · BreakingStats "The way work happens is breaking." (71%/8hrs/2.5×, w/ sources) · BrainSteps "Build it in Slack…" (reused) · Comparison Without/With Souvenir (2 cols, 5 items each) · CrewSection "One manager. A coordinated crew." (CrewVisual: manager + 4 agents w/ run counts + flow) · NativeIntegrations "Plugs into every app you already use." (250+ + IntegrationsGrid) · FinalCTA "One brain. One workforce. One operational layer." Components in `src/components/CompanyBrainPage/`.
- [x] **Pricing** (`/pricing`) — BUILT from real node `4676:16572` (Jun 13). PricingHero "Pay for what you use. Nothing else." · PricingTable (client, Monthly/Yearly toggle — yearly = 25% off; 3 plans: Individual $12 / Team $125 dark-highlighted "Most popular" / Custom; each with credit slider + feature groups) · ReassuranceRow (No card / Top-up / Cancel / Roll over) · TopUps (4 packs) · PricingFAQ (8 Q&A) · FinalCTA "1,000 credits, on us." Components in `src/components/PricingPage/` (PricingHero, PricingTable, PricingExtras). ⚠️ Removed conflicting legacy `src/app/pricing`.
- [x] **Contact** (`/about`) — BUILT from real node `4676:17044` (Jun 13). 2-col: left = eyebrow "Company · Contact" + "Get in touch." + "We respond within 1 business day." + email card (info@getsouvenir.com, mailto link); right = ContactForm (client, Name/Email/Message → submits via `mailto:info@getsouvenir.com`). Components: `src/components/ContactPage/ContactForm.tsx`. ⚠️ ROUTED AT `/about` (nav "About" link points there; node is a Contact page). Removed conflicting legacy `src/app/about`. Consider: rename to `/contact` + add real About, or leave as-is. NOTE: form is mailto-based (no backend) — wire to Formspree/API for production.

> Per-page detail (section order + verbatim copy) gets appended below as Chai sends each
> page's Figma link one at a time.

---
## Per-page maps

### AI Assistants  (`/product/ai-assistants`, Figma `4670:36897`)
Nav = canonical shared nav (confirms consistency goal). Sections top→bottom:
1. **Hero** — eyebrow "Multi-agent workforce" · H1 "The future of Agentic AI: A team of specialized agents that know your context and do your work." · sub "Souvenir AI Agents are specialized digital coworkers connected to all your apps, grounded in your shared memory, and orchestrated to execute all of your busywork." · CTAs Get started for free + Book a Demo · visual = Persona dashboard (Sidebar + persona-card grid).
2. **"Three things every Souvenir agent does well"** (eyebrow "What's a Souvenir Agent") — 3 cards: #1 "Each Assistant has a job description" (one role, one job) · #2 "Your context travels with every task" (memory out of the box) · #3 "They read and write in your stack" (connectors).
3. **Stats** — ∞ "Build unlimited AI Assistants. One workforce, every role you need." · 250+ "Native connectors to the tools you already use." (Shopify·Klaviyo·Drive·Gmail·Notion·Slack +244) · 4 "Different pro models automatically chosen for each task based on expertise." (OpenAI·Anthropic·Google Gemini·Mistral).
4. **"The best model for the job. Every time."** (eyebrow "Intelligent context layer") — copy + ModelSelector/persona model visual.
5. **"Share Assistants with your team. Track who uses what."** (eyebrow "Workspace controls") — copy + command-center usage visual.
6. **"Or build your own — no code, no prompt engineering."** (eyebrow "Beyond the library") — 6 pillars: 01 Start from a template or a blank slate · 02 Define the role. Pick the model. · 03 A name. An avatar. A personality. · 04 Feed it knowledge it should remember. · 05 Pick the apps it can reach. · 06 Decide who else gets to use it.
7. **Final CTA** — "Hire your first Assistant. It's already trained." · "Pick a starting point. Connect your apps. Let your new workforce get to work." · Join Discord Community + Book a Demo · connector-icon band. Footer = shared.

### Unified Chatspace  (`/product/chatspace`, Figma `4676:12458`)
Nav = shared. Sections:
1. **Hero** — eyebrow "Solution · Unified Chatspace" · H1 "Every major AI model. One chat that remembers, researches, and compares." · sub "Souvenir's Chatspace routes your prompt to the best model, maintains context, and lets you save outputs as pins, organize them into folders, and easily share AI work with your team." · CTAs Get started for free + Book a Demo · visual = chat thread + Pinboard rail (MessageBubble + Pin cards).
2. **Stats** — 4 "Frontier model labs — auto-selected by intent." (OpenAI·Anthropic·Gemini·Mistral) · 3 "Compare Models side-by-side, same prompt. Pick the winner." (Compare·Cost·Speed·Output) · ∞ "Memory that compounds. AI work that is saved and carried forward." (Save·Organize·Share).
3. **"Three models. One prompt. You pick the winner."** (eyebrow "The routing algorithm") — copy + 3-column compare visual.
4. **"Reads your intent. Routes to the right model."** (eyebrow "The routing algorithm", flipped) — copy + Muse/Advanced model-selector visual.
5. Feature 2-up: **"Ask a real question. Get a researched answer."** (Research mode) + **"Save the line. Quote it later."** (Highlights).
6. Feature 2-up: **"Pull a specialist into the chat."** (@-mention agents) + **"Memory that lasts. Organized into folders."** (Pins/folders).
7. **Final CTA** — "Stop re-teaching AI. Start compounding your work." · "One workspace where your memory, Assistants, and chats live together — across every major AI model." · Join Discord + Book a Demo · connector band. Footer shared.


---

# ════════ WEBSITE-SYSTEMS.md ════════

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


---

# ════════ DESIGN-FOUNDATIONS.md ════════

# Souvenir Website — Design Foundations

The visual language for the website rebuild. Source of truth lives in code:
`src/app/globals.css` (tokens) + `src/components/ui/*` (primitives).

## Principle

ElevenLabs-grade restraint. One idea per section, one focal visual, generous
whitespace, purposeful motion only. The opposite of the old V1: no dense UI-card
collages, no fake looping animations, no heavy Lottie/video payload.

## Color (warm, restrained, colorblind-safe)

| Role | Token | Value |
|------|-------|-------|
| Page background | `--bg` | `#FAF8F5` |
| Surface / cards | `--surface` | `#FFFFFF` |
| Warm panel | `--surface-warm` | `#F3EDE4` |
| Primary ink | `--ink` | `#211C18` (warm near-black, never `#000`) |
| Muted ink | `--ink-muted` | `#6F665E` |
| Accent (coral) | `--accent` | `#E0613A` — primary action + links ONLY |
| Highlight (gold) | `--highlight` | `#C8932B` — stats/highlights, sparing |
| Dark section | `--dark-bg` | `#17120F` (warm charcoal) |

**Colorblind rule (Chai is red-green colorblind):** meaning is never carried by
color alone — buttons have shape + label + position; coral is decorative/CTA, not
a status signal. Focus ring is high-contrast ink, not a color.

## Type

- **Besley** (`font-display`) — all headings.
- **Geist** (`font-sans`) — body, UI, labels. (Inter dropped.)
- Fluid scale via `clamp()`: `--text-display` (44→72) · `h1` (32→48) · `h2`
  (24→36) · `h3` (20→24) · `lead` (18→22) · `body` 16 · `small` 14 · `micro` 13.

## Spacing · radius · elevation

- Spacing on a 4px grid. Section vertical rhythm: `--section-y` (72→128).
- Content width `--maxw` 1200 / wide 1440. Gutter `--gutter` (20→64 fluid).
- Radius: sm 8 · md 12 · lg 16 · xl 24 · 2xl 32 · pill.
- Shadow: warm-tinted, two-layer — `--shadow-sm/md/lg`.

## Motion

- One entrance primitive: `<Reveal>` — fade + 24px rise, once, `power3.out`.
- Hero intro: GSAP stagger (0.12s) on load.
- **Always** respects `prefers-reduced-motion` (renders static, no transform).
- No decorative/looping animation. No WebGL shader. No autoplay heavy media.

## Primitives

- `ui/Container` — centered column, standard gutter + max width.
- `ui/Button` — `primary` (coral) / `secondary` (outline) / `ghost`; `md` / `lg`.
- `ui/Reveal` — scroll-reveal wrapper (above).

## Salvage decisions (old repo)

Keep: Next 16 / React 19 / Tailwind v4 / TS stack, GSAP, Formspree, legal pages.
Delete: `Iridescence` shader, fake typewriter hero, animated rainbow borders,
heavy Lottie/video. Refactor: Navbar/Footer to new language.

## Preview

`npm run dev` → `/` (Home hero) and `/foundations` (this system, rendered).


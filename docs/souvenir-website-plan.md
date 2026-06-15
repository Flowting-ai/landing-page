# Souvenir Website — Full & Final Plan

The grounding doc for the rebuild. Drop this in the repo (e.g. `/docs/PLAN.md`) and let
Claude Code read it. It consolidates everything decided so far: the philosophy, the
design-system approach, the storytelling principles, the references, the motion rules, the
Claude Code operating model, and the phased steps.

Companion docs (already produced / to produce): `souvenir-learnings.md` (motion + taste +
design vocabulary distilled from the research) and the existing repo docs (`ONBOARDING.md`,
`SITE-MAP.md`, `DESIGN-FOUNDATIONS.md`, `WEBSITE-SYSTEMS.md`).

---

## 1. North-star philosophy (the spine, landing page → every section)

**Souvenir is the memory your work keeps.** The product is an intangible AI-orchestration
layer ("agents + Brain + Slack"). The site's entire job is to make that intangible thing
*feel* like a warm, tangible, kept object — and to do it with such craft that the packaging
itself is the proof. Three pillars carry every page and every section:

1. **Tell me what it is.** (clarity) — Lead with what the thing *is*, plainly. Creative copy
   that leaves the visitor unsure what you sell has failed, however clever. Simplicity is the
   hardest and most valuable move.
2. **Make me feel it.** (tactility + problem immersion) — Don't *describe* the problem;
   immerse the visitor in it, then resolve it. Make the intangible tangible through Kaya's
   physical, warm, embossed craft. The site should feel the way the product should feel.
3. **Keep it unmistakably ours.** (uniqueness as moat) — Kill the generic SaaS rhythm
   (hero → stat-trio → three feature-splits → comparison → CTA repeated on every page). Find
   the moves nobody else has. Craft is the defensibility; story is a shared belief that
   compounds.

### Intention → mechanism (the rules that encode the philosophy)

| Intention | Mechanism on the page |
|---|---|
| "This is a real, kept thing" | Kaya's embossed surfaces, warm-tinted shadows, squircle corners, press feedback (`scale 0.97`). Real weight. |
| "Memories accrue / are collected" | Content *assembles* into place (staggered reveals as if items placed), not just fades. Lean on the native Pin/Pinboard/keepsake motif. |
| "Nostalgia is unhurried" | Marketing motion is slower and more deliberate than the product UI — pacing *is* the feeling. No bounce (consistent with Kaya's rejected-spring decision). |
| "Make the intangible tangible" | One *abstracted* concept-visual per section (Antimetal's exploding menu bar, Linear's "hands of God"), NOT a dense product screenshot. Simplify, simplify, simplify. |
| "Immerse, don't explain" | Problem-first sections that make the chaos/busywork *felt* before the calm of Souvenir appears. |
| "A memory is precious" | Restraint: one idea per section, generous negative space, let Besley carry the emotion. |
| "Copy is a design job" | Spacing = pacing (a gap is a pause); line breaks = deliberate friction; sentence-level craft; tabular nums; no widows. |

### Two permanent constraints
- **Colorblind (red-green):** meaning is never carried by color alone — shape + label +
  position do the work; the accent is decorative/CTA, never a status signal; focus ring is
  ink, not color.
- **Brand coherence:** the marketing site extends Kaya's tokens; it does not fork them. The
  site and the product must read as one company.

---

## 2. Design-system approach — extend Kaya, don't build a new system

Kaya already has the hard part: a warm, analog, tactile identity (cream→espresso neutrals,
muted earthy accents, Besley slab serif + Geist, embossed shadows, squircle corners), a
3-tier token system (`primitives → aliases → semantic`), a shadcn 4 + Radix base, a
restrained documented motion language, and genuine AI-readiness (per-component specs +
`CLAUDE.md`). The marketing site already imports Kaya's real token files — keep that.

**Build a marketing LAYER on top of Kaya** (`apps/marketing` consuming Kaya as a package).
Use shadcn/Radix for interactive atoms; build the marketing-specific pieces above them. The
layer ADDS what a product system lacks:

- **Display/editorial type scale** above Kaya's 40px — fluid `clamp` to ~72–120px, set in
  Besley. (The skeleton already started this at 44→72; push the hero ceiling higher.)
- **Section & layout primitives** — `Section`, `Container`, `Hero`, `FeatureRow`, `Marquee`,
  editorial grid. (Several exist in the skeleton — `SectionHeading`, `FeatureSplit`,
  `TriSection`, `FinalCTABand`, `ShowcaseFrame` — audit and keep.)
- **Color usage** — same palette, used expressively. **Open decision:** stay warm-neutral
  monochrome (current `globals.css`, maximally restrained) vs. adopt ONE signature hue used
  sparingly for memorability (ochre or the mauve). Decide before the philosophy locks.
- **Marketing motion tokens + a wider budget** — Kaya's named curves and no-bounce rule,
  plus a marketing allowance for scroll-reveals and one signature moment per page.
- **Section archetypes** — a small catalogue, deliberately varied (not the same rhythm
  twice).

**Cult UI / Magic UI = recipe book, not ingredient.** Read a component to learn the mechanic,
then rebuild it in Kaya tokens + this motion philosophy. Never adopt wholesale (that's the
slop trap and it doesn't speak Kaya's language).

---

## 3. Storytelling principles (from the Linear/Julian lessons + the references)

- **Find the metaphor.** A strong concept ties everything together. Souvenir's latent
  metaphor is memory / keepsake / the thing worth keeping — use it as the through-line.
- **Problem immersion over problem description.** Antimetal's standout move: it *immerses*
  you in the problem (notifications piling up, the menu bar exploding) so you feel it, then
  shows the fix. Most current Souvenir pages lead with the solution — flip several to
  feel-the-chaos-first.
- **One idea, one focal visual, simplify.** Dense product screenshots are bad marketing —
  they distract from the copy. Abstract the complexity into one concept-visual per section.
- **Copy as a design job.** It must look and feel right on the page, not just in a doc.
  Spacing is pacing, line breaks are pauses, font-weight/contrast matter. "Keep it simple,
  tell me what it is" beats clever-but-vague.
- **Unique > templated.** Linear's pages got copied because they were original first. The
  current site's repeated stat-trio + feature-split rhythm is the thing to break.
- **Craft is the moat, the site is the packaging.** Like Apple's unboxing telegraphs the
  product, the site's feel should telegraph Souvenir's feel — tactile, warm, considered.
- **Taste is high signal; no A/B theatre.** Build for the right user with judgment; validate
  with a few respected eyes, not committee.

---

## 4. Current structure — assessment & storytelling upgrades

**What's strong:** 15 routes built, token-driven, Kaya-extended, verbatim Figma copy logged
per section, colorblind discipline, "ElevenLabs-grade restraint" principle, heavy Lottie
removed, a real GEO/SEO roadmap. Copy is clear and product-accurate ("tell me what it is" ✓).

**What to improve (storytelling):**
- **Generic SaaS rhythm.** Hero → stat-trio → feature-splits → comparison → FinalCTA repeats
  across pages. Vary archetypes; give each page a distinct shape.
- **Solution-first, not problem-first.** Few pages make the visitor *feel* the busywork/chaos
  before relief. Add problem-immersion openers where it fits (esp. Home, Company Brain).
- **No unifying metaphor yet.** Inject the memory/keepsake spine so pages share a felt idea.
- **Literal product visuals.** "Real product components, not hand-drawn mocks" is great for
  fidelity but risks dense, distracting visuals. Shift to abstracted concept-visuals; reserve
  the product "window" (ShowcaseFrame) for one hero proof, not every section.
- **Home splits focus.** "Two ways to use Souvenir" (B2C/B2B router) divides the story.
  **Open decision:** lead with one pointed narrative (likely B2B agents/Brain/Slack, bottom-up
  via the IC) and subordinate the other, vs. keep the router.
- **IA gaps vs your own GEO roadmap:** no Security/Trust, Changelog, Docs, "vs" comparison
  pages; `/about` is really Contact; Blog is a dead link.
- **Per-page maps are section lists, not story arcs.** Add an explicit narrative arc + a
  one-line "emotional beat" per section before any rebuild.

---

## 5. References (targets — borrow the mechanic, not the look)

- **Antimetal** (teardown provided) — the gold standard for *problem immersion* (exploding
  menu bar / notification chaos) and editorial restraint with one sharp accent. Note: it uses
  scrolljacking — **do not copy that** (accessibility + wrist-pain; achievable without it).
- **Five Figma reference nodes** (imported via html.to.design) — for spacing, section
  density, and element treatment at the section level. *I can't read Figma canvas (no
  read-from-Figma tool); export each as PNG or send the live URLs.*
- **animations.dev** (Emil Kowalski) — the motion bible; its vocabulary + easing system feeds
  `motion.md`. Already distilled in `souvenir-learnings.md`.
- **Emil Kowalski's blog + X** — component-craft and "agents with taste"; the skill-file
  method we're adopting.
- Rule for all: study to learn the *mechanic*, rebuild in Kaya tokens + the nostalgia motion
  philosophy. Pull references via annotated screenshots + written teardown, never "make it
  like this."

---

## 6. Motion philosophy → `motion.md` (strict, agent-followable)

From `souvenir-learnings.md` + animations.dev + Kaya's decisions:
- **Gate:** animate only with a purpose (orient / feedback / relationship / rare delight).
  Frequency governs intensity. Marketing gets a wider budget than product UI, but stays
  intentional.
- **Speed:** UI ~<300ms, hovers ~150ms; press feedback `scale(0.97)`. Marketing signature
  moments may be slower/unhurried (the nostalgia pacing).
- **Easing lookup:** ease-out for enter/exit; ease-in-out for on-screen moves/morphs; avoid
  ease-in; linear only for marquees/time; `ease` for hover color/opacity. No bounce.
- **One signature moment per page**, layout/type locked first, motion last.
- **Always** honor `prefers-reduced-motion`; animate `transform`/`opacity` only (GPU).
- **No** heavy Lottie/WebGL-by-default/autoplay media. 3D/WebGL only as a deliberate,
  contained signature moment if it earns its place (and budgeted for LCP).

---

## 7. Claude Code operating model (how to actually build this)

**Yes, build in Claude Code** — the context and repo live there, and the workflow lessons all
point there. But **don't run it as one long chat** (context rot). The through-line of this
whole project: *put durable context in the repo as files + skills; keep sessions short and
scoped.*

**Adopt the compound-engineering plugin** (`EveryInc/compound-engineering-plugin`) as the
operating system:
- `/ce-strategy` → write `STRATEGY.md` (target problem, approach, persona, metrics) — seed it
  from this doc.
- Per page, run the loop: `/ce-brainstorm` (story + sections) → `/ce-plan` → `/ce-work`
  (in a worktree) → `/ce-code-review` → `/ce-compound` (write the learnings back to the repo
  so context compounds instead of dying in a chat).

**Build 2–3 skills** (the Emil/Kyle method — encode taste as strict, articulated rules):
- `souvenir-taste` — the philosophy, section archetypes, and the intention→mechanism rules,
  as an always-on skill.
- `motion-and-easing` — the lookup tables above; invoked case-by-case for animation review.
- A `design-audit` sub-agent (Kyle's exact move): feed it animations.dev + the Antimetal
  teardown + the reference PNGs, and have it critique a built section against the philosophy
  ("audit this section's visual + interaction design"). Use Anthropic's `skill-creator` to
  generate these.

**Session discipline (Megan's workflow):**
- One page (or one concern) per session, ideally per **git worktree** for parallelism.
- Be in the real codebase; use the verification loop — build → screenshot (Claude in Chrome
  if available, else the screenshot step) → compare to reference + philosophy → fix.
- "Just because everyone can ship doesn't mean everything should" — the `design-audit` skill
  is the gate.
- Tiny polish fixes → batch as small PRs.

**Tuning:** vendor **Leva** as a dev-only control panel to live-tune the signature animation
params (durations, easings, stagger), then bake the chosen values into tokens and remove Leva
from the production bundle (keep the no-heavy-deps rule).

**Handoff from this chat → Claude Code:** this doc + `souvenir-learnings.md` go in `/docs`;
the open decisions below get answered; then `/ce-strategy` reads them. Nothing important lives
in a chat transcript.

---

## 8. The phased build plan (steps — nothing skipped)

### Phase A — Foundation & context (no page work yet)
1. Put `souvenir-website-plan.md` (this) + `souvenir-learnings.md` into `/docs`.
2. Install compound-engineering; run `/ce-strategy` → `STRATEGY.md` from this doc.
3. Author the **marketing token layer** on top of Kaya: display scale (push hero ceiling),
   section rhythm, marketing motion tokens, and the **accent decision** (monochrome vs one
   signature hue). Mirror to a Figma "Marketing" variable collection.
4. Build the `souvenir-taste` + `motion-and-easing` skills and the `design-audit` sub-agent
   (seed with animations.dev + Antimetal teardown + reference PNGs).
5. Audit the skeleton: confirm reusable primitives to keep (`FeatureSplit`, `TriSection`,
   `SectionHeading`, `FinalCTABand`, `ShowcaseFrame`, `ui/*`); delete the dead pre-`(site)`
   dirs.

### Phase B — Whole-site IA + positioning + story spine
6. Decide the **positioning** (B2B-led vs the B2C/B2B router) and the **home story**.
7. Settle the **IA** (nav, page set; add Security/Trust, Changelog, Docs, "vs" pages, real
   Blog, real About per the GEO roadmap; decide `/about` vs `/contact`).
8. Write the **metaphor + story spine** (memory/keepsake) that every page inherits.

### Phase C — Per-page loop (story-first, one page per session)
For each page, in priority order (Home first):
9. **Story arc** — the page's narrative + a one-line emotional beat per section
   (`/ce-brainstorm`).
10. **Section briefs** — message, hierarchy, the *abstracted* visual concept, motion intent,
    and which reference mechanic it borrows.
11. **Build** — compose from primitives + tokens (`/ce-work` in a worktree); abstracted
    concept-visuals, not dense screenshots.
12. **Audit** — run `design-audit`; verify reduced-motion, overflow at 390/768/1024, no
    console errors, CWV.
13. **Motion** — the one signature moment + consistent micro-interactions; tune with Leva;
    bake values to tokens.
14. **Compound** — `/ce-compound` writes the page's learnings back to the repo.

### Phase D — Systems & launch (per WEBSITE-SYSTEMS.md)
15. SEO/GEO: native metadata + `sitemap.ts`/`robots.ts` + `opengraph-image.tsx` + JSON-LD
    (Org/SoftwareApplication/FAQPage); answer-first, stat/quote/citation-dense copy.
16. CMS: Keystatic (git-based) for marketing/blog; Fumadocs for docs.
17. Analytics: PostHog + Vercel Analytics + Cal.com; instrument intent events.
18. Performance: font subset/preload, image sizes, bundle; CWV green (LCP<2.5s, INP<200ms,
    CLS<0.1). Wire the Contact form (Formspree/API). Deploy to Vercel.

---

## 9. Open decisions / what I need next

1. **Accent:** stay warm-neutral monochrome, or adopt one signature hue (ochre / mauve)?
2. **Positioning:** B2B-led with B2C subordinate, or keep the "two ways" router?
3. **First page** to run the loop on (recommend **Home**).
4. **Figma references:** export the 5 nodes as PNG or send live URLs (I can't read Figma
   canvas).
5. **The "built website base"** you mentioned (beyond the skeleton): share it (zip) so the
   audit and reuse plan reflect reality.
6. Optional: paste the rest of Emil's posts if you want them folded into `motion.md` (most
   key principles are already distilled).

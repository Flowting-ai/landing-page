# Build Learnings — Souvenir Website

> **Living log. This is how the build gets better instead of repeating mistakes.**
> Read this file at the START of every session. Whenever Chai gives corrective feedback,
> or a mistake is caught, append an entry here BEFORE moving on. If the learning is a durable
> taste/rule, also promote it into `.claude/skills/souvenir-taste/SKILL.md`. The
> compound-engineering `/ce-compound` command should write its takeaways here too.

## How to write an entry
Append under the right category, newest first. Keep entries short and **actionable** — a rule the
next session can follow, not a story. Format:

```
### [YYYY-MM-DD] Short title  ·  (page/area)
- **What happened / feedback:** the observation or correction (1–2 lines).
- **Rule going forward:** the imperative rule that prevents it.
- **Promoted to:** souvenir-taste skill / motion skill / STRATEGY.md / n/a.
```

## Standing rules distilled so far (the short list — full detail in STRATEGY.md + souvenir-taste)
- Accent = dusty mauve signature only; monochrome canvas; ochre for stats; espresso CTA; NO coral.
- Meaning never by color alone (colorblind). Focus ring = ink.
- One idea + one abstracted concept-visual per section. No dense product screenshots everywhere.
- Problem-first immersion before the relief, where it fits. Vary section archetypes — never the
  same hero→stat-trio→feature-splits→comparison→CTA rhythm twice.
- Motion: purpose-gated, <300ms UI / ~150ms hover / press scale(0.97), easing lookup, no bounce
  (except the inherited KDS text-swap spring), one signature moment per page, reduced-motion safe.
- Icons only from `@strange-huge/icons` via `size`; valid ConnectorIcon IDs only
  (slack, gmail, notion, stripe, github, linear, hubspot, figma). Wrap MessageBubble in ClientOnly.
- Evoke nostalgia, don't costume it (no sepia/Polaroid). Heavy craft = hero-only (perf).
- Reuse existing primitives before building new. Tokens only — no magic numbers.

---

## Log

### [2026-06-17] Iridescence/specular needs a DARK base; reuse KDS Tabs + tile-hover from the palette · (DESIGN/COMPONENTS)
- **What happened / feedback:** Chai asked for a rich Company-Brain featured card (perspective tilt,
  cursor specular glow, iridescent bright areas, noise) + KDS Tabs for the audience switcher + a warm
  icon-tile hover + a better backdrop blur. First built the iridescent card on the light mauve surface —
  the sheen/specular were nearly invisible (soft-light rainbow on cream reads as nothing).
- **Rule going forward:** Iridescent sheen + white specular only read on a **dark field** (espresso
  `--dark-bg`/`--dark-surface`) — that's why KDS `ModelFeaturedCard`'s rainbow lives on its selected/dark
  state. Build such effects as layered absolutely-positioned divs (sheen `conic-gradient` soft-light,
  specular `radial` white screen tracking `--mx/--my`, noise `feTurbulence` overlay, mauve glow
  `::after`), driven by pointer→CSS-vars, every aspect a CSS-var knob, and **reduced-motion disables
  tilt+specular** (verified `transform:none`). Reuse don't rebuild: audience switcher = KDS `Tabs`
  (`TabsList fluid` + `TabsTrigger`); icon-tile hover warms via `--surface-warm` (neutral-100); backdrop
  blur = warm `neutral-50` veil (not grey ink) + `blur(22px) saturate(1.15)`.
- **Taste note (flag for Chai):** an iridescent specular card brushes souvenir-taste's "no gratuitous
  glow/aurora" ban and the "one signature moment per page" rule (Home already has scatter→assemble). It's
  allowed here as the nav's transient signature, directed by Chai, token-built (not a copy-paste lib).
  Confirm it doesn't fight the page signature.
- **Promoted to:** n/a (nav build record; revisit if taste guidance tightens).

### [2026-06-17] OpenAI-style mega-menu = full-width opaque SHEET + page blurred below (floating card never reads on a sparse hero) · (COMPONENTS/DESIGN)
- **What happened / feedback:** Kept trying to get OpenAI's blur with a centered floating card +
  backdrop-blur; it never "popped." Root cause is NOT technical — `backdrop-filter` works fine, but our
  hero is mostly empty warm cream, so blurring it shows almost nothing (OpenAI's page is dense/colorful,
  so their blur is dramatic). The real structural difference: OpenAI's menu is a **full-width opaque
  sheet** anchored under the nav, with the page blurred **below** it. Chai chose the sheet.
- **Rule going forward:** For a marketing mega-menu that needs the OpenAI effect, build a **full-bleed
  opaque sheet** (`position:fixed; left:0; width:100vw; top:var(--nav-shell-h)`), 100% solid fill,
  content in a gutter-aligned `max-width:var(--maxw)` container; full-screen `backdrop-filter` blur sits
  behind/below. Don't expect a floating-card + blur to read on a near-empty canvas — there's nothing to
  blur. Height morphs between panels; width stays full.
- **Promoted to:** docs/solutions/design-patterns/scroll-state-nav-radix-portals.md (sheet note).

### [2026-06-17] Tailwind v4 `-translate-x-1/2` uses the `translate` PROPERTY → it traps `position:fixed` children · (CSS/GOTCHA)
- **What happened / feedback:** A full-width `position:fixed; left:0; width:100vw` mega-sheet rendered at
  x=554 (centered) and 1440 wide overflowing, not at left:0. The cause: its ancestor used Tailwind v4
  `-translate-x-1/2`, which compiles to the **`translate` CSS property** (`translate: -50% 0`), NOT
  `transform`. The `translate` property establishes a containing block for fixed descendants — so the
  sheet anchored to the centered wrapper, not the viewport. `getComputedStyle(el).transform` reads
  `none` (it's on `translate`), so a transform-only ancestor scan MISSES it.
- **Rule going forward:** When `position:fixed` is mysteriously offset, check ancestors for the
  `translate` / `scale` / `rotate` **individual properties** AND `transform` AND `filter` /
  `backdrop-filter` / `perspective` / `will-change` / `contain` / `container-type` — any of them creates
  a containing block. Center without trapping fixed children via `absolute inset-x-0 mx-auto w-fit`
  (auto-margins) instead of `left-1/2 -translate-x-1/2`.
- **Promoted to:** docs/solutions/design-patterns/scroll-state-nav-radix-portals.md.

### [2026-06-17] "Blur behind the dropdown" = full-screen backdrop BEHIND + solid panel ON TOP (not a frosted panel) · (COMPONENTS/CSS)
- **What happened / feedback:** Two wrong turns on the same effect. First built a full-screen dim+blur
  overlay (too heavy). Then over-corrected to a *frosted translucent panel* (panel itself blurred, no
  backdrop). Chai's actual intent: the **full-screen backdrop SHOULD exist and carry the blur, sitting
  BEHIND**; the dropdown panel + items sit **on top at 100% solid fill** (no opacity, no blur on the
  panel). Plus: a body-portaled backdrop painted OVER the nav because the header lives inside a
  `<div class="relative isolate">` wrapper — `isolation: isolate` scopes the header's `z-50` locally, so
  a body-level z-40 backdrop outranks the whole header subtree.
- **Rule going forward:** For "blur the page behind an open menu": one full-screen `backdrop-filter`
  element BEHIND (carries blur + a light dim), panel/cards 100% solid on top. Do NOT frost the panel.
  And do NOT portal the backdrop to `document.body` when the nav sits in an `isolate`/transformed
  wrapper — render it INSIDE the menu Root so it shares that stacking context, then layer the nav List
  + Viewport above it with explicit z (backdrop z-0, content z-1). `backdrop-filter` still blurs the
  page across stacking-context boundaries (it's a composite-time effect). Verify by checking an
  ancestor chain for `isolation:isolate` / `transform` / positioned-z before assuming `z-50` wins.
- **Promoted to:** docs/solutions/design-patterns/scroll-state-nav-radix-portals.md (add a note).

### [2026-06-17] ⚠️ SUPERSEDED — the frosted-panel approach was the wrong turn · (MOTION/COMPONENTS)
- **Correction:** An earlier draft of this entry said to frost the panel surface (translucent +
  own backdrop-filter) instead of a full-screen overlay. That was the over-correction Chai rejected.
  See the [2026-06-17] entry above ("full-screen backdrop BEHIND + solid panel ON TOP") for the
  binding rule: the backdrop is real and full-screen, the panel is 100% solid. Kept only as a record
  of the dead end — do not follow this paragraph.

### [2026-06-17] Nav dropdown items must be CARDS, not stock DropdownMenuItem rows · (COMPONENTS/DESIGN)
- **What happened / feedback:** Marketing mega-menu first used flat custom rows, then the stock KDS
  `DropdownMenuItem` (bare 20px icon slot) — Chai still read both as "the old ones," wanted the
  richness/cataloging of ElevenLabs/Glean mega-menus.
- **Rule going forward:** For marketing mega-menus, build item **cards** on KDS *tokens* (not the stock
  row component): embossed icon **tile** (`--surface` + `--line` + `--shadow-sm`, ~38px rounded-9) +
  bold label + muted sublabel, hover-lift via `--shadow-surface-card-hover`. `DropdownMenuItem`'s 20px
  icon slot can't hold a tile, so it's the wrong primitive for a rich mega-menu — reserve it for true
  in-product context menus. Pair with a featured gradient card (the one mauve accent moment) + a
  connector rail. Copy = one sharp, product-true line per item.
- **Promoted to:** n/a (nav build record; reusable mega-menu recipe).

### [2026-06-16] Component-scoped CSS vars don't reach Radix Portals — put shared metrics on :root · (COMPONENTS/CSS)
- **What happened / feedback:** The mobile drawer (now a Radix `Dialog`) renders into a `<body>` portal.
  `--nav-shell-h` was defined on `.site-nav`, so `top: var(--nav-shell-h)` inside the portaled drawer
  resolved to *invalid* (var undefined out of scope) → `top` fell back to `auto` and the drawer
  mispositioned (card invisible / wrong place).
- **Rule going forward:** Any CSS var consumed by portaled content (Radix Dialog/Popover/Tooltip
  `Portal`, mega-menu viewport) must live on `:root` (or carry a fallback: `var(--x, 5.25rem)`).
  Component-scoped vars only reach the component subtree, not its portals. Verify portaled overlays
  with `getBoundingClientRect()`, not just "it rendered."
- **Promoted to:** n/a (CSS-scope rule; comment lives in globals.css next to `:root { --nav-shell-h }`).

### [2026-06-16] `outline-none` on nav triggers silently killed the global ink focus ring · (A11Y)
- **What happened / feedback:** globals.css defines a global `:focus-visible { outline: 2px solid
  var(--focus-ring-c) }` (ink). The nav trigger/link classes carried `outline-none`, which overrode it
  → keyboard focus showed *no* ring (violates the ink-focus rule). Pre-existing; surfaced during nav V2.
- **Rule going forward:** Never ship `outline-none` without a `focus-visible` replacement. Prefer to
  let the global ink `:focus-visible` ring show through (drop `outline-none`); only override it when you
  also restyle a visible ink ring. Verify with a REAL keyboard Tab (programmatic `.focus()` doesn't
  trigger `:focus-visible`).
- **Promoted to:** souvenir-taste (focus-ring rule already present; reinforced).

### [2026-06-16] backdrop-filter doesn't cross-fade via opacity — animate the blur() value · (MOTION/CSS)
- **What happened / feedback:** Nav V2 fades the floating pill in on scroll. Fading a backdrop-filtered
  layer via wrapper `opacity` flashes/repaints mid-browser.
- **Rule going forward:** Animate the filter value itself — `backdrop-filter: blur(0) → blur(8px)` (it's
  animatable) — or cross-fade a pseudo-element carrying the blurred surface. Don't opacity-fade a
  backdrop-filtered box. Also: a scroll-state bar must keep a **constant outer reserved height** and morph
  only an inner wrapper, or the threshold causes a layout lurch (sticky element height changes reflow).
- **Promoted to:** n/a (rule captured here + globals.css comment; a docs/motion.md nav-state note is worth adding later).

### [2026-06-16] Nav V2 shipped: flush→pill + wordmark→mark, Radix Dialog drawer, Viewport morph · (COMPONENTS/PROCESS)
- **What happened / feedback:** Refined `SiteNav`/`MegaMenu` per the OpenAI/ElevenLabs mechanic teardown
  (borrowed mechanics, not look). Audit verdict: **good** — recognizably ours via the wordmark→mark
  condense + warm-cream/mauve token discipline; flush→pill alone would read generic. Touch target was
  40px (fixed → 44px). Radix Dialog used as a *toggle* (no `Dialog.Trigger`): guard `onInteractOutside`
  against the trigger ref so the hamburger X doesn't double-fire the close. Mobile drawer is full-bleed,
  so close = ESC / X / link-tap (little exposed scrim to click — acceptable).
- **Rule going forward:** Extend Radix `NavigationMenu` (hover-intent + a11y for free) — don't replace it;
  use a shared `NavigationMenu.Viewport` for panel size-morph (panels set their own width; give the
  varying-height panel a `min-height` so the viewport doesn't jitter on inner state change).
- **Promoted to:** n/a (build record).

### [2026-06-16] Hero = product-led (real ChatBoard), NOT abstract concept-visuals · (HERO/VISUAL DIRECTION)
- **What happened / feedback:** The visual-director loop proposed abstract concept-cards
  (kept-object / souvenir-artifact glyphs) for the hero. Chai rejected all of them: *"not even
  close… we need to use the product interface and the interaction in real time — that adds far
  more value."* Pointed to Linear's landing page as the model ("product outline") and to the real
  product UI in `~/may-day` (Kaya DS) + `front-end-ds-dev`.
- **Rule going forward:** This page is **product-led, like Linear** — the **real product UI is the
  art**. Hero leads with the full `ChatBoard` window (Sidebar · Chat · Pinboard); later feature
  sections show *partial* product panels bleeding in from the edge. Render real surfaces from the
  Kaya DS / DS-dev; don't substitute abstracted glyphs for the hero/feature proof. This **revises**
  souvenir-taste's "ONE product-window, reserved for Proof" rule.
- **Promoted to:** souvenir-taste skill (ladder + product-window note updated).

### [2026-06-16] Hero copy: drop "Brain / layer / Assistants"; mirror the headline's two beats · (HERO/COPY)
- **What happened / feedback:** Long copy iteration. Chai's signals: don't lead the landing page
  with "Brain" (it's one part, not the whole); dislikes "layer" (jargon) and "Assistants" (label).
  Kept gravitating to the "One place… / knows your context… runs the work" vein.
- **Rule going forward:** Landing copy stays product-true and concrete; anchor on **context** +
  **work getting done**; avoid "Brain/layer/Assistants" as lead nouns (describe what the AI *does*
  instead of labeling it). Subhead mirrors the headline's beats. Hero is **calm arrival** — never
  lead with pain/"chaos" (that's Breaking's job).
- **Promoted to:** n/a (copy guidance; STORY-SPINE Hero beat updated).
### [2026-06-17] Scenery footer — warm wheat-field IMAGE + cursor sunlight pool · (FOOTER/COLOR/MOTION)
- **What happened / feedback:** Chai wanted an illustrated "warm scenery" footer. First ref (Nexiron
  riso landscape) was blue+coral+green — breaks the locked palette. Iterated the image-gen prompt to a
  warm wheat-field horizon with two small figures (on-palette: ochre/wheat/cream, no coral/blue/green),
  then chose the AI-generated image over a hand-built SVG. Chai also floated a Three.js "sunlight
  cursor" with real DirectionalLight shadows — declined as wrong-tool (flat PNG can't cast 3D shadows;
  breaks the no-WebGL-by-default + one-signature-moment + footer-motion-none rules). Landed on a cheap
  on-rule middle path: cursor-tracked sunlight glow + a few-px parallax.
- **Rule going forward:** (1) When a reference clashes with the locked palette, fix it at the PROMPT
  (warm wheat/ochre/cream, "no blue/green/coral") — don't copy the ref's colors. (2) Optimize AI images
  for the site: resize to ~2× footer width (2880w) + `cwebp -q 72` → ~30KB; ship a `-sm` variant for
  `max-width:640px`. (3) Full-bleed backdrop = `background-size:cover; position:center bottom` on an
  oversized (`inset:-16px -20px`) layer so parallax never exposes an edge; text stays real HTML on top.
  (4) This image is light wheat→cream everywhere → dark INK text throughout (no dark region for cream
  text, unlike the earlier dark-field plan). (5) Sunlight pool = radial-gradient at cursor `--mx/--my`,
  `mix-blend-mode:soft-light`, opacity gated by `--lit`; parallax = `translate3d(--px,--py,0)`;
  reduced-motion drops both (static image remains).
- **Promoted to:** souvenir-taste (evoke-don't-costume; no-WebGL-default) + the image-optimize recipe.

### [2026-06-15] @storybook/nextjs doesn't inject next/font vars → Besley collapsed to system sans · (TYPOGRAPHY/BUILD)
- **What happened / feedback:** Chai spotted that Storybook headings looked sans — "serif/sans, no
  difference." Root cause: `@storybook/nextjs` did NOT inject the `next/font` `--font-besley` /
  `--font-geist-*` variables into the preview iframe (the `useEffect` classList decorator didn't work
  for stories OR MDX docs). With `--font-besley` empty, `font-family: var(--font-besley), Georgia, serif`
  collapsed and text inherited the system sans — so Besley and Geist looked identical. The real site is
  fine (Next self-hosts fonts server-side); this was Storybook-only.
- **Rule going forward:** Load fonts in Storybook via `.storybook/preview-head.html` (Google Fonts CDN
  link) + a `:root` block mapping the next/font variable names to the families
  (`--font-besley: "Besley", …`). Don't rely on `@storybook/nextjs` next/font handling. Verify display
  type renders as a *serif* in a screenshot — don't trust that the font "is configured."
- **Promoted to:** n/a (Storybook config; lives in preview-head.html comment).

### [2026-06-15] Tailwind v4 scans markdown → Turbopack DEV 500s on doc code-examples · (PROCESS/BUILD)
- **What happened / feedback:** S1 added MDX docs + a portable DESIGN.md that quote example classes
  like `text-[color:var()]` / `text-[var(--color)]` in prose. Tailwind v4 auto-scans ALL non-gitignored
  files (incl. `.md`/`.mdx`), extracted those as candidates, and emitted malformed CSS (`color: var();`).
  `next build` only WARNED; the **Turbopack dev server returned 500** on the same CSS. (Pre-existing empty
  `text-[color:var()]` typos in HANDOFF.md / DESIGN-REFINEMENT-PLAN.md were also dormant offenders.)
- **Rule going forward:** Never rely on prod-build warnings alone — verify on `next dev` too. Markdown
  never authors Tailwind utilities, so exclude it: `@source not "../../**/*.md"` + `*.mdx` in globals.css
  (added). Also gitignore `storybook-static/` so its bundles aren't scanned/committed.
- **Promoted to:** n/a (build-config rule; lives in globals.css comment).

### [2026-06-15] Coral scope was bigger than the kickoff listed — .glow-warm + inline var(--coral) · (COLOR)
- **What happened / feedback:** Kickoff named 4 `.glow-coral-dark` files. Re-grep found coral also baked
  into `.glow-warm` as `rgba(224,97,58,…)` (consumed by 16 hero files) AND an inline
  `var(--coral,#d9685a)` in SlackPage/visuals.tsx + a stale comment in ui/Button.tsx.
- **Rule going forward:** Grep BOTH the hex (`E0613A`) and the decimal-RGB form (`224, *97, *58`) when
  detoxing a color — named-class greps miss raw rgb() and inline fallbacks. `.glow-coral-dark` →
  `.glow-signature` (mauve, from `--accent`); `.glow-warm` → warm-neutral espresso wash.
- **Promoted to:** souvenir-taste (no-coral rule already present).

### [2026-06-15] Marketing DS home = Storybook (Docs-first, token-driven) — LOCKED · (PROCESS/DESIGN-SYSTEM)
- **What happened / feedback:** Weighed in-app `/design-system` route vs Storybook. Chai's goal is a
  durable, shareable, brand-facing reference (palette + intention, type, spacing) that outlives pages
  and feeds marketing-asset/branding work + future theming — that goal makes Storybook the right home.
- **Rule going forward:** Tokens (CSS vars) = single source of truth; Storybook reads from them; site
  consumes them; NO in-app route. Scope Storybook to the DS layer (tokens, primitives, one example per
  archetype) — never mirror full pages (drift + RSC tax); pages verified via `scripts/shot.mjs` +
  `design-audit`. Theme toggle previews mauve↔ochre. Separate instance now; KDS-fold-in is a future option.
- **Promoted to:** STRATEGY.md §0 (LOCKED) + S1 prompt in docs/KICKOFF-PROMPTS.md.

### [2026-06-15] design-audit had no repo-discoverable screenshot step — added scripts/shot.mjs · (PROCESS)
- **What happened / feedback:** S0 review found the design-audit skill + agent told to "use the repo's
  screenshot step," but none existed in-repo — only the external `~/.shot-harness`. The agent would have
  re-written a Playwright script every run.
- **Rule going forward:** Use `node scripts/shot.mjs <route> <label> [768 1024]` (dev on :4321; reuses
  `~/.shot-harness` Playwright, no repo install) for all audit/verify screenshots. Output → `/tmp/souvenir-shots/`.
- **Promoted to:** design-audit skill + agent (wired in).

### [2026-06-15] Mauve accent — LOCKED (Chai signed off), decorative-only · (COLOR)
- **What happened / feedback:** Product `semantic.css` deliberately dropped the *saturated* brand
  purple. Chai chose mauve (option A) anyway as the marketing signature, with guardrails.
- **Rule going forward:** Mauve (`--accent: var(--purple-600)` #674F68) is **decorative only, never a
  status signal**; signature dose on a 90% warm-neutral canvas. Courtesy heads-up to Colin/brand
  recommended (non-blocking). Fallback if brand objects = ochre (one-token swap). Build chat may bake
  it into tokens.
- **Promoted to:** STRATEGY.md §0 (LOCKED).

### [2026-06-15] Coral lives in 4 files, not 1 — clean ALL when switching to mauve · (COLOR/PROCESS)
- **What happened / feedback:** `.glow-coral-dark` is used in `FinalCTABand.tsx`,
  `AgentsFinalCTA.tsx`, `HomePage/FinalCTA/FinalCTASection.tsx` (home-v1), and `v/b/page.tsx` — plus
  defined in globals.css and the line-4 comment, and documented in DESIGN-FOUNDATIONS.md.
- **Rule going forward:** The S1 coral→mauve cleanup must touch every one of those, not just
  FinalCTABand. `grep -rln "glow-coral\|coral\|E0613A" src` before declaring it done.
- **Promoted to:** STRATEGY.md §4.

### [2026-06-15] Log initialized
- **What happened:** Foundation/strategy phase complete; entering the build.
- **Rule going forward:** Every correction Chai gives gets an entry. Don't repeat anything written here.
- **Promoted to:** n/a.

<!-- New entries go ABOVE this line, newest first, under categories as they emerge:
     MOTION · LAYOUT/SPACING · COLOR · TYPOGRAPHY · COPY/STORY · COMPONENTS/KAYA · PROCESS -->

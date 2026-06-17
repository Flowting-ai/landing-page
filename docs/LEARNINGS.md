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

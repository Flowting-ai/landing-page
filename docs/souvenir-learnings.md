# Souvenir — Learnings & Reference Library

Distilled from the research Notion. This is the seed material for the build docs:
`motion.md`, `taste.md`, `design-system.md`, and `references.md`. Everything below is
written as operating rules, not prose to admire — the point is to feed it to Claude Code.

> Why this is a file and not a memory: agents read files each session, not past chats.
> The durable home for taste is the repo. This doc is where these learnings live until
> they're split into the four docs above.

---

## 0. The method (the most important learning)

The whole collection points at one approach, from Emil Kowalski's *Agents with Taste*:

- **Coding agents can produce motion/visuals that work but feel mediocre.** They don't
  know what "great" feels like. If you can't tell the difference, you'll ship it.
- **The fix is not better prompting — it's encoding taste as strict rules.** For every
  decision you can articulate *why* it feels right, turn the "why" into a rule and give
  it to the agent. Then it follows your judgment instead of inventing its own.
- **Be strict.** A rule the agent must follow (e.g. an easing flowchart) beats a
  suggestion it can reinterpret. Strictness is the feature.
- **Skills are scoped, and some are case-by-case, not always-on.** Example: an
  "animation review" skill is better invoked deliberately than loaded on every task.
- **Tooling:** build skills with Anthropic's `skill-creator`
  (github.com/anthropics/skills). Two ready-made skills to study/borrow:
  - `npx skills add emilkowalski/skill` — animations, component design, principles from
    Sonner/Vaul, performance.
  - `npx skills add index-how/vocabulary` — the shared design language (below).

Implication for our process: `taste.md` + `motion.md` are not documentation, they are
**instruction sets**. Write them in the imperative, with thresholds and lookup tables.

---

## 1. Motion principles → `motion.md`

### When to animate (the decision gate)
1. **Purpose.** Animate only to orient, give feedback, show a relationship, or deliver
   *rare* delight. No decoration. If you can't name the purpose, don't animate.
2. **Frequency of use.** The more often a user sees it, the shorter and subtler it must
   be — or none at all. **Never animate frequently-repeated keyboard-driven actions**
   (list nav, command menus); animation there feels laggy and disconnected.
3. **Speed.** UI animations stay under ~300ms; hovers ~150ms. Faster reads as more
   responsive. Marketing pages get more latitude than app UI — but still intentional.

A "delight" animation only works if the user rarely triggers it (e.g. a feedback-button
morph). Used daily, the same animation becomes friction.

### Easing — a lookup, not a choice
- **ease-out** — default for user-initiated enter/exit (dropdowns, modals, toasts). The
  fast start = perceived responsiveness. Use for most enter/exit.
- **ease-in-out** — elements already on screen moving to a new position or morphing
  shape (timeline shifts, container resize, Dynamic-Island-style change).
- **ease-in** — avoid. Slow start feels sluggish and unnatural for UI.
- **linear** — only for constant motion: marquees, spinners, and time-passage fills
  (hold-to-delete, countdowns), and rare 3D coin-style spins.
- **ease** (CSS default) — small gentle transitions: hover color/background/opacity.
- Built-in curves are often too weak; keep a set of custom `cubic-bezier` curves sorted
  weak→strong per type. Press feedback: `scale(0.97)` on `:active`, 150ms.

### Other motion rules
- **Enter ≠ exit.** Enter decelerates into place (arrival); exit accelerates away
  (departure). Don't just reverse the enter curve.
- **Stagger** ~40ms between list items for a sense of arrival; all-at-once reads as a flash.
- **Spatial consistency.** Animate so an element keeps its identity/position across
  states (e.g. popover grows from the button that opened it — origin-aware).
- **Reduced motion.** Any significant movement checks `prefers-reduced-motion`.
- **Performance.** Animate `transform` and `opacity` only (GPU-composited). Animating
  width/height/top/left/padding triggers layout every frame = jank. Use `will-change`
  as a hint, not a default.
- **Vocabulary to prompt with** (use these exact names when asking the agent):
  fade/slide/scale/pop/reveal; stagger, orchestration, fill mode; translate/scale/rotate,
  transform-origin; crossfade, morph, shared-element, layout animation, accordion,
  direction-aware; scroll-reveal, scroll-driven, parallax, page/view transition; hover,
  press feedback, hold-to-confirm, drag-to-reorder, swipe-to-dismiss, rubber-banding,
  ripple; spring (stiffness/damping/mass/bounce), interruptible; marquee, pulse, float,
  idle; number ticker (with tabular nums), typewriter, skeleton/shimmer, clip-path/mask.

---

## 2. Typography rules → `design-system.md`

- **Measure** ~65 characters per line; cap with `max-width`. Wider = the eye loses the
  next line.
- **Leading** set for the text size; too tight suffocates, too loose stops reading as a
  paragraph. **Tracking**: uppercase labels almost always need more.
- **Type scale**: pick sizes from a ratio-based scale; don't free-set sizes.
- **Tabular nums** for anything that updates — prices, stats, tickers, timers — so digits
  don't shift width.
- **Variable fonts** let you animate weight with no layout shift and cut file overhead.
- **Widows/orphans**: `text-wrap: balance` for headings; avoid single-word last lines.
- **Fluid sizing** with `clamp(min, preferred, max)` instead of per-breakpoint sizes.
- **Font stack / fallback**: match x-height and weight of the fallback to avoid reflow on
  font load. Preload primary fonts.
- x-height and cap-height (not point size) determine how big a font *feels* — relevant
  when pairing or matching fallbacks.

---

## 3. Color rules → `design-system.md`

- **Generate palettes in OKLCH** (perceptually uniform lightness) — two colors at the same
  L actually look equally bright. Build gradients in OKLCH too, so the midpoint doesn't go
  grey.
- **Semantic tokens**, named for purpose not value (`--color-border-subtle`, not a hex).
- **Contrast (WCAG AA):** 4.5:1 body text, 3:1 large text and UI components. Know APCA
  exists and sometimes disagrees with WCAG (accounts for size/weight).
- **Tinted neutrals** — a grey with a slight hue bias feels chosen; pure `#808080` reads
  like a placeholder.
- **For a lighter tint, reduce chroma — not opacity.** Lowering opacity turns a color grey
  and lifeless; reducing chroma keeps it alive. (Alpha borders recede; solid sit on top —
  pick deliberately.)
- **Dark mode** isn't inverted light mode: the brightest surface sits at the top of the
  layering hierarchy, and every token is rechecked. Pull brand saturation back ~20–30% in
  dark mode so it doesn't vibrate.

---

## 4. Layout & spacing → `design-system.md`

- **Nested radius = outer radius − padding.** Matching inner and outer radius leaves a
  visible gap.
- **`gap`** on the parent for spacing between flex/grid children (no trailing margin).
- **`max-width`** on text containers to protect measure.
- **Breakpoints** where the content actually breaks, not at assumed device widths.
- **Asymmetry** creates interest; symmetry is stable but rarely interesting. Grid: 12 cols
  conventional, 8 often better for simple layouts.
- **Mobile:** use `dvh` (not `vh`) for full-screen heights; respect the safe area for fixed
  bottom elements.
- **Prevent layout shift:** set `aspect-ratio` on images/embeds; reserve space before load.
- `overflow: hidden` silently breaks sticky positioning on children — watch for it.

---

## 5. Interaction & state → `taste.md`

- Every interactive element needs distinct **default / hover / focus / active / disabled**
  states. Missing states are the tell of unfinished UI.
- **Affordance**: it should look usable. **Hover**: color shift alone isn't enough — change
  cursor too. **Active**: a small scale/color shift so it feels physical. **Focus**: never
  remove it; restyle it. **Disabled**: use a specific muted token, not opacity (unreliable
  contrast).
- **Touch targets** ≥ 44×44px (visual can be smaller).
- **Optimistic updates** for instant feel (with rollback on failure). **Debounce** inputs
  (~300ms) so search doesn't fire per keystroke.
- **Copy-to-clipboard** needs visible confirmation (checkmark ~1–2s) or users re-click.

---

## 6. Accessibility → `taste.md` / build checklist

- **Semantic HTML**: a real `<button>` gives keyboard, focus, and role for free; a styled
  `<div>` makes you re-add all of it.
- **DOM/tab order** follows reading order; reordering visually with CSS while leaving DOM
  unchanged breaks screen-reader flow.
- **`prefers-color-scheme`** drives dark mode. **`aria-label`** names the *action* ("Search",
  not "icon"). **Focus trap** inside modals/dialogs; background inert to screen readers.
- **Never use color as the sole signal** for state — pair with icon or text.
- **Skip link** to main content for keyboard users.

---

## 7. Copywriting / microcopy → `brand.md` (voice) + section briefs

- **Sentence case** for UI labels. **Front-load** the important word ("Export ready", not
  "Your export is complete and available…"). Users scan.
- **CTA owns the action**: "Save changes" > "Submit". Don't apologise for asking.
- **Errors name the fix**: "Your email must include an @ symbol", not "Invalid input".
  Show them **inline**, next to the field.
- **Voice** is the constant personality; **tone** shifts by moment (encouraging in
  onboarding, careful around destructive actions). Destructive copy must be unambiguous
  (Delete/Remove/Revoke — don't soften a permanent action as "clear" or "reset").
- **Success messages** are specific and brief ("Saved", not a press release).

---

## 8. Information architecture → `ia.md` + section storytelling

- **Content inventory first** — list everything before restructuring, or you just move
  broken content into a new container.
- **Hierarchy**: rank elements by importance; if everything competes, nothing wins.
- **Progressive disclosure**: reveal complexity as the user goes deeper.
- **Empty states** explain why + offer a first action; **error states** say what failed +
  how to recover.
- **Wayfinding**: breadcrumbs, active nav states, page titles, URL structure. Keep depth
  to ~3 levels. Label by user vocabulary, not internal naming.

---

## 9. Reference library (every link, organized by job)

### Craft north stars (the bar we're aiming at)
- **ciechanow.ski** (Bartosz Ciechanowski) — interactive explorables; the gold standard for
  "this was made by someone who cares." Reference for any interactive/explanatory moment.
- **textmotion.dev** — `slot-text`, MIT, dependency-free text-roll for tactile labels.

### Motion learning (source of the rules above)
- **emilkowal.ski** — articles: *You Don't Need Animations*, *Agents with Taste*,
  *Train Your Judgement*, *Good vs Great Animations*, *7 Practical Animation Tips*,
  *The Magic of Clip Path*, *CSS Transforms*.
- **animations.dev** — Emil's course + the animation vocabulary glossary + the Easing
  Blueprint lesson.
- **index.how** — the design vocabulary (typography, color, iconography, layout,
  interaction, motion, a11y, IA, copywriting, tools, analysis, components).

### Skills to install (the method, operationalized)
- `npx skills add emilkowalski/skill` — design-engineering skill (animations, component
  design, performance). Use case-by-case (e.g. animation review), not always-on.
- `npx skills add index-how/vocabulary` — shared language so prompts and critique use
  precise terms.
- `claude plugin add anthropic/frontend-design` — anti-slop defaults (bans Inter/Roboto/
  purple gradients; concrete alternatives). Always-on in `CLAUDE.md`.
- Build our own with Anthropic `skill-creator` (github.com/anthropics/skills).

### Tactile primitives (adopt, wrap in our own API)
- **Sonner** (sonner.emilkowal.ski) — toast. **Vaul** (vaul.emilkowal.ski) — drawer.
  Both Emil's, both the "crafted" default. (From earlier: `number-flow`, `cmdk`.)

### Effect / component sources — USE SPARINGLY (slop risk)
- **Magic UI** (magicui.design) — shadcn-based animated components (shiny-button, etc.).
- **Cult UI** (cult-ui.com) — hero-color-panels and other animated blocks.
- **aisdkagents.com/templates** — AI SDK agent templates.
- ⚠️ These are the libraries that produce the templated "aurora + glowing card" look. Pull
  individual primitives if needed; never let them define the aesthetic. One deliberate
  effect per page, not five.

### Tooling decisions already made (from the plan)
- shadcn/ui + its MCP server as the primitive backbone.
- Motion (ex-Framer Motion) as the React animation engine; GSAP (now fully free, incl.
  SplitText) for timeline/scroll-driven signature moments.
- Source of truth = code (tokens in CSS variables), mirrored to Figma variables. No
  Figma↔HTML round-trip for production.

---

## 10. Still needed from you (the structure side)

These are the gaps this doc does **not** cover — to be supplied later:
- **Souvenir IA** — sitemap, page list, section order.
- **Per-section copy** — the actual words for each section.
- **Brand** — positioning, 3 adjectives + 3 anti-adjectives, voice.
- **Kaya tokens** — the foundational color/space/type/radius values the marketing layer
  inherits.
- **Figma frames** — exported as PDF/PNG per page (no read-from-Figma tool available).
- **Live site access** — current build, for the Phase 1 inventory.

Once these arrive: split this doc into `motion.md` + `taste.md` + `design-system.md` +
`references.md`, then write the per-section briefs against the IA.

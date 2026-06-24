---
name: souvenir-taste
description: Always-on taste + design rules for the Souvenir marketing site. Apply whenever building, refining, or reviewing any marketing page, section, component, token, or visual in this repo. Encodes the philosophy, accent system, nostalgia motion, banned patterns, and the colorblind constraint as strict rules.
---

# Souvenir Taste

You are building the Souvenir marketing site. These are **rules, not suggestions** — follow them
exactly; when one would be broken, stop and flag it. Full context: `docs/STRATEGY.md` +
`docs/souvenir-learnings.md`. Inherit the product DS rules in `docs/KAYA-CLAUDE-RULES.md`.

## The spine
**"Souvenir is the memory your work keeps."** Make an intangible AI-orchestration product feel like
a warm, tangible, kept object. Every section serves three pillars:
1. **Tell me what it is** — clarity over clever. If a visitor can't tell what we sell, it failed.
2. **Make me feel it** — Kaya tactility + immerse in the problem before showing the relief.
3. **Keep it unmistakably ours** — never the templated SaaS rhythm. Craft is the moat.

## Color & accent (LOCKED)
- Canvas is warm cream→espresso **monochrome (90%)**. Don't rainbow it.
- **Primary CTA** = existing Kaya espresso/dark button. Do not restyle it.
- **Signature accent = dusty mauve** (`--accent: var(--purple-600)` ≈ `#674F68`, hover
  `purple-700`, soft `purple-50`): links, eyebrows, the ONE signature visual per page, accent
  details. Sparingly — it's the memorable note, not the wallpaper.
- **Ochre** (`--highlight: var(--yellow-600)`) = warm highlight for stats / positive hints ONLY.
- **No coral.** It's being removed (`.glow-coral-dark`, the globals.css line-4 comment, and the
  DESIGN-FOUNDATIONS doc). Never reintroduce `#E0613A`.
- **Colorblind rule (hard):** meaning is NEVER carried by color alone — use shape + label +
  position. Accent is decorative/CTA, never a status signal. Focus ring is ink, not color.
- Tints: reduce **chroma**, not opacity. Build palettes/gradients in OKLCH.

## Nostalgia → mechanism
- Real, kept thing → embossed surfaces, warm shadows, squircle, press `scale(0.97)`.
- Memories accrue → content **assembles** into place (staggered reveals ~40ms), not just fades;
  use the Pin/Pinboard keepsake motif where natural.
- Unhurried → marketing motion slower/more deliberate than product UI. **No bounce** (exception:
  the inherited KDS in-place text-swap spring, only for that micro-interaction).
- Make it tangible → for SECONDARY/feature sections, prefer ONE abstracted concept-visual, NOT a
  dense product screenshot. **EXCEPTION — the Home page is product-led (Linear "product outline"):**
  the real product UI *is* the art. The hero leads with the full `ChatBoard` window (Sidebar · Chat
  · Pinboard, rendered from the Kaya DS / `~/may-day`); later feature sections may show *partial*
  product panels bleeding in from the edge. (Revised 2026-06-16 — supersedes the old "ONE
  product-window, reserved for Proof" rule. See `docs/visuals/hero.md` + LEARNINGS.)
- Restraint → one idea per section, generous whitespace, let Besley carry the emotion.
- **Evoke, don't costume** → no sepia, Polaroid frames, retro clip-art. Heavy craft is hero-only.

## Motion (full lookup in `docs/souvenir-learnings.md` §1)
- Gate: animate only to orient / give feedback / show a relationship / rare delight. Name the
  purpose or don't animate.
- Speed: UI <300ms, hover ~150ms, press `scale(0.97)`. Marketing signature moments may be slower.
- Easing: ease-out for enter/exit; ease-in-out for on-screen move/morph; **avoid ease-in**; linear
  only for marquees/time. Enter decelerates, exit accelerates — don't just reverse the curve.
- One signature moment per page; layout + type locked BEFORE motion. Animate transform/opacity
  only. Always honor `prefers-reduced-motion`.
- **Multi-state components (esp. the site nav): the desktop nav menu is CENTERED — locked design
  intent; never restructure its layout/alignment without explicit sign-off.** Before AND after any
  nav change, screenshot-verify EVERY state: scroll `{flush, pill}` × breakpoint
  `{mobile, tablet, desktop}` × menu `{closed, mega-open, drawer-open}`, plus the flush⇄pill morph in
  BOTH directions. A morph must interpolate: never transition `max-width: none` (snaps) — use a length
  like `100%`. (See LEARNINGS 2026-06-20.)

## Typography & layout
- Besley for display/headlines (push hero toward fluid `clamp` ~72–120px); Geist for body.
- Measure ~65ch (`max-width`); `text-wrap: balance` on headings; no widows; tabular nums on
  anything numeric. Fluid `clamp()` sizing, not per-breakpoint. Type from the scale, never free-set.
- `gap` for spacing between children; nested radius = outer − padding. Asymmetry over default
  symmetry. Use `dvh` not `vh`; set `aspect-ratio` to prevent CLS.

## Components & icons (inherit Kaya)
- Reuse existing primitives first: `SectionHeading`, `FeatureSplit`, `TriSection`, `FinalCTABand`,
  `ShowcaseFrame`, `Comparison`, `ui/*`. Build new only when none fit; base interactive atoms on
  shadcn/Radix with `forwardRef` + `asChild`.
- Icons ONLY from `@strange-huge/icons` via the `size` prop — never inline SVG, never CSS-scale.
  **Valid ConnectorIcon IDs that render:** `slack, gmail, notion, stripe, github, linear, hubspot,
  figma`. `shopify`, `google-drive`, `drive`, `klaviyo` render BLANK — never use them.
- Wrap any component containing KDS `MessageBubble` in `<ClientOnly>` (hydration). Mount-gate
  `UsageBarChart`.
- Tailwind v4: `text-[var(--color)]` is dropped silently → use a semantic util or
  `text-[color:var(...)]`. Font-size vars (`text-[length:var(--text-h2)]`) are fine.

## The visual ladder + KDS classification (used by the `visual-director` skill)
When choosing a section's visual, pick a **rung** — bias toward *drawing the idea*, not showing the UI:
- **line-glyph** — a minimal line-drawn glyph/diagram that encodes the one idea. Default for most feature sections.
- **concept-card** — a small abstracted card standing for a concept (never a dense product screenshot).
- **schematic** — a diagram of a flow / relationship / map (e.g. a connector constellation, an orchestration map).
- **product-window** — real product UI (e.g. the `ChatBoard` from the Kaya DS) as the visual. On the
  product-led Home page this is a PRIMARY rung, not a once-per-page exception: hero leads with the
  full window; feature sections may show partial product panels bleeding in (Linear "product outline").
- **atmosphere** — ambient warmth / depth / texture with no literal subject.
- **none** — type + space only; let Besley carry the section.

For each direction, classify how it relates to KDS:
- **use** — render the existing KDS / marketing component as-is.
- **manipulate** (DEFAULT) — strip / re-skin a KDS primitive: reuse its tactile + emboss work, restyle for marketing.
- **build** — a bespoke new component, when boldness serves the vision and nothing existing fits. Don't let
  "reuse" flatten a section that wants a signature glyph.

**Subtle vs signature switch:** almost everything is *subtle* (ambient, secondary); exactly ONE *signature*
("grab-onto") moment per page may be bold — it reads as a peak only because everything around it stays quiet.
(Full motion detail: the `motion-and-easing` skill + `docs/motion.md`.)

## Banned patterns (the anti-slop list)
- The repeated hero → stat-trio → 3 feature-splits → comparison → CTA rhythm. Vary archetypes.
- Solution-first openers where a problem-first immersion would land harder.
- Dense literal product screenshots as the visual for every section.
- Inter / Roboto / system-font defaults; purple/blue hero gradients on white; evenly-distributed
  rainbow color; gratuitous glow/aurora/beam effects from copy-paste libraries.
- Decorative motion with no named purpose; bounce/springy easing (except the noted KDS swap).

## Before you finish a section — self-check
Does it pass all three pillars? Could this be anyone's SaaS site (if yes, it fails)? One idea, one
focal visual? Accent used sparingly and never as the only signal? Motion purposeful + reduced-motion
safe? No overflow at 390/768/1024, no console errors? If any "no" → fix before moving on.

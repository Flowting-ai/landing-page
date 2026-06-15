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
- Make it tangible → ONE abstracted concept-visual per section, NOT a dense product screenshot.
  Reserve the product "window" (ShowcaseFrame) for a single hero proof per page.
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

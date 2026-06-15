# Souvenir Website — Design Foundations

> ✅ **ACCENT UPDATED (Jun 15) — dusty mauve.** The accent table below now reflects the locked
> decision: **dusty mauve** (`--accent: var(--purple-600)` #674F68, hover `purple-700`, soft
> `purple-50`) on a warm monochrome canvas. The earlier coral has been fully removed from the codebase.
> Canonical source: the `souvenir-taste` skill + `docs/DESIGN.md`; see `docs/STRATEGY.md` §0 for the
> color rationale. Tokens themselves live in `src/styles/tokens/marketing.css`.

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
| Primary ink | `--ink` | `var(--neutral-900)` #26211E (warm near-black, never `#000`) |
| Muted ink | `--ink-muted` | `var(--neutral-500)` #827A74 |
| Accent (dusty mauve) | `--accent` | `var(--purple-600)` #674F68 — links, eyebrows, the one signature visual/page. NOT the CTA. |
| Accent hover / soft | `--accent-hover` / `--accent-soft` | `var(--purple-700)` #513853 / `var(--purple-50)` #F8ECF9 |
| Highlight (ochre) | `--highlight` | `var(--yellow-600)` #8F7427 — stats / positive hints, sparing |
| Primary CTA | (Kaya button) | the vendored `@/components/kaya/Button` espresso/dark button — unchanged |
| Dark section | `--dark-bg` | `#1A130D` (warm charcoal) |

**Colorblind rule (Chai is red-green colorblind):** meaning is never carried by
color alone — buttons have shape + label + position; mauve is decorative only, never
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
- CTA = `@/components/kaya/Button` (vendored espresso/dark, interaction locked). `ui/Button`'s
  `accent` variant now uses dusty mauve (`--accent`), not coral.
- `ui/Reveal` — scroll-reveal wrapper (above).

## Salvage decisions (old repo)

Keep: Next 16 / React 19 / Tailwind v4 / TS stack, GSAP, Formspree, legal pages.
Delete: `Iridescence` shader, fake typewriter hero, animated rainbow borders,
heavy Lottie/video. Refactor: Navbar/Footer to new language.

## Preview

`npm run dev` → `/` (Home hero) and `/foundations` (this system, rendered).

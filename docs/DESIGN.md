# Souvenir — DESIGN.md (portable design brief)

> **Canonical source = the `souvenir-taste` skill** (`.claude/skills/souvenir-taste/SKILL.md`) +
> the CSS-variable tokens in `src/styles/tokens/*`. This file and the marketing Storybook are
> **regenerated from those** — treat them as a portable mirror, not an independent source. Don't
> hand-edit it into drift; change the skill/tokens, then regenerate. Tool-agnostic on purpose so it
> works in Figma / Cursor / Lovable / any agent, not just this repo.
>
> Hex values below are the **vendored Kaya** ramp (read-only, re-syncable). The marketing layer only
> assigns *roles* on top (`src/styles/tokens/marketing.css`).

---

## 1. Visual Theme / Atmosphere

**"Souvenir is the memory your work keeps."** Make an intangible AI-orchestration product feel like a
warm, tangible, **kept object** — paper, leather, developed film — with enough craft that the
packaging itself is the proof.

- **Mood:** warm, unhurried, editorial, restrained. Nostalgia by *warmth, tactility, and pacing* —
  never by costume (no sepia, Polaroid frames, retro clip-art).
- **The 90% canvas is a warm cream → espresso monochrome.** Color is seasoning, not wallpaper.
- **Three pillars every section must pass:** (1) **Tell me what it is** — clarity over clever;
  (2) **Make me feel it** — Kaya tactility, immerse in the problem before the relief;
  (3) **Keep it unmistakably ours** — never the templated SaaS rhythm. Craft is the moat.
- **Restraint:** one idea + one focal visual per section, generous whitespace, let the serif carry the
  emotion. If it could be anyone's SaaS site, it has failed.

## 2. Color & Roles

Generate tints/gradients in **OKLCH**; for a lighter tint **reduce chroma, not opacity** (opacity greys
a color out). Neutrals are warm-biased, never pure grey.

| Role | Token | Value | Notes |
|---|---|---|---|
| Background (canvas) | `--bg` | `#F7F2ED` (neutral-50) | the 90% warm cream field |
| Background subtle | `--bg-subtle` | `#FCFAF7` | |
| Surface / cards | `--surface` | `#FFFFFF` | |
| Warm panel | `--surface-warm` | `#EDE1D7` (neutral-100) | |
| Ink (primary) | `--ink` | `#26211E` (neutral-900) | warm near-black — **never `#000`** |
| Ink secondary | `--ink-secondary` | `#524B47` (neutral-700) | |
| Ink muted | `--ink-muted` | `#827A74` (neutral-500) | |
| Line / border | `--line` / `--line-strong` | `#EDE1D7` / `#D1C6BD` | |
| **Accent — dusty mauve** | `--accent` | `#674F68` (purple-600) | links, eyebrows, the ONE signature visual per page. **Decorative only.** |
| Accent hover / soft | `--accent-hover` / `--accent-soft` | `#513853` / `#F8ECF9` | (purple-700 / purple-50) |
| **Highlight — ochre** | `--highlight` | `#8F7427` (yellow-600) | stats / positive hints **only** |
| Dark section bg | `--dark-bg` | `#1A130D` | warm charcoal |
| **Primary CTA** | (Kaya Button) | espresso/dark | the vendored `kaya/Button` — **not** the accent |

**Why mauve, used sparingly:** it's the *muted* purple from Kaya (the product deliberately dropped the
saturated brand purple). At a signature dose on a warm field it reads as a kept, personal note — not a
tech-brand statement. Overusing it burns that. The **ochre** swap (`data-theme="ochre"`) is the
documented one-token fallback if brand ever objects to mauve.

**Hard rules:**
- **Colorblind (red–green):** meaning is **never** carried by color alone — pair shape + label +
  position. Accent is decorative/CTA, **never a status signal**. Focus ring is **ink**, not a color.
- **No coral** (former `#E0613A`) — fully removed; never reintroduce.
- Contrast: WCAG AA — 4.5:1 body, 3:1 large text / UI.

## 3. Typography

- **Besley** (serif) — display + all headings. **Geist** (sans) — body, UI, labels.
  **Geist Mono** — code. No Inter / Roboto / system-font defaults.
- **Fluid `clamp()` scale** (never per-breakpoint, never free-set):

| Token | Range | Use |
|---|---|---|
| `--text-hero` | 48 → 96px | editorial hero (Besley) |
| `--text-display` | 40 → 64px | big section heads |
| `--text-h1` / `--text-h2` / `--text-h3` | 32→52 / 26→40 / 20→24px | headings |
| `--text-lead` | 18 → 22px | intro paragraphs |
| `--text-body` / `--text-small` / `--text-micro` | 16 / 15 / 13px | body, labels, eyebrows |

- **Measure ~65ch** (`--measure`); **`text-wrap: balance`** on headings; **no widows**; **tabular nums**
  on anything numeric. Hero ceiling capped at 96px — generous but restrained.

## 4. Component Stylings

- **Reuse first:** `SectionHeading`, `FeatureSplit`, `TriSection`, `FinalCTABand`, `ShowcaseFrame`,
  `Comparison`, `Eyebrow`, `ui/*`. Build new only when none fit; base interactive atoms on
  shadcn/Radix with `forwardRef` + `asChild`.
- **CTA = the vendored `kaya/Button`** — squircle, emboss shadows, corrosion hover glow, press
  `scale(0.98)`, ink focus ring. Interaction is **locked**; never restyle it. Sizes `md`/`sm` today;
  a larger marketing size would be an *additive geometry-only* variant to **upstream into KDS**.
- **Icons** ONLY from `@strange-huge/icons` via the `size` prop — never inline SVG, never CSS-scale.
  Valid `ConnectorIcon` IDs: `slack, gmail, notion, stripe, github, linear, hubspot, figma`.
  `shopify / google-drive / drive / klaviyo` render **blank** — never use.
- Wrap any KDS `MessageBubble` in `<ClientOnly>` (hydration); mount-gate `UsageBarChart`.
- Every interactive element needs distinct **default / hover / focus / active / disabled** (+ loading)
  states. Touch targets ≥ 44×44px. Disabled = a muted token, not opacity.

## 5. Layout

- Content width `--maxw` 1200 / `--maxw-wide` 1280; fluid `--gutter` (20→64px); text capped at `--measure`.
- **Section rhythm is a scale, deliberately varied:** `--section-y-sm` / `--section-y` / `--section-y-lg`.
- **`gap` on the parent** for child spacing (no trailing margins). **Nested radius = outer − padding.**
- **Asymmetry over default symmetry.** Radius: `--r-sm` 8 · `md` 12 · `lg` 16 · `xl` 20 · `2xl` 28 · pill.
- Mobile: `dvh` not `vh`; set `aspect-ratio` on media to prevent layout shift. Watch `overflow:hidden`
  silently breaking sticky children.

## 6. Depth & Elevation

Depth is **tactile, not floaty** — Souvenir should feel pressed/printed, like a real object.

- **Warm-tinted shadows only** (`rgba(82,75,71,…)` espresso), never grey/blue. Scale: `--shadow-sm`
  (resting) · `--shadow-md` (raised/hover) · `--shadow-lg` (floating — ShowcaseFrame, modals).
- **The emboss** is the identity move: `--shadow-inner` = top white inner-highlight + bottom warm
  inner-line, layered *over* a surface's outer shadow. Used by the Kaya Button and `ShowcaseFrame`.
- **Squircle** (not plain radius) on the hero CTA + framed surfaces — corner curvature is part of the
  tactile signature. **Press = `scale(0.97–0.98)`**, ~150ms.
- **Heavy craft is hero-only** (layered shadows / grain) — it's an LCP/perf cost; don't sprinkle it.

## 7. Motion

Marketing motion is **slower and more deliberate** than product UI; the feeling is *arrival* — content
**assembles into place** (stagger ~40ms), it doesn't just fade.

- **Gate:** animate only to orient / give feedback / show a relationship / rare delight. Name the
  purpose or don't animate.
- **Speed:** hover ~150ms (`--dur-hover`), UI <300ms (`--dur-fast`), default `--dur` .5s, signature
  moment up to `--dur-signature` 1.1s. **One signature moment per page**, layout+type locked first.
- **Easing:** `--ease-out` for enter/exit; `--ease-in-out` for on-screen move/morph; **avoid ease-in**;
  linear only for marquees/time. **Enter ≠ exit** (enter decelerates, exit accelerates).
- **No bounce/spring** (exception: the inherited KDS in-place text-swap). Animate **transform + opacity
  only**. **Always** honor `prefers-reduced-motion`. Single entrance primitive = `<Reveal>`.

## 8. Do's & Don'ts

**Do**
- Lead with what it plainly is; immerse in the problem before the relief.
- One abstracted concept-visual per section; reserve the product "window" (ShowcaseFrame) for one hero proof.
- Vary section archetypes (hero · problem-immersion · feature-row · proof · comparison · CTA · footer).
- Treat copy as a design job — spacing = pacing, line-breaks = pauses, no widows.

**Don't**
- ❌ The repeated `hero → stat-trio → 3 feature-splits → comparison → CTA` rhythm.
- ❌ Dense literal product screenshots as every section's visual.
- ❌ Purple/blue hero gradients on white; evenly-distributed rainbow color; gratuitous glow/aurora/beam.
- ❌ Inter/Roboto/system fonts; coral / `#E0613A`; decorative motion with no named purpose; bounce.
- ❌ Color as the only signal for meaning. ❌ Forking Kaya tokens (extend, never fork).

## 9. Responsive

- **Fluid `clamp()`** for type and section rhythm — break where content actually breaks, not at assumed
  device widths.
- Verify every change at **390 / 768 / 1024 / 1440** — no horizontal overflow, no console errors.
- Use `dvh` for full-height; respect safe-area for fixed bottom elements; `aspect-ratio` to reserve space.
- Verification loop = `node scripts/shot.mjs <route> <label> [768 1024]` (dev on :4321) + the
  `design-audit` skill. Full-page checks live here, **not** in Storybook.

---

## Agent Prompt Guide

When prompting an agent (Claude/Cursor/Lovable/Figma) to build or review a Souvenir marketing surface,
include this scaffold:

> Build/review a Souvenir marketing **<section/page>**. Souvenir is *"the memory your work keeps"* —
> make intangible AI orchestration feel like a warm, kept object. Use the **warm cream→espresso
> monochrome** canvas; the signature accent is **dusty mauve `#674F68`**, used **decoratively and only
> once per page** (links, eyebrows, one signature visual) — the CTA is the **dark espresso Kaya
> button**, never mauve. Ochre `#8F7427` is for stats only. **Besley** for display (hero up to 96px,
> fluid `clamp`), **Geist** for body, measure ~65ch, `text-wrap: balance`, tabular nums.
> Depth is **tactile**: warm shadows + emboss + squircle, press `scale(0.97)`. Motion is slow and
> purposeful — content *assembles* (stagger ~40ms), `ease-out` enter, **no bounce**, one signature
> moment, always reduced-motion safe. **Pick a section archetype deliberately** (hero /
> problem-immersion / feature-row / proof / comparison / CTA / footer) — never the repeated SaaS
> rhythm. One idea + one abstracted concept-visual per section (not a dense screenshot).
> **Hard constraints:** meaning never by color alone (colorblind-safe — shape+label+position; focus
> ring is ink); no coral; no Inter/Roboto; no purple/blue gradients-on-white; extend Kaya tokens,
> never fork; tokens only, no magic numbers.

**Self-check before "done":** Passes all three pillars? Could this be anyone's SaaS site (if yes, it
fails)? One idea + one focal visual? Accent sparing and never the only signal? Motion purposeful +
reduced-motion safe? No overflow at 390/768/1024, no console errors?

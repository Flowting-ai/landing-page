# DESIGN.md — ElevenLabs (reference only)

> Reference teardown to study **structure & the one-signature-motif move**, NOT to copy. Source:
> `.refs/elevenlabs.png` + general knowledge.

## 1. Visual Theme & Atmosphere
Light, airy, technical-yet-playful. "Bringing technology to life." Spacious and clean, with one
memorable decorative motif (soft gradient spheres) doing the emotional work on an otherwise neutral base.

## 2. Color Palette & Roles
- Canvas: near-white (`#FFFFFF`–`#FAFAFA`).
- Ink: black / near-black.
- **Signature motif: soft multicolor gradient orbs** (purple→pink→orange, green→orange) — the ONE
  place color lives, used as media/illustration, not UI.
- UI chrome: black, white, light-gray borders. Restrained.

## 3. Typography Rules
Clean grotesque sans (Aeonik-like). Large, relatively light-weight hero; regular body. Tight,
modern, low-drama. Hierarchy by size/weight, not color.

## 4. Component Stylings
Black pill primary ("Sign up") + white outline secondary ("Contact sales"); segmented tab control
(ElevenCreative / Agents / API); gradient-circle media tiles with a centered play button; arrow links.

## 5. Layout Principles
Asymmetric hero (left headline + right paragraph). A large rounded card houses the tabbed showcase.
Coverflow pattern: one centered focal item, flanking items faded. Generous spacing.

## 6. Depth & Elevation
Soft. Rounded cards, faint borders, gentle shadows. The gradient orbs add depth through color/blur,
not drop-shadow.

## 7. Do's & Don'ts
- ✅ One signature decorative motif (the orbs); black/white restraint elsewhere; rounded showcase cards.
- ❌ Heavy shadows; color scattered across UI chrome; more than one competing motif.

## 8. Responsive Behavior
Showcase card and coverflow collapse to a single centered item; hero stacks.

## 9. Agent Prompt Guide
"Near-white canvas, black ink, clean grotesque sans, hierarchy by size/weight. Introduce exactly ONE
signature decorative motif (soft multicolor gradient spheres) as the only color; keep all UI chrome
black/white/gray. Black pill CTAs, rounded showcase cards, airy spacing, coverflow for options."

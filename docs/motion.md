# Souvenir Motion

The Souvenir marketing-site motion rulebook. Read alongside `souvenir-taste` and the
`visual-director` skill. Built on Emil Kowalski's method: state the *why*, make it a rule, follow
it strictly — so the agent reasons about new cases instead of inventing its own.

## Inherit, don't duplicate
- **`emilkowalski/skill`** (`npx skills add emilkowalski/skill`) owns the **universal craft**:
  the easing flowchart, duration guidelines, the initial-scale trick (animate from ~0.95, not 0),
  spring/interruptible behavior. Follow it for the "how." Do NOT restate it here.
- **KDS** owns the **product motion grammar**: named curves (e.g. `[0.16, 1, 0.3, 1]`,
  ease-out-expo `[0.22, 1, 0.36, 1]`), the explicit **no-bounce** decision, exit-faster-than-enter,
  on-tap scale, origin-aware growth. *Inherit these — the marketing site extends the product's
  grammar; it does not reinvent it.*
- This file adds only the **Souvenir marketing-specific** layer below.

## The gate: should this even move?
- Animate only with a purpose: **orient, give feedback, show a relationship, or rare delight.**
  If you can't name the purpose in a sentence, don't animate. *Why: motion without purpose is
  decoration, which reads as slop and costs performance.*
- **Frequency governs intensity** — the more often a user sees it, the shorter/subtler it must
  be, or none. *Why: a flourish you see once delights; the same flourish on every scroll becomes
  friction.*
- **Default for marketing feature sections: static, or a single quiet entrance reveal.** Motion
  is the exception, not the page's texture. *Why: the warmth comes from typography, depth, and
  space — not from things constantly moving.*

## Marketing pacing (the Souvenir layer)
- Marketing motion is **slightly slower and more deliberate** than the product UI. *Why: unhurried
  pacing is the feeling of nostalgia/keepsake; product UI is snappy, marketing is considered.*
- Still controlled — entrance reveals stay tasteful, never theatrical. **No bounce** (inherited
  from KDS). *Why: bounce contradicts the restrained, warm voice.*

## The one signature moment per page
- **Exactly ONE** signature motion moment per page. Everything else is micro or static. *Why: a
  single signature is the beat people screenshot; five signatures is noise and tanks performance.*
- **Home's signature = scatter → assemble**: fragments fly in and settle into order = "the memory
  your work keeps," made physical. Spec: staggered (~40ms), ease-out, `transform`/`opacity` only,
  plays **once**, full static fallback under reduced-motion.
- The signature is allowed to be **bold** (the subtle-vs-signature switch in `souvenir-taste`).
  Everything around it stays quiet so it reads as the peak. *Why: a peak only reads as a peak
  against calm.*

## Micro-interactions (consistent, from tokens)
- Press: `scale(0.97)` on `:active` (~150ms). Hover: color/opacity shift **plus cursor change**
  (~150ms). Focus: an **ink** ring, never removed — restyled. *Why: distinct states are the tell
  of finished UI; a color-only hover fails the colorblind rule.*
- All micro values come from **motion tokens**, never ad-hoc. *Why: ad-hoc timings drift and stop
  feeling like one system.*

## Entrance reveals
- One `Reveal` primitive: fade + ~24px rise, ease-out (KDS curve), triggered **once** on
  scroll-in. Stagger ~40ms for groups. *Why: all-at-once reads as a flash; a small stagger reads
  as items being placed — which ties straight into the memory/assembly metaphor.*
- **Enter ≠ exit:** enter decelerates into place (arrival); exit accelerates away (departure).
  Don't just reverse the enter curve. *Why: arrival and departure feel different in the real
  world, and the eye knows it.*

## Reduced motion (hard rule)
- Every significant movement checks `prefers-reduced-motion` and has a **complete static
  fallback** — including the signature moment. *Why: accessibility, and some users get motion
  sick; the page must be fully legible and complete with zero animation.*

## Performance budget
- Animate **`transform` and `opacity` only** (GPU-composited). Never `width`/`height`/`top`/
  `left`/`padding`. *Why: those trigger layout on every frame = jank.*
- **No heavy Lottie, no autoplay video, no WebGL-by-default.** 3D or physics is allowed only as
  the one signature moment, if it earns its place, and budgeted for LCP. *Why: the old V1's ~14MB
  Lottie is exactly the bloat that was removed; weight is the enemy of the crafted feel on mobile.*
- `will-change` is a hint, not a default.

## Tuning workflow
- Tune the signature moment's timing / easing / stagger **live with Leva** (dev-only), then
  **bake the chosen values into marketing motion tokens and remove Leva from the bundle.** *Why:
  keeps the no-heavy-deps rule; final values live in tokens, not as magic numbers in a component.*

## Per-section motion defaults (Home — quick reference)
| Section | Motion default |
|---|---|
| Hero (foliage) | Quiet; a slow light-drift only if the foliage is committed. Static otherwise. |
| Problem (Chaos) | **THE signature moment** — scatter → assemble. |
| Turn | None. |
| Two ways | Hover micro only. |
| Proof / Relief | Single entrance reveal. |
| Pillars | Staggered reveal of the glyphs (~40ms). |
| Comparison | None. |
| Brain | Subtle entrance only. |
| Footer | None. |

## Anti-patterns
- Motion on every section (texture, not signature). Bounce anywhere. Animating layout properties.
- Autoplay video / heavy Lottie / WebGL by default. Decorative motion that fails name-it-or-cut-it.
- A signature moment shipped without a reduced-motion fallback. Two "signature" moments on one page.

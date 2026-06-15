---
name: motion-and-easing
description: Invoke when ADDING or REVIEWING any animation/motion/transition/scroll-reveal/hover/micro-interaction on the Souvenir site. Case-by-case (not always-on). Provides the strict motion gate, easing lookup, durations, and the subtle-vs-grab-onto dial. Full source — docs/souvenir-learnings.md §1.
---

# Motion & Easing

Rules, not suggestions. If a motion choice would break one, stop and flag it. Layout + type lock
BEFORE motion (except: gray-box the ONE signature moment early to validate its feel).

## The gate — animate only if you can name the purpose
Purpose = orient · give feedback · show a relationship · rare delight. **No decoration.** If you
can't name it, don't animate. **Frequency governs intensity:** the more often it's seen, the shorter
& subtler — or none. Never animate frequently-repeated keyboard/list actions (feels laggy).

## The subtle vs grab-onto dial (decide per element)
- **Subtle / "if you know you know"** — background atmosphere, ambient depth. Default for anything
  repeated or secondary. Barely there.
- **Grab-onto** — a moment you WANT the user to notice (the one signature moment, a hero reveal, a
  key state change). Can be bolder — but still tasteful, eased, never gimmicky.
Don't default everything to subtle; choose the register on purpose.

## Speed
UI < 300ms · hover ~150ms · press feedback `scale(0.97)` on `:active` (~150ms). Marketing signature
moments may be slower/unhurried (the nostalgia pacing) — but deliberate, never sluggish.

## Easing — a lookup, not a choice
- **ease-out** → user-initiated enter/exit (dropdowns, modals, reveals). Default for most.
- **ease-in-out** → elements already on screen moving/morphing to a new position.
- **ease-in** → AVOID (sluggish start).
- **linear** → only constant motion: marquees, spinners, time-fills.
- **ease** → small hover color/opacity/background shifts.
- Keep custom `cubic-bezier` curves sorted weak→strong per type. **No bounce / no springs** — EXCEPT
  the inherited KDS in-place text-swap (spring 500/30), the one sanctioned exception.

## Other rules
- **Enter ≠ exit:** enter decelerates into place; exit accelerates away. Don't just reverse the curve.
- **Stagger** ~40ms between list/grid items (arrival, not a flash). Content should *assemble* (the
  "memories accrue" mechanic), not just fade.
- **Spatial consistency / origin-aware:** a popover grows from the control that opened it, etc.
- **Reduced motion:** every significant movement checks `prefers-reduced-motion` and degrades to a
  fade or nothing.
- **Performance:** animate `transform` + `opacity` ONLY (GPU). Never width/height/top/left/padding.
  `will-change` as a hint, not a default. Heavy craft (grain, layered shadow) = hero-only (LCP).
- **One signature moment per page.** CSS by default; escalate to Motion/GSAP only for that moment.
  Tune params with Leva, then bake chosen values into tokens and drop Leva from the bundle.

## Prompt vocabulary (use exact names)
fade/slide/scale/pop/reveal; stagger, orchestration; translate/scale/rotate, transform-origin;
crossfade, morph, shared-element/layout animation, accordion, direction-aware; scroll-reveal,
scroll-driven, parallax; hover, press feedback, hold-to-confirm; marquee, pulse, float; number
ticker (tabular nums), typewriter, skeleton/shimmer, clip-path/mask.

## When reviewing motion — output format
For each animation: **purpose** → **register** (subtle/grab-onto) → **easing + duration** →
**reduced-motion path** → **verdict** (keep / tune / cut). Flag any that fail the gate or the bans.

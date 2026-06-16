---
title: Building high-craft concept visuals (node-maps, scatters, rosters) without a graph lib
date: 2026-06-16
category: design-patterns
module: marketing-website
problem_type: design_pattern
component: tooling
severity: medium
applies_when:
  - "Building a system-map / connector diagram, persona roster, or floating-card visual on the site"
  - "Tempted to reach for react-flow / a diagram library for a static marketing visual"
tags: [concept-visuals, svg, node-map, responsive, kaya-ds, marketing]
---

# Building high-craft concept visuals without a graph lib

## Context
The Souvenir Home needs rich UI-concept visuals (connectors→Brain→agents node-map, Slack tree,
persona roster, floating automation cards, a Brain chat window). They must be crisp, responsive,
themeable (mauve/ochre), animatable (the §2 assemble), and consistent with the Kaya DS.

## Guidance
- **Build composed DOM/SVG from KDS atoms — not images, not a diagram library.** react-flow / jointjs /
  syncfusion are for *interactive* editors (drag/zoom/pan) — heavy and off-brand for a static
  marketing diagram. Hand-coded SVG + DOM is lighter, fully controllable, and on-brand.
- **Node-map technique:** position nodes absolutely; draw edges in a single inline `<svg>` layer that
  overlays the node container with `pointer-events: none`, sitting *under* the nodes. Use a fixed
  `viewBox="0 0 100 100"` with `preserveAspectRatio="none"` (or a real aspect ratio) and express both
  node positions and SVG path coords as **percentages of the same coordinate space** — so the whole
  map scales with its container and needs **no runtime `getBoundingClientRect` measurement**.
- **Edges:** prefer soft curves (cubic bezier `C`) toward an organic feel, or orthogonal elbows
  (`L` right-angles) for a "wiring" feel; stroke `var(--line-strong)`, 1–1.5px. Keep them behind nodes.
- **Responsive = reflow, not scale.** Below ~768px, drop the SVG edges and stack nodes vertically with
  simple vertical connectors (or hide edges entirely). Never let a dense map shrink-to-blur.
- **4 reusable archetypes** cover every Home visual: **NodeMap** (edges+nodes), **Scatter**
  (z-layered offset cards — also the §2 assemble target), **Roster** (Avatar+Badge rows, one elevated
  with a dashed-focus boundary), **Window** (the one ShowcaseFrame product proof). Wrap all in one
  `<Visual>` diorama frame for shared backdrop/padding/depth/responsive behavior.
- **Assets:** only true rasters/illustrations (persona avatars, the Brain mark, app logos absent from
  `@strange-huge/icons`) get pulled from Figma (`download_assets`) and optimized into `public/`.
  Everything else is DOM/SVG.

## Why This Matters
DOM/SVG visuals stay sharp at any DPI, reflow on mobile, retheme with tokens, and can be animated
(the signature assemble only works on real nodes). Images would be heavy, blurry on retina, frozen,
and would drift from the DS. A graph library adds bundle weight and an interaction model we don't want.

## When to Apply
Any Souvenir marketing concept-visual. Reach for a real diagram lib only if the visual must be
user-interactive (drag/zoom) — which marketing visuals are not.

## Related
- `docs/pages/website-10x-loop.md` (the build queue + archetypes), `docs/DESIGN.md`, `souvenir-taste`.

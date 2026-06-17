---
title: "Scroll-state nav (flush→pill) + Radix Dialog/Viewport gotchas"
date: 2026-06-16
category: design-patterns
module: marketing-website
problem_type: design_pattern
component: site-nav
severity: medium
applies_when:
  - "Building a transparent-over-hero nav that condenses into a floating pill on scroll"
  - "Promoting a hand-rolled mobile drawer/menu to a Radix Dialog"
  - "Animating backdrop-filter blur, or fading in a sticky bar on scroll"
  - "Consuming a CSS custom property inside any Radix Portal (Dialog, Popover, Tooltip, mega-menu Viewport)"
tags: [site-nav, radix, dialog, navigation-menu, css-vars, backdrop-filter, focus-ring, a11y, scroll-state]
---

# Scroll-state nav (flush→pill) + Radix Dialog/Viewport gotchas

## Context
Nav V2 refined `SiteNav`/`MegaMenu`: a flush, transparent bar over the hero that condenses into a
floating pill on scroll (with a wordmark→mark logo crossfade), the mobile drawer promoted to a real
Radix `Dialog`, and the mega-menu moved to a shared `NavigationMenu.Viewport` that size-morphs between
panels. Four non-obvious failure modes surfaced — each cost real debugging and each recurs in any
similar nav/overlay work.

## Guidance

**1. Component-scoped CSS vars don't reach Radix Portals — put shared metrics on `:root`.**
A Radix `Dialog`/`Popover`/`Tooltip` `Portal` renders into `<body>`, outside your component's subtree.
A var defined on `.site-nav { --nav-shell-h: 5.25rem }` is **undefined** inside the portaled content,
so `top: var(--nav-shell-h)` becomes invalid and silently falls back to `auto` (element mispositions —
often invisible). Define any var the portal consumes on `:root`, or give every usage a fallback
(`var(--nav-shell-h, 5.25rem)`). Verify portaled overlays with `getBoundingClientRect()`, not "it rendered."

**2. `outline-none` silently kills a global ink `:focus-visible` ring.**
globals.css ships `:focus-visible { outline: 2px solid var(--focus-ring-c) }` (ink). A nav trigger class
carrying `outline-none` overrides it → keyboard focus shows no ring (a11y regression). Never ship
`outline-none` without a `focus-visible` replacement; prefer dropping it so the global ink ring shows.
Verify with a **real keyboard Tab** — programmatic `.focus()` does not trigger `:focus-visible`.

**3. `backdrop-filter` can't cross-fade via wrapper opacity — animate the `blur()` value; keep the
sticky outer height constant.** Fading a backdrop-filtered layer with `opacity` flashes/repaints
mid-browser. Animate the filter value itself (`blur(0) → blur(8px)`). And a scroll-state bar must keep a
**constant outer reserved height**, morphing only an inner wrapper — a sticky element whose own height
changes reflows the content below it at the threshold (a visible lurch).

**4. A Radix `Dialog` used as a toggle needs an `onInteractOutside` guard against the trigger.**
If the same hamburger both opens and closes (no `Dialog.Trigger`), a click on it while open fires
`onInteractOutside` (close) *and* the button's `onClick` (toggle) — a race that can reopen. Guard it:
`onInteractOutside={(e) => { if (triggerRef.current?.contains(e.target)) e.preventDefault(); }}`.

## Why This Matters
Three of the four are *silent* failures (no console error): the var falls back, the focus ring just
isn't there, the blur flashes. They pass a quick "looks fine" glance and only surface under keyboard
nav, a screen reader, or a portaled overlay in the wrong place. Codifying them turns a multi-step
debug into a checklist item.

## When to Apply
Any sticky/transparent nav with a scroll state; any Radix overlay (`Dialog`/`Popover`/`Tooltip`) that
reads CSS vars or is driven by a toggle button; any place you strip an outline or animate a filter.

## Examples

CSS var scope (the fix):
```css
/* WRONG — drawer is portaled to <body>, can't see this var */
.site-nav { --nav-shell-h: 5.25rem; }
/* RIGHT — on :root so the portal inherits it */
:root { --nav-shell-h: 5.25rem; }
.site-nav__drawer { top: var(--nav-shell-h); } /* portaled — now resolves */
```

Constant-height shell, inner pill morphs (no layout lurch):
```css
.site-nav__shell { display: flex; align-items: center; min-height: var(--nav-shell-h); } /* constant */
.site-nav__pill { transition: max-width 320ms var(--ease-out), background-color 320ms var(--ease-out),
                  -webkit-backdrop-filter 320ms var(--ease-out), backdrop-filter 320ms var(--ease-out); }
.site-nav__pill.is-flush { background-color: transparent; backdrop-filter: blur(0); }
.site-nav__pill.is-pill  { background-color: color-mix(in oklch, var(--surface) 85%, transparent);
                           -webkit-backdrop-filter: blur(8px); backdrop-filter: blur(8px); }
```

Dialog toggle guard:
```tsx
<Dialog.Content
  onCloseAutoFocus={(e) => { e.preventDefault(); triggerRef.current?.focus(); }}
  onInteractOutside={(e) => {
    if (triggerRef.current && e.target instanceof Node && triggerRef.current.contains(e.target)) e.preventDefault();
  }}
>
```

Mega-menu size-morph: extend `NavigationMenu` with a single `NavigationMenu.Viewport`; let each panel
set its own width and give the varying-height panel a `min-height` so the viewport doesn't jitter on an
inner state change (e.g. an audience switch). See `src/components/site/MegaMenu.tsx`,
`src/components/site/SiteNav.tsx`, and the `.site-nav__*` / `.nav-viewport` blocks in `src/app/globals.css`.

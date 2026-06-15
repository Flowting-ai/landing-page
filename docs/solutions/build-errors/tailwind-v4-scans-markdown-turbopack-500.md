---
title: Tailwind v4 scans markdown and emits malformed CSS that 500s the Turbopack dev server
date: 2026-06-15
category: build-errors
module: marketing-design-system
problem_type: build_error
component: tooling
symptoms:
  - "Turbopack dev server returns HTTP 500 on every route with `Unexpected end of input` from globals.css"
  - "Generated CSS contains `.text-[color:var()] { color: var(); }` (empty var)"
  - "`next build` only WARNS on the same CSS while `next dev` fails hard"
root_cause: config_error
resolution_type: config_change
severity: medium
tags: [tailwind-v4, storybook, turbopack, source-scanning, css-variables, mdx]
---

# Tailwind v4 scans markdown and emits malformed CSS that 500s the Turbopack dev server

## Problem
Tailwind v4 auto-detects source files across the whole project (everything not gitignored, including
`.md`/`.mdx`). Storybook MDX docs and planning docs quoted example utility classes like
`text-[color:var()]` and `text-[var(--color)]` in prose. Tailwind extracted those as real class
candidates and generated malformed CSS (`color: var();`), which crashed the Turbopack dev server with
a 500 on every route.

## Symptoms
- `GET / 500` on every route; dev overlay / log shows `Unexpected end of input` originating from
  `src/app/globals.css`.
- The offending generated rule is `.text-[color:var()] { color: var(); }` (and a `var(...)` variant
  that errors with `Unexpected token Delim('.')`).
- Critically, `next build` (production) only emitted these as **warnings** and compiled successfully —
  the failure was **dev-only** (Turbopack is stricter), so a green prod build gave false confidence.

## What Didn't Work
- **Grepping `src/` for the literal class** — the empty `text-[color:var()]` wasn't in `src/`. The
  offenders were in root-level docs (`HANDOFF.md`, `DESIGN-REFINEMENT-PLAN.md`) and the new Storybook
  MDX, because Tailwind v4 scans the entire project, not just `src/`.
- **Rewording one MDX file** — fixed those two candidates but it was whack-a-mole: every doc that
  quotes a `text-[...]` example (including a portable `DESIGN.md`) re-introduces the problem.

## Solution
Stop Tailwind from scanning markdown at all — no Tailwind utility is ever authored in `.md`/`.mdx`
(site classes live in `.tsx`), so excluding it is safe and prevents the whole class of failure.
In `src/app/globals.css`, right after the Tailwind import:

```css
@import "tailwindcss";

/* No Tailwind utility is authored in markdown; docs quote example classes in prose. */
@source not "../../**/*.md";
@source not "../../**/*.mdx";
```

Also gitignore build output that contains class-like strings in its bundles:

```gitignore
# storybook build output
/storybook-static/
```

(`@source not` requires Tailwind v4.1+; verify with `node -p "require('tailwindcss/package.json').version"`.)

## Why This Works
`@source not` removes a glob from Tailwind v4's content-detection set, so candidate extraction never
reads markdown — the malformed `var()` rules are never generated, and the dev server compiles cleanly.
Gitignoring `storybook-static/` keeps its JS bundles (which embed every story's class strings) out of
both the scan set and git. Paths in `@source` resolve relative to the CSS file (`src/app/` → `../../`
= repo root).

## Prevention
- **Verify on `next dev`, not just `next build`.** Turbopack dev rejects malformed CSS that the
  production build only warns about — a clean prod build is not proof the dev server runs.
- When adding Tailwind v4 to a repo with docs/MDX, exclude markdown from scanning up front.
- If a doc must show a bracketed arbitrary-value example, describe it in prose rather than pasting a
  literally-valid-looking `text-[...]` token, OR rely on the `@source not` exclusion above.

## Related Issues
- `docs/solutions/developer-experience/design-audit-screenshot-step.md` — same repo, the screenshot
  verify loop (`scripts/shot.mjs`) used to catch the 500 here. Low overlap (different problem).

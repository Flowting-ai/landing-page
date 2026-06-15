---
title: design-audit needs a repo-local screenshot step (scripts/shot.mjs)
date: 2026-06-15
category: developer-experience
module: design-audit
problem_type: developer_experience
component: tooling
severity: medium
applies_when:
  - Running the design-audit skill or sub-agent on a built section/page
  - Any verify/screenshot step for the marketing site
tags: [design-audit, screenshots, playwright, reduced-motion, workflow]
---

# design-audit needs a repo-local screenshot step (scripts/shot.mjs)

## Context
The `design-audit` skill (`.claude/skills/design-audit/SKILL.md`) and sub-agent
(`.claude/agents/design-audit.md`) both instruct the auditor to "use the repo's screenshot step"
and to screenshot full-page at 1440 + 390 with reduced-motion. But no screenshot script existed in
the repo — only an external, mature harness at `~/.shot-harness` (Playwright, hardcoded per-page
scripts). With nothing discoverable in-repo, the agent would have re-authored a one-off Playwright
script on every audit run, or skipped the (mandatory) visual step.

## Guidance
Use the repo-local wrapper for all audit/verify screenshots:

```bash
npm run dev                                  # serves on http://localhost:4321
node scripts/shot.mjs <route> <label> [768 1024]
# e.g. node scripts/shot.mjs /product/brain brain 768 1024
```

It captures full-page, reduced-motion at 1440 + 390 (plus any extra widths passed, for the
390/768/1024 overflow check) into `/tmp/souvenir-shots/<label>-<width>.png`. It loads Playwright
from `~/.shot-harness/node_modules` via `createRequire`, so the repo needs **no** Playwright
dependency installed.

## Why This Matters
The visual is the whole point of the audit — skipping it or hand-rolling a fresh capture each run is
slow and inconsistent. Reusing the existing `~/.shot-harness` Playwright avoids adding a heavy
browser dependency (and its download) to the marketing-site repo while still giving the agent one
stable, documented entry point.

## When to Apply
- Any time the `design-audit` skill/agent runs against a section or page.
- The screenshot step inside the per-page S3 build loop and any "verify" pass.

## Examples
- `node scripts/shot.mjs / home` → `/tmp/souvenir-shots/home-1440.png` + `home-390.png`.
- `node scripts/shot.mjs /pricing pricing 768 1024` → adds `pricing-768.png` + `pricing-1024.png`
  for the overflow check.

## Related
- `scripts/shot.mjs` — the wrapper.
- `.claude/skills/design-audit/SKILL.md` and `.claude/agents/design-audit.md` — both wired to it.
- `docs/LEARNINGS.md` — 2026-06-15 PROCESS entry (short form).

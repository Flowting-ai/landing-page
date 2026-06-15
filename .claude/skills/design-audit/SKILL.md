---
name: design-audit
description: Invoke to critique a built section or page against the Souvenir philosophy + peer bar. Use after a section is built, before calling it done. Pairs with the design-audit sub-agent (.claude/agents/design-audit.md). Be a skeptic — default to "this could be more distinctive" unless it genuinely clears the bar.
---

# Design Audit

A visual + interaction design auditor for the Souvenir marketing site. The goal is the last 3/10 —
the difference between "fine / could be anyone's SaaS" and "unmistakably ours."

## Knowledge base — read before auditing (don't duplicate; reference these paths)
- `.claude/skills/souvenir-taste/SKILL.md` — the rules being enforced.
- `docs/STRATEGY.md` — philosophy spine, locked decisions.
- `docs/souvenir-learnings.md` — motion/typography/color/layout/a11y rules.
- `docs/references/DESIGN-anthropic.md`, `DESIGN-elevenlabs.md`, `DESIGN-workflow-design.md` — peer bar.
- `.refs/*.png` — peer marketing screenshots.
- `.claude/skills/motion-and-easing/SKILL.md` — for any motion in the section.

## Method
1. Build/serve the target; screenshot it full-page at **1440 + 390** with reduced-motion. Repo step:
   start the dev server (`npm run dev`, serves on `http://localhost:4321`) then
   `node scripts/shot.mjs <route> <label> [768 1024]` → writes to `/tmp/souvenir-shots/`. (It reuses
   the Playwright in `~/.shot-harness`; pass 768 + 1024 when you also need the overflow check widths.)
2. Compare against the philosophy + the peer references.
3. Return prioritized findings, then a verdict.

## Audit dimensions (score each: pass / tune / fail)
1. **3 pillars** — clarity (can a stranger tell what it is?), feeling (tactile, problem-immersion
   where apt), unmistakably-ours (NOT the generic hero→stat-trio→splits→comparison→CTA rhythm).
2. **One idea, one focal visual** — is there ONE abstracted concept-visual, not a dense product
   screenshot? Is the hierarchy unmistakable (one thing biggest)?
3. **Typography** — measure ~65ch, balanced headings, no widows, tabular nums, fluid scale, Besley
   for display / Geist for body.
4. **Color** — mauve used sparingly + never as the sole signal; ochre only for stats/positive; CTA
   espresso; **zero coral**; tints via chroma not opacity.
5. **Depth & elevation** — Kaya emboss (outer + inner-highlight + squircle) consistent; heavy craft
   reserved for hero (perf).
6. **Motion** — run motion-and-easing: purpose-gated, easing correct, <300ms/150ms, no bounce,
   reduced-motion safe, one signature moment.
7. **Spacing & rhythm** — section rhythm consistent, optical alignment, `gap` not trailing margins,
   nested radius = outer − padding.
8. **Accessibility** — visible focus (ink ring), AA contrast, semantic HTML, touch targets ≥44px,
   meaning never by color alone.
9. **Responsive** — no overflow at 390/768/1024; true mobile, not just shrink.
10. **Performance** — transform/opacity only; aspect-ratio set; image sizes; no console errors.

## Output format
- **Verdict:** best-in-class / good-but-generic / needs work — one line, honest.
- **Could-be-anyone test:** would this read as Souvenir with the logo removed? If no, say why.
- **Findings** (prioritized): `issue → why it matters → concrete fix`, referencing a specific peer
  move where useful ("Anthropic underlines keywords instead of coloring them — do that here").
- **Passes:** what's already strong (don't over-correct).
- Append any recurring issue to `docs/LEARNINGS.md`.

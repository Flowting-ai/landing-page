# Build Learnings — Souvenir Website

> **Living log. This is how the build gets better instead of repeating mistakes.**
> Read this file at the START of every session. Whenever Chai gives corrective feedback,
> or a mistake is caught, append an entry here BEFORE moving on. If the learning is a durable
> taste/rule, also promote it into `.claude/skills/souvenir-taste/SKILL.md`. The
> compound-engineering `/ce-compound` command should write its takeaways here too.

## How to write an entry
Append under the right category, newest first. Keep entries short and **actionable** — a rule the
next session can follow, not a story. Format:

```
### [YYYY-MM-DD] Short title  ·  (page/area)
- **What happened / feedback:** the observation or correction (1–2 lines).
- **Rule going forward:** the imperative rule that prevents it.
- **Promoted to:** souvenir-taste skill / motion skill / STRATEGY.md / n/a.
```

## Standing rules distilled so far (the short list — full detail in STRATEGY.md + souvenir-taste)
- Accent = dusty mauve signature only; monochrome canvas; ochre for stats; espresso CTA; NO coral.
- Meaning never by color alone (colorblind). Focus ring = ink.
- One idea + one abstracted concept-visual per section. No dense product screenshots everywhere.
- Problem-first immersion before the relief, where it fits. Vary section archetypes — never the
  same hero→stat-trio→feature-splits→comparison→CTA rhythm twice.
- Motion: purpose-gated, <300ms UI / ~150ms hover / press scale(0.97), easing lookup, no bounce
  (except the inherited KDS text-swap spring), one signature moment per page, reduced-motion safe.
- Icons only from `@strange-huge/icons` via `size`; valid ConnectorIcon IDs only
  (slack, gmail, notion, stripe, github, linear, hubspot, figma). Wrap MessageBubble in ClientOnly.
- Evoke nostalgia, don't costume it (no sepia/Polaroid). Heavy craft = hero-only (perf).
- Reuse existing primitives before building new. Tokens only — no magic numbers.

---

## Log

### [2026-06-15] Tailwind v4 scans markdown → Turbopack DEV 500s on doc code-examples · (PROCESS/BUILD)
- **What happened / feedback:** S1 added MDX docs + a portable DESIGN.md that quote example classes
  like `text-[color:var()]` / `text-[var(--color)]` in prose. Tailwind v4 auto-scans ALL non-gitignored
  files (incl. `.md`/`.mdx`), extracted those as candidates, and emitted malformed CSS (`color: var();`).
  `next build` only WARNED; the **Turbopack dev server returned 500** on the same CSS. (Pre-existing empty
  `text-[color:var()]` typos in HANDOFF.md / DESIGN-REFINEMENT-PLAN.md were also dormant offenders.)
- **Rule going forward:** Never rely on prod-build warnings alone — verify on `next dev` too. Markdown
  never authors Tailwind utilities, so exclude it: `@source not "../../**/*.md"` + `*.mdx` in globals.css
  (added). Also gitignore `storybook-static/` so its bundles aren't scanned/committed.
- **Promoted to:** n/a (build-config rule; lives in globals.css comment).

### [2026-06-15] Coral scope was bigger than the kickoff listed — .glow-warm + inline var(--coral) · (COLOR)
- **What happened / feedback:** Kickoff named 4 `.glow-coral-dark` files. Re-grep found coral also baked
  into `.glow-warm` as `rgba(224,97,58,…)` (consumed by 16 hero files) AND an inline
  `var(--coral,#d9685a)` in SlackPage/visuals.tsx + a stale comment in ui/Button.tsx.
- **Rule going forward:** Grep BOTH the hex (`E0613A`) and the decimal-RGB form (`224, *97, *58`) when
  detoxing a color — named-class greps miss raw rgb() and inline fallbacks. `.glow-coral-dark` →
  `.glow-signature` (mauve, from `--accent`); `.glow-warm` → warm-neutral espresso wash.
- **Promoted to:** souvenir-taste (no-coral rule already present).

### [2026-06-15] Marketing DS home = Storybook (Docs-first, token-driven) — LOCKED · (PROCESS/DESIGN-SYSTEM)
- **What happened / feedback:** Weighed in-app `/design-system` route vs Storybook. Chai's goal is a
  durable, shareable, brand-facing reference (palette + intention, type, spacing) that outlives pages
  and feeds marketing-asset/branding work + future theming — that goal makes Storybook the right home.
- **Rule going forward:** Tokens (CSS vars) = single source of truth; Storybook reads from them; site
  consumes them; NO in-app route. Scope Storybook to the DS layer (tokens, primitives, one example per
  archetype) — never mirror full pages (drift + RSC tax); pages verified via `scripts/shot.mjs` +
  `design-audit`. Theme toggle previews mauve↔ochre. Separate instance now; KDS-fold-in is a future option.
- **Promoted to:** STRATEGY.md §0 (LOCKED) + S1 prompt in docs/KICKOFF-PROMPTS.md.

### [2026-06-15] design-audit had no repo-discoverable screenshot step — added scripts/shot.mjs · (PROCESS)
- **What happened / feedback:** S0 review found the design-audit skill + agent told to "use the repo's
  screenshot step," but none existed in-repo — only the external `~/.shot-harness`. The agent would have
  re-written a Playwright script every run.
- **Rule going forward:** Use `node scripts/shot.mjs <route> <label> [768 1024]` (dev on :4321; reuses
  `~/.shot-harness` Playwright, no repo install) for all audit/verify screenshots. Output → `/tmp/souvenir-shots/`.
- **Promoted to:** design-audit skill + agent (wired in).

### [2026-06-15] Mauve accent — LOCKED (Chai signed off), decorative-only · (COLOR)
- **What happened / feedback:** Product `semantic.css` deliberately dropped the *saturated* brand
  purple. Chai chose mauve (option A) anyway as the marketing signature, with guardrails.
- **Rule going forward:** Mauve (`--accent: var(--purple-600)` #674F68) is **decorative only, never a
  status signal**; signature dose on a 90% warm-neutral canvas. Courtesy heads-up to Colin/brand
  recommended (non-blocking). Fallback if brand objects = ochre (one-token swap). Build chat may bake
  it into tokens.
- **Promoted to:** STRATEGY.md §0 (LOCKED).

### [2026-06-15] Coral lives in 4 files, not 1 — clean ALL when switching to mauve · (COLOR/PROCESS)
- **What happened / feedback:** `.glow-coral-dark` is used in `FinalCTABand.tsx`,
  `AgentsFinalCTA.tsx`, `HomePage/FinalCTA/FinalCTASection.tsx` (home-v1), and `v/b/page.tsx` — plus
  defined in globals.css and the line-4 comment, and documented in DESIGN-FOUNDATIONS.md.
- **Rule going forward:** The S1 coral→mauve cleanup must touch every one of those, not just
  FinalCTABand. `grep -rln "glow-coral\|coral\|E0613A" src` before declaring it done.
- **Promoted to:** STRATEGY.md §4.

### [2026-06-15] Log initialized
- **What happened:** Foundation/strategy phase complete; entering the build.
- **Rule going forward:** Every correction Chai gives gets an entry. Don't repeat anything written here.
- **Promoted to:** n/a.

<!-- New entries go ABOVE this line, newest first, under categories as they emerge:
     MOTION · LAYOUT/SPACING · COLOR · TYPOGRAPHY · COPY/STORY · COMPONENTS/KAYA · PROCESS -->

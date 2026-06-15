# Souvenir Marketing Website — Claude Rules (always-on)

You are building the **Souvenir marketing site**. This file loads every session. Follow it exactly.

## Read first (every session, in this order)
1. `docs/STRATEGY.md` — the single source of truth (philosophy, locked decisions, phases).
2. `docs/LEARNINGS.md` — the living log of mistakes + corrections. **Do not repeat anything in it.**
3. `.claude/skills/souvenir-taste/SKILL.md` — the taste rules (auto-loaded; obey it).
Reference as needed: `docs/souvenir-learnings.md` (motion/taste/vocabulary), `ONBOARDING.md`,
`SITE-MAP.md`, `docs/KAYA-CLAUDE-RULES.md` (product DS rules to inherit), `WEBSITE-SYSTEMS.md`.

## The learning loop (this is how we compound — non-negotiable)
- **Whenever Chai gives corrective feedback, or you catch a mistake: BEFORE moving on, append an
  entry to `docs/LEARNINGS.md`** (format is in that file). If it's a durable taste/rule, also promote
  it into the `souvenir-taste` skill. `/ce-compound` writes its takeaways there too.
- Treat `docs/LEARNINGS.md` as binding: a rule written there is as strong as this file.

## Working rules
- **Plan before building.** No page/section work until its story arc + brief exist (compound-eng loop).
- **One page / one concern per session.** Short, scoped sessions — don't sprawl. Use worktrees for
  parallel work. Tiny polish = batch into small PRs.
- **Extend Kaya, never fork.** Use the imported Kaya tokens + shadcn/Radix; build the marketing
  layer on top. Reuse existing primitives (`SectionHeading`, `FeatureSplit`, `TriSection`,
  `FinalCTABand`, `ShowcaseFrame`, `Comparison`, `ui/*`) before making new ones. Tokens only — no
  magic numbers, no ad-hoc hex.
- **Verify every change:** build → screenshot full-page at 1440 + 390 (reduced-motion) → confirm no
  overflow at 390/768/1024 + no console errors → run the `design-audit` skill against the philosophy.
- **Get to 7/10 fast, then spend the saved time on care** — but don't polish low-leverage things
  endlessly. Highest-leverage first.

## Anti-slop defaults (hard bans)
No Inter/Roboto/system-font defaults (use Besley display + Geist body). No purple/blue hero gradients
on white. No evenly-distributed rainbow color. No gratuitous glow/aurora/beam from copy-paste libs.
No decorative motion without a named purpose. No bounce (except the inherited KDS text-swap spring).
No coral / `#E0613A`. No `shopify`/`google-drive`/`drive`/`klaviyo` ConnectorIcon IDs (render blank).
The repeated SaaS section rhythm is banned — vary archetypes.

## Current objective
Design-refinement phase. **First: the marketing design system + a marketing Storybook** (see
`docs/STRATEGY.md` §2 and the kickoff). Then IA + story spine, then the per-page loop (Home first).

# Build Chat — Prompt Sequence (paste these in order)

How to use: each **STAGE** is its own fresh, scoped Claude Code chat in `~/souvenir-website` (short
sessions beat one long chat — agents read files, not history). `CLAUDE.md` auto-loads every session.
Paste a stage's prompt verbatim; let it finish + verify before the next. S3 repeats per page.

Accent is **LOCKED = mauve** (decorative only). Coral must be removed from **4 files** (see S1).

---

## STAGE 0 — Setup, skills, repo hygiene  (fresh chat)

```
You're starting the design-refinement build of the Souvenir marketing site (~/souvenir-website).
Do NOT build pages this session. Steps:

1. Read in order: CLAUDE.md, docs/STRATEGY.md, docs/LEARNINGS.md,
   .claude/skills/souvenir-taste/SKILL.md, docs/souvenir-learnings.md, docs/KAYA-CLAUDE-RULES.md;
   skim ONBOARDING.md + SITE-MAP.md and the three references in docs/references/ (Anthropic,
   ElevenLabs, workflow.design). Then write a ≤15-line summary proving you have it: philosophy spine,
   locked decisions (mauve accent, 50/50 positioning), anti-slop bans, current objective. Flag any
   contradiction — don't paper over it.

2. Install compound-engineering: /plugin marketplace add EveryInc/compound-engineering-plugin →
   /plugin install compound-engineering → /ce-setup. Confirm /ce-* commands work.

3. Confirm the LEARNING LOOP is binding: read docs/LEARNINGS.md at session start; on any corrective
   feedback or caught mistake, append a LEARNINGS entry BEFORE continuing and promote durable rules
   into the souvenir-taste skill; /ce-compound writes takeaways there.

4. Three skills + one sub-agent are ALREADY WRITTEN — review and wire them up, don't regenerate:
   `.claude/skills/souvenir-taste/SKILL.md` (always-on), `.claude/skills/motion-and-easing/SKILL.md`
   (case-by-case), `.claude/skills/design-audit/SKILL.md`, and the dispatchable sub-agent
   `.claude/agents/design-audit.md`. Read all four, confirm they load/are discoverable, and confirm
   the design-audit agent can screenshot (set up a tiny repo-local Playwright script if no screenshot
   step exists — the audit needs the visual). Only edit them if you find a gap; log the change to LEARNINGS.

5. Repo hygiene (low-risk): delete dead pre-(site) component dirs (Common, AboutPage, FeaturesPage,
   GetStartedPage, variants; HomePage only if we drop /home-v1 — ask me first). Decide with me:
   keep or kill /home-v1 and src/app/v/{a,b,c}. Don't touch (site) pages.

End by running /ce-compound to log takeaways. Show me the skills + the summary before finishing.
```

---

## STAGE 1 — Marketing design system + tokens + Storybook + DESIGN.md  (fresh chat; PLAN before building)

```
Marketing design-system session. Read CLAUDE.md, docs/STRATEGY.md (esp. §0, §2), the souvenir-taste
skill, and docs/souvenir-learnings.md (§2 typography, §3 color, §4 layout). PLAN first, get my
approval, THEN implement.

A. Bounded research (~20 min, then stop): how strong teams structure a *marketing* design system +
   Storybook (foundation pages, token pages, section-archetype catalogs). Do NOT re-litigate the
   stack (extend Kaya + shadcn/Radix + CSS-var tokens + Motion/GSAP). Recommend: real Storybook 8 vs
   a lightweight in-app /design-system showcase route — pick the lighter one unless Storybook is
   clearly worth it. Summarize + recommend; install nothing yet.

B. Propose the marketing token layer on top of Kaya (show me, get approval):
   - Display/editorial type scale (push hero ceiling via clamp), section rhythm/spacing scale,
     marketing motion tokens (durations/easings/stagger from souvenir-learnings).
   - ACCENT (locked): --accent: var(--purple-600) (#674F68), hover var(--purple-700), soft
     var(--purple-50); --highlight: var(--yellow-600) for stats/positive only; CTA stays Kaya espresso.
   - Section-archetype catalogue (hero, problem-immersion, feature-row, proof, comparison, CTA,
     footer) — deliberately varied, not one repeated rhythm.

C. After approval: implement the tokens. REMOVE ALL CORAL — grep first: `grep -rln
   "glow-coral\|coral\|E0613A" src`. It's in globals.css (def + line-4 comment) AND used in
   FinalCTABand.tsx, AgentsFinalCTA.tsx, HomePage/FinalCTA/FinalCTASection.tsx, v/b/page.tsx. Replace
   the coral glow with a mauve/neutral treatment per the new tokens. Also update DESIGN-FOUNDATIONS.md
   accent table. Re-grep to prove zero coral remains. Don't touch the imported Kaya product tokens.

D. Scaffold the showcase (Storybook or /design-system route) displaying every token, primitive, and
   section archetype.

E. Gap-check + emit a portable DESIGN.md: compare our souvenir-taste skill against the 9-section
   DESIGN.md format (Visual Theme/Atmosphere, Color & Roles, Typography, Component Stylings, Layout,
   Depth & Elevation, Do's & Don'ts, Responsive, Agent Prompt Guide). Fill the gaps (esp. Depth &
   Elevation + an Agent Prompt Guide), then write `docs/DESIGN.md` DERIVED from STRATEGY + the skill +
   the real Kaya tokens — tool-agnostic, so it works in Figma/Cursor/Lovable too. Note in it that the
   souvenir-taste skill is canonical and DESIGN.md is regenerated from it (no hand-drift).

Verify: showcase renders, no overflow at 390/768/1024, no console errors. Run /ce-compound.
```

---

## STAGE 2 — IA + positioning + story spine  (fresh chat)

```
IA + story-spine session. Read CLAUDE.md, docs/STRATEGY.md, SITE-MAP.md, WEBSITE-SYSTEMS.md, the
souvenir-taste skill. No page building. Produce decisions + a doc, get my sign-off:

1. Resolve IA: do we add Security/Trust, Changelog, Docs, "vs"-comparison, a real Blog, and a real
   About (currently /about = Contact)? Decide /about vs /contact. Map the final nav + page set.
2. Positioning is LOCKED 50/50, one unified core story → equal-weight "for you" / "for your team"
   branch (Linear model). Confirm how that reshapes Home (it stops being a lopsided router).
3. Write `docs/STORY-SPINE.md`: the memory/keepsake metaphor every page inherits, plus a one-line
   per-page narrative arc and the emotional beat each page should hit. Ground it in the "make the
   intangible tangible" + "problem-immersion before relief" principles.
Run /ce-compound.
```

---

## STAGE 3 — Per-page loop (HOME first; repeat this template per page)  (fresh chat per page, ideally a worktree)

```
Build the Home page, story-first. Read CLAUDE.md, docs/STRATEGY.md, docs/STORY-SPINE.md, the
souvenir-taste skill, SITE-MAP.md (Home's current sections + verbatim copy), and .refs/ + the
Antimetal teardown. One page this session. Loop:

1. /ce-brainstorm — Home's narrative arc + a one-line emotional beat per section. Flip key openers to
   problem-FIRST immersion where it lands harder. Propose where the SINGLE signature moment goes.
2. Section briefs — for each section: the one message, hierarchy (what's biggest), the ONE abstracted
   concept-visual (not a dense product screenshot), motion intent (none/micro/signature), and which
   reference mechanic it borrows. Show me; I approve.
3. /ce-work (in a worktree) — build from existing primitives + the new tokens. Reuse SectionHeading,
   FeatureSplit, TriSection, FinalCTABand, ShowcaseFrame, Comparison, ui/* before making anything new.
   Tokens only. Mauve sparingly. Reserve the product ShowcaseFrame for ONE hero proof, not every section.
4. Audit — run the design-audit skill; verify reduced-motion, no overflow at 390/768/1024, no console
   errors, CWV. Fix before advancing.
5. Motion — implement the one signature moment (gray-box it early to validate the feel), micro-
   interactions from motion tokens; tune params with Leva, then bake chosen values into tokens and
   remove Leva from the bundle. Reduced-motion safe.
6. /ce-compound — write Home's learnings into docs/LEARNINGS.md.

Then we repeat this exact template for the next page. Don't start another page in this session.
```

---

### Per-page order after Home
Company Brain → Individuals → AI Assistants → Brain → Slack Manager → Chatspace → Integrations →
Pricing → Guide → Contact. (Hero pages get the deep treatment; thinner pages can be a lighter pass —
decide per page.)

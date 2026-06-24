# Home Copy — from Figma (Kaya DS, node 6435-14067) · 2026-06-24

> Source of truth for the Home copy overhaul. Pulled from the Figma redesign
> (file `VhtVr4Hhje26XKwc0E5uNP`, node `6435-14067`). Rule: **keep site copy close to this.**
> The redesign is decisively **team/business-first** (resolves the 50/50 question — team is the lane).
> `[done]` = applied to the repo. Team copy-fix notes live in `~/Downloads/website.md`.

## Section order (Figma) → current repo component
| # | Figma section | Repo component | Status |
|---|---|---|---|
| 1 | Hero | `LandingHero` | **[done]** |
| 2 | Chaos / Order (SIDE BY SIDE, one section) | **`SinglePlayer`** (merged Breaking+Relief) | **[done]** |
| 3 | Slack Master Agent | `FeatureSplit` + `SlackBrainMap` | TODO |
| 4 | Pillars 01–04 | `Pillars` | TODO |
| 5 | Comparison "There is no second place" | `CategoryTable` | TODO |
| 6 | Final CTA | `FinalCTABand` | TODO |

---

## 1. Hero  **[done]**
- **H1:** One workspace where your team and its AI *work as one.*
- **Sub:** One shared workspace where a team of AI Assistants pulls your apps and data together, then runs the work in the background. Managed from Slack.
- CTA: Book a Demo (single). Visual = the product window (Smart Pin offer demo).

## 2. Chaos / Order — ONE section, two columns side by side  (merge Breaking + Relief)
- **Section heading:** Your team's AI is stuck in single-player mode.
- **Section sub:** One person, one chat, one model, no shared memory. Everyone runs their own tools in their own tabs, and your team is the manual bridge between all of them.
- **LEFT — chip "Today — chaos" (red):**
  - H: Six tabs. Six accounts. Zero shared memory.
  - P: Prompts vanish when the chat closes. Context lives in someone's head. Nobody knows which AI to use for which job, and none of it talks to your actual tools.
  - Visual: scattered browser tabs (Zapier, Manus, Gemini, Make, Claude, Notion, ChatGPT, Figma) — reuse `TabTerrain`.
- **RIGHT — chip "With Souvenir — order" (green/positive):**
  - H: One workspace. One shared brain. Agents that remember.
  - P: Every tool, conversation, and decision lives in one operational layer. AI Assistants read the same context, run the work, and hand it off to each other, automatically.
  - Visual: clean connector tree — **900+ Connectors** → Souvenir → **Agents** (Morning Briefing, Utilization Report, Ad Copywriter, Customer Quote Drafter, Email & SMS Lifecycle). NOTE team feedback (website.md): connector tree "looks clustered with the lines" — declutter; "Email & SMS Lifecycle" → remove SMS → "Email Lifecycle".

## 3. Slack Master Agent
- H: Your team already lives in Slack. Now your agent workforce does too.
- P: With the Slack Master Agent, everything happens where your team already works. Mention @Souvenir in any channel, assign a goal, and your coordinated team of AI agents executes complex work in the background.

## 4. Pillars — heading: **One Workspace. Every Task. No Switch, No Ask.**
- **01 — A team of Assistants, not a chatbot.** Each AI Assistant has a role. They think, decide, and hand work to each other. You manage them like a team, and grow output without growing headcount.
- **02 — Work that runs without babysitting.** Multi-step jobs execute across your whole stack on a schedule or a trigger — morning briefings, utilization reports, catalog updates — without anyone prompting them step by step.
- **03 — Command the whole team from one bot.** Ask Chief in your channels. It routes the request to the right Assistant, pulls from your connectors, and drops the result back into the thread, with admin controls, approval gates, and an audit log.
- **04 — One chatspace. Every frontier model.** Auto-routes prompts to the best model for quality and cost. Persistent memory across sessions. Pins, folders, and shared projects keep nothing scattered.
- (Team note website.md: Pillars 1 & 3 felt identical on the OLD site — these NEW four are distinct, verify no dup.)

## 5. Comparison — heading: **There is no second place.**
- Sub: ChatGPT answers questions in one tab. Notion AI lives in a sidebar. Souvenir is the shared operational layer underneath both — connected to your tools, with memory that doesn't reset, running multi-step work in the background for your whole team.
- Columns: **Operational layer — Souvenir** | Single-model AI (ChatGPT · Claude · Gemini) | Productivity tools (Notion AI · Copilot)
- Rows (Souvenir = ✓ Native on all): Multi-agent workforce · Slack-native command center · Background automation · Cross-model memory · Cross-app context indexing · Pins & shared project folders · Automatic model routing · Governance & audit trail · Unlimited seats. (Competitor cells carry the limitation labels: SINGLE AGENT / BOLT-ON / PROMPT-DRIVEN / PROVIDER-LOCKED / APP-BOUND / PERSONAL ONLY / SINGLE MODEL / ENTERPRISE TIER / PER-SEAT $25–60 & $10–20.)

---

## Cross-cutting (from team `website.md` + audit) — apply during the overhaul
- **DECIDED (Chai, 2026-06-24): "Agents" everywhere.** Normalize all "AI Assistants" → "Agents" / "agent workforce" / "AI agents" across every section. (Figma mixes both; we standardize on Agents.)
- NOTE: `Breaking`, `Relief`, `TabTerrain` are now orphaned (no longer imported by Home) — kept for reference/salvage, safe to delete later.
- **Banned models** (DeepSeek/Qwen/Grok/Meta) + "every AI model/aggregator" framing → PURGE from Pricing/Features. Approved: OpenAI, Anthropic, Google Gemini, Mistral.
- Discord CTA → real URL (not `#discord`); reconcile connector counts to ONE number; footer Contact → contact page; remove "an AI helped write this site".
- Navbar: increase opacity (team note). GitHub/Notion logos camouflaged on black bg → outlined variant.
- Replace Uttkarsh demo identity with a professional one (DONE: "Power User" + orb).

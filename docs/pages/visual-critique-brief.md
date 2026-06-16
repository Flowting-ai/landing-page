# Second-opinion brief — Souvenir marketing feature visuals

> Paste this whole file into a fresh Claude chat on the web, attach the screenshots
> listed at the bottom, and ask for the critique. Then paste its response back into
> the build chat. This file is the shared context that keeps the two chats in a loop.

---

## What you're being asked
I'm building the marketing website for **Souvenir** and I want a **critical second opinion on
the feature visuals** — the illustrations/diagrams that sit next to each section's copy (the
"concept-visuals"). Not the copy, not the layout system — specifically: **are these visuals
distinctive, on-brand, and high-craft, or do they read as generic SaaS filler?** Be a skeptic.
Default to "this could be more distinctive" unless it genuinely clears a high bar.

## The product (one paragraph)
Souvenir is an AI workspace where a team and a coordinated workforce of AI Assistants work side
by side — it unifies disconnected apps into one operational layer with shared memory, run from
inside Slack. Brand spine: **"Souvenir is the memory your work keeps"** — make an intangible
AI-orchestration product feel like a warm, tangible, *kept* object. Three pillars every section
must pass: (1) tell me plainly what it is, (2) make me feel it, (3) keep it unmistakably ours
(never templated SaaS).

## The design system (locked — visuals must obey)
- **Canvas:** warm cream → espresso **monochrome (~90%)**. Color is seasoning, never wallpaper.
- **Accent:** dusty mauve `#674F68` (links, eyebrows, ONE signature visual/page only). **Ochre**
  `#8F7427` for stats/positive only. Primary CTA = espresso/dark button. **No coral.**
- **Type:** Besley (serif) for display/headlines; Geist (sans) for body. Editorial, restrained.
- **Depth:** warm-tinted shadows + an emboss (top highlight + bottom warm line) + squircle —
  tactile, "pressed/printed," not floaty.
- **Colorblind rule (hard):** meaning never by color alone — shape + label + position; the
  accent is decorative, never a status signal; focus ring is ink.
- **Component consistency:** everything is composed from the **Kaya Design System** (the product's
  own component library) — Badge, Avatar, Chip, StatCard, MessageBubble, etc. — so the marketing
  site can't drift from the product.

## The key decision I want challenged
**Visuals are built as composed DOM + inline SVG from real Kaya components — NOT exported images
or screenshots.** Rationale: crisp at any DPI, responsive (they reflow on mobile), themeable
(mauve/ochre), animatable, and they literally reuse the product's components so they stay
consistent. I deliberately rejected a diagram library (react-flow etc.) as heavy/off-brand for a
static marketing site.

I reduced every feature visual to **4 reusable archetypes**, each sitting in a shared "diorama"
frame (a warm panel with emboss + optional dashed-focus boundary):
1. **NodeMap** — absolutely-positioned nodes + inline SVG curved connector lines (a system/flow map).
2. **Scatter** — z-layered, slightly-rotated overlapping cards (a "pile" of things).
3. **Roster** — stacked identity rows (Avatar + Badge + text), one elevated as the "live one."
4. **Window** — a single product "screenshot" frame (the one allowed literal product view per page).

## The visuals built so far (what to critique)
1. **Hero** — centered Besley headline over a soft **dappled-foliage shadow** ("light through
   leaves" cast on the cream wall). No diagram. *(Is the foliage a distinctive signature or a gimmick?)*
2. **Problem ("Chaos")** — Scatter: floating chat-bubbles ("Which AI for which job? Nobody knows")
   over a pile of browser tabs bleeding off the bottom. Has a signature **scatter→assemble**
   scroll animation (fragments fly in and settle — "the memory your work keeps" made physical).
3. **Relief** — NodeMap: app connectors → "900+ Connectors" hub → the Brain → agent chips.
4. **Slack × Brain** — a small tree: Brain joined to Slack, then rows (Research board / AI Agents /
   Automation Flows) with model dots + avatar stacks.
5. **Personas** — Roster: persona cards with @handles + Private/Research badges, one elevated with
   a description.
6. **Automations** — Scatter: overlapping scheduled-job cards (Floor Briefing / Morning Briefing /
   Utilization Report / Catalog Integrity) with schedule badges.
7. **Coordinated team** — Roster: alternating agent rows (Scout/Drafter/Ops/Analyst/Recruiter) with
   roles + @handles + an "Ask Chief in Slack" note.
8. **Brain proof** — Window: the one ShowcaseFrame product view (nav rail + chat thread + model
   selector + input).

**Known gaps (already on my list — don't just restate these):** real app-logo + persona-illustration
assets aren't wired yet (neutral placeholders / initials stand in); a couple visuals are missing
small extras (side cards, per-card icons).

## What I specifically want from you
1. **The verdict:** do these visuals clear the "unmistakably ours, not generic SaaS" bar? Where do
   they fall back into template territory?
2. **The 4-archetype system:** is reducing all feature visuals to NodeMap/Scatter/Roster/Window a
   strength (coherence) or a weakness (everything starts looking same-y)? How would you vary them
   without breaking consistency?
3. **The signature move:** is "scatter→assemble = memory" a strong enough single distinctive idea,
   or is there a better visual metaphor for "the memory your work keeps"?
4. **Craft specifics:** depth/emboss, the foliage shadow, connector-line style, the dashed-focus
   motif — what reads as crafted vs. what reads as default?
5. **References:** name 2–3 sites/products whose feature-visual craft I should study for THIS
   warm-editorial-tactile direction (not generic "look at Linear").

## How to format your answer (so it loops back cleanly)
Return a **prioritized list**, each item as: **[P1/P2/P3] — one-line problem — concrete fix.**
P1 = real distinctiveness/craft problem worth doing now; P3 = nitpick. Separate **"keep / don't
touch"** from **"change."** Be specific enough that an engineer can act on it without re-asking.
Avoid generic advice ("add more whitespace") — tie every point to a named visual above.

## Attach these screenshots when you paste this
- The Figma target designs for the feature visuals (the source of truth).
- The current rendered sections from the live site (so the critique compares built-vs-intended).
- The hero with the foliage shadow.

# Souvenir Website — Site Map

Source of truth for pages, routes, and navigation. Derived from the Figma canvas
(file `VhtVr4Hhje26XKwc0E5uNP`, canvas node `4457-5987`) + confirmed nav `4818-11839`.
Grows as each page is mapped one-by-one into the per-page sections below.

## Navigation (top-level)
Bar: Logo · **Product ▾** · **Solution ▾** · **Pricing** · **About** · Sign in · Get started for free

### Product ▾ (4 feature pages)
| Item | Route | Figma node | One-liner (first pass) |
|---|---|---|---|
| AI Assistants | `/product/ai-assistants` | `4670:36897` | A coordinated team of AI assistants for every task. |
| Brain & Automation | `/product/brain` | `4676:11733` | Goal in, answer out — automations that run on their own. |
| Slack Manager | `/product/slack` | `4676:14065` | Delegate to your agents from inside Slack. |
| Unified Chatspace | `/product/chatspace` | `4676:12458` | Every frontier model, one prompt. |

### Solution ▾ (2 audiences)
| Item | Route | Figma node | One-liner (first pass) |
|---|---|---|---|
| Personal AI OS (For Individuals) | `/solutions/personal` | `4676:15506` | Your personal AI operating system. |
| Company Brain (For Teams) | `/solutions/company-brain` | `4676:14608` | One shared brain for your whole company. |

### Direct links
| Item | Route | Figma node |
|---|---|---|
| Pricing | `/pricing` | `4676:16572` |
| About | `/about` | _(no dedicated node yet; Contact = `4676:17044`)_ |

## Pages — build status
- [x] **Home** (`/`) — BUILT. node `4457:5995`. Sections: Hero(tabbed showcase) · Problem · Stats · Context · Pillars · Comparison · FinalCTA · Footer.
- [x] **AI Assistants** (`/product/ai-assistants`) — BUILT. node `4670:36897`. 7 sections (see per-page map below).
- [x] **Brain & Automation** (`/product/brain`) — BUILT from REAL node `4676:11733` (verbatim copy, Jun 12). 11 sections (verified section-by-section against current node Jun 12): Hero "From Intention to Completed. Automate all your manual work." (OrchestrationMap) · Stats(∞ unlimited / 2 run modes / 4 model labs) · FeatureSplit "A goal in. An answer out. Everything in between, automatic." (BrainRunPanel dark) · FeatureSplit "Every run, a little smarter." (LearningTimeline) · ConnectorBand 250+ constellation (app-icon row + center node + 13 capability chips) · FeatureSplit+bullets "Coordinate multi-agent workflows." (AgentChainVisual w/ Done/Running/Queued + @handles) · FeatureSplit+bullets "Build & run Automations from Slack." (SlackPlanVisual) · RunModes "Run it once. Or run it forever." · BrainSteps "Build it in Slack. Run it from Slack. Get results back in Slack." (3 dark cards + caption) · FeatureSplit "Every workflow you've deployed. One dashboard." (ScheduleDashboard) · FinalCTA "Tell it the goal. It handles the rest." Note: extended shared FeatureSplit with optional `bullets` prop.
- [x] **Slack Manager** (`/product/slack`) — BUILT from real node `4676:14065` (Jun 13). Hero(text-left + SlackWorkforceMap) · FeatureSplit "What it looks like in your Slack." (SlackConvoPanel dark) · CommandGrid "No syntax to learn." (6 @Souvenir example cards) · TriSection "Every channel. Every DM." (Public/Private/DM) · TriSection "Slack Master is the front door." (The Brain/Specialist Agents/Chat & Saved work) · FinalCTA "Hire your first AI co-worker." Components in `src/components/SlackPage/`. New reusable: `TriSection` (eyebrow/title/lead + 3 cards w/ optional mono title).
- [x] **Unified Chatspace** (`/product/chatspace`) — BUILT. node `4676:12458` (see per-page map below).
- [x] **Personal AI OS** (`/solutions/personal`) — BUILT from real node `4676:15506` (Jun 13). Hero "Your personal AI operating system." (PersonalHeroVisual: 900+ Connectors constellation) · Comparison "Why Souvenir?" (reused generalized Comparison, Without/With ×5) · "Your knowledge, organized." (PinsBoard: 4 folders ×3 pins) · "Personal team of AI Agents" (AgentRosterGrid: 6 agent cards w/ quotes) · FeatureSplit "Set it once. Runs forever." (AutomationCard) · FeatureSplit flip "Souvenir picks. You don't think about it." (ModelPickerVisual: Muse/Advanced + Top Models) · FinalCTA "Stop re-teaching AI." Components in `src/components/PersonalPage/`. NOTE: Content Writer agent quote was an off-brand placeholder in Figma (espresso) — replaced with a fitting on-brand line; verify w/ Chai. ⚠️ Generalized `Comparison` (now takes eyebrow?/title?/intro/without/withSouvenir props) — Company Brain page updated to pass its data.
- [x] **Company Brain** (`/solutions/company-brain`) — BUILT from real node `4676:14608` (Jun 13). Hero "The autonomous company brain." · ConnectorBand(250+ constellation, reused from BrainPage) · BreakingStats "The way work happens is breaking." (71%/8hrs/2.5×, w/ sources) · BrainSteps "Build it in Slack…" (reused) · Comparison Without/With Souvenir (2 cols, 5 items each) · CrewSection "One manager. A coordinated crew." (CrewVisual: manager + 4 agents w/ run counts + flow) · NativeIntegrations "Plugs into every app you already use." (250+ + IntegrationsGrid) · FinalCTA "One brain. One workforce. One operational layer." Components in `src/components/CompanyBrainPage/`.
- [x] **Pricing** (`/pricing`) — BUILT from real node `4676:16572` (Jun 13). PricingHero "Pay for what you use. Nothing else." · PricingTable (client, Monthly/Yearly toggle — yearly = 25% off; 3 plans: Individual $12 / Team $125 dark-highlighted "Most popular" / Custom; each with credit slider + feature groups) · ReassuranceRow (No card / Top-up / Cancel / Roll over) · TopUps (4 packs) · PricingFAQ (8 Q&A) · FinalCTA "1,000 credits, on us." Components in `src/components/PricingPage/` (PricingHero, PricingTable, PricingExtras). ⚠️ Removed conflicting legacy `src/app/pricing`.
- [x] **Contact** (`/about`) — BUILT from real node `4676:17044` (Jun 13). 2-col: left = eyebrow "Company · Contact" + "Get in touch." + "We respond within 1 business day." + email card (info@getsouvenir.com, mailto link); right = ContactForm (client, Name/Email/Message → submits via `mailto:info@getsouvenir.com`). Components: `src/components/ContactPage/ContactForm.tsx`. ⚠️ ROUTED AT `/about` (nav "About" link points there; node is a Contact page). Removed conflicting legacy `src/app/about`. Consider: rename to `/contact` + add real About, or leave as-is. NOTE: form is mailto-based (no backend) — wire to Formspree/API for production.

> Per-page detail (section order + verbatim copy) gets appended below as Chai sends each
> page's Figma link one at a time.

---
## Per-page maps

### AI Assistants  (`/product/ai-assistants`, Figma `4670:36897`)
Nav = canonical shared nav (confirms consistency goal). Sections top→bottom:
1. **Hero** — eyebrow "Multi-agent workforce" · H1 "The future of Agentic AI: A team of specialized agents that know your context and do your work." · sub "Souvenir AI Agents are specialized digital coworkers connected to all your apps, grounded in your shared memory, and orchestrated to execute all of your busywork." · CTAs Get started for free + Book a Demo · visual = Persona dashboard (Sidebar + persona-card grid).
2. **"Three things every Souvenir agent does well"** (eyebrow "What's a Souvenir Agent") — 3 cards: #1 "Each Assistant has a job description" (one role, one job) · #2 "Your context travels with every task" (memory out of the box) · #3 "They read and write in your stack" (connectors).
3. **Stats** — ∞ "Build unlimited AI Assistants. One workforce, every role you need." · 250+ "Native connectors to the tools you already use." (Shopify·Klaviyo·Drive·Gmail·Notion·Slack +244) · 4 "Different pro models automatically chosen for each task based on expertise." (OpenAI·Anthropic·Google Gemini·Mistral).
4. **"The best model for the job. Every time."** (eyebrow "Intelligent context layer") — copy + ModelSelector/persona model visual.
5. **"Share Assistants with your team. Track who uses what."** (eyebrow "Workspace controls") — copy + command-center usage visual.
6. **"Or build your own — no code, no prompt engineering."** (eyebrow "Beyond the library") — 6 pillars: 01 Start from a template or a blank slate · 02 Define the role. Pick the model. · 03 A name. An avatar. A personality. · 04 Feed it knowledge it should remember. · 05 Pick the apps it can reach. · 06 Decide who else gets to use it.
7. **Final CTA** — "Hire your first Assistant. It's already trained." · "Pick a starting point. Connect your apps. Let your new workforce get to work." · Join Discord Community + Book a Demo · connector-icon band. Footer = shared.

### Unified Chatspace  (`/product/chatspace`, Figma `4676:12458`)
Nav = shared. Sections:
1. **Hero** — eyebrow "Solution · Unified Chatspace" · H1 "Every major AI model. One chat that remembers, researches, and compares." · sub "Souvenir's Chatspace routes your prompt to the best model, maintains context, and lets you save outputs as pins, organize them into folders, and easily share AI work with your team." · CTAs Get started for free + Book a Demo · visual = chat thread + Pinboard rail (MessageBubble + Pin cards).
2. **Stats** — 4 "Frontier model labs — auto-selected by intent." (OpenAI·Anthropic·Gemini·Mistral) · 3 "Compare Models side-by-side, same prompt. Pick the winner." (Compare·Cost·Speed·Output) · ∞ "Memory that compounds. AI work that is saved and carried forward." (Save·Organize·Share).
3. **"Three models. One prompt. You pick the winner."** (eyebrow "The routing algorithm") — copy + 3-column compare visual.
4. **"Reads your intent. Routes to the right model."** (eyebrow "The routing algorithm", flipped) — copy + Muse/Advanced model-selector visual.
5. Feature 2-up: **"Ask a real question. Get a researched answer."** (Research mode) + **"Save the line. Quote it later."** (Highlights).
6. Feature 2-up: **"Pull a specialist into the chat."** (@-mention agents) + **"Memory that lasts. Organized into folders."** (Pins/folders).
7. **Final CTA** — "Stop re-teaching AI. Start compounding your work." · "One workspace where your memory, Assistants, and chats live together — across every major AI model." · Join Discord + Book a Demo · connector band. Footer shared.

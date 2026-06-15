import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/* ───────────────────────── Hero constellation ───────────────────────── */
const HERO_APPS = ["gmail", "slack", "notion", "stripe", "github", "hubspot", "linear", "figma"];

export function PersonalHeroVisual() {
  return (
    <div className="relative overflow-hidden rounded-[var(--r-2xl)] border border-line bg-bg-subtle p-5 sm:p-6" style={{ boxShadow: "var(--shadow-lg)" }}>
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
      <div className="glow-warm pointer-events-none absolute right-0 top-1/3 h-[280px] w-[340px] opacity-50" />
      <div className="relative flex flex-col gap-4">
        <div>
          <Badge label="Souvenir" color="Green" />
          <p className="mt-2 font-display text-[length:var(--text-h3)] leading-snug text-ink">One workspace. Coordinated Assistants. The Brain remembers everything.</p>
        </div>
        {/* center node + connectors */}
        <div className="flex flex-col items-center gap-3 py-2">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {HERO_APPS.map((c) => (
              <span key={c} className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}><ConnectorIcon id={c} size={20} /></span>
            ))}
          </div>
          <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line-strong bg-surface px-3.5 py-1.5 font-sans text-[var(--text-small)] font-semibold text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>900+ Connectors</span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-dark-ink font-display text-[16px]" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
        </div>
        {/* mini panels */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[var(--r-md)] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="font-sans text-[var(--text-micro)] font-semibold text-ink">Morning Briefing</span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Daily run", "revenue, ad spend", "posted to Slack"].map((t) => <Badge key={t} label={t} color="Neutral" />)}
            </div>
          </div>
          <div className="rounded-[var(--r-md)] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="font-sans text-[var(--text-micro)] font-semibold text-ink">Utilization Report</span>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Weekly · billable hrs", "margin alerts"].map((t) => <Badge key={t} label={t} color="Neutral" />)}
            </div>
          </div>
        </div>
        {/* agents */}
        <div className="flex items-center gap-2">
          <span className="font-sans text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">Agents</span>
          <div className="flex">
            {["Ad Copywriter", "Email & SMS", "Research"].map((a, i) => (
              <span key={a} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: 9 - i }} className="rounded-full ring-2 ring-[var(--bg-subtle)]"><Avatar name={a} size="sm" color="var(--neutral-700)" /></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Pins / folders board ───────────────────────── */
const FOLDERS = [
  { name: "Book draft", count: "12 pins", pins: [["Re-explaining context", "used 8×"], ["Writing voice profile", "used 14×"], ["Chapter 4 · first draft", "just pinned"]] },
  { name: "Client work", count: "9 pins", pins: [["Onboarding template", "used 6×"], ["Invoice template", "used 11×"], ["Brand brief — Sage Co.", "used 2×"]] },
  { name: "Newsletter", count: "11 pins", pins: [["Subject line hooks", "used 22×"], ["Content pillars", "used 9×"], ["Last 5 issues archive", "reference"]] },
  { name: "Personal", count: "6 pins", pins: [["2026 goals", "just pinned"], ["Reading list", "used 4×"], ["Travel checklist", "used 2×"]] },
];

export function PinsBoard() {
  return (
    <ShowcaseFrame title="souvenir · pins · 38 pins across 4 folders">
      <div className="grid gap-3 p-5 sm:grid-cols-2 sm:p-6">
        {FOLDERS.map((f) => (
          <div key={f.name} className="rounded-[var(--r-lg)] border border-line bg-surface p-4" style={{ boxShadow: "var(--shadow-sm)" }}>
            <div className="flex items-center justify-between">
              <span className="font-display text-[length:var(--text-h4,1.125rem)] text-ink">{f.name}</span>
              <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{f.count}</span>
            </div>
            <div className="mt-3 flex flex-col">
              {f.pins.map(([t, m]) => (
                <div key={t} className="flex items-center justify-between gap-2 border-t border-line py-2">
                  <span className="flex items-center gap-2 font-sans text-[var(--text-small)] text-ink-secondary">
                    <span className="flex h-5 w-5 items-center justify-center rounded-[6px] bg-[var(--highlight-soft,#ece6f5)] text-[var(--text-micro)]">✎</span>{t}
                  </span>
                  <span className="font-mono text-[var(--text-micro)] text-ink-subtle">{m}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ShowcaseFrame>
  );
}

/* ───────────────────────── Agent roster ───────────────────────── */
const AGENTS = [
  { name: "Content Writer", handle: "@Drafts in your voice", tags: ["Private", "Research"], quote: "Drafted 3 versions of the launch email in your voice — tone pulled from your last 12 newsletters." },
  { name: "Research Agent", handle: "@Web research", tags: ["Team", "Research"], quote: "Found 3 case studies on remote async teams. Top one: Doist (Twist). Sources and themes pulled, ready for your draft." },
  { name: "Note Organizer", handle: "@structured doc", tags: ["Private"], quote: "Pulled 14 thoughts from your 9-minute walk. Sorted into 3 themes. Top 4 action items moved to your Personal folder." },
  { name: "Inbox Triager", handle: "@Reads & classifies", tags: ["Private"], quote: "25 overnight emails. 9 for you (replies drafted). 11 auto-archived. 9 newsletters waiting in Reading Queue." },
  { name: "Project Manager", handle: "@Tracks tools", tags: ["Private", "Research"], quote: "3 projects open. Sage Co. is at risk (no commits in 4 days). Book draft on track. Newsletter due Friday." },
  { name: "Web Scraper", handle: "@Pulls data", tags: ["Private", "Research"], quote: "47 listings pulled from the niche board. De-duped to 31. Saved to ‘Lead pool 42’ with company, role, link — scored 1–10." },
];

export function AgentRosterGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {AGENTS.map((a) => (
        <div key={a.name} className="relative flex h-full flex-col rounded-[var(--r-xl)] border border-line bg-surface p-5" style={{ boxShadow: "var(--shadow-sm)" }}>
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
          <div className="flex items-center gap-2.5">
            <Avatar name={a.name} size="sm" color="var(--neutral-700)" />
            <div className="min-w-0">
              <span className="block truncate font-sans text-[var(--text-small)] font-semibold text-ink">{a.name}</span>
              <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{a.handle}</span>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {a.tags.map((t) => <Badge key={t} label={t} color="Neutral" />)}
          </div>
          <p className="mt-3 font-sans text-[var(--text-small)] leading-relaxed text-ink-muted">“{a.quote}”</p>
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── Automation card ───────────────────────── */
const TASKS = [
  { t: "Weekly newsletter draft", when: "Every Mon · 8:00 AM" },
  { t: "Monthly invoices", when: "1st of month" },
  { t: "Inbox triage", when: "Daily · 7:00 AM" },
];

export function AutomationCard() {
  return (
    <ShowcaseFrame title="souvenir · automations">
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        {TASKS.map((t) => (
          <div key={t.t} className="flex items-center justify-between gap-3 rounded-[var(--r-md)] border border-line bg-surface px-3.5 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink font-sans text-[var(--text-micro)] text-dark-ink">↻</span>
              <span className="font-sans text-[var(--text-small)] font-medium text-ink">{t.t}</span>
            </div>
            <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{t.when}</span>
          </div>
        ))}
        <p className="font-sans text-[var(--text-micro)] text-ink-subtle">Runs on its own. Output lands where you want it.</p>
      </div>
    </ShowcaseFrame>
  );
}

/* ───────────────────────── Model picker ───────────────────────── */
const FEATURED = [
  { name: "Muse", desc: "Fast, everyday model for quick answers and drafts.", on: false },
  { name: "Advanced", desc: "Deep reasoning for complex, high-stakes work.", on: true },
];
const TOP = ["GPT-5.1 Codex mini", "GPT-5 mini", "Claude Opus 4.8", "Gemini 2.5 Flash"];

export function ModelPickerVisual() {
  return (
    <ShowcaseFrame title="souvenir · model">
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        <div className="flex items-center gap-2 rounded-[var(--r-md)] border border-line bg-surface px-3 py-2" style={{ boxShadow: "var(--shadow-inner)" }}>
          <span className="text-ink-subtle">⌕</span>
          <span className="font-sans text-[var(--text-small)] text-ink-subtle">Look up your model…</span>
          <span className="ml-auto flex gap-1">
            {["All", "Starter", "Pro"].map((t, i) => (
              <span key={t} className={"rounded-[var(--r-pill)] px-2.5 py-1 font-sans text-[var(--text-micro)] font-medium " + (i === 0 ? "bg-ink text-dark-ink" : "text-ink-subtle")}>{t}</span>
            ))}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {FEATURED.map((f) => (
            <div key={f.name} className={"rounded-[var(--r-md)] border p-3.5 " + (f.on ? "border-transparent bg-dark-bg" : "border-line bg-surface")} style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className={"font-display text-[length:var(--text-h4,1.125rem)] " + (f.on ? "text-dark-ink" : "text-ink")}>{f.name}</span>
              <p className={"mt-1 font-sans text-[var(--text-micro)] " + (f.on ? "text-dark-ink-muted" : "text-ink-muted")}>{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-sans text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">Top models</span>
          {TOP.map((m) => (
            <div key={m} className="flex items-center gap-2.5 rounded-[var(--r-sm)] px-2 py-2 hover:bg-bg-subtle">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-bg-subtle text-[var(--text-micro)]">◆</span>
              <span className="font-sans text-[var(--text-small)] text-ink-secondary">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

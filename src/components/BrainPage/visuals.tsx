import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { MessageBubble } from "@/components/MessageBubble";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/* ─────────────────────────── Hero: orchestration map ─────────────────────────── */
const SOURCES = ["slack", "gmail", "stripe", "notion", "hubspot", "linear"];
const CAPABILITIES = [
  "Automations",
  "Browser actions",
  "Schedules & triggers",
  "Multi-Assistant chains",
  "Slack-native deploy",
  "Approval gates",
];

export function OrchestrationMap() {
  return (
    <ShowcaseFrame title="souvenir · brain">
      <div className="grid grid-cols-[auto_1fr] items-center gap-4 p-6 sm:grid-cols-[auto_auto_1fr] sm:gap-6 sm:p-8">
        {/* source connectors */}
        <div className="flex flex-col gap-2.5">
          {SOURCES.map((s) => (
            <span key={s} className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
              <ConnectorIcon id={s} size={18} />
            </span>
          ))}
        </div>
        {/* central brain node */}
        <div className="hidden sm:flex flex-col items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-dark-ink font-display text-[18px]" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
          <span className="mt-2 font-sans text-[var(--text-micro)] text-ink-subtle">Brain</span>
        </div>
        {/* capabilities */}
        <div className="flex flex-col gap-2 min-w-0">
          {CAPABILITIES.map((c) => (
            <div key={c} className="flex items-center gap-2.5 rounded-[var(--r-md)] border border-line bg-bg-subtle px-3 py-2" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink" />
              <span className="truncate font-sans text-[var(--text-small)] font-medium text-ink">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

/* ─────────────────────────── Anatomy of a Brain run (dark panel) ─────────────────────────── */
const RUN_STAGES = [
  { k: "Clarify", t: "“Which list — all investors, or just lead?”", done: true },
  { k: "Plan", t: "4 steps · 3 Assistants · approve to run", done: true },
  { k: "Execute", t: "Pull → analyze → draft → send", done: false },
];

export function BrainRunPanel() {
  return (
    <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-dark-bg p-6 sm:p-8" style={{ boxShadow: "var(--shadow-lg)" }}>
      <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-sans text-[var(--text-small)] font-semibold text-dark-ink">Brain run · Investor update</span>
          <span className="inline-flex items-center gap-1.5 rounded-[var(--r-pill)] border border-[var(--dark-line)] px-2.5 py-1 font-sans text-[var(--text-micro)] text-dark-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--success,#4ade80)]" /> Running
          </span>
        </div>
        {RUN_STAGES.map((s) => (
          <div key={s.k} className="flex items-start gap-3 rounded-[var(--r-md)] border border-[var(--dark-line)] bg-[var(--dark-surface)] px-3.5 py-3">
            <span className={"mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-sans text-[var(--text-micro)] " + (s.done ? "bg-dark-ink text-dark-bg" : "border border-[var(--dark-line)] text-dark-ink-muted")}>{s.done ? "✓" : "·"}</span>
            <div className="min-w-0">
              <span className="font-sans text-[var(--text-small)] font-medium text-dark-ink">{s.k}</span>
              <p className="font-sans text-[var(--text-micro)] text-dark-ink-muted">{s.t}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── Every run smarter (learning timeline) ─────────────────────────── */
const RUNS = [
  { run: "Run 01", when: "2 months ago", q: "5 questions asked", qColor: "Red" as const, label: "First run", desc: "Brain learning from scratch" },
  { run: "Run 02", when: "5 weeks ago", q: "2 questions asked", qColor: "Yellow" as const, label: "Learned", desc: "defaults committed to memory" },
  { run: "Run 03", when: "2 weeks ago", q: "0 questions asked", qColor: "Green" as const, label: "Learned", desc: "recognized your editing pattern" },
];

export function LearningTimeline() {
  return (
    <ShowcaseFrame title="brain · learning over time">
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        {RUNS.map((r) => (
          <div key={r.run} className="rounded-[var(--r-md)] border border-line bg-surface px-3.5 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{r.run} · {r.when}</span>
              <Badge label={r.q} color={r.qColor} />
            </div>
            <p className="mt-1.5 font-sans text-[var(--text-small)] text-ink-secondary">
              <span className="font-display text-ink">{r.label}</span> · {r.desc}
            </p>
          </div>
        ))}
        <div className="rounded-[var(--r-md)] border border-line bg-bg-subtle p-3.5" style={{ boxShadow: "var(--shadow-inner)" }}>
          <Badge label="What Brain knows about you now" color="Green" />
          <ul className="mt-2.5 flex flex-col gap-1.5">
            <li className="font-sans text-[var(--text-micro)] text-ink-muted">→ Board list of 28 investors</li>
            <li className="font-sans text-[var(--text-micro)] text-ink-muted">→ Brand voice: premium-but-approachable</li>
          </ul>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

/* ─────────────────────────── Coordinate multi-agent workflows ─────────────────────────── */
const CHAIN = [
  { name: "Research Agent", handle: "@productspecialist", status: "Done", color: "Green" as const },
  { name: "Data Analyst", handle: "@adspecialist", status: "Running", color: "Red" as const },
  { name: "Investor Writer", handle: "@watcher", status: "Queued", color: "Neutral" as const },
];

export function AgentChainVisual() {
  return (
    <ShowcaseFrame title="brain · orchestrating">
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 font-sans text-[var(--text-small)] font-semibold text-ink">
            <Avatar name="Souvenir" initials="S" size="sm" color="var(--neutral-900)" /> Brain · Orchestrating
          </span>
        </div>
        <Badge label="Quarterly Investor Update" color="Neutral" />
        <div className="flex flex-col gap-2">
          {CHAIN.map((a) => (
            <div key={a.name} className="flex items-center gap-3 rounded-[var(--r-md)] border border-line bg-surface px-3.5 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
              <Avatar name={a.name} size="sm" color="var(--neutral-700)" />
              <div className="min-w-0 flex-1">
                <span className="block font-sans text-[var(--text-small)] font-medium text-ink">{a.name}</span>
                <span className="font-sans text-[var(--text-micro)] text-ink-subtle">{a.handle}</span>
              </div>
              <Badge label={a.status} color={a.color} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-[var(--text-micro)] text-ink-muted">
          <span>Research findings</span><span className="text-ink-subtle">→</span>
          <span className="font-medium text-ink">Data analyzed</span><span className="text-ink-subtle">→</span>
          <span>Drafted update</span>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

/* ─────────────────────────── Build & run Automations from Slack ─────────────────────────── */
export function SlackPlanVisual() {
  return (
    <ShowcaseFrame title="slack · #ops-team">
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-line bg-surface"><ConnectorIcon id="slack" size={16} /></span>
          <span className="font-sans text-[var(--text-small)] font-medium text-ink-muted">#ops-team</span>
        </div>
        <div className="flex items-start gap-2.5">
          <Avatar name="Avnish" size="sm" color="var(--neutral-700)" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[var(--text-micro)] font-semibold text-ink">Avnish</span>
            <p className="font-sans text-[var(--text-small)] text-ink-secondary"><span className="font-medium text-ink">@Souvenir</span> build a Brain that emails our top 50 customers about health.</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <Avatar name="Souvenir" initials="S" size="sm" color="var(--neutral-900)" />
          <div className="min-w-0 rounded-[var(--r-lg)] border border-line bg-bg-subtle p-3.5" style={{ boxShadow: "var(--shadow-inner)" }}>
            <span className="font-sans text-[var(--text-micro)] font-semibold text-ink">Souvenir · Customer Health Brain</span>
            <p className="mt-1 font-sans text-[var(--text-micro)] text-ink-subtle">PLAN · 3 steps · ~6:40 AM</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {["Pull top 50 by ARR (Stripe)", "Score account — Data Analyst", "Draft & send personalized email"].map((s) => (
                <li key={s} className="flex items-center justify-between gap-2 font-sans text-[var(--text-small)] text-ink-secondary">
                  <span>{s}</span><span className="text-[var(--text-micro)] text-ink-subtle">✓ ready</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex items-center rounded-[var(--r-pill)] bg-ink px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium text-dark-ink">Save &amp; schedule</span>
              <span className="inline-flex items-center rounded-[var(--r-pill)] border border-line-strong bg-surface px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink">Edit plan</span>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

/* ─────────────────────────── Schedule dashboard ("My Brains") ─────────────────────────── */
const BRAINS = [
  { name: "Morning Briefing", meta: "Inventory → Ad Performance → CX", next: "Tomorrow · 8:00", status: "Live" as const },
  { name: "Q4 Investor Update", meta: "Sheets → Drafter → Gmail", next: "In 22 hrs", status: "Queued" as const },
  { name: "Ship-Time Spend", meta: "Inventory → Ad Copywriter", next: "On trigger", status: "Live" as const },
  { name: "Past-Buyer Retarget", meta: "Klaviyo → Email → Ad Copy", next: "Tue · 10:00", status: "Live" as const },
  { name: "Catalog Integrity", meta: "PDP Writer → Inventory", next: "Paused", status: "Paused" as const },
];

const STATUS_COLOR = { Live: "Green", Queued: "Yellow", Paused: "Neutral" } as const;

export function ScheduleDashboard() {
  return (
    <ShowcaseFrame title="souvenir · my brains">
      <div className="p-5 sm:p-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-sans text-[var(--text-small)] font-semibold text-ink">My Brains</span>
          <div className="flex gap-1">
            {["All", "Live", "Paused"].map((t, i) => (
              <span key={t} className={"rounded-[var(--r-pill)] px-2.5 py-1 font-sans text-[var(--text-micro)] font-medium " + (i === 0 ? "bg-ink text-dark-ink" : "text-ink-subtle")}>{t}</span>
            ))}
          </div>
        </div>
        {/* column headers */}
        <div className="flex items-center gap-3 pb-1.5">
          <span className="flex-1 font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">Brain</span>
          <span className="hidden w-20 shrink-0 font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle sm:block">Next run</span>
          <span className="w-16 shrink-0 font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">Status</span>
        </div>
        <div className="flex flex-col">
          {BRAINS.map((b) => (
            <div key={b.name} className="flex items-center gap-3 border-t border-line py-2.5">
              <div className="min-w-0 flex-1">
                <span className="font-sans text-[var(--text-small)] font-medium text-ink">{b.name}</span>
                <p className="truncate font-sans text-[var(--text-micro)] text-ink-subtle">{b.meta}</p>
              </div>
              <span className="hidden w-20 shrink-0 font-sans text-[var(--text-micro)] text-ink-muted sm:block">{b.next}</span>
              <span className="w-16 shrink-0"><Badge label={b.status} color={STATUS_COLOR[b.status]} /></span>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

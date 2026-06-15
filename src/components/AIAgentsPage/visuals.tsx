import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { StatCard } from "@/components/StatCard";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";

const MODELS = [
  { name: "GPT-5.1 (Codex max)", tag: "Reasoning" },
  { name: "Gemini 2.5 Flash-Lite", tag: "Fast" },
  { name: "Gemini 2.5 Flash", tag: "Balanced" },
  { name: "Claude Opus 4.8", tag: "Deep", on: true },
];

export function ModelPickerVisual() {
  return (
    <ShowcaseFrame title="persona · model">
      <div className="flex flex-col gap-2 p-5 sm:p-6">
        <span className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">Model</span>
        {MODELS.map((m) => (
          <div key={m.name} className={"flex items-center justify-between rounded-[var(--r-md)] border px-3.5 py-3 " + (m.on ? "border-line-strong bg-bg-subtle" : "border-line bg-surface")} style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="font-sans text-[var(--text-small)] font-medium text-ink">{m.name}</span>
            <Badge label={m.tag} color="Neutral" />
          </div>
        ))}
        <p className="mt-1 font-sans text-[var(--text-micro)] text-ink-subtle">Auto-selected per task — or pin one.</p>
      </div>
    </ShowcaseFrame>
  );
}

const USERS = ["Chai", "Avnish", "Sahil", "Kunal", "Shyam"];

export function UsageVisual() {
  return (
    <ShowcaseFrame title="souvenir · command center">
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Credits this month" value="2.4M" delta="+12%" deltaTrend="up" />
          <StatCard label="Active Assistants" value="6" sub="across the team" />
        </div>
        <div className="rounded-[var(--r-md)] border border-line bg-surface p-4" style={{ boxShadow: "var(--shadow-sm)" }}>
          <div className="flex items-center justify-between">
            <span className="font-sans text-[var(--text-small)] font-medium text-ink">Recruiter</span>
            <Badge label="Team" color="Neutral" />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex">
              {USERS.map((u, i) => (
                <span key={u} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: USERS.length - i }} className="rounded-full ring-2 ring-[var(--surface)]">
                  <Avatar name={u} size="sm" color="var(--neutral-700)" />
                </span>
              ))}
            </div>
            <span className="font-sans text-[var(--text-micro)] text-ink-muted">+8 using this Assistant</span>
          </div>
        </div>
      </div>
    </ShowcaseFrame>
  );
}

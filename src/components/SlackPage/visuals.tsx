import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/* ─────────────────── Hero: Slack ⇄ Souvenir workforce map ─────────────────── */
const LAYERS = [
  { label: "Research board", icons: ["notion", "figma", "hubspot"] },
  { label: "Logic & Connectors", icons: ["stripe", "github", "gmail", "linear"] },
  { label: "AI Agents", avatars: ["Writer", "Analyst", "Inbox"] },
  { label: "Automation Flows", icons: ["slack", "notion", "github"] },
];

export function SlackWorkforceMap() {
  return (
    <ShowcaseFrame title="souvenir · slack manager">
      <div className="flex flex-col gap-3 p-5 sm:p-6">
        {/* Souvenir ⇄ Slack */}
        <div className="flex items-center justify-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-dark-ink font-display text-[16px]" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
          <span className="h-px w-6 bg-line-strong" />
          <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}><ConnectorIcon id="slack" size={24} /></span>
        </div>
        <div className="mx-auto inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-bg-subtle px-3 py-1 font-sans text-[var(--text-micro)] text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Memory
        </div>
        {LAYERS.map((l) => (
          <div key={l.label} className="flex items-center justify-between gap-3 rounded-[var(--r-md)] border border-line bg-surface px-3.5 py-2.5" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span className="font-sans text-[var(--text-small)] font-medium text-ink">{l.label}</span>
            <div className="flex items-center gap-1.5">
              {l.icons?.map((ic) => (
                <span key={ic} className="flex h-7 w-7 items-center justify-center rounded-[8px] border border-line bg-bg-subtle"><ConnectorIcon id={ic} size={16} /></span>
              ))}
              {l.avatars?.map((a, i) => (
                <span key={a} style={{ marginLeft: i === 0 ? 0 : -6, zIndex: 9 - i }} className="rounded-full ring-2 ring-[var(--surface)]"><Avatar name={a} size="xs" color="var(--neutral-700)" /></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ShowcaseFrame>
  );
}

/* ─────────────────── "What it looks like in your Slack" (dark thread) ─────────────────── */
export function SlackConvoPanel() {
  return (
    <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-dark-bg p-6 sm:p-8" style={{ boxShadow: "var(--shadow-lg)" }}>
      <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[var(--dark-surface)]"><ConnectorIcon id="slack" size={15} /></span>
          <span className="font-sans text-[var(--text-small)] font-medium text-dark-ink-muted">#growth-team</span>
        </div>
        <div className="flex items-start gap-2.5">
          <Avatar name="Maya" size="sm" color="var(--neutral-600)" />
          <div className="flex flex-col gap-1">
            <span className="font-sans text-[var(--text-micro)] font-semibold text-dark-ink">Maya</span>
            <p className="font-sans text-[var(--text-small)] text-dark-ink-muted"><span className="font-medium text-dark-ink">@Souvenir</span> draft a follow-up to the prospect we met yesterday</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-dark-ink text-dark-bg font-display text-[12px]">S</span>
          <div className="min-w-0 flex-1">
            <span className="font-sans text-[var(--text-micro)] font-semibold text-dark-ink">Souvenir <span className="font-normal text-dark-ink-muted">· APP</span></span>
            <div className="mt-1.5 flex flex-col gap-1.5">
              {["→ Master → Brain → Writer + Inbox", "→ Pulled context from your last thread + Pins", "→ Draft ready — approve to send"].map((s) => (
                <span key={s} className="font-sans text-[var(--text-micro)] text-dark-ink-muted">{s}</span>
              ))}
            </div>
            <div className="mt-3 flex gap-2">
              <span className="inline-flex items-center rounded-[var(--r-pill)] bg-dark-ink px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium text-dark-bg">Approve &amp; send</span>
              <span className="inline-flex items-center rounded-[var(--r-pill)] border border-[var(--dark-line)] px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium text-dark-ink">Edit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────── small @Souvenir command chip (for example cards) ─────────────────── */
export function CommandChip({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-2 rounded-[var(--r-md)] border border-line bg-bg-subtle px-3 py-2.5" style={{ boxShadow: "var(--shadow-inner)" }}>
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] border border-line bg-surface font-mono text-[var(--text-micro)] text-ink-subtle">{"</>"}</span>
      <p className="font-sans text-[var(--text-small)] text-ink-secondary">
        <span className="font-medium text-[color:var(--coral,#d9685a)]">@Souvenir</span> {children}
      </p>
    </div>
  );
}

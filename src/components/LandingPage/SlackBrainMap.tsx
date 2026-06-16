import { Avatar } from "@/components/Avatar";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/** #11 Slack × Brain integration tree: the Brain joined to Slack, then the rows
 *  it coordinates (Research board / AI Agents / Automation Flows). Composed from
 *  KDS atoms; the visual for the "Your knowledge, deeply understood" section. */

function Join() {
  return (
    <div className="flex flex-col items-center" aria-hidden>
      <span className="h-4 w-px bg-line-strong" />
      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-surface text-[var(--text-small)] text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>+</span>
      <span className="h-4 w-px bg-line-strong" />
    </div>
  );
}

function Row({ label, trailing }: { label: string; trailing: React.ReactNode }) {
  return (
    <div className="flex w-full items-center justify-between rounded-[var(--r-lg)] border border-line bg-surface px-4 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
      <span className="flex items-center gap-2.5">
        <span aria-hidden className="h-6 w-6 rounded-[7px] bg-surface-warm" />
        <span className="font-sans text-[var(--text-small)] font-medium text-ink">{label}</span>
      </span>
      <span className="flex items-center gap-1.5">{trailing}</span>
    </div>
  );
}

const dot = (c: string) => <span aria-hidden className="h-5 w-5 rounded-[6px]" style={{ backgroundColor: c }} />;
const people = (names: string[]) => names.map((n) => <Avatar key={n} name={n} size="xs" color="var(--neutral-600)" style={{ boxShadow: "0 0 0 2px var(--surface)" }} />);

export default function SlackBrainMap() {
  return (
    <div className="mx-auto flex w-full max-w-[26rem] flex-col items-center">
      {/* Brain + Slack header */}
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink font-display text-[16px] text-dark-ink" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
        <span aria-hidden className="text-ink-subtle">+</span>
        <span className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}><ConnectorIcon id="slack" size={24} /></span>
      </div>
      <Join />
      <div className="flex w-full flex-col">
        <Row label="Research board" trailing={<>{dot("#10a37f")}{dot("#d97757")}{dot("#4285f4")}</>} />
        <Join />
        <Row label="AI Agents" trailing={<><span className="flex -space-x-1.5">{people(["Scout", "Drafter", "Ops"])}</span><span className="ml-1 font-sans text-[var(--text-micro)] text-ink-muted">+12</span></>} />
        <Join />
        <Row label="Automation Flows" trailing={<><span className="flex -space-x-1.5">{people(["Ops", "Ana"])}</span><span className="ml-1 flex h-5 w-5 items-center justify-center"><ConnectorIcon id="slack" size={16} /></span></>} />
      </div>
    </div>
  );
}

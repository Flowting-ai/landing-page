import { Avatar } from "@/components/Avatar";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import Roster, { type RosterRow } from "@/components/sections/Roster";

/** #14 coordinated team: alternating agent rows (name · role · @handle) + the
 *  "Ask Chief in Slack" coordination note. Composed from KDS atoms; the
 *  alternating rhythm comes from <Roster> per-row offset. */

function AgentRow({ name, role, handle, flip = false }: { name: string; role: string; handle: string; flip?: boolean }) {
  const avatar = <Avatar name={name} size="md" color="var(--neutral-600)" />;
  const text = (
    <div className={flip ? "text-right" : ""}>
      <span className="font-display text-[var(--text-h3)] leading-none text-ink">{name}</span>
      <div className="mt-1 font-sans text-[var(--text-small)] text-ink-muted">{role} · <span className="font-mono text-[var(--text-micro)] text-ink-subtle">{handle}</span></div>
    </div>
  );
  return <div className="flex items-center gap-3">{flip ? (<>{text}{avatar}</>) : (<>{avatar}{text}</>)}</div>;
}

const AGENTS = [
  { name: "Scout", role: "Research briefs", handle: "@scout", offset: 0 },
  { name: "Drafter", role: "Emails, proposals, updates", handle: "@drafter", offset: 14, flip: true },
  { name: "Ops", role: "Background automation", handle: "@ops", offset: 0 },
  { name: "Analyst", role: "Data, trends, forecasts", handle: "@analyst", offset: 14, flip: true },
  { name: "Recruiter", role: "Sourcing, screening, scheduling", handle: "@recruiter", offset: 0 },
];

export default function TeamRoster() {
  const rows: RosterRow[] = AGENTS.map((a) => ({
    id: a.name,
    offset: a.offset,
    node: <AgentRow name={a.name} role={a.role} handle={a.handle} flip={a.flip} />,
  }));

  return (
    <div className="flex flex-col gap-3">
      <Roster rows={rows} />
      <div className="flex items-start gap-2.5 rounded-[var(--r-lg)] border border-line bg-bg-subtle px-3.5 py-3" style={{ boxShadow: "var(--shadow-inner)" }}>
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"><ConnectorIcon id="slack" size={16} /></span>
        <p className="font-sans text-[var(--text-small)] text-ink-secondary">
          A coordinated team. Ask Chief in Slack — it routes to the right agent, pulls from your connectors, and drops the result back into the thread.
        </p>
      </div>
    </div>
  );
}

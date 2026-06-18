"use client";

import type { ReactNode } from "react";
import { Avatar } from "@/components/Avatar";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import {
  RadarThreeIcon,
  QuillWriteOneIcon,
  WorkflowSquareTenIcon,
  AnalyticsOneIcon,
  UserAddOneIcon,
} from "@strange-huge/icons";
import Roster, { type RosterRow } from "@/components/sections/Roster";
import Reveal from "@/components/ui/Reveal";

/** #14 coordinated team: the full AI department as a stacked roster. Same KDS
 *  language as PersonaRoster (Avatar + name + @handle header, one elevated
 *  "live one"), with an allowed role icon per agent and the "Ask Chief in Slack"
 *  coordination note. Composed from KDS atoms; one quiet entrance reveal. */

function AgentRow({
  name,
  role,
  handle,
  icon,
}: {
  name: string;
  role: string;
  handle: string;
  icon: ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <Avatar name={name} size="md" color="var(--neutral-600)" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-display text-[length:var(--text-h3)] leading-none text-ink">
            {name}
          </span>
          <span className="font-mono text-[length:var(--text-micro)] text-ink-subtle">
            {handle}
          </span>
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-ink-muted">
          <span className="flex shrink-0 items-center" style={{ lineHeight: 0 }}>
            {icon}
          </span>
          <span className="font-sans text-[length:var(--text-small)]">{role}</span>
        </div>
      </div>
    </div>
  );
}

const AGENTS: { name: string; role: string; handle: string; icon: ReactNode; focused?: boolean }[] = [
  { name: "Scout", role: "Research briefs", handle: "@scout", icon: <RadarThreeIcon size={16} /> },
  { name: "Drafter", role: "Emails, proposals, updates", handle: "@drafter", icon: <QuillWriteOneIcon size={16} /> },
  { name: "Ops", role: "Background automation", handle: "@ops", icon: <WorkflowSquareTenIcon size={16} />, focused: true },
  { name: "Analyst", role: "Data, trends, forecasts", handle: "@analyst", icon: <AnalyticsOneIcon size={16} /> },
  { name: "Recruiter", role: "Sourcing, screening, scheduling", handle: "@recruiter", icon: <UserAddOneIcon size={16} /> },
];

export default function TeamRoster() {
  const rows: RosterRow[] = AGENTS.map((a) => ({
    id: a.name,
    focused: a.focused,
    node: <AgentRow name={a.name} role={a.role} handle={a.handle} icon={a.icon} />,
  }));

  return (
    <Reveal className="flex flex-col gap-3">
      <Roster rows={rows} />
      <div
        className="flex items-start gap-2.5 rounded-[var(--r-lg)] border border-line bg-bg-subtle px-3.5 py-3"
        style={{ boxShadow: "var(--shadow-inner)" }}
      >
        <span className="mt-0.5 flex shrink-0 items-center justify-center" style={{ lineHeight: 0 }}>
          <ConnectorIcon id="slack" size={16} />
        </span>
        <p className="min-w-0 font-sans text-[length:var(--text-small)] text-ink-secondary">
          A coordinated team. Ask Chief in Slack — it routes to the right agent, pulls from your
          connectors, and drops the result back into the thread.
        </p>
      </div>
    </Reveal>
  );
}
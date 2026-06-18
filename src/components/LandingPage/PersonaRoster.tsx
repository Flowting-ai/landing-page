"use client";

import {
  RadarThreeIcon,
  QuillWriteOneIcon,
  SettingsOneIcon,
  AnalyticsOneIcon,
  UserAddOneIcon,
} from "@strange-huge/icons";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import type { ReactNode } from "react";
import { Avatar } from "@/components/Avatar";
import { MessageBubble } from "@/components/MessageBubble";
import ClientOnly from "@/components/ui/ClientOnly";
import Reveal from "@/components/ui/Reveal";

/** Pillar 01 visual — the "team of Assistants" roster.
 *  Each persona is a KDS Avatar monogram (on --neutral-700) with a role icon,
 *  role label, and a mono @handle. The footer is a real KDS MessageBubble note
 *  ("Ask Chief in Slack…") — proof that you talk to the team like teammates.
 *  Wrapped in ClientOnly (MessageBubble computes client-only styles). One quiet
 *  entrance reveal; reduced-motion renders the full static end-state. */

type Persona = {
  name: string;
  role: string;
  handle: string;
  icon: ReactNode;
};

const ICON_SIZE = 16;

const personas: Persona[] = [
  { name: "Scout", role: "Research", handle: "@scout", icon: <RadarThreeIcon size={ICON_SIZE} /> },
  { name: "Drafter", role: "Writing", handle: "@drafter", icon: <QuillWriteOneIcon size={ICON_SIZE} /> },
  { name: "Ops", role: "Operations", handle: "@ops", icon: <SettingsOneIcon size={ICON_SIZE} /> },
  { name: "Analyst", role: "Analytics", handle: "@analyst", icon: <AnalyticsOneIcon size={ICON_SIZE} /> },
  { name: "Recruiter", role: "Hiring", handle: "@recruiter", icon: <UserAddOneIcon size={ICON_SIZE} /> },
];

function PersonaCard({ name, role, handle, icon }: Persona) {
  return (
    <div className="flex min-w-0 items-center gap-3 rounded-[var(--r-md)] border border-line bg-surface-warm px-4 py-3 shadow-[var(--shadow-sm)]">
      <Avatar name={name} size="sm" color="var(--neutral-700)" />
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {/* Name — one fixed size + weight on every card. */}
        <span className="font-display text-[length:var(--text-body)] font-semibold leading-none text-ink">
          {name}
        </span>
        {/* Role icon · uppercase role micro · mono @handle (no truncation). */}
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="shrink-0 text-ink" aria-hidden style={{ lineHeight: 0 }}>
            {icon}
          </span>
          <span className="whitespace-nowrap text-[length:var(--text-micro)] uppercase tracking-wide text-ink-muted">
            {role}
          </span>
          <span aria-hidden className="text-ink-subtle">·</span>
          <span className="whitespace-nowrap font-mono text-[length:var(--text-micro)] text-ink-subtle">
            {handle}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function PersonaRoster() {
  return (
    <ClientOnly minHeight={520}>
      <Reveal className="flex flex-col gap-3">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {personas.map((p) => (
            <PersonaCard key={p.handle} {...p} />
          ))}
        </div>

        {/* Footer note — talk to the team like teammates, right in Slack. */}
        <div className="mt-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-ink-muted">
            <span aria-hidden style={{ lineHeight: 0 }}>
              <ConnectorIcon id="slack" size={16} />
            </span>
            <span className="font-mono text-[var(--text-micro)] text-ink-subtle">
              #general
            </span>
          </div>
          <MessageBubble
            role="user"
            content="@chief — ask Scout to pull the competitor brief, then have Drafter turn it into a one-pager."
            maxWidth="100%"
          />
        </div>
      </Reveal>
    </ClientOnly>
  );
}
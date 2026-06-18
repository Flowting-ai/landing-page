"use client";

import { Avatar } from "@/components/Avatar";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { LlmIcon } from "@strange-huge/icons/llm";
import { LogoIcon, RadarThreeIcon, UserAiIcon, WorkflowSquareTenIcon } from "@strange-huge/icons";

/** #11 Slack × Brain integration tree: the Brain joined to Slack, then the rows
 *  it coordinates (Research board / AI Agents / Automation Flows). Composed from
 *  KDS atoms; the visual for the "Your knowledge, deeply understood" section. */

function Join() {
  return (
    <div className="flex flex-col items-center" aria-hidden>
      <span className="h-3 w-px bg-line-strong" />
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-surface text-[length:var(--text-small)] text-ink-muted"
        style={{ boxShadow: "var(--shadow-sm)" }}
      >
        +
      </span>
      <span className="h-3 w-px bg-line-strong" />
    </div>
  );
}

function Row({
  label,
  icon,
  trailing,
}: {
  label: string;
  icon: React.ReactNode;
  trailing: React.ReactNode;
}) {
  return (
    <div
      className="flex w-full min-w-0 items-center justify-between gap-3 rounded-[var(--r-lg)] border border-line bg-surface px-4 py-3"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span
          aria-hidden
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[7px] bg-surface-warm text-ink-muted"
        >
          {icon}
        </span>
        <span className="truncate font-sans text-[length:var(--text-small)] font-medium text-ink">
          {label}
        </span>
      </span>
      <span className="flex shrink-0 items-center gap-2">{trailing}</span>
    </div>
  );
}

/** Persona avatars: evenly spaced, real KDS Avatar at xs, proper initials,
 *  ringed with the surface so they read as a tidy stack. */
function People({ names }: { names: string[] }) {
  return (
    <span className="flex -space-x-1.5">
      {names.map((n) => (
        <Avatar
          key={n}
          name={n}
          size="xs"
          color="var(--neutral-600)"
          style={{ boxShadow: "0 0 0 2px var(--surface)" }}
        />
      ))}
    </span>
  );
}

/** Models on the research board — tokenized via real LlmIcon marks, not bare
 *  colored dots, each on a neutral chip so meaning isn't carried by color alone. */
function Model({ id }: { id: string }) {
  return (
    <span
      aria-hidden
      className="flex h-6 w-6 items-center justify-center rounded-[6px] border border-line bg-surface"
    >
      <LlmIcon id={id} variant="color" size={16} />
    </span>
  );
}

export default function SlackBrainMap() {
  return (
    <div className="mx-auto flex w-full max-w-[26rem] flex-col items-center">
      {/* Brain (Souvenir mark) + Slack header */}
      <div className="flex items-center gap-3">
        <span
          className="flex h-12 w-12 items-center justify-center rounded-full bg-ink"
          style={{ boxShadow: "var(--shadow-lg), 0 0 0 3px var(--purple-50)" }}
        >
          <LogoIcon size={24} color="var(--dark-ink)" />
        </span>
        <span aria-hidden className="text-ink-subtle">
          +
        </span>
        <span
          className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-line bg-surface"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          <ConnectorIcon id="slack" size={24} />
        </span>
      </div>
      <Join />
      <div className="flex w-full flex-col gap-0">
        <Row
          label="Research board"
          icon={<RadarThreeIcon size={16} />}
          trailing={
            <>
              <Model id="OpenAI" />
              <Model id="Anthropic" />
              <Model id="Gemini" />
            </>
          }
        />
        <Join />
        <Row
          label="AI Agents"
          icon={<UserAiIcon size={16} />}
          trailing={
            <>
              <People names={["Scout One", "Drafter Two", "Ops Three"]} />
              <span className="ml-0.5 font-sans text-[length:var(--text-micro)] tabular-nums text-ink-muted">
                +12
              </span>
            </>
          }
        />
        <Join />
        <Row
          label="Automation Flows"
          icon={<WorkflowSquareTenIcon size={16} />}
          trailing={
            <>
              <People names={["Ops Lead", "Ana Reyes"]} />
              <span className="ml-0.5 flex h-6 w-6 items-center justify-center rounded-[6px] border border-line bg-surface">
                <ConnectorIcon id="slack" size={16} />
              </span>
            </>
          }
        />
      </div>
    </div>
  );
}
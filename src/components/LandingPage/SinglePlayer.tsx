"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { LlmIcon } from "@strange-huge/icons/llm";
import { UserIcon, CancelOneIcon } from "@strange-huge/icons";

/** Home §2 — "single-player mode": the chaos→order contrast, SIDE BY SIDE in one
 *  section (Figma node 6435-14067; merges the old Breaking + Relief). One heading,
 *  two columns: LEFT "Today — chaos" (scattered, disconnected tools) vs RIGHT
 *  "With Souvenir — order" (one connector tree → Souvenir → a team of agents).
 *  Motion is quiet (reveal only) — the hero owns the page's one signature moment. */

// LEFT — the scattered tools (browser-tab style chips piling up). Valid icon ids only.
type Tab = { kind: "connector" | "llm"; icon: string; label: string };
const CHAOS_TABS: Tab[] = [
  { kind: "llm", icon: "Claude", label: "Claude" },
  { kind: "connector", icon: "notion", label: "Notion" },
  { kind: "llm", icon: "OpenAI", label: "ChatGPT" },
  { kind: "connector", icon: "linear", label: "Linear" },
  { kind: "llm", icon: "Gemini", label: "Gemini" },
  { kind: "connector", icon: "slack", label: "Slack" },
  { kind: "connector", icon: "hubspot", label: "HubSpot" },
  { kind: "connector", icon: "figma", label: "Figma" },
  { kind: "connector", icon: "stripe", label: "Stripe" },
  { kind: "connector", icon: "github", label: "GitHub" },
  { kind: "llm", icon: "Mistral", label: "Mistral" },
  { kind: "connector", icon: "gmail", label: "Gmail" },
];

// RIGHT — the order tree
const ORDER_CONNECTORS = ["slack", "gmail", "notion", "hubspot", "stripe", "linear"];
const ORDER_AGENTS = ["Morning Briefing", "Utilization Report", "Email Lifecycle"];

function TabChip({ tab }: { tab: Tab }) {
  return (
    <span
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--r-sm)] border border-line bg-surface px-3 py-2 font-sans text-[length:var(--text-small)] text-ink"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <span className="flex shrink-0 items-center justify-center" style={{ lineHeight: 0 }}>
        {tab.kind === "llm" ? <LlmIcon id={tab.icon} variant="color" size={16} /> : <ConnectorIcon id={tab.icon} size={16} />}
      </span>
      <span className="font-medium">{tab.label}</span>
      <CancelOneIcon size={13} className="ml-1 shrink-0 text-ink-subtle" />
    </span>
  );
}

function ConnectorTile({ id }: { id: string }) {
  return (
    <span
      className="flex h-[44px] w-[44px] items-center justify-center rounded-[12px] border border-line bg-surface"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <ConnectorIcon id={id} size={22} />
    </span>
  );
}

function AgentPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-2 font-sans text-[length:var(--text-small)] text-ink-secondary"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <UserIcon size={15} />
      {label}
    </span>
  );
}

/** A column card — shared frame so chaos + order read as one comparison family. */
function ColumnCard({
  badge,
  title,
  body,
  surface,
  children,
}: {
  badge: React.ReactNode;
  title: string;
  body: string;
  surface: "warm" | "plain";
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-[var(--r-2xl)] border border-line p-6 md:p-8"
      style={{
        backgroundColor: surface === "warm" ? "var(--surface-warm)" : "var(--surface)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <div>{badge}</div>
      <h3 className="font-display mt-4 text-[length:var(--text-h3)] leading-[var(--text-h3--line-height)] text-ink text-balance">
        {title}
      </h3>
      <p className="mt-3 font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
        {body}
      </p>
      {/* visual fills the remaining height so both columns bottom-align */}
      <div className="relative mt-auto pt-8">{children}</div>
    </div>
  );
}

export default function SinglePlayer() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="mx-auto flex max-w-[44rem] flex-col items-center text-center">
          <Reveal>
            <Badge label="Why your team's tired" color="Neutral" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
              Your team&rsquo;s AI is stuck in{" "}
              <em className="italic text-ink-muted">single-player mode.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[52ch] font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
              One person, one chat, one model, no shared memory. Everyone runs their own tools in their
              own tabs, and your team is the manual bridge between all of them.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {/* LEFT — chaos */}
          <Reveal className="h-full">
            <ColumnCard
              surface="warm"
              badge={<Badge label="Today — chaos" color="Red" />}
              title="Six tabs. Six accounts. Zero shared memory."
              body="Prompts vanish when the chat closes. Context lives in someone's head. Nobody knows which AI to use for which job, and none of it talks to your actual tools."
            >
              {/* scattered tool tabs — the manual-bridge pile. Generous row gap +
                  per-chip jitter so the cluster fills the card and reads as chaos. */}
              <div className="flex h-full flex-wrap content-between gap-x-3 gap-y-5 py-2">
                {CHAOS_TABS.map((t, i) => (
                  <span key={i} style={{ transform: `translateY(${(i % 4) * 5 - 7}px) rotate(${(i % 2 ? 1 : -1) * (0.8 + (i % 3) * 0.5)}deg)` }}>
                    <TabChip tab={t} />
                  </span>
                ))}
              </div>
            </ColumnCard>
          </Reveal>

          {/* RIGHT — order */}
          <Reveal delay={0.08} className="h-full">
            <ColumnCard
              surface="plain"
              badge={<Badge label="With Souvenir — order" color="Green" />}
              title="One workspace. One shared brain. Agents that remember."
              body="Every tool, conversation, and decision lives in one operational layer. AI agents read the same context, run the work, and hand it off to each other, automatically."
            >
              {/* compact connector tree: connectors → Souvenir → a team of agents */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {ORDER_CONNECTORS.map((id) => <ConnectorTile key={id} id={id} />)}
                </div>
                <span aria-hidden className="h-5 w-px" style={{ backgroundColor: "var(--neutral-300)" }} />
                <span className="relative block" style={{ width: 72, height: 72 }}>
                  <Image src="/visuals/souvenir-gold.webp" alt="Souvenir Brain" fill sizes="72px" className="object-contain drop-shadow-[0_8px_24px_rgba(82,75,71,0.18)]" />
                </span>
                <span aria-hidden className="h-5 w-px" style={{ backgroundColor: "var(--accent)" }} />
                <div className="flex flex-wrap items-center justify-center gap-2">
                  {ORDER_AGENTS.map((label) => <AgentPill key={label} label={label} />)}
                </div>
              </div>
            </ColumnCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

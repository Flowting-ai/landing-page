"use client";

import type { ReactNode } from "react";
import {
  UserAiIcon,
  BubbleChatIcon,
  WorkflowSquareTenIcon,
  BrainTwoIcon,
  GalaxyIcon,
  RadarThreeIcon,
  UserAddOneIcon,
  CheckmarkCircleTwoIcon,
  CancelOneIcon,
} from "@strange-huge/icons";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";

type Row = {
  icon: ReactNode;
  cap: string;
  desc: string;
  s: string;
  c: string;
  p: string;
};

// Tightened to the rows that genuinely differentiate: the workforce, the Slack
// command center, background automation, the context-architecture spine (central
// Brain w/ hierarchy + memory vs. per-chat history vs. siloed app memory),
// cross-app memory, model routing, and the seat economics.
const ROWS: Row[] = [
  { icon: <UserAiIcon size={18} />, cap: "Multi-agent workforce", desc: "Role-tuned Assistants that hand off work.", s: "Native", c: "Single agent", p: "Not available" },
  { icon: <BubbleChatIcon size={18} />, cap: "Slack-native command center", desc: "One managerial bot coordinates the team in your channels.", s: "Native", c: "Bolt-on · third-party", p: "Bolt-on · third-party" },
  { icon: <WorkflowSquareTenIcon size={18} />, cap: "Background automation", desc: "Multi-step work runs across your stack without prompts.", s: "Native", c: "Prompt-driven · you drive every step", p: "Not available" },
  { icon: <BrainTwoIcon size={18} />, cap: "Context architecture", desc: "A central Brain with hierarchy + durable memory feeds every agent.", s: "Central Brain", c: "Per-chat history · nothing shared", p: "Siloed per app · no shared layer" },
  { icon: <GalaxyIcon size={18} />, cap: "Cross-app memory", desc: "Unified context across Gmail, Drive, Slack, your CRM — persists across every model.", s: "Native", c: "Session-bound · starts blank, provider-locked", p: "App silo · reads only its own app" },
  { icon: <RadarThreeIcon size={18} />, cap: "Automatic model routing", desc: "Best model picked per task — for quality and cost.", s: "Native", c: "Single model · one provider", p: "Single model · one provider" },
  { icon: <UserAddOneIcon size={18} />, cap: "Unlimited seats", desc: "Whole team onboarded without per-user cost.", s: "Included", c: "Per-seat · $25–60/user/mo", p: "Per-seat · $10–20/user/mo" },
];

// Souvenir cell: ink check + label. Shape (check) + label carry meaning, never color.
function YesCell({ text }: { text: string }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-1.5 font-sans text-[var(--text-small)] font-medium text-ink">
      <CheckmarkCircleTwoIcon size={16} className="shrink-0 text-ink" />
      <span className="min-w-0">{text}</span>
    </span>
  );
}

// Competitor cell: "not available" gets an explicit cancel glyph; partial/qualified
// support gets a neutral dash. Icon + label, never color-only.
function Cell({ text }: { text: string }) {
  const isNone = /not available/i.test(text);
  return (
    <span className="inline-flex min-w-0 items-start gap-1.5 font-sans text-[var(--text-small)] text-ink-muted">
      {isNone ? (
        <CancelOneIcon size={16} className="mt-0.5 shrink-0 text-ink-subtle" />
      ) : (
        <span aria-hidden className="mt-2 h-px w-2.5 shrink-0 bg-line-strong" />
      )}
      <span className="min-w-0">{text}</span>
    </span>
  );
}

export default function CategoryTable() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="The category check"
          title="There is no second place."
          lead="Single-model platforms give you a chatbot. Productivity tools give you a sidebar. Souvenir is the operational layer that sits underneath both — and replaces what's missing in between."
        />
        <Reveal delay={0.12}>
          {/* Desktop / tablet: scrollable table, never overflows the viewport. */}
          <div
            className="mt-12 hidden overflow-x-auto rounded-[var(--r-2xl)] border border-line bg-surface md:block"
            style={{ boxShadow: "var(--shadow-sm)", overscrollBehaviorX: "contain" }}
          >
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr className="border-b border-line">
                  <th className="w-[28%] min-w-0 px-5 py-4 text-left font-sans text-[var(--text-micro)] font-semibold uppercase tracking-[0.1em] text-ink-subtle">Capability</th>
                  <th className="min-w-0 px-5 py-4 text-left font-sans text-[var(--text-micro)] font-semibold text-ink bg-surface-warm">Souvenir<span className="block font-normal text-ink-subtle">Operational layer</span></th>
                  <th className="min-w-0 px-5 py-4 text-left font-sans text-[var(--text-micro)] font-medium text-ink-muted">Conversational AI<span className="block font-normal text-ink-subtle">ChatGPT · Claude · Gemini</span></th>
                  <th className="min-w-0 px-5 py-4 text-left font-sans text-[var(--text-micro)] font-medium text-ink-muted">Productivity tools<span className="block font-normal text-ink-subtle">Notion AI · Copilot</span></th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.cap} className="border-b border-line last:border-0 align-top">
                    <td className="px-5 py-4">
                      <span className="flex items-center gap-2">
                        <span aria-hidden className="shrink-0 text-ink-secondary" style={{ lineHeight: 0 }}>{r.icon}</span>
                        <span className="font-sans text-[var(--text-small)] font-medium text-ink">{r.cap}</span>
                      </span>
                      <span className="mt-0.5 block font-sans text-[var(--text-micro)] text-ink-subtle">{r.desc}</span>
                    </td>
                    <td className="px-5 py-4 bg-surface-warm"><YesCell text={r.s} /></td>
                    <td className="px-5 py-4"><Cell text={r.c} /></td>
                    <td className="px-5 py-4"><Cell text={r.p} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked cards, one per capability. No horizontal scroll. */}
          <div className="mt-10 flex flex-col gap-4 md:hidden">
            {ROWS.map((r) => (
              <div
                key={r.cap}
                className="rounded-[var(--r-xl)] border border-line bg-surface p-5"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-center gap-2">
                  <span aria-hidden className="shrink-0 text-ink-secondary" style={{ lineHeight: 0 }}>{r.icon}</span>
                  <span className="font-sans text-[var(--text-small)] font-medium text-ink">{r.cap}</span>
                </div>
                <p className="mt-1 font-sans text-[var(--text-micro)] text-ink-subtle">{r.desc}</p>
                <dl className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
                  <div className="rounded-[var(--r-lg)] bg-surface-warm px-3 py-2.5">
                    <dt className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.08em] text-ink-subtle">Souvenir</dt>
                    <dd className="mt-1"><YesCell text={r.s} /></dd>
                  </div>
                  <div className="px-3">
                    <dt className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.08em] text-ink-subtle">Conversational AI</dt>
                    <dd className="mt-1"><Cell text={r.c} /></dd>
                  </div>
                  <div className="px-3">
                    <dt className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.08em] text-ink-subtle">Productivity tools</dt>
                    <dd className="mt-1"><Cell text={r.p} /></dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
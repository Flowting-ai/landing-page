"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { CheckmarkCircleTwoIcon } from "@strange-huge/icons";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

/** Brain proof (feedback #10: "need a brain-specific screen"). A focused, static
 *  panel of the Brain EXECUTING a multi-step goal — the run timeline from the real
 *  product (may-day Brain template, "Executing" state), rebuilt lightly from KDS
 *  tokens + atoms (no heavy template vendor). It proves the differentiator the
 *  ChatBoard couldn't: you hand off a goal and the Brain runs the steps itself. */

type Step = {
  label: string;
  state: "done" | "running" | "pending";
  source?: "notion" | "zendesk" | "github";
};

const GOAL = "Research the top 5 customer pain points from our Q1 interviews and draft a summary.";
const NARRATION = "Pulling transcripts, identifying themes, and drafting a summary.";

const STEPS: Step[] = [
  { label: "Pull interview transcripts from Notion", state: "done", source: "notion" },
  { label: "Identify recurring pain-point themes", state: "running" },
  { label: "Cross-reference with support tickets", state: "pending", source: "zendesk" },
  { label: "Draft the summary document", state: "pending" },
];

function StepMarker({ state, index }: { state: Step["state"]; index: number }) {
  if (state === "done") {
    return (
      <span aria-hidden className="flex shrink-0 text-ink" style={{ lineHeight: 0 }}>
        <CheckmarkCircleTwoIcon size={22} />
      </span>
    );
  }
  if (state === "running") {
    // Accent ring marks the active step (mauve = the page's signature accent,
    // decorative only). Static — the hero owns the page's one moving moment.
    return (
      <span
        aria-hidden
        className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full"
        style={{ border: "2px solid var(--accent)", boxShadow: "0 0 0 4px var(--purple-50)" }}
      >
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
      </span>
    );
  }
  return (
    <span
      aria-hidden
      className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-line bg-surface font-sans text-[length:var(--text-micro)] tabular-nums text-ink-subtle"
    >
      {index + 1}
    </span>
  );
}

export default function BrainProof() {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <span className="flex items-center gap-2.5 font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.14em]">
              <span className="font-mono text-ink-subtle tabular-nums">05</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <span className="text-[color:var(--accent)]">The Brain</span>
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-[24ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
              Hand off a goal. <em className="italic text-ink-muted">The Brain runs every step.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12">
          <Reveal>
            <div
              className="relative mx-auto w-full max-w-[56rem] overflow-hidden rounded-[var(--radius-window)] border border-line bg-surface"
              style={{ boxShadow: "var(--shadow-float)" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 z-10 rounded-[var(--radius-window)]"
                style={{ boxShadow: "var(--shadow-inner)" }}
              />

              <div className="relative p-6 sm:p-8">
                {/* Header — Brain identity + run status */}
                <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface"
                      style={{ boxShadow: "var(--shadow-sm)" }}
                    >
                      <Image src="/visuals/souvenir-gold.webp" alt="" width={18} height={18} className="h-[18px] w-[18px] object-contain" />
                    </span>
                    <span className="font-sans text-[length:var(--text-small)] font-semibold text-ink">Souvenir · Brain</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-[var(--r-pill)] border border-line bg-surface-warm px-2.5 py-1 font-sans text-[length:var(--text-micro)] font-medium text-ink-secondary">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                      Running
                    </span>
                    <span className="font-sans text-[length:var(--text-micro)] tabular-nums text-ink-subtle">1 / 4</span>
                  </div>
                </div>

                {/* The goal handed to the Brain */}
                <p className="mt-5 max-w-[52ch] font-sans text-[length:var(--text-body)] leading-relaxed text-ink">
                  {GOAL}
                </p>
                <p className="mt-1.5 font-sans text-[length:var(--text-small)] italic text-ink-muted">{NARRATION}</p>

                {/* The plan — steps executing, with a connecting rail */}
                <ol className="mt-6 flex flex-col">
                  {STEPS.map((s, i) => (
                    <li key={s.label} className="relative flex items-start gap-3 pb-5 last:pb-0">
                      {/* rail between markers */}
                      {i < STEPS.length - 1 && (
                        <span aria-hidden className="absolute left-[10px] top-6 h-[calc(100%-12px)] w-px" style={{ backgroundColor: "var(--line)" }} />
                      )}
                      <StepMarker state={s.state} index={i} />
                      <div className="flex min-w-0 flex-1 flex-col gap-1 pt-px">
                        <span
                          className={
                            "font-sans text-[length:var(--text-small)] " +
                            (s.state === "pending" ? "text-ink-muted" : "font-medium text-ink")
                          }
                        >
                          {s.label}
                        </span>
                        {s.source && (
                          <span className="inline-flex w-fit items-center gap-1.5 rounded-[var(--r-pill)] border border-line bg-surface px-2 py-0.5 font-sans text-[length:var(--text-micro)] text-ink-muted">
                            <span aria-hidden style={{ lineHeight: 0 }}><ConnectorIcon id={s.source} size={12} /></span>
                            {s.source === "notion" ? "Notion" : s.source === "zendesk" ? "Zendesk" : "GitHub"}
                          </span>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

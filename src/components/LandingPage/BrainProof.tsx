"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import ClientOnly from "@/components/ui/ClientOnly";
import { ChatBoard } from "@/templates/ChatBoard";
import { MessageBubble } from "@/components/MessageBubble";
import { StreamingIndicator } from "@/components/StreamingIndicator";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import type { PinboardPin } from "@/components/Pinboard";
import type { SidebarProject, SidebarRecentItem } from "@/components/Sidebar";

/** Brain proof (home.md §5, Figma #15): the ONE product window on the page.
 *  Renders the REAL Souvenir ChatBoard (vendored from may-day / Kaya DS) in a
 *  STATIC poster state — same vendoring + ClientOnly + scale-to-fit + the
 *  `[data-hero-window]` chrome-strip CSS as HeroProductWindow, but display-only
 *  (no scripted loop). It proves "every model, every memory, on tap": one ask,
 *  a memory-grounded reply from a real MessageBubble, a "Pulled from" row of
 *  real ConnectorIcon atoms, and the Souvenir model selector in the top bar. */

// The ChatBoard is authored at a fixed 1440×900 UI size and scaled to the
// container width, identical to the hero — so the real KDS layout never reflows.
const BASE_W = 1440;
const BASE_H = 900;

const ASK = "What did we land on for Q3 pricing, and where did those numbers come from?";
// Memory-grounded reply: the answer cites where in the workspace it came from.
const REPLY =
  "We locked the Pro tier at $24/seat. Revenue is up 18% QoQ with CAC down 12%, so the margin holds. I pulled the figures from Stripe, cross-checked the tier spec in Notion, and confirmed the rollout flag shipped in the GitHub release notes.";
const MODEL_LABEL = "Claude Sonnet 4.6";
const MODEL_LLM_ID = "Claude";

/** Sources the Brain pulled from — valid ConnectorIcon ids only (others render blank). */
const SOURCES: { id: "stripe" | "notion" | "github"; label: string }[] = [
  { id: "stripe", label: "Stripe" },
  { id: "notion", label: "Notion" },
  { id: "github", label: "GitHub" },
];

// Sidebar content — a real operator's workspace, not lorem (overrides the
// ChatBoard template's placeholder projects/recents).
const SIDEBAR_PROJECTS: SidebarProject[] = [
  {
    id: "proj-pricing",
    label: "Pricing",
    chatItems: [
      { id: "proj-pricing-1", label: "Q3 pricing decision" },
      { id: "proj-pricing-2", label: "Tier comparison" },
    ],
  },
  {
    id: "proj-board",
    label: "Board prep",
    chatItems: [
      { id: "proj-board-1", label: "Q3 board summary" },
      { id: "proj-board-2", label: "Metrics one-pager" },
    ],
  },
  {
    id: "proj-growth",
    label: "Growth",
    chatItems: [
      { id: "proj-growth-1", label: "CAC by channel" },
      { id: "proj-growth-2", label: "Activation funnel" },
    ],
  },
];
const SIDEBAR_RECENTS: SidebarRecentItem[] = [
  { id: "rec-1", label: "Q3 pricing decision" },
  { id: "rec-2", label: "Board summary" },
  { id: "rec-3", label: "Ad spend recap" },
  { id: "rec-4", label: "Hiring plan" },
  { id: "rec-5", label: "PDP refresh" },
];

// Pins already kept on the board — the memory this answer draws on.
const PINS: PinboardPin[] = [
  {
    id: "pin-q3-pricing",
    category: "Planning",
    pinTitle: "Q3 pricing · Pro tier locked",
    description:
      "Pro tier set at $24/seat. Revenue +18% QoQ, CAC down 12% — margin holds. Cross-checked against the tier spec in Notion.",
    labels: [
      { color: "Neutral", text: "Pricing" },
      { color: "Neutral", text: "Q3" },
    ],
    chatName: "Q3 pricing decision",
  },
  {
    id: "pin-board-summary",
    category: "Tasks",
    pinTitle: "Board summary · one page",
    description:
      "Drafted from Stripe figures and the GitHub release notes, saved so the next person doesn't re-read 80 messages.",
    labels: [
      { color: "Neutral", text: "Board" },
      { color: "Neutral", text: "Product" },
    ],
    chatName: "Q3 board summary",
  },
];

/** The static Brain thread that fills the ChatBoard's chat-thread slot. */
function BrainThread() {
  return (
    <div
      className="kaya-scrollbar flex h-full w-full flex-col justify-start gap-6 text-left"
      // Top padding clears the absolute top bar (model selector + icons)
      // so the user's ask never tucks behind it.
      style={{ padding: "64px 28px 28px" }}
    >
      <div className="flex justify-end">
        <div style={{ maxWidth: "70%" }}>
          <MessageBubble role="user" content={ASK} />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3 text-left" style={{ maxWidth: "90%" }}>
        {/* Souvenir picked a model and landed on Claude — shown in the
            settled `complete` phase (no spin), so the poster is static and
            reduced-motion safe by construction. */}
        <StreamingIndicator phase="complete" label={MODEL_LABEL} llmId={MODEL_LLM_ID} />

        <MessageBubble role="assistant" content={REPLY} timestamp="just now" />

        {/* Sources the Brain drew from — real connector atoms. */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="font-sans uppercase tracking-[0.1em] text-ink-subtle"
            style={{ fontSize: "var(--text-micro)" }}
          >
            Pulled from
          </span>
          {SOURCES.map((s) => (
            <span
              key={s.id}
              className="inline-flex items-center gap-1.5 rounded-[var(--r-pill)] border border-line bg-surface px-2.5 py-1 font-sans font-medium text-ink-muted"
              style={{ fontSize: "var(--text-micro)" }}
            >
              <span aria-hidden className="flex shrink-0 items-center" style={{ lineHeight: 0 }}>
                <ConnectorIcon id={s.id} size={14} />
              </span>
              {s.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrainProof() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(BASE_W ? 0.8 : 1);

  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / BASE_W));
    ro.observe(el);
    setScale(el.clientWidth / BASE_W);
    return () => ro.disconnect();
  }, []);

  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container wide>
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
              One place to think. <em className="italic text-ink-muted">Every model, every memory, on tap.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12">
          <ClientOnly minHeight={460}>
            <div className="relative mx-auto w-full max-w-[72rem]">
              {/* Souvenir gold mark — the assistant's "avatar" anchored to the
                  window, marking this surface as the Brain. */}
              <div
                aria-hidden
                className="absolute -top-5 left-5 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <Image
                  src="/visuals/souvenir-gold.webp"
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain"
                />
              </div>

              <div
                ref={frameRef}
                data-hero-window
                className="relative overflow-hidden rounded-[var(--radius-window)] border border-line bg-surface"
                style={{ aspectRatio: `${BASE_W} / ${BASE_H}`, boxShadow: "var(--shadow-float)" }}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-10 rounded-[var(--radius-window)]"
                  style={{ boxShadow: "var(--shadow-inner)" }}
                />
                <div
                  aria-hidden
                  style={{
                    width: BASE_W,
                    height: BASE_H,
                    transform: `scale(${scale})`,
                    transformOrigin: "top left",
                    pointerEvents: "none",
                  }}
                >
                  <ChatBoard
                    topBarLabel="Souvenir · Advanced"
                    sidebarProps={{ projects: SIDEBAR_PROJECTS, recents: SIDEBAR_RECENTS }}
                    pinboardProps={{ pins: PINS }}
                    chatInputProps={{ value: "", onChange: () => {} }}
                  >
                    <BrainThread />
                  </ChatBoard>
                </div>
              </div>
            </div>
          </ClientOnly>
        </div>
      </Container>
    </section>
  );
}

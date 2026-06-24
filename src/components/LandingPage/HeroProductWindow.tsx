"use client";

import { useEffect, useRef, useState } from "react";
import { ChatBoard } from "@/templates/ChatBoard";
import { MessageBubble } from "@/components/MessageBubble";
import { IconButton } from "@/components/IconButton";
import { StreamingIndicator, type StreamingPhase } from "@/components/StreamingIndicator";
import { PinIcon, CopyOneIcon, RedoIcon } from "@strange-huge/icons";
import type { PinboardPin } from "@/components/Pinboard";
import type { SidebarProject, SidebarRecentItem } from "@/components/Sidebar";

/** Linear-style hero product window — the LIVE Souvenir ChatBoard (vendored from
 *  may-day / Kaya DS), product-led like Linear, running the page's ONE signature
 *  motion moment: a scripted, display-only loop.
 *
 *  APPROACH A (progressive enhancement):
 *   - SSR / first paint / no-JS / reduced-motion → static end-frame POSTER
 *     (public/hero/chatboard.webp; .png kept as capture source) = LCP element
 *     + reduced-motion fallback. No hydration mismatch.
 *   - After mount + motion-allowed → the live ChatBoard mounts client-only and
 *     the loop plays. The ask is ALREADY SENT (we don't show composing) — the
 *     beat the hero sells is the operator working: Souvenir thinks, CHOOSES a
 *     model (lands on Claude), the reply streams in → a Pin·Copy·Regenerate row
 *     appears under it → the ghost cursor hovers + clicks Pin → the summary
 *     lands in the Pinboard (the board's own soft enter motion) → hold → soft
 *     reset. The reset fades ONLY the assistant turn (never the whole window),
 *     so the loop is seamless — no white flash. Display-only, transform/opacity. */

const BASE_W = 1440;
const BASE_H = 900;

const ASK = "Summarize this month's user interviews and draft next sprint's priorities.";
// The output is the INSIGHT itself — the assistant doesn't pin anything or
// mention pinning. The user pins this message afterward (the scripted cursor),
// which is what lands it on the board.
const REPLY =
  "Three themes across 12 interviews — onboarding friction, missing integrations, and pricing clarity. I pulled the notes from Notion, cross-referenced support tickets, and ranked the top 5 priorities for next sprint.";
const REPLY_WORDS = REPLY.split(" ");
const MODEL_LABEL = "Claude Sonnet 4.6";
const MODEL_LLM_ID = "Claude"; // @strange-huge/icons/llm color logo id

// The deliverable this run produces — lands in the Pinboard as the payoff.
const PIN_SUMMARY: PinboardPin = {
  id: "pin-sprint-priorities",
  category: "Tasks",
  pinTitle: "Sprint priorities · top 5",
  description:
    "Three themes across 12 user interviews, cross-referenced with support tickets. Top 5 priorities ranked for next sprint.",
  labels: [
    { color: "Neutral", text: "Sprint" },
    { color: "Neutral", text: "Product" },
  ],
};
// A supporting artifact already on the board — the synthesis the priorities draw on.
const PIN_FIGURES: PinboardPin = {
  id: "pin-interview-themes",
  category: "Research",
  pinTitle: "Interview themes · this month",
  description:
    "Synthesized from 12 user interviews in Notion, cross-referenced with support tickets. Three recurring themes.",
  labels: [
    { color: "Neutral", text: "Research" },
    { color: "Neutral", text: "Notion" },
  ],
};

// Sidebar content — landing-optimised so the whole workspace reads as a real
// operator's, reinforcing what Souvenir does (cross-app knowledge work), not a
// placeholder demo. (Overrides the ChatBoard template's lorem placeholders.)
const SIDEBAR_PROJECTS: SidebarProject[] = [
  {
    id: "proj-discovery",
    label: "Product Discovery",
    chatItems: [
      { id: "proj-discovery-1", label: "Interview synthesis" },
      { id: "proj-discovery-2", label: "Jobs-to-be-done map" },
    ],
  },
  {
    id: "proj-roadmap",
    label: "Roadmap",
    chatItems: [
      { id: "proj-roadmap-1", label: "Q4 themes" },
      { id: "proj-roadmap-2", label: "Now / Next / Later" },
    ],
  },
  {
    id: "proj-research",
    label: "User Research",
    chatItems: [
      { id: "proj-research-1", label: "Interview script" },
      { id: "proj-research-2", label: "Recruiting list" },
    ],
  },
];
const SIDEBAR_RECENTS: SidebarRecentItem[] = [
  { id: "rec-1", label: "Sprint priorities" },
  { id: "rec-2", label: "Interview synthesis" },
  { id: "rec-3", label: "Churn analysis" },
  { id: "rec-4", label: "Feature specs — v2" },
  { id: "rec-5", label: "Persona update" },
];

// ── Ghost-cursor waypoints, in the 1440×900 UI coordinate space (measured) ──
const REST = { x: 690, y: 540 };
const MESSAGE = { x: 560, y: 245 }; // over the assistant reply — "hovering" it reveals the action row
const PIN_BTN = { x: 370, y: 296 }; // the Pin icon in the action row (tip lands on its center, 375/299)

function HeroChatThread({
  replyText,
  generatingPhase,
  actionsVisible,
  pinHovered,
  turnVisible,
}: {
  replyText: string;
  generatingPhase: StreamingPhase;
  actionsVisible: boolean;
  pinHovered: boolean;
  turnVisible: boolean;
}) {
  const showModel = generatingPhase === "streaming" || generatingPhase === "complete";
  return (
    <div
      className="kaya-scrollbar flex h-full w-full flex-col justify-start gap-6 text-left"
      // Top padding clears the absolute top bar (model selector + icons, ~48px)
      // so the sent message never tucks behind it.
      style={{ padding: "64px 28px 28px" }}
    >
      <div className="flex justify-end">
        <div style={{ maxWidth: "70%" }}>
          <MessageBubble role="user" content={ASK} />
        </div>
      </div>

      {/* Assistant turn. Opacity is gated by `turnVisible` so the loop can reset
          by fading ONLY this block out and back in — the rest of the window
          (sidebar, composer, frame) never blanks, so there's no white flash. */}
      <div
        className="flex w-full flex-col items-start gap-3 text-left"
        style={{
          maxWidth: "90%",
          opacity: turnVisible ? 1 : 0,
          transition: "opacity 380ms var(--ease-in-out)",
        }}
      >
        {/* The generating indicator: Souvenir thinks → chooses a model →
            lands on Claude (its logo + name) while the reply streams. */}
        <StreamingIndicator
          phase={generatingPhase}
          label={generatingPhase === "choosing" ? "Choosing a model…" : MODEL_LABEL}
          llmId={showModel ? MODEL_LLM_ID : undefined}
        />

        {replyText && <MessageBubble role="assistant" content={replyText} />}

        {/* ── Action row — Pin · Copy · Regenerate ──
            The pin comes FROM the message: this row fades in once the reply has
            finished streaming, the ghost cursor hovers + clicks Pin, and the
            summary lands in the Pinboard. */}
        <div
          aria-hidden
          style={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginTop: 2,
            opacity: actionsVisible ? 1 : 0,
            transform: actionsVisible ? "translateY(0)" : "translateY(-2px)",
            transition: "opacity 200ms var(--ease-out), transform 200ms var(--ease-out)",
            pointerEvents: "none",
          }}
        >
          {/* Pin — wrapped so we can paint the icon's hover state when the
              scripted cursor lands on it (display-only, so real :hover can't). */}
          <span style={{ position: "relative", display: "inline-flex" }}>
            <span
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 6,
                backgroundColor: pinHovered ? "var(--neutral-50)" : "transparent",
                boxShadow: pinHovered ? "0 0 0 1px var(--icon-button-subtle-border-hover)" : "none",
                transition: "background-color 180ms var(--ease-out), box-shadow 180ms var(--ease-out)",
              }}
            />
            <IconButton variant="ghost" size="xs" aria-label="Pin message" icon={<PinIcon size={16} />} />
          </span>
          <IconButton variant="ghost" size="xs" aria-label="Copy message" icon={<CopyOneIcon size={16} />} />
          <IconButton variant="ghost" size="xs" aria-label="Regenerate response" icon={<RedoIcon size={16} />} />
        </div>
      </div>
    </div>
  );
}

function GhostCursor({ pos, down }: { pos: { x: number; y: number }; down: boolean }) {
  return (
    <svg
      aria-hidden
      width={26}
      height={26}
      viewBox="0 0 24 24"
      className="absolute left-0 top-0 z-20"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px) scale(${down ? 0.85 : 1})`,
        transition: "transform 480ms var(--ease-in-out)",
        filter: "drop-shadow(0 2px 4px rgba(82,75,71,.35))",
      }}
    >
      <path d="M5 3l14 7-6 1.5L9.5 18 5 3z" fill="#26211E" stroke="#fff" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

export default function HeroProductWindow() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.8);
  const [live, setLive] = useState(false);

  // loop state — the ask is always shown (already sent); we animate the reply.
  const [streamWords, setStreamWords] = useState(REPLY_WORDS.length);
  const [generatingPhase, setGeneratingPhase] = useState<StreamingPhase>("complete");
  const [actionsVisible, setActionsVisible] = useState(false);
  const [pinHovered, setPinHovered] = useState(false);
  const [artifactIn, setArtifactIn] = useState(true);
  const [turnVisible, setTurnVisible] = useState(true);
  const [cursor, setCursor] = useState(REST);
  const [cursorDown, setCursorDown] = useState(false);

  useEffect(() => {
    const el = frameRef.current;
    let ro: ResizeObserver | undefined;
    if (el) {
      ro = new ResizeObserver(() => setScale(el.clientWidth / BASE_W));
      ro.observe(el);
    }
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (!reduce) setLive(true);
    return () => ro?.disconnect();
  }, []);

  // the scripted loop
  useEffect(() => {
    if (!live) return;
    let cancelled = false;
    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function run() {
      while (!cancelled) {
        // HOLD on the completed end-frame
        await sleep(2800);
        if (cancelled) return;
        // SEAMLESS RESET — fade ONLY the assistant turn out, remove the pin.
        setTurnVisible(false);
        setActionsVisible(false);
        setPinHovered(false);
        setArtifactIn(false);
        setCursor(REST);
        await sleep(400);
        if (cancelled) return;
        // swap content while invisible, then fade the turn back in as "thinking"
        setStreamWords(0);
        setGeneratingPhase("thinking");
        setTurnVisible(true);
        await sleep(1150);
        if (cancelled) return;
        // CHOOSING — Souvenir selects a model
        setGeneratingPhase("choosing");
        await sleep(950);
        if (cancelled) return;
        // STREAMING — landed on Claude; reply streams in
        setGeneratingPhase("streaming");
        await sleep(280);
        for (let w = 1; w <= REPLY_WORDS.length && !cancelled; w++) {
          setStreamWords(w);
          await sleep(72);
        }
        if (cancelled) return;
        setGeneratingPhase("complete");
        // HOVER the message → action row fades in
        await sleep(340);
        setCursor(MESSAGE);
        await sleep(520);
        setActionsVisible(true);
        await sleep(360);
        // cursor glides onto the Pin icon → hover state → click
        setCursor(PIN_BTN);
        await sleep(500);
        setPinHovered(true);
        await sleep(340);
        setCursorDown(true);
        await sleep(150);
        setCursorDown(false);
        if (cancelled) return;
        // PIN lands — the Pinboard's own enter motion animates it in softly
        setActionsVisible(false);
        setPinHovered(false);
        setArtifactIn(true);
        await sleep(320);
        setCursor(REST);
        // → back to HOLD
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, [live]);

  const replyText = REPLY_WORDS.slice(0, streamWords).join(" ");
  const livePins = artifactIn ? [PIN_SUMMARY, PIN_FIGURES] : [PIN_FIGURES];

  return (
    <div className="relative mx-auto w-full max-w-[72rem]">
      <div
        ref={frameRef}
        data-hero-window
        className="relative overflow-hidden rounded-[var(--radius-window)] border border-line bg-surface"
        style={{
          aspectRatio: `${BASE_W} / ${BASE_H}`,
          boxShadow: "var(--shadow-float)",
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 rounded-[var(--radius-window)]"
          style={{ boxShadow: "var(--shadow-inner)" }}
        />

        {live ? (
          <div
            aria-hidden
            style={{
              width: BASE_W,
              height: BASE_H,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              pointerEvents: "none",
              // The product UI must NOT inherit the hero's `text-center` — that
              // leaked into the Pinboard (pin titles read centered). Reset to the
              // product's natural left baseline for the whole window.
              textAlign: "left",
            }}
          >
            <ChatBoard
              topBarLabel="Souvenir AI · Muse"
              sidebarProps={{
                projects: SIDEBAR_PROJECTS,
                recents: SIDEBAR_RECENTS,
                userName: "Power User",
                // Gimmicky role tag, not a real email — the .edu address read as
                // placeholder. Overrides the ChatBoard template default.
                userEmail: "Certified power user",
                avatarSrc: "/hero/avatar.svg",
              }}
              pinboardProps={{ pins: livePins }}
              chatInputProps={{ value: "", onChange: () => {} }}
            >
              <HeroChatThread
                replyText={replyText}
                generatingPhase={generatingPhase}
                actionsVisible={actionsVisible}
                pinHovered={pinHovered}
                turnVisible={turnVisible}
              />
            </ChatBoard>
            <GhostCursor pos={cursor} down={cursorDown} />
          </div>
        ) : (
          <img
            src="/hero/chatboard.webp"
            alt="The Souvenir workspace — chat, projects, and a shared pinboard in one view"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}
      </div>
    </div>
  );
}

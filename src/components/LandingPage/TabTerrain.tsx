"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { LlmIcon } from "@strange-huge/icons/llm";

/** Breaking (home §2, Figma #9 "Chaos") — the scattered-context STAIRCASE,
 *  stitched by a single thread. Full-width rows step up from the bottom-left and
 *  run off the right edge (the pile is endless); each names a real, disconnected
 *  piece of work and carries its app logo. A single mauve thread sags through the
 *  notches between every step — the literal "you're the only thread between them."
 *  A cursor sits at the top — you, holding it together.
 *
 *  Motion: a one-time stitch on scroll-in — rows pull into place from the left as
 *  the thread draws through them (Framer, ease-out-expo, no bounce). Reduced-motion
 *  / no-JS = the finished static frame. The hero owns the page's one signature. */

type Kind = "connector" | "llm";
type Card = { kind: Kind; icon: string; app: string; desc: string };

const c = (kind: Kind, icon: string, app: string, desc: string): Card => ({ kind, icon, app, desc });

// bottom (0) → top; a scattered slice of a workday across disconnected tools
const CARDS: Card[] = [
  c("connector", "gmail", "Gmail", "Investor update"),
  c("connector", "github", "GitHub", "CI build logs"),
  c("connector", "notion", "Notion", "Meeting notes"),
  c("connector", "slack", "Slack", "Design standup"),
  c("connector", "hubspot", "HubSpot", "CRM pipeline"),
  c("connector", "stripe", "Stripe", "Payment dashboard"),
  c("connector", "github", "GitHub", "Pull request review"),
  c("connector", "linear", "Linear", "Product roadmap"),
  c("connector", "figma", "Figma", "Prototype canvas"),
  c("llm", "Claude", "Claude", "Code generation session"),
  c("llm", "OpenAI", "ChatGPT", "Prompt engineering"),
  c("llm", "Gemini", "Gemini", "Research summary"),
  c("connector", "gmail", "Gmail", "Client email thread"),
  c("connector", "notion", "Notion", "Workspace notes"),
  c("connector", "slack", "Slack", "Team project discussion"),
  c("connector", "stripe", "Stripe", "Invoice run"),
  c("connector", "github", "GitHub", "Release notes"),
  c("connector", "figma", "Figma", "Design review"),
  c("connector", "linear", "Linear", "Sprint planning"),
];

const STEP_X = 3.5;  // % right per step (wide → flatter diagonal, climbs to the top-right)
const STEP_Y = 5.3;  // % up per step — ≈ row height, so rows stack near-flush (clean layers)
const BASE_Y = -2;   // bottom row bleeds off the bottom edge (no gap; reads as endless)

function Logo({ c }: { c: Card }) {
  return (
    <span className="flex shrink-0 items-center justify-center" style={{ lineHeight: 0 }}>
      {c.kind === "llm" ? <LlmIcon id={c.icon} variant="color" size={16} /> : <ConnectorIcon id={c.icon} size={16} />}
    </span>
  );
}

function CardRow({ c }: { c: Card }) {
  return (
    <span
      className="flex items-center gap-2 whitespace-nowrap rounded-[var(--r-sm)] border px-3.5 py-2 font-sans text-[length:var(--text-small)]"
      style={{ backgroundColor: "var(--surface)", borderColor: "var(--line)", boxShadow: "var(--shadow-md)" }}
    >
      <Logo c={c} />
      <span className="font-semibold text-ink">{c.app}:</span>
      <span className="text-ink-secondary">{c.desc}</span>
    </span>
  );
}

export default function TabTerrain() {
  const N = CARDS.length;
  const reduce = useReducedMotion();

  // continuous, subtle horizontal drift: each row fades in, then drifts left↔right in
  // a slow loop. A per-row phase (DRIFT_LAG) makes the drift travel up the stack as a
  // gentle current — alive, not a grab-you signature. Runs only while in viewport
  // (whileInView once:false → pauses off-screen). Reduced-motion = static, no drift.
  const AMP = 15; // px of horizontal drift — "noticeable current" (subtle=9, active≈24)
  const DRIFT_LAG = 0.18; // per-row phase → a clearer traveling wave up the stack
  const rowMotion = (i: number) =>
    reduce
      ? { initial: false as const, animate: { opacity: 1, x: 0 } }
      : {
          initial: { opacity: 0, x: 0 },
          whileInView: { opacity: 1, x: [0, AMP, 0, -AMP, 0] },
          viewport: { once: false, amount: 0.15 },
          transition: {
            opacity: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.04 },
            x: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: i * DRIFT_LAG },
          },
        };

  return (
    <>
      {/* desktop / tablet */}
      <div className="absolute inset-0 hidden md:block" aria-hidden>
        {CARDS.map((card, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: `${i * STEP_X}%`, right: "-3%", bottom: `${BASE_Y + i * STEP_Y}%`, zIndex: i + 1 }}
            {...rowMotion(i)}
          >
            <CardRow c={card} />
          </motion.div>
        ))}

        {/* the cursor at the top step — arrives after the wave crests */}
        <motion.svg
          aria-hidden
          width="26" height="26" viewBox="0 0 24 24"
          className="absolute"
          style={{ left: `${(N - 1) * STEP_X + 14}%`, bottom: `${BASE_Y + (N - 1) * STEP_Y - 4}%`, zIndex: 60 }}
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? { opacity: 1 } : undefined}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5, delay: N * 0.04 }}
        >
          <path d="M5 3l14 7-6 1.5L9.5 18 5 3z" fill="var(--ink)" stroke="var(--surface)" strokeWidth="1.2" strokeLinejoin="round" />
        </motion.svg>
      </div>

      {/* mobile — full-width rows stepping up (a compact slice of the pile) */}
      <div className="flex flex-col-reverse items-stretch gap-1 px-4 py-6 md:hidden" aria-hidden>
        {CARDS.slice(-7).map((card, i) => (
          <div key={i} style={{ marginRight: `${i * 7}%` }}>
            <CardRow c={card} />
          </div>
        ))}
      </div>
    </>
  );
}

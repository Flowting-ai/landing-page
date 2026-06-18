"use client";

import Image from "next/image";
import { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import Visual from "@/components/sections/Visual";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { LlmIcon } from "@strange-huge/icons/llm";
import { UserIcon } from "@strange-huge/icons";

/** Relief (home §3, Figma #10 / node 4457-6197): the calm after the chaos —
 *  your apps route through ONE Brain (gold mark + every frontier model), which
 *  hands work to a team of agents. Circuit-trace routing: clean orthogonal wires
 *  with rounded corners, tan from connectors→Brain (top), mauve from Brain→agents
 *  (bottom). The structural inverse of Breaking's scatter. Valid ConnectorIcon ids
 *  only; LlmIcon for the model cluster; the gold Souvenir mark as the hub. */

// ── coordinate space (matches the Visual frame's aspect so SVG + HTML align) ──
const VW = 880;
const VH = 700;

type Node = { id: string; x: number; y: number };

// connectors across the top (our valid ConnectorIcon ids), gently staggered
const CONNECTORS: Node[] = [
  { id: "slack", x: 96, y: 86 },
  { id: "gmail", x: 232, y: 66 },
  { id: "notion", x: 368, y: 90 },
  { id: "hubspot", x: 512, y: 66 },
  { id: "stripe", x: 656, y: 90 },
  { id: "linear", x: 792, y: 62 },
];
const TILE = 56; // connector squircle size (px in VW space)

// the Brain hub (gold mark) + the model-cluster card to its right
const BRAIN = { x: 392, y: 372 };
const BRAIN_R = 80; // box; the visible gold sphere fills ~the inner 60%, so aim ports near center
const PORT = 6;     // wires plunge to the Brain center; the gold mark (zIndex 2) covers the ends → "plugged in"
const CLUSTER = { x: 588, y: 372 }; // model card, docked right of the Brain at the SAME y → clean horizontal trace
const MODELS = ["Claude", "Gemini", "Mistral", "OpenAI"];

// agents at the bottom, staggered (label width varies → hand-placed centers)
const AGENTS: { id: string; label: string; x: number; y: number }[] = [
  { id: "ad", label: "Ad Copywriter", x: 236, y: 588 },
  { id: "quote", label: "Customer Quote Drafter", x: 430, y: 648 },
  { id: "email", label: "Email & SMS Lifecycle", x: 636, y: 548 },
];

// orthogonal route from (x1,y1) → (x2,y2) via a horizontal bus at busY, rounded corners
function route(x1: number, y1: number, x2: number, y2: number, busY: number, r = 14) {
  if (Math.abs(x2 - x1) < 1.5) return `M ${x1} ${y1} L ${x2} ${y2}`; // straight drop
  const dir = x2 > x1 ? 1 : -1;
  return [
    `M ${x1} ${y1}`,
    `L ${x1} ${busY - r}`,
    `Q ${x1} ${busY} ${x1 + dir * r} ${busY}`,
    `L ${x2 - dir * r} ${busY}`,
    `Q ${x2} ${busY} ${x2} ${busY + r}`,
    `L ${x2} ${y2}`,
  ].join(" ");
}

// connector wires: each drops, jogs across a nested bus, into the Brain's top port.
// outer connectors turn higher (smaller busY) so the traces nest like a circuit.
const topPort = { x: BRAIN.x, y: BRAIN.y - PORT };
const connectorWires = CONNECTORS.map((c) => {
  const dist = Math.abs(c.x - topPort.x);
  const busY = 200 + (1 - dist / 460) * 108; // nearer turns lower, farther turns higher → nested
  // start at the tile's CENTER (the tile paints on top → wire visibly joins at center)
  return route(c.x, c.y, topPort.x, topPort.y, busY);
});
// agent wires (mauve): Brain bottom port → each agent pill CENTER (pill covers the overlap)
const botPort = { x: BRAIN.x, y: BRAIN.y + PORT };
const agentWires = AGENTS.map((a, i) => {
  const busY = 470 + i * 22;
  return route(botPort.x, botPort.y, a.x, a.y + 22, busY); // overshoot into the pill body → guaranteed clean join under the pill
});
// model-cluster line: a short trace joining the cluster's center to the Brain (the gold
// covers the Brain end). Drawn tan (models feed the Brain), behind the cluster card.
const clusterWire = `M ${CLUSTER.x} ${CLUSTER.y} L ${BRAIN.x} ${BRAIN.y}`;

function ConnectorTile({ id }: { id: string }) {
  return (
    <span
      className="flex items-center justify-center rounded-[14px] border border-line bg-surface"
      style={{ width: TILE, height: TILE, boxShadow: "var(--shadow-sm)" }}
    >
      <ConnectorIcon id={id} size={28} />
    </span>
  );
}

function AgentPill({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-2 font-sans text-[var(--text-small)] text-ink-secondary"
      style={{ boxShadow: "var(--shadow-md)" }}
    >
      <UserIcon size={16} />
      {label}
    </span>
  );
}

// gold Brain + the model-cluster card (2×2 frontier models) docked to its right
// fixed-size wrapper so the box is deterministic (next/image alone rendered an
// unexpected size and threw off the wire alignment); gold fills it via object-contain.
const brain = (
  <span className="relative block" style={{ width: BRAIN_R * 2, height: BRAIN_R * 2 }}>
    <Image src="/visuals/souvenir-gold.webp" alt="Souvenir Brain" fill sizes="160px" className="object-contain drop-shadow-[0_8px_24px_rgba(82,75,71,0.18)]" priority />
  </span>
);
const cluster = (
  <span className="grid grid-cols-2 gap-2 rounded-[16px] border border-line bg-surface p-2.5" style={{ boxShadow: "var(--shadow-md)" }}>
    {MODELS.map((m) => (
      <span key={m} className="flex h-[42px] w-[42px] items-center justify-center rounded-[9px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
        <LlmIcon id={m} variant="color" size={24} />
      </span>
    ))}
  </span>
);

export default function Relief() {
  const reduce = useReducedMotion();
  const view = { once: true, amount: 0.3 } as const;
  const EASE = [0.16, 1, 0.3, 1] as const;
  // a node placed at (x,y) in VS units. The OUTER div does the centering (static, so
  // Framer's animated transform can't clobber translate(-50%,-50%) — that bug shifted
  // wide pills off their wires); the INNER motion.div only scales/fades in place.
  const Placed = ({ x, y, z, delay, children }: { x: number; y: number; z?: number; delay: number; children: React.ReactNode }) => (
    <div className="absolute" style={{ left: `${(x / VW) * 100}%`, top: `${(y / VH) * 100}%`, transform: "translate(-50%, -50%)", zIndex: z }}>
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={reduce ? { opacity: 1, scale: 1 } : undefined}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={view}
        transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );

  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <Badge label="With Souvenir" color="Green" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-[24ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
              One workspace. Coordinated Assistants.{" "}
              <em className="italic text-ink-muted">The Brain remembers everything.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-10">
          <Visual surface="warm" bgImage="/visuals/bg-gold-damask.webp" bgOpacity={0.55}>
            {/* desktop / tablet — the routed circuit */}
            <div className="relative hidden md:block" style={{ aspectRatio: `${VW} / ${VH}` }}>
              <svg viewBox={`0 0 ${VW} ${VH}`} preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
                {connectorWires.map((d, i) => (
                  <motion.path key={`c${i}`} d={d} fill="none" stroke="var(--neutral-300)" strokeWidth={2} strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                    animate={reduce ? { pathLength: 1, opacity: 1 } : undefined}
                    whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                    viewport={view} transition={reduce ? { duration: 0 } : { duration: 1.0, ease: EASE, delay: 0.1 + i * 0.06 }} />
                ))}
                {agentWires.map((d, i) => (
                  <motion.path key={`a${i}`} d={d} fill="none" stroke="var(--accent)" strokeWidth={2} strokeLinecap="round" vectorEffect="non-scaling-stroke"
                    initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                    animate={reduce ? { pathLength: 1, opacity: 1 } : undefined}
                    whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                    viewport={view} transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.7 + i * 0.08 }} />
                ))}
                {/* model-cluster trace — joins the cluster card to the Brain */}
                <motion.path d={clusterWire} fill="none" stroke="var(--neutral-300)" strokeWidth={2} strokeLinecap="round" vectorEffect="non-scaling-stroke"
                  initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                  animate={reduce ? { pathLength: 1, opacity: 1 } : undefined}
                  whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                  viewport={view} transition={reduce ? { duration: 0 } : { duration: 0.6, ease: EASE, delay: 0.6 }} />
                {/* the gold Brain — rendered IN the SVG so it shares the wires' coordinate
                    space (guaranteed alignment); drawn last so it covers the wire ends. */}
                <motion.image
                  href="/visuals/souvenir-gold.webp"
                  x={BRAIN.x - 88} y={BRAIN.y - 88} width={176} height={176}
                  preserveAspectRatio="xMidYMid meet"
                  initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                  animate={reduce ? { opacity: 1 } : undefined}
                  whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                  viewport={view}
                  style={{ transformOrigin: `${BRAIN.x}px ${BRAIN.y}px` }}
                  transition={reduce ? { duration: 0 } : { duration: 0.6, ease: EASE, delay: 0.5 }}
                />
              </svg>

              {/* connector tiles */}
              {CONNECTORS.map((c, i) => (
                <Placed key={c.id} x={c.x} y={c.y} z={1} delay={i * 0.05}><ConnectorTile id={c.id} /></Placed>
              ))}

              {/* (gold Brain is rendered inside the SVG above) */}

              {/* model-cluster card */}
              <Placed x={CLUSTER.x} y={CLUSTER.y} z={3} delay={0.65}>{cluster}</Placed>

              {/* agent pills */}
              {AGENTS.map((a, i) => (
                <Placed key={a.id} x={a.x} y={a.y} z={1} delay={0.9 + i * 0.08}><AgentPill label={a.label} /></Placed>
              ))}
            </div>

            {/* mobile — clean vertical stack (no wires) */}
            <div className="flex flex-col items-center gap-3 md:hidden">
              <div className="flex flex-wrap justify-center gap-2.5">
                {CONNECTORS.map((c) => <ConnectorTile key={c.id} id={c.id} />)}
              </div>
              <span aria-hidden className="h-5 w-px" style={{ backgroundColor: "var(--neutral-300)" }} />
              {brain}
              {cluster}
              <span aria-hidden className="h-5 w-px" style={{ backgroundColor: "var(--accent)" }} />
              <div className="flex flex-col items-center gap-2">
                {AGENTS.map((a) => <AgentPill key={a.id} label={a.label} />)}
              </div>
            </div>
          </Visual>
        </div>
      </Container>
    </section>
  );
}

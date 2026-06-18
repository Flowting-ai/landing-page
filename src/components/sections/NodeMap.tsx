"use client";

import { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export interface MapNode {
  id: string;
  /** position as % of the map box (0–100) */
  x: number;
  y: number;
  node: ReactNode;
}
export interface MapEdge {
  from: string;
  to: string;
}

/**
 * Composed node-map: absolutely-positioned KDS nodes + an inline SVG edge layer
 * (pointer-events:none, behind the nodes) drawn in a fixed 0–100 viewBox so the
 * whole map scales with its container — no runtime measurement. Edges are soft
 * cubic curves; stroke is ink-neutral (`--line-strong`). Below `md` it reflows to
 * a vertical stack (edges dropped). See docs/solutions/design-patterns/concept-visuals.md.
 *
 * `reveal` (opt-in): a one-time, calm convergence on scroll-in — edges draw inward
 * (pathLength) and nodes settle (fade + scale), staggered in array order. Default
 * off → renders fully static (unchanged for existing consumers); reduced-motion is
 * always static.
 */
export default function NodeMap({
  nodes,
  edges = [],
  aspect = "16 / 10",
  reveal = false,
  className = "",
}: {
  nodes: MapNode[];
  edges?: MapEdge[];
  aspect?: string;
  reveal?: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const boxStyle: CSSProperties = { aspectRatio: aspect };

  const view = { once: true, amount: 0.3 } as const;
  const EASE = [0.16, 1, 0.3, 1] as const;

  return (
    <>
      {/* desktop / tablet — the positioned map */}
      <div className={`relative hidden md:block ${className}`} style={boxStyle}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
          {edges.map((e, i) => {
            const a = byId[e.from];
            const b = byId[e.to];
            if (!a || !b) return null;
            const my = (a.y + b.y) / 2;
            // vertical-biased cubic bend (control points share x with endpoints)
            const d = `M ${a.x} ${a.y} C ${a.x} ${my}, ${b.x} ${my}, ${b.x} ${b.y}`;
            if (!reveal) {
              return <path key={i} d={d} fill="none" stroke="var(--line-strong)" strokeWidth={1.25} vectorEffect="non-scaling-stroke" />;
            }
            return (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="var(--line-strong)"
                strokeWidth={1.25}
                vectorEffect="non-scaling-stroke"
                initial={reduce ? false : { pathLength: 0, opacity: 0 }}
                animate={reduce ? { pathLength: 1, opacity: 1 } : undefined}
                whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={view}
                transition={reduce ? { duration: 0 } : { duration: 0.9, ease: EASE, delay: 0.1 + i * 0.04 }}
              />
            );
          })}
        </svg>
        {nodes.map((n, i) => {
          const pos: CSSProperties = { left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%, -50%)" };
          if (!reveal) {
            return <div key={n.id} className="absolute" style={pos}>{n.node}</div>;
          }
          return (
            <motion.div
              key={n.id}
              className="absolute"
              style={pos}
              initial={reduce ? false : { opacity: 0, scale: 0.92 }}
              animate={reduce ? { opacity: 1, scale: 1 } : undefined}
              whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
              viewport={view}
              transition={reduce ? { duration: 0 } : { duration: 0.6, ease: EASE, delay: i * 0.05 }}
            >
              {n.node}
            </motion.div>
          );
        })}
      </div>

      {/* mobile — reflow to a clean vertical stack (no edges) */}
      <div className={`flex flex-col items-center gap-3 md:hidden ${className}`}>
        {nodes.map((n) => (
          <div key={n.id}>{n.node}</div>
        ))}
      </div>
    </>
  );
}

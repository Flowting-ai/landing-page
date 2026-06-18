"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LlmIcon } from "@strange-huge/icons/llm";

/**
 * Pillar 04 visual — "one chatspace, every frontier model." Frontier-model tiles
 * sit on an orbit ring around the GOLD Souvenir hub (brand-consistent with Relief);
 * faint spokes connect each model to the hub — the hub auto-routes to the best one.
 * ONE model is flagged "Auto-routed" (mauve ring + label, not color alone).
 *
 * Lessons applied from Relief: the gold hub + ring + spokes live in ONE SVG
 * (preserveAspectRatio="none" on a square box → 1:1 with the HTML %, so tiles align
 * with their spokes); tiles use a STATIC-centered wrapper so Framer's animated
 * transform can't clobber translate(-50%,-50%). Reduced-motion → full static ring.
 */

type Model = { id: string; label: string; angle: number; routed?: boolean };

// OpenAI · Anthropic · Gemini · Mistral · Grok, evenly ringed (0deg = top, clockwise).
// Anthropic tile uses LlmIcon id "Claude" (the real color brand mark; the "Anthropic"
// variant is a flat monochrome glyph). Label stays "Anthropic".
const MODELS: Model[] = [
  { id: "OpenAI", label: "OpenAI", angle: 0, routed: true },
  { id: "Claude", label: "Anthropic", angle: 72 },
  { id: "Gemini", label: "Gemini", angle: 144 },
  { id: "Mistral", label: "Mistral", angle: 216 },
  { id: "Grok", label: "Grok", angle: 288 },
];

const R = 40; // orbit radius, % of box
const EASE = [0.16, 1, 0.3, 1] as const;
const view = { once: true, amount: 0.4 } as const;

const polar = (deg: number, r: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
};

function Tile({ model, size = 22 }: { model: Model; size?: number }) {
  return (
    <span
      className={"relative flex items-center gap-2 whitespace-nowrap rounded-[var(--r-md)] border bg-surface px-2.5 py-2 font-sans text-[var(--text-small)] text-ink " + (model.routed ? "border-accent" : "border-line")}
      style={{ boxShadow: model.routed ? "var(--shadow-md), 0 0 0 1.5px var(--accent)" : "var(--shadow-sm)" }}
    >
      <span style={{ lineHeight: 0 }}><LlmIcon id={model.id} variant="color" size={size} /></span>
      {model.label}
      {model.routed && (
        <span className="ml-1 rounded-[var(--r-pill)] bg-accent-soft px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.04em] text-accent">Auto</span>
      )}
    </span>
  );
}

export default function ModelOrbit() {
  const reduce = useReducedMotion();
  const pts = MODELS.map((m) => polar(m.angle, R));

  return (
    <div>
      {/* desktop / tablet — model tiles on an orbit ring around the gold hub */}
      <div className="relative mx-auto hidden aspect-square w-full max-w-[26rem] sm:block">
        {/* gold hub — the model tiles arranged around it read as the orbit (no ring:
            the dashed circle was occluded by the tiles and read as broken arcs) */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }}>
          <motion.image href="/visuals/souvenir-gold.webp" x={50 - 14} y={50 - 14} width={28} height={28} preserveAspectRatio="xMidYMid meet"
            initial={reduce ? false : { opacity: 0, scale: 0.85 }}
            animate={reduce ? { opacity: 1 } : undefined}
            whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
            viewport={view} style={{ transformOrigin: "50px 50px" }} transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.4 }} />
        </svg>

        {/* model tiles — static-centered wrapper (outer), animation on the inner */}
        {MODELS.map((m, i) => {
          const p = pts[i];
          return (
            <div key={m.id} className="absolute z-[1]" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}>
              <motion.div
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                animate={reduce ? { opacity: 1, scale: 1 } : undefined}
                whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
                viewport={view} transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: 0.15 + i * 0.07 }}
              >
                <Tile model={m} />
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* mobile — clean grid of the same tiles + a routed note */}
      <div className="sm:hidden">
        <div className="grid grid-cols-2 gap-2">
          {MODELS.map((m) => (
            <div key={m.id} className="min-w-0"><Tile model={m} size={20} /></div>
          ))}
        </div>
        <p className="mt-3 font-sans text-[var(--text-micro)] text-ink-muted">Auto-routed to the best model per prompt.</p>
      </div>
    </div>
  );
}

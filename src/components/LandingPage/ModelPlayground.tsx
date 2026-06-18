"use client";

import { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { LlmIcon } from "@strange-huge/icons/llm";

/**
 * Pillar 04 visual — "one chatspace, every frontier model." An interactive logo
 * physics playground (ported from the Claude-Design handoff): the GOLD Souvenir
 * mark sits at the center; frontier-model LOGO chips orbit it. Drag and fling a
 * chip — they collide, bounce, and the attractor pulls them back to orbit the hub.
 *
 * Marketing adaptation: logos only (no model names/letters); the dev-tuning sliders
 * from the playground are omitted (values baked). Static at rest (no loop until you
 * interact), paused off-screen, reduced-motion renders the static orbit. Physics runs
 * in the stage's MEASURED pixel space (responsive), transforms only — no React
 * re-render per frame. Interaction-gated, so it stays subordinate to the hero. */

const MODELS = ["OpenAI", "Claude", "Gemini", "Mistral", "DeepSeek", "Grok", "Perplexity"];

// baked feel. At rest the attractor holds the logos in orbit; on hover we "let go" —
// gravity spikes + attraction drops to 0 so they fall and bounce playfully, then
// regroup into orbit on mouse-leave.
const GRAVITY_FALL = 0.95; // hover "let go" gravity
const REST = 0.72;         // bounciness

type Body = { x: number; y: number; vx: number; vy: number; hx: number; hy: number };

export default function ModelPlayground() {
  const stage = useRef<HTMLDivElement | null>(null);
  const chipEls = useRef<(HTMLDivElement | null)[]>([]);
  const sim = useRef({
    W: 600, H: 460, cx: 300, cy: 230, Rc: 84, r: 30,
    bodies: [] as Body[], awake: false, visible: true, quiet: 0, raf: 0,
    drag: null as null | { i: number; px: number; py: number; vx: number; vy: number },
    reduced: false,
    mode: "rest" as "rest" | "fall",
  });

  // even ring of home slots around the hub — large enough to fill the stage
  const ring = useCallback(() => {
    const s = sim.current;
    const R = s.Rc + s.r + Math.min(s.W, s.H) * 0.16;
    const start = -Math.PI / 2;
    return MODELS.map((_, i) => {
      const a = start + i * ((2 * Math.PI) / MODELS.length);
      return { x: s.cx + Math.cos(a) * R, y: s.cy + Math.sin(a) * R };
    });
  }, []);

  const paint = useCallback(() => {
    const s = sim.current;
    s.bodies.forEach((b, i) => {
      const el = chipEls.current[i];
      if (el) el.style.transform = `translate3d(${b.x - s.r}px, ${b.y - s.r}px, 0)`;
    });
  }, []);

  const measure = useCallback(() => {
    const el = stage.current;
    if (!el) return;
    const s = sim.current;
    const r = el.getBoundingClientRect();
    s.W = r.width; s.H = r.height; s.cx = r.width / 2; s.cy = r.height / 2;
    const m = Math.min(r.width, r.height);
    s.Rc = m * 0.2;            // hub collision radius
    s.r = Math.max(24, Math.min(34, m * 0.075)); // chip radius
    chipEls.current.forEach((c) => { if (c) { c.style.width = c.style.height = `${s.r * 2}px`; } });
  }, []);

  const step = useCallback(() => {
    const s = sim.current;
    const r = s.r, b = s.bodies;
    const rest = 0.12 + REST * 0.82;
    const fall = s.mode === "fall";
    for (let i = 0; i < b.length; i++) {
      if (s.drag && s.drag.i === i) continue;
      const o = b[i];
      if (fall) {
        // hover: let go — gravity pulls them down to pile + bounce on the floor
        o.vy += GRAVITY_FALL * 0.42;
        o.vx *= 0.99; o.vy *= 0.99;
      } else {
        // rest: spring each body to its OWN home slot → even ring, no gap
        o.vx += (o.hx - o.x) * 0.012;
        o.vy += (o.hy - o.y) * 0.012;
        o.vx *= 0.86; o.vy *= 0.86; // damped so they settle, don't oscillate
      }
      const sp = Math.hypot(o.vx, o.vy);
      if (sp > 38) { o.vx = (o.vx / sp) * 38; o.vy = (o.vy / sp) * 38; }
      o.x += o.vx; o.y += o.vy;
    }
    for (let pass = 0; pass < 2; pass++) {
      for (const o of b) {
        if (o.x < r) { o.x = r; o.vx = Math.abs(o.vx) * rest; }
        else if (o.x > s.W - r) { o.x = s.W - r; o.vx = -Math.abs(o.vx) * rest; }
        if (o.y < r) { o.y = r; o.vy = Math.abs(o.vy) * rest; }
        else if (o.y > s.H - r) { o.y = s.H - r; o.vy = -Math.abs(o.vy) * rest; }
      }
      for (const o of b) { // central hub
        const dx = o.x - s.cx, dy = o.y - s.cy, d = Math.hypot(dx, dy) || 0.001, min = r + s.Rc;
        if (d < min) {
          const nx = dx / d, ny = dy / d;
          o.x = s.cx + nx * min; o.y = s.cy + ny * min;
          const vn = o.vx * nx + o.vy * ny;
          if (vn < 0) { o.vx -= (1 + rest) * vn * nx; o.vy -= (1 + rest) * vn * ny; }
        }
      }
      for (let i = 0; i < b.length; i++) for (let j = i + 1; j < b.length; j++) {
        const a = b[i], c = b[j];
        const dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy) || 0.001, min = r * 2;
        if (d < min) {
          const nx = dx / d, ny = dy / d, ov = (min - d) / 2;
          const aDrag = s.drag?.i === i, cDrag = s.drag?.i === j;
          if (!aDrag) { a.x -= nx * ov; a.y -= ny * ov; }
          if (!cDrag) { c.x += nx * ov; c.y += ny * ov; }
          const vn = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
          if (vn < 0) { const imp = (1 + rest) * vn / 2; if (!aDrag) { a.vx += imp * nx; a.vy += imp * ny; } if (!cDrag) { c.vx -= imp * nx; c.vy -= imp * ny; } }
        }
      }
    }
    // sleep only when slow AND (in fall mode, or settled near home in rest mode) — so a
    // resting body never freezes mid-gap; it always reaches its ring slot first.
    let maxv = 0, maxHome = 0;
    for (const o of b) { maxv = Math.max(maxv, Math.hypot(o.vx, o.vy)); maxHome = Math.max(maxHome, Math.hypot(o.hx - o.x, o.hy - o.y)); }
    const settled = maxv < 0.14 && (s.mode === "fall" || maxHome < 1.2);
    if (!s.drag && settled) { s.quiet++; if (s.quiet > 40) { for (const o of b) { o.vx = o.vy = 0; } sleep(); } } else s.quiet = 0;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sleep = useCallback(() => { const s = sim.current; s.awake = false; if (s.raf) cancelAnimationFrame(s.raf); s.raf = 0; }, []);
  const wake = useCallback(() => {
    const s = sim.current;
    if (s.reduced || !s.visible || s.awake) return;
    s.awake = true; s.quiet = 0;
    const loop = () => { if (!s.awake) return; step(); paint(); s.raf = requestAnimationFrame(loop); };
    s.raf = requestAnimationFrame(loop);
  }, [step, paint]);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const s = sim.current;
    s.reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    measure();
    s.bodies = ring().map((p) => ({ x: p.x, y: p.y, vx: 0, vy: 0, hx: p.x, hy: p.y }));
    paint();
    chipEls.current.forEach((c) => { if (c) c.style.opacity = "1"; });

    const ro = new ResizeObserver(() => { measure(); const pos = ring(); s.bodies.forEach((b, i) => { b.hx = pos[i].x; b.hy = pos[i].y; if (!s.awake) { b.x = pos[i].x; b.y = pos[i].y; } }); if (!s.awake) paint(); });
    ro.observe(el);
    if (s.reduced) return () => ro.disconnect();

    const local = (e: PointerEvent) => { const r = el.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const down = (e: PointerEvent) => {
      const p = local(e); let hit = -1, best = Infinity;
      s.bodies.forEach((b, i) => { const d = Math.hypot(b.x - p.x, b.y - p.y); if (d < s.r * 1.3 && d < best) { best = d; hit = i; } });
      if (hit < 0) return;
      e.preventDefault();
      s.drag = { i: hit, px: p.x, py: p.y, vx: 0, vy: 0 };
      s.bodies[hit].vx = s.bodies[hit].vy = 0;
      const ce = chipEls.current[hit]; if (ce) { ce.style.cursor = "grabbing"; ce.style.zIndex = "5"; }
      wake();
    };
    const move = (e: PointerEvent) => {
      if (!s.drag) return; e.preventDefault();
      const p = local(e), b = s.bodies[s.drag.i];
      s.drag.vx = s.drag.vx * 0.4 + (p.x - s.drag.px) * 0.6;
      s.drag.vy = s.drag.vy * 0.4 + (p.y - s.drag.py) * 0.6;
      b.x = Math.max(s.r, Math.min(s.W - s.r, p.x)); b.y = Math.max(s.r, Math.min(s.H - s.r, p.y));
      s.drag.px = p.x; s.drag.py = p.y;
      if (!s.awake) paint();
    };
    const up = () => {
      if (!s.drag) return;
      const b = s.bodies[s.drag.i]; b.vx = s.drag.vx; b.vy = s.drag.vy;
      const ce = chipEls.current[s.drag.i]; if (ce) { ce.style.cursor = "grab"; ce.style.zIndex = ""; }
      s.drag = null; wake();
    };
    // hover = "let go": gravity spikes, attraction off → the logos fall + bounce.
    // leaving restores the orbit pull so they regroup around the hub.
    const enter = () => { s.mode = "fall"; wake(); };
    const leave = () => { s.mode = "rest"; wake(); };
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    const io = new IntersectionObserver((ents) => { s.visible = ents[0].isIntersecting && ents[0].intersectionRatio > 0.08; if (!s.visible) sleep(); }, { threshold: [0, 0.1, 0.5] });
    io.observe(el);

    return () => {
      ro.disconnect(); io.disconnect(); sleep();
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [measure, ring, paint, wake, sleep]);

  return (
    <div>
      {/* desktop / tablet — the interactive playground */}
      <div
        ref={stage}
        className="relative mx-auto hidden w-full max-w-[30rem] touch-none select-none overflow-hidden rounded-[var(--r-2xl)] sm:block"
        style={{ aspectRatio: "1 / 1", background: "linear-gradient(180deg, var(--surface) 0%, var(--surface-warm) 100%)", boxShadow: "var(--shadow-inner)" }}
      >
        {/* gold hub at center */}
        <span aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: "34%" }}>
          <Image src="/visuals/souvenir-gold.webp" alt="Souvenir" width={160} height={160} className="h-auto w-full object-contain drop-shadow-[0_8px_18px_rgba(120,80,20,0.28)]" priority />
        </span>
        {/* model logo chips */}
        {MODELS.map((id, i) => (
          <div
            key={`${id}-${i}`}
            ref={(el) => { chipEls.current[i] = el; }}
            className="absolute left-0 top-0 flex items-center justify-center rounded-full border border-line"
            style={{ width: 56, height: 56, opacity: 0, cursor: "grab", background: "radial-gradient(120% 120% at 35% 25%, var(--surface) 0%, var(--surface-warm) 100%)", boxShadow: "var(--shadow-md)", willChange: "transform" }}
          >
            <span style={{ lineHeight: 0 }}><LlmIcon id={id} variant="color" size={26} /></span>
          </div>
        ))}
      </div>

      {/* mobile — static grid of the same logos */}
      <div className="grid grid-cols-4 gap-2 sm:hidden">
        {MODELS.map((id, i) => (
          <span key={`${id}-${i}`} className="flex aspect-square items-center justify-center rounded-[var(--r-md)] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
            <LlmIcon id={id} variant="color" size={24} />
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useRef, type CSSProperties } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { NeuralNetworkIcon, ArrowUpRightOneIcon } from "@strange-huge/icons";

/**
 * The Company Brain featured card — the nav's one signature moment.
 * Interactive: perspective tilt, a cursor-tracked specular highlight, an
 * iridescent sheen that follows the pointer, a colored glow that blooms on
 * hover, and a faint film-grain. Every aspect is a CSS-var knob (see `.brain-card`
 * in globals.css); override any via the `tweaks` prop. Reduced-motion safe —
 * the tilt + specular are disabled and a static sheen remains.
 */

export type BrainCardTweaks = Partial<{
  /** max tilt in degrees (also drives the JS rotation math) */
  tiltMax: number;
  radius: string;        // --bc-radius
  sheenOpacity: number;  // --bc-sheen-opacity (hover add)
  specOpacity: number;   // --bc-spec-opacity
  specSize: string;      // --bc-spec-size
  noiseOpacity: number;  // --bc-noise-opacity
  glowOpacity: number;   // --bc-glow-opacity
  lift: string;          // --bc-lift (translateY on hover)
}>;

const KNOB_VAR: Record<keyof BrainCardTweaks, string> = {
  tiltMax: "--bc-tilt-max",
  radius: "--bc-radius",
  sheenOpacity: "--bc-sheen-opacity",
  specOpacity: "--bc-spec-opacity",
  specSize: "--bc-spec-size",
  noiseOpacity: "--bc-noise-opacity",
  glowOpacity: "--bc-glow-opacity",
  lift: "--bc-lift",
};

export default function FeaturedBrainCard({
  href = "/solutions/company-brain",
  tweaks = {},
}: {
  href?: string;
  tweaks?: BrainCardTweaks;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const raf = useRef<number | null>(null);
  const tiltMax = tweaks.tiltMax ?? 9;

  // Build inline CSS-var overrides from the tweaks prop (degrees get a unit).
  const style: CSSProperties = {};
  for (const [k, v] of Object.entries(tweaks)) {
    if (k === "tiltMax") { (style as Record<string, string>)[KNOB_VAR.tiltMax] = `${v}deg`; continue; }
    (style as Record<string, string>)[KNOB_VAR[k as keyof BrainCardTweaks]] =
      typeof v === "number" ? String(v) : (v as string);
  }

  const prefersReduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el || prefersReduced()) return;
    const { clientX, clientY } = e;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width;   // 0..1
      const y = (clientY - r.top) / r.height;   // 0..1
      el.style.setProperty("--mx", `${(x * 100).toFixed(2)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(2)}%`);
      el.style.setProperty("--ry", `${((x - 0.5) * tiltMax * 2).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - y) * tiltMax * 2).toFixed(2)}deg`);
    });
  }
  function onEnter() {
    ref.current?.style.setProperty("--bc-active", "1");
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--bc-active", "0");
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--mx", "50%");
    el.style.setProperty("--my", "50%");
  }

  return (
    <NavigationMenu.Link asChild>
      <a
        ref={ref}
        href={href}
        onPointerMove={onMove}
        onPointerEnter={onEnter}
        onPointerLeave={onLeave}
        className="brain-card group relative flex flex-1 flex-col justify-between overflow-hidden p-4"
        style={{
          ...style,
          // Dark espresso base (mauve-tinted) so the iridescent sheen + white
          // specular + mauve glow actually read — iridescence needs a dark field.
          background:
            "linear-gradient(155deg, color-mix(in oklch, var(--accent) 30%, var(--dark-surface)) 0%, var(--dark-bg) 72%)",
          border: "1px solid color-mix(in oklch, var(--neutral-white) 12%, transparent)",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* effect layers (below content) */}
        <span aria-hidden className="brain-card__layer brain-card__sheen" />
        <span aria-hidden className="brain-card__layer brain-card__noise" />
        <span aria-hidden className="brain-card__layer brain-card__spec" />

        {/* content */}
        <div className="relative z-[1] flex items-center justify-between">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-[9px] border border-line bg-surface text-[color:var(--accent)]"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            <NeuralNetworkIcon size={19} />
          </span>
          <span
            className="rounded-full bg-surface px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]"
            style={{ border: "1px solid var(--line)" }}
          >
            New
          </span>
        </div>
        <div className="relative z-[1] mt-5">
          <p className="flex items-center gap-1 font-sans text-[var(--text-small)] font-semibold tracking-[-0.01em] text-[color:var(--dark-ink)]">
            The Company Brain
            <ArrowUpRightOneIcon size={15} />
          </p>
          <p className="mt-1 font-sans text-[var(--text-micro)] leading-snug text-[color:var(--dark-ink-muted)]">
            Shared memory, context, and automations for your whole team.
          </p>
        </div>
      </a>
    </NavigationMenu.Link>
  );
}

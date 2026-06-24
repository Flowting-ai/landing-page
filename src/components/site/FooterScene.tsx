"use client";

import { useRef } from "react";

/**
 * FooterScene — the warm illustrated footer backdrop (a wheat-field horizon with
 * two small figures), plus two cheap, on-rule interactions:
 *   • Sunlight pool — a soft golden glow that follows the cursor (CSS var driven).
 *   • Gentle parallax — the image drifts a few px opposite the cursor for depth.
 * Both are transform/opacity only and disabled under prefers-reduced-motion
 * (the static image remains, fully legible). The image is decorative (aria-hidden);
 * the footer text lives on top as real HTML.
 */
export default function FooterScene({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);

  const reduced = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function onMove(e: React.PointerEvent<HTMLElement>) {
    const el = ref.current;
    if (!el || reduced()) return;
    const { clientX, clientY } = e;
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width; // 0..1
      const y = (clientY - r.top) / r.height; // 0..1
      el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
      // parallax: small shift opposite the cursor — kept within the ~4% size
      // overflow so the sides never expose a bare edge (no bleed).
      el.style.setProperty("--px", `${((0.5 - x) * 8).toFixed(1)}px`);
      el.style.setProperty("--py", `${((0.5 - y) * 6).toFixed(1)}px`);
      el.style.setProperty("--lit", "1");
    });
  }
  function onLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--lit", "0");
    el.style.setProperty("--px", "0px");
    el.style.setProperty("--py", "0px");
  }

  return (
    <div
      ref={ref}
      className="footer-scene"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {/* scenery image (decorative) */}
      <div className="footer-scene__img" aria-hidden />
      {/* cursor-tracked sunlight pool */}
      <div className="footer-scene__sun" aria-hidden />
      {/* content overlaid */}
      <div className="footer-scene__content">{children}</div>
    </div>
  );
}

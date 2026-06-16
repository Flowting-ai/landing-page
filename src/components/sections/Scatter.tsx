"use client";

import { useRef, ReactNode, CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export interface ScatterItem {
  id: string;
  /** position as % of the box (0–100) */
  x: number;
  y: number;
  rotate?: number;
  z?: number;
  node: ReactNode;
}

/**
 * Z-layered offset cards on a positioned canvas (the #9 chaos bubbles, #13 floating
 * automations). Centering lives on an outer wrapper; rotation + the optional
 * `assemble` motion live on an inner layer, so GSAP never fights the centering
 * transform. `assemble` = the page's signature scatter→settle on scroll-in
 * (transform/opacity only, ~40ms stagger, ease-out, once, reduced-motion safe).
 * Reflows to a vertical stack below md.
 */
export default function Scatter({
  items,
  assemble = false,
  aspect = "16 / 10",
  className = "",
}: {
  items: ScatterItem[];
  assemble?: boolean;
  aspect?: string;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!assemble) return;
    const els = gsap.utils.toArray<HTMLElement>("[data-scatter]");
    if (!els.length) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) { els.forEach((el) => gsap.set(el, { opacity: 1, x: 0, y: 0, scale: 1, rotate: Number(el.dataset.rotate || 0) })); return; }
    els.forEach((el, i) => {
      const rot = Number(el.dataset.rotate || 0);
      const dir = i % 2 ? 1 : -1;
      gsap.set(el, { rotate: rot, opacity: 0, x: dir * (28 + (i % 3) * 16), y: -18 - (i % 4) * 12, scale: 0.9 });
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.to(els, { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.04 });
            io.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    if (scope.current) io.observe(scope.current);
    return () => io.disconnect();
  }, { scope });

  return (
    <>
      <div ref={scope} className={`relative hidden md:block ${className}`} style={{ aspectRatio: aspect }}>
        {items.map((it) => {
          const outer: CSSProperties = { left: `${it.x}%`, top: `${it.y}%`, transform: "translate(-50%, -50%)", zIndex: it.z ?? 0 };
          const inner: CSSProperties = assemble ? {} : { transform: `rotate(${it.rotate ?? 0}deg)` };
          return (
            <div key={it.id} className="absolute" style={outer}>
              <div data-scatter data-rotate={it.rotate ?? 0} style={inner}>{it.node}</div>
            </div>
          );
        })}
      </div>
      {/* mobile — reflow to a stack */}
      <div className={`flex flex-col gap-3 md:hidden ${className}`}>
        {items.map((it) => (
          <div key={it.id}>{it.node}</div>
        ))}
      </div>
    </>
  );
}

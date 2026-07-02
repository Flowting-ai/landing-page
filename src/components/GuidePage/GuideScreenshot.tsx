"use client";

import { useEffect, useState } from "react";

type Hotspot = { x: number; y: number };

/** A guide screenshot with a hover affordance + click-to-zoom lightbox, and — when
 *  the step has one — a click HOTSPOT marker (a pulsing target at the exact point
 *  the user clicks, from Supademo's recorded coordinates) so the static walkthrough
 *  shows "click here" just like the live demo. */
export default function GuideScreenshot({ src, alt, hotspot }: { src: string; alt: string; hotspot?: Hotspot }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const Marker = hotspot ? (
    <span aria-hidden className="guide-hotspot" style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}>
      <span className="guide-hotspot__ring" />
      <span className="guide-hotspot__dot" />
    </span>
  ) : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Enlarge screenshot: ${alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[var(--r-xl)] border border-line bg-surface transition-shadow"
        style={{ boxShadow: "var(--shadow-float)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="block h-auto w-full transition-transform duration-300 group-hover:scale-[1.012]" />
        {Marker}
        {/* magnifier badge on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--ink)] text-[color:var(--dark-ink)] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M21 21l-4-4M11 8v6M8 11h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
          style={{ background: "color-mix(in oklch, var(--ink) 78%, transparent)", backdropFilter: "blur(4px)" }}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--dark-surface)] text-dark-ink transition-colors hover:opacity-90"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
          </button>
          {/* relative wrapper shrinks to the image so the marker lands on the same point */}
          <span className="relative inline-block max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="block max-h-[85vh] max-w-full rounded-[var(--r-lg)] object-contain"
              style={{ boxShadow: "var(--shadow-lg)" }}
            />
            {Marker}
          </span>
        </div>
      )}
    </>
  );
}

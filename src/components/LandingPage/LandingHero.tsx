"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import ChatPinVisual from "@/components/ChatspacePage/ChatPinVisual";
import ClientOnly from "@/components/ui/ClientOnly";

gsap.registerPlugin(useGSAP);

export default function LandingHero() {
  const scope = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) { gsap.set("[data-reveal]", { opacity: 1, y: 0 }); return; }
    gsap.set("[data-reveal]", { opacity: 0, y: 20 });
    gsap.to("[data-reveal]", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.05 });
  }, { scope });

  return (
    <section ref={scope} className="relative overflow-hidden" style={{ paddingBlock: "var(--section-y-lg)" }}>
      {/* Dappled foliage shadow — warm "light through leaves" cast on the cream wall.
          Multiply blend turns the photo's light areas transparent and its shadows
          into soft warm shade; masked to dissolve before the content. Heavy craft,
          hero-only (per the brief). Static + perf-optimized (145KB). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply opacity-[0.45]"
        style={{
          backgroundImage: "url('/textures/foliage-shadow.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "top right",
          filter: "contrast(1.15)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, #000 38%, transparent 80%)",
          maskImage: "linear-gradient(180deg, #000 0%, #000 38%, transparent 80%)",
        }}
      />
      <div className="glow-warm pointer-events-none absolute -z-10 h-[480px] w-[600px] -top-28 left-[58%] -translate-x-1/2 opacity-70" />
      <Container wide className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left rail — editorial */}
          <div className="flex flex-col items-start text-left">
            <span data-reveal className="flex items-center gap-2.5 font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> Multi-agent workforce
            </span>
            <h1 data-reveal className="font-display mt-5 max-w-[15ch] text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] text-ink text-balance">
              All your apps, unified into one AI Brain <em className="font-display italic text-ink-muted">that does the work.</em>
            </h1>
            <p data-reveal className="mt-7 max-w-[52ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
              Souvenir unifies your disconnected tools into one intelligent workspace where a coordinated
              team of AI agents work together to automate and execute real work across all your apps.
            </p>
            <div data-reveal className="mt-9 flex flex-col sm:flex-row items-start gap-3" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
              <Button variant="default" size="md" className="px-7 py-3">Get started for free</Button>
              <Button variant="secondary" size="md" className="px-7 py-3">Book a Demo</Button>
            </div>
          </div>
          {/* Right — hero visual */}
          <div data-reveal className="w-full">
            <ClientOnly minHeight={440}><ChatPinVisual /></ClientOnly>
          </div>
        </div>
      </Container>
    </section>
  );
}

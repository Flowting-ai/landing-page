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
    gsap.to("[data-reveal]", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.05 });
  }, { scope });

  return (
    <section ref={scope} className="relative overflow-hidden pt-16 sm:pt-24 pb-16 sm:pb-20">
      <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
      <div className="glow-warm pointer-events-none absolute -z-10 h-[540px] w-[680px] -top-24 left-1/2 -translate-x-1/2" />
      <Container className="flex flex-col items-center text-center">
        <span data-reveal className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Multi-agent workforce
        </span>
        <h1 data-reveal className="font-display mt-6 max-w-[20ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
          All your apps unified into one AI Brain <em className="font-display italic text-ink-muted">that executes and automates your work.</em>
        </h1>
        <p data-reveal className="mt-6 max-w-[62ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
          Souvenir unifies all your disconnected tools into a single intelligent workspace where a
          coordinated team of AI agents work together to automate and execute real work across all your apps.
        </p>
        <div data-reveal className="mt-8 flex flex-col sm:flex-row items-center gap-3" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
          <Button variant="default" size="md" className="px-7 py-3">Get started for free</Button>
          <Button variant="secondary" size="md" className="px-7 py-3">Book a Demo</Button>
        </div>
      </Container>
      <Container wide className="mt-14 sm:mt-16">
        <div data-reveal className="mx-auto max-w-4xl"><ClientOnly minHeight={440}><ChatPinVisual /></ClientOnly></div>
      </Container>
    </section>
  );
}

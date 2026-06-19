"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import { SIGNUP_URL, DEMO_URL } from "@/lib/links";
import { OrchestrationMap } from "./visuals";

gsap.registerPlugin(useGSAP);

export default function BrainHero() {
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
      <div className="glow-warm pointer-events-none absolute -z-10 h-[520px] w-[640px] -top-24 left-1/2 -translate-x-1/2" />

      <Container className="flex flex-col items-center text-center">
        <span data-reveal className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Solution · Brain &amp; Automation
        </span>
        <h1 data-reveal className="font-display mt-6 max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
          From Intention to Completed. Automate all your manual work.
        </h1>
        <p data-reveal className="mt-6 max-w-[60ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
          Souvenir Brain turns your intentions into reality. It intelligently decomposes tasks,
          creates the plan, orchestrates the right AI agents across your apps, and delivers
          completed work — on demand or on schedule.
        </p>
        <div data-reveal className="mt-8 flex flex-col sm:flex-row items-center gap-3" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
          <a href={SIGNUP_URL} className="inline-flex"><Button variant="default" size="md" className="px-7 py-3">Get started for free</Button></a>
          <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex"><Button variant="secondary" size="md" className="px-7 py-3">Book a Demo</Button></a>
        </div>
      </Container>

      <Container wide className="mt-14 sm:mt-16">
        <div data-reveal className="mx-auto max-w-3xl">
          <OrchestrationMap />
        </div>
      </Container>
    </section>
  );
}

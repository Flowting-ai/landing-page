"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import { trackEvent } from "@/lib/gtag";

gsap.registerPlugin(useGSAP);

export default function CompanyHero() {
  const scope = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) { gsap.set("[data-reveal]", { opacity: 1, y: 0 }); return; }
    gsap.set("[data-reveal]", { opacity: 0, y: 20 });
    gsap.to("[data-reveal]", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.05 });
  }, { scope });

  return (
    <section ref={scope} className="relative overflow-hidden pt-16 sm:pt-24 pb-10 sm:pb-12">
      <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
      <div className="glow-warm pointer-events-none absolute -z-10 h-[520px] w-[640px] -top-24 left-1/2 -translate-x-1/2" />
      <Container className="flex flex-col items-center text-center">
        <span data-reveal className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Souvenir for Teams · agencies, SMBs, enterprises
        </span>
        <h1 data-reveal className="font-display mt-6 max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
          The autonomous <em className="font-display italic text-ink-muted">company brain.</em>
        </h1>
        <p data-reveal className="mt-6 max-w-[52ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
          One operational layer. A multi-agent workforce. Lives in the Slack you already use.
        </p>
        <div data-reveal className="mt-8 flex flex-col sm:flex-row items-center gap-3" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
          <Button variant="default" size="md" className="px-7 py-3" onClick={() => trackEvent("get_started_click", { location: "teams" })}>Get started for free</Button>
          <Button variant="secondary" size="md" className="px-7 py-3" onClick={() => trackEvent("book_demo_click", { location: "teams" })}>Book a Demo</Button>
        </div>
      </Container>
    </section>
  );
}

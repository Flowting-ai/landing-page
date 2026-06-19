"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import { SIGNUP_URL, DEMO_URL } from "@/lib/links";
import TabbedShowcase from "@/components/showcase/TabbedShowcase";
import { trackEvent } from "@/lib/gtag";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const scope = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
      if (reduce) { gsap.set("[data-reveal]", { opacity: 1, y: 0 }); return; }
      gsap.set("[data-reveal]", { opacity: 0, y: 20 });
      gsap.to("[data-reveal]", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.1, delay: 0.05 });
    },
    { scope },
  );

  return (
    <section ref={scope} className="relative overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-28">
      <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
      <div className="glow-warm pointer-events-none absolute -z-10 h-[560px] w-[680px] -top-32 left-1/2 -translate-x-1/2" />

      {/* asymmetric header row (Anthropic-style) */}
      <Container>
        <div className="grid items-end gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span data-reveal className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Now live in Slack
            </span>
            <h1 data-reveal className="font-display mt-6 max-w-[12ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
              Give your company a brain.
            </h1>
          </div>

          <div className="lg:pb-2">
            <p data-reveal className="max-w-[40ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
              An AI workforce that works where your team already does — remembering
              your context and running your workflows across every tool.
            </p>
            <div
              data-reveal
              className="mt-6 flex flex-col sm:flex-row gap-3"
              style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}
            >
              <a href={SIGNUP_URL} className="inline-flex"><Button variant="default" size="md" className="px-7 py-3" onClick={() => trackEvent("get_started_click", { location: "hero" })}>Start free</Button></a>
              <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex"><Button variant="secondary" size="md" className="px-7 py-3" onClick={() => trackEvent("book_demo_click", { location: "hero" })}>Book a demo</Button></a>
            </div>
            <p data-reveal className="mt-4 font-sans text-[var(--text-micro)] text-ink-subtle">
              1,000 credits free · no card required
            </p>
          </div>
        </div>
      </Container>

      {/* tabbed product showcase */}
      <Container wide className="mt-16 sm:mt-20">
        <div data-reveal>
          <TabbedShowcase />
        </div>
      </Container>
    </section>
  );
}

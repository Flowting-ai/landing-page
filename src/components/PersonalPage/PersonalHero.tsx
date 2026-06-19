"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import { trackEvent } from "@/lib/gtag";
import { SIGNUP_URL, DEMO_URL } from "@/lib/links";
import { PersonalHeroVisual } from "./visuals";

gsap.registerPlugin(useGSAP);

export default function PersonalHero() {
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
      <div className="glow-warm pointer-events-none absolute -z-10 h-[460px] w-[620px] -top-20 left-0" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span data-reveal className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Souvenir for Individuals · prosumers, creators, freelancers
            </span>
            <h1 data-reveal className="font-display mt-6 max-w-[15ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
              Your personal AI <em className="font-display italic text-ink-muted">operating system.</em>
            </h1>
            <p data-reveal className="mt-6 max-w-[48ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
              Souvenir connects your disconnected apps, automates tasks across them, and saves your
              AI work forever.
            </p>
            <div data-reveal className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
              <a href={SIGNUP_URL} className="inline-flex"><Button variant="default" size="md" className="px-7 py-3" onClick={() => trackEvent("get_started_click", { location: "individuals" })}>Get started for free</Button></a>
              <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex"><Button variant="secondary" size="md" className="px-7 py-3" onClick={() => trackEvent("book_demo_click", { location: "individuals" })}>Book a Demo</Button></a>
            </div>
          </div>
          <div data-reveal className="min-w-0">
            <PersonalHeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRightOneIcon } from "@strange-huge/icons";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import { DEMO_URL } from "@/lib/links";
import HeroProductWindow from "@/components/LandingPage/HeroProductWindow";

gsap.registerPlugin(useGSAP);

export default function LandingHero() {
  const scope = useRef<HTMLElement | null>(null);
  useGSAP(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) { gsap.set("[data-reveal]", { opacity: 1, y: 0 }); return; }
    gsap.set("[data-reveal]", { opacity: 0, y: 18 });
    gsap.to("[data-reveal]", { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.05 });
  }, { scope });

  return (
    <section ref={scope} className="relative" style={{ paddingTop: "var(--section-y-sm)", paddingBottom: "var(--section-y-lg)" }}>
      {/* Foliage backdrop now lives at page level (site/HeroBackdrop) so it can sit
          behind the nav. The hero itself is clean. */}
      <Container className="relative z-10">
        <div className="mx-auto flex flex-col items-center text-center">
          <h1 data-reveal className="font-display mx-auto max-w-[60rem] text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] text-ink text-balance">
            One workspace where your team and its AI{" "}
            <em className="font-display italic text-ink-secondary">work as one.</em>
          </h1>
          <p data-reveal className="mt-6 max-w-[56ch] font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
            One shared workspace where a team of AI Assistants pulls your apps and data together, then
            runs the work in the background. Managed from Slack.
          </p>
          <div data-reveal className="mt-9" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
            <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex"><Button variant="default" size="md" className="px-7 py-3" rightIcon={<ArrowRightOneIcon size={16} />}>Book a Demo</Button></a>
          </div>
          <div data-reveal className="mt-14 w-full">
            <HeroProductWindow />
          </div>
        </div>
      </Container>
    </section>
  );
}

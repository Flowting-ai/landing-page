"use client";

import { useRef, type CSSProperties } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRightOneIcon } from "@strange-huge/icons";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";

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
    <section ref={scope} className="relative overflow-hidden" style={{ paddingTop: "var(--section-y-sm)", paddingBottom: "var(--section-y-lg)" }}>
      {/* Dappled foliage shadow — warm "light through leaves" cast on the cream.
          Full-bleed behind the centered hero, masked to dissolve before the content. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 mix-blend-multiply opacity-[0.5]"
        style={{
          backgroundImage: "url('/textures/foliage-shadow.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          filter: "contrast(1.15)",
          WebkitMaskImage: "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 78%)",
          maskImage: "radial-gradient(120% 90% at 50% 0%, #000 30%, transparent 78%)",
        }}
      />
      <Container className="relative z-10">
        <div className="mx-auto flex flex-col items-center text-center">
          <h1 data-reveal className="font-display mx-auto max-w-[60rem] text-[length:var(--text-hero)] leading-[var(--text-hero--line-height)] tracking-[var(--text-hero--letter-spacing)] text-ink text-balance">
            A workspace where your team and a coordinated{" "}
            <em className="font-display italic text-ink-muted">workforce of AI Assistants work side by side.</em>
          </h1>
          <p data-reveal className="mt-6 max-w-[58ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
            Most teams are stuck running AI in single-tab mode — one person, one chat, one model, no
            memory. Souvenir gives your team and a coordinated workforce of AI Assistants shared access
            to the same knowledge, the same tools, the same conversations.
          </p>
          <div data-reveal className="mt-9" style={{ ["--font-size-body"]: "16px", ["--line-height-body"]: "24px" } as CSSProperties}>
            <Button variant="default" size="md" className="px-7 py-3" rightIcon={<ArrowRightOneIcon size={16} />}>Book a Demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

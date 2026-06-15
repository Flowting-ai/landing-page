"use client";

import SiteNav from "@/components/site/SiteNav";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroVisual from "@/components/HomePage/Hero/HeroVisual";

const NODES = [
  { label: "Slack", x: 16, y: 24 },
  { label: "Notion", x: 84, y: 20 },
  { label: "GitHub", x: 8, y: 60 },
  { label: "Gmail", x: 92, y: 56 },
  { label: "Linear", x: 24, y: 88 },
  { label: "Drive", x: 76, y: 90 },
];

export default function VariantC() {
  return (
    <>
      <SiteNav />
      <section className="relative overflow-hidden">
        <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
        <div className="glow-warm pointer-events-none absolute left-1/2 -translate-x-1/2 top-20 -z-10 h-[600px] w-[760px]" />

        <Container className="pt-16 sm:pt-20 flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              One brain · every tool
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-display mt-6 max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink">
              Give your company a brain.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-[50ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
              One AI workforce that connects every tool your team uses — and
              remembers everything it learns.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
              <Button variant="primary" size="lg" href="#start">Start free</Button>
              <Button variant="secondary" size="lg" href="#demo">Book a demo</Button>
            </div>
          </Reveal>
        </Container>

        {/* DESKTOP: wired scene */}
        <Container wide className="hidden lg:block">
          <Reveal delay={0.2}>
            <div className="relative mx-auto mt-12 max-w-4xl" style={{ height: 440 }}>
              {/* connectors */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                {NODES.map((n) => (
                  <line
                    key={n.label}
                    x1="50" y1="50" x2={n.x} y2={n.y}
                    stroke="var(--line-strong)"
                    strokeWidth="0.25"
                    strokeDasharray="1.2 1.2"
                  />
                ))}
              </svg>

              {/* tool nodes */}
              {NODES.map((n) => (
                <div
                  key={n.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${n.x}%`, top: `${n.y}%` }}
                >
                  <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3 py-1.5 font-sans text-[var(--text-small)] font-medium text-ink-secondary" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <span className="h-4 w-4 rounded-[5px] bg-surface-warm border border-line-strong" />
                    {n.label}
                  </span>
                </div>
              ))}

              {/* central core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="glow-warm absolute -inset-8 -z-10" />
                  <div
                    className="flex flex-col items-center gap-2 rounded-[var(--r-2xl)] border border-line bg-surface px-9 py-7"
                    style={{ boxShadow: "var(--shadow-lg)" }}
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-ink font-display text-2xl text-white">S</span>
                    <span className="font-sans text-[var(--text-small)] font-semibold text-ink">Souvenir</span>
                    <span className="font-sans text-[var(--text-micro)] text-ink-subtle">company brain</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>

        {/* MOBILE / TABLET: simple product card */}
        <Container className="lg:hidden mt-12 pb-16">
          <Reveal delay={0.2}>
            <div className="mx-auto max-w-md">
              <HeroVisual />
            </div>
          </Reveal>
        </Container>

        <div className="hidden lg:block pb-20" />
      </section>
    </>
  );
}

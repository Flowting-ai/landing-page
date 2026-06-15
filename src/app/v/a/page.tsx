"use client";

import SiteNav from "@/components/site/SiteNav";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroVisual from "@/components/HomePage/Hero/HeroVisual";
import ToolChips from "@/components/variants/ToolChips";

export default function VariantA() {
  return (
    <>
      <SiteNav />
      <section className="relative overflow-hidden">
        {/* texture + glow */}
        <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
        <div className="glow-warm pointer-events-none absolute -z-10 h-[520px] w-[520px] -top-24 right-[-80px]" />

        <Container wide className="py-16 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            {/* left */}
            <div className="max-w-xl">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Now live in Slack
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-display mt-6 text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink">
                  Give your company a brain.
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-6 max-w-[46ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
                  An AI workforce that lives where your team already works — agents
                  that remember your context, run your workflows, and connect every
                  tool you use.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Button variant="primary" size="lg" href="#start">Start free</Button>
                  <Button variant="secondary" size="lg" href="#demo">Book a demo</Button>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-10">
                  <p className="font-sans text-[var(--text-micro)] uppercase tracking-[0.12em] text-ink-subtle mb-3">
                    Connects with
                  </p>
                  <ToolChips />
                </div>
              </Reveal>
            </div>

            {/* right — layered visual */}
            <Reveal delay={0.2} className="relative">
              <div className="relative" style={{ transform: "rotate(1.2deg)" }}>
                <HeroVisual />
              </div>
              {/* floating depth card */}
              <div
                className="absolute -bottom-6 -left-6 hidden sm:block rounded-[var(--r-lg)] border border-line bg-surface px-4 py-3"
                style={{ boxShadow: "var(--shadow-lg)", transform: "rotate(-3deg)" }}
              >
                <p className="font-sans text-[var(--text-micro)] text-ink-muted">Workflow finished</p>
                <p className="font-sans text-[var(--text-small)] font-semibold text-ink">Weekly Signups · 2.4s</p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

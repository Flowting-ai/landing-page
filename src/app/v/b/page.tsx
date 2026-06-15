"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import HeroVisual from "@/components/HomePage/Hero/HeroVisual";
import ToolChips from "@/components/variants/ToolChips";

export default function VariantB() {
  return (
    <main className="relative min-h-dvh bg-dark-bg overflow-hidden">
      {/* glow + grid */}
      <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-60" />
      <div className="glow-signature pointer-events-none absolute left-1/2 -translate-x-1/2 -top-40 h-[640px] w-[900px]" />

      {/* dark top bar */}
      <header className="relative z-10 border-b border-[var(--dark-line)]">
        <Container wide className="flex h-16 items-center justify-between">
          <span className="font-display text-[1.35rem] text-dark-ink tracking-tight">Souvenir</span>
          <nav className="hidden md:flex items-center gap-8">
            {["Product", "Solutions", "Pricing", "Docs"].map((l) => (
              <a key={l} href="#" className="text-[var(--text-small)] text-dark-ink-muted hover:text-dark-ink transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#" className="hidden sm:inline-flex h-11 items-center rounded-[var(--r-pill)] px-5 font-sans text-[var(--text-small)] font-medium text-dark-ink hover:bg-[var(--dark-surface)] transition-colors">Sign in</a>
            <Button variant="primary" size="md" href="#start">Start free</Button>
          </div>
        </Container>
      </header>

      <Container className="relative z-10 flex flex-col items-center text-center pt-20 pb-24">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-[var(--dark-line)] px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-dark-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Now live in Slack
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-7 max-w-[15ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-dark-ink">
            Give your company a brain.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-[50ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-dark-ink-muted">
            An AI workforce that lives where your team already works — agents that
            remember your context, run your workflows, and connect every tool you use.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-3">
            <Button variant="primary" size="lg" href="#start">Start free</Button>
            <a href="#demo" className="inline-flex h-13 items-center rounded-[var(--r-pill)] border border-[var(--dark-line)] px-7 font-sans text-[var(--text-body)] font-medium text-dark-ink hover:bg-[var(--dark-surface)] transition-colors">Book a demo</a>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="w-full mt-16">
          <div className="mx-auto max-w-3xl">
            <HeroVisual />
          </div>
        </Reveal>

        <Reveal delay={0.4} className="mt-12">
          <p className="font-sans text-[var(--text-micro)] uppercase tracking-[0.12em] text-dark-ink-muted mb-4">
            Connects with
          </p>
          <ToolChips dark />
        </Reveal>
      </Container>
    </main>
  );
}

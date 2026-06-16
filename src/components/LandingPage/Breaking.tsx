"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

gsap.registerPlugin(useGSAP);

const TABS = ["Zapier", "Manus", "Gemini", "Make", "Claude", "Notion"];
const NODES = ["Research board", "AI Agents", "Automation Flows", "Memory & Pins"];
const CONNECTORS = ["slack", "gmail", "notion", "stripe", "github", "linear"];

export default function Breaking() {
  const scope = useRef<HTMLElement | null>(null);

  // The page's ONE signature moment: the Souvenir side's fragments (connectors,
  // the Brain, the nodes) start scattered and ASSEMBLE into order as the section
  // enters — "the memory your work keeps" made physical. transform/opacity only,
  // ~40ms stagger, ease-out, plays once, full static under reduced-motion.
  useGSAP(() => {
    const els = gsap.utils.toArray<HTMLElement>("[data-assemble]");
    if (!els.length) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    if (reduce) { gsap.set(els, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }); return; }

    els.forEach((el, i) => {
      const dir = i % 2 ? 1 : -1;
      gsap.set(el, { opacity: 0, x: dir * (22 + (i % 3) * 16), y: -16 - (i % 4) * 12, rotate: dir * (4 + (i % 3) * 3), scale: 0.92 });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            gsap.to(els, { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, duration: 0.7, ease: "power3.out", stagger: 0.04 });
            io.disconnect();
          }
        });
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
    );
    if (scope.current) io.observe(scope.current);
    return () => io.disconnect();
  }, { scope });

  return (
    <section ref={scope} className="py-[var(--section-y)]">
      <Container>
        <div className="text-center">
          <Reveal>
            <h2 className="font-display mx-auto max-w-[24ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink">
              The way work happens <em className="italic text-ink-muted">is breaking.</em>
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {/* problem */}
          <Reveal>
            <div className="relative flex h-full flex-col rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
              <Badge label="The problem" color="Red" />
              <h3 className="font-display mt-4 max-w-[22ch] text-[length:var(--text-h3)] leading-snug text-ink">Six tabs. Six accounts. Zero shared memory. Your team is the manual bridge.</h3>
              <div className="mt-6 flex flex-col gap-1.5">
                {TABS.map((t, i) => (
                  <div key={t} className="flex items-center gap-2 rounded-[var(--r-sm)] border border-line bg-bg-subtle px-3 py-2" style={{ marginLeft: `${i * 10}px`, boxShadow: "var(--shadow-sm)" }}>
                    <span className="flex gap-1"><span className="h-2 w-2 rounded-full bg-line-strong" /><span className="h-2 w-2 rounded-full bg-line-strong" /></span>
                    <span className="font-mono text-[var(--text-micro)] text-ink-muted">{t.toLowerCase()}.com / new-chat</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 font-sans text-[var(--text-small)] italic text-ink-subtle">“Which AI for which job? Nobody knows. Every employee uses AI alone.”</p>
            </div>
          </Reveal>
          {/* souvenir — the signature assemble lives here */}
          <Reveal delay={0.1}>
            <div className="relative flex h-full flex-col rounded-[var(--r-2xl)] border border-line-strong bg-bg-subtle p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
              <div className="glow-warm pointer-events-none absolute right-0 top-1/3 h-[240px] w-[300px] opacity-50" />
              <div className="relative">
                <Badge label="With Souvenir" color="Green" />
                <h3 className="font-display mt-4 max-w-[22ch] text-[length:var(--text-h3)] leading-snug text-ink">One workspace. Coordinated Assistants. The Brain remembers everything.</h3>
                <div className="mt-6 flex flex-col items-center gap-3">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    {CONNECTORS.map((c) => (
                      <span key={c} data-assemble className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}><ConnectorIcon id={c} size={17} /></span>
                    ))}
                  </div>
                  <span data-assemble className="inline-flex items-center rounded-[var(--r-pill)] border border-line-strong bg-surface px-3.5 py-1.5 font-sans text-[var(--text-small)] font-semibold text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>900+ Connectors</span>
                  <span data-assemble className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-dark-ink font-display text-[16px]" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
                </div>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  {NODES.map((n) => (
                    <span key={n} data-assemble className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3 py-1.5 font-sans text-[var(--text-small)] text-ink-secondary" style={{ boxShadow: "var(--shadow-sm)" }}><span className="h-1.5 w-1.5 rounded-full bg-ink-subtle" />{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

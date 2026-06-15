import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GuideContent from "@/components/GuidePage/GuideContent";

export const metadata: Metadata = {
  title: "Guide — Built for Humans | Souvenir",
  description: "A quick introduction to your new digital home: the Chatspace, AI Agents, Brain & Automation, and Slack — and how to use all of it.",
};

export default function GuidePage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-8">
        <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
        <Container>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Introduction to Souvenir
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display mt-6 max-w-[24ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
              Built for Humans: The AI Workspace That Makes Sense
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[70ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
              Tired of AI platforms that are confusing, cluttered, and take weeks to learn? Souvenir is designed from the ground up to be approachable, elegant, and simple to use. By clearing away tech chaos, we've created an intuitive, all-in-one workspace where your apps, files, projects, and team live in harmony. Here is a quick introduction to your new digital home and how to use it.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 font-mono text-[var(--text-micro)] text-ink-subtle">Last updated April 7, 2026</p>
          </Reveal>
        </Container>
      </section>
      <GuideContent />
    </>
  );
}

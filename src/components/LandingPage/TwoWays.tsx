"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/kaya/Button";
import { UserIcon, UserAiIcon, CheckmarkCircleTwoIcon } from "@strange-huge/icons";

const PATHS = [
  {
    kicker: "For yourself",
    name: "Individuals",
    Icon: UserIcon,
    intro: "Your personal AI operating system.",
    rows: [
      "Personal workspace, one user",
      "250+ connectors for everyday apps",
      "Pins, Project folders, Highlights",
      "Every major AI model, auto-routed",
    ],
    cta: "Start Personal Workspace",
    href: "/individuals",
  },
  {
    kicker: "For your team",
    name: "Teams",
    Icon: UserAiIcon,
    intro: "The autonomous company brain.",
    rows: [
      "Shared workspace, unlimited members",
      "Souvenir Slack Manager Agent",
      "Admin controls, audit log, approval gates",
      "Connectors plus full governance",
    ],
    cta: "Deploy to Your Team",
    href: "/solutions/company-brain",
  },
];

export default function TwoWays() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow="Pick your path" title="Two ways to use Souvenir." />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {PATHS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div
                className="relative flex h-full min-w-0 flex-col rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8"
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--r-lg)] border border-line bg-surface-warm text-ink"
                  >
                    <p.Icon size={20} />
                  </span>
                  <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.12em] text-ink-subtle">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="font-display mt-5 text-[length:var(--text-h2)] text-ink">
                  Souvenir for <em className="italic text-ink-muted">{p.name}</em>
                </h3>
                <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">
                  {p.intro}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {p.rows.map((r) => (
                    <li key={r} className="flex items-center gap-3">
                      <span aria-hidden className="shrink-0 text-ink" style={{ lineHeight: 0 }}>
                        <CheckmarkCircleTwoIcon size={18} />
                      </span>
                      <span className="min-w-0 font-sans text-[var(--text-small)] text-ink-secondary">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="mt-8 flex flex-1 items-end justify-end"
                  style={{ ["--font-size-body" as string]: "15px", ["--line-height-body" as string]: "22px" }}
                >
                  <a href={p.href} className="inline-flex">
                    {/* equal billing — both paths get the same CTA weight (true 50/50) */}
                    <Button variant="default" size="md" className="justify-center px-6 py-3">
                      {p.cta}
                    </Button>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
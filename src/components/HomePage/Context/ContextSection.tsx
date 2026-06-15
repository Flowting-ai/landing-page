import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";

const ROWS = [
  { label: "Research board", meta: "Synthesized from Slack, Drive & your CRM", badge: "live" },
  { label: "AI Assistants", meta: "working in the background", stack: ["Scout", "Drafter", "Ops", "Analyst"], extra: "+12" },
  { label: "Automation Flows", meta: "Triggered on schedule & on events", badge: "8 active" },
];

export default function ContextSection() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* copy */}
          <div className="min-w-0">
            <Reveal>
              <span className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.14em] text-ink-subtle">
                Intelligent context layer
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 max-w-[16ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink">
                Your company&apos;s knowledge, deeply understood. Acted on.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[52ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
                Any tool can pull from Slack or your CRM. Souvenir goes further. The
                Brain runs a semantic layer that synthesizes your company&apos;s
                knowledge — Assistants don&apos;t just retrieve information. They
                understand it. They use it. They build on it.
              </p>
            </Reveal>
          </div>

          {/* visual — real Avatar hub + avatar stack + Badges */}
          <Reveal delay={0.15} className="min-w-0">
            <div
              className="relative min-w-0 rounded-[var(--r-2xl)] bg-surface border border-line p-6 sm:p-8"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <Avatar name="The Brain" initials="S" size="md" color="var(--neutral-900)" />
                  <span className="font-sans text-[var(--text-small)] font-semibold text-ink">The Brain</span>
                </span>
                <Badge label="semantic layer" color="Neutral" />
              </div>
              <div className="mt-5 flex flex-col gap-3">
                {ROWS.map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between gap-3 rounded-[var(--r-md)] border border-line bg-bg-subtle px-4 py-3.5"
                    style={{ boxShadow: "var(--shadow-sm)" }}
                  >
                    <div className="min-w-0">
                      <span className="block font-sans text-[var(--text-small)] font-medium text-ink">{r.label}</span>
                      <span className="block truncate font-sans text-[var(--text-micro)] text-ink-muted">{r.meta}</span>
                    </div>
                    {r.stack ? (
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {r.stack.map((name, i) => (
                            <span key={name} style={{ marginLeft: i === 0 ? 0 : -8, zIndex: r.stack!.length - i }} className="ring-2 ring-[var(--bg-subtle)] rounded-full">
                              <Avatar name={name} size="sm" color="var(--neutral-700)" />
                            </span>
                          ))}
                        </div>
                        <Badge label={r.extra} color="Neutral" />
                      </div>
                    ) : (
                      <Badge label={r.badge} color="Neutral" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

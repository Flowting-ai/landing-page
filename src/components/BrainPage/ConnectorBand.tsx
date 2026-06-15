import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

const APPS = [
  "slack", "gmail", "notion", "stripe",
  "github", "linear", "hubspot", "figma",
];

const NODES = [
  "Automations", "Content", "Schedules & triggers", "Pins", "Approval gates",
  "Browser actions", "Web search", "Processes", "Infrastructure", "Goals",
  "Multi-Assistant chains", "Tasks", "Slack-native deploy",
];

export default function ConnectorBand() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[var(--r-2xl)] border border-line bg-surface px-6 py-12 sm:px-10 sm:py-14" style={{ boxShadow: "var(--shadow-sm)" }}>
            <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
            <div className="glow-warm pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[320px] w-[420px] -translate-x-1/2 -translate-y-1/2 opacity-50" />
            <div className="relative flex flex-col items-center">
              {/* app icon row */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {APPS.map((c) => (
                  <span key={c} className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-line bg-bg-subtle" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <ConnectorIcon id={c} size={20} />
                  </span>
                ))}
              </div>

              {/* central node */}
              <div className="my-7 flex flex-col items-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-dark-ink font-display text-[20px]" style={{ boxShadow: "var(--shadow-lg)" }}>S</span>
                <span className="mt-3 inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line-strong bg-surface px-4 py-1.5 font-sans text-[var(--text-small)] font-semibold text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>
                  250+ Connectors
                </span>
              </div>

              {/* capability nodes */}
              <div className="flex max-w-[44rem] flex-wrap items-center justify-center gap-2">
                {NODES.map((n) => (
                  <span key={n} className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-bg-subtle px-3.5 py-1.5 font-sans text-[var(--text-small)] text-ink-secondary" style={{ boxShadow: "var(--shadow-sm)" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-subtle" />{n}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

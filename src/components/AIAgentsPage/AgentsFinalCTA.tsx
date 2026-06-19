import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/kaya/Button";
import { DEMO_URL } from "@/lib/links";
import { ConnectorIcon } from "@strange-huge/icons/connectors";

const CONNECTORS = ["slack", "figma", "notion", "gmail", "linear", "stripe", "github", "hubspot"];

export default function AgentsFinalCTA() {
  return (
    <section className="px-[var(--gutter)] py-[var(--section-y)]">
      <Container wide>
        <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-dark-bg px-6 py-16 sm:px-10 sm:py-20">
          <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-60" />
          <div className="glow-signature pointer-events-none absolute left-1/2 top-0 h-[360px] w-[560px] -translate-x-1/2 opacity-40" />

          <div className="relative flex flex-col items-center text-center">
            {/* connector band */}
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
                {CONNECTORS.map((c) => (
                  <span key={c} className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[var(--dark-line)] bg-[var(--dark-surface)]">
                    <ConnectorIcon id={c} size={20} />
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display max-w-[20ch] text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-dark-ink">
                Hire your first Assistant. It&apos;s already trained.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 max-w-[52ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-dark-ink-muted">
                Pick a starting point. Connect your apps. Let your new workforce get to work.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col sm:flex-row items-center gap-3" style={{ ["--font-size-body" as string]: "16px", ["--line-height-body" as string]: "24px" }}>
                <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex"><Button variant="default" size="md" className="px-7 py-3">Book a Demo</Button></a>
                <a href="#discord" className="inline-flex h-[3.25rem] items-center rounded-[var(--r-pill)] border border-[var(--dark-line)] px-7 font-sans text-[var(--text-body)] font-medium text-dark-ink transition-colors hover:bg-[var(--dark-surface)]">Join Discord Community</a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

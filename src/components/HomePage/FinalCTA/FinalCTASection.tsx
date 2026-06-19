import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/kaya/Button";
import TrackCTA from "@/components/analytics/TrackCTA";
import { DEMO_URL } from "@/lib/links";

export default function FinalCTASection() {
  return (
    <section className="px-[var(--gutter)] py-[var(--section-y)]">
      <Container wide>
        <div className="relative overflow-hidden rounded-[var(--r-2xl)] bg-dark-bg px-6 py-16 sm:px-10 sm:py-24">
          <div className="dotgrid-dark pointer-events-none absolute inset-0 opacity-60" />
          <div className="glow-signature pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 opacity-40" />

          <div className="relative flex flex-col items-center text-center">
            <Reveal>
              <h2 className="font-display max-w-[18ch] text-[length:var(--text-h1)] leading-[var(--text-h1--line-height)] tracking-[var(--text-h1--letter-spacing)] text-dark-ink">
                One Brain. A coordinated team of agents.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 max-w-[58ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-dark-ink-muted">
                Souvenir brings your apps, scattered data, and daily workflows into a
                single operational layer — with a dedicated workforce of AI Assistants
                to run your business on autopilot.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-3 font-sans text-[var(--text-small)] text-dark-ink-muted/80">
                From the first prompt to the final deliverable, in one workspace. Managed from inside your Slack.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div
                className="mt-9 flex flex-col sm:flex-row items-center gap-3"
                style={{ ["--font-size-body" as string]: "16px", ["--line-height-body" as string]: "24px" }}
              >
                <TrackCTA event="book_demo_click" params={{ location: "final_cta" }}>
                  <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex"><Button variant="default" size="md" className="px-7 py-3">Book a Demo</Button></a>
                </TrackCTA>
                <TrackCTA event="discord_click" params={{ location: "final_cta" }}>
                  <a
                    href="#discord"
                    className="inline-flex h-[3.25rem] items-center rounded-[var(--r-pill)] border border-[var(--dark-line)] px-7 font-sans text-[var(--text-body)] font-medium text-dark-ink transition-colors hover:bg-[var(--dark-surface)]"
                  >
                    Join Discord Community
                  </a>
                </TrackCTA>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

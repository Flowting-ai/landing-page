import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Button } from "@/components/kaya/Button";

const PATHS = [
  {
    kicker: "For yourself",
    name: "Individuals",
    body: "Your personal AI operating system. Connects your disconnected apps, automates tasks across them, and saves your AI work forever.",
    rows: ["Personal workspace, one user", "250+ connectors for your everyday apps", "Pins, Project folders, Highlights", "Every major AI model, auto-routed"],
    cta: "Start Personal Workspace",
    href: "/individuals",
  },
  {
    kicker: "For your team",
    name: "Teams",
    body: "The autonomous company brain. One operational layer, a multi-agent workforce, living inside the Slack you already use.",
    rows: ["Shared workspace, unlimited members", "Souvenir Slack Manager Agent", "Admin controls, audit log, approval gates", "250+ connectors plus governance"],
    cta: "Deploy to Your Team",
    href: "/solutions/company-brain",
  },
];

export default function TwoWays() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <SectionHeading eyebrow="Pick your path" title="Two ways to use Souvenir." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {PATHS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-[var(--r-2xl)] border border-line bg-surface p-6 sm:p-8" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
                <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.12em] text-ink-subtle">{p.kicker}</span>
                <h3 className="font-display mt-2 text-[length:var(--text-h2)] text-ink">Souvenir for <em className="italic text-ink-muted">{p.name}</em></h3>
                <p className="mt-3 max-w-[46ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">{p.body}</p>
                <ul className="mt-6 flex flex-col gap-2.5">
                  {p.rows.map((r) => (
                    <li key={r} className="flex items-center gap-3 rounded-[var(--r-md)] border border-line bg-bg-subtle px-3.5 py-3" style={{ boxShadow: "var(--shadow-sm)" }}>
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink font-sans text-[var(--text-micro)] text-dark-ink">✓</span>
                      <span className="font-sans text-[var(--text-small)] text-ink-secondary">{r}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex-1 flex items-end" style={{ ["--font-size-body" as string]: "15px", ["--line-height-body" as string]: "22px" }}>
                  <a href={p.href} className="w-full">
                    {/* equal billing — both paths get the same CTA weight (true 50/50) */}
                    <Button variant="default" size="md" className="w-full justify-center px-6 py-3">{p.cta}</Button>
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

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/sections/SectionHeading";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";
import { Chip } from "@/components/Chip";

const CHAOS_TOOLS = ["Zapier", "Manus", "Claude", "Gemini", "Make", "Notion", "ChatGPT", "Perplexity"];

const SOUVENIR_NODES = [
  "900+ Connectors",
  "Morning Briefing",
  "Utilization Report",
  "Automation",
];

export default function ProblemSection() {
  return (
    <section id="solution" className="py-[var(--section-y)]">
      <Container>
        <SectionHeading
          eyebrow="The problem"
          title="Why your team is tired"
          lead="Most teams run AI in single-tab mode — one person, one chat, one model, no memory. The team becomes the manual bridge between every tool."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Chaos card */}
          <Reveal>
            <div
              className="relative flex h-full flex-col rounded-[var(--r-2xl)] bg-surface border border-line p-7 sm:p-9"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]"
                style={{ boxShadow: "var(--shadow-inner)" }}
              />
              <span className="w-fit"><Badge label="Chaos" color="Red" /></span>
              <h3 className="font-display mt-5 max-w-[18ch] text-[length:var(--text-h3)] text-ink">
                Six tabs. Six accounts. Zero shared memory.
              </h3>
              <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">
                Which AI for which job? Nobody knows. Every employee uses AI alone, and the context never leaves their head.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {CHAOS_TOOLS.map((t) => (
                  <span
                    key={t}
                    className="rounded-[var(--r-sm)] border border-line bg-bg-subtle px-2.5 py-1 font-sans text-[var(--text-micro)] text-ink-subtle"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Souvenir card */}
          <Reveal delay={0.1}>
            <div
              className="relative flex h-full flex-col rounded-[var(--r-2xl)] bg-surface border border-line p-7 sm:p-9"
              style={{ boxShadow: "var(--shadow-md)" }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]"
                style={{ boxShadow: "var(--shadow-inner)" }}
              />
              <span className="w-fit"><Badge label="Souvenir" color="Green" /></span>
              <h3 className="font-display mt-5 max-w-[18ch] text-[length:var(--text-h3)] text-ink">
                One workspace. Coordinated Assistants. The Brain remembers everything.
              </h3>
              <p className="mt-2 font-sans text-[var(--text-body)] leading-relaxed text-ink-muted">
                Your team and a coordinated team of AI Assistants share the same knowledge, the same tools, the same conversations.
              </p>
              {/* node graph (real Avatar hub + Chips) */}
              <div className="mt-7 flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <Avatar name="Agents" initials="A" size="md" color="var(--neutral-900)" />
                  <span className="font-sans text-[var(--text-small)] font-semibold text-ink">Agents</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {SOUVENIR_NODES.map((n) => (
                    <Chip key={n} label={n} color="Neutral" />
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

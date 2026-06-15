import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "∞", label: "Build unlimited AI Assistants. One workforce, every role you need.", sub: "No cap · no per-seat tax" },
  { value: "250+", label: "Native connectors to the tools you already use.", sub: "Shopify · Klaviyo · Drive · Gmail · Notion · Slack +244" },
  { value: "4", label: "Pro models, automatically chosen for each task by expertise.", sub: "OpenAI · Anthropic · Google Gemini · Mistral" },
];

export default function AgentStats() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center">
                <span className="font-display text-[clamp(2.75rem,2rem+3vw,4rem)] leading-none text-ink">{s.value}</span>
                <span className="mt-4 max-w-[28ch] font-sans text-[var(--text-body)] leading-relaxed text-ink-secondary">{s.label}</span>
                <span className="mt-2 font-sans text-[var(--text-micro)] text-ink-subtle">{s.sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const STATS = [
  { value: "4", label: "Frontier model labs — auto-selected by intent.", sub: "OpenAI · Anthropic · Gemini · Mistral" },
  { value: "3", label: "Compare models side-by-side, same prompt. Pick the winner.", sub: "Compare · Cost · Speed · Output" },
  { value: "∞", label: "Memory that compounds — AI work saved and carried forward.", sub: "Save · Organize · Share" },
];

export default function ChatspaceStats() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
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

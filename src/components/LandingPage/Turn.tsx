import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * The turn (home.md §3) — the single-line pivot from problem to product. A wide
 * framed statement spanning most of the content column. Besley carries it; one
 * calm idea, no side arrows, no motion beyond the section's single entrance reveal.
 */
export default function Turn() {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <Reveal>
          <div className="mx-auto w-full max-w-[68ch] border-y border-line-strong text-center" style={{ paddingBlock: "clamp(2rem, 5vw, 3.5rem)" }}>
            <p className="mx-auto max-w-[42ch] text-balance px-4 font-display text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink sm:px-8">
              Souvenir is a new layer between your apps{" "}
              <em className="italic text-ink-muted">and the work itself.</em>
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

/**
 * The turn (home.md §3) — the single-line pivot from problem to product. One
 * centered Besley line between thin rules; no visual, no motion. The quiet beat
 * that lets the problem land before the product arrives.
 */
export default function Turn() {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <Reveal>
          <div className="mx-auto flex max-w-[42ch] flex-col items-center text-center">
            <span aria-hidden className="mb-8 h-px w-12 bg-line-strong" />
            <p className="font-display text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
              Souvenir is a new layer between your apps <em className="italic text-ink-muted">and the work itself.</em>
            </p>
            <span aria-hidden className="mt-8 h-px w-12 bg-line-strong" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import TabTerrain from "@/components/LandingPage/TabTerrain";

/** Problem (home §2, Figma #9 "Chaos"): a diagonal cascade of labelled work cards
 *  anchored to the corner and climbing to a cursor — "six tabs, six accounts,"
 *  every piece of context in a different disconnected tool you click through by
 *  hand. Immersion in the mess; the headline carries "you are the manual bridge."
 *  In-repo cascade (transparent — sits on the warm canvas). Pure problem. */

export default function Breaking() {
  return (
    <section className="overflow-x-clip py-[var(--section-y)]">
      <Container>
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <Badge label="Chaos" color="Red" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-[24ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
              A dozen tools. <em className="italic text-ink-muted">You&rsquo;re the only thread between them.</em>
            </h2>
          </Reveal>
        </div>

        {/* warm panel (normal contained width): rows step up and clip at the panel's
            right edge — running behind it, so the pile reads as endless. */}
        <div
          className="relative mt-12 overflow-hidden rounded-[var(--r-2xl)] md:[aspect-ratio:11/8]"
          style={{ backgroundColor: "var(--surface-warm)", boxShadow: "var(--shadow-sm)" }}
        >
          {/* gold-damask wash — clipped inside this panel (overflow-hidden), faded */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage: "url(/visuals/bg-gold-damask.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.5,
              maskImage: "radial-gradient(92% 88% at 50% 42%, black 0%, transparent 90%)",
              WebkitMaskImage: "radial-gradient(92% 88% at 50% 42%, black 0%, transparent 90%)",
            }}
          />
          <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
          <TabTerrain />
        </div>
      </Container>
    </section>
  );
}

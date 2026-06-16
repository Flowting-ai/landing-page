import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import { MessageBubble } from "@/components/MessageBubble";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";
import ClientOnly from "@/components/ui/ClientOnly";

/** Brain proof (home.md §5, Figma #15): the ONE product window on the page. A
 *  composed Brain chat — nav rail + thread + model selector + input — from real
 *  KDS chat parts (MessageBubble in ClientOnly). Proof, not decoration. */

const NAV = ["Chat board", "Persona", "Brain", "Organisation", "Marketing Teams"];
const RECENT = ["Q3 board sync", "Ad spend recap", "Hiring plan", "PDP refresh"];

export default function BrainProof() {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container wide>
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <span className="flex items-center gap-2.5 font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.14em]">
              <span className="font-mono text-ink-subtle tabular-nums">05</span>
              <span aria-hidden className="h-px w-6 bg-line-strong" />
              <span className="text-[color:var(--accent)]">The Brain</span>
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-[24ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
              One place to think. <em className="italic text-ink-muted">Every model, every memory, on tap.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12">
          <ClientOnly minHeight={460}>
            <ShowcaseFrame title="souvenir · brain">
              <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_2.2fr]">
                {/* nav rail */}
                <div className="hidden flex-col gap-4 border-r border-line p-5 lg:flex">
                  <div className="flex flex-col gap-1">
                    {NAV.map((n, i) => (
                      <span key={n} className={"rounded-[var(--r-sm)] px-2.5 py-1.5 font-sans text-[var(--text-small)] " + (i === 2 ? "bg-surface-warm font-medium text-ink" : "text-ink-muted")}>{n}</span>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-col gap-1">
                    <span className="px-2.5 font-sans text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">Recents</span>
                    {RECENT.map((r) => (
                      <span key={r} className="rounded-[var(--r-sm)] px-2.5 py-1.5 font-sans text-[var(--text-small)] text-ink-muted">{r}</span>
                    ))}
                  </div>
                </div>

                {/* thread + input */}
                <div className="flex flex-col gap-4 p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-sans text-[var(--text-small)] font-medium text-ink">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[var(--text-micro)] text-dark-ink">S</span>
                      Souvenir · Brain
                    </span>
                    <Badge label="Memory on" color="Green" />
                  </div>
                  <div className="flex justify-end">
                    <MessageBubble role="user" content="Pull Q3 numbers from the Brain and draft the board summary." />
                  </div>
                  <div className="flex justify-start">
                    <MessageBubble role="assistant" content={`Done. Revenue +18% QoQ, CAC down 12%. I pulled the figures from Sheets + Quickbooks, cross-checked the deck, and drafted a 1-page summary — saved to the board so the next person doesn't re-read 80 messages.`} timestamp="just now" />
                  </div>
                  {/* input + model selector */}
                  <div className="mt-1 rounded-[var(--r-lg)] border border-line bg-bg-subtle p-3" style={{ boxShadow: "var(--shadow-inner)" }}>
                    <span className="font-sans text-[var(--text-small)] text-ink-subtle">How can I help you today?</span>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface text-ink-muted">+</span>
                      <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line-strong bg-surface px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>
                        <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Souvenir · Advanced ▾
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ShowcaseFrame>
          </ClientOnly>
        </div>
      </Container>
    </section>
  );
}

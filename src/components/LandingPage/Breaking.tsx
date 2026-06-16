import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import Visual from "@/components/sections/Visual";
import Scatter, { type ScatterItem } from "@/components/sections/Scatter";

/** Problem (home.md §2, Figma #9 "Chaos"): scattered chat bubbles over a pile of
 *  browser tabs — the felt low. The signature scatter→settle entrance lives here
 *  (Scatter `assemble`). Pure problem; the turn that follows is the pivot. */

const TABS = ["Zapier", "Manus", "Gemini", "Make", "Claude", "Notion", "ChatGPT", "Figma"];

function Bubble({ text, flip = false }: { text: string; flip?: boolean }) {
  const avatar = <span aria-hidden className="h-11 w-11 shrink-0 rounded-full bg-line-strong" />;
  const bubble = (
    <span className="max-w-[16rem] rounded-[var(--r-lg)] border border-line bg-surface px-4 py-2.5 font-sans text-[var(--text-small)] text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>
      {text}
    </span>
  );
  return <div className="flex items-center gap-3">{flip ? (<>{bubble}{avatar}</>) : (<>{avatar}{bubble}</>)}</div>;
}

const BUBBLES: ScatterItem[] = [
  { id: "b1", x: 50, y: 18, z: 4, rotate: -1, node: <Bubble text="Which AI for which job? Nobody knows." /> },
  { id: "b2", x: 32, y: 40, z: 3, rotate: 1, node: <Bubble flip text="Every employee uses AI alone." /> },
  { id: "b3", x: 56, y: 56, z: 2, rotate: -1, node: <Bubble text="Every employee uses AI alone." /> },
  { id: "b4", x: 38, y: 72, z: 1, rotate: 2, node: <Bubble flip text="Every employee uses AI alone." /> },
];

export default function Breaking() {
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="flex flex-col items-start text-left">
          <Reveal>
            <Badge label="Chaos" color="Red" />
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 max-w-[24ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
              Six tabs. Six accounts. Zero shared memory. <em className="italic text-ink-muted">Your team is the manual bridge.</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12">
          <Visual surface="warm" padded={false} className="overflow-hidden">
            <div className="relative">
              <Scatter items={BUBBLES} assemble aspect="16 / 9" className="px-4 sm:px-8 pt-8" />
              {/* browser-tab pile — bleeds off the bottom edge, like the Figma */}
              <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-wrap items-end gap-x-0 gap-y-2 px-4 sm:px-8 pb-0 opacity-95">
                {TABS.map((t, i) => (
                  <span
                    key={t}
                    className="flex translate-y-2 items-center gap-2 rounded-t-[10px] border border-line border-b-0 bg-surface px-3 py-2"
                    style={{ marginLeft: i === 0 ? 0 : -6, boxShadow: "var(--shadow-sm)" }}
                  >
                    <span className="h-3.5 w-3.5 rounded-[3px] bg-line-strong" />
                    <span className="font-sans text-[var(--text-micro)] text-ink-secondary">{t}</span>
                    <span className="font-sans text-[var(--text-micro)] text-ink-subtle">×</span>
                  </span>
                ))}
              </div>
            </div>
          </Visual>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { PersonaCard } from "@/components/PersonaCard";
import ClientOnly from "@/components/ui/ClientOnly";
import Reveal from "@/components/ui/Reveal";

/** Pillar 01 visual — the "team of agents" roster, built from the REAL KDS
 *  `PersonaCard` molecule, arranged as a tasteful fanned DECK on a warm panel
 *  (matches Figma node 4457-6472): back cards peek as headers, the front card is
 *  popped forward with its full description. Square photo-style KDS avatars,
 *  Private + role badges, the ⋮ menu — the same card the product ships.
 *  (This is the intentional version of the earlier broken overlap — content
 *  stays readable; the stack is deliberate, not clipped.) */

type Agent = {
  name: string;
  handle: string;
  description: string;
  tags: string[];
};

// Standardized on "Agents" (Chai). Front-most card (last) shows full description.
const AGENTS: Agent[] = [
  {
    name: "Drafter",
    handle: "drafter",
    description: "Turns rough notes and bullet points into a finished draft in your voice — ready to send, not just started.",
    tags: ["Writing"],
  },
  {
    name: "Ops",
    handle: "ops",
    description: "Runs the recurring multi-step work across your stack on a schedule, so nothing waits on someone remembering.",
    tags: ["Operations"],
  },
  {
    name: "Scout",
    handle: "scout",
    description: "Pulls together market data, competitor moves, and internal docs into a clean, decision-ready brief. No more 14 tabs and a half-read PDF.",
    tags: ["Research"],
  },
];

export default function PersonaRoster() {
  return (
    <ClientOnly minHeight={520}>
      <Reveal>
        {/* Warm panel backdrop (Figma) — the deck sits inside it. The PersonaCard
            is a fixed 314px-wide product molecule, so the deck is centered and the
            fan uses transform (not margin) to avoid adding layout width on mobile. */}
        <div
          className="relative flex flex-col items-center overflow-hidden rounded-[var(--r-2xl)] px-2 pb-6 pt-6 sm:px-6"
          style={{ backgroundColor: "var(--surface-warm)", boxShadow: "var(--shadow-inner)" }}
        >
          <div className="relative">
            {AGENTS.map((a, i) => (
              <div
                key={a.handle}
                style={{
                  position: "relative",
                  zIndex: i + 1,
                  // back cards tuck under the next so only their header peeks;
                  // the front (last) card shows its full description.
                  marginTop: i === 0 ? 0 : -96,
                  // gentle horizontal fan via transform (no layout-width impact)
                  transform: `translateX(${i === AGENTS.length - 1 ? 0 : (AGENTS.length - 1 - i) * -8}px)`,
                }}
              >
                <PersonaCard
                  variant="default"
                  name={a.name}
                  handle={a.handle}
                  description={a.description}
                  visibility="private"
                  tags={a.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </ClientOnly>
  );
}

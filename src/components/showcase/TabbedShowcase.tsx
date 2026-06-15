"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { springs } from "@/lib/springs";
import ShowcaseFrame from "./ShowcaseFrame";
import ChatspacePanel from "./panels/ChatspacePanel";
import BrainPanel from "./panels/BrainPanel";
import SlackPanel from "./panels/SlackPanel";

const TABS = [
  { id: "chatspace", label: "Chatspace", title: "souvenir · chatspace", caption: "Every frontier model, one prompt.", Panel: ChatspacePanel },
  { id: "brain", label: "Brain", title: "souvenir · brain", caption: "A goal in. An answer out — on a schedule.", Panel: BrainPanel },
  { id: "slack", label: "Slack", title: "Slack · #growth-team", caption: "Delegate to your agents where you already work.", Panel: SlackPanel },
] as const;

export default function TabbedShowcase() {
  const [active, setActive] = useState<(typeof TABS)[number]["id"]>("chatspace");
  const current = TABS.find((t) => t.id === active)!;
  const Panel = current.Panel;

  return (
    <div className="flex flex-col items-center">
      {/* tab bar */}
      <div role="tablist" aria-label="Product" className="inline-flex items-center gap-1 rounded-[var(--r-pill)] border border-line bg-surface p-1" style={{ boxShadow: "var(--shadow-sm)" }}>
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            onClick={() => setActive(t.id)}
            className="relative rounded-[var(--r-pill)] px-4 py-2 font-sans text-[var(--text-small)] font-medium transition-colors"
          >
            {active === t.id && (
              <motion.span
                layoutId="tab-pill"
                className="absolute inset-0 rounded-[var(--r-pill)] bg-ink"
                transition={springs.moderate}
              />
            )}
            <span className={"relative z-10 " + (active === t.id ? "text-white" : "text-ink-muted hover:text-ink")}>
              {t.label}
            </span>
          </button>
        ))}
      </div>

      <p className="mt-4 h-5 font-sans text-[var(--text-small)] text-ink-muted">{current.caption}</p>

      {/* frame + animated panel */}
      <div className="mt-5 w-full max-w-2xl">
        <ShowcaseFrame title={current.title}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <Panel />
            </motion.div>
          </AnimatePresence>
        </ShowcaseFrame>
      </div>
    </div>
  );
}

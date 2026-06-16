"use client";

import { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { UserAiIcon, BrainTwoIcon, ChatOneIcon, UserIcon, UserAddOneIcon } from "@strange-huge/icons";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { springs } from "@/lib/springs";

export type MenuItem = {
  label: string;
  desc: string;
  href: string;
  Icon?: React.ComponentType<{ size?: number }>;
  connector?: string;
};

const PRODUCT: MenuItem[] = [
  { label: "AI Assistants", desc: "A coordinated team of AI assistants for every task.", href: "/product/ai-assistants", Icon: UserAiIcon },
  { label: "Brain & Automation", desc: "Goal in, answer out — automations that run on their own.", href: "/product/brain", Icon: BrainTwoIcon },
  { label: "Slack Manager", desc: "Delegate to your agents from inside Slack.", href: "/product/slack", connector: "slack" },
  { label: "Unified Chatspace", desc: "Every frontier model, one prompt.", href: "/product/chatspace", Icon: ChatOneIcon },
];

export type Audience = { id: string; tab: string; items: MenuItem[] };

const SOLUTION_AUDIENCES: Audience[] = [
  {
    id: "individuals",
    tab: "For Individuals",
    items: [
      { label: "Personal AI OS", desc: "Your personal AI operating system.", href: "/individuals", Icon: UserIcon },
      { label: "Unified Chatspace", desc: "Every frontier model, one prompt.", href: "/product/chatspace", Icon: ChatOneIcon },
    ],
  },
  {
    id: "teams",
    tab: "For Teams",
    items: [
      { label: "Company Brain", desc: "One shared brain for your whole team.", href: "/solutions/company-brain", Icon: UserAddOneIcon },
      { label: "Slack Manager", desc: "Delegate to your agents from inside Slack.", href: "/product/slack", connector: "slack" },
      { label: "Brain & Automation", desc: "Automations that run on their own.", href: "/product/brain", Icon: BrainTwoIcon },
    ],
  },
];

const LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const triggerCls =
  "group inline-flex items-center gap-1 rounded-[8px] px-2 py-1.5 font-sans text-[var(--text-small)] text-ink-secondary outline-none transition-colors hover:text-[color:var(--accent)] data-[state=open]:text-[color:var(--accent)]";

function Row({ item, onPick }: { item: MenuItem; onPick?: () => void }) {
  return (
    <NavigationMenu.Link asChild>
      <a href={item.href} onClick={onPick} className="flex items-start gap-3 rounded-[10px] p-2.5 transition-colors hover:bg-surface-warm">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-[8px] border border-line bg-bg-subtle text-ink">
          {item.connector ? <ConnectorIcon id={item.connector} size={18} /> : item.Icon ? <item.Icon size={18} /> : null}
        </span>
        <span className="flex flex-col">
          <span className="font-sans text-[var(--text-small)] font-semibold text-ink">{item.label}</span>
          <span className="font-sans text-[var(--text-micro)] leading-snug text-ink-muted">{item.desc}</span>
        </span>
      </a>
    </NavigationMenu.Link>
  );
}

function ProductPanel() {
  return (
    <div className="p-3" style={{ width: 540 }}>
      <span className="block px-2.5 pb-1.5 pt-1 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">Product</span>
      <div className="grid grid-cols-2 gap-0.5">
        {PRODUCT.map((it) => <Row key={it.label} item={it} />)}
      </div>
    </div>
  );
}

/** Solution panel with an audience switcher (segmented control + sliding pill). */
function SolutionPanel() {
  const [active, setActive] = useState(SOLUTION_AUDIENCES[0].id);
  const current = SOLUTION_AUDIENCES.find((a) => a.id === active)!;

  return (
    <div className="p-3" style={{ width: 340 }}>
      {/* segmented switcher */}
      <div className="mb-2 flex gap-1 rounded-[10px] border border-line bg-bg-subtle p-1">
        {SOLUTION_AUDIENCES.map((a) => (
          <button
            key={a.id}
            onClick={() => setActive(a.id)}
            className="relative flex-1 rounded-[7px] px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium transition-colors"
          >
            {active === a.id && (
              <motion.span layoutId="sol-pill" className="absolute inset-0 rounded-[7px] bg-surface" style={{ boxShadow: "var(--shadow-sm)" }} transition={springs.moderate} />
            )}
            <span className={"relative z-10 " + (active === a.id ? "text-ink" : "text-ink-muted hover:text-ink")}>{a.tab}</span>
          </button>
        ))}
      </div>

      {/* audience content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-0.5"
        >
          {current.items.map((it) => <Row key={it.label} item={it} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function MegaMenu() {
  return (
    <NavigationMenu.Root delayDuration={80} className="relative hidden lg:block">
      <NavigationMenu.List className="flex items-center gap-1.5">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerCls}>
            Product
            <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="kds-mega-content">
            <div className="kds-mega-surface"><ProductPanel /></div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerCls}>
            Solution
            <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="kds-mega-content">
            <div className="kds-mega-surface"><SolutionPanel /></div>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        {LINKS.map((l) => (
          <NavigationMenu.Item key={l.label}>
            <NavigationMenu.Link asChild>
              <a href={l.href} className="inline-flex items-center rounded-[8px] px-2 py-1.5 font-sans text-[var(--text-small)] text-ink-secondary transition-colors hover:text-[color:var(--accent)]">{l.label}</a>
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

export { PRODUCT, SOLUTION_AUDIENCES, LINKS };

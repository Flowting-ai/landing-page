"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  UserAiIcon, BrainTwoIcon, ChatOneIcon, NeuralNetworkIcon,
  DashboardSquareOneIcon, WorkflowSquareTenIcon,
} from "@strange-huge/icons";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { DropdownMenuItem } from "@/components/DropdownMenuItem";
import { springs } from "@/lib/springs";

export type MenuItem = {
  label: string;
  desc: string;
  href: string;
  Icon?: React.ComponentType<{ size?: number }>;
  connector?: string;
};

// subLabel is a short, one-line teaser (KDS DropdownMenuItem truncates) — not a
// full sentence. Icons are pulled from @strange-huge/icons to match the product.
const PRODUCT: MenuItem[] = [
  { label: "AI Assistants", desc: "A specialist for every task", href: "/product/ai-assistants", Icon: UserAiIcon },
  { label: "Brain & Automation", desc: "Goal in, answer out", href: "/product/brain", Icon: WorkflowSquareTenIcon },
  { label: "Slack Manager", desc: "Delegate from inside Slack", href: "/product/slack", connector: "slack" },
  { label: "Unified Chatspace", desc: "Every model, one prompt", href: "/product/chatspace", Icon: ChatOneIcon },
];

export type Audience = { id: string; tab: string; items: MenuItem[] };

const SOLUTION_AUDIENCES: Audience[] = [
  {
    id: "individuals",
    tab: "For Individuals",
    items: [
      { label: "Personal AI OS", desc: "Your personal AI workspace", href: "/individuals", Icon: DashboardSquareOneIcon },
      { label: "Unified Chatspace", desc: "Every model, one prompt", href: "/product/chatspace", Icon: ChatOneIcon },
    ],
  },
  {
    id: "teams",
    tab: "For Teams",
    items: [
      { label: "Company Brain", desc: "One brain for your team", href: "/solutions/company-brain", Icon: NeuralNetworkIcon },
      { label: "Slack Manager", desc: "Delegate from inside Slack", href: "/product/slack", connector: "slack" },
      { label: "Brain & Automation", desc: "Automations that self-run", href: "/product/brain", Icon: BrainTwoIcon },
    ],
  },
];

const LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

/** Which top-level group owns the current route (drives the active treatment). */
function activeGroup(pathname: string): "product" | "solution" | null {
  if (pathname.startsWith("/product")) return "product";
  if (pathname.startsWith("/solutions") || pathname === "/individuals") return "solution";
  return null;
}

// No `outline-none` — let the global ink :focus-visible ring (--focus-ring-c) show.
const triggerCls =
  "group inline-flex items-center gap-1 rounded-[8px] px-2 py-1.5 font-sans text-[var(--text-small)] font-medium tracking-[-0.01em] transition-colors hover:text-[color:var(--accent)] data-[state=open]:text-[color:var(--accent)] data-[active=true]:text-ink";
const linkCls =
  "inline-flex items-center rounded-[8px] px-2 py-1.5 font-sans text-[var(--text-small)] font-medium tracking-[-0.01em] transition-colors hover:text-[color:var(--accent)] data-[active=true]:text-ink";

/** A menu row built on the real KDS DropdownMenuItem — embossed hover + accent
    bar + auto-sized icon slot. Wrapped in NavigationMenu.Link for keyboard/route
    semantics; tabIndex=-1 on the item suppresses a double tab-stop (the anchor
    is the focus target). */
function NavRow({ item, onPick }: { item: MenuItem; onPick?: () => void }) {
  const icon = item.connector ? (
    <ConnectorIcon id={item.connector} />
  ) : item.Icon ? (
    <item.Icon />
  ) : undefined;
  return (
    <NavigationMenu.Link asChild>
      <a href={item.href} onClick={onPick} className="block rounded-[6px]">
        <DropdownMenuItem label={item.label} subLabel={item.desc} icon={icon} accent fluid tabIndex={-1} />
      </a>
    </NavigationMenu.Link>
  );
}

function ProductPanel() {
  return (
    <div className="p-2" style={{ width: 588 }}>
      <DropdownMenuItem variant="header" label="Product" fluid />
      <div className="grid grid-cols-2 gap-1">
        {PRODUCT.map((it) => <NavRow key={it.label} item={it} />)}
      </div>
    </div>
  );
}

/** Solution panel with an audience switcher (segmented control + sliding pill).
    A min-height keeps the shared viewport from jittering when the audience
    (2 vs 3 items) changes while the panel is open. */
function SolutionPanel() {
  const [active, setActive] = useState(SOLUTION_AUDIENCES[0].id);
  const current = SOLUTION_AUDIENCES.find((a) => a.id === active)!;

  return (
    <div className="p-2" style={{ width: 320 }}>
      {/* segmented switcher */}
      <div className="mb-1 flex gap-1 rounded-[10px] border border-line bg-bg-subtle p-1">
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

      {/* audience content — min-h fits the tallest audience (3 rows) so the viewport holds steady */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[10.5rem] flex-col gap-1"
        >
          {current.items.map((it) => <NavRow key={it.label} item={it} />)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function MegaMenu() {
  const pathname = usePathname() ?? "/";
  const group = activeGroup(pathname);

  return (
    <NavigationMenu.Root delayDuration={80} className="relative hidden lg:block">
      <NavigationMenu.List className="flex items-center gap-1.5">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerCls} data-active={group === "product"}>
            Product
            <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="nav-content"><ProductPanel /></NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className={triggerCls} data-active={group === "solution"}>
            Solution
            <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="nav-content"><SolutionPanel /></NavigationMenu.Content>
        </NavigationMenu.Item>

        {LINKS.map((l) => {
          const isActive = pathname === l.href;
          return (
            <NavigationMenu.Item key={l.label}>
              <NavigationMenu.Link asChild active={isActive}>
                <a href={l.href} className={linkCls} data-active={isActive} aria-current={isActive ? "page" : undefined}>{l.label}</a>
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          );
        })}
      </NavigationMenu.List>

      {/* Shared viewport: panels morph in size (Product wide ↔ Solution narrow). */}
      <div className="nav-viewport-position">
        <NavigationMenu.Viewport className="nav-viewport" />
      </div>
    </NavigationMenu.Root>
  );
}

export { PRODUCT, SOLUTION_AUDIENCES, LINKS };

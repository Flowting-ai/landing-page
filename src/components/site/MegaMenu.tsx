"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  UserAiIcon, BrainTwoIcon, ChatOneIcon, NeuralNetworkIcon,
  DashboardSquareOneIcon, WorkflowSquareTenIcon, ArrowUpRightOneIcon,
} from "@strange-huge/icons";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import { Tabs, TabsList, TabsTrigger } from "@/components/Tabs";
import FeaturedBrainCard from "./FeaturedBrainCard";

export type MenuItem = {
  label: string;
  desc: string;
  /** Longer one-sentence line shown in the hover preview pane. */
  long: string;
  href: string;
  Icon?: React.ComponentType<{ size?: number }>;
  connector?: string;
};

// Copy is parallel across both menus: a short verb/benefit line per item, ~3-5
// words, same voice — so Product and Solution read as one consistent system.
const PRODUCT: MenuItem[] = [
  { label: "AI Assistants", desc: "A specialist for every task", long: "A coordinated team of AI specialists that know your context and do the work.", href: "/product/ai-assistants", Icon: UserAiIcon },
  { label: "Brain & Automation", desc: "Set a goal — it runs", long: "Hand off a goal; agents plan, run the multi-step work, and report back.", href: "/product/brain", Icon: WorkflowSquareTenIcon },
  { label: "Slack Manager", desc: "Run it all from Slack", long: "Delegate to your agents and ship work without leaving your Slack channels.", href: "/product/slack", connector: "slack" },
  { label: "Unified Chatspace", desc: "Every model, one chat", long: "Every frontier model in one chat that remembers, researches, and compares.", href: "/product/chatspace", Icon: ChatOneIcon },
];

// "Works in your stack" rail — only IDs that render in @strange-huge/icons/connectors.
const STACK = ["slack", "gmail", "notion", "github", "linear", "figma"];

export type Audience = { id: string; tab: string; items: MenuItem[] };

const SOLUTION_AUDIENCES: Audience[] = [
  {
    id: "individuals",
    tab: "For Individuals",
    items: [
      { label: "Personal AI OS", desc: "Your AI, fully yours", long: "Your personal AI operating system — memory, agents, and chat in one place.", href: "/individuals", Icon: DashboardSquareOneIcon },
      { label: "Unified Chatspace", desc: "Every model, one chat", long: "Every frontier model in one chat that remembers, researches, and compares.", href: "/product/chatspace", Icon: ChatOneIcon },
    ],
  },
  {
    id: "teams",
    tab: "For Teams",
    items: [
      { label: "Company Brain", desc: "One brain, whole team", long: "One shared brain for your whole team — context, memory, and automations.", href: "/solutions/company-brain", Icon: NeuralNetworkIcon },
      { label: "Slack Manager", desc: "Run it all from Slack", long: "Delegate to your agents and ship work without leaving your Slack channels.", href: "/product/slack", connector: "slack" },
      { label: "Brain & Automation", desc: "Goals that run themselves", long: "Hand off a goal; agents plan, run the multi-step work, and report back.", href: "/product/brain", Icon: BrainTwoIcon },
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

// Smaller, quieter section eyebrow (KDS caption = 11px, down from 13px micro).
const eyebrowCls =
  "block px-1 pb-2 font-sans text-[length:var(--font-size-caption)] font-medium uppercase tracking-[0.14em] text-ink-subtle";

// The Kaya card skeleton — shared verbatim by Pin + PersonaCard so our nav cards
// read as the same family: a soft 2px drop + a 1px neutral ring.
const SHADOW_CARD = "0px 2px 2.8px 0px var(--neutral-700-12), 0px 0px 0px 1px var(--neutral-100)";

function itemIcon(item: MenuItem, size: number) {
  return item.connector ? (
    <ConnectorIcon id={item.connector} size={size} />
  ) : item.Icon ? (
    <item.Icon size={size} />
  ) : null;
}

/** Item card — embossed icon tile + label/sublabel, on the Kaya card skeleton.
    Icon is TOP-aligned with the label. Lifts on hover with the shared
    SHADOW_CARD; `onHover` drives the preview pane. NavigationMenu.Link for a11y. */
function NavCard({ item, onPick, onHover }: { item: MenuItem; onPick?: () => void; onHover?: (i: MenuItem) => void }) {
  return (
    <NavigationMenu.Link asChild>
      <a
        href={item.href}
        onClick={onPick}
        onMouseEnter={() => onHover?.(item)}
        onFocus={() => onHover?.(item)}
        className="group flex items-start gap-3 rounded-[10px] p-2.5 transition-[background-color,box-shadow] duration-150 hover:bg-surface hover:shadow-[var(--card-shadow)]"
        style={{ ["--card-shadow" as string]: SHADOW_CARD }}
      >
        {/* Icon tile — on card hover the rectangle warms + darkens (surface →
            warm neutral) and the glyph picks up the mauve accent. */}
        <span
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] bg-surface text-ink transition-colors duration-150 group-hover:bg-surface-warm group-hover:text-[color:var(--accent)]"
          style={{ boxShadow: SHADOW_CARD }}
        >
          {itemIcon(item, 20)}
        </span>
        {/* pt-px nudges the label's cap-height into line with the icon-tile top */}
        <span className="flex min-w-0 flex-col pt-px">
          <span className="font-sans text-[var(--text-small)] font-semibold leading-tight tracking-[-0.01em] text-ink">{item.label}</span>
          <span className="mt-1 font-sans text-[var(--text-micro)] leading-snug text-ink-muted">{item.desc}</span>
        </span>
      </a>
    </NavigationMenu.Link>
  );
}

/** Hover preview — the right pane swaps to this when an item is hovered: a big
    glyph, the name, a longer line, and an Explore affordance. Crossfades in. */
function ItemPreview({ item }: { item: MenuItem }) {
  return (
    <NavigationMenu.Link asChild>
      <a
        href={item.href}
        className="group flex flex-1 flex-col justify-between overflow-hidden rounded-[14px] border border-line p-4"
        style={{ background: "linear-gradient(160deg, var(--surface) 0%, var(--surface-warm) 130%)", boxShadow: SHADOW_CARD }}
      >
        <span
          className="inline-flex h-11 w-11 items-center justify-center rounded-[11px] bg-surface text-[color:var(--accent)]"
          style={{ boxShadow: SHADOW_CARD }}
        >
          {itemIcon(item, 24)}
        </span>
        <div className="mt-5">
          <p className="font-sans text-[var(--text-body)] font-semibold tracking-[-0.01em] text-ink">{item.label}</p>
          <p className="mt-1.5 font-sans text-[var(--text-small)] leading-snug text-ink-secondary">{item.long}</p>
          <span className="mt-3 inline-flex items-center gap-1 font-sans text-[var(--text-micro)] font-medium text-[color:var(--accent)]">
            Explore
            <ArrowUpRightOneIcon size={14} />
          </span>
        </div>
      </a>
    </NavigationMenu.Link>
  );
}

/** "Works in your stack" connector rail — bare brand logos (no chip frames),
    hairline-separated, on a clean type scale. */
function StackRail() {
  return (
    <div className="mt-1 border-t border-line pt-3.5">
      <span className="block font-sans text-[length:var(--font-size-caption)] font-medium uppercase tracking-[0.14em] text-ink-subtle">
        Works in your stack
      </span>
      <div className="mt-3 flex items-center gap-3.5">
        {STACK.map((id) => (
          <ConnectorIcon key={id} id={id} size={24} />
        ))}
        <span className="font-sans text-[var(--text-small)] font-medium tabular-nums text-ink-muted">+250</span>
      </div>
    </div>
  );
}

/** Shared right-hand aside. Default (no hover) shows the gold Company Brain card
    — the hero. Hovering a left item crossfades the pane to that item's preview.
    The connector rail stays pinned below. A fixed min-height keeps it steady. */
function SheetAside({ hovered }: { hovered: MenuItem | null }) {
  return (
    <div className="flex w-[320px] shrink-0 flex-col gap-3 self-stretch border-l border-line pl-8">
      <div className="relative flex min-h-[210px] flex-1 flex-col">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={hovered ? hovered.label : "__featured"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-1 flex-col"
          >
            {hovered ? <ItemPreview item={hovered} /> : <FeaturedBrainCard />}
          </motion.div>
        </AnimatePresence>
      </div>
      <StackRail />
    </div>
  );
}

// Full-width sheet inner container — gutter-aligned to the page content column.
const sheetInner = "mx-auto flex w-full gap-10 py-7";
const sheetInnerStyle = { maxWidth: "var(--maxw)", paddingInline: "var(--gutter)" } as const;

/** Product sheet — left: item cards (hover → preview). right: preview/featured aside. */
function ProductPanel() {
  const [hovered, setHovered] = useState<MenuItem | null>(null);
  return (
    <div className={sheetInner} style={sheetInnerStyle} onMouseLeave={() => setHovered(null)}>
      <div className="flex flex-1 flex-col">
        <span className={eyebrowCls}>Product</span>
        <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-1.5">
          {PRODUCT.map((it) => <NavCard key={it.label} item={it} onHover={setHovered} />)}
        </div>
      </div>
      <SheetAside hovered={hovered} />
    </div>
  );
}

/** Solution sheet — left: audience switcher + item cards (hover → preview).
    right: preview/featured aside. min-height holds the sheet steady. */
function SolutionPanel() {
  const [active, setActive] = useState(SOLUTION_AUDIENCES[0].id);
  const [hovered, setHovered] = useState<MenuItem | null>(null);
  const current = SOLUTION_AUDIENCES.find((a) => a.id === active)!;

  return (
    <div className={sheetInner} style={sheetInnerStyle} onMouseLeave={() => setHovered(null)}>
      <div className="flex flex-1 flex-col">
        {/* KDS Tabs — the animated sliding-pill segmented control, reused as-is. */}
        <Tabs value={active} onValueChange={(v) => { setActive(v); setHovered(null); }} className="mb-3 w-[340px]">
          <TabsList fluid>
            {SOLUTION_AUDIENCES.map((a) => (
              <TabsTrigger key={a.id} value={a.id}>{a.tab}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="grid min-h-[9rem] grid-cols-2 gap-x-6 gap-y-1.5"
          >
            {current.items.map((it) => <NavCard key={it.label} item={it} onHover={setHovered} />)}
          </motion.div>
        </AnimatePresence>
      </div>
      <SheetAside hovered={hovered} />
    </div>
  );
}

/** Full-screen page blur behind an open panel (the panel stays solid on top).
    Rendered INSIDE the Root — NOT portaled to body — so it shares the header's
    stacking context (the header lives in a `.isolate` wrapper, so a body-level
    portal would paint above the nav). backdrop-filter still blurs the page
    behind it across contexts; the nav List + Viewport layer above it via z. */
function Backdrop({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          aria-hidden
          className="nav-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </AnimatePresence>
  );
}

export default function MegaMenu() {
  const pathname = usePathname() ?? "/";
  const group = activeGroup(pathname);
  const [value, setValue] = useState("");

  return (
    <NavigationMenu.Root
      value={value}
      onValueChange={setValue}
      delayDuration={80}
      className="relative hidden lg:block"
    >
      <Backdrop open={value !== ""} />
      <NavigationMenu.List className="relative z-[1] flex items-center gap-1.5">
        <NavigationMenu.Item value="product">
          <NavigationMenu.Trigger className={triggerCls} data-active={group === "product"}>
            Product
            <ChevronDown size={14} className="transition-transform group-data-[state=open]:rotate-180" />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="nav-content"><ProductPanel /></NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="solution">
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

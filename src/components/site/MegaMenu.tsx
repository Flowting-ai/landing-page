"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/gtag";
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
function NavCard({ item, onPick, onHover, active = false }: { item: MenuItem; onPick?: () => void; onHover?: (i: MenuItem) => void; active?: boolean }) {
  return (
    <NavigationMenu.Link asChild>
      <a
        href={item.href}
        onClick={() => { trackEvent("nav_menu_click", { link_label: item.label, location: "mega_menu" }); onPick?.(); }}
        onMouseEnter={() => onHover?.(item)}
        onFocus={() => onHover?.(item)}
        data-active={active}
        className="group flex items-center gap-3 rounded-[10px] p-2.5 transition-[background-color,box-shadow] duration-150 hover:bg-surface hover:shadow-[var(--card-shadow)] data-[active=true]:bg-surface data-[active=true]:shadow-[var(--card-shadow)]"
        style={{ ["--card-shadow" as string]: SHADOW_CARD }}
      >
        {/* Icon tile — warms + darkens and the glyph picks up mauve when the row
            is hovered OR active (its preview is showing). */}
        <span
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] bg-surface text-ink transition-colors duration-150 group-hover:bg-surface-warm group-hover:text-[color:var(--accent)] group-data-[active=true]:bg-surface-warm group-data-[active=true]:text-[color:var(--accent)]"
          style={{ boxShadow: SHADOW_CARD }}
        >
          {itemIcon(item, 20)}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="font-sans text-[var(--text-small)] font-semibold leading-tight tracking-[-0.01em] text-ink">{item.label}</span>
          <span className="mt-0.5 font-sans text-[var(--text-micro)] leading-snug text-ink-muted">{item.desc}</span>
        </span>
        {/* chevron appears on hover/active — affords "see more" */}
        <ArrowUpRightOneIcon size={14} className="ml-auto shrink-0 text-ink-subtle opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-data-[active=true]:opacity-100" />
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
    <div className="flex flex-1 flex-col gap-3 self-stretch border-l border-line pl-10">
      {/* FIXED height so the gold card and every preview occupy the exact same
          box — swapping never resizes the pane (no sheet height jump). */}
      <div className="relative h-[244px] shrink-0">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={hovered ? hovered.label : "__featured"}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col"
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

// Secondary IA surfaced in the sheet footer (real routes only).
const FOOTER_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "Integrations", href: "/integrations" },
  { label: "Guide", href: "/guide" },
];

/** Utility footer bar — a full-width strip grounding the sheet: secondary links
    on the left, a forward action on the right (Stripe/Glean pattern). */
function SheetFooter() {
  return (
    <div className="border-t border-line" style={{ background: "var(--bg-subtle)" }}>
      <div className="mx-auto flex items-center justify-between py-3" style={sheetInnerStyle}>
        <div className="flex items-center gap-6">
          {FOOTER_LINKS.map((l) => (
            <NavigationMenu.Link asChild key={l.label}>
              <a href={l.href} onClick={() => trackEvent("nav_menu_click", { link_label: l.label, location: "mega_menu_footer" })} className="font-sans text-[var(--text-small)] text-ink-muted transition-colors hover:text-ink">{l.label}</a>
            </NavigationMenu.Link>
          ))}
        </div>
        <NavigationMenu.Link asChild>
          <a href="/about" onClick={() => trackEvent("book_demo_click", { location: "mega_menu" })} className="inline-flex items-center gap-1 font-sans text-[var(--text-small)] font-semibold tracking-[-0.01em] text-ink transition-colors hover:text-[color:var(--accent)]">
            Book a demo
            <ArrowUpRightOneIcon size={15} />
          </a>
        </NavigationMenu.Link>
      </div>
    </div>
  );
}

/** Product sheet — left: item cards (hover → preview). right: preview/featured aside. */
function ProductPanel() {
  const [hovered, setHovered] = useState<MenuItem | null>(null);
  return (
    <div onMouseLeave={() => setHovered(null)}>
      <div className={sheetInner} style={sheetInnerStyle}>
        <div className="flex w-[388px] shrink-0 flex-col">
          <span className={eyebrowCls}>Product</span>
          <div className="flex flex-1 flex-col gap-0.5">
            {PRODUCT.map((it) => <NavCard key={it.label} item={it} onHover={setHovered} active={hovered?.label === it.label} />)}
          </div>
        </div>
        <SheetAside hovered={hovered} />
      </div>
      <SheetFooter />
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
    <div onMouseLeave={() => setHovered(null)}>
      <div className={sheetInner} style={sheetInnerStyle}>
        <div className="flex w-[388px] shrink-0 flex-col">
          {/* KDS Tabs — the animated sliding-pill segmented control, reused as-is. */}
          <Tabs value={active} onValueChange={(v) => { setActive(v); setHovered(null); }} className="mb-3 w-full">
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
              className="flex min-h-[12rem] flex-col gap-0.5"
            >
              {current.items.map((it) => <NavCard key={it.label} item={it} onHover={setHovered} active={hovered?.label === it.label} />)}
            </motion.div>
          </AnimatePresence>
        </div>
        <SheetAside hovered={hovered} />
      </div>
      <SheetFooter />
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

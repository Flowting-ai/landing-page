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
import { springs } from "@/lib/springs";

export type MenuItem = {
  label: string;
  desc: string;
  href: string;
  Icon?: React.ComponentType<{ size?: number }>;
  connector?: string;
};

// Copy is sharp + product-true — one concrete line per item, no filler.
const PRODUCT: MenuItem[] = [
  { label: "AI Assistants", desc: "Specialist agents for every task", href: "/product/ai-assistants", Icon: UserAiIcon },
  { label: "Brain & Automation", desc: "Set the goal — it runs the work", href: "/product/brain", Icon: WorkflowSquareTenIcon },
  { label: "Slack Manager", desc: "Delegate from inside Slack", href: "/product/slack", connector: "slack" },
  { label: "Unified Chatspace", desc: "Every frontier model, one chat", href: "/product/chatspace", Icon: ChatOneIcon },
];

// "Works in your stack" rail — only IDs that render in @strange-huge/icons/connectors.
const STACK = ["slack", "gmail", "notion", "github", "linear", "figma"];

export type Audience = { id: string; tab: string; items: MenuItem[] };

const SOLUTION_AUDIENCES: Audience[] = [
  {
    id: "individuals",
    tab: "For Individuals",
    items: [
      { label: "Personal AI OS", desc: "Your whole AI workspace, solo", href: "/individuals", Icon: DashboardSquareOneIcon },
      { label: "Unified Chatspace", desc: "Every frontier model, one chat", href: "/product/chatspace", Icon: ChatOneIcon },
    ],
  },
  {
    id: "teams",
    tab: "For Teams",
    items: [
      { label: "Company Brain", desc: "One shared brain for the team", href: "/solutions/company-brain", Icon: NeuralNetworkIcon },
      { label: "Slack Manager", desc: "Delegate from inside Slack", href: "/product/slack", connector: "slack" },
      { label: "Brain & Automation", desc: "Automations that run themselves", href: "/product/brain", Icon: BrainTwoIcon },
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

const eyebrowCls =
  "block px-1 pb-2 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.12em] text-ink-subtle";

/** Item card — embossed icon tile + strong label/sublabel hierarchy on KDS
    surface tokens. Lifts on hover (surface-card shadow). Wrapped in
    NavigationMenu.Link for keyboard + route semantics. */
function NavCard({ item, onPick }: { item: MenuItem; onPick?: () => void }) {
  const icon = item.connector ? (
    <ConnectorIcon id={item.connector} size={20} />
  ) : item.Icon ? (
    <item.Icon size={20} />
  ) : null;
  return (
    <NavigationMenu.Link asChild>
      <a
        href={item.href}
        onClick={onPick}
        className="group flex items-center gap-3 rounded-[10px] border border-transparent p-2.5 transition-[background-color,border-color,box-shadow] duration-150 hover:border-line hover:bg-surface hover:shadow-[var(--shadow-surface-card-hover)]"
      >
        <span
          className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[9px] text-ink transition-colors group-hover:text-[color:var(--accent)]"
          style={{ background: "var(--surface)", border: "1px solid var(--line)", boxShadow: "var(--shadow-sm)" }}
        >
          {icon}
        </span>
        <span className="flex min-w-0 flex-col">
          <span className="font-sans text-[var(--text-small)] font-semibold tracking-[-0.01em] text-ink">{item.label}</span>
          <span className="font-sans text-[var(--text-micro)] leading-snug text-ink-muted">{item.desc}</span>
        </span>
      </a>
    </NavigationMenu.Link>
  );
}

/** The one accent moment in the nav: a mauve gradient promo card (ElevenLabs /
    Glean "featured" pattern), pointing at the team flagship. */
function FeaturedCard() {
  return (
    <NavigationMenu.Link asChild>
      <a
        href="/solutions/company-brain"
        className="group relative flex flex-1 flex-col justify-between overflow-hidden rounded-[12px] border border-line p-4 transition-shadow hover:shadow-[var(--shadow-surface-card-hover)]"
        style={{ background: "linear-gradient(155deg, var(--accent-soft) 0%, color-mix(in oklch, var(--surface) 86%, var(--accent)) 55%, var(--surface) 100%)" }}
      >
        {/* faint oversized glyph — depth, not decoration */}
        <span aria-hidden className="pointer-events-none absolute -right-5 -top-4 text-[color:var(--accent)]" style={{ opacity: 0.1 }}>
          <NeuralNetworkIcon size={104} />
        </span>
        <div className="relative flex items-center justify-between">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-[9px] border border-line bg-surface text-[color:var(--accent)]" style={{ boxShadow: "var(--shadow-sm)" }}>
            <NeuralNetworkIcon size={19} />
          </span>
          <span className="rounded-full bg-surface px-2 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]" style={{ border: "1px solid var(--line)" }}>
            New
          </span>
        </div>
        <div className="relative mt-5">
          <p className="flex items-center gap-1 font-sans text-[var(--text-small)] font-semibold tracking-[-0.01em] text-ink">
            The Company Brain
            <ArrowUpRightOneIcon size={15} />
          </p>
          <p className="mt-1 font-sans text-[var(--text-micro)] leading-snug text-ink-muted">
            Shared memory, context, and automations for your whole team.
          </p>
        </div>
      </a>
    </NavigationMenu.Link>
  );
}

/** "Works in your stack" connector rail — Glean's "where you work" zone, our tokens. */
function StackRail() {
  return (
    <div className="rounded-[12px] border border-line bg-bg-subtle p-3">
      <span className="block font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.12em] text-ink-subtle">
        Works in your stack
      </span>
      <div className="mt-2.5 flex items-center gap-2">
        {STACK.map((id) => (
          <span key={id} className="inline-flex h-8 w-8 items-center justify-center rounded-[8px] border border-line bg-surface" style={{ boxShadow: "var(--shadow-sm)" }}>
            <ConnectorIcon id={id} size={18} />
          </span>
        ))}
        <span className="ml-0.5 font-sans text-[var(--text-micro)] font-semibold text-ink-muted">+250</span>
      </div>
    </div>
  );
}

/** Product panel — Glean-style multi-zone: rich item cards on the left, a bold
    featured card + connector rail on the right. Uses the menu's full width. */
function ProductPanel() {
  return (
    <div className="flex gap-3 p-3" style={{ width: 812 }}>
      <div className="flex flex-1 flex-col">
        <span className={eyebrowCls}>Product</span>
        <div className="grid flex-1 grid-cols-2 gap-1.5">
          {PRODUCT.map((it) => <NavCard key={it.label} item={it} />)}
        </div>
      </div>
      <div className="flex w-[256px] flex-col gap-2.5 border-l border-line pl-3">
        <FeaturedCard />
        <StackRail />
      </div>
    </div>
  );
}

/** Solution panel — audience switcher (segmented control + sliding pill) over
    the same rich item cards. min-height holds the viewport steady across the
    2-vs-3-item audiences. */
function SolutionPanel() {
  const [active, setActive] = useState(SOLUTION_AUDIENCES[0].id);
  const current = SOLUTION_AUDIENCES.find((a) => a.id === active)!;

  return (
    <div className="p-3" style={{ width: 372 }}>
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

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex min-h-[12.5rem] flex-col gap-1.5"
        >
          {current.items.map((it) => <NavCard key={it.label} item={it} />)}
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

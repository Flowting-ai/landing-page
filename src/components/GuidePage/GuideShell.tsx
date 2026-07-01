"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import {
  BubbleChatIcon, GalaxyIcon, PinIcon, QuillWriteOneIcon, RadarThreeIcon,
  DashboardSquareOneIcon, ChatOneIcon, UserAddOneIcon, WorkflowSquareTenIcon,
  NeuralNetworkIcon, UserAiIcon, SettingsOneIcon, InformationCircleIcon, UserIcon,
} from "@strange-huge/icons";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import GuideOnThisPage from "@/components/GuidePage/GuideOnThisPage";
import GuideSearch from "@/components/GuidePage/GuideSearch";
import { GUIDE_NAV } from "@/content/guides/nav";

const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  book: InformationCircleIcon, layout: DashboardSquareOneIcon, users: UserIcon,
  chat: BubbleChatIcon, galaxy: GalaxyIcon, pin: PinIcon, quill: QuillWriteOneIcon,
  radar: RadarThreeIcon, dashboard: DashboardSquareOneIcon, chatone: ChatOneIcon,
  useradd: UserAddOneIcon, workflow: WorkflowSquareTenIcon, network: NeuralNetworkIcon,
  userai: UserAiIcon, settings: SettingsOneIcon,
};

function NavIcon({ icon }: { icon: string }) {
  if (icon === "slack") return <ConnectorIcon id="slack" size={16} />;
  const I = ICONS[icon] ?? BubbleChatIcon;
  return <I size={16} />;
}

function NavList({ activeSlug, onPick }: { activeSlug: string; onPick?: () => void }) {
  return (
    <nav className="flex flex-col gap-6">
      {GUIDE_NAV.map((group) => (
        <div key={group.title}>
          <span className="px-2 font-sans text-[length:var(--text-micro)] font-medium uppercase tracking-[0.12em] text-ink-subtle">
            {group.title}
          </span>
          <ul className="mt-2 flex flex-col gap-0.5">
            {group.items.map((it) => {
              const active = it.slug === activeSlug;
              return (
                <li key={it.slug}>
                  <Link
                    href={it.href ?? `/guide/${it.slug}`}
                    onClick={onPick}
                    data-active={active}
                    aria-current={active ? "page" : undefined}
                    className="flex items-center gap-2.5 rounded-[8px] px-2 py-1.5 font-sans text-[length:var(--text-small)] text-ink-secondary transition-colors hover:bg-surface-warm hover:text-ink data-[active=true]:bg-surface-warm data-[active=true]:font-medium data-[active=true]:text-ink"
                  >
                    <span aria-hidden className="shrink-0 text-ink-muted" style={{ lineHeight: 0 }}>
                      <NavIcon icon={it.icon} />
                    </span>
                    <span className="min-w-0 truncate">{it.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default function GuideShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const activeSlug = pathname.replace(/^\/guide\//, "").replace(/\/$/, "");
  const [open, setOpen] = useState(false);

  return (
    // Docs shell (ElevenLabs/Stripe pattern): nav + a generous FILL center + on-this-page
    // rail. The center isn't hard-capped (prose self-limits via ch-based max-widths),
    // so the demo + screenshots fill the middle and read large on wide monitors.
    <div className="mx-auto w-full max-w-[104rem] px-5 sm:px-8 lg:px-10 xl:px-12">
      {/* mobile: toggle to reveal the guide nav */}
      <div className="sticky top-[var(--nav-shell-h)] z-20 -mx-5 border-b border-line bg-bg/85 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-2 font-sans text-[length:var(--text-small)] font-medium text-ink"
          aria-expanded={open}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
          All learning guides
        </button>
        {open && (
          <div className="mt-4 pb-2">
            <NavList activeSlug={activeSlug} onPick={() => setOpen(false)} />
          </div>
        )}
      </div>

      <div className="lg:grid lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[16rem_minmax(0,1fr)_16rem] xl:gap-12">
        {/* left: guide nav — sticky */}
        <aside className="hidden lg:block">
          <div className="sticky top-[calc(var(--nav-shell-h)+1.5rem)] max-h-[calc(100dvh-var(--nav-shell-h)-3rem)] overflow-y-auto py-10 pr-2" style={{ overscrollBehaviorY: "contain" }}>
            <div className="mb-6"><GuideSearch /></div>
            <NavList activeSlug={activeSlug} />
          </div>
        </aside>

        {/* center: content fills the middle column; prose elements cap themselves. */}
        <div className="min-w-0">{children}</div>

        {/* right: "On this page" — xl+ only (3 panes cramp the screenshots below xl) */}
        <aside className="hidden xl:block">
          <div className="sticky top-[calc(var(--nav-shell-h)+1.5rem)] max-h-[calc(100dvh-var(--nav-shell-h)-3rem)] overflow-y-auto py-12" style={{ overscrollBehaviorY: "contain" }}>
            <GuideOnThisPage />
          </div>
        </aside>
      </div>
    </div>
  );
}

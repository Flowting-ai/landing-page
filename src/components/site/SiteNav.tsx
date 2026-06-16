"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import Logo from "./Logo";
import MegaMenu, { PRODUCT, SOLUTION_AUDIENCES, LINKS, type MenuItem } from "./MegaMenu";

function MobileRow({ item, onPick }: { item: MenuItem; onPick: () => void }) {
  return (
    <a href={item.href} onClick={onPick} className="flex items-center gap-3 rounded-[8px] px-2.5 py-2.5 hover:bg-surface-warm">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] border border-line bg-bg-subtle text-ink">
        {item.connector ? <ConnectorIcon id={item.connector} size={16} /> : item.Icon ? <item.Icon size={16} /> : null}
      </span>
      <span className="font-sans text-[var(--text-body)] font-medium text-ink">{item.label}</span>
    </a>
  );
}

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  // Scrolled state: the floating pill firms up once you leave the top — a touch
  // more opaque + a stronger warm shadow, so it reads as lifted over content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-6">
      <Container wide>
        {/* glassy rounded bar (Figma 4818-11839: rounded-13, translucent, neutral-200 border) */}
        <div
          className={`relative flex items-center justify-between rounded-[13px] border border-line-strong px-3 py-2 backdrop-blur-md transition-[background-color,box-shadow] duration-300 ${scrolled ? "bg-surface/85" : "bg-surface/70"}`}
          style={{ boxShadow: scrolled ? "var(--shadow-md)" : "var(--shadow-sm)" }}
        >
          <a href="/" aria-label="Souvenir home" className="inline-flex items-center px-1.5">
            <Logo variant="lockup" height={24} className="text-ink" />
          </a>

          {/* desktop mega-menu nav (centered). Shown at lg+ only — the centered
              menu needs ~1024px to clear the logo + CTAs; below that it collided
              (Pricing/About clipped behind the buttons), so 768–1023 uses the sheet. */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <MegaMenu />
          </div>

          <div className="flex items-center gap-2.5">
            <Button variant="secondary" size="md" className="hidden sm:inline-flex px-3.5">Sign in</Button>
            <Button variant="default" size="md" className="px-4">
              <span className="hidden sm:inline">Get started for free</span>
              <span className="sm:hidden">Get started</span>
            </Button>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-[var(--r-md)] text-ink hover:bg-surface-warm lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </Container>

      {/* mobile / tablet sheet (below lg) */}
      {open && (
        <Container wide className="lg:hidden">
          <div className="mt-2 rounded-[16px] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-md)" }}>
            <span className="block px-2.5 pb-1 pt-1 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">Product</span>
            {PRODUCT.map((it) => <MobileRow key={it.label} item={it} onPick={close} />)}
            <div className="my-2 h-px bg-line" />
            {SOLUTION_AUDIENCES.map((aud) => (
              <div key={aud.id}>
                <span className="block px-2.5 pb-1 pt-1 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">{aud.tab}</span>
                {aud.items.map((it) => <MobileRow key={it.label} item={it} onPick={close} />)}
              </div>
            ))}
            <div className="my-2 h-px bg-line" />
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} onClick={close} className="block rounded-[8px] px-2.5 py-2.5 font-sans text-[var(--text-body)] text-ink-secondary hover:bg-surface-warm hover:text-ink">{l.label}</a>
            ))}
            <a href="#signin" onClick={close} className="block rounded-[8px] px-2.5 py-2.5 font-sans text-[var(--text-body)] text-ink-secondary hover:bg-surface-warm hover:text-ink sm:hidden">Sign in</a>
          </div>
        </Container>
      )}
    </header>
  );
}

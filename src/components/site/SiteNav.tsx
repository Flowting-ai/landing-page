"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import Container from "@/components/ui/Container";
import { Button } from "@/components/kaya/Button";
import Logo from "./Logo";
import MegaMenu, { PRODUCT, SOLUTION_AUDIENCES, LINKS, type MenuItem } from "./MegaMenu";

// Logo footprint, derived from the asset ratios in Logo.tsx so the wordmark→mark
// swap is absorbed left-anchored (no push on the nav links).
const LOGO_H = 22;
const WORDMARK_RATIO = 2876 / 634; // mirrors Logo.tsx wordmark aspect
const WORD_W = Math.round(LOGO_H * WORDMARK_RATIO);
const MARK_W = LOGO_H;

function MobileRow({ item, onPick, active }: { item: MenuItem; onPick: () => void; active?: boolean }) {
  return (
    <a
      href={item.href}
      onClick={onPick}
      data-active={active}
      aria-current={active ? "page" : undefined}
      className="flex items-center gap-3 rounded-[8px] px-2.5 py-2.5 hover:bg-surface-warm data-[active=true]:bg-surface-warm"
    >
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
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname() ?? "/";
  const close = () => setOpen(false);

  // Flush → pill: the bar stays full-width and fill-free over the hero, then
  // condenses into the floating pill once you've scrolled ~halfway down the
  // first screen (≈ halfway through a viewport-tall hero). Threshold reads
  // innerHeight each scroll so it stays correct across resizes/orientation.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Crossing into desktop closes the drawer (the trigger is lg:hidden, so a
  // left-open Dialog would otherwise trap focus on a display:none panel).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => { if (mq.matches) setOpen(false); };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <header className="site-nav sticky top-0 z-50">
        {/* Outer shell holds a CONSTANT reserved height; the morph is all on the pill. */}
        <div className="site-nav__shell">
          <Container wide>
            <div className={`site-nav__pill ${scrolled ? "is-pill" : "is-flush"}`}>
              <Link href="/" aria-label="Souvenir home" className="inline-flex items-center px-1.5">
                <span
                  className="site-nav__logo"
                  data-scrolled={scrolled}
                  style={{ height: LOGO_H, width: scrolled ? MARK_W : WORD_W }}
                >
                  <Logo variant="wordmark" height={LOGO_H} className="nav-logo-word text-ink" />
                  <Logo variant="mark" height={LOGO_H} className="nav-logo-mark text-ink" />
                </span>
              </Link>

              {/* desktop mega-menu nav (centered). Shown at lg+ only — the centered
                  menu needs ~1024px to clear the logo + CTAs; below that the drawer wins. */}
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
                  ref={triggerRef}
                  type="button"
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-haspopup="dialog"
                  aria-expanded={open}
                  aria-controls="site-nav-drawer"
                  onClick={() => setOpen((v) => !v)}
                  className="ml-1 flex h-11 w-11 items-center justify-center rounded-[var(--r-md)] text-ink hover:bg-surface-warm lg:hidden"
                >
                  {open ? <X size={20} /> : <Menu size={20} />}
                </button>
              </div>
            </div>
          </Container>
        </div>
      </header>

      {/* mobile / tablet drawer (below lg) — real Radix Dialog: focus trap, ESC,
          scrim / click-outside, body scroll-lock, focus restoration. */}
      <Dialog.Portal>
        <Dialog.Overlay className="site-nav__scrim lg:hidden" />
        <Dialog.Content
          id="site-nav-drawer"
          aria-describedby={undefined}
          className="site-nav__drawer lg:hidden"
          onCloseAutoFocus={(e) => { e.preventDefault(); triggerRef.current?.focus(); }}
          onInteractOutside={(e) => {
            // Let the hamburger toggle itself — don't let outside-click double-fire the close.
            if (triggerRef.current && e.target instanceof Node && triggerRef.current.contains(e.target)) e.preventDefault();
          }}
        >
          <VisuallyHidden><Dialog.Title>Menu</Dialog.Title></VisuallyHidden>
          <div className="rounded-[16px] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-md)" }}>
            <span className="block px-2.5 pb-1 pt-1 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">Product</span>
            {PRODUCT.map((it) => <MobileRow key={it.label} item={it} onPick={close} active={pathname === it.href} />)}
            <div className="my-2 h-px bg-line" />
            {SOLUTION_AUDIENCES.map((aud) => (
              <div key={aud.id}>
                <span className="block px-2.5 pb-1 pt-1 font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.1em] text-ink-subtle">{aud.tab}</span>
                {aud.items.map((it) => <MobileRow key={it.label} item={it} onPick={close} active={pathname === it.href} />)}
              </div>
            ))}
            <div className="my-2 h-px bg-line" />
            {LINKS.map((l) => {
              const isActive = pathname === l.href;
              return (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={close}
                  data-active={isActive}
                  aria-current={isActive ? "page" : undefined}
                  className="block rounded-[8px] px-2.5 py-2.5 font-sans text-[var(--text-body)] text-ink-secondary hover:bg-surface-warm hover:text-ink data-[active=true]:text-ink"
                >
                  {l.label}
                </a>
              );
            })}
            <a href="#signin" onClick={close} className="block rounded-[8px] px-2.5 py-2.5 font-sans text-[var(--text-body)] text-ink-secondary hover:bg-surface-warm hover:text-ink sm:hidden">Sign in</a>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

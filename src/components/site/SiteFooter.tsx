"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";
import FooterScene from "./FooterScene";
import { InputField } from "@/components/InputField";
import { Button } from "@/components/kaya/Button";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "AI Assistants", href: "/product/ai-assistants" },
      { label: "Brain & Automation", href: "/product/brain" },
      { label: "Slack Manager", href: "/product/slack" },
      { label: "Unified Chatspace", href: "/product/chatspace" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Teams", href: "/solutions/company-brain" },
      { label: "For Individuals", href: "/individuals" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Guide", href: "/guide" },
      { label: "Contact", href: "/about" },
    ],
  },
];

const LEGAL = [
  { label: "Terms", href: "/legal/terms" },
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Acceptable Use", href: "/legal/acceptable-use" },
];

export default function SiteFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-bg text-ink">
      <FooterScene>
        <Container wide className="flex min-h-[560px] flex-col justify-between py-14 sm:min-h-[640px] sm:py-16">
          {/* ── Top: brand + newsletter · link columns (over the wheat field) ── */}
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            <div className="max-w-sm">
              <Logo variant="lockup" height={26} className="text-ink" />
              <p className="mt-4 max-w-xs font-sans text-[var(--text-small)] leading-relaxed text-ink-secondary">
                The workspace that knows your context and runs the work — for individuals and teams.
              </p>
              <form className="mt-6 flex max-w-xs items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <InputField
                  type="email"
                  size="small"
                  placeholder="your@company.com"
                  value={email}
                  onChange={setEmail}
                  aria-label="Email for newsletter"
                  className="flex-1"
                />
                <Button type="submit" variant="default" size="md" className="shrink-0 px-4">Subscribe</Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <p className="font-sans text-[length:var(--font-size-caption)] font-semibold uppercase tracking-[0.12em] text-ink-muted">{col.title}</p>
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <a href={l.href} className="font-sans text-[var(--text-small)] text-ink-secondary transition-colors hover:text-[color:var(--accent)]">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom: legal bar (over the pale path — dark ink text) ── */}
          <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-sans text-[var(--text-micro)] text-ink-secondary">© 2026 Souvenir Inc. — the memory your work keeps.</span>
            <div className="flex items-center gap-5">
              {LEGAL.map((l) => (
                <a key={l.label} href={l.href} className="font-sans text-[var(--text-micro)] text-ink-muted underline-offset-4 transition-colors hover:text-ink hover:underline">{l.label}</a>
              ))}
            </div>
          </div>
        </Container>
      </FooterScene>
    </footer>
  );
}

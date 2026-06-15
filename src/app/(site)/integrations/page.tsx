import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import IntegrationsDirectory from "@/components/IntegrationsPage/IntegrationsDirectory";

export const metadata: Metadata = {
  title: "Integrations — Connect Souvenir to your entire stack",
  description: "250+ tools and data sources. Slack, Shopify, Klaviyo, Gmail, Notion, Drive and more — your AI Assistants read and write across every app your team already uses.",
};

export default function IntegrationsPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-10">
        <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
        <div className="glow-warm pointer-events-none absolute -z-10 h-[420px] w-[560px] -top-16 left-1/2 -translate-x-1/2" />
        <Container className="flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Integrations · Connectors
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="font-display mt-6 max-w-[18ch] text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink text-balance">
              Connect Souvenir to <em className="font-display italic text-ink-muted">your entire stack.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[60ch] font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">
              250+ tools and data sources. Slack, Shopify, Klaviyo, Gmail, Notion, Drive and more. Your AI Assistants read and write across every app your team already uses.
            </p>
          </Reveal>
        </Container>
      </section>
      <IntegrationsDirectory />
    </>
  );
}

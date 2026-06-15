import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Badge } from "@/components/Badge";
import ContactForm from "@/components/ContactPage/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Souvenir",
  description: "Get in touch with the Souvenir team. We respond within 1 business day.",
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-24 pb-[var(--section-y)]">
      <div className="dotgrid pointer-events-none absolute inset-0 -z-10" />
      <div className="glow-warm pointer-events-none absolute -z-10 h-[420px] w-[560px] -top-16 left-0" />
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line bg-surface px-3.5 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink-muted" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Company · Contact
              </span>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="font-display mt-6 text-[length:var(--text-display)] leading-[var(--text-display--line-height)] tracking-[var(--text-display--letter-spacing)] text-ink">Get in touch.</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 font-sans text-[length:var(--text-lead)] leading-[var(--text-lead--line-height)] text-ink-muted">We respond within 1 business day.</p>
            </Reveal>
            <Reveal delay={0.18}>
              <a href="mailto:info@getsouvenir.com" className="mt-8 flex items-center gap-4 rounded-[var(--r-xl)] border border-line bg-surface p-4 transition-colors hover:bg-bg-subtle" style={{ boxShadow: "var(--shadow-sm)" }}>
                <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-line bg-bg-subtle font-display text-[18px] text-ink">✉</span>
                <span className="flex flex-col items-start">
                  <Badge label="General" color="Neutral" />
                  <span className="mt-1.5 font-sans text-[var(--text-body)] font-medium text-ink">info@getsouvenir.com</span>
                </span>
              </a>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="min-w-0">
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

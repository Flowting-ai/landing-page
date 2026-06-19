import Container from "@/components/ui/Container";
import Logo from "./Logo";
import FooterScene from "./FooterScene";
import TrackCTA from "@/components/analytics/TrackCTA";

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
  { label: "Connected Services", href: "/legal/connected-services" },
  { label: "Cookies", href: "/legal/cookies" },
  { label: "Acceptable Use", href: "/legal/acceptable-use" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-bg text-ink">
      <FooterScene>
        <Container wide className="flex min-h-[680px] flex-col justify-between py-16 sm:min-h-[760px] sm:py-20">
          {/* ── Top: brand + newsletter · link columns (over the field) ── */}
          <div className="grid gap-14 lg:grid-cols-[1.25fr_2fr]">
            <div className="max-w-sm">
              {/* Brand moment: the gold Souvenir orb + wordmark */}
              <div className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="h-11 w-11 shrink-0 select-none bg-contain bg-center bg-no-repeat"
                  style={{ backgroundImage: "url(/brand/gold-orb.webp)" }}
                />
                <Logo variant="wordmark" height={24} className="text-ink" />
              </div>
              <p className="mt-5 max-w-[20rem] font-sans text-[var(--text-small)] leading-relaxed text-ink-secondary">
                Your context, remembered. Your work, quietly done.
              </p>
            </div>

            {/* Prominent column headers (title-case ink, ~16px) + airy link rhythm */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
              {COLUMNS.map((col) => (
                <div key={col.title}>
                  <p className="font-sans text-[length:var(--font-size-body-lg)] font-semibold tracking-[-0.01em] text-ink">{col.title}</p>
                  <ul className="mt-5 flex flex-col gap-3.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <TrackCTA event="footer_nav_click" params={{ link_label: l.label, group: col.title }}>
                          <a href={l.href} className="font-sans text-[var(--text-small)] text-ink-secondary transition-colors hover:text-[color:var(--accent)]">{l.label}</a>
                        </TrackCTA>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bottom: copyright (left) · underlined legal links (right) ── */}
          <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-sans text-[var(--text-micro)] text-ink-secondary">© 2026 Souvenir Inc. — the memory your work keeps.</span>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {LEGAL.map((l) => (
                <TrackCTA key={l.label} event="footer_legal_click" params={{ link_label: l.label }}>
                  <a href={l.href} className="font-sans text-[var(--text-micro)] text-ink-muted underline underline-offset-4 decoration-[color:var(--line-strong)] transition-colors hover:text-ink hover:decoration-[color:var(--ink)]">{l.label}</a>
                </TrackCTA>
              ))}
            </div>
          </div>
        </Container>
      </FooterScene>
    </footer>
  );
}

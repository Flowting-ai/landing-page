import Container from "@/components/ui/Container";
import Logo from "./Logo";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "AI Assistants", href: "/product/ai-assistants" },
      { label: "Brain & Automation", href: "/product/brain" },
      { label: "Slack Manager", href: "/product/slack" },
      { label: "Unified Chatspace", href: "/product/chatspace" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Businesses", href: "/solutions/company-brain" },
      { label: "Individuals", href: "/individuals" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact", href: "/about" },
      { label: "Guide", href: "/guide" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/legal/terms" },
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Acceptable Use", href: "/legal/acceptable-use" },
      { label: "Cookie Policy", href: "/legal/cookies" },
      { label: "Copyright & DMCA", href: "/legal/copyright" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-dark-bg text-dark-ink">
      <Container wide className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* brand + newsletter */}
          <div className="max-w-sm">
            <Logo variant="lockup" height={26} className="text-dark-ink" />
            <p className="mt-4 font-sans text-[var(--text-small)] leading-relaxed text-dark-ink-muted">
              The centralized workspace brain. A coordinated team of agents.
            </p>
            <div className="mt-7">
              <label className="font-sans text-[var(--text-micro)] font-medium uppercase tracking-[0.12em] text-dark-ink-muted">
                Newsletter
              </label>
              <div className="mt-2.5 flex gap-2">
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="h-11 flex-1 rounded-[var(--r-md)] border border-[var(--dark-line)] bg-[var(--dark-surface)] px-3.5 font-sans text-[var(--text-small)] text-dark-ink placeholder:text-dark-ink-muted focus-visible:outline-2 focus-visible:outline-[var(--neutral-400)]"
                />
                <button className="h-11 rounded-[var(--r-md)] bg-dark-ink px-4 font-sans text-[var(--text-small)] font-medium text-ink transition-opacity hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <p className="font-sans text-[var(--text-micro)] font-semibold uppercase tracking-[0.1em] text-dark-ink-muted">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="font-sans text-[var(--text-small)] text-dark-ink/85 transition-colors hover:text-dark-ink">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-[var(--dark-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-sans text-[var(--text-micro)] text-dark-ink-muted">© 2026 Souvenir Inc. Made with context.</span>
          <span className="font-sans text-[var(--text-micro)] text-dark-ink-muted">v2.0 — June 2026</span>
        </div>
      </Container>
    </footer>
  );
}

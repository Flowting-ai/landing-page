import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────
const imgNavLogo    = "https://www.figma.com/api/mcp/asset/b70cf8a7-2b1a-4923-9626-12d693497082";
const imgChevron    = "https://www.figma.com/api/mcp/asset/c38da78e-c387-4c6e-b647-0de98b51a396";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/d5e4d87c-ccd2-4679-9d7e-fe30305faae9";
const imgFooterBg   = "https://www.figma.com/api/mcp/asset/f234fcdb-1277-4932-bce2-b02f344cd2e5";
const imgFooterDot  = "https://www.figma.com/api/mcp/asset/26cb5168-c3cb-4b26-a41c-34adfe7d1423";
const imgSubmitIcon = "https://www.figma.com/api/mcp/asset/9b09ff92-db5f-43ca-9d9b-994b66628f24";

// ─── Shared UI components ─────────────────────────────────────────────────────
function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] relative bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

function ButtonDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] relative text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)] relative shrink-0">
      <span className="absolute inset-0 rounded-[6px] pointer-events-none bg-[#ede1d7]" />
      <span className="absolute inset-0 rounded-[6px] pointer-events-none shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)]" />
      <span className="relative text-[11px] font-medium leading-[16px] whitespace-nowrap text-[#524b47]">{label}</span>
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image src={imgNavLogo} alt="Souvenir logo" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[34px] tracking-[0.01em] leading-none text-black font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              Souvenir
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Product
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image src={imgChevron} alt="" fill className="object-contain" unoptimized />
              </span>
            </button>
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Solution
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image src={imgChevron} alt="" fill className="object-contain" unoptimized />
              </span>
            </button>
            <button className="text-[14px] text-[#524b47] leading-[22px]">Pricing</button>
            <button className="text-[14px] text-[#524b47] leading-[22px]">About</button>
          </div>
          <div className="flex items-center gap-4">
            <ButtonGhost>Sign in</ButtonGhost>
            <ButtonDark>Get started for free</ButtonDark>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function SectionDivider() {
  return <div className="h-px bg-[#d1c6bd] w-full shrink-0" />;
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <p
      id={id}
      className="text-[24px] text-black leading-[32px] font-normal whitespace-nowrap scroll-mt-10"
      style={{ fontFamily: "var(--font-besley)" }}
    >
      {children}
    </p>
  );
}

// ─── TOC sidebar ──────────────────────────────────────────────────────────────
const TOC_ITEMS = [
  { num: "01", label: "What Are Cookies",       href: "#s01" },
  { num: "02", label: "Types of Cookies We Use", href: "#s02" },
  { num: "03", label: "Third-Party Sharing",    href: "#s03" },
  { num: "04", label: "Consent",                href: "#s04" },
  { num: "05", label: "Your Rights",            href: "#s05" },
  { num: "06", label: "Retention",              href: "#s06" },
  { num: "07", label: "Changes",                href: "#s07" },
  { num: "08", label: "Contact",                href: "#s08" },
];

function TableOfContents() {
  return (
    <aside className="w-[317px] shrink-0 flex flex-col gap-2 sticky top-8 self-start">
      <p
        className="text-[13px] text-black leading-[16px]"
        style={{ fontFamily: "var(--font-geist-mono)" }}
      >
        On this page
      </p>
      <div className="h-px bg-[#d1c6bd] w-full" />
      {TOC_ITEMS.map(({ num, label, href }) => (
        <a
          key={num}
          href={href}
          className="flex gap-[3px] items-baseline whitespace-nowrap hover:opacity-70 transition-opacity"
        >
          <span
            className="text-[13px] text-[#6a625d] leading-[16px]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {num}
          </span>
          <span
            className="text-[13px] text-[#3b3632] leading-[16px]"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            {" "}{label}
          </span>
        </a>
      ))}
    </aside>
  );
}

// ─── Policy content ───────────────────────────────────────────────────────────
function PolicyContent() {
  const body = "text-[16px] text-[#6a625d] leading-[22px]";
  const subHead = "text-[16px] text-black leading-[22px] whitespace-nowrap";

  return (
    <div className="flex flex-col gap-8 w-[990px] shrink-0">

      {/* 01 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s01">01 What Are Cookies</SectionHeading>
        <p className={body}>
          Cookies are small text files stored on your device. Similar technologies include web beacons, pixels,
          local storage, and session storage. This Policy explains how Souvenir, Inc. uses these technologies on
          getsouvenir.com. Read together with our Privacy Policy and Terms of Service. Applies to users in the
          United States, Canada, and India.
        </p>
      </div>

      <SectionDivider />

      {/* 02 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s02">02 Types of Cookies We Use</SectionHeading>

        <div className="flex flex-col gap-4">
          <p className={subHead} style={{ fontFamily: "var(--font-besley)" }}>Strictly Necessary</p>
          <p className={body}>
            Essential for platform function. Cannot be disabled.<br />
            Examples: Auth0 session tokens, CSRF protection, load balancing<br />
            Duration: Session or up to 30 days
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className={subHead} style={{ fontFamily: "var(--font-besley)" }}>Functional</p>
          <p className={body}>
            Remember preferences and settings.<br />
            Examples: Language, model defaults, theme<br />
            Duration: Up to 12 months
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className={subHead} style={{ fontFamily: "var(--font-besley)" }}>Performance</p>
          <p className={body}>
            Understand how users interact with the Services.<br />
            Examples: Mixpanel, Google Analytics<br />
            Duration: Up to 24 months
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <p className={subHead} style={{ fontFamily: "var(--font-besley)" }}>Analytics</p>
          <p className={body}>
            Monitor speed and reliability.<br />
            Examples: Error tracking, page load timing<br />
            Duration: Up to 12 months
          </p>
          <div className={body}>
            <p>No advertising cookies</p>
            <p>We do not use advertising or behavioral targeting cookies.</p>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* 03 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s03">03 Third-Party Sharing</SectionHeading>
        <div className={body}>
          <ul className="list-disc">
            <li className="ml-6">AI service providers, for model routing and processing</li>
            <li className="ml-6">Auth0, for authentication and session management</li>
            <li className="ml-6">Mixpanel and Google Analytics, for aggregated usage insights</li>
            <li className="ml-6">AWS, for hosting and infrastructure</li>
            <li className="ml-6">Stripe, for payment processing including UPI Autopay</li>
          </ul>
          <p>We do not sell or share personal data for advertising.</p>
        </div>
      </div>

      <SectionDivider />

      {/* 04 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s04">04 Consent</SectionHeading>
        <p className={body}>
          We display an opt-in cookie consent banner to all users. Non-essential cookies do not activate until
          you consent. You can manage preferences via the banner, the footer link, or your browser settings.
        </p>
      </div>

      <SectionDivider />

      {/* 05 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s05">05 Your Rights</SectionHeading>
        <div className={body}>
          <p>USA (CCPA/CPRA)</p>
          <p>Right to know, delete, opt out. Contact info@getsouvenir.com.</p>
          <p>Canada (PIPEDA)</p>
          <p>Meaningful consent required. Withdraw anytime via info@getsouvenir.com.</p>
          <p>India (DPDP Act)</p>
          <p>Data Principal rights preserved. Contact info@getsouvenir.com.</p>
        </div>
      </div>

      <SectionDivider />

      {/* 06 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s06">06 Retention</SectionHeading>
        <ul className={`${body} list-disc`}>
          <li className="ml-6">Session cookies: Deleted on logout or browser close</li>
          <li className="ml-6">Functional cookies: Up to 12 months</li>
          <li className="ml-6">Analytics data: Up to 24 months</li>
        </ul>
      </div>

      <SectionDivider />

      {/* 07 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s07">07 Changes</SectionHeading>
        <p className={body}>
          We provide 14 days&apos; notice for material changes to this policy.
        </p>
      </div>

      <SectionDivider />

      {/* Standalone response time note (between 07 and 08) */}
      <p className={body}>
        We will respond within 30 days (or sooner if required by applicable law).
      </p>

      {/* Thicker visual break before 08 */}
      <div className="h-px bg-[#b8a89a] w-full shrink-0" />

      {/* 08 */}
      <div className="flex flex-col gap-4">
        <SectionHeading id="s08">08 Contact</SectionHeading>
        <div className={body}>
          <p>Company - Souvenir, Inc.</p>
          <p>
            Email -{" "}
            <a href="mailto:info@getsouvenir.com" className="underline decoration-[#6a625d] underline-offset-2 hover:opacity-70 transition-opacity">
              info@getsouvenir.com
            </a>
          </p>
          <p>
            Website -{" "}
            <a href="https://getsouvenir.com/" target="_blank" rel="noopener noreferrer" className="underline decoration-[#6a625d] underline-offset-2 hover:opacity-70 transition-opacity">
              getsouvenir.com
            </a>
          </p>
        </div>
      </div>

    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks: Record<string, string[]> = {
    Product:   ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company:   ["About", "Blogs"],
    Legal:     ["Terms of Service", "Privacy Policy", "Other Policies"],
  };

  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-90" />
      </div>
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8">
        <div className="flex gap-[120px] items-start">
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex-shrink-0">
                <Image src={imgFooterLogo} alt="" fill className="object-contain" unoptimized />
              </div>
              <span className="text-[34px] text-white tracking-[0.01em] font-normal leading-none" style={{ fontFamily: "var(--font-besley)" }}>
                Souvenir
              </span>
            </div>
            <p className="text-[24px] text-[#ede1d7] leading-[32px] font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              The centralized workspace brain. A coordinated team of agents.
            </p>
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
                Newsletter
              </label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0" style={{ fontFamily: "var(--font-besley)" }}>
                  your@company.com
                </span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-1 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitIcon} alt="" fill className="object-contain" unoptimized />
                  </span>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4 w-[164px]">
                <p className="text-[24px] text-white font-normal leading-[32px] overflow-hidden text-ellipsis" style={{ fontFamily: "var(--font-besley)" }}>
                  {title}
                </p>
                <div className="flex flex-col gap-[10px]">
                  {links.map((link) => (
                    <a key={link} href="#" className="text-[14px] text-[#ede1d7] leading-[22px] hover:text-white transition-colors overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px bg-white/20 w-full" />
        <div className="flex items-center gap-8">
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="relative size-[7px] flex-shrink-0">
            <Image src={imgFooterDot} alt="" fill className="object-contain" unoptimized />
          </div>
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto">

        {/* Page header */}
        <div className="pt-10 flex flex-col gap-4">
          <Badge label="Privacy & Data·Cookie Policy" />
          <h1
            className="text-[36px] text-black leading-[42px] font-normal"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Cookie and Tracking Policy
          </h1>
          <p className="text-[16px] leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
            <span className="text-[#6a625d]">Last updated</span>
            <span className="text-black"> April 7, 2026</span>
          </p>
        </div>

        {/* Full-width rule */}
        <div className="mt-16 mb-16 h-px bg-[#d1c6bd] w-full" />

        {/* Two-column: TOC + content */}
        <div className="flex gap-5 items-start pb-[100px]">
          <TableOfContents />
          <PolicyContent />
        </div>

      </div>

      <div className="max-w-[1328px] mx-auto pb-8">
        <Footer />
      </div>
    </div>
  );
}

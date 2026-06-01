import Image from "next/image";

// ─── ASSET URLS ───────────────────────────────────────────────────────────────
const imgNavLogo    = "https://www.figma.com/api/mcp/asset/2d4f59b8-f114-4124-8924-aa6e85876f24";
const imgNavChevron = "https://www.figma.com/api/mcp/asset/a883394e-63b7-4588-958e-5bae52cc405c";
const imgFooterBg   = "https://www.figma.com/api/mcp/asset/0c94c538-868c-4f86-9fb6-52c33ce6402a";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/af763399-7236-4124-813e-ef6aedbdf9c9";
const imgFooterArrow = "https://www.figma.com/api/mcp/asset/60acd14c-30c5-4edd-9d9b-46264b1e9fb3";
const imgFooterLine  = "https://www.figma.com/api/mcp/asset/f8ca8ef8-e266-43a2-afa4-994a16207d3e";
const imgFooterDot   = "https://www.figma.com/api/mcp/asset/024f73ea-d389-4f2c-acc9-2f46acc3a978";

// ─── SHARED BUTTONS ───────────────────────────────────────────────────────────
function ButtonGhost({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7]">
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function ButtonDark({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)]">
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image src={imgNavLogo} alt="Souvenir" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[34px] tracking-[0.01em] leading-none text-black font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              Souvenir
            </span>
          </div>
          <div className="flex items-center gap-4">
            {["Product", "Solution"].map((item) => (
              <button key={item} className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
                {item}
                <span className="size-4 relative ml-0.5 flex-shrink-0">
                  <Image src={imgNavChevron} alt="" fill className="object-contain" unoptimized />
                </span>
              </button>
            ))}
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

// ─── DIVIDER ─────────────────────────────────────────────────────────────────
function Divider({ className = "" }: { className?: string }) {
  return <div className={`w-full h-px bg-[#d1c6bd] shrink-0 ${className}`} />;
}

// ─── TABLE OF CONTENTS ────────────────────────────────────────────────────────
const tocItems = [
  { num: "01", label: "Age Requirement",              href: "#age-requirement" },
  { num: "02", label: "Prohibited Content",           href: "#prohibited-content" },
  { num: "03", label: "AI Assistants",                href: "#ai-assistants" },
  { num: "04", label: "Brain & Automation",           href: "#brain-automation" },
  { num: "05", label: "Memory and Pins",              href: "#memory-pins" },
  { num: "06", label: "Code Execution",               href: "#code-execution" },
  { num: "07", label: "Teams",                        href: "#teams" },
  { num: "08", label: "Provider Compliance",          href: "#provider-compliance" },
  { num: "09", label: "DMCA Takedowns",               href: "#dmca-takedowns" },
  { num: "10", label: "Enforcement",                  href: "#enforcement" },
  { num: "11", label: "Reporting",                    href: "#reporting" },
  { num: "12", label: "Changes",                      href: "#changes" },
  { num: "13", label: "Contact",                      href: "#contact" },
];

function TableOfContents() {
  return (
    <aside className="w-[317px] flex-shrink-0 sticky top-8 self-start flex flex-col gap-2">
      <span className="font-mono text-[13px] leading-[16px] text-black">On this page</span>
      <Divider />
      {tocItems.map(({ num, label, href }) => (
        <a key={num} href={href} className="font-mono text-[13px] leading-[16px] hover:opacity-80 transition-opacity">
          <span className="text-[#6a625d]">{num}</span>
          <span className="text-black"> </span>
          <span className="text-[#3b3632]">{label}</span>
        </a>
      ))}
    </aside>
  );
}

// ─── BULLET LIST ─────────────────────────────────────────────────────────────
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc text-[#6a625d] text-[16px] leading-[22px] font-normal flex flex-col gap-0">
      {items.map((item, i) => (
        <li key={i} className="ml-6 font-['Geist_Variable',sans-serif]">{item}</li>
      ))}
    </ul>
  );
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function PolicySection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <>
      <section id={id} className="flex flex-col gap-4 w-full">
        <h2 className="text-[24px] font-normal leading-[32px] text-black whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
          {title}
        </h2>
        <div className="flex flex-col gap-4">{children}</div>
      </section>
      <Divider />
    </>
  );
}

// ─── BODY TEXT ────────────────────────────────────────────────────────────────
function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] leading-[22px] text-[#6a625d] font-normal">
      {children}
    </p>
  );
}

// ─── SUB-SECTION ─────────────────────────────────────────────────────────────
function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-[16px] leading-[22px] text-black font-normal" style={{ fontFamily: "var(--font-besley)" }}>
        {title}
      </p>
      {children}
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  const links = {
    Product:   ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company:   ["About", "Blogs"],
    Legal:     ["Terms of Service", "Privacy Policy", "Other Policies"],
  };
  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      <div className="absolute inset-0 rounded-[16px] overflow-hidden">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFooterBg} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8">
        <div className="flex gap-[120px] items-start">
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex-shrink-0">
                <img alt="Souvenir" className="absolute block inset-0 w-full h-full object-contain" src={imgFooterLogo} />
              </div>
              <span className="text-[34px] text-white tracking-[0.01em] font-normal leading-none" style={{ fontFamily: "var(--font-besley)" }}>
                Souvenir
              </span>
            </div>
            <p className="text-[24px] text-[#ede1d7] leading-[32px] font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              The centralized workspace brain. A coordinated team of agents.
            </p>
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0" style={{ fontFamily: "var(--font-besley)" }}>
                  your@company.com
                </span>
                <button className="relative bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-1 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
                  <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08]" />
                  <span className="relative z-10 flex items-center gap-1">
                    <span className="relative size-4 flex-shrink-0">
                      <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgFooterArrow} />
                    </span>
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {(Object.entries(links) as [string, string[]][]).map(([title, items]) => (
              <div key={title} className="flex flex-col gap-4 w-[164px]">
                <p className="text-[24px] text-white font-normal leading-[32px]" style={{ fontFamily: "var(--font-besley)" }}>{title}</p>
                <div className="flex flex-col gap-[10px]">
                  {items.map((item) => (
                    <a key={item} href="#" className="text-[14px] text-[#ede1d7] leading-[22px] hover:text-white transition-colors" style={{ fontFamily: "var(--font-besley)" }}>
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-px w-full">
          <img alt="" className="absolute block inset-0 w-full h-full" src={imgFooterLine} />
        </div>
        <div className="flex items-center gap-8">
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="relative size-[7px] flex-shrink-0">
            <img alt="" className="absolute block inset-0 w-full h-full" src={imgFooterDot} />
          </div>
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AcceptableUsePolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto pb-0 flex flex-col gap-16 pt-4">

        {/* ── Page header ── */}
        <div className="flex flex-col gap-4">
          {/* Badge */}
          <span className="inline-flex items-center justify-center overflow-clip px-[5px] py-[2px] rounded-[6px] shadow-[0px_1.323px_1.985px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)] relative self-start">
            <span className="absolute inset-0 rounded-[6px] bg-[#ede1d7] pointer-events-none" />
            <span className="absolute inset-0 rounded-[6px] pointer-events-none shadow-[inset_0px_1.323px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1.323px_0px_0px_rgba(106,98,93,0.1)]" />
            <span className="relative text-[11px] font-medium leading-[16px] whitespace-nowrap text-[#524b47]">
              Platform Terms · Acceptable Use Policy
            </span>
          </span>
          {/* Heading */}
          <h1 className="text-[36px] font-normal leading-[42px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
            Acceptable Use Policy
          </h1>
          {/* Date */}
          <p className="text-[16px] leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
            <span className="text-[#6a625d]">Last updated</span>
            <span className="text-black"> April 7, 2026</span>
          </p>
        </div>

        {/* Full-width divider */}
        <Divider />

        {/* ── Two-column layout ── */}
        <div className="flex gap-5 items-start w-full">

          {/* Left: sticky TOC */}
          <TableOfContents />

          {/* Right: legal content */}
          <div className="flex flex-col gap-8 flex-1 min-w-0 pb-16">

            {/* 01 Age Requirement */}
            <PolicySection id="age-requirement" title="01 Age Requirement">
              <Body>
                You must be at least 18 years old. We enforce this via date-of-birth verification. Accounts identified as under-18 are immediately terminated.
              </Body>
            </PolicySection>

            {/* 02 Prohibited Content */}
            <PolicySection id="prohibited-content" title="02 Prohibited Content">
              <Body>
                You may not use Souvenir to generate, upload, share, or otherwise engage with content that violates this section.
              </Body>

              <SubSection title="2.1 Sexually Explicit Content">
                <Body>Prohibited across all models without exception.</Body>
              </SubSection>

              <SubSection title="2.2 Child Sexual Abuse Material (CSAM)">
                <Body>
                  Absolute zero-tolerance. We report CSAM to NCMEC per 18 U.S.C. § 2258A. Immediate termination and law enforcement referral.
                </Body>
              </SubSection>

              <SubSection title="2.3 Violence and Terrorism">
                <BulletList items={[
                  "Promoting or glorifying terrorism or violent extremism",
                  "Instructions for weapons or explosives",
                  "Graphic real-world violence",
                  "Threats of violence",
                ]} />
              </SubSection>

              <SubSection title="2.4 Self-Harm">
                <BulletList items={[
                  "Promoting suicide or self-injury",
                  "Glorifying eating disorders",
                ]} />
              </SubSection>

              <SubSection title="2.5 Hate Speech">
                <BulletList items={[
                  "Attacks based on protected characteristics",
                  "Harassment, bullying, doxxing",
                ]} />
              </SubSection>

              <SubSection title="2.6 Deception">
                <BulletList items={[
                  "Impersonation without consent",
                  "Phishing and scam materials",
                  "Disinformation and deepfakes",
                  "Misrepresenting AI outputs as human-created",
                  "Academic dishonesty",
                ]} />
              </SubSection>

              <SubSection title="2.7 Privacy Violations">
                <BulletList items={[
                  "Unauthorized collection of personal information",
                  "Stalking or surveillance",
                  "Doxxing",
                ]} />
              </SubSection>

              <SubSection title="2.8 Malware and System Abuse">
                <BulletList items={[
                  "Malicious code generation",
                  "Unauthorized access attempts",
                  "Circumventing safety filters or prompt injection",
                  "Bypassing rate limits",
                ]} />
              </SubSection>

              <SubSection title="2.9 Illegal Activity">
                <BulletList items={[
                  "Facilitating illegal activity under US, Canadian, or Indian law",
                  "Controlled substances",
                  "Human trafficking",
                ]} />
              </SubSection>

              <SubSection title="2.10 Intellectual Property Infringement">
                <BulletList items={[
                  "Reproducing copyrighted material without authorization",
                  "Trademark, patent, or trade secret infringement",
                  "Circumventing DRM",
                ]} />
              </SubSection>
            </PolicySection>

            {/* 03 AI Assistants */}
            <PolicySection id="ai-assistants" title="03 AI Assistants">
              <Body>
                Builders of custom AI Assistants must ensure instructions comply with this Acceptable Use Policy, do not impersonate real individuals, and do not bypass safety filters. Users of shared AI Assistants remain responsible for their own conduct.
              </Body>
            </PolicySection>

            {/* 04 Brain & Automation */}
            <PolicySection id="brain-automation" title="04 Brain & Automation">
              <Body>
                You are responsible for all automation outputs. Automations must not produce prohibited content or circumvent platform limits.
              </Body>
            </PolicySection>

            {/* 05 Memory and Pins */}
            <PolicySection id="memory-pins" title="05 Memory and Pins">
              <Body>
                You can view, edit, and delete your memory and Pins from Settings. Do not store others&apos; personal information without consent. Memory contents are subject to the same prohibited content rules as all other Materials.
              </Body>
            </PolicySection>

            {/* 06 Code Execution */}
            <PolicySection id="code-execution" title="06 Code Execution">
              <Body>
                User-submitted or AI-generated code is executed in isolated Docker sandbox containers. You are responsible for any code you submit or execute. Do not use the code execution feature to generate malware, attempt unauthorized access, or circumvent security measures.
              </Body>
            </PolicySection>

            {/* 07 Teams */}
            <PolicySection id="teams" title="07 Teams">
              <Body>
                Workspace administrators are responsible for team compliance. Content shared in team workspaces must comply with this Acceptable Use Policy and your organization&apos;s own policies.
              </Body>
            </PolicySection>

            {/* 08 Provider Compliance */}
            <PolicySection id="provider-compliance" title="08 Provider Compliance">
              <Body>
                You must comply with each upstream AI provider&apos;s terms (OpenAI, Anthropic, Google, Mistral). Do not use Outputs to train competing models or represent Outputs as human-generated.
              </Body>
            </PolicySection>

            {/* 09 DMCA Takedowns */}
            <PolicySection id="dmca-takedowns" title="9 DMCA Takedowns">
              <BulletList items={[
                "First strike: Content removed, warning issued.",
                "Second strike: Content removed, warning, feature restrictions.",
                "Third strike: Account terminated.",
              ]} />
              <p className="text-[16px] leading-[22px] text-[#6a625d]">
                Full DMCA procedures at{" "}
                <a href="https://www.claudeusercontent.com/dmca.html" target="_blank" className="underline underline-offset-2 hover:opacity-80">
                  our DMCA page
                </a>
                .
              </p>
            </PolicySection>

            {/* 10 Enforcement */}
            <PolicySection id="enforcement" title="10 Enforcement">
              <Body>
                Actions range from warnings to immediate termination and law enforcement reporting. CSAM, terrorism, and imminent violence trigger immediate termination without warning.
              </Body>
            </PolicySection>

            {/* 11 Reporting */}
            <PolicySection id="reporting" title="11 Reporting">
              <p className="text-[16px] leading-[22px] text-[#6a625d]">
                Report violations to{" "}
                <a href="mailto:info@getsouvenir.com" className="underline underline-offset-2 hover:opacity-80">
                  info@getsouvenir.com
                </a>
                .
              </p>
            </PolicySection>

            {/* 12 Changes */}
            <PolicySection id="changes" title="12 Changes">
              <Body>
                We provide at least 14 days&apos; notice for material changes to this policy.
              </Body>
            </PolicySection>

            {/* 13 Contact */}
            <section id="contact" className="flex flex-col gap-4 w-full">
              <h2 className="text-[24px] font-normal leading-[32px] text-black whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
                13 Contact
              </h2>
              <div className="flex flex-col gap-0 text-[16px] leading-[22px] text-[#6a625d]">
                <p>Company - Souvenir, Inc.</p>
                <p>
                  Email -{" "}
                  <a href="mailto:info@getsouvenir.com" className="underline underline-offset-2 hover:opacity-80">
                    info@getsouvenir.com
                  </a>
                </p>
                <p>
                  Website -{" "}
                  <a href="https://getsouvenir.com/" target="_blank" className="underline underline-offset-2 hover:opacity-80">
                    getsouvenir.com
                  </a>
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-[1328px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

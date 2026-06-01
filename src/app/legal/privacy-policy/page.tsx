import Image from "next/image";

// ─── Asset URLs (Figma MCP, expire ~7 days) ───────────────────────────────────
const imgLogoUnion   = "https://www.figma.com/api/mcp/asset/7f2d9dc0-d9af-43f3-8a6c-68b643033271";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/3b58d0d7-bce1-4c08-ac65-c2d16ac2cf0c";
const imgFooterBg    = "https://www.figma.com/api/mcp/asset/74982765-99cb-421d-a38a-55e17640ae92";
const imgFooterLogo  = "https://www.figma.com/api/mcp/asset/d6ebf9eb-da7a-4cb5-bd91-451b326c69b5";
const imgSubmitIcon  = "https://www.figma.com/api/mcp/asset/2aee586a-46aa-4d30-be7e-3c69d67e163f";

// ─── Shared button primitives ─────────────────────────────────────────────────
function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      {children}
    </button>
  );
}

function ButtonDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="relative size-10 shrink-0">
              <Image src={imgLogoUnion} alt="Souvenir" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[34px] tracking-[0.01em] leading-none text-black font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              Souvenir
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Product
              <span className="relative size-4 ml-0.5 shrink-0">
                <Image src={imgChevronDown} alt="" fill className="object-contain" unoptimized />
              </span>
            </button>
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Solution
              <span className="relative size-4 ml-0.5 shrink-0">
                <Image src={imgChevronDown} alt="" fill className="object-contain" unoptimized />
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

// ─── Typography helpers ───────────────────────────────────────────────────────
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[24px] font-normal leading-[32px] text-black whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
      {children}
    </p>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] font-normal leading-[22px] text-black whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
      {children}
    </p>
  );
}

function Body({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`text-[16px] leading-[22px] text-[#6a625d] ${className}`}>
      {children}
    </p>
  );
}

function Bullets({ items }: { items: (string | React.ReactNode)[] }) {
  return (
    <ul className="list-disc text-[16px] leading-[22px] text-[#6a625d] flex flex-col gap-0">
      {items.map((item, i) => (
        <li key={i} className="ms-6">{item}</li>
      ))}
    </ul>
  );
}

function SectionDivider() {
  return <div className="w-full h-px bg-[#e5e5e5]" />;
}

// ─── TOC sidebar ──────────────────────────────────────────────────────────────
const TOC_SECTIONS = [
  { num: "01", title: "Overview" },
  { num: "02", title: "Information We Collect" },
  { num: "03", title: "How We Use Your Information" },
  { num: "04", title: "AI Models and Third-Party Processing" },
  { num: "05", title: "Data Storage and Retention" },
  { num: "06", title: "Data Sharing and Disclosure" },
  { num: "07", title: "International Data Transfers" },
  { num: "08", title: "Your Rights and Choices" },
  { num: "09", title: "Security" },
  { num: "10", title: "Team and Workspace Data" },
  { num: "11", title: "Children's Privacy" },
  { num: "12", title: "Cookies and Tracking" },
  { num: "13", title: "Do Not Track" },
  { num: "14", title: "Third-Party Links" },
  { num: "15", title: "Changes to This Policy" },
  { num: "16", title: "Contact" },
];

function Sidebar() {
  return (
    <div className="sticky top-6 flex flex-col gap-2 w-[317px] shrink-0" style={{ fontFamily: "var(--font-geist-mono, monospace)" }}>
      <p className="text-[13px] text-black leading-[16px]">On this page</p>
      <div className="w-full h-px bg-[#e5e5e5]" />
      {TOC_SECTIONS.map(({ num, title }) => (
        <a
          key={num}
          href={`#section-${num}`}
          className="text-[13px] leading-[16px] hover:text-black transition-colors"
          style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
        >
          <span className="text-[#6a625d]">{num}</span>
          <span className="text-[13px]"> </span>
          <span className="text-[#3b3632]">{title}</span>
        </a>
      ))}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = {
    Product:   ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company:   ["About", "Blogs"],
    Legal:     ["Terms of Service", "Privacy Policy", "Other Policies"],
  };
  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8 max-w-[1328px]">
        <div className="flex gap-[120px] items-start">
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex items-center gap-3">
              <div className="relative size-10 shrink-0">
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
              <label className="text-[14px] text-white leading-[22px]">Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">your@company.com</span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap shrink-0">
                  <span className="relative size-4 shrink-0">
                    <Image src={imgSubmitIcon} alt="" fill className="object-contain" unoptimized />
                  </span>
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4 w-[164px]">
                <p className="text-[24px] text-white font-normal leading-[32px] overflow-hidden text-ellipsis" style={{ fontFamily: "var(--font-besley)" }}>{title}</p>
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
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>© 2026 Souvenir Inc. Made with context.</p>
          <div className="size-1.5 rounded-full bg-[#f7f2ed]/60 shrink-0" />
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>v2.0 — June 2026</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Section wrapper ──────────────────────────────────────────────────────────
function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <div id={id} className="flex flex-col gap-4 w-full scroll-mt-24">
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      {/* Main content */}
      <div className="max-w-[1328px] mx-auto flex flex-col gap-16 pb-[100px]">

        {/* ── Page header ── */}
        <div className="flex flex-col gap-4">
          {/* Breadcrumb badge */}
          <span className="relative inline-flex items-center overflow-clip px-[5px] py-0.5 rounded-[6px] self-start shadow-[0px_1.323px_1.985px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]">
            <span className="absolute inset-0 rounded-[6px] bg-[#ede1d7] pointer-events-none" />
            <span className="absolute inset-0 rounded-[6px] pointer-events-none shadow-[inset_0px_1.323px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1.323px_0px_0px_rgba(106,98,93,0.1)]" />
            <span className="relative text-[11px] font-medium leading-[16px] text-[#524b47] whitespace-nowrap">
              Privacy &amp; Data · Privacy Policy
            </span>
          </span>

          <h1 className="text-[36px] font-normal leading-[42px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
            Privacy Policy
          </h1>

          <p className="text-[16px] leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
            <span className="text-[#6a625d]">Last updated</span>
            <span className="text-black"> April 7, 2026</span>
          </p>
        </div>

        {/* Full-width divider */}
        <div className="w-full h-px bg-[#e5e5e5]" />

        {/* ── Two-column layout ── */}
        <div className="flex gap-5 items-start">

          {/* Left: sticky TOC */}
          <Sidebar />

          {/* Right: content */}
          <div className="flex flex-col gap-8 flex-1 min-w-0">

            {/* 01 Overview */}
            <Section id="section-01">
              <SectionHeading>01 Overview</SectionHeading>
              <div className="flex flex-col gap-0 text-[16px] leading-[22px] text-[#6a625d]">
                <Body>
                  {`Souvenir, Inc. ("Souvenir," "we," "us," or "our") operates the Souvenir platform at getsouvenir.com, a centralized workspace brain that connects multiple frontier AI models and tools into a single workspace with persistent context, intelligent model routing, automation, and organizational tools.`}
                </Body>
                <Body>
                  This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you access or use our Services. It applies to all users of our Services in the United States, Canada, and India, and includes jurisdiction-specific disclosures for each.
                </Body>
                <Body>
                  By creating an account or using our Services, you acknowledge that you have read and understood this Privacy Policy. Where required by applicable law, we will obtain your consent before processing your personal information.
                </Body>
              </div>
            </Section>

            <SectionDivider />

            {/* 02 Information We Collect */}
            <Section id="section-02">
              <SectionHeading>02 Information We Collect</SectionHeading>

              <div className="flex flex-col gap-4">
                <SubHeading>2.1 Information You Provide</SubHeading>
                <Bullets items={[
                  "Account information: name, email address, password, and account credentials",
                  "Inputs: prompts, files, images, code, instructions, and other content you submit",
                  "Workspace data: Project folders, automations, saved context, AI Assistants, Pins, and AI-generated Outputs",
                  "Payment information: billing details processed by Stripe. We do not store credit card numbers, bank account details, or UPI IDs on our servers.",
                  "Communications: support inquiries, feedback, and correspondence with us",
                ]} />
              </div>

              <div className="flex flex-col gap-4">
                <SubHeading>2.2 Information Collected Automatically</SubHeading>
                <Bullets items={[
                  "Device and browser information: type, operating system, screen resolution, browser version",
                  "IP address and approximate geographic location (country/region level). We use ip-api.com to resolve your IP address to city, region, and timezone for localization purposes.",
                  "Usage data: features accessed, interaction patterns, session duration, activity timestamps",
                  "Log data: server logs including timestamps, error reports, referring URLs. We use Sentry for error monitoring.",
                  "Analytics data: we use Mixpanel and Google Analytics for aggregated usage insights",
                  "Cookies and similar technologies: as described in our Cookie Policy",
                ]} />
              </div>

              <div className="flex flex-col gap-4">
                <SubHeading>2.3 Information from Third-Party Integrations</SubHeading>
                <Bullets items={[
                  "If you connect third-party services to your Souvenir account, we may access and process data necessary to enable those integrations, in accordance with the permissions you grant.",
                ]} />
              </div>
            </Section>

            <SectionDivider />

            {/* 03 How We Use Your Information */}
            <Section id="section-03">
              <SectionHeading>03 How We Use Your Information</SectionHeading>
              <div className="flex flex-col gap-0 text-[#6a625d]">
                <Body>We use collected information for the following purposes:</Body>
                <Bullets items={[
                  "To provide, operate, and maintain the platform, including persistent context and memory across automations",
                  "To route your Inputs to appropriate AI models based on your settings or our auto-routing algorithm",
                  "To process payments and manage your subscription",
                  "To improve output quality, system performance, and user experience",
                  "To support collaboration within shared workspaces and team accounts",
                  "To respond to support requests, user inquiries, and feedback",
                  "To monitor usage for abuse prevention, security, and enforcement of our Terms and AUP",
                  "To comply with legal obligations and protect our legal rights",
                  "To send transactional communications (account confirmations, billing notices, security alerts)",
                ]} />
                <Body className="mt-2 font-normal text-black">No training without consent</Body>
                <Body>We do not use your Inputs or Outputs to train our own AI models unless you explicitly opt in.</Body>
              </div>
            </Section>

            <SectionDivider />

            {/* 04 AI Models and Third-Party Processing */}
            <Section id="section-04">
              <SectionHeading>04 AI Models and Third-Party Processing</SectionHeading>
              <div className="flex flex-col gap-0 text-[#6a625d]">
                <Body>
                  Souvenir connects with third-party AI model providers and processing services. When you submit an Input, it is routed through OpenRouter, a third-party middleware service, to one or more of the following AI providers:
                </Body>
                <Bullets items={[
                  "OpenAI (United States), text and chat models",
                  "Anthropic (United States), text and chat models",
                  "Google Gemini (United States), text and chat models",
                  "Mistral AI (France), text, chat, and OCR models",
                ]} />
                <Body className="mt-2">All AI providers are based in the United States or the European Union.</Body>
                <Body>In addition to AI model providers, your content may be processed by the following services on our infrastructure:</Body>
                <Bullets items={[
                  "OpenRouter (United States), middleware that routes Inputs to AI providers",
                  "AWS Bedrock with Cohere embed-v4 (United States), generates semantic vector embeddings for search and memory",
                  "AWS Textract (United States), extracts text from uploaded documents and images via OCR",
                  "Mistral OCR API (France), alternative OCR for document processing on certain plans",
                  "Docker sandbox (United States), executes user-submitted or AI-generated code in isolated containers",
                  "PyMuPDF and python-pptx, local parsing of PDFs and PowerPoint files on our servers (no third-party data sharing)",
                ]} />
                <Body className="mt-2">
                  Each AI provider processes your data under their own terms and privacy policies. We share only the data necessary to fulfill your request. Under our API agreements with these providers, your Inputs and Outputs are not used for model training.
                </Body>
              </div>
            </Section>

            <SectionDivider />

            {/* 05 Data Storage and Retention */}
            <Section id="section-05">
              <SectionHeading>05 Data Storage and Retention</SectionHeading>
              <Bullets items={[
                "Your data is primarily stored on Amazon Web Services (AWS) infrastructure in the United States, region us-east-1",
                "User data, conversations, memories, and document embeddings are stored in a PostgreSQL database with pgvector extension",
                "Uploaded files and documents are stored in AWS S3",
                "API keys and credentials are stored securely in AWS Secrets Manager",
                "Data is retained for as long as your account is active or as needed to provide the Services",
                "You may request deletion of your data at any time by contacting info@getsouvenir.com",
                "Upon account termination, we will delete your Materials within 90 days, except where retention is required for legal, security, or compliance purposes",
                "Analytics data (Mixpanel, Google Analytics) is retained for up to 24 months",
                "Session cookies are deleted upon logout or browser close",
              ]} />
            </Section>

            <SectionDivider />

            {/* 06 Data Sharing and Disclosure */}
            <Section id="section-06">
              <SectionHeading>06 Data Sharing and Disclosure</SectionHeading>
              <div className="flex flex-col gap-0 text-[#6a625d]">
                <Body>We do not sell your personal data. We do not share your personal data for cross-context behavioral advertising.</Body>
                <Body>We may share data in the following limited circumstances:</Body>
                <Bullets items={[
                  "With AI model providers (OpenAI, Anthropic, Google, Mistral) via OpenRouter, to process Inputs and generate Outputs",
                  "With infrastructure providers: Stripe (payments), Auth0 (authentication), AWS (hosting, storage, OCR, embeddings), OpenRouter (model routing), Cohere (embeddings via AWS Bedrock), Sentry (error monitoring), ip-api.com (geolocation), Mixpanel and Google Analytics (analytics), and email service providers (transactional emails)",
                  "To comply with law: valid legal process, court orders, subpoenas, or regulatory requests from authorities in the US, Canada, or India",
                  "To protect rights and safety: enforcing our Terms, protecting users and the platform, or preventing fraud",
                  "In connection with a business transaction: if Souvenir, Inc. is involved in a merger, acquisition, or sale of assets",
                ]} />
              </div>
            </Section>

            <SectionDivider />

            {/* 07 International Data Transfers */}
            <Section id="section-07">
              <SectionHeading>07 International Data Transfers</SectionHeading>
              <div className="flex flex-col gap-0 text-[#6a625d]">
                <Body>Souvenir, Inc. is based in the United States. Your information is primarily stored and processed in the United States (AWS us-east-1). Mistral AI processes certain requests in France.</Body>
                <Body>For users in Canada, we ensure that personal information transferred outside Canada receives a comparable level of protection through contractual safeguards with our service providers, as required under PIPEDA.</Body>
                <Body>For users in India, cross-border data transfers are currently permitted under the Digital Personal Data Protection Act, 2023, unless the Central Government restricts transfers to specific jurisdictions. We will comply with any future restrictions.</Body>
              </div>
            </Section>

            <SectionDivider />

            {/* 08 Your Rights and Choices */}
            <Section id="section-08">
              <SectionHeading>08 Your Rights and Choices</SectionHeading>

              <div className="flex flex-col gap-4">
                <SubHeading>8.1 All Users</SubHeading>
                <div className="flex flex-col gap-0 text-[#6a625d]">
                  <Body>Regardless of your location, you may:</Body>
                  <Bullets items={[
                    "Access the personal data we hold about you",
                    "Correct inaccurate or incomplete data",
                    "Request deletion of your data",
                    "Export your data in a machine-readable format",
                    "Withdraw consent where processing is based on consent",
                    "Close your account at any time",
                  ]} />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubHeading>8.2 United States Residents</SubHeading>
                <div className="flex flex-col gap-0 text-[#6a625d]">
                  <Body>California (CCPA/CPRA): You have the right to know what personal information we collect, request deletion, opt out of sale or sharing (we do not sell or share personal information), and non-discrimination for exercising your privacy rights.</Body>
                  <Body>Other US State Privacy Laws: If you reside in a state with a comprehensive privacy law (Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, Iowa, among others), you may have similar rights.</Body>
                  <Body>
                    Contact{" "}
                    <a href="mailto:info@getsouvenir.com" className="underline decoration-solid">info@getsouvenir.com</a>
                    {" "}to exercise these rights. We will verify your identity before fulfilling requests.
                  </Body>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubHeading>8.3 Canadian Users (PIPEDA)</SubHeading>
                <div className="flex flex-col gap-0 text-[#6a625d]">
                  <Bullets items={[
                    "Access their personal information held by us",
                    "Challenge accuracy and have information amended",
                    "Withdraw consent, subject to legal or contractual restrictions",
                    "Know how personal information is used and to whom it has been disclosed",
                  ]} />
                  <Body className="mt-2">We obtain meaningful consent for collection, use, and disclosure. Express consent is required for sensitive information, including AI processing of your content.</Body>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubHeading>8.4 India Users (DPDP Act, 2023)</SubHeading>
                <div className="flex flex-col gap-0 text-[#6a625d]">
                  <Bullets items={[
                    "Access a summary of personal data processed",
                    "Correct and update inaccurate personal data",
                    "Erase personal data no longer necessary for its original purpose",
                    "Nominate another individual to exercise rights in event of death or incapacity",
                    "File a grievance and complain to the Data Protection Board of India",
                  ]} />
                  <Body className="mt-2">
                    We process your personal data based on your consent, which you may withdraw at any time by contacting{" "}
                    <a href="mailto:info@getsouvenir.com" className="underline decoration-solid">info@getsouvenir.com</a>.
                    {" "}Withdrawal does not affect prior lawful processing.
                  </Body>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <SubHeading>8.5 How to Exercise Your Rights</SubHeading>
                <ul className="list-disc text-[16px] leading-[22px] text-[#6a625d] ms-6">
                  <li>
                    Email —{" "}
                    <a href="mailto:info@getsouvenir.com" className="underline decoration-solid">info@getsouvenir.com</a>
                  </li>
                </ul>
              </div>

              <Body>We will respond within 30 days (or sooner if required by applicable law).</Body>
            </Section>

            <SectionDivider />

            {/* 09 Security */}
            <Section id="section-09">
              <SectionHeading>9 Security</SectionHeading>
              <div className="flex flex-col gap-0 text-[#6a625d]">
                <Body>We implement reasonable technical and organizational measures to protect your personal data, including encryption of data in transit (TLS/SSL) and at rest, role-based access controls, regular security assessments, secure authentication via Auth0, and secure credential storage via AWS Secrets Manager.</Body>
                <Body>No method of electronic transmission or storage is 100% secure. We cannot guarantee absolute security.</Body>
                <Body>In the event of a personal data breach, we will notify affected users and relevant authorities in accordance with applicable law, including US state breach notification laws (including Iowa Chapter 715C), PIPEDA in Canada, and the DPDP Act in India.</Body>
              </div>
            </Section>

            <SectionDivider />

            {/* 10 Team and Workspace Data */}
            <Section id="section-10">
              <SectionHeading>10 Team and Workspace Data</SectionHeading>
              <Bullets items={[
                "Workspace owners and administrators may control access permissions and account settings",
                "Content shared within a workspace may be visible to other members",
                "You are responsible for data you share within collaborative environments",
              ]} />
            </Section>

            <SectionDivider />

            {/* 11 Children's Privacy */}
            <Section id="section-11">
              <SectionHeading>{"11 Children's Privacy"}</SectionHeading>
              <Body>
                Souvenir is not intended for individuals under 18. We do not knowingly collect personal data from anyone under 18. If we learn we have, we will delete it promptly. Contact{" "}
                <a href="mailto:info@getsouvenir.com" className="underline decoration-solid text-[#6a625d]">info@getsouvenir.com</a>
                {" "}to report.
              </Body>
            </Section>

            <SectionDivider />

            {/* 12 Cookies and Tracking */}
            <Section id="section-12">
              <SectionHeading>12 Cookies and Tracking</SectionHeading>
              <Body>
                See our{" "}
                <a href="/legal/cookies" className="underline decoration-solid">Cookie Policy</a>
                . We display an opt-in cookie consent banner to all users.
              </Body>
            </Section>

            <SectionDivider />

            {/* 13 Do Not Track */}
            <Section id="section-13">
              <SectionHeading>13 Do Not Track</SectionHeading>
              <Body>
                We currently do not respond to "Do Not Track" browser signals. See our{" "}
                <a href="/legal/cookies" className="underline decoration-solid">Cookie Policy</a>
                {" "}for more details on tracking technologies.
              </Body>
            </Section>

            <SectionDivider />

            {/* 14 Third-Party Links */}
            <Section id="section-14">
              <SectionHeading>14 Third-Party Links</SectionHeading>
              <Body>We are not responsible for privacy practices of third-party websites linked from our Services.</Body>
            </Section>

            <SectionDivider />

            {/* 15 Changes to This Policy */}
            <Section id="section-15">
              <SectionHeading>15 Changes to This Policy</SectionHeading>
              <Body>{"We will provide at least 14 days' notice before material changes take effect. Continued use constitutes acceptance."}</Body>
            </Section>

            <SectionDivider />

            {/* 16 Contact */}
            <Section id="section-16">
              <SectionHeading>16 Contact</SectionHeading>
              <div className="flex flex-col gap-0 text-[#6a625d]">
                <Body>Company — Souvenir, Inc.</Body>
                <Body>
                  Email —{" "}
                  <a href="mailto:info@getsouvenir.com" className="underline decoration-solid">info@getsouvenir.com</a>
                </Body>
                <Body>
                  Website —{" "}
                  <a href="https://getsouvenir.com" className="underline decoration-solid">getsouvenir.com</a>
                </Body>
              </div>
            </Section>

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

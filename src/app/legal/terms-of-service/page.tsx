import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────
const imgNavLogo =
  "https://www.figma.com/api/mcp/asset/ac9c455c-b5ae-4b33-9869-d07b3d30e785";
const imgChevronDown =
  "https://www.figma.com/api/mcp/asset/0a82de4e-0d55-47b2-a8c5-ef016c845688";
const imgDividerFull =
  "https://www.figma.com/api/mcp/asset/7e1ffe6e-3137-4b2e-8545-44765395f85c";
const imgDividerToc =
  "https://www.figma.com/api/mcp/asset/8cf1f331-0fa4-4c6e-b2dd-82cb1d30c740";
const imgDividerSection =
  "https://www.figma.com/api/mcp/asset/1466740c-a752-40d3-bb33-7b183b8f38cd";
const imgFooterBg =
  "https://www.figma.com/api/mcp/asset/a59fe65e-c9e8-42ee-af46-d100e483a34d";
const imgFooterLogo =
  "https://www.figma.com/api/mcp/asset/a73086a9-0d1f-41d0-89b0-134102727aeb";
const imgFooterSubmitIcon =
  "https://www.figma.com/api/mcp/asset/fbf11d10-580c-41d2-a45b-8105650c3769";
const imgFooterArrow =
  "https://www.figma.com/api/mcp/asset/b4abd147-5b9b-4335-a6ec-aee4ae30e41b";
const imgFooterDivider =
  "https://www.figma.com/api/mcp/asset/036cec4b-1244-45d7-b830-664fa990bc34";
const imgFooterDot =
  "https://www.figma.com/api/mcp/asset/84b0f00d-9d3a-4cae-b6e9-2f06b866b3e7";

// ─── Shared components ────────────────────────────────────────────────────────
function ButtonGhost({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap">
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function ButtonDark({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap">
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10">{children}</span>
    </button>
  );
}

function SectionDivider() {
  return (
    <div className="relative h-px w-full shrink-0">
      <Image src={imgDividerSection} alt="" fill className="object-cover" unoptimized />
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 shrink-0">
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
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Product
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image src={imgChevronDown} alt="" fill className="object-contain" unoptimized />
              </span>
            </button>
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Solution
              <span className="size-4 relative ml-0.5 flex-shrink-0">
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

// ─── ToC sidebar ─────────────────────────────────────────────────────────────
const tocItems = [
  { num: "01", label: "Who We Are" },
  { num: "02", label: "Account Creation and Access" },
  { num: "03", label: "Use of Our Services" },
  { num: "04", label: "Inputs, Outputs, and Materials" },
  { num: "05", label: "Subscriptions and Billing" },
  { num: "06", label: "Intellectual Property" },
  { num: "07", label: "Copyright and DMCA Policy" },
  { num: "08", label: "Third-Party Provider Terms" },
  { num: "09", label: "Acceptable Use Policy" },
  { num: "10", label: "Disclaimers and Liability" },
  { num: "11", label: "General Terms" },
  { num: "12", label: "Dispute Resolution" },
];

function TableOfContents() {
  return (
    <aside className="flex flex-col gap-2 w-[317px] shrink-0 sticky top-8 self-start">
      <p className="text-[13px] text-black leading-[16px]" style={{ fontFamily: "var(--font-geist-mono, monospace)" }}>
        On this page
      </p>
      <div className="relative h-px w-full">
        <Image src={imgDividerToc} alt="" fill className="object-cover" unoptimized />
      </div>
      {tocItems.map(({ num, label }) => (
        <a
          key={num}
          href={`#section-${num}`}
          className="text-[13px] leading-[16px] hover:text-black transition-colors"
          style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
        >
          <span className="text-[#6a625d]">{num}</span>
          <span className="text-black"> {label}</span>
        </a>
      ))}
    </aside>
  );
}

// ─── Content sections ─────────────────────────────────────────────────────────
function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="text-[24px] text-black font-normal leading-[32px] whitespace-nowrap"
      style={{ fontFamily: "var(--font-besley)" }}
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] text-black font-normal leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
      {children}
    </p>
  );
}

function BodyText({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[16px] text-[#6a625d] font-normal leading-[22px]">
      {children}
    </p>
  );
}

function SubSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <SubHeading>{heading}</SubHeading>
      {children}
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative mx-[199px] rounded-[16px] overflow-hidden mt-16">
      <div className="absolute inset-0 -rotate-90">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
      </div>
      <div className="relative z-10 px-10 py-8 flex flex-col gap-8">
        <div className="flex gap-30 items-start">
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 relative shrink-0">
                  <Image src={imgFooterLogo} alt="Souvenir" fill className="object-contain" unoptimized />
                </div>
                <span className="text-[34px] tracking-[0.01em] leading-none text-white font-normal" style={{ fontFamily: "var(--font-besley)" }}>
                  Souvenir
                </span>
              </div>
              <p className="text-[24px] text-[#ede1d7] font-normal leading-[32px]" style={{ fontFamily: "var(--font-besley)" }}>
                The centralized workspace brain. A coordinated team of agents.
              </p>
            </div>
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
                Newsletter
              </label>
              <div className="bg-white flex items-center gap-0.5 px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
                  your@company.com
                </span>
                <div className="relative bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-1 px-2.5 pb-2 pt-1.5 rounded-[10px]">
                  <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
                  <div className="relative size-4 flex-shrink-0">
                    <Image src={imgFooterSubmitIcon} alt="" fill className="object-contain" unoptimized />
                  </div>
                  <div className="relative size-4 flex-shrink-0">
                    <Image src={imgFooterArrow} alt="" fill className="object-contain" unoptimized />
                  </div>
                  <span className="relative text-[14px] font-medium text-[#f7f2ed] leading-[22px] whitespace-nowrap">
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            {[
              { title: "Product", links: ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"] },
              { title: "Solutions", links: ["Businesses", "Individuals"] },
              { title: "Company", links: ["About", "Blogs"] },
              { title: "Legal", links: ["Terms of Service", "Privacy Policy", "Other Policies"] },
            ].map((col) => (
              <div key={col.title} className="flex flex-col gap-4 w-[164px]">
                <p className="text-[24px] text-white font-normal leading-[32px] overflow-hidden text-ellipsis" style={{ fontFamily: "var(--font-besley)" }}>
                  {col.title}
                </p>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <p key={link} className="text-[14px] text-[#ede1d7] leading-[22px] font-normal overflow-hidden text-ellipsis cursor-pointer hover:text-white transition-colors" style={{ fontFamily: "var(--font-besley)" }}>
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-px w-full">
          <Image src={imgFooterDivider} alt="" fill className="object-cover" unoptimized />
        </div>
        <div className="flex items-center gap-8">
          <p className="text-[14px] text-[#f7f2ed] text-center leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="relative size-[7px] flex-shrink-0">
            <Image src={imgFooterDot} alt="" fill className="object-contain" unoptimized />
          </div>
          <p className="text-[14px] text-[#f7f2ed] text-center leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#f7f2ed] flex flex-col pb-16">
      <Navbar />

      {/* Page header */}
      <div className="px-[200px] flex flex-col gap-4 mt-8">
        {/* Badge */}
        <span className="inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] shadow-[0px_1.323px_1.985px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)] relative self-start">
          <span className="absolute inset-0 rounded-[6px] bg-[#ede1d7] pointer-events-none" />
          <span className="absolute inset-0 rounded-[6px] shadow-[inset_0px_1.323px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1.323px_0px_0px_rgba(106,98,93,0.1)] pointer-events-none" />
          <span className="relative text-[11px] font-medium text-[#524b47] leading-[16px] whitespace-nowrap">
            Platform Terms · Terms of Service
          </span>
        </span>

        {/* Title */}
        <h1
          className="text-[36px] text-black font-normal leading-[42px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Terms of Service
        </h1>

        {/* Date */}
        <p className="text-[16px] leading-[22px] font-normal" style={{ fontFamily: "var(--font-besley)" }}>
          <span className="text-[#6a625d]">Last updated</span>
          <span className="text-black"> April 7, 2026</span>
        </p>
      </div>

      {/* Full-width divider */}
      <div className="relative h-px w-full px-[200px] mt-16 shrink-0">
        <Image src={imgDividerFull} alt="" fill className="object-cover" unoptimized />
      </div>

      {/* Two-column layout: ToC + content */}
      <div className="px-[200px] flex gap-5 items-start mt-16">
        <TableOfContents />

        {/* Main content */}
        <div className="flex flex-col gap-8 flex-1 min-w-0">

          {/* 01 Who We Are */}
          <div id="section-01" className="flex flex-col gap-4">
            <SectionHeading id="s01">01 Who We Are</SectionHeading>
            <div className="flex flex-col gap-0 text-[16px] text-[#6a625d] leading-[22px]">
              <p className="mb-0">
                Souvenir, Inc. is a Delaware C-Corporation (File No. 10526583) that operates Souvenir, the centralized workspace brain. We unify multiple frontier AI models and tools into a single workspace with persistent context, intelligent model routing, automation, and organizational tools.
              </p>
              <p className="mb-0">
                {`These Terms of Service ("Terms") govern your use of getsouvenir.com, the Souvenir web application, and any other products and services we may offer (together, our "Services"). They are a contract between you and Souvenir, Inc. ("Souvenir," "we," "us," or "our") and incorporate our Acceptable Use Policy, Privacy Policy, and Cookie Policy by reference.`}
              </p>
              <p>
                By creating an account or accessing our Services, you agree to these Terms. If you do not agree, do not use the Services. Our Services are available to users in the United States, Canada, and India.
              </p>
            </div>
          </div>

          <SectionDivider />

          {/* 02 Account Creation and Access */}
          <div id="section-02" className="flex flex-col gap-4">
            <SectionHeading id="s02">02 Account Creation and Access</SectionHeading>
            <SubSection heading="2.1 Minimum Age">
              <BodyText>
                You must be at least 18 years old, or the minimum age required in your jurisdiction, whichever is higher.
              </BodyText>
            </SubSection>
            <SubSection heading="2.2 Your Account">
              <BodyText>
                You must create an account with accurate, current, and complete information. You may not share login credentials. You are responsible for all account activity. Notify us of unauthorized access at info@getsouvenir.com. Close your account anytime by contacting info@getsouvenir.com.
              </BodyText>
            </SubSection>
            <SubSection heading="2.3 Team Accounts">
              <BodyText>
                {`If you use a Team Account, your organization's administrator may monitor and control your account, including access to Materials.`}
              </BodyText>
            </SubSection>
          </div>

          <SectionDivider />

          {/* 03 Use of Our Services */}
          <div id="section-03" className="flex flex-col gap-4">
            <SectionHeading id="s03">03 Use of Our Services</SectionHeading>
            <div className="text-[16px] text-[#6a625d] leading-[22px]">
              <p className="mb-0">You may use our Services only in compliance with these Terms and our Acceptable Use Policy.</p>
              <p className="mb-1">You may not:</p>
              <ol className="list-decimal ml-6 flex flex-col gap-0">
                <li>Use the Services in violation of any applicable law, including export control laws of the US, India, Canada, or other jurisdictions.</li>
                <li>Develop competing products, train AI or machine learning models, or resell the Services.</li>
                <li>Reverse engineer, decompile, or disassemble our Services, except where prohibited by applicable law.</li>
                <li>Scrape or harvest data from our Services except as permitted.</li>
                <li>Use our Services to gain unauthorized access to any system or to deceive any person.</li>
                <li>Infringe intellectual property or privacy rights.</li>
                <li>Access the Services through bots or automated means unless explicitly permitted.</li>
                <li>Engage in conduct that restricts others or exposes us or third parties to liability.</li>
              </ol>
            </div>
          </div>

          <SectionDivider />

          {/* 04 Inputs, Outputs, and Materials */}
          <div id="section-04" className="flex flex-col gap-4">
            <SectionHeading id="s04">04 Inputs, Outputs, and Materials</SectionHeading>
            <SubSection heading="4.1 Definitions">
              <BodyText>
                {`"Inputs" are content you submit (text, images, files, code). "Outputs" are AI-generated responses (text, images, code). Together, they are "Materials."`}
              </BodyText>
            </SubSection>
            <SubSection heading="4.2 Multi-Model Routing">
              <BodyText>
                Your Inputs are routed through OpenRouter, a third-party middleware, to one or more AI providers: OpenAI, Anthropic, Google Gemini, and Mistral AI. Your content may also be processed by AWS Bedrock (Cohere) for vector embeddings, AWS Textract or Mistral for OCR, and executed in isolated Docker sandbox containers for code execution. By using our Services, you consent to this processing. Each provider operates under its own terms.
              </BodyText>
            </SubSection>
            <SubSection heading="4.3 Ownership">
              <BodyText>
                You retain ownership of your Inputs. We assign to you all rights in Outputs to the extent we have such rights. You are responsible for ensuring your use of Materials complies with applicable law.
              </BodyText>
            </SubSection>
            <SubSection heading="4.4 No Training Clause">
              <BodyText>
                We do not use your Inputs or Outputs to train our own AI models unless you explicitly opt in.
              </BodyText>
            </SubSection>
            <SubSection heading="4.5 AI Output Disclaimer">
              <BodyText>
                AI-generated Outputs may be inaccurate, incomplete, or misleading. Outputs may contain hallucinations, factual errors, or biased content. You should independently verify Outputs before relying on them. Outputs do not constitute professional advice of any kind. AI-generated code may contain errors, security vulnerabilities, or unintended behavior. You are solely responsible for reviewing and testing any code before use in production environments.
              </BodyText>
            </SubSection>
            <SubSection heading="4.6 Similarity of Outputs">
              <BodyText>
                Outputs generated for you may be similar or identical to Outputs generated for other users.
              </BodyText>
            </SubSection>
          </div>

          <SectionDivider />

          {/* 05 Subscriptions and Billing */}
          <div id="section-05" className="flex flex-col gap-4">
            <SectionHeading id="s05">05 Subscriptions and Billing</SectionHeading>
            <SubSection heading="5.1 Pricing">
              <BodyText>
                Pricing is available at getsouvenir.com/pricing, denominated in USD. Prices exclude applicable taxes unless stated otherwise.
              </BodyText>
            </SubSection>
            <SubSection heading="5.2 Payment">
              <BodyText>
                {`Payments are processed by Stripe, Inc. We accept major credit and debit cards and local payment methods, including UPI in India. Stripe's terms apply.`}
              </BodyText>
            </SubSection>
            <SubSection heading="5.3 Auto-Renewal">
              <div className="text-[16px] text-[#6a625d] leading-[22px]">
                <p className="mb-1">Paid subscriptions auto-renew unless cancelled before renewal. Cancel through your account settings online.</p>
                <ul className="list-disc ml-6 flex flex-col gap-0">
                  <li>California: Express consent required. 7+ days notice before price increases.</li>
                  <li>New York: 15 to 45 day renewal reminders. In-app cancel button.</li>
                  <li>Colorado: One-step online cancellation.</li>
                  <li>India (UPI Autopay): RBI-compliant e-mandate registration and 24-hour pre-debit notification.</li>
                </ul>
              </div>
            </SubSection>
            <SubSection heading="5.4 Refunds">
              <BodyText>
                Contact info@getsouvenir.com within 14 days. Determined case by case.
              </BodyText>
            </SubSection>
            <SubSection heading="5.5 Credits">
              <BodyText>
                Souvenir uses credits-only pricing. Paid credits roll over to the following billing cycle if unused. Free signup credits (1,000) are a one-time gift and do not roll over. Top-up credit packs purchased one-time are valid for 6 months.
              </BodyText>
            </SubSection>
          </div>

          <SectionDivider />

          {/* 06 Intellectual Property */}
          <div id="section-06" className="flex flex-col gap-4">
            <SectionHeading id="s06">06 Intellectual Property</SectionHeading>
            <BodyText>
              The Services, including our auto-routing algorithm, automation engine, multi-agent workforce, and context management system, are owned by Souvenir, Inc. We retain all rights, title, and interest.
            </BodyText>
          </div>

          <SectionDivider />

          {/* 07 Copyright and DMCA Policy */}
          <div id="section-07" className="flex flex-col gap-4">
            <SectionHeading id="s07">07 Copyright and DMCA Policy</SectionHeading>
            <p className="text-[16px] text-[#6a625d] leading-[22px]">
              {`Submit copyright infringement notices to our designated DMCA agent. Full DMCA procedures are available at `}
              <a href="https://getsouvenir.com/dmca" target="_blank" className="underline underline-offset-2 decoration-solid hover:text-black transition-colors">
                our DMCA page
              </a>
              {`.`}
            </p>
            <div className="text-[16px] text-[#6a625d] leading-[22px]">
              <p className="mb-0">Registration</p>
              <p>DMCA-1070683</p>
            </div>
          </div>

          <SectionDivider />

          {/* 08 Third-Party Provider Terms */}
          <div id="section-08" className="flex flex-col gap-4">
            <SectionHeading id="s08">08 Third-Party Provider Terms</SectionHeading>
            <BodyText>
              {`You must comply with each AI provider's usage policies. You may not represent AI Outputs as human-generated, use Outputs to train competing models, or use the Services for personalized legal, medical, or financial advice without professional oversight.`}
            </BodyText>
          </div>

          <SectionDivider />

          {/* 09 Acceptable Use Policy */}
          <div id="section-09" className="flex flex-col gap-4">
            <SectionHeading id="s09">9 Acceptable Use Policy</SectionHeading>
            <p className="text-[16px] text-[#6a625d] leading-[22px]">
              {`Our Acceptable Use Policy is incorporated by reference. Full text available at `}
              <a href="https://getsouvenir.com/aup" target="_blank" className="underline underline-offset-2 decoration-solid hover:text-black transition-colors">
                our AUP page
              </a>
              {`.`}
            </p>
          </div>

          <SectionDivider />

          {/* 10 Disclaimers and Liability */}
          <div id="section-10" className="flex flex-col gap-4">
            <SectionHeading id="s10">10 Disclaimers and Liability</SectionHeading>
            <div className="text-[16px] text-[#6a625d] leading-[22px]">
              <p className="mb-4">
                {`THE SERVICES AND OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES OF FITNESS, MERCHANTABILITY, ACCURACY, AND NON-INFRINGEMENT. THE SOUVENIR PARTIES' TOTAL AGGREGATE LIABILITY WILL NOT EXCEED THE GREATER OF AMOUNTS PAID IN THE PRIOR SIX MONTHS OR USD 100.`}
              </p>
              <p>
                You agree to indemnify Souvenir, Inc. from claims arising from your breach of these Terms, use of the Services, or violation of law. Consumer protection laws in Canada and India may limit certain disclaimers.
              </p>
            </div>
          </div>

          <SectionDivider />

          {/* 11 General Terms */}
          <div id="section-11" className="flex flex-col gap-4">
            <SectionHeading id="s11">11 General Terms</SectionHeading>
            <BodyText>
              {`We may revise these Terms with at least 14 days' notice. These Terms, our Privacy Policy, Cookie Policy, and Acceptable Use Policy form the entire agreement. Souvenir, Inc. is a Delaware C-Corporation. These Terms are governed by Delaware law. Canadian and Indian users retain mandatory consumer protection rights.`}
            </BodyText>
          </div>

          {/* 12 Dispute Resolution */}
          <div id="section-12" className="flex flex-col gap-4">
            <SectionHeading id="s12">12 Dispute Resolution</SectionHeading>
            <SubSection heading="Informal Resolution">
              <BodyText>
                Contact info@getsouvenir.com. A 30-day resolution attempt is required before formal proceedings.
              </BodyText>
            </SubSection>
            <SubSection heading="Governing Law">
              <BodyText>State of Delaware, United States.</BodyText>
            </SubSection>
            <SubSection heading="Arbitration">
              <BodyText>AAA Consumer Arbitration Rules. Delaware or video conference.</BodyText>
            </SubSection>
            <SubSection heading="Class Action Waiver">
              <BodyText>Disputes resolved individually to the extent permitted by law.</BodyText>
            </SubSection>
            <SubSection heading="Canada and India">
              <BodyText>Mandatory local consumer protection rights are preserved.</BodyText>
            </SubSection>
          </div>

          <SectionDivider />

          {/* 13 Contact */}
          <div id="section-13" className="flex flex-col gap-4">
            <SectionHeading id="s13">13 Contact</SectionHeading>
            <div className="text-[16px] text-[#6a625d] leading-[22px]">
              <p className="mb-0">Company — Souvenir, Inc.</p>
              <p className="mb-0">
                Email —{" "}
                <a href="mailto:info@getsouvenir.com" className="underline underline-offset-2 decoration-solid hover:text-black transition-colors">
                  info@getsouvenir.com
                </a>
              </p>
              <p>
                Website —{" "}
                <a href="https://getsouvenir.com" target="_blank" className="underline underline-offset-2 decoration-solid hover:text-black transition-colors">
                  getsouvenir.com
                </a>
              </p>
            </div>
          </div>

          <SectionDivider />
        </div>
      </div>

      <Footer />
    </main>
  );
}

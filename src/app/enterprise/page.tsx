import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────

// Navbar
const imgNavLogo =
  "https://www.figma.com/api/mcp/asset/7a29331f-c3ff-4ff9-bce0-32afe89b0bfe";
const imgChevronDown =
  "https://www.figma.com/api/mcp/asset/c7c9d94b-a6d8-433b-9b18-cfc3da8ed767";

// Hero section
const imgHeroLine =
  "https://www.figma.com/api/mcp/asset/7d23b111-8aa8-4b2b-ba11-6e7009e15384";
const imgHeroGroup =
  "https://www.figma.com/api/mcp/asset/59a6836b-d416-420f-93d3-56af8110e3dd";
const imgHeroGroup1 =
  "https://www.figma.com/api/mcp/asset/7e2c07c9-76ee-45c8-86bd-f3e2597022cd";
const imgHeroSlack =
  "https://www.figma.com/api/mcp/asset/dc801727-86b1-48f6-ade1-8b87f71ea0e7";
const imgHeroWord =
  "https://www.figma.com/api/mcp/asset/695339c1-d664-4e33-9027-a22a7308679d";
const imgHeroBorder =
  "https://www.figma.com/api/mcp/asset/554aa71f-0c4d-4b1a-987d-aac8dca55829";
const imgHeroBg =
  "https://www.figma.com/api/mcp/asset/50b99a35-b749-412e-8384-352f8f40ce02";

// Stats section
// (no image assets — all text)

// Brain × Slack section
const imgPinNoteRed =
  "https://www.figma.com/api/mcp/asset/71c58431-b699-4b81-921d-840e19473cd1";
const imgPinCodeGreen =
  "https://www.figma.com/api/mcp/asset/1ad2604d-4d8b-43f2-a8d3-e0e15e0dd2b8";
const imgRunningMan1 =
  "https://www.figma.com/api/mcp/asset/0a480855-a965-4790-a217-857b747bba9c";
const imgRunningMan2 =
  "https://www.figma.com/api/mcp/asset/bb86b5f5-e0a1-42e8-afce-49b041cc2db9";
const imgRunningMan3 =
  "https://www.figma.com/api/mcp/asset/32e9f52e-754b-43bd-92d1-b7b73d57c129";

// Multi-agent workforce section
const imgAgentLogo =
  "https://www.figma.com/api/mcp/asset/e88182cb-adcd-4407-84d8-25e1a8c8ecdd";
const imgAgentSlack =
  "https://www.figma.com/api/mcp/asset/e622d6f2-9c16-4642-9b8f-6d7b185a3939";
const imgAgentPersona =
  "https://www.figma.com/api/mcp/asset/9e4f10f5-150e-4d7e-b4b7-0f0df4fa67b9";
const imgAgentPersonaImg =
  "https://www.figma.com/api/mcp/asset/cfee8dde-d064-4753-a695-1a93d55d7985";
const imgAgentPinIcon =
  "https://www.figma.com/api/mcp/asset/db0cf8c4-c4da-47e3-9040-cd1d3888e1de";
const imgAgentPinIconBlue =
  "https://www.figma.com/api/mcp/asset/83eefe73-27c1-4b7d-bd5b-3903cc08020a";
const imgRunMan1 =
  "https://www.figma.com/api/mcp/asset/ea1d4e59-3037-46be-bd84-f4a7cdd059e7";
const imgRunMan2 =
  "https://www.figma.com/api/mcp/asset/e33eeb19-f9c1-4d15-8bd5-61cda3fbbb99";
const imgRunMan3 =
  "https://www.figma.com/api/mcp/asset/a3d2b6ca-811c-45d3-a74c-ff4bb0eaf13a";
const imgRunMan4 =
  "https://www.figma.com/api/mcp/asset/35228c13-6dfc-4b2a-811d-482961f281d1";
const imgRunMan5 =
  "https://www.figma.com/api/mcp/asset/a9218759-7ff4-42d8-b80e-b69e088fc192";

// Integrations section
const imgIntegSlack =
  "https://www.figma.com/api/mcp/asset/6e24a121-8ec7-4561-b87c-514b14928f45";
const imgIntegGmail =
  "https://www.figma.com/api/mcp/asset/0084e0c9-93f6-4210-acb7-af95fccc9bc8";
const imgIntegShopify =
  "https://www.figma.com/api/mcp/asset/c4b7a9d6-f021-47b6-a547-2be3b3077abe";
const imgIntegNotion =
  "https://www.figma.com/api/mcp/asset/edf7d5fb-e25a-469d-8b6f-e3a2a1033165";
const imgIntegGDrive =
  "https://www.figma.com/api/mcp/asset/7c0d1c9e-4cc8-41a9-92fb-d15ee8e46c54";
const imgIntegSalesforce =
  "https://www.figma.com/api/mcp/asset/c7446eb2-5af5-4c08-b50a-8c577ec298c9";
const imgIntegHubspot =
  "https://www.figma.com/api/mcp/asset/71810cf1-020f-4688-8658-87ebccbfabf8";
const imgIntegKlaviyo =
  "https://www.figma.com/api/mcp/asset/64054f6d-a081-4919-ad3d-22347a049702";
const imgIntegLinear =
  "https://www.figma.com/api/mcp/asset/1edf3f48-9350-4193-8963-0d5317309d27";
const imgIntegJira =
  "https://www.figma.com/api/mcp/asset/5818921b-7820-4273-b392-aff8ad60459c";
const imgIntegAsana =
  "https://www.figma.com/api/mcp/asset/0b52f08d-73d3-4db7-a7f1-b0ddde9fe320";
const imgIntegGithub =
  "https://www.figma.com/api/mcp/asset/52e71cd1-0661-442d-a0cf-6df04a82d543";
const imgIntegStripe =
  "https://www.figma.com/api/mcp/asset/6b1b8d11-546c-474b-ab35-8a49fc8b609b";
const imgIntegIntercom =
  "https://www.figma.com/api/mcp/asset/c52a28fe-1d3c-4a7b-869d-ba0f560cd6ce";
const imgIntegZendesk =
  "https://www.figma.com/api/mcp/asset/d9e8b74f-400a-4fe5-b111-96a4a1e2a8aa";
const imgIntegLinearBg =
  "https://www.figma.com/api/mcp/asset/5818921b-7820-4273-b392-aff8ad60459c";

// Footer
const imgFooterBg =
  "https://www.figma.com/api/mcp/asset/597bf73e-a5e1-46f6-a4b5-7663fb8dac31";
const imgFooterLogo =
  "https://www.figma.com/api/mcp/asset/d02045d6-d68c-44af-9e8f-ac81ad5af10b";
const imgFooterSubmit =
  "https://www.figma.com/api/mcp/asset/3902ee94-c2b3-4e4e-a078-0b8ae9faa388";
const imgFooterDivider =
  "https://www.figma.com/api/mcp/asset/bd6dc28e-a496-4e43-b99e-ed118153aa56";
const imgFooterDot =
  "https://www.figma.com/api/mcp/asset/3d6ecfad-1a1c-4aca-8178-f934c84a0bd6";

// ─── Shared components ────────────────────────────────────────────────────────

function ButtonGhost({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

function ButtonDark({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

function Badge({
  label,
  color = "neutral",
}: {
  label: string;
  color?: "neutral" | "brown" | "red" | "green";
}) {
  const styles = {
    neutral: {
      bg: "bg-[#ede1d7]",
      text: "text-[#524b47]",
      shadow:
        "shadow-[0px_1.323px_1.985px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]",
      inset:
        "shadow-[inset_0px_1.323px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1.323px_0px_0px_rgba(106,98,93,0.1)]",
    },
    brown: {
      bg: "bg-[#e6d5ca]",
      text: "text-[#683d1b]",
      shadow:
        "shadow-[0px_1.476px_2.214px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)]",
      inset:
        "shadow-[inset_0px_1.476px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.476px_0px_0px_rgba(126,84,53,0.1)]",
    },
    red: {
      bg: "bg-[#ffbfb6]",
      text: "text-[#7a201c]",
      shadow:
        "shadow-[0px_1px_1.5px_0px_rgba(24,2,2,0.2),0px_0px_0px_1px_rgba(159,38,35,0.5)]",
      inset:
        "shadow-[inset_0px_1px_0px_0px_rgba(253,231,231,0.7),inset_0px_-1px_0px_0px_rgba(159,38,35,0.1)]",
    },
    green: {
      bg: "bg-[#f7fee6]",
      text: "text-[#456211]",
      shadow:
        "shadow-[0px_1px_1.5px_0px_rgba(17,25,1,0.2),0px_0px_0px_1px_rgba(128,183,7,0.5)]",
      inset:
        "shadow-[inset_0px_1px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1px_0px_0px_rgba(128,183,7,0.1)]",
    },
  };
  const s = styles[color];
  return (
    <span
      className={`inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] ${s.shadow} relative shrink-0`}
    >
      <span
        className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.bg}`}
      />
      <span
        className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.inset}`}
      />
      <span
        className={`relative text-[11px] font-medium leading-[16px] whitespace-nowrap ${s.text}`}
      >
        {label}
      </span>
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image
                src={imgNavLogo}
                alt="Souvenir logo"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <span
              className="text-[34px] tracking-[0.01em] leading-none text-black font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Souvenir
            </span>
          </div>

          {/* Nav links */}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Product
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image
                  src={imgChevronDown}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </span>
            </button>
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Solution
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image
                  src={imgChevronDown}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </span>
            </button>
            <button className="text-[14px] text-[#524b47] leading-[22px]">
              Pricing
            </button>
            <button className="text-[14px] text-[#524b47] leading-[22px]">
              About
            </button>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-4">
            <ButtonGhost>Sign in</ButtonGhost>
            <ButtonDark>Get started for free</ButtonDark>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="mx-[200px] bg-white rounded-[16px] overflow-hidden px-9 pt-8 pb-0 flex flex-col gap-16 items-center">
      {/* Top content */}
      <div className="flex flex-col gap-4 items-center">
        {/* Badge */}
        <Badge label="Souvenir for Teams · agencies, SMBs, enterprises" color="brown" />

        {/* Headline */}
        <p
          className="text-[48px] text-black text-center leading-[56px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          <span>{"The autonomous "}</span>
          <em className="italic text-[#6a625d]">company brain.</em>
        </p>

        {/* Subtitle */}
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[977px]">
          One operational layer. A multi-agent workforce. Lives in the Slack you
          already use.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-2">
          <ButtonGhost>Get started for free</ButtonGhost>
          <ButtonDark>Book a demo</ButtonDark>
        </div>
      </div>

      {/* Map / App visual */}
      <div className="relative w-full overflow-hidden rounded-t-[12px]">
        {/* Background */}
        <div className="relative w-full h-[338px] overflow-hidden">
          <Image
            src={imgHeroBg}
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />
          {/* Overlay border */}
          <div className="absolute inset-0">
            <Image
              src={imgHeroBorder}
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Integration logos row — left group */}
          <div className="absolute bottom-6 left-[20px] w-[397px] h-[38px]">
            <Image
              src={imgHeroGroup}
              alt="Integration logos"
              fill
              className="object-contain object-left"
              unoptimized
            />
          </div>

          {/* Integration logos row — right group */}
          <div className="absolute bottom-6 right-[20px] w-[397px] h-[38px]">
            <Image
              src={imgHeroGroup1}
              alt="More integration logos"
              fill
              className="object-contain object-right"
              unoptimized
            />
          </div>

          {/* Connecting line */}
          <div className="absolute bottom-[58px] left-1/2 -translate-x-1/2 w-[255px] h-[77px]">
            <Image
              src={imgHeroLine}
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>

          {/* Slack + Word logos center */}
          <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex items-center gap-3">
            <div className="size-10 relative">
              <Image
                src={imgHeroSlack}
                alt="Slack"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="size-10 relative">
              <Image
                src={imgHeroWord}
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    {
      value: "71",
      unit: "%",
      desc: "of employees use AI tools their employer doesn't know about.",
      source: "Source · McKinsey State of AI 2025.",
      width: "w-[372px]",
    },
    {
      value: "8",
      unit: "hrs",
      desc: "not context switching but, disconnected digital apps",
      source: "Source · Asana Anatomy of Work Index 2024.",
      width: "w-[372px]",
    },
    {
      value: "2.5",
      unit: "×",
      desc: "performance gap between teams using AI as infrastructure versus teams using it as a tab.",
      source: "Source · BCG AI at Scale 2025.",
      width: "w-[448px]",
    },
  ];

  return (
    <section className="mx-[200px] flex flex-col gap-16 items-center">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="Why this matters now" color="neutral" />
        <h2
          className="text-[36px] text-black text-center leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          The way work happens is breaking.
        </h2>
      </div>

      {/* Stat cards */}
      <div className="bg-white rounded-[16px] p-9 flex gap-8 items-start w-full">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`flex flex-col gap-4 items-center ${stat.width}`}
          >
            {/* Large number */}
            <p
              className="text-[#6a625d] leading-none font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              <span className="text-[128px] leading-[150px]">{stat.value}</span>
              <span className="text-[64px] leading-[150px]">{stat.unit}</span>
            </p>
            {/* Description */}
            <p
              className="text-[24px] text-black text-center leading-[32px] font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              {stat.desc}
            </p>
            {/* Source */}
            <p
              className="text-[13px] text-black text-center leading-[16px]"
              style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
            >
              {stat.source}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Brain × Slack ────────────────────────────────────────────────────────────
type ProblemItem = { label: string; detail: string };
type SolutionItem = { label: string; detail: string };

function ProblemPin({ label, detail }: ProblemItem) {
  return (
    <div className="bg-white flex items-center gap-2 p-2 rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative size-[30px] flex-shrink-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(159,38,35,0.5)] bg-[#ffbfb6]">
        <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(253,231,231,0.7),inset_0px_-1.343px_0px_0px_rgba(159,38,35,0.1)]" />
        <div className="absolute inset-[7px]">
          <Image
            src={imgPinNoteRed}
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
      <p className="text-[16px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
        <span className="font-semibold text-[#c62b29]">{label} </span>
        <span className="font-normal text-black">{detail}</span>
      </p>
    </div>
  );
}

function SolutionPin({ label, detail }: SolutionItem) {
  return (
    <div className="bg-white flex items-center gap-2 p-2 rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative size-[30px] flex-shrink-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(128,183,7,0.5)] bg-[#e5f2c5]">
        <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1.343px_0px_0px_rgba(128,183,7,0.1)]" />
        <div className="absolute inset-[5px]">
          <Image
            src={imgPinCodeGreen}
            alt=""
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
      <p className="text-[16px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap flex-1 min-w-0">
        <span className="font-semibold text-[#628b10]">{label} </span>
        <span className="font-normal text-black">{detail}</span>
      </p>
    </div>
  );
}

function BrainSlackSection() {
  const problems: ProblemItem[] = [
    {
      label: "Employees using personal AI accounts",
      detail:
        "— pasting customer data into ChatGPT, Claude, Gemini with zero audit trail.",
    },
    {
      label: "Operational fragmentation",
      detail:
        "— your team copy-pasting between Shopify, Klaviyo, Gmail, Sheets all day.",
    },
    {
      label: '"Pull this number for me"',
      detail:
        "— every report is a manual ask to the one person who knows the spreadsheet.",
    },
    {
      label: "Tool spraw",
      detail:
        "— separate seats for ChatGPT, Claude, Notion AI, Perplexity. Nothing talks to anything.",
    },
    {
      label: "No multi-step automation",
      detail: "— your existing AI tools can read or write, but can't orchestrate.",
    },
  ];

  const solutions: SolutionItem[] = [
    {
      label: "One billing relationship",
      detail:
        "— every AI interaction routes through Souvenir. Full audit trail, no rogue accounts.",
    },
    {
      label: "Native integrations",
      detail:
        "— across 250+ apps — Souvenir reads, writes, and acts across your stack on its own.",
    },
    {
      label: "Self-serve data in Slack",
      detail:
        "— any team member asks the manager bot in #channel. Numbers come back in seconds.",
    },
    {
      label: "One credit pool",
      detail:
        "— for the whole team — every major AI model auto-routed. No more separate subscriptions.",
    },
    {
      label: "Multi-agent workforce",
      detail:
        "— specialist AI Assistants chain together to run multi-step operations end-to-end.",
    },
  ];

  return (
    <section className="mx-[200px] flex flex-col gap-8 items-center">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="Brain × Slack" color="neutral" />
        <h2
          className="text-[36px] text-black text-center leading-[42px] font-normal max-w-[631px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Build it in Slack. Run it from Slack. Get results back in Slack.
        </h2>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[576px]">
          {`The real cost of AI sprawl isn't the subscriptions — it's the leaks, the lost context, and the hours your team burns acting as the integration layer.`}
        </p>
      </div>

      {/* Comparison cards */}
      <div className="flex gap-4 w-full">
        {/* Without Souvenir */}
        <div className="flex-1 bg-white rounded-[16px] p-8 flex flex-col gap-4">
          <Badge label="Without Souvenir" color="red" />
          <h3
            className="text-[24px] text-black font-normal leading-[32px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Data leaking. Context lost. Operations stalled.
          </h3>
          <div className="flex flex-col gap-3">
            {problems.map((p, i) => (
              <ProblemPin key={i} {...p} />
            ))}
          </div>
        </div>

        {/* Running man divider */}
        <div className="flex flex-col items-center justify-center gap-1 px-2 shrink-0">
          <div className="size-10 relative">
            <Image src={imgRunningMan1} alt="" fill className="object-contain" unoptimized />
          </div>
          <div className="size-10 relative">
            <Image src={imgRunningMan2} alt="" fill className="object-contain" unoptimized />
          </div>
          <div className="size-10 relative">
            <Image src={imgRunningMan3} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>

        {/* With Souvenir */}
        <div className="flex-1 bg-white rounded-[16px] p-8 flex flex-col gap-4">
          <Badge label="With Souvenir" color="green" />
          <h3
            className="text-[24px] text-black font-normal leading-[32px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            One operational layer.{" "}
            <em className="italic text-[#3b3632]" style={{ fontFamily: "var(--font-besley)" }}>
              One workforce. Audit-logged.
            </em>
          </h3>
          <div className="flex flex-col gap-3">
            {solutions.map((s, i) => (
              <SolutionPin key={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Multi-agent workforce ────────────────────────────────────────────────────
type AgentCard = {
  name: string;
  handle: string;
  runs: string;
};

function AgentSection() {
  const agents: AgentCard[] = [
    { name: "Inventory Analyst", handle: "@IA", runs: "3 runs today" },
    { name: "Ad Copywriter", handle: "@AC", runs: "7 runs today" },
    { name: "CX Helper", handle: "@CX", runs: "14 runs today" },
    { name: "Email Writer", handle: "@EW", runs: "5 runs today" },
  ];

  return (
    <section className="mx-[200px] flex flex-col gap-8 items-center">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="Multi-agent workforce" color="neutral" />
        <h2
          className="text-[36px] text-black text-center leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          {"One manager. "}
          <em className="italic text-[#6a625d]">A coordinated crew.</em>
        </h2>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[576px]">
          One audit trail across your team. No more personal AI accounts leaking
          customer data.
        </p>
      </div>

      {/* Diagram */}
      <div className="w-full flex flex-col items-center gap-6">
        {/* Top row: Souvenir + Slack logos */}
        <div className="flex items-center gap-3">
          <div className="relative size-24 rounded-full overflow-hidden">
            <Image
              src={imgAgentLogo}
              alt="Souvenir"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          {/* Plus sign connector */}
          <div className="size-4 rounded-full bg-gradient-to-r from-[#7a5f6c] to-[#69485f] flex items-center justify-center">
            <div className="relative size-3">
              <Image
                src={imgAgentPinIconBlue}
                alt="+"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="relative size-[101px]">
            <Image
              src={imgAgentSlack}
              alt="Slack"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
        </div>

        {/* Vertical connector */}
        <div className="w-px h-12 bg-gradient-to-b from-[#7a5f6c] to-[#69485f]" />

        {/* Horizontal bar */}
        <div className="relative w-full h-px bg-gradient-to-r from-[#7a5f6c]/20 via-[#7a5f6c] to-[#7a5f6c]/20" />

        {/* Agent cards row */}
        <div className="flex gap-8 w-full justify-center">
          {agents.map((agent) => (
            <div
              key={agent.handle}
              className="bg-white border border-[#524b47] rounded-[16px] p-3 flex flex-col gap-2 w-[289px] shadow-[0px_2px_2.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]"
            >
              <div className="flex items-center gap-3">
                {/* Persona image */}
                <div className="relative size-[65px] rounded-[8px] overflow-hidden shadow-[0px_1.091px_1.09px_0px_rgba(59,54,50,0.05),0px_1.455px_1px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] flex-shrink-0 bg-[#cfbeac]">
                  <Image
                    src={imgAgentPersonaImg}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className="text-[16px] text-[#26211e] leading-[22px] font-normal truncate">
                      {agent.name}
                    </span>
                    <span
                      className="text-[13px] text-[#827a74] leading-[16px]"
                      style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
                    >
                      {agent.handle}
                    </span>
                  </div>
                  {/* Badge */}
                  <span className="inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)] relative self-start">
                    <span className="absolute inset-0 rounded-[6px] bg-[#ede1d7] pointer-events-none" />
                    <span className="absolute inset-0 rounded-[6px] shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)] pointer-events-none" />
                    <span className="relative text-[11px] font-medium text-[#524b47] leading-[16px] whitespace-nowrap">
                      {agent.runs}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flow row */}
        <div className="flex items-center gap-3 flex-wrap justify-center mt-2">
          {/* Inventory Analyst chip */}
          <div className="bg-white flex items-center gap-2 p-2 rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
            <div className="relative size-[30px] flex-shrink-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(13,110,178,0.5)] bg-[#cadcf1]">
              <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(231,244,253,0.7),inset_0px_-1.343px_0px_0px_rgba(13,110,178,0.1)]" />
              <div className="absolute inset-[6px]">
                <Image src={imgAgentPinIcon} alt="" fill className="object-contain" unoptimized />
              </div>
            </div>
            <span className="text-[16px] font-semibold text-[#26211e] leading-[22px] whitespace-nowrap">
              Inventory Analyst
            </span>
          </div>

          {/* Running man */}
          <div className="size-10 relative flex-shrink-0">
            <Image src={imgRunMan1} alt="" fill className="object-contain" unoptimized />
          </div>

          <span className="text-[16px] text-[#26211e] leading-[22px]">findings</span>

          <div className="size-10 relative flex-shrink-0">
            <Image src={imgRunMan2} alt="" fill className="object-contain" unoptimized />
          </div>

          {/* @Ad Copywriter chip */}
          <div className="bg-white flex items-center gap-2 p-2 rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
            <div className="relative size-[30px] flex-shrink-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(13,110,178,0.5)] bg-[#cadcf1]">
              <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(231,244,253,0.7),inset_0px_-1.343px_0px_0px_rgba(13,110,178,0.1)]" />
              <div className="absolute inset-[6px]">
                <Image src={imgAgentPinIcon} alt="" fill className="object-contain" unoptimized />
              </div>
            </div>
            <span className="text-[16px] font-semibold text-[#26211e] leading-[22px] whitespace-nowrap">
              @Ad Copywriter
            </span>
          </div>

          <div className="size-10 relative flex-shrink-0">
            <Image src={imgRunMan3} alt="" fill className="object-contain" unoptimized />
          </div>

          <span className="text-[16px] text-[#26211e] leading-[22px]">draft</span>

          <div className="size-10 relative flex-shrink-0">
            <Image src={imgRunMan4} alt="" fill className="object-contain" unoptimized />
          </div>

          <span className="text-[16px] text-[#26211e] leading-[22px]">approval</span>

          <div className="size-10 relative flex-shrink-0">
            <Image src={imgRunMan5} alt="" fill className="object-contain" unoptimized />
          </div>

          <span className="text-[16px] text-[#26211e] leading-[22px]">
            Use it in Slack and Workspace
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Native Integrations ──────────────────────────────────────────────────────
type IntegrationLogo = {
  src: string;
  alt: string;
  bg?: string;
  objectFit?: string;
  padding?: string;
};

function IntegrationTile({ src, alt, bg = "transparent", padding = "p-0" }: IntegrationLogo) {
  return (
    <div
      className={`relative size-[133px] rounded-[25px] overflow-hidden flex-shrink-0 ${bg} ${padding}`}
    >
      <Image src={src} alt={alt} fill className="object-contain" unoptimized />
    </div>
  );
}

function IntegrationsSection() {
  const row1: IntegrationLogo[] = [
    { src: imgIntegSlack, alt: "Slack" },
    { src: imgIntegGmail, alt: "Gmail" },
    { src: imgIntegShopify, alt: "Shopify", bg: "bg-white", padding: "p-5" },
    { src: imgIntegNotion, alt: "Notion" },
    { src: imgIntegGDrive, alt: "Google Drive" },
    { src: imgIntegSalesforce, alt: "Salesforce", bg: "bg-white", padding: "p-4" },
    { src: imgIntegHubspot, alt: "HubSpot" },
    { src: imgIntegKlaviyo, alt: "Klaviyo", bg: "bg-white", padding: "px-5 py-11" },
  ];

  const row2: IntegrationLogo[] = [
    { src: imgIntegLinear, alt: "Linear", bg: "bg-[#f7f2ed]" },
    { src: imgIntegJira, alt: "Jira", bg: "bg-[#f7f2ed]" },
    { src: imgIntegAsana, alt: "Asana", bg: "bg-[#f7f2ed]" },
    { src: imgIntegGithub, alt: "GitHub", bg: "bg-[#f7f2ed]" },
    { src: imgIntegStripe, alt: "Stripe", bg: "bg-[#f7f2ed]" },
    { src: imgIntegIntercom, alt: "Intercom" },
    { src: imgIntegZendesk, alt: "Zendesk" },
    { src: imgIntegLinearBg, alt: "243+" },
  ];

  return (
    <section className="mx-[200px] flex flex-col gap-8 items-center">
      {/* Header */}
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-4 items-center">
          <Badge label="Native integrations" color="neutral" />
          <h2
            className="text-[36px] text-black text-center leading-[42px] font-normal whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {"Plugs into "}
            <em className="italic text-[#6a625d]">every app you already use.</em>
          </h2>
          <p className="text-[16px] text-black text-center leading-[22px]">
            OAuth-authenticated. Bidirectional. Audit-logged. No middleware.
          </p>
        </div>

        {/* 250+ */}
        <p
          className="font-normal leading-none text-center"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          <span className="text-[128px] leading-[150px] text-[#120c08]">250</span>
          <span className="text-[128px] leading-[150px] text-[#8f7427]">+</span>
        </p>
      </div>

      {/* Logo grids */}
      <div className="flex flex-col gap-10 w-full">
        {/* Row 1 */}
        <div className="flex gap-10 justify-between w-full">
          {row1.map((logo) => (
            <IntegrationTile key={logo.alt} {...logo} />
          ))}
        </div>
        {/* Row 2 */}
        <div className="flex gap-10 justify-between w-full">
          {row2.map((logo) => (
            <IntegrationTile key={logo.alt} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="mx-[428px] flex flex-col gap-4 items-center text-center">
      <Badge label="Deploy when you're ready" color="neutral" />
      <h2
        className="text-[36px] text-black leading-[42px] font-normal whitespace-nowrap"
        style={{ fontFamily: "var(--font-besley)" }}
      >
        {"One brain. One workforce. "}
        <em className="italic text-[#6a625d]">One operational layer.</em>
      </h2>
      <p className="text-[16px] text-black leading-[22px]">
        OAuth-authenticated. Bidirectional. Audit-logged. No middleware.
      </p>
      <div className="flex items-center gap-6 mt-2">
        <ButtonGhost>Join Discord Community</ButtonGhost>
        <ButtonDark>Book a Demo</ButtonDark>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative mx-[199px] rounded-[16px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -rotate-90">
        <Image
          src={imgFooterBg}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-10 py-8 flex flex-col gap-8">
        {/* Top row */}
        <div className="flex gap-30 items-start">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 relative flex-shrink-0">
                  <Image
                    src={imgFooterLogo}
                    alt="Souvenir logo"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <span
                  className="text-[34px] tracking-[0.01em] leading-none text-white font-normal"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  Souvenir
                </span>
              </div>
              <p
                className="text-[24px] text-[#ede1d7] font-normal leading-[32px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                The centralized workspace brain. A coordinated team of agents.
              </p>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]">
                Newsletter
              </label>
              <div className="bg-white flex items-center gap-0.5 px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px]">
                  your@company.com
                </span>
                <div className="relative bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 px-2.5 pb-2 pt-1.5 rounded-[10px]">
                  <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
                  <div className="relative size-4 flex-shrink-0">
                    <Image
                      src={imgFooterSubmit}
                      alt=""
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="relative text-[14px] font-medium text-[#f7f2ed] leading-[22px]">
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-4 items-start">
            {[
              {
                title: "Product",
                links: [
                  "AI Assistants",
                  "Brain & Automation",
                  "Slack Command Center",
                  "Unified Chatspace",
                  "Pricing",
                ],
              },
              {
                title: "Solutions",
                links: ["Businesses", "Individuals"],
              },
              {
                title: "Company",
                links: ["About", "Blogs"],
              },
              {
                title: "Legal",
                links: ["Terms of Service", "Privacy Policy", "Other Policies"],
              },
            ].map((col) => (
              <div
                key={col.title}
                className="flex flex-col gap-4 w-[164px]"
              >
                <p
                  className="text-[24px] text-white font-normal leading-[32px] overflow-hidden text-ellipsis"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {col.title}
                </p>
                <div className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <p
                      key={link}
                      className="text-[14px] text-[#ede1d7] leading-[22px] font-normal overflow-hidden text-ellipsis cursor-pointer hover:text-white transition-colors"
                      style={{ fontFamily: "var(--font-besley)" }}
                    >
                      {link}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px w-full">
          <Image
            src={imgFooterDivider}
            alt=""
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Copyright */}
        <div className="flex items-center gap-8">
          <p
            className="text-[14px] text-[#f7f2ed] text-center leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="relative size-[7px] flex-shrink-0">
            <Image
              src={imgFooterDot}
              alt=""
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <p
            className="text-[14px] text-[#f7f2ed] text-center leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-[#f7f2ed] flex flex-col gap-16 pb-16">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BrainSlackSection />
      <AgentSection />
      <IntegrationsSection />
      <CTASection />
      <Footer />
    </main>
  );
}

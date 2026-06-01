import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────
const imgLogoUnion = "https://www.figma.com/api/mcp/asset/b543f430-ea63-48a5-a581-8830d2acb26d";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/466246bf-76e3-44c7-8163-44f6cd16229d";
const imgArrow = "https://www.figma.com/api/mcp/asset/bb1a75b9-33aa-43d8-9b40-7e63c1583313";
const imgHeroApp = "https://www.figma.com/api/mcp/asset/dbe5208e-16ad-4f84-badf-0703313abc62";
const imgWriteIcon = "https://www.figma.com/api/mcp/asset/b53222a0-31c0-4d1a-b442-dcd8271bd9c8";
const imgArrowIcon = "https://www.figma.com/api/mcp/asset/0fb053f0-fe8e-47c5-aee3-068ff8da9f3b";
const imgWorkflowIcon = "https://www.figma.com/api/mcp/asset/1796f72e-a0bb-4e2e-af66-5d999c3850a1";
const imgSouvenirLogo = "https://www.figma.com/api/mcp/asset/92c4aa6c-7a19-4bd9-ba47-addaa5d2beaa";
const imgSlackLogo = "https://www.figma.com/api/mcp/asset/484b031e-5068-4679-962a-357f1d91ad62";
const imgPlusSign = "https://www.figma.com/api/mcp/asset/a72120a3-e7fb-446c-85b6-622328101219";
const imgUserIcon = "https://www.figma.com/api/mcp/asset/a2c21431-c0d8-4f1f-9509-b07935e9e5ff";
const imgBoardIcon = "https://www.figma.com/api/mcp/asset/a0ca6444-520e-4fde-b564-cef7724dca42";
const imgFlowIcon = "https://www.figma.com/api/mcp/asset/77105536-c0da-47c7-a038-5d35443227bb";
const imgMistral = "https://www.figma.com/api/mcp/asset/e88e90e0-eaed-40a6-835e-7a313661c45a";
const imgOpenAI = "https://www.figma.com/api/mcp/asset/0bc52cf9-24bd-4e6d-bd54-e69761c1b355";
const imgClaude = "https://www.figma.com/api/mcp/asset/3ebc976f-032e-4e48-9041-6cd24e750bca";
const imgGemini = "https://www.figma.com/api/mcp/asset/df052a5e-6045-4653-acd6-ffa155b2eb48";
const imgPersona1 = "https://www.figma.com/api/mcp/asset/86a2c323-142b-4728-bb37-fae6e7ff1c1c";
const imgPersona2 = "https://www.figma.com/api/mcp/asset/9959fb06-1fd8-4e34-bc35-379df01cc43e";
const imgPersona3 = "https://www.figma.com/api/mcp/asset/3f99c15e-0f69-4421-bed1-d4933fae55aa";
const imgFooterBg = "https://www.figma.com/api/mcp/asset/74982765-99cb-421d-a38a-55e17640ae92";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/d6ebf9eb-da7a-4cb5-bd91-451b326c69b5";
const imgSubmitIcon = "https://www.figma.com/api/mcp/asset/2aee586a-46aa-4d30-be7e-3c69d67e163f";

// Integration logos
const imgStripe = "https://www.figma.com/api/mcp/asset/ebe53298-16a2-4225-bce5-f5a2c46a9320";
const imgShopify = "https://www.figma.com/api/mcp/asset/3df7b9ea-6f82-4fe3-8a87-f69394c8ab9c";
const imgFigma = "https://www.figma.com/api/mcp/asset/1f011e46-4077-4d03-a376-8dccdd837316";
const imgSlack = "https://www.figma.com/api/mcp/asset/21809c1e-83ed-4cb3-b00b-b3db66dbaa87";
const imgWord = "https://www.figma.com/api/mcp/asset/f87224ea-3df6-45dd-bf41-d216e0eb1042";
const imgOutlook = "https://www.figma.com/api/mcp/asset/f3ae5242-ce0c-4a5b-8f14-a3ced301f905";
const imgConfluence = "https://www.figma.com/api/mcp/asset/2d4761a3-7840-4992-99a6-b36fde833938";
const imgJira = "https://www.figma.com/api/mcp/asset/b23ab5a4-3bef-4658-9030-700470b9dcd1";
const imgGmail = "https://www.figma.com/api/mcp/asset/764a4e2b-5ed3-447a-a76b-dadcd83611ca";
const imgGDrive = "https://www.figma.com/api/mcp/asset/4c138b2d-6b14-4892-a903-d5e31a8ec8d6";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/2be4573d-a100-401b-9b6f-3d0a475501dc";
const imgExcel = "https://www.figma.com/api/mcp/asset/9c8d5535-4927-4958-a93d-5c562389d84b";
const imgCanvaGroup = "https://www.figma.com/api/mcp/asset/d45b8651-b4d3-4ac3-a575-419dc2255b34";

// ─── Shared button styles ─────────────────────────────────────────────────────
function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] relative bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="inset-shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7] absolute inset-0 rounded-[10px] pointer-events-none" />
      {children}
    </button>
  );
}

function ButtonDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] relative text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
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
  color?: "neutral" | "brown" | "yellow" | "green" | "red";
}) {
  const styles = {
    neutral: {
      bg: "bg-[#ede1d7]",
      text: "text-[#524b47]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]",
      inset: "shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)]",
    },
    brown: {
      bg: "bg-[#e6d5ca]",
      text: "text-[#683d1b]",
      shadow: "shadow-[0px_1.476px_2.214px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)]",
      inset: "shadow-[inset_0px_1.476px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.476px_0px_0px_rgba(126,84,53,0.1)]",
    },
    yellow: {
      bg: "bg-[#e9dfc9]",
      text: "text-[#6d5921]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(20,16,5,0.2),0px_0px_0px_1px_rgba(143,116,39,0.5)]",
      inset: "shadow-[inset_0px_1px_0px_0px_rgba(250,246,235,0.7),inset_0px_-1px_0px_0px_rgba(143,116,39,0.1)]",
    },
    green: {
      bg: "bg-[#f7fee6]",
      text: "text-[#456211]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(17,25,1,0.2),0px_0px_0px_1px_rgba(128,183,7,0.5)]",
      inset: "shadow-[inset_0px_1px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1px_0px_0px_rgba(128,183,7,0.1)]",
    },
    red: {
      bg: "bg-[#fef2f2]",
      text: "text-[#9f2623]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(24,2,2,0.2),0px_0px_0px_1px_rgba(159,38,35,0.5)]",
      inset: "shadow-[inset_0px_1px_0px_0px_rgba(253,232,232,0.7),inset_0px_-1px_0px_0px_rgba(159,38,35,0.1)]",
    },
  };
  const s = styles[color];
  return (
    <span className={`inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] ${s.shadow} relative shrink-0`}>
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.bg}`} />
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.inset}`} />
      <span className={`relative text-[11px] font-medium leading-[16px] whitespace-nowrap ${s.text}`}>{label}</span>
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full gap-0">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image src={imgLogoUnion} alt="Souvenir logo" fill className="object-contain" unoptimized />
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
    <section className="w-full bg-white border border-[rgba(0,0,0,0.08)] rounded-[26.56px] overflow-clip pt-[106px] pb-0.5 px-9 flex flex-col gap-16 items-center justify-center">
      {/* Top content */}
      <div className="flex flex-col gap-4 items-center">
        {/* Badge */}
        <Badge label="Multi-agent workforce" color="brown" />

        {/* Headline */}
        <div
          className="text-[48px] text-black text-center leading-[56px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          <p>All Your Apps Unified into One AI Brain</p>
          <p className="italic text-[#6a625d]">That Executes and Automates Your Work</p>
        </div>

        {/* Subtitle */}
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[977px]">
          Souvenir unifies all your disconnected tools into a single intelligent workspace where a coordinated team of
          AI agents work together to automate and execute real work across all your apps.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-2">
          <ButtonGhost>Get started for free</ButtonGhost>
          <ButtonDark>
            Book a Demo
            <span className="relative size-4 flex-shrink-0 ml-0.5">
              <Image src={imgArrow} alt="" fill className="object-contain" unoptimized />
            </span>
          </ButtonDark>
        </div>
      </div>

      {/* App screenshots — stacked */}
      <div className="relative w-[1260px] h-[433px] flex-shrink-0 self-center">
        {/* Bottom (widest) */}
        <div className="absolute bottom-0 left-0 w-full h-[433px] overflow-hidden">
          <Image src={imgHeroApp} alt="Souvenir app interface" fill className="object-cover object-top" unoptimized />
        </div>
        {/* Middle */}
        <div className="absolute bottom-[28px] left-[39px] w-[1193px] h-[410px] overflow-hidden opacity-80">
          <Image src={imgHeroApp} alt="" fill className="object-cover object-top" unoptimized />
        </div>
        {/* Top (smallest) */}
        <div className="absolute bottom-[56px] left-[72px] w-[1128px] h-[388px] overflow-hidden opacity-60">
          <Image src={imgHeroApp} alt="" fill className="object-cover object-top" unoptimized />
        </div>
      </div>
    </section>
  );
}

// ─── Pick Your Path ───────────────────────────────────────────────────────────
function FeaturePin({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="bg-white flex items-center gap-2 p-2 rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative size-[30px] overflow-clip rounded-lg shadow-[0px_0px_0px_1px_rgba(126,84,53,0.5)] bg-[#e6d5ca] flex-shrink-0">
        <div className="absolute inset-0 rounded-lg shadow-[inset_0px_1.343px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.343px_0px_0px_rgba(126,84,53,0.1)]" />
        <Image src={icon} alt="" fill className="object-contain p-[7px]" unoptimized />
      </div>
      <p className="text-[16px] text-black leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">{label}</p>
    </div>
  );
}

function TeamFeaturePin({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="bg-white flex items-center gap-2 p-2 rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative size-[30px] overflow-clip rounded-lg shadow-[0px_0px_0px_1px_rgba(106,98,93,0.5)] bg-[#ede1d7] flex-shrink-0">
        <div className="absolute inset-0 rounded-lg shadow-[inset_0px_1.343px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1.343px_0px_0px_rgba(106,98,93,0.1)]" />
        <Image src={icon} alt="" fill className="object-contain p-[7px]" unoptimized />
      </div>
      <p className="text-[16px] text-black leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap">{label}</p>
    </div>
  );
}

function TwoWaysSection() {
  return (
    <section className="flex flex-col gap-8 items-center w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="Pick your path" color="neutral" />
        <h2
          className="text-[36px] text-black text-center leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Two ways to use Souvenir.
        </h2>
      </div>

      {/* Two cards */}
      <div className="flex gap-6 w-full">
        {/* Individuals card */}
        <div className="flex-1 bg-white rounded-[16px] p-8 flex flex-col gap-4">
          <Badge label="For yourself" color="yellow" />
          <h3
            className="text-[24px] text-black font-normal leading-[32px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Souvenir for{" "}
            <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>
              Individuals
            </em>
          </h3>
          <p className="text-[16px] text-black leading-[22px]">
            Your personal AI operating system. Connects your disconnected apps, automates tasks across them, and saves
            your AI work forever.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <FeaturePin icon={imgWriteIcon} label="Personal workspace, one user" />
            <FeaturePin icon={imgWriteIcon} label="250+ connectors to your everyday apps" />
            <FeaturePin icon={imgWriteIcon} label="Pins, Project folders, Highlights" />
            <FeaturePin icon={imgWriteIcon} label="Every major AI model, auto-routed" />
          </div>
          <ButtonGhost className="mt-2 self-start">
            Start Personal Workspace
            <span className="relative size-4 flex-shrink-0 ml-1">
              <Image src={imgArrowIcon} alt="" fill className="object-contain" unoptimized />
            </span>
          </ButtonGhost>
        </div>

        {/* Teams card */}
        <div className="flex-1 bg-white rounded-[16px] p-8 flex flex-col gap-4">
          <Badge label="FOR YOUR TEAM" color="neutral" />
          <h3
            className="text-[24px] text-black font-normal leading-[32px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Souvenir for{" "}
            <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>
              Teams
            </em>
          </h3>
          <p className="text-[16px] text-black leading-[22px]">
            The autonomous company brain. One operational layer, a multi-agent workforce, living inside the Slack you
            already use.
          </p>
          <div className="flex flex-col gap-2 mt-2">
            <TeamFeaturePin icon={imgWorkflowIcon} label="Shared workspace, unlimited members" />
            <TeamFeaturePin icon={imgWorkflowIcon} label="Souvenir Slack Manager Agent" />
            <TeamFeaturePin icon={imgWorkflowIcon} label="Admin controls, audit log, approval gates" />
            <TeamFeaturePin icon={imgWorkflowIcon} label="250+ connectors plus governance" />
          </div>
          <ButtonGhost className="mt-2 self-start">
            Deploy to Your Team
            <span className="relative size-4 flex-shrink-0 ml-1">
              <Image src={imgArrowIcon} alt="" fill className="object-contain" unoptimized />
            </span>
          </ButtonGhost>
        </div>
      </div>
    </section>
  );
}

// ─── Problems Section ─────────────────────────────────────────────────────────
function ProblemsSection() {
  return (
    <section className="flex flex-col gap-16 items-center w-full">
      <h2
        className="text-[40px] text-black text-center leading-[48px] font-normal"
        style={{ fontFamily: "var(--font-besley)" }}
      >
        The way work happens{" "}
        <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>
          is breaking
        </em>
      </h2>

      <div className="flex gap-6 w-full">
        {/* Problem card */}
        <div className="flex-1 bg-[#ede1d7] border border-white/50 rounded-[13px] overflow-clip relative min-h-[574px] p-8">
          <div className="flex flex-col gap-2.5">
            <Badge label="Problems" color="red" />
            <h3
              className="text-[24px] text-black leading-[32px] font-normal max-w-[500px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Six tabs. Six accounts. Zero shared memory. Your team is the manual bridge.
            </h3>
          </div>

          {/* Browser tabs mockup */}
          <div className="mt-8 rounded-[11px] overflow-hidden shadow-lg bg-[#dee1e6]">
            <div className="flex items-center gap-1 p-3 border-b border-black/10 bg-[#dee1e6]">
              <div className="flex gap-1.5 items-center">
                <div className="size-3 rounded-full bg-[#ff5f57]" />
                <div className="size-3 rounded-full bg-[#febc2e]" />
                <div className="size-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex items-center gap-1 ml-3 overflow-hidden">
                {["Zapier", "Notion", "Slack", "Gmail", "Sheets", "Figma"].map((tab) => (
                  <div
                    key={tab}
                    className="px-3 py-1 rounded-t-[8px] bg-white/80 text-[11px] text-[#524b47] font-medium whitespace-nowrap"
                  >
                    {tab}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-40 bg-white/60 flex items-center justify-center">
              <p className="text-[#6a625d] text-sm">Fragmented tools, no shared memory</p>
            </div>
          </div>

          <div className="mt-4 text-[14px] text-[#6a625d] leading-[22px]">
            Every tool is a silo. Context doesn&apos;t travel. Nothing remembers what happened in the last tab.
          </div>
        </div>

        {/* Solution card */}
        <div className="flex-1 bg-white border border-white rounded-[13px] overflow-clip relative min-h-[574px] p-8">
          <div className="flex flex-col gap-2.5">
            <Badge label="Solution" color="brown" />
            <h3
              className="text-[24px] text-black leading-[32px] font-normal max-w-[500px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              One workspace. Every app connected. AI agents that share context and execute real work.
            </h3>
          </div>

          {/* Souvenir UI mockup */}
          <div className="mt-8 rounded-[11px] overflow-hidden shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7] bg-[#f7f2ed]">
            <div className="flex items-center gap-2 p-3 border-b border-[#ede1d7] bg-white">
              <div className="relative size-5 flex-shrink-0">
                <Image src={imgSouvenirLogo} alt="Souvenir" fill className="object-contain" unoptimized />
              </div>
              <span
                className="text-[14px] text-black font-normal"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Souvenir
              </span>
              <div className="ml-auto flex items-center gap-1">
                <div className="h-6 px-2 bg-[#f7f2ed] rounded border border-[#ede1d7] text-[11px] text-[#524b47] flex items-center">
                  Souvenir AI · Framework
                </div>
              </div>
            </div>
            <div className="h-40 flex items-center justify-center gap-3 p-4">
              {[imgMistral, imgOpenAI, imgClaude, imgGemini].map((ai, i) => (
                <div key={i} className="size-8 relative rounded-lg overflow-hidden shadow-sm flex-shrink-0">
                  <Image src={ai} alt="" fill className="object-cover" unoptimized />
                </div>
              ))}
              <p className="text-[#6a625d] text-sm ml-2">AI agents working together</p>
            </div>
          </div>

          <div className="mt-4 text-[14px] text-[#6a625d] leading-[22px]">
            Souvenir connects everything, routes to the best AI model, and executes across all your apps — automatically.
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Knowledge Section ────────────────────────────────────────────────────────
function KnowledgeSection() {
  return (
    <section className="bg-white rounded-[16px] p-9 flex gap-[126px] items-center w-full">
      {/* Left: text */}
      <div className="flex flex-col gap-4 max-w-[522px] flex-shrink-0">
        <Badge label="Intelligent context layer" color="neutral" />
        <h2
          className="text-[36px] text-black leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Your knowledge, deeply understood. Acted on.
        </h2>
        <p className="text-[16px] text-black leading-[22px]">
          Any tool can pull information from your apps. Souvenir goes further. The Brain develops a rich understanding
          of your knowledge and puts it to work. Our AI Assistants don&apos;t just tell you things. They execute real
          work.
        </p>
      </div>

      {/* Right: visual */}
      <div className="flex-1 bg-[#f7f2ed] rounded-[16px] p-16 overflow-clip relative min-h-[380px]">
        {/* Logos */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-10">
            <div className="relative size-24 flex-shrink-0">
              <Image src={imgSouvenirLogo} alt="Souvenir" fill className="object-contain" unoptimized />
            </div>
            {/* Connection line */}
            <div className="flex items-center gap-1">
              <div className="w-10 h-px bg-gradient-to-r from-[#7a5f6c] to-[#69485f]" />
              <div className="size-5 rounded-full bg-gradient-to-r from-[#7a5f6c] to-[#69485f] flex items-center justify-center">
                <Image src={imgPlusSign} alt="+" width={12} height={12} unoptimized />
              </div>
              <div className="w-10 h-px bg-gradient-to-r from-[#7a5f6c] to-[#69485f]" />
            </div>
            <div className="relative size-24 flex-shrink-0">
              <Image src={imgSlackLogo} alt="Slack" fill className="object-contain" unoptimized />
            </div>
          </div>

          {/* Connection node */}
          <div className="size-5 rounded-full bg-gradient-to-r from-[#7a5f6c] to-[#69485f] flex items-center justify-center">
            <Image src={imgPlusSign} alt="+" width={12} height={12} unoptimized />
          </div>

          {/* Workspace rows */}
          <div className="flex flex-col gap-1.5 w-full">
            {[
              { icon: imgUserIcon, label: "Research board", extras: [imgMistral, imgOpenAI, imgClaude, imgGemini] },
              { icon: imgBoardIcon, label: "Ai Agents", personas: [imgPersona1, imgPersona2, imgPersona3] },
              { icon: imgFlowIcon, label: "Automation Flows", mixed: true },
            ].map((row, i) => (
              <div key={i}>
                <div className="bg-white rounded-[12px] flex items-center justify-between px-4 py-3 shadow-[inset_0px_1px_0px_0px_rgba(0,0,0,0.1),inset_0px_-1px_0px_1px_rgba(0,0,0,0.1)]">
                  <div className="flex items-center gap-2.5">
                    <div className="relative size-[26px] flex-shrink-0">
                      <Image src={row.icon} alt="" fill className="object-contain" unoptimized />
                    </div>
                    <span className="text-[18px] font-medium text-[#524b47]">{row.label}</span>
                  </div>
                  <div className="flex items-center">
                    {row.extras?.map((src, j) => (
                      <div key={j} className={`relative size-8 rounded-lg overflow-hidden flex-shrink-0 ${j > 0 ? "-ml-1.5" : ""}`}>
                        <Image src={src} alt="" fill className="object-cover" unoptimized />
                      </div>
                    ))}
                    {row.personas?.map((src, j) => (
                      <div key={j} className={`relative size-8 rounded-lg overflow-hidden flex-shrink-0 border border-white ${j > 0 ? "-ml-1.5" : ""}`}>
                        <Image src={src} alt="" fill className="object-cover" unoptimized />
                      </div>
                    ))}
                    {row.mixed && (
                      <>
                        <div className="relative size-8 rounded-lg overflow-hidden flex-shrink-0">
                          <Image src={imgPersona1} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="relative size-8 rounded-lg overflow-hidden flex-shrink-0 -ml-1.5">
                          <Image src={imgClaude} alt="" fill className="object-cover" unoptimized />
                        </div>
                        <div className="relative size-8 rounded-lg overflow-hidden flex-shrink-0 -ml-1.5">
                          <Image src={imgSlack} alt="" fill className="object-cover" unoptimized />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {i < 2 && (
                  <div className="flex justify-center py-0.5">
                    <div className="size-4 rounded-full bg-gradient-to-r from-[#7a5f6c] to-[#69485f] flex items-center justify-center">
                      <Image src={imgPlusSign} alt="+" width={10} height={10} unoptimized />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── One Workspace Pillars ────────────────────────────────────────────────────
function PillarsSection() {
  const pillars = [
    {
      number: "PILLAR 01",
      title: "A team of Assistants, not a chatbot.",
      description:
        "Each Assistant has a role. They think, decide, and hand work to each other. You manage them like a team.",
      detail:
        "From research to writing to outreach — your AI workforce handles end-to-end workflows while you stay in control.",
    },
    {
      number: "PILLAR 02",
      title: "One Brain that remembers everything.",
      description:
        "Your pins, projects, and context live in the Brain. Every Assistant draws from the same shared memory.",
      detail:
        "No more re-explaining your context. Souvenir's Brain indexes your apps and makes knowledge available across every task.",
    },
    {
      number: "PILLAR 03",
      title: "Run your work from Slack.",
      description:
        "The Souvenir Manager Agent lives in Slack. Delegate tasks, approve actions, review outputs — all from where your team already works.",
      detail:
        "No new app to learn. Your AI workforce reports into your existing channels, threads, and DMs.",
    },
  ];

  return (
    <section className="flex flex-col gap-16 w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-[965px]">
        <Badge label="One workspace" color="neutral" />
        <h2
          className="text-[40px] text-black leading-[48px] font-normal max-w-[800px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          One Workspace. Every Task. No Switch, No Ask.
        </h2>
        <p className="text-[16px] text-black leading-[22px] max-w-[666px]">
          From the first idea to the final ask, Souvenir runs your work — start to finish, agent to task.
        </p>
      </div>

      {/* Pillars */}
      <div className="flex flex-col gap-6">
        {pillars.map((pillar, i) => (
          <div key={i} className="flex gap-16 items-start w-full">
            {/* Left: text */}
            <div className="w-[652px] flex-shrink-0 flex flex-col gap-4 p-0">
              <div className="flex items-center justify-between border-b border-[#ede1d7] pb-2">
                <span className="text-[12px] font-medium text-[#524b47] tracking-wide uppercase">{pillar.number}</span>
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div
                      key={j}
                      className={`w-2 h-4.5 rounded-sm ${j === i ? "bg-[#524b47]" : "bg-[#d1c6bd]"}`}
                      style={{ height: "18px" }}
                    />
                  ))}
                </div>
              </div>
              <h3
                className="text-[32px] text-black leading-[40px] font-normal"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                {pillar.title}
              </h3>
              <p className="text-[16px] text-[#524b47] leading-[22px] max-w-[626px]">{pillar.description}</p>
            </div>

            {/* Right: illustration placeholder */}
            <div className="flex-1 bg-[#f7f2ed] rounded-[16px] min-h-[280px] flex items-center justify-center overflow-hidden">
              <div className="p-8 w-full">
                <div className="bg-white rounded-[12px] p-4 shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="size-8 rounded-lg bg-[#e6d5ca] flex items-center justify-center">
                      <div className="size-4 bg-[#683d1b]/30 rounded" />
                    </div>
                    <span className="text-[16px] font-medium text-[#524b47]">
                      {i === 0 ? "Souvenir AI Assistant" : i === 1 ? "Brain · Project Memory" : "Slack Manager Agent"}
                    </span>
                  </div>
                  <p className="text-[13px] text-[#6a625d] leading-[20px]">{pillar.detail}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Comparison Table ─────────────────────────────────────────────────────────
const comparisonData = {
  headers: ["Capability", "Operational layer\nSouvenir", "Single-model AI\nChatGPT · Claude · Gemini", "Productivity tools\nNotion AI · Copilot"],
  groups: [
    {
      name: "Capability",
      rows: [
        { feature: "Multi-agent workforce", description: "Role-tuned Assistants that hand off work between each other.", souvenir: "✓ Native", ai: "SINGLE AGENT\nOne model, one thread.", productivity: "NOT AVAILABLE\n—" },
        { feature: "Slack-native command center", description: "One managerial bot that coordinates the whole team in your channels.", souvenir: "✓ Native", ai: "BOLT-ON\nThird-party integration.", productivity: "BOLT-ON\nThird-party integration." },
        { feature: "Background automation", description: "Multi-step work runs across your stack without prompts.", souvenir: "✓ Native", ai: "PROMPT-DRIVEN\nYou drive every step.", productivity: "NOT AVAILABLE\n—" },
      ],
    },
    {
      name: "Context",
      rows: [
        { feature: "Cross-model memory", description: "Project context persists across every model provider.", souvenir: "✓ Native", ai: "PROVIDER-LOCKED\nMemory dies at the edge.", productivity: "APP-BOUND\nStays inside the app." },
        { feature: "Cross-app context indexing", description: "Unified memory across Gmail, Drive, Slack, your CRM.", souvenir: "✓ Native", ai: "NO EXTERNAL CONTEXT\nEach session starts blank.", productivity: "APP SILO\nReads only its own app." },
        { feature: "Pins & shared project folders", description: "Team-wide reusable context — built once, used everywhere.", souvenir: "✓ Native", ai: "PERSONAL ONLY\nNo team-level sharing.", productivity: "INSIDE ONE APP\nLocked to the host tool." },
      ],
    },
    {
      name: "Control",
      rows: [
        { feature: "Automatic model routing", description: "Best model picked per task — for quality and cost.", souvenir: "✓ Native", ai: "SINGLE MODEL\nOne provider, period.", productivity: "SINGLE MODEL\nOne provider, period." },
        { feature: "Governance & audit trail", description: "Tenant control over how the team uses AI.", souvenir: "✓ Native", ai: "ENTERPRISE TIER\nLocked to top plans.", productivity: "APP-BOUND\nOnly what one app sees." },
        { feature: "Unlimited seats", description: "Whole team onboarded without per-user lock-in.", souvenir: "✓ Included", ai: "PER-SEAT\n$25–60 per user / mo.", productivity: "PER-SEAT\n$10–20 per user / mo." },
      ],
    },
  ],
};

function ComparisonSection() {
  return (
    <section className="flex flex-col gap-16 items-center w-full">
      <div className="flex flex-col gap-4 items-center">
        <Badge label="The category check" color="neutral" />
        <h2
          className="text-[40px] text-black leading-[48px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          There is no second place.
        </h2>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[755px]">
          Single-model platforms give you a chatbot. Productivity tools give you a sidebar. Souvenir is the operational
          layer that sits underneath both — and replaces what&apos;s missing in between.
        </p>
      </div>

      {/* Table */}
      <div className="w-full rounded-[10px] overflow-clip border border-[#ede1d7]">
        {/* Header row */}
        <div className="flex bg-[#d1c6bd]">
          <div className="w-[327px] px-3 py-[10px] flex flex-col h-16 justify-end shrink-0">
            <p className="text-[14px] text-[#26211e]">Capability</p>
          </div>
          <div className="w-[338px] px-3 py-[10px] flex flex-col shrink-0 border-l border-[#b8a89a]">
            <p className="text-[14px] font-semibold text-[#26211e]">Operational layer</p>
            <p
              className="text-[20px] text-[#26211e] font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Souvenir
            </p>
          </div>
          <div className="w-[338px] px-3 py-[10px] flex flex-col shrink-0 border-l border-[#b8a89a]">
            <p className="text-[14px] font-semibold text-[#26211e]">Single-model AI</p>
            <p
              className="text-[20px] text-[#26211e] font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              ChatGPT · Claude · Gemini
            </p>
          </div>
          <div className="flex-1 px-3 py-[10px] flex flex-col border-l border-[#b8a89a]">
            <p className="text-[14px] font-semibold text-[#26211e]">Productivity tools</p>
            <p
              className="text-[20px] text-[#26211e] font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Notion AI · Copilot
            </p>
          </div>
        </div>
        <div className="h-px bg-[#ede1d7]" />

        {comparisonData.groups.map((group, gi) => (
          <div key={gi}>
            {/* Group header */}
            <div className="flex bg-[#f7f2ed]">
              <div className="w-[327px] px-3 py-[10px] h-[50px] flex items-center shrink-0">
                <p className="text-[14px] text-[#524b47]">{group.name}</p>
              </div>
              <div className="flex-1 border-l border-[#ede1d7]" />
            </div>

            {group.rows.map((row, ri) => (
              <div key={ri} className="flex bg-white border-t border-[#ede1d7]">
                <div className="w-[327px] px-3 py-[10px] flex flex-col shrink-0">
                  <p className="text-[16px] font-semibold text-[#3b3632] whitespace-nowrap">{row.feature}</p>
                  <p className="text-[14px] text-[#6a625d] leading-[22px] w-[303px]">{row.description}</p>
                </div>
                <div className="w-[338px] px-3 py-[10px] flex flex-col shrink-0 border-l border-[#ede1d7]">
                  <p className="text-[16px] font-semibold text-[#3b3632] whitespace-nowrap">{row.souvenir}</p>
                </div>
                <div className="w-[338px] px-3 py-[10px] flex flex-col shrink-0 border-l border-[#ede1d7]">
                  {row.ai.split("\n").map((line, li) => (
                    <p
                      key={li}
                      className={`${li === 0 ? "text-[16px] font-semibold text-[#3b3632]" : "text-[14px] text-[#6a625d]"} leading-[22px]`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="flex-1 px-3 py-[10px] flex flex-col border-l border-[#ede1d7]">
                  {row.productivity.split("\n").map((line, li) => (
                    <p
                      key={li}
                      className={`${li === 0 ? "text-[16px] font-semibold text-[#3b3632]" : "text-[14px] text-[#6a625d]"} leading-[22px]`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div className="h-px bg-[#ede1d7]" />
      </div>
    </section>
  );
}

// ─── Integrations Section ─────────────────────────────────────────────────────
const integrationRows = [
  [
    { src: imgStripe, name: "Stripe" },
    { src: imgShopify, name: "Shopify" },
    { src: imgFigma, name: "Figma" },
    { src: imgSlack, name: "Slack" },
    { src: imgWord, name: "Word" },
    { src: imgOutlook, name: "Outlook" },
    { src: imgConfluence, name: "Confluence" },
    { src: imgJira, name: "Jira" },
    { src: imgGmail, name: "Gmail" },
  ],
  [
    { src: imgOutlook, name: "Outlook" },
    { src: imgConfluence, name: "Confluence" },
    { src: imgGDrive, name: "Google Drive" },
    { src: imgFigma, name: "Figma" },
    { src: imgJira, name: "Jira" },
    { src: imgGmail, name: "Gmail" },
    { src: imgExcel, name: "Excel" },
    { src: imgLinkedIn, name: "LinkedIn" },
    { src: imgSlack, name: "Slack" },
  ],
  [
    { src: imgExcel, name: "Excel" },
    { src: imgLinkedIn, name: "LinkedIn" },
    { src: imgShopify, name: "Shopify" },
    { src: imgOutlook, name: "Outlook" },
    { src: imgGDrive, name: "Google Drive" },
    { src: imgStripe, name: "Stripe" },
    { src: imgJira, name: "Jira" },
    { src: imgConfluence, name: "Confluence" },
    { src: imgFigma, name: "Figma" },
  ],
];

function IntegrationLogo({ src, name }: { src: string; name: string }) {
  return (
    <div className="bg-white/20 rounded-[16px] p-6 flex items-center justify-center flex-shrink-0 size-[127px]">
      <div className="relative size-[79px]">
        <Image src={src} alt={name} fill className="object-contain" unoptimized />
      </div>
    </div>
  );
}

function IntegrationsSection() {
  return (
    <section className="bg-[#ede1d7] rounded-[16px] overflow-clip relative w-full min-h-[571px] flex items-center justify-center">
      {/* Scrolling rows behind */}
      <div className="absolute inset-0 flex flex-col gap-6 justify-center py-6 opacity-100">
        {integrationRows.map((row, ri) => (
          <div key={ri} className="flex gap-6 overflow-hidden">
            <div
              className={`flex gap-6 animate-marquee ${ri % 2 === 1 ? "[animation-direction:reverse]" : ""}`}
              style={{ width: "max-content" }}
            >
              {[...row, ...row].map((item, i) => (
                <IntegrationLogo key={i} src={item.src} name={item.name} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Center card */}
      <div className="relative z-10 bg-white rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] p-6 max-w-[849px] w-full mx-auto flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4 items-center text-center">
          <h2
            className="text-[40px] text-[#524b47] leading-[48px] font-normal"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            One Brain. A coordinated team of agents.
          </h2>
          <p
            className="text-[24px] text-[#6a625d] leading-[32px] font-normal max-w-[801px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Souvenir brings your apps, scattered data, and daily workflows into a single operational layer — with a
            dedicated workforce of AI Assistants to run your work on autopilot.
          </p>
          <p className="text-[16px] text-[#6a625d] leading-[22px] whitespace-nowrap">
            From the first prompt to the final deliverable, in one workspace. Managed from inside your Slack.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <ButtonGhost>Join Discord Community</ButtonGhost>
            <ButtonDark>Book a Demo</ButtonDark>
          </div>
        </div>
        <div className="absolute inset-0 rounded-[12px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks = {
    Product: ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company: ["About", "Blogs"],
    Legal: ["Terms of Service", "Privacy Policy", "Other Policies"],
  };

  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px] mt-0">
      {/* Dark background */}
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8 max-w-[1328px]">
        {/* Top row */}
        <div className="flex gap-[120px] items-start">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex items-center gap-3">
              <div className="relative size-10 flex-shrink-0">
                <Image src={imgFooterLogo} alt="" fill className="object-contain" unoptimized />
              </div>
              <span
                className="text-[34px] text-white tracking-[0.01em] font-normal leading-none"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Souvenir
              </span>
            </div>
            <p
              className="text-[24px] text-[#ede1d7] leading-[32px] font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              The centralized workspace brain. A coordinated team of agents.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]">Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">
                  your@company.com
                </span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitIcon} alt="" fill className="object-contain" unoptimized />
                  </span>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-4 flex-wrap">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4 w-[164px]">
                <p
                  className="text-[24px] text-white font-normal leading-[32px] overflow-hidden text-ellipsis"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {title}
                </p>
                <div className="flex flex-col gap-[10px]">
                  {links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[14px] text-[#ede1d7] leading-[22px] hover:text-white transition-colors overflow-hidden text-ellipsis whitespace-nowrap"
                      style={{ fontFamily: "var(--font-besley)" }}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 w-full" />

        {/* Bottom row */}
        <div className="flex items-center gap-8">
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="size-1.5 rounded-full bg-[#f7f2ed]/60 flex-shrink-0" />
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      {/* Main content — 1328px max width, centered */}
      <div className="max-w-[1328px] mx-auto px-0 pb-0 flex flex-col gap-[100px]">
        <HeroSection />
        <TwoWaysSection />
        <ProblemsSection />
        <KnowledgeSection />
        <PillarsSection />
        <ComparisonSection />
        <IntegrationsSection />
      </div>

      {/* Footer — full width within the page container */}
      <div className="max-w-[1328px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

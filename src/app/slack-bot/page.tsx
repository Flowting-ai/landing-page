import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────

// Navbar / shared
const imgLogoUnion = "https://www.figma.com/api/mcp/asset/b543f430-ea63-48a5-a581-8830d2acb26d";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/466246bf-76e3-44c7-8163-44f6cd16229d";
const imgSouvenirLogo = "https://www.figma.com/api/mcp/asset/92c4aa6c-7a19-4bd9-ba47-addaa5d2beaa";
const imgSlackLogo = "https://www.figma.com/api/mcp/asset/484b031e-5068-4679-962a-357f1d91ad62";
const imgPlusSign = "https://www.figma.com/api/mcp/asset/a72120a3-e7fb-446c-85b6-622328101219";
const imgUserIcon = "https://www.figma.com/api/mcp/asset/a2c21431-c0d8-4f1f-9509-b07935e9e5ff";
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

// Slack page — screenshot + use-case icons
const imgSlackScreenshot = "https://www.figma.com/api/mcp/asset/1b1952a8-91e1-44a0-9372-645c55e5f3b0";
const imgCategoryIcon = "https://www.figma.com/api/mcp/asset/8fe2c1b2-8cbf-4735-ac45-8ada50890206";

// Channel section icons
const imgIconMentoring = "https://www.figma.com/api/mcp/asset/29b7c1c3-1bca-4142-90a3-46ef3ae5e440";
const imgIconUserAdd = "https://www.figma.com/api/mcp/asset/3379c3b0-99de-44ac-973d-c9f7928eccf1";
const imgIconUser = "https://www.figma.com/api/mcp/asset/481a940f-75c9-43ae-b8fc-87f41f77ec7f";

// Front door icons
const imgIconBrain = "https://www.figma.com/api/mcp/asset/cc10548b-864a-4a2b-a851-b7c3038c77b6";
const imgIconUserAi = "https://www.figma.com/api/mcp/asset/84376e99-fa23-49fa-964d-3e14341d7f10";
const imgIconChatAdd = "https://www.figma.com/api/mcp/asset/bae2216a-e30d-43fd-8f9c-c838350aeeba";

// CTA card integration logos
const imgStripe = "https://www.figma.com/api/mcp/asset/cf2d5e0f-1692-42fe-9753-3bdf19bf4916";
const imgShopify = "https://www.figma.com/api/mcp/asset/c333654c-eee5-4f71-a394-4e92694ca25c";
const imgFigmaLogo = "https://www.figma.com/api/mcp/asset/f7ef33f7-d703-45d8-b0ac-849b2327d37d";
const imgCanva = "https://www.figma.com/api/mcp/asset/bf555e43-74f2-4ed9-8a28-2ca46ffeb142";
const imgWord = "https://www.figma.com/api/mcp/asset/cf4dabb3-147f-47a7-a97f-b255f897c1cd";
const imgGDrive = "https://www.figma.com/api/mcp/asset/30d2b1b5-dccb-4e70-912c-ec43aa9de337";
const imgJira = "https://www.figma.com/api/mcp/asset/e88b076a-d25d-4a29-a799-ffc8778c1f0e";
const imgOutlook = "https://www.figma.com/api/mcp/asset/9cc049df-9feb-401c-b614-3d17683f1416";
const imgGithub = "https://www.figma.com/api/mcp/asset/bb1cf43e-6664-4282-b02d-8a7ce64bfecd";
const imgAtlassian = "https://www.figma.com/api/mcp/asset/32175739-89d5-4df1-afc5-deee5dece212";
const imgMailchimp = "https://www.figma.com/api/mcp/asset/9b6dad42-123b-4237-a768-6c0d3c68f01d";
const imgExcel = "https://www.figma.com/api/mcp/asset/f829097a-4c9b-4603-88fe-affcc027d423";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/f74dd510-c654-4d93-911c-3d2909a8724f";
const imgGmail = "https://www.figma.com/api/mcp/asset/d218c31c-1d35-47e1-9c80-232a13615910";
const imgSlack = "https://www.figma.com/api/mcp/asset/b2880ea1-323d-47d3-a2e0-5f32494d6779";
const imgTikTok = "https://www.figma.com/api/mcp/asset/4d3c7025-43fa-4e88-bd0b-7190d25d68a1";

// ─── Shared button primitives ─────────────────────────────────────────────────
function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] relative bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      {children}
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

function Badge({
  label,
  color = "neutral",
}: {
  label: string;
  color?: "neutral" | "brown";
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
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image src={imgLogoUnion} alt="Souvenir logo" fill className="object-contain" unoptimized />
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

// ─── Hero Slack Visualization sub-components ──────────────────────────────────
function PlusNode() {
  return (
    <div className="flex justify-center">
      <div className="size-4 rounded-full bg-[#26211e] flex items-center justify-center flex-shrink-0">
        <Image src={imgPlusSign} alt="+" width={10} height={10} unoptimized />
      </div>
    </div>
  );
}

function AgentRow({
  label,
  right,
  narrow = false,
}: {
  label: string;
  right?: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-[12px] flex items-center justify-between px-4 py-3 shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7] ${
        narrow ? "w-[139px] mx-auto" : "w-full"
      }`}
    >
      <div className="flex items-center gap-2">
        <div className="relative size-[26px] rounded-full overflow-hidden flex-shrink-0">
          <Image src={imgUserIcon} alt="" fill className="object-contain" unoptimized />
        </div>
        <span className="text-[14px] font-medium text-[#524b47] whitespace-nowrap">{label}</span>
      </div>
      {right && <div className="flex items-center ml-3">{right}</div>}
    </div>
  );
}

// ─── 1. Hero Section ─────────────────────────────────────────────────────────
function HeroSection() {
  const aiLogos = [imgMistral, imgOpenAI, imgClaude, imgGemini];
  const toolLogos = [imgJira, imgOutlook, imgGmail, imgGDrive, imgSlack, imgAtlassian];
  const personas = [imgPersona1, imgPersona2, imgPersona3, imgPersona1];
  const mixed = [imgPersona2, imgClaude, imgPersona3, imgSlackLogo];

  return (
    <section className="w-full flex items-center gap-16">
      {/* Left: copy */}
      <div className="flex flex-col gap-4 w-[659px] flex-shrink-0">
        <Badge label="Solution · Slack Manager" color="brown" />
        <h1
          className="text-[48px] text-black leading-[56px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Your team already lives in Slack. Now your agent workforce does too.
        </h1>
        <p className="text-[16px] text-black leading-[22px]">
          With the Slack Master Agent, everything happens where your team already works. Mention @Souvenir in any channel,
          assign a goal, and your coordinated team of AI agents executes complex work in the background.
        </p>
        <div className="flex items-center gap-4 mt-2">
          <ButtonDark>Get started for free</ButtonDark>
          <ButtonGhost>Book a Demo</ButtonGhost>
        </div>
      </div>

      {/* Right: Slack visualization */}
      <div className="flex-1 flex items-center justify-center py-8">
        <div className="flex flex-col items-center w-[480px] gap-0">
          {/* Souvenir ── + ── Slack connector */}
          <div className="flex items-center self-center mb-0">
            <div className="relative size-24 rounded-[22px] overflow-hidden flex-shrink-0 shadow-[0px_0px_0px_1px_rgba(106,98,93,0.3)]">
              <div className="absolute inset-0 bg-[#ede1d7] rounded-[22px]" />
              <div className="absolute inset-[10%]">
                <Image src={imgSouvenirLogo} alt="Souvenir" fill className="object-contain" unoptimized />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-px bg-[#6a625d]" />
              <div className="size-4 rounded-full bg-[#26211e] flex items-center justify-center flex-shrink-0">
                <Image src={imgPlusSign} alt="+" width={10} height={10} unoptimized />
              </div>
              <div className="w-8 h-px bg-[#6a625d]" />
            </div>
            <div className="relative size-[100px] flex-shrink-0">
              <Image src={imgSlackLogo} alt="Slack" fill className="object-contain" unoptimized />
            </div>
          </div>

          {/* Vertical stem */}
          <div className="w-px h-12 bg-[#6a625d]" />

          {/* Chain of rows */}
          <div className="flex flex-col gap-0 w-full">
            {/* Narrow trigger bubble */}
            <AgentRow label="@growth-team" narrow />
            <div className="py-1.5">
              <PlusNode />
            </div>
            {/* AI routing */}
            <AgentRow
              label="Souvenir Master"
              right={
                <div className="flex">
                  {aiLogos.map((src, i) => (
                    <div
                      key={i}
                      className={`relative size-[33px] rounded-lg overflow-hidden flex-shrink-0 border border-white ${i > 0 ? "-ml-1.5" : ""}`}
                    >
                      <Image src={src} alt="" fill className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>
              }
            />
            <div className="py-1.5">
              <PlusNode />
            </div>
            {/* Tool connections */}
            <AgentRow
              label="Agent Workforce"
              right={
                <div className="flex">
                  {toolLogos.map((src, i) => (
                    <div
                      key={i}
                      className={`relative size-[33px] rounded-full overflow-hidden flex-shrink-0 border border-white bg-white ${i > 0 ? "-ml-1.5" : ""}`}
                    >
                      <Image src={src} alt="" fill className="object-contain p-1.5" unoptimized />
                    </div>
                  ))}
                </div>
              }
            />
            <div className="py-1.5">
              <PlusNode />
            </div>
            {/* Your team */}
            <AgentRow
              label="Your Team"
              right={
                <div className="flex">
                  {personas.map((src, i) => (
                    <div
                      key={i}
                      className={`relative size-[31px] rounded-full overflow-hidden flex-shrink-0 border border-white ${i > 0 ? "-ml-1.5" : ""}`}
                    >
                      <Image src={src} alt="" fill className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>
              }
            />
            <div className="py-1.5">
              <PlusNode />
            </div>
            {/* Final delivery */}
            <AgentRow
              label="Final Delivery"
              right={
                <div className="flex">
                  {mixed.map((src, i) => (
                    <div
                      key={i}
                      className={`relative size-[31px] rounded-full overflow-hidden flex-shrink-0 border border-white ${i > 0 ? "-ml-1.5" : ""}`}
                    >
                      <Image src={src} alt="" fill className="object-cover" unoptimized />
                    </div>
                  ))}
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Slack Screenshot Section ─────────────────────────────────────────────
function SlackScreenshotSection() {
  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-16 items-center">
      {/* Slack screenshot */}
      <div className="relative w-[615px] h-[418px] flex-shrink-0 overflow-hidden rounded-[12px]">
        <Image src={imgSlackScreenshot} alt="Souvenir in Slack" fill className="object-cover" unoptimized />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-4">
        <Badge label="A real conversation" color="brown" />
        <h2
          className="text-[36px] text-black leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          What it looks like
          <br />
          in your Slack.
        </h2>
        <p className="text-[16px] text-black leading-[22px] w-[458px]">
          No new dashboard. No new tab. Just @ Souvenir like you&apos;d @ a teammate — and watch the workforce execute.
        </p>
      </div>
    </section>
  );
}

// ─── 3. No Syntax Section ────────────────────────────────────────────────────
function NoSyntaxSection() {
  return (
    <section className="flex flex-col gap-4 w-full">
      <Badge label="Talk like a teammate" />
      <h2
        className="text-[40px] text-black leading-[48px] font-normal max-w-[740px]"
        style={{ fontFamily: "var(--font-besley)" }}
      >
        No syntax to learn. Just type what you want.
      </h2>
      <p className="text-[16px] text-[#524b47] leading-[22px] max-w-[974px]">
        The Master Agent understands natural language. Mention it like you would any colleague — short or long, formal or casual.
      </p>
    </section>
  );
}

// ─── 4. Use Cases Section ────────────────────────────────────────────────────
function UseCasePin({ mention, action }: { mention: string; action: string }) {
  return (
    <div className="bg-white flex items-center gap-[8px] p-[8px] rounded-[10.742px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      {/* Category icon */}
      <div className="relative shrink-0 size-[29.5px]">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-1 rounded-[8px] shadow-[0px_0px_0px_1px_rgba(128,183,7,0.5)]">
          <div className="absolute inset-0 rounded-[8px] bg-[#e5f2c5]" />
          <div className="absolute inset-0 rounded-[8px] pointer-events-none shadow-[inset_0px_1.343px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1.343px_0px_0px_rgba(128,183,7,0.1)]" />
          <div className="relative size-[18px]">
            <Image src={imgCategoryIcon} alt="" fill className="object-contain" unoptimized />
          </div>
        </div>
      </div>

      {/* Mention text */}
      <p className="text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap flex-1">
        <span className="font-semibold text-[#c62b29]">@Souvenir </span>
        <span className="text-black font-normal">{action}</span>
      </p>
    </div>
  );
}

function UseCaseCard({
  title,
  action,
  description,
}: {
  title: string;
  action: string;
  description: string;
}) {
  return (
    <div className="bg-white h-[595px] overflow-hidden relative rounded-[16px] flex-1">
      {/* Dark screenshot placeholder */}
      <div className="absolute bg-[rgba(0,0,0,0.15)] rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.2)] left-[18px] top-[211px] right-[18px] bottom-[-200px]" />

      {/* Text content */}
      <div className="absolute top-[25px] left-[18px] right-[18px] flex flex-col gap-4">
        <h3
          className="text-[24px] text-black font-normal leading-[32px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          {title}
        </h3>
        <UseCasePin mention="@Souvenir" action={action} />
        <p className="text-[14px] text-black leading-[22px]">{description}</p>
      </div>
    </div>
  );
}

function UseCasesSection() {
  const rows: { title: string; action: string; description: string }[][] = [
    [
      {
        title: "Delegate a task",
        action: "draft a follow-up email to the prospect we met yesterday",
        description: "The Master hands it to the Brain, which routes to Writer + Inbox. You get a draft to approve.",
      },
      {
        title: "Ask a question",
        action: "what did Sarah and I agree on last week about the launch date?",
        description: "Master pulls from your conversation memory + Pins. Answers in-thread without leaving Slack.",
      },
    ],
    [
      {
        title: "Find a file",
        action: "find the SCS pitch deck from last quarter",
        description: "Drive agent does semantic search across your Google Drive. Returns the file inline.",
      },
      {
        title: "Schedule something",
        action: "book a 30-min sync with the design team on Friday afternoon",
        description: "Master pulls from your conversation memory + Pins. Answers in-thread without leaving Slack.",
      },
    ],
    [
      {
        title: "Trigger a saved Brain",
        action: "find the SCS pitch deck from last quarter",
        description: "Master kicks off a previously saved flow. The whole agent sequence runs autonomously.",
      },
      {
        title: "Schedule your daily tasks",
        action: "help me brainstorm names for the new product line",
        description: "Brain auto-routes to the best model for creative work. Conversation continues in-thread.",
      },
    ],
  ];

  return (
    <section className="flex flex-col gap-16 w-full">
      {rows.map((row, ri) => (
        <div key={ri} className="flex gap-6">
          {row.map((card, ci) => (
            <UseCaseCard key={ci} {...card} />
          ))}
        </div>
      ))}
    </section>
  );
}

// ─── 5. Every Channel Section ─────────────────────────────────────────────────
function ChannelCard({
  icon,
  label,
  channelName,
  description,
}: {
  icon: string;
  label: string;
  channelName: string;
  description: string;
}) {
  return (
    <div className="flex-1 border border-[#ede1d7] rounded-[13px] p-5 flex flex-col gap-0 bg-white">
      <div className="flex flex-col gap-4">
        {/* Icon */}
        <div className="relative size-8 flex-shrink-0">
          <Image src={icon} alt="" fill className="object-contain" unoptimized />
        </div>

        {/* Label */}
        <div className="flex items-center">
          <span className="text-[11px] font-medium text-[#524b47] tracking-wide">{label}</span>
        </div>

        {/* Channel name */}
        <p
          className="text-[32px] text-black font-normal leading-[40px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          {channelName}
        </p>

        {/* Description */}
        <p className="text-[14px] text-[#524b47] leading-[22px]">{description}</p>
      </div>
    </div>
  );
}

function EveryChannelSection() {
  return (
    <section className="flex flex-col gap-[60px] w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 max-w-[687px]">
        <Badge label="Where the Master lives" />
        <h2
          className="text-[40px] text-black leading-[48px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Every channel. Every DM. Wherever you work.
        </h2>
        <p className="text-[16px] text-[#524b47] leading-[22px]">
          The Master shows up wherever you @ it. Public, private, group, or one-on-one — same agent, same memory.
        </p>
      </div>

      {/* 3 cards */}
      <div className="flex gap-0 w-full">
        <ChannelCard
          icon={imgIconMentoring}
          label="Public channels"
          channelName="# growth-team"
          description="Team-wide work. Everyone sees the thread. Great for client reports, weekly digests, cross-functional asks."
        />
        <div className="w-px bg-[#ede1d7] flex-shrink-0" />
        <ChannelCard
          icon={imgIconUserAdd}
          label="Private channels"
          channelName="# exec-strategy"
          description="Sensitive work stays sensitive. Access controls follow Slack's existing channel permissions. Nothing leaks."
        />
        <div className="w-px bg-[#ede1d7] flex-shrink-0" />
        <ChannelCard
          icon={imgIconUser}
          label="Direct messages"
          channelName="1:1 with @Souvenir"
          description="Your own personal AI workspace. Triage your inbox, draft replies, schedule meetings — quietly, just for you."
        />
      </div>
    </section>
  );
}

// ─── 6. Front Door Section ────────────────────────────────────────────────────
function AgentCard({
  icon,
  tag,
  title,
  description,
}: {
  icon: string;
  tag: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex-1 border border-[#ede1d7] rounded-[13px] p-5 flex flex-col gap-4 bg-white">
      <div className="relative size-[30px] flex-shrink-0">
        <Image src={icon} alt="" fill className="object-contain" unoptimized />
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-medium text-[#524b47] tracking-wide">{tag}</span>
        <p
          className="text-[32px] text-black font-normal leading-[40px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          {title}
        </p>
        <p className="text-[14px] text-[#524b47] leading-[22px]">{description}</p>
      </div>
    </div>
  );
}

function FrontDoorSection() {
  return (
    <section className="flex flex-col gap-[60px] w-full items-center">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center text-center max-w-[687px]">
        <Badge label="The full stack" />
        <h2
          className="text-[40px] text-black leading-[48px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Slack Master is the front door. Here&apos;s what&apos;s behind it.
        </h2>
      </div>

      {/* 3 cards */}
      <div className="flex gap-0 w-full">
        <AgentCard
          icon={imgIconBrain}
          tag="The Engine"
          title="The Brain"
          description="The orchestrator the Master delegates to. Plans the work, picks the model, decides which agent does which step."
        />
        <div className="w-px bg-[#ede1d7] flex-shrink-0" />
        <AgentCard
          icon={imgIconUserAi}
          tag="The Workforce"
          title="Specialist Agents"
          description="The hands that ship the work. Writer, Analyst, Researcher, Inbox, Scheduler, Drive — each one a specialist."
        />
        <div className="w-px bg-[#ede1d7] flex-shrink-0" />
        <AgentCard
          icon={imgIconChatAdd}
          tag="The Workforce"
          title="Chat & Saved work"
          description="The web chatspace for deeper work. Multi-model chat, Pins, Projects — where you build the memory the Master uses."
        />
      </div>
    </section>
  );
}

// ─── 7. CTA Card ─────────────────────────────────────────────────────────────
const ctaLogoCols = [
  [imgStripe, imgShopify, imgFigmaLogo, imgCanva],
  [imgWord, imgGDrive, imgTikTok, imgJira],
  [imgOutlook, imgGithub, imgAtlassian, imgMailchimp],
  [imgExcel, imgLinkedIn, imgGmail, imgSlack],
];

function CtaLogoGrid() {
  return (
    <div className="flex gap-[14px] flex-shrink-0">
      {ctaLogoCols.map((col, ci) => (
        <div
          key={ci}
          className="flex flex-col gap-[14px]"
          style={{ marginTop: ci % 2 === 1 ? "37px" : "0" }}
        >
          {col.map((src, li) => (
            <div
              key={li}
              className="size-[75px] bg-white/20 rounded-[9.5px] flex items-center justify-center flex-shrink-0"
            >
              <div className="relative size-[46px]">
                <Image src={src} alt="" fill className="object-contain" unoptimized />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function CtaCard() {
  return (
    <section className="w-full bg-white rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] p-6 flex items-center gap-28 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none rounded-[12px] shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />

      {/* Text */}
      <div className="flex flex-col gap-4 flex-1">
        <h2
          className="text-[40px] text-[#524b47] leading-[48px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Hire your first AI co-worker.
          <br />
          They start today.
        </h2>
        <p
          className="text-[24px] text-[#6a625d] leading-[32px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Install in 30 seconds. Mention in 30 more. Ship work by lunch. No card, no commitment, no consultant required.
        </p>
        <div className="flex items-center gap-6 mt-2">
          <ButtonGhost>Join Discord Community</ButtonGhost>
          <ButtonDark>Book a Demo</ButtonDark>
        </div>
      </div>

      {/* Logo grid */}
      <CtaLogoGrid />
    </section>
  );
}

// ─── 8. Footer ────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks: Record<string, string[]> = {
    Product: ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company: ["About", "Blogs"],
    Legal: ["Terms of Service", "Privacy Policy", "Other Policies"],
  };

  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>

      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8">
        <div className="flex gap-[120px] items-start">
          {/* Brand + newsletter */}
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
              <label className="text-[14px] text-white leading-[22px]">Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">your@company.com</span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitIcon} alt="" fill className="object-contain" unoptimized />
                  </span>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="flex gap-4 flex-wrap">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4 w-[164px]">
                <p className="text-[24px] text-white font-normal leading-[32px]" style={{ fontFamily: "var(--font-besley)" }}>
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
          <div className="size-1.5 rounded-full bg-[#f7f2ed]/60 flex-shrink-0" />
          <p className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SlackBotPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto px-0 pb-0 flex flex-col gap-[100px]">
        <HeroSection />
        <SlackScreenshotSection />
        <NoSyntaxSection />
        <UseCasesSection />
        <EveryChannelSection />
        <FrontDoorSection />
        <CtaCard />
      </div>

      <div className="max-w-[1328px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

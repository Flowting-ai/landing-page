import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────

// Navbar assets
const imgLogoUnion = "https://www.figma.com/api/mcp/asset/7ebcb518-aa41-461e-973a-d7b2f5b39554";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/3130e4bd-b004-4a71-8215-a554595eedad";

// Hero section assets
const imgHeroArrow = "https://www.figma.com/api/mcp/asset/286db562-aff8-4a10-b320-d12f37394f5d";

// Hero persona / agent card images
const imgPersonaA = "https://www.figma.com/api/mcp/asset/27a10a5a-676b-42e3-a2ca-eb6f001b3805";
const imgPersonaB = "https://www.figma.com/api/mcp/asset/af756d38-0ec4-4a9a-8fe1-ed81f6782cfb";
const imgPersonaC = "https://www.figma.com/api/mcp/asset/dcec99b8-cf17-45d9-b1b8-a46be8659a88";
const imgPersonaD = "https://www.figma.com/api/mcp/asset/e180ae43-547c-4d50-9e86-148f0c99bc67";
const imgPersonaE = "https://www.figma.com/api/mcp/asset/a61ad6c1-75c3-4457-bbdd-8e4bf3b91c92";
const imgPersonaF = "https://www.figma.com/api/mcp/asset/6acf84ac-c6d9-4249-ab46-9cefd9d9fcf5";
const imgPersonaG = "https://www.figma.com/api/mcp/asset/074fb79a-af8c-4ae2-8fff-d98368befe2a";
const imgPersonaH = "https://www.figma.com/api/mcp/asset/9b0e6b96-1198-4c71-9e13-93a3dacf548c";

// "Three things" section
const imgScout = "https://www.figma.com/api/mcp/asset/f2970cc9-dde9-4a28-a4a7-ad2b838ce9f8";
const imgPinEllipsis = "https://www.figma.com/api/mcp/asset/8a7f32a4-7bc9-4236-adcd-76f0a86d3d02";
const imgTextRect1 = "https://www.figma.com/api/mcp/asset/4483f53c-7286-422c-a8a7-6083601c86e7";
const imgTextRect2 = "https://www.figma.com/api/mcp/asset/e41af099-16c8-41c5-9574-41f77bedf66d";
const imgTextRect3 = "https://www.figma.com/api/mcp/asset/2b389b0e-41f1-4f4d-a7f0-01864d282efd";
const imgTextRect4 = "https://www.figma.com/api/mcp/asset/1ae16571-0f1e-412b-9d81-8714fff2badc";

// Section 3: "Connected to real tools" integration diagram
const imgAgentsIcon = "https://www.figma.com/api/mcp/asset/3587640d-7fb5-4f04-be09-999947aed729";
const imgUserIcon3 = "https://www.figma.com/api/mcp/asset/a96f4520-a9af-4c9b-88c3-7f019a31bdb7";
const imgLineDash = "https://www.figma.com/api/mcp/asset/96563129-defb-42d3-94bd-31eaf54deccd";
const imgLineDash2 = "https://www.figma.com/api/mcp/asset/2411a9fc-d23b-44a7-80f2-41e3fd48c1b1";
const imgCurveLine = "https://www.figma.com/api/mcp/asset/0c011885-c6c7-4bde-8493-5317b1e070fb";

// Tool logos for section 3
const imgGoogleCloud = "https://www.figma.com/api/mcp/asset/4f4bc8da-bb23-46e9-a322-7820da031562";
const imgNotion3 = "https://www.figma.com/api/mcp/asset/a6a783c6-2c1e-4710-bd4e-35a23592bc5c";
const imgMeta = "https://www.figma.com/api/mcp/asset/07152ff4-a2d7-4905-8abe-d63cc084b603";
const imgShopify3 = "https://www.figma.com/api/mcp/asset/585df452-c7df-4668-8ac6-b16ec2e2697f";
const imgExcel3 = "https://www.figma.com/api/mcp/asset/9509e299-ee7d-4940-a8d3-a0cfe0e581d7";
const imgSlack3 = "https://www.figma.com/api/mcp/asset/df434932-5ca6-4183-8c15-8d76632e0a13";
const imgSearch3 = "https://www.figma.com/api/mcp/asset/0a491669-38d5-4dd5-96a5-d0e61514a490";

// "Person" images (avatars for connected tools section)
const imgPersonConn1 = "https://www.figma.com/api/mcp/asset/9b0e6b96-1198-4c71-9e13-93a3dacf548c";
const imgPersonConn2 = "https://www.figma.com/api/mcp/asset/f2970cc9-dde9-4a28-a4a7-ad2b838ce9f8";
const imgPersonConn3 = "https://www.figma.com/api/mcp/asset/27a10a5a-676b-42e3-a2ca-eb6f001b3805";

// Section 4 - "Best model for the job" images
const imgOpenAi = "https://www.figma.com/api/mcp/asset/96fd363d-c85c-4475-9f15-95259defae35";
const imgMistral = "https://www.figma.com/api/mcp/asset/ccaa81ce-9d64-4421-801d-b67940412a70";
const imgClaude = "https://www.figma.com/api/mcp/asset/1a819842-6e01-4011-b91c-67d1b9ae7f2b";
const imgGemini = "https://www.figma.com/api/mcp/asset/bb6dc101-0b57-4a37-9c5a-8aa32cba7a26";
const imgModelScreenshot = "https://www.figma.com/api/mcp/asset/2a789515-3455-46cb-832b-3700ec5746f1";

// Section 5 - "They work better together" (avatars for collaboration)
const imgCollab1 = "https://www.figma.com/api/mcp/asset/007f80e0-5412-4d8a-9fbc-55acbccab3a0";
const imgCollab2 = "https://www.figma.com/api/mcp/asset/5e452ada-35bd-4783-b866-b4e9627bc3fe";
const imgCollab3 = "https://www.figma.com/api/mcp/asset/79397fcf-488f-4cc5-b166-627a923e07c8";
const imgCollab4 = "https://www.figma.com/api/mcp/asset/f80f92f1-1b47-4f26-9abe-020a31ec2398";
const imgShape1 = "https://www.figma.com/api/mcp/asset/a93e4765-ff9d-4f88-badf-f54311a935cd";
const imgShape2 = "https://www.figma.com/api/mcp/asset/13457ee2-4101-4884-9997-2824f5f440cb";
const imgShape3 = "https://www.figma.com/api/mcp/asset/25565b9b-2f97-413e-aee7-a2d6199cfbd2";
const imgShape4 = "https://www.figma.com/api/mcp/asset/fff7b6a2-32d6-4b15-aa89-a6aaebd29763";

// Section 6 - "Or build your own" screenshot images
const imgPillar1 = "https://www.figma.com/api/mcp/asset/2a789515-3455-46cb-832b-3700ec5746f1";
const imgPillar2 = "https://www.figma.com/api/mcp/asset/05fac687-e299-4c54-8ed1-1eae5a74196e";
const imgPillar3 = "https://www.figma.com/api/mcp/asset/98e8bacb-4b16-4e5e-9b66-62d09bd53be9";
const imgPillar4 = "https://www.figma.com/api/mcp/asset/9269d1de-896a-408c-9007-d5e82626c81b";
const imgPillar5 = "https://www.figma.com/api/mcp/asset/c06411c1-bfdf-4cbd-9bfd-bf5be9d31c6d";
const imgPillar6 = "https://www.figma.com/api/mcp/asset/36506c86-7e5e-4846-ae41-5464a7dd53fb";

// Integrations section logos
const imgStripe = "https://www.figma.com/api/mcp/asset/71094fad-918e-4e1f-8f06-c6cf6ecf7f9d";
const imgShopify = "https://www.figma.com/api/mcp/asset/a31934ec-7e39-4e6e-a7f3-70ea163c3ebe";
const imgFigmaLogo = "https://www.figma.com/api/mcp/asset/e55df26a-d2a7-4e35-94aa-180b6db7a08d";
const imgSlack = "https://www.figma.com/api/mcp/asset/8c6ac277-d3ce-483d-9189-0ba4c78b7a0c";
const imgWord = "https://www.figma.com/api/mcp/asset/e55dea0c-7925-45e3-b9a7-fb1ca221674f";
const imgOutlook = "https://www.figma.com/api/mcp/asset/96518593-f9f9-42eb-b750-7d2a1c04f801";
const imgConfluence = "https://www.figma.com/api/mcp/asset/f3273eae-b474-4d30-9477-2b96c778c837";
const imgJira = "https://www.figma.com/api/mcp/asset/5c1d725c-0717-4acc-ba31-89f17b016ae1";
const imgGmail = "https://www.figma.com/api/mcp/asset/b55aaed8-9970-44ab-8f1d-657612d8c275";
const imgGDrive = "https://www.figma.com/api/mcp/asset/e7f9fafe-8c1b-4b43-8b80-3120ceca971b";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/7128df27-fab0-4c0b-a37d-4c3da2704afd";
const imgExcel = "https://www.figma.com/api/mcp/asset/f70e6898-c82e-42f2-8258-564088642b75";
const imgTikTok5 = "https://www.figma.com/api/mcp/asset/92dc20ea-9dea-48f4-a2cb-f544d45c5de5";
const imgWhatsApp5 = "https://www.figma.com/api/mcp/asset/aef04da3-580e-454c-95fa-5bf876f12d1b";
const imgAtlassian = "https://www.figma.com/api/mcp/asset/b074c1f7-7f1a-4274-a423-094ca0f1d64b";
const imgMailchimp = "https://www.figma.com/api/mcp/asset/a253bd7a-b811-497f-a75b-dd2a48a41983";
const imgGithub = "https://www.figma.com/api/mcp/asset/c0ef1661-75e1-4892-87d5-d85ac5130167";

// Footer
const imgFooterBg = "https://www.figma.com/api/mcp/asset/fff7b6a2-32d6-4b15-aa89-a6aaebd29763";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/a9981b56-12c2-4c0d-8fe6-916df389b451";
const imgSubmitArrow = "https://www.figma.com/api/mcp/asset/cc8947d9-2f64-4c24-9580-9e3251328c8d";
const imgFooterLine = "https://www.figma.com/api/mcp/asset/6aadc07f-8d89-4397-8006-d540e894688a";
const imgFooterEllipse = "https://www.figma.com/api/mcp/asset/583e2c68-3f47-40ca-a01d-b2f850dab847";

// ─── Shared Components ────────────────────────────────────────────────────────

function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button
      className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] relative bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
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
  color?: "neutral" | "brown" | "blue";
}) {
  const styles = {
    neutral: {
      bg: "bg-[#ede1d7]",
      text: "text-[#524b47]",
      shadow: "shadow-[0px_1.323px_1.985px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]",
      inset: "shadow-[inset_0px_1.323px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1.323px_0px_0px_rgba(106,98,93,0.1)]",
    },
    brown: {
      bg: "bg-[#e6d5ca]",
      text: "text-[#683d1b]",
      shadow: "shadow-[0px_1.476px_2.214px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)]",
      inset: "shadow-[inset_0px_1.476px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.476px_0px_0px_rgba(126,84,53,0.1)]",
    },
    blue: {
      bg: "bg-[#cadcf1]",
      text: "text-[#135487]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(2,15,24,0.2),0px_0px_0px_1px_rgba(13,110,178,0.5)]",
      inset: "shadow-[inset_0px_1px_0px_0px_rgba(231,244,253,0.7),inset_0px_-1px_0px_0px_rgba(13,110,178,0.1)]",
    },
  };
  const s = styles[color];
  return (
    <span
      className={`inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] ${s.shadow} relative shrink-0`}
    >
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

// ─── Mini Agent Card (Pin) ────────────────────────────────────────────────────
function AgentPin({
  avatar,
  name,
  handle,
  tags,
  description,
  active = false,
  size = "md",
}: {
  avatar: string;
  name: string;
  handle: string;
  tags: { label: string; color: "neutral" | "blue" }[];
  description?: string;
  active?: boolean;
  size?: "sm" | "md";
}) {
  const sm = size === "sm";
  return (
    <div
      className={`bg-white flex flex-col ${active ? "border border-[#524b47]" : ""} shadow-[0px_2px_2.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7] ${sm ? "gap-[7.6px] p-[10px] rounded-[13.5px]" : "gap-[9px] p-[12px] rounded-[16px]"} overflow-clip`}
    >
      {/* Header */}
      <div className={`flex items-start w-full ${sm ? "gap-[10px]" : "gap-[12px]"}`}>
        {/* Avatar */}
        <div
          className={`relative overflow-clip flex-shrink-0 shadow-[0px_1px_1px_0px_rgba(59,54,50,0.05),0px_1.3px_0.9px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.9px_#ede1d7] ${sm ? "size-[55px] rounded-[6.8px]" : "size-[65px] rounded-[8px]"}`}
        >
          <Image src={avatar} alt={name} fill className="object-cover" unoptimized />
        </div>
        {/* Name + handle + tags */}
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex items-start justify-between w-full">
            <div className="flex flex-col min-w-0">
              <p
                className={`text-[#26211e] overflow-hidden text-ellipsis whitespace-nowrap font-normal ${sm ? "text-[13.5px] leading-[18.6px]" : "text-[16px] leading-[22px]"}`}
                style={{ fontFamily: "var(--font-besley)" }}
              >
                {name}
              </p>
              <p className={`text-[#827a74] font-mono overflow-hidden text-ellipsis ${sm ? "text-[11px] leading-[13.5px]" : "text-[13px] leading-[16px]"}`}>
                {handle}
              </p>
            </div>
            <div className={`flex items-center justify-center overflow-clip rounded-[8px] flex-shrink-0 ${sm ? "p-[5px]" : "p-[6px]"}`}>
              <div className={`relative overflow-clip ${sm ? "size-[16.9px]" : "size-[20px]"}`}>
                <Image src={imgPinEllipsis} alt="" fill className="object-contain" unoptimized />
              </div>
            </div>
          </div>
          <div className={`flex items-center ${sm ? "gap-[7.6px] mt-[6.8px]" : "gap-[9px] mt-[8px]"}`}>
            {tags.map((t) => (
              <Badge key={t.label} label={t.label} color={t.color} />
            ))}
          </div>
        </div>
      </div>
      {/* Description text lines or actual text */}
      {description ? (
        <p className="text-[11px] text-[#857a72] leading-[16px] overflow-hidden text-ellipsis w-full">
          {description}
        </p>
      ) : (
        <div className="flex flex-col gap-[1.5px] w-full">
          {[imgTextRect1, imgTextRect2, imgTextRect3, imgTextRect4].map((src, i) => (
            <div key={i} className={`h-[8.2px] relative ${i === 0 ? "w-[35%]" : i === 2 ? "w-[55%]" : "w-full"}`}>
              <Image src={src} alt="" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="w-full bg-white border border-[rgba(0,0,0,0.08)] rounded-[26.56px] overflow-clip pt-8 pb-0 px-9 flex flex-col gap-16 items-center justify-center">
      {/* Top content */}
      <div className="flex flex-col gap-4 items-center">
        {/* Badge */}
        <span className="inline-flex items-center justify-center overflow-clip px-[8px] py-1.5 rounded-[6px] shadow-[0px_1.476px_2.214px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)] relative">
          <span className="absolute inset-0 rounded-[6px] pointer-events-none bg-[#e6d5ca]" />
          <span className="absolute inset-0 rounded-[6px] pointer-events-none shadow-[inset_0px_1.476px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.476px_0px_0px_rgba(126,84,53,0.1)]" />
          <span className="relative text-[14px] font-medium leading-[24px] whitespace-nowrap text-[#683d1b]">
            Multi-agent workforce
          </span>
        </span>

        {/* Headline */}
        <p
          className="text-[48px] text-black text-center leading-[56px] font-normal max-w-[977px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          The future of Agentic Ai: A team of specialized agents that know your context and do your work.
        </p>

        {/* Subtitle */}
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[977px]">
          Souvenir AI Agents are specialized digital coworkers connected to all your apps, grounded in your shared
          memory, and orchestrated to execute all of your busywork.
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-4 mt-2">
          <ButtonGhost>Get started for free</ButtonGhost>
          <ButtonDark>
            Book a Demo
            <span className="relative size-4 flex-shrink-0">
              <Image src={imgHeroArrow} alt="" fill className="object-contain" unoptimized />
            </span>
          </ButtonDark>
        </div>
      </div>

      {/* App mockup */}
      <div className="w-[1249px] border-[5px] border-[#9c938b] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden flex-shrink-0 self-center bg-white">
        {/* Sidebar + content */}
        <div className="flex h-[585px]">
          {/* Sidebar */}
          <div className="w-[212px] bg-[#f7f2ed] flex flex-col gap-0 overflow-hidden pt-[107px] flex-shrink-0">
            <div className="flex flex-col gap-[2.9px] px-[5.8px] pt-[8.7px] pb-[5.8px]">
              {/* Chat board */}
              <div className="flex items-center gap-[5.8px] px-[4.3px] py-[3.6px] rounded-[10px]">
                <div className="size-[14.5px] relative flex-shrink-0">
                  <Image src={imgUserIcon3} alt="" fill className="object-contain" unoptimized />
                </div>
                <span className="text-[10px] font-medium text-[#524b47]">Chat board</span>
              </div>
              {/* Persona — selected */}
              <div className="flex items-center gap-[5.8px] px-[4.3px] py-[3.6px] rounded-[10px] bg-[rgba(237,225,215,0.6)] shadow-[0px_0.7px_1.1px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_rgba(182,172,164,0.4)] relative">
                <div className="absolute inset-0 rounded-[10px] shadow-[inset_0px_0.7px_0px_0px_rgba(247,242,237,0.61),inset_0px_-0.7px_0px_0px_rgba(106,98,93,0.05)]" />
                <div className="size-[10.4px] relative flex-shrink-0">
                  <Image src={imgAgentsIcon} alt="" fill className="object-contain" unoptimized />
                </div>
                <span className="text-[10px] font-medium text-[#524b47] relative z-10">Persona</span>
              </div>
              {/* Workflow */}
              <div className="flex items-center gap-[5.8px] px-[4.3px] py-[3.6px] rounded-[10px]">
                <div className="size-[14.5px] relative flex-shrink-0">
                  <Image src={imgUserIcon3} alt="" fill className="object-contain" unoptimized />
                </div>
                <span className="text-[10px] font-medium text-[#524b47]">Workflow</span>
              </div>
            </div>
            <div className="flex flex-col gap-[2.9px] p-[5.8px]">
              <div className="flex flex-col gap-[2.9px]">
                <div className="px-[4.3px] py-[3.6px]">
                  <span className="text-[8px] font-medium text-[#827a74]">Projects</span>
                </div>
                {["New project", "Folder name", "Folder name", "Project B"].map((item) => (
                  <div key={item} className="flex items-center gap-[5.8px] px-[4.3px] py-[3.6px] rounded-[10px]">
                    <span className="text-[10px] font-medium text-[#524b47]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main content: agent cards */}
          <div className="flex-1 overflow-hidden p-6 flex flex-col gap-4">
            <p className="text-[18px] font-medium text-[#26211e]" style={{ fontFamily: "var(--font-besley)" }}>
              AI Agents
            </p>
            <div className="grid grid-cols-3 gap-3">
              {[
                { avatar: imgPersonaA, name: "Scout", handle: "@scout", tags: [{ label: "Private", color: "neutral" as const }, { label: "Research", color: "blue" as const }], description: "Pulls together market data, competitor moves, and internal docs into a clean, decision-ready brief. No more 14 tabs and a half-read PDF." },
                { avatar: imgPersonaB, name: "Drafter", handle: "@gimmey00", tags: [{ label: "Private", color: "neutral" as const }, { label: "Research", color: "blue" as const }] },
                { avatar: imgPersonaC, name: "Ops", handle: "@handle", tags: [{ label: "Private", color: "neutral" as const }, { label: "Research", color: "blue" as const }] },
                { avatar: imgPersonaD, name: "Copywriter", handle: "@copy", tags: [{ label: "Private", color: "neutral" as const }] },
                { avatar: imgPersonaE, name: "Legal", handle: "@legal", tags: [{ label: "Private", color: "neutral" as const }] },
                { avatar: imgPersonaF, name: "Research", handle: "@research", tags: [{ label: "Private", color: "neutral" as const }, { label: "Research", color: "blue" as const }] },
              ].map((agent, i) => (
                <AgentPin
                  key={i}
                  avatar={agent.avatar}
                  name={agent.name}
                  handle={agent.handle}
                  tags={agent.tags}
                  description={agent.description}
                  active={i === 0}
                  size="sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Three Things Section ──────────────────────────────────────────────────────
function ThreeThingsSection() {
  return (
    <section className="flex flex-col gap-8 items-center w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="What's a Souvenir Agent" color="neutral" />
        <h2
          className="text-[36px] text-black text-center leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Three things every{"\n"}Souvenir agent does well.
        </h2>
      </div>

      {/* Three cards */}
      <div className="flex gap-6 items-start w-full">
        {/* Card 1: One role, one job */}
        <div className="flex-1 bg-[#ede1d7] rounded-[16px] p-8 flex flex-col gap-8 items-center overflow-hidden">
          <div className="flex flex-col gap-4 items-start w-full">
            <p className="font-mono text-[13px] text-black leading-[16px]">01 / One role, one job</p>
            <h3
              className="text-[24px] text-black font-normal leading-[32px] h-[64px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Each Assistant has a job description
            </h3>
          </div>
          {/* Agent cards mockup */}
          <div className="relative w-full h-[300px]">
            {/* Background small cards */}
            <div className="absolute top-[196px] left-[22px] w-[265px]">
              <AgentPin
                avatar={imgPersonaB}
                name="Drafter"
                handle="@gimmey00"
                tags={[{ label: "Private", color: "neutral" }, { label: "Research", color: "blue" }]}
                size="sm"
              />
            </div>
            <div className="absolute top-0 left-[22px] w-[265px]">
              <AgentPin
                avatar={imgPersonaA}
                name="Ops"
                handle="@handle"
                tags={[{ label: "Private", color: "neutral" }, { label: "Research", color: "blue" }]}
                size="sm"
              />
            </div>
            {/* Front large active card */}
            <div className="absolute top-[84px] left-0 w-[314px]">
              <AgentPin
                avatar={imgScout}
                name="Scout"
                handle="@scout"
                tags={[{ label: "Private", color: "neutral" }, { label: "Research", color: "blue" }]}
                description="Pulls together market data, competitor moves, and internal docs into a clean, decision-ready brief. No more 14 tabs and a half-read PDF."
                active
                size="md"
              />
            </div>
          </div>
        </div>

        {/* Card 2: Memory-aware */}
        <div className="flex-1 bg-[#ede1d7] rounded-[16px] p-8 flex flex-col gap-8 items-center overflow-hidden">
          <div className="flex flex-col gap-4 items-start w-full">
            <p className="font-mono text-[13px] text-black leading-[16px]">02 / Memory-aware out of the box</p>
            <h3
              className="text-[24px] text-black font-normal leading-[32px] h-[64px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Your context travels with every task
            </h3>
          </div>
          {/* Context cards stack */}
          <div className="relative w-full h-[300px]">
            {/* Top card */}
            <div className="absolute top-[10px] left-[41px] w-[249px] bg-white rounded-[12px] p-[9px] shadow-[0px_1.5px_2.1px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.75px_#ede1d7] flex flex-col gap-[6.75px]">
              <div className="flex flex-col">
                <p className="text-[12px] font-medium text-[#26211e] leading-[16.5px]">Direct & confident</p>
                <p className="text-[9.75px] font-mono text-[#827a74] leading-[12px]">Gets to the point. No filler.</p>
              </div>
              <div className="h-px bg-[rgba(59,54,50,0.15)] w-full" />
              <p className="text-[10.5px] text-[#857a72] leading-[16.5px] h-[33px] overflow-hidden text-ellipsis">
                <span className="text-[#c4af9f]">Ex -</span>
                {` "Issue logged. Here's what happens next."`}
              </p>
            </div>
            {/* Badge: Instructions */}
            <div className="absolute top-0 right-0">
              <Badge label="Instructions" color="neutral" />
            </div>
            {/* Middle card */}
            <div className="absolute top-[81px] left-[27px] w-[276px] bg-white rounded-[13.3px] p-[10px] shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25),0px_1.7px_2.3px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.83px_#ede1d7] flex flex-col gap-[7.5px]">
              <div className="flex flex-col">
                <p className="text-[13.3px] font-medium text-[#26211e] leading-[18.3px]">Context</p>
                <p className="text-[10.8px] font-mono text-[#827a74] leading-[13.3px] text-ellipsis overflow-hidden whitespace-nowrap">
                  Brand voice, customer archetypes, ban..
                </p>
              </div>
              <div className="h-px bg-[rgba(59,54,50,0.15)] w-full" />
              <p className="text-[11.6px] text-[#857a72] leading-[18.3px] h-[36.6px] overflow-hidden text-ellipsis">
                <span className="text-[#c4af9f]">Ex -</span>
                {` "They write in your voice because they're standing on your context, not guessing."`}
              </p>
            </div>
            {/* Badge: Documentation */}
            <div className="absolute top-[71px] right-[-4px]">
              <Badge label="Documentation" color="neutral" />
            </div>
            {/* Ai Agents bar */}
            <div className="absolute top-[255px] left-0 w-full bg-white rounded-[13.7px] flex items-center px-[18.3px] py-[12.6px] gap-[36.6px] shadow-[0px_-4px_4px_0px_rgba(0,0,0,0.25)]">
              <div className="flex items-center gap-[12px]">
                <div className="relative size-[30px] overflow-clip flex-shrink-0">
                  <Image src={imgAgentsIcon} alt="" fill className="object-contain" unoptimized />
                </div>
                <p className="text-[20.9px] font-medium text-[#524b47]">Ai Agents</p>
              </div>
              {/* Avatar stack */}
              <div className="flex items-center">
                {[imgPersonConn1, imgPersonConn2, imgPersonConn3].map((src, i) => (
                  <div
                    key={i}
                    className={`size-[36px] rounded-[9.1px] border-[0.76px] border-white overflow-hidden flex-shrink-0 shadow-[0px_0.6px_0.6px_0px_rgba(59,54,50,0.05),0px_0.8px_0.55px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.55px_#ede1d7] ${i > 0 ? "-ml-[7.6px]" : ""} relative`}
                  >
                    <Image src={src} alt="" fill className="object-cover" unoptimized />
                  </div>
                ))}
                <div className="size-[36px] rounded-[9.1px] border-[0.76px] border-white overflow-hidden flex-shrink-0 -ml-[7.6px] bg-[#cfbeac] flex items-center justify-center">
                  <span className="text-[12px] text-white font-normal" style={{ fontFamily: "var(--font-besley)" }}>
                    +12
                  </span>
                </div>
              </div>
            </div>
            {/* Badge: Tools */}
            <div className="absolute top-[154px] right-[0px]">
              <Badge label="Tools" color="neutral" />
            </div>
            {/* Badge: Deploy */}
            <div className="absolute top-[246px] right-[-4px]">
              <Badge label="Deploy" color="neutral" />
            </div>
          </div>
        </div>

        {/* Card 3: Connected to real tools */}
        <div className="flex-1 bg-[#ede1d7] rounded-[16px] p-8 flex flex-col gap-8 items-center overflow-hidden">
          <div className="flex flex-col gap-4 items-start w-full">
            <p className="font-mono text-[13px] text-black leading-[16px]">03 / Connected to real tools</p>
            <h3
              className="text-[24px] text-black font-normal leading-[32px] h-[64px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              They read and write in your stack
            </h3>
          </div>
          {/* Integration diagram */}
          <div className="bg-white rounded-[16px] overflow-hidden w-[356px] h-[318px] relative flex-shrink-0">
            {/* Agents button top center */}
            <div className="absolute top-[6px] left-1/2 -translate-x-1/2 flex flex-col gap-[20px] items-center w-[61px]">
              <div className="relative size-[43px]">
                <Image src={imgAgentsIcon} alt="" fill className="object-contain" unoptimized />
              </div>
              {/* "Agents" button */}
              <div className="flex items-center justify-center bg-white rounded-[9px] shadow-[0px_1px_1px_0px_rgba(59,54,50,0.05),0px_1.3px_2.8px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.9px_#ede1d7] px-[1.8px] py-[3.6px] w-full">
                <span className="absolute inset-0 rounded-[9px] shadow-[inset_0px_-2px_0.33px_0px_#ede1d7] pointer-events-none" />
                <span className="text-[14.6px] font-semibold text-[#524b47] relative z-10">Agents</span>
              </div>
            </div>
            {/* Vertical line from agents down */}
            <div className="absolute top-[49px] left-[176px] w-0 h-[20px] flex items-center justify-center">
              <div className="rotate-90 w-[20px] h-px relative">
                <Image src={imgLineDash} alt="" fill className="object-contain" unoptimized />
              </div>
            </div>
            {/* Horizontal line */}
            <div className="absolute top-[111.5px] left-[59.5px] w-[234px] h-[17.5px] relative">
              <Image src={imgCurveLine} alt="" fill className="object-contain" unoptimized />
            </div>
            {/* Agent avatars row */}
            <div className="absolute top-[130px] left-[9px] flex gap-[24px] items-start">
              {[
                { src: imgPersonConn1, label: "Ad Copywriter" },
                { src: imgPersonConn2, label: "PDP Writer" },
                { src: imgPersonConn3, label: "Research Agent" },
              ].map((agent, i) => (
                <div key={i} className="flex flex-col gap-[8px] items-center">
                  <div className="size-[32px] rounded-[32px] border border-white overflow-hidden shadow-[0px_0.55px_0.55px_0px_rgba(59,54,50,0.05),0px_0.72px_0.5px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.5px_#ede1d7] relative">
                    <Image src={agent.src} alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="bg-[#f7f2ed] px-[6px] py-[4px] rounded-[14.6px] shadow-[0px_1.8px_2.5px_0px_rgba(82,75,71,0.12)]">
                    <p className="text-[12px] text-[#26211e] font-normal leading-[20px] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
                      {agent.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Tool icon columns */}
            <div className="absolute top-[217px] left-[48px] flex flex-col gap-[11px]">
              <div className="size-[24px] relative"><Image src={imgMeta} alt="Meta" fill className="object-contain rounded-[6px]" unoptimized /></div>
              <div className="size-[24px] relative"><Image src={imgGoogleCloud} alt="Google Cloud" fill className="object-contain" unoptimized /></div>
              <div className="size-[24px] relative"><Image src={imgSearch3} alt="Search" fill className="object-contain" unoptimized /></div>
            </div>
            <div className="absolute top-[217px] left-[161px] flex flex-col gap-[6px]">
              <div className="size-[30px] relative"><Image src={imgShopify3} alt="Shopify" fill className="object-contain" unoptimized /></div>
              <div className="size-[30px] relative"><Image src={imgExcel3} alt="Excel" fill className="object-contain" unoptimized /></div>
              <div className="size-[23px] relative"><Image src={imgSlack3} alt="Slack" fill className="object-contain" unoptimized /></div>
            </div>
            <div className="absolute top-[217px] left-[282px] flex flex-col gap-[11px]">
              <div className="size-[24px] relative"><Image src={imgNotion3} alt="Notion" fill className="object-contain" unoptimized /></div>
              <div className="size-[24px] relative"><Image src={imgSearch3} alt="Search" fill className="object-contain" unoptimized /></div>
              <div className="size-[24px] relative"><Image src={imgGoogleCloud} alt="Google Cloud" fill className="object-contain" unoptimized /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Section ─────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    {
      value: "∞",
      headline: "Build unlimited AI Assistants. One workforce, every role you need.",
      sub: "No cap · No per-seat tax",
    },
    {
      value: "250+",
      headline: "Native connectors to the tools you already use.",
      sub: "Shopify · Klaviyo · Drive · Gmail · Notion · Slack · +244",
    },
    {
      value: "4",
      headline: "Different pro models that are automatically chosen for each of your tasks based on their expertise",
      sub: "OpenAI · Anthropic · Google Gemini · Mistral",
    },
  ];

  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-8 items-start">
      {stats.map((stat, i) => (
        <div key={i} className="flex-1 flex flex-col gap-4 items-center text-center">
          <p
            className="text-[128px] text-[#6a625d] leading-[150px] whitespace-nowrap font-normal"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {stat.value}
          </p>
          <p
            className="text-[24px] text-black font-normal leading-[32px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {stat.headline}
          </p>
          <p className="font-mono font-bold text-[13px] text-black leading-[16px]">{stat.sub}</p>
        </div>
      ))}
    </section>
  );
}

// ─── Best Model Section ────────────────────────────────────────────────────────
function BestModelSection() {
  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-[94px] items-center">
      {/* Left text */}
      <div className="flex flex-col gap-4 items-start flex-shrink-0 overflow-clip p-0.5">
        <Badge label="Intelligent context layer" color="neutral" />
        <h2
          className="text-[36px] text-black leading-[42px] font-normal w-[522px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          The best model for the job. Every time.
        </h2>
        <p
          className="text-[16px] text-black leading-[22px] w-[522px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          OpenAI, Anthropic, Google Gemini, Mistral — pick the model your Assistant runs on, or let the Brain
          auto-route per task. When a new model ships, your Assistants get smarter without a re-build.
        </p>
      </div>

      {/* Right: screenshot */}
      <div className="flex-1 bg-[#ede1d7] rounded-[15.7px] overflow-hidden relative h-[499px]">
        {/* Model icons button */}
        <div className="absolute top-[24.5px] left-1/2 -translate-x-1/2 flex items-center gap-[2px] overflow-clip pb-[7.8px] pt-[5.9px] px-[9.8px] rounded-[9.8px] shadow-[0px_0px_0px_0.98px_#000,0px_1.1px_1.1px_0px_rgba(59,54,50,0.1),0px_1.4px_3.1px_0px_rgba(59,54,50,0.4)]">
          <span className="absolute inset-0 bg-gradient-to-b from-[#524b47] to-[#26211e] rounded-[9.8px] pointer-events-none" />
          <span className="absolute inset-0 rounded-[9.8px] pointer-events-none shadow-[inset_0px_0.98px_0.36px_0px_rgba(247,242,237,0.3),inset_0px_-2.1px_0.36px_0px_#120c08,inset_0px_-2.5px_3.9px_-2.1px_rgba(247,242,237,0.5)]" />
          {[imgOpenAi, imgMistral, imgClaude, imgGemini].map((src, i) => (
            <div key={i} className="relative size-[23.5px] rounded-[6px] overflow-hidden flex-shrink-0 z-10">
              <Image src={src} alt="" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
        {/* App screenshot */}
        <div className="absolute top-[75px] left-[38px] right-[-43px] bottom-[-500px] rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
          <Image src={imgModelScreenshot} alt="Model selection UI" fill className="object-cover object-top" unoptimized />
        </div>
      </div>
    </section>
  );
}

// ─── Team Collaboration Section ────────────────────────────────────────────────
function TeamCollaborationSection() {
  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-[94px] items-center">
      {/* Left: screenshot */}
      <div className="bg-[#ede1d7] rounded-[15.7px] overflow-hidden relative h-[499px] flex-shrink-0 w-[639px]">
        <div className="absolute inset-[12px_0px_0px_-194px] bg-[#f7f2ed] rounded-[16px] overflow-hidden flex">
          {/* Mini sidebar */}
          <div className="w-[166px] bg-[#f7f2ed] flex flex-col gap-0 overflow-hidden pt-[84px] flex-shrink-0">
            <div className="flex flex-col gap-[2.3px] px-[4.5px] pt-[6.8px] pb-[4.5px]">
              {["Chat board", "Persona", "Workflow"].map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-[4.5px] px-[3.4px] py-[2.8px] rounded-[10px] ${i === 1 ? "bg-[rgba(237,225,215,0.6)] shadow-[0px_0.6px_0.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_rgba(182,172,164,0.4)]" : ""}`}
                >
                  <span className="text-[7.9px] font-medium text-[#524b47]">{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-[2.3px] p-[4.5px]">
              <div className="px-[3.4px] py-[2.8px]">
                <span className="text-[6.2px] font-medium text-[#827a74]">Projects</span>
              </div>
              {["New project", "Folder name", "Folder name", "Project B"].map((item) => (
                <div key={item} className="flex items-center gap-[4.5px] px-[3.4px] py-[2.8px] rounded-[10px]">
                  <span className="text-[7.9px] font-medium text-[#524b47]">{item}</span>
                </div>
              ))}
              <div className="px-[3.4px] py-[2.8px]">
                <span className="text-[6.2px] font-medium text-[#827a74]">Marketing Teams</span>
              </div>
            </div>
          </div>
          {/* Main content area */}
          <div className="flex-1 p-4 flex flex-col gap-3">
            <p className="text-[12px] font-medium text-[#26211e]" style={{ fontFamily: "var(--font-besley)" }}>
              Team Workspace
            </p>
            {/* Agent collaboration cards */}
            <div className="flex flex-col gap-2">
              {[
                { src: imgCollab1, shape: imgShape1, name: "Marketing Agent", status: "Writing email campaign..." },
                { src: imgCollab2, shape: imgShape2, name: "Research Agent", status: "Pulling competitor data..." },
                { src: imgCollab3, shape: imgShape3, name: "Ops Agent", status: "Updating CRM records..." },
                { src: imgCollab4, shape: imgShape4, name: "Analytics Agent", status: "Building report..." },
              ].map((agent, i) => (
                <div key={i} className="bg-white rounded-[8px] p-[8px] flex items-center gap-[8px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.08),0px_0px_0px_0.5px_#ede1d7]">
                  <div className="size-[28px] relative rounded-[6px] overflow-hidden flex-shrink-0">
                    <Image src={agent.src} alt="" fill className="object-cover" unoptimized />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <p className="text-[8px] font-medium text-[#26211e] truncate" style={{ fontFamily: "var(--font-besley)" }}>
                      {agent.name}
                    </p>
                    <p className="text-[7px] text-[#827a74] font-mono truncate">{agent.status}</p>
                  </div>
                  <div className="size-[16px] relative flex-shrink-0">
                    <Image src={agent.shape} alt="" fill className="object-contain" unoptimized />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right text */}
      <div className="flex flex-col gap-4 items-start flex-1">
        <Badge label="Built for teams" color="neutral" />
        <h2
          className="text-[36px] text-black leading-[42px] font-normal"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          They work better together.
        </h2>
        <p
          className="text-[16px] text-black leading-[22px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Your AI workforce coordinates across roles. The Scout researches, the Drafter writes, the Ops agent logs —
          all in parallel, sharing context through the Brain. No copy-paste handoffs.
        </p>
        <p
          className="text-[16px] text-black leading-[22px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Assign tasks via Slack, review and approve from your existing channels, and let your agents handle the
          execution end-to-end.
        </p>
      </div>
    </section>
  );
}

// ─── Build Your Own Section ────────────────────────────────────────────────────
function BuildYourOwnSection() {
  const pillars = [
    {
      num: "PILLAR 01",
      title: "Start from a template — or a blank slate.",
      body: "Pick a pre-built template for Sales, Legal, Research, Content, or Marketing. Or start blank and shape the role from scratch. Every Assistant is yours to customize end to end.",
      img: imgPillar1,
    },
    {
      num: "PILLAR 02",
      title: "Define the role. Pick the model.",
      body: "Write the system instruction in plain English — the job description for your Assistant. Choose the model that best matches the work. Souvenir handles routing and cost optimization",
      img: imgPillar2,
    },
    {
      num: "PILLAR 03",
      title: "A name. An avatar. A personality.",
      body: "Profiles matter when your team uses ten Assistants daily. A clear face and name means anyone on the team can spot the right one without reading the system prompt.",
      img: imgPillar3,
    },
    {
      num: "PILLAR 04",
      title: "Feed it knowledge it should remember.",
      body: "Upload files, link Drive folders, paste URLs. Your Assistant retrieves the relevant context at the moment it needs it — so it answers from your reality, not the open internet.",
      img: imgPillar4,
    },
    {
      num: "PILLAR 05",
      title: "Pick the apps it can reach.",
      body: "Connect Gmail, Drive, Shopify, Klaviyo, Slack, Notion, and dozens more. Your Assistant reads what it needs and writes back through approval gates — no copy-paste, no broken handoffs.",
      img: imgPillar5,
    },
    {
      num: "PILLAR 06",
      title: "Decide who else gets to use it.",
      body: "Keep it private, share with your team, or generate a Super Link to share externally. Permissions per Assistant, per teammate, per action — you control the surface area.",
      img: imgPillar6,
    },
  ];

  return (
    <section className="flex flex-col gap-16 items-start w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-start">
        <Badge label="Beyond the library" color="neutral" />
        <h2
          className="text-[40px] text-black leading-[48px] font-normal whitespace-nowrap"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Or build your own — no code, no prompt engineering.
        </h2>
        <p className="text-[16px] text-black leading-[22px]">
          Start from a template, fork an existing Assistant, or build from scratch. Give it a role, attach connectors,
          point it at the Pins it should consume, and ship.
        </p>
      </div>

      {/* Pillar cards: 2 columns */}
      <div className="flex flex-col gap-6 w-full">
        {/* Row 1 */}
        <div className="flex gap-6 items-center">
          {pillars.slice(0, 2).map((p, i) => (
            <div key={i} className="flex-1 bg-white rounded-[16px] overflow-hidden h-[595px] relative">
              <div className="absolute left-[18px] top-[25px] flex flex-col gap-4 w-[615px]">
                <p className="font-mono text-[13px] text-black leading-[16px]">{p.num}</p>
                <p
                  className="text-[24px] text-black font-normal leading-[32px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {p.title}
                </p>
                <p className="text-[16px] text-black leading-[22px] w-[626px]">{p.body}</p>
              </div>
              {/* Screenshot */}
              <div
                className="absolute rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  left: i === 0 ? "18px" : "50%",
                  top: i === 0 ? "211px" : "215px",
                  width: i === 0 ? "615px" : "617px",
                  height: i === 0 ? "724px" : "834px",
                  transform: i === 1 ? "translateX(-50%)" : "none",
                }}
              >
                <Image src={p.img} alt={p.title} fill className="object-cover object-top" unoptimized />
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-6 items-center">
          {pillars.slice(2, 4).map((p, i) => (
            <div key={i} className="flex-1 bg-white rounded-[16px] overflow-hidden h-[595px] relative">
              <div className="absolute left-[18px] top-[25px] flex flex-col gap-4 w-[615px]">
                <p className="font-mono text-[13px] text-black leading-[16px]">{p.num}</p>
                <p
                  className="text-[24px] text-black font-normal leading-[32px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {p.title}
                </p>
                <p className="text-[16px] text-black leading-[22px] w-[626px]">{p.body}</p>
              </div>
              <div
                className="absolute rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  left: i === 0 ? "16px" : "50%",
                  top: "213px",
                  width: i === 0 ? "617px" : "617px",
                  height: i === 0 ? "1029px" : "491px",
                  transform: i === 1 ? "translateX(-50%)" : "none",
                }}
              >
                <Image src={p.img} alt={p.title} fill className="object-cover object-top" unoptimized />
              </div>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-6 items-center">
          {pillars.slice(4, 6).map((p, i) => (
            <div key={i} className="flex-1 bg-white rounded-[16px] overflow-hidden h-[595px] relative">
              <div className="absolute left-[18px] top-[25px] flex flex-col gap-4 w-[615px]">
                <p className="font-mono text-[13px] text-black leading-[16px]">{p.num}</p>
                <p
                  className="text-[24px] text-black font-normal leading-[32px] whitespace-nowrap"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {p.title}
                </p>
                <p className="text-[16px] text-black leading-[22px] w-[626px]">{p.body}</p>
              </div>
              <div
                className="absolute rounded-[16px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
                style={{
                  left: i === 0 ? "50%" : "50%",
                  top: "213px",
                  width: i === 0 ? "617px" : "617px",
                  height: i === 0 ? "602px" : "442px",
                  transform: "translateX(-50%)",
                }}
              >
                <Image src={p.img} alt={p.title} fill className="object-cover object-top" unoptimized />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Integrations Section ──────────────────────────────────────────────────────
const integrationRows = [
  [
    { src: imgStripe, name: "Stripe" },
    { src: imgShopify, name: "Shopify" },
    { src: imgFigmaLogo, name: "Figma" },
    { src: imgSlack, name: "Slack" },
    { src: imgWord, name: "Word" },
    { src: imgOutlook, name: "Outlook" },
    { src: imgConfluence, name: "Confluence" },
    { src: imgJira, name: "Jira" },
    { src: imgGmail, name: "Gmail" },
  ],
  [
    { src: imgOutlook, name: "Outlook" },
    { src: imgAtlassian, name: "Atlassian" },
    { src: imgGDrive, name: "Google Drive" },
    { src: imgFigmaLogo, name: "Figma" },
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
    { src: imgMailchimp, name: "Mailchimp" },
    { src: imgConfluence, name: "Confluence" },
    { src: imgGithub, name: "GitHub" },
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
      {/* Scrolling rows */}
      <div className="absolute inset-0 flex flex-col gap-6 justify-center py-6">
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

      {/* Center CTA card */}
      <div className="relative z-10 bg-white rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] p-6 max-w-[901px] w-full mx-auto flex flex-col gap-4 items-center">
        <span className="absolute inset-0 rounded-[12px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
        <div className="flex flex-col gap-4 items-center text-center relative z-10">
          <h2
            className="text-[40px] text-[#524b47] leading-[48px] font-normal whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {`Hire your first Assistant. It's already trained.`}
          </h2>
          <p
            className="text-[24px] text-[#6a625d] leading-[32px] font-normal max-w-[801px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Pick a starting point. Connect your apps. Let your new workforce get to work.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <ButtonGhost>Join Discord Community</ButtonGhost>
            <ButtonDark>Book a Demo</ButtonDark>
          </div>
        </div>
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
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      {/* Background */}
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8">
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
              <label
                className="text-[14px] text-white leading-[22px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Newsletter
              </label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">
                  your@company.com
                </span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0 relative">
                  <span className="absolute inset-0 rounded-[10px] shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)] pointer-events-none" />
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitArrow} alt="" fill className="object-contain" unoptimized />
                  </span>
                  <span className="relative z-10">Subscribe</span>
                </button>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="flex gap-4">
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
                      className="text-[14px] text-[#ede1d7] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap hover:text-white transition-colors"
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
        <div className="h-px w-full relative">
          <Image src={imgFooterLine} alt="" fill className="object-contain" unoptimized />
        </div>

        {/* Bottom */}
        <div className="flex items-center gap-8">
          <p
            className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="relative size-[7px] flex-shrink-0">
            <Image src={imgFooterEllipse} alt="" fill className="object-contain" unoptimized />
          </div>
          <p
            className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            v2.0 — June 2026
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto pb-0 flex flex-col gap-[100px]">
        <HeroSection />
        <ThreeThingsSection />
        <StatsSection />
        <BestModelSection />
        <TeamCollaborationSection />
        <BuildYourOwnSection />
        <IntegrationsSection />
      </div>

      <div className="max-w-[1328px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

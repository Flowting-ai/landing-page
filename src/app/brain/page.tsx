import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ─────────────────────────────────
// Navbar
const imgNavLogo = "https://www.figma.com/api/mcp/asset/d5331a9d-6050-4775-b043-b773037f0b39";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/32730b4a-a6c9-4069-9ac4-38eb9cff1d2d";

// Hero section
const imgHeroBrainLogo = "https://www.figma.com/api/mcp/asset/985e4d90-2d93-4b94-a0f2-12e78b48c6b3";
const imgHeroConnector1 = "https://www.figma.com/api/mcp/asset/0c707d57-5bef-49a3-8272-31a62a43c308";
const imgHeroConnector2 = "https://www.figma.com/api/mcp/asset/44a0b09f-186a-4410-8208-00da838188e2";
const imgHeroConnector3 = "https://www.figma.com/api/mcp/asset/af242081-caa5-481d-8d23-af9f3bf1eece";
const imgHeroGDrive = "https://www.figma.com/api/mcp/asset/60e56a4c-bd5a-438b-adc2-8037ce5d3b3f";
const imgHeroWord = "https://www.figma.com/api/mcp/asset/33c21a68-0ab3-4658-8018-c23eb9a55464";
const imgHeroGmail = "https://www.figma.com/api/mcp/asset/cccfceac-7dfe-4450-b4cd-eaca726e16c8";
const imgHeroStripe = "https://www.figma.com/api/mcp/asset/57c481d4-4165-4c8e-95f9-9fcdb33ed55d";
const imgHeroShopify = "https://www.figma.com/api/mcp/asset/c93d215e-2582-459c-9495-fa73644756d3";
const imgHeroSlack = "https://www.figma.com/api/mcp/asset/c077cff8-5b5a-4e82-9237-f98b78ffe643";
const imgHeroBg = "https://www.figma.com/api/mcp/asset/f1684210-d4a5-42dd-9e63-ae7fa74be257";
const imgHeroArrow = "https://www.figma.com/api/mcp/asset/aa693759-2c36-41ff-a168-54a8236e70a0";
// Pin icons
const imgPinUser = "https://www.figma.com/api/mcp/asset/f9228621-cbbb-4882-8b72-264ac84f33b8";
const imgPinList = "https://www.figma.com/api/mcp/asset/bc4cf86a-dfe2-454f-8735-ea0d32a68f4a";
const imgPinClock = "https://www.figma.com/api/mcp/asset/81d364f1-afb4-4e97-951b-0b1731fdc587";
const imgPinMulti = "https://www.figma.com/api/mcp/asset/3d57da87-11bc-4795-aeb6-81b7f63f291c";
const imgPinSlack = "https://www.figma.com/api/mcp/asset/b317ea33-d0a0-44d0-ace7-135230730786";
const imgPinAtom = "https://www.figma.com/api/mcp/asset/87d5e253-6af2-43be-a4ef-b29116f1063f";

// Coordinate section
const imgCoordPersona1 = "https://www.figma.com/api/mcp/asset/d205ae27-e859-4460-bdc0-c435fee38b7e";
const imgCoordPersona2 = "https://www.figma.com/api/mcp/asset/cad2fbdd-8e54-4834-9fd9-fa6e7aef1f42";
const imgCoordPersona3 = "https://www.figma.com/api/mcp/asset/4d6afd0a-1b11-4fc8-a4e5-795616858b10";
const imgCoordBrainLogo = "https://www.figma.com/api/mcp/asset/78f9c84d-f3c4-4b88-9238-67ce47c64974";
const imgCoordArrow = "https://www.figma.com/api/mcp/asset/53a88f3a-c288-4601-8f3a-3ff0544a32bc";
const imgCoordDivider = "https://www.figma.com/api/mcp/asset/ca6c1154-0d92-4864-b33f-e4fafeda5819";
const imgCoordKebab = "https://www.figma.com/api/mcp/asset/6185fd5f-fb11-4954-a292-d31e2ca3f7de";

// Slack native section
const imgSlackNativeScreenshot = "https://www.figma.com/api/mcp/asset/77fac3d9-2f3c-4ecf-be47-52baf5eb0739";

// Run modes section
const imgRunOnceIcon = "https://www.figma.com/api/mcp/asset/8c3d2ca3-86c5-456b-99d2-8e7ecce62f06";
const imgScheduleIcon = "https://www.figma.com/api/mcp/asset/cb80154a-0991-483b-b87d-b1e7c61bca19";
const imgArrowRight = "https://www.figma.com/api/mcp/asset/31af1398-1197-4946-92d0-208e9cfc533d";

// Brain × Slack section
const imgSlackStep = "https://www.figma.com/api/mcp/asset/1373d024-9b8d-4fb2-8547-57b5752e359a";

// Schedule view section
const imgScheduleView = "https://www.figma.com/api/mcp/asset/c4f48d3a-2311-43d0-b6a5-490162869c1f";

// CTA / Integrations section
const imgCtaStripe = "https://www.figma.com/api/mcp/asset/def51cdd-bc74-4e3d-b2f7-886b95f155ce";
const imgCtaShopify = "https://www.figma.com/api/mcp/asset/0f0952ab-9798-4d09-a825-787b9091d18f";
const imgCtaFigma = "https://www.figma.com/api/mcp/asset/25da0620-1871-4320-847f-de3371aeeefc";
const imgCtaCanva = "https://www.figma.com/api/mcp/asset/5f647852-be73-4ed6-8133-2a4b474f1a2b";
const imgCtaWord = "https://www.figma.com/api/mcp/asset/84873f4d-79e7-467c-b6e7-f7984e75b2a0";
const imgCtaBg = "https://www.figma.com/api/mcp/asset/8fec5512-6e34-4e66-81d8-2233faa1d5b1";
const imgCtaGDrive = "https://www.figma.com/api/mcp/asset/89527795-4fc2-4930-bb1e-1f254589380b";
const imgCtaTikTokV1 = "https://www.figma.com/api/mcp/asset/2763f620-d792-4053-bc37-82495cc888f5";
const imgCtaJira = "https://www.figma.com/api/mcp/asset/eb0aecd2-3d76-4786-a1a2-14d5466e1fe7";
const imgCtaOutlook = "https://www.figma.com/api/mcp/asset/b9c0932d-6ffd-4a35-b858-bfd6a11b37c6";
const imgCtaGithub = "https://www.figma.com/api/mcp/asset/98f3f5b3-f836-4bf4-bddd-d4dc0bcffc1f";
const imgCtaAtlassian = "https://www.figma.com/api/mcp/asset/f70519a1-0cb4-4838-9a06-49050125ef95";
const imgCtaMailchimpBg = "https://www.figma.com/api/mcp/asset/fd0b9042-da96-468a-a4d7-87b353a5867b";
const imgCtaMailchimp = "https://www.figma.com/api/mcp/asset/63b99e3c-57fb-43fb-ae2e-4e80be8e4777";
const imgCtaExcel = "https://www.figma.com/api/mcp/asset/f0381168-1bfa-4b02-802f-165077a4259d";
const imgCtaLinkedIn = "https://www.figma.com/api/mcp/asset/d84f06e9-db27-4524-a62c-8c3b38c5e4ae";
const imgCtaGmail = "https://www.figma.com/api/mcp/asset/139598c3-e8dc-46ec-9b1c-d0d6ce4b3f2d";
const imgCtaSlack = "https://www.figma.com/api/mcp/asset/b5604d98-bd0a-46af-a055-a23024535494";

// Footer
const imgFooterBg = "https://www.figma.com/api/mcp/asset/0cb5e330-d5d4-4c68-b142-0d2e050b1ae4";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/11758ae2-a3bc-4427-b44e-e5eaba2519b1";
const imgFooterSubmit = "https://www.figma.com/api/mcp/asset/924774b5-93ca-4e4a-a06e-6e1434b0e090";
const imgFooterDot = "https://www.figma.com/api/mcp/asset/216b5eba-39fb-4b3b-9f8f-a948ad4edb25";

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
      className={`flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] relative bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      {children}
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
  color?: "neutral" | "brown";
}) {
  const styles = {
    neutral: {
      bg: "bg-[#ede1d7]",
      text: "text-[#524b47]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]",
      inset:
        "shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)]",
    },
    brown: {
      bg: "bg-[#e6d5ca]",
      text: "text-[#683d1b]",
      shadow:
        "shadow-[0px_1.476px_2.214px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)]",
      inset:
        "shadow-[inset_0px_1.476px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1.476px_0px_0px_rgba(126,84,53,0.1)]",
    },
  };
  const s = styles[color];
  return (
    <span
      className={`inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] ${s.shadow} relative shrink-0`}
    >
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.bg}`} />
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.inset}`} />
      <span className={`relative text-[11px] font-medium leading-[16px] whitespace-nowrap ${s.text}`}>
        {label}
      </span>
    </span>
  );
}

function StatusBadge({ status }: { status: "done" | "running" | "queued" }) {
  const map = {
    done: {
      bg: "bg-[#f7fee6]",
      text: "text-[#456211]",
      shadow:
        "shadow-[0px_0.657px_0.986px_0px_rgba(17,25,1,0.2),0px_0px_0px_1px_rgba(128,183,7,0.5)]",
      inset:
        "shadow-[inset_0px_0.657px_0px_0px_rgba(247,254,230,0.7),inset_0px_-0.657px_0px_0px_rgba(128,183,7,0.1)]",
      label: "✓ Done",
    },
    running: {
      bg: "bg-[#ffbfb6]",
      text: "text-[#7a201c]",
      shadow:
        "shadow-[0px_0.657px_0.986px_0px_rgba(24,2,2,0.2),0px_0px_0px_1px_rgba(159,38,35,0.5)]",
      inset:
        "shadow-[inset_0px_0.657px_0px_0px_rgba(253,231,231,0.7),inset_0px_-0.657px_0px_0px_rgba(159,38,35,0.1)]",
      label: "Running",
    },
    queued: {
      bg: "bg-[#ede1d7]",
      text: "text-[#524b47]",
      shadow:
        "shadow-[0px_0.657px_0.986px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]",
      inset:
        "shadow-[inset_0px_0.657px_0px_0px_rgba(247,242,237,0.7),inset_0px_-0.657px_0px_0px_rgba(106,98,93,0.1)]",
      label: "Queued",
    },
  };
  const s = map[status];
  return (
    <span
      className={`inline-flex items-center justify-center overflow-clip px-[5px] py-px rounded-[6px] ${s.shadow} relative shrink-0`}
    >
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.bg}`} />
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.inset}`} />
      <span className={`relative text-[7.2px] font-medium leading-[10.5px] whitespace-nowrap ${s.text}`}>
        {s.label}
      </span>
    </span>
  );
}

// ─── Pin tooltip (feature callout) ───────────────────────────────────────────
function FeaturePin({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="bg-[#f7f2ed] flex gap-2 items-center overflow-clip px-4 py-2 rounded-[21px] shadow-[0px_2.671px_3.739px_0px_rgba(82,75,71,0.12),0px_0px_0px_1.335px_#ede1d7]">
      <div className="size-5 relative shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt="" src={icon} className="absolute inset-0 w-full h-full object-contain" />
      </div>
      <span
        className="text-[16px] text-[#524b47] leading-[22px] font-normal whitespace-nowrap"
        style={{ fontFamily: "var(--font-besley)" }}
      >
        {label}
      </span>
    </div>
  );
}

// ─── Integration icon tile ────────────────────────────────────────────────────
function IntegrationTile({
  src,
  alt,
  children,
}: {
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="bg-white/20 flex items-center justify-center p-[14px] rounded-[9px] size-[75px] shrink-0">
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt ?? ""} className="size-[47px] object-contain" />
      ) : (
        children
      )}
    </div>
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
              <span className="size-4 relative ml-0.5 shrink-0">
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
              <span className="size-4 relative ml-0.5 shrink-0">
                <Image
                  src={imgChevronDown}
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
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
function BrainHeroSection() {
  return (
    <section className="w-full px-[197px]">
      <div className="flex gap-[92px] items-center">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 items-start shrink-0 w-[553px]">
          <Badge label="Solution · Brain & Automation" color="brown" />
          <h1
            className="text-[48px] text-black font-normal leading-[56px] w-[977px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            From Intention to Completed. Automate all your manual work.
          </h1>
          <p
            className="text-[16px] text-black leading-[22px] font-normal w-[549px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Souvenir Brain turns your intentions into reality. It intelligently decomposes tasks,
            creates the plan, orchestrates the right AI agents across your apps, and delivers
            completed work. On demand or on schedule.
          </p>
          <div className="flex gap-4 items-center">
            <ButtonGhost>Get started for free</ButtonGhost>
            <ButtonDark>
              Book a Demo
              <span className="size-4 relative shrink-0 ml-0.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgHeroArrow}
                  alt=""
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </span>
            </ButtonDark>
          </div>
        </div>

        {/* Right: Brain visualization */}
        <div className="relative shrink-0" style={{ width: 683, height: 397 }}>
          {/* Connecting line arcs (top-left) */}
          <div
            className="absolute"
            style={{ left: 66.5, top: 201, width: 141.5, height: 174 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgHeroConnector1} alt="" className="w-full h-full object-contain" />
          </div>
          {/* Connecting line arcs (top-left flipped) */}
          <div
            className="absolute scale-y-[-1]"
            style={{ left: 66.5, top: 22, width: 141.5, height: 174 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgHeroConnector1} alt="" className="w-full h-full object-contain" />
          </div>
          {/* Connecting line arcs (top-right rotated 180) */}
          <div
            className="absolute rotate-180"
            style={{ left: 303, top: 22, width: 135.5, height: 174 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgHeroConnector2} alt="" className="w-full h-full object-contain" />
          </div>
          {/* Connecting line arcs (bottom-right) */}
          <div
            className="absolute scale-y-[-1] rotate-180"
            style={{ left: 303, top: 201, width: 135.5, height: 174 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgHeroConnector3} alt="" className="w-full h-full object-contain" />
          </div>

          {/* Brain / Souvenir center logo */}
          <div
            className="absolute"
            style={{ left: 212, top: 158, width: 85, height: 85 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgHeroBrainLogo} alt="Souvenir Brain" className="w-full h-full object-contain" />
          </div>

          {/* Integration icons - left column */}
          {[
            { src: imgHeroWord, alt: "MS Word", top: 0, left: 80 },
            { src: imgHeroGmail, alt: "Gmail", top: 70, left: 20 },
            { src: imgHeroStripe, alt: "Stripe", top: 140, left: 0 },
            { src: imgHeroShopify, alt: "Shopify", top: 210, left: 0 },
            { src: imgHeroSlack, alt: "Slack", top: 280, left: 20 },
            { src: imgHeroGDrive, alt: "Google Drive", top: 350, left: 80 },
          ].map((icon) => (
            <div
              key={icon.alt}
              className="absolute"
              style={{ left: icon.left, top: icon.top }}
            >
              <div className="size-[47px] relative overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="absolute inset-0 w-full h-full object-contain drop-shadow-sm"
                />
              </div>
            </div>
          ))}

          {/* Feature pins - right side */}
          <div className="absolute flex flex-col gap-[39px]" style={{ left: 452, top: 8 }}>
            <FeaturePin icon={imgPinUser} label="Automations" />
            <FeaturePin icon={imgPinList} label="Browser actions" />
            <FeaturePin icon={imgPinClock} label="Schedules & triggers" />
            <FeaturePin icon={imgPinMulti} label="Multi-Assistant chains" />
            <FeaturePin icon={imgPinSlack} label="Slack-native deploy" />
            <FeaturePin icon={imgPinAtom} label="Approval gates" />
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
      value: "∞",
      title: "Unlimited automations. One workspace, every recurring job.",
      sub: "No cap · No per-run fees",
    },
    {
      value: "2",
      title: "Run modes — once now, or scheduled forever.",
      sub: "Run on demand · Schedule recurring",
    },
    {
      value: "4",
      title: "Frontier model labs — Brain picks the right one per step.",
      sub: "OpenAI · Anthropic · Google Gemini · Mistral",
    },
  ];

  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[16px] p-9 flex gap-8 items-start w-full">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 items-center flex-1"
          >
            <p
              className="text-[128px] text-[#6a625d] font-normal leading-[150px] whitespace-nowrap"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              {s.value}
            </p>
            <p
              className="text-[24px] text-black font-normal leading-[32px] text-center"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              {s.title}
            </p>
            <p
              className="text-[13px] text-black font-bold leading-[16px] text-center"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Anatomy of a Brain run ───────────────────────────────────────────────────
function AnatomySection() {
  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[16px] p-9 flex gap-8 items-center w-full">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 items-start shrink-0 w-[507px]">
          <Badge label="Anatomy of a Brain run" />
          <h2
            className="text-[40px] text-black font-normal leading-[48px] w-[520px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            A goal in. An answer out. Everything in between, automatic.
          </h2>
          <p
            className="text-[16px] text-black font-normal leading-[22px] w-[476px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Brain doesn&apos;t take blind orders. It asks questions until the goal is clear, builds a
            plan you can approve, then executes — using your Assistants, your saved work, and the
            right model for each step.
          </p>
        </div>
        {/* Right: dark image placeholder */}
        <div className="flex-1 h-[429px] rounded-[16px] bg-[#120c08]" />
      </div>
    </section>
  );
}

// ─── Learning over time ───────────────────────────────────────────────────────
function LearningSection() {
  const runs = [
    {
      label: "Run 01",
      time: "2 months ago",
      desc: "First run — Brain learning from scratch",
    },
    {
      label: "Run 02",
      time: "5 weeks ago",
      desc: "Learned — defaults committed to memory",
    },
    {
      label: "Run 03",
      time: "2 weeks ago",
      desc: "Learned — recognized your editing pattern",
    },
    {
      label: "Run 04",
      time: "today",
      desc: "Suggested — recognized your editing pattern",
      active: true,
    },
  ];

  const features = [
    "Automations",
    "Browser actions",
    "Infrastructure",
    "Schedules & triggers",
    "Multi-Assistant chains",
    "Slack-native deploy",
    "Approval gates",
    "250+ Connectors",
  ];

  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[16px] p-9 flex gap-8 items-start w-full">
        {/* Left: run history visualization */}
        <div className="bg-[#f7f2ed] rounded-[16px] px-8 py-[52px] shrink-0 w-[640px] flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2 mb-4">
            <Badge label="Feature · Learning over time" />
            <h2
              className="text-[40px] text-black font-normal leading-[48px] text-center"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Every run,<br />a little smarter.
            </h2>
          </div>

          {/* Run timeline */}
          <div className="flex flex-col gap-3">
            {runs.map((run, i) => (
              <div
                key={i}
                className={`flex items-start gap-4 px-4 py-3 rounded-[12px] ${
                  run.active ? "bg-white shadow-[0px_1.3px_1.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.65px_#ede1d7]" : ""
                }`}
              >
                <div className="flex flex-col items-start shrink-0 w-[100px]">
                  <span
                    className="text-[12px] font-medium text-[#26211e] leading-[16px]"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {run.label}
                  </span>
                  <span
                    className="text-[11px] text-[#827a74] leading-[14px]"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {run.time}
                  </span>
                </div>
                <p
                  className="text-[14px] text-[#524b47] font-normal leading-[22px]"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {run.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: feature capability tabs */}
        <div className="flex flex-col gap-4 items-start flex-1">
          <Badge label="Brain orchestration · Capabilities" />
          <h2
            className="text-[40px] text-black font-normal leading-[48px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Everything you need to automate any workflow.
          </h2>
          <p
            className="text-[16px] text-black font-normal leading-[22px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Brain comes with every capability built in — from browser automation to multi-agent
            chains. Pick the right tool for every job.
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {features.map((f, i) => (
              <span
                key={i}
                className={`px-3 py-1.5 rounded-[8px] text-[13px] leading-[20px] border border-[#d1c6bd] ${
                  i === 0
                    ? "bg-[#26211e] text-white border-transparent"
                    : "bg-white text-[#524b47]"
                }`}
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                {f}
              </span>
            ))}
          </div>

          {/* Automation detail for active tab */}
          <div className="bg-[#f7f2ed] rounded-[12px] p-4 w-full mt-2">
            <p
              className="text-[13px] text-[#827a74] leading-[16px] mb-3"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              Board list of 28 investors · Brand voice: premium-but-approachable
            </p>
            <div className="flex flex-col gap-2">
              {[
                "Research the board list",
                "Draft personalized email per investor",
                "Schedule send via Gmail",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#6a625d] text-[13px]">→</span>
                  <span
                    className="text-[13px] text-[#26211e] leading-[20px]"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Coordinate multi-agent workflows ─────────────────────────────────────────
function CoordinateSection() {
  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[16px] p-9 flex gap-16 items-center w-full">
        {/* Left: workflow diagram */}
        <div className="bg-[#f7f2ed] rounded-[16px] px-8 py-[52px] shrink-0 w-[640px] flex flex-col gap-6">
          {/* Top: Brain + Orchestrating header */}
          <div className="flex items-center justify-center gap-6">
            {/* Brain menu item */}
            <div className="bg-white border border-[#827a74] flex gap-2 items-center overflow-clip px-[5px] py-[4.5px] rounded-[9px] shrink-0">
              <div className="size-[21px] relative shrink-0">
                <Image
                  src={imgCoordBrainLogo}
                  alt="Brain"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span
                className="text-[12.7px] font-medium text-[#524b47] leading-[20px]"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                Brain
              </span>
            </div>
            <span className="text-[#524b47] text-[12px]">→</span>
            {/* Orchestrating menu item */}
            <div className="bg-white border border-[#827a74] flex gap-2 items-center overflow-clip px-[5px] py-[4.5px] rounded-[9px] shrink-0">
              <span
                className="text-[12.7px] font-medium text-[#524b47] leading-[20px]"
                style={{ fontFamily: "var(--font-geist-sans)" }}
              >
                Orchestrating
              </span>
            </div>
          </div>

          {/* Center: input */}
          <div className="flex justify-center">
            <div className="bg-white border border-[#d1c6bd] flex gap-2 items-center px-[12.7px] py-[6.4px] rounded-[9px] shadow-[0px_0.9px_1.4px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.9px_#ede1d7] w-[216px]">
              <span
                className="text-[12.7px] text-[#6a625d] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Quarterly Investor Update
              </span>
            </div>
          </div>

          {/* Agents row */}
          <div className="flex gap-[10.5px] justify-center">
            {[
              { name: "Research Agent", handle: "@productspecialist", status: "done" as const, img: imgCoordPersona1 },
              { name: "Data Analyst", handle: "@adspecialist", status: "running" as const, img: imgCoordPersona2 },
              { name: "Investor Writer", handle: "@watcher", status: "queued" as const, img: imgCoordPersona3 },
            ].map((agent) => (
              <div
                key={agent.name}
                className="bg-white flex flex-col items-start overflow-clip p-[7.9px] rounded-[10.5px] shadow-[0px_1.3px_1.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.65px_#ede1d7] w-[206px]"
              >
                <div className="flex gap-2 items-start w-full">
                  {/* Avatar */}
                  <div className="relative rounded-[5.3px] shadow-[0px_0.72px_0.72px_0px_rgba(59,54,50,0.05),0px_0.96px_0.66px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.66px_#ede1d7] shrink-0 size-[42.7px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={agent.img}
                      alt={agent.name}
                      className="w-full h-[150%] object-cover object-top"
                    />
                  </div>
                  <div className="flex flex-col gap-[5.3px] flex-1 min-w-0">
                    <div className="flex items-start justify-between w-full">
                      <div className="flex flex-col min-w-0">
                        <span
                          className="text-[10.5px] text-[#26211e] font-normal leading-[14.5px] truncate"
                          style={{ fontFamily: "var(--font-besley)" }}
                        >
                          {agent.name}
                        </span>
                        <span
                          className="text-[8.5px] text-[#827a74] leading-[10.5px] truncate"
                          style={{ fontFamily: "var(--font-geist-mono)" }}
                        >
                          {agent.handle}
                        </span>
                      </div>
                      <button className="size-[13px] shrink-0 flex items-center justify-center text-[#524b47] text-[10px]">
                        ···
                      </button>
                    </div>
                    <StatusBadge status={agent.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom: result bar */}
          <div className="flex justify-center">
            <div className="bg-white border border-[#d1c6bd] flex gap-2 items-center px-[12.7px] py-[6.4px] rounded-[9px] shadow-[0px_0.9px_1.4px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.9px_#ede1d7] w-[388px]">
              <span
                className="text-[12.7px] text-[#6a625d] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Research findings
              </span>
              <span className="text-[#827a74] text-[11px]">→</span>
              <span
                className="text-[12.7px] text-[#120c08] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Data Analyst
              </span>
              <span className="text-[#827a74] text-[11px]">→</span>
              <span
                className="text-[12.7px] text-[#6a625d] font-normal leading-[20px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Drafted update
              </span>
            </div>
          </div>
        </div>

        {/* Right: copy */}
        <div className="flex flex-col gap-4 items-start flex-1">
          <Badge label="Brain orchestration · Coordination" />
          <h2
            className="text-[40px] text-black font-normal leading-[48px] w-[520px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Coordinate multi-agent workflows.
          </h2>
          <p
            className="text-[16px] text-black font-normal leading-[22px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Brain connects specialized Assistants to complete multi-step tasks — activating each one
            at the right time and passing context seamlessly along the way.
          </p>

          {/* Feature checklist */}
          <div className="flex flex-col gap-0 w-full mt-2">
            {[
              { bold: "✓ Right agent, right step", rest: " — Brain delegates based on the role required" },
              { bold: "✓ Shared context", rest: " — every Assistant sees the output of the one before" },
              { bold: "✓ No manual handoffs", rest: " — Brain orchestrates the chain end-to-end" },
            ].map((item, i) => (
              <div key={i}>
                <div className="h-px bg-[#d1c6bd] w-full" />
                <p
                  className="text-[14px] text-black leading-[22px] py-3"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  <strong className="font-semibold" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    {item.bold}
                  </strong>
                  {item.rest}
                </p>
              </div>
            ))}
            <div className="h-px bg-[#d1c6bd] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Slack-native deploy ──────────────────────────────────────────────────────
function SlackNativeSection() {
  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[16px] p-9 flex gap-16 items-center w-full">
        {/* Left: Slack screenshot */}
        <div className="relative rounded-[16px] overflow-hidden shrink-0 w-[566px] h-[393px]">
          <Image
            src={imgSlackNativeScreenshot}
            alt="Souvenir Brain in Slack"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Right: copy */}
        <div className="flex flex-col gap-4 items-start flex-1">
          <Badge label="Brain orchestration · Slack-native" />
          <h2
            className="text-[40px] text-black font-normal leading-[48px] w-[520px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Build &amp; run Automations from Slack.
          </h2>
          <p
            className="text-[16px] text-black font-normal leading-[22px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Your team doesn&apos;t need to leave Slack. Create an Automation by describing it in a
            channel. Trigger any automation on demand. Get results back where the conversation already
            lives.
          </p>

          <div className="flex flex-col gap-0 w-full mt-2">
            {[
              { bold: "✓ Spawn a Brain in chat", rest: " — describe the job, Brain self-builds the plan" },
              { bold: "✓ Run any automations on demand", rest: " — type /brain run and pick" },
              { bold: "✓ Approval gates in-channel", rest: " — sign off on writes without leaving Slack" },
            ].map((item, i) => (
              <div key={i}>
                <div className="h-px bg-[#d1c6bd] w-full" />
                <p
                  className="text-[14px] text-black leading-[22px] py-3"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  <strong className="font-semibold" style={{ fontFamily: "var(--font-geist-sans)" }}>
                    {item.bold}
                  </strong>
                  {item.rest}
                </p>
              </div>
            ))}
            <div className="h-px bg-[#d1c6bd] w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Run it once / Schedule recurring ────────────────────────────────────────
function RunModesSection() {
  return (
    <section className="w-full px-[197px] mt-8">
      <div className="flex flex-col gap-16 items-start w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 items-start">
          <Badge label="Two ways to deploy" />
          <h2
            className="text-[40px] text-black font-normal leading-[48px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Run it once. Or run it forever.
          </h2>
          <p
            className="text-[16px] text-black font-normal leading-[22px] w-[715px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Every Brain saves with one click — and runs the way you want. One-off jobs and recurring
            operational tasks live in the same library.
          </p>
        </div>

        {/* Two columns */}
        <div className="flex items-stretch w-full border border-[#d1c6bd]">
          {/* Run once */}
          <div className="flex-1 flex flex-col gap-5 items-start p-5 border-r border-[#d1c6bd]">
            <div className="size-8 relative shrink-0">
              <Image
                src={imgRunOnceIcon}
                alt="Run once"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3
              className="text-[24px] text-black font-normal leading-[32px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Run once
            </h3>
            <p
              className="text-[16px] text-black font-normal leading-[22px] w-[621px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              One-off task. You hit run, Brain executes, hands you the output, done. Save it as a
              draft Brain for next time — or discard.
            </p>
            <div className="bg-white rounded-[16px] p-4 w-full">
              <p
                className="text-[13px] text-black leading-[16px] mb-4"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                For tasks like
              </p>
              <div className="flex flex-col gap-4">
                {[
                  `"Research these 12 prospects, write a one-pager each"`,
                  `"Draft the launch announcement for our new product"`,
                  `"Audit my last 30 emails, summarize what's pending"`,
                ].map((task, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <div className="size-6 relative shrink-0">
                      <Image
                        src={imgArrowRight}
                        alt=""
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p
                      className="text-[14px] text-black font-normal leading-[22px] whitespace-nowrap"
                      style={{ fontFamily: "var(--font-besley)" }}
                    >
                      {task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Schedule recurring */}
          <div className="flex-1 flex flex-col gap-5 items-start p-5">
            <div className="size-8 relative shrink-0">
              <Image
                src={imgScheduleIcon}
                alt="Schedule recurring"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <h3
              className="text-[24px] text-black font-normal leading-[32px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Schedule recurring
            </h3>
            <p
              className="text-[16px] text-black font-normal leading-[22px] w-[621px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Same task, repeated forever. Pick a schedule or an event trigger. Brain wakes up on its
              own, runs the chain, delivers the output where you want it.
            </p>
            <div className="bg-white rounded-[16px] p-4 w-full">
              <p
                className="text-[13px] text-black leading-[16px] mb-4"
                style={{ fontFamily: "var(--font-geist-mono)" }}
              >
                For tasks like
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Every Monday at 9am — weekly business briefing",
                  "Every quarter end — investor update draft",
                  "When inventory drops below 14 days — pause spend",
                ].map((task, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <div className="size-6 relative shrink-0">
                      <Image
                        src={imgArrowRight}
                        alt=""
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p
                      className="text-[14px] text-black font-normal leading-[22px] whitespace-nowrap"
                      style={{ fontFamily: "var(--font-besley)" }}
                    >
                      {task}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Brain × Slack 3-step cards ───────────────────────────────────────────────
function BrainSlackStepsSection() {
  const steps = [
    {
      step: "01 · Create",
      title: "Spawn a Brain from a message",
      desc: "Describe the job in a channel. Souvenir builds the plan, shows the steps, awaits your approval — all without leaving Slack.",
    },
    {
      step: "02 · Run",
      title: "Trigger any Brain on demand",
      desc: "Need it now, not Friday? Type /brain run in any channel. Pick from your library. Brain executes immediately.",
    },
    {
      step: "03 · Receive",
      title: "Results land where you work",
      desc: "Whether scheduled or on-demand, Brain posts back to Slack with the output, a summary, and one-tap approval buttons for any write action.",
    },
  ];

  return (
    <section className="w-full px-[197px] mt-8">
      <div className="flex flex-col gap-16 items-center w-full">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center">
          <Badge label="Brain × Slack" />
          <h2
            className="text-[36px] text-black font-normal leading-[42px] text-center max-w-[631px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Build it in Slack. Run it from Slack. Get results back in Slack.
          </h2>
        </div>

        {/* Step cards */}
        <div className="flex gap-6 items-center w-full">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white flex flex-col gap-6 items-center p-5 rounded-[16px] flex-1"
            >
              <div className="flex flex-col gap-4 items-start w-full">
                <span
                  className="text-[13px] text-black leading-[16px] font-normal"
                  style={{ fontFamily: "var(--font-geist-mono)" }}
                >
                  {step.step}
                </span>
                <h3
                  className="text-[24px] text-black font-normal leading-[32px]"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[16px] text-black font-normal leading-[22px]"
                  style={{ fontFamily: "var(--font-geist-sans)" }}
                >
                  {step.desc}
                </p>
              </div>
              {/* Screenshot placeholder with image */}
              <div className="w-full aspect-[381/145] rounded-[16px] overflow-hidden relative">
                <Image
                  src={imgSlackStep}
                  alt={step.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-[16px] text-black font-normal leading-[22px] text-center max-w-[686px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          ● The Slack Manager directs · Brain orchestrates · Assistants execute. ●
        </p>
      </div>
    </section>
  );
}

// ─── Schedule view ────────────────────────────────────────────────────────────
function ScheduleViewSection() {
  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[16px] p-9 flex items-center gap-8 w-full">
        {/* Left: copy */}
        <div className="flex flex-col gap-4 items-start shrink-0 w-[626px]">
          <Badge label="The schedule view" />
          <h2
            className="text-[40px] text-black font-normal leading-[48px] w-[520px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Every workflow you&apos;ve deployed. One dashboard.
          </h2>
          <p
            className="text-[16px] text-black font-normal leading-[22px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            See what&apos;s running, what&apos;s queued, what last ran, and what&apos;s about to fire. Pause any
            workflow in one click. Edit its plan. Inspect every past run with full audit trail.
          </p>
        </div>

        {/* Right: dashboard screenshot */}
        <div className="relative flex-1 h-[457px] rounded-[0px] overflow-hidden shrink-0 w-[635px]">
          <Image
            src={imgScheduleView}
            alt="Schedule view dashboard"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

// ─── CTA card ────────────────────────────────────────────────────────────────
function CTACard() {
  const col1 = [imgCtaStripe, imgCtaShopify, imgCtaFigma, imgCtaCanva];
  const col2 = [imgCtaWord, imgCtaBg, imgCtaTikTokV1, imgCtaJira];
  const col3 = [imgCtaOutlook, imgCtaGithub, imgCtaAtlassian, imgCtaMailchimpBg];
  const col4 = [imgCtaExcel, imgCtaLinkedIn, imgCtaGmail, imgCtaSlack];

  return (
    <section className="w-full px-[197px] mt-8">
      <div className="bg-white rounded-[12px] flex gap-[112px] items-center overflow-hidden px-6 py-6 w-full shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7]">
        {/* Left: text */}
        <div className="flex flex-col gap-4 items-start shrink-0 max-w-[820px]">
          <h2
            className="text-[40px] text-[#524b47] font-normal leading-[48px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Tell it the goal. It handles the rest.
          </h2>
          <p
            className="text-[24px] text-[#6a625d] font-normal leading-[32px] overflow-hidden text-ellipsis max-w-[801px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            Run it once. Or run it every Monday at 9am, forever. Either way — your operational work
            just stopped needing you.
          </p>
          <div className="flex gap-6 items-center mt-2">
            <ButtonGhost>Join Discord Community</ButtonGhost>
            <ButtonDark>Book a Demo</ButtonDark>
          </div>
        </div>

        {/* Right: integration icon grid */}
        <div className="flex gap-[14px] items-start shrink-0">
          {[col1, col2, col3, col4].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[14px]">
              {col.map((src, ri) => (
                <IntegrationTile key={ri} src={src} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="w-full px-[197px] mt-8 mb-0 relative">
      {/* Background gradient image */}
      <div className="absolute inset-0 overflow-hidden rounded-[16px]">
        <Image
          src={imgFooterBg}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="relative flex flex-col gap-8 items-start px-[41px] py-8 w-full">
        {/* Top row: logo + nav columns */}
        <div className="flex gap-[120px] items-center w-full">
          {/* Logo + tagline + newsletter */}
          <div className="flex flex-col gap-4 items-start shrink-0 w-[399px]">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex items-center gap-3">
                <div className="size-10 relative shrink-0">
                  <Image
                    src={imgFooterLogo}
                    alt="Souvenir"
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
                className="text-[24px] text-[#ede1d7] font-normal leading-[32px] overflow-hidden text-ellipsis"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                The centralized workspace brain. A coordinated team of agents.
              </p>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-1 w-[327px]">
              <label
                className="text-[14px] text-white font-normal leading-[22px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Newsletter
              </label>
              <div className="bg-white flex gap-0.5 items-center overflow-hidden px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7] w-full">
                <input
                  type="email"
                  placeholder="your@company.com"
                  className="flex-1 min-w-0 text-[14px] text-[#6a625d] font-normal leading-[22px] bg-transparent outline-none"
                  style={{ fontFamily: "var(--font-besley)" }}
                />
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 justify-center overflow-hidden pb-2 pt-1.5 px-2.5 rounded-[10px] shrink-0">
                  <div className="size-4 relative shrink-0">
                    <Image
                      src={imgFooterSubmit}
                      alt="Submit"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-[14px] text-[#f7f2ed] font-medium leading-[22px] whitespace-nowrap">
                    Subscribe
                  </span>
                </button>
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
              <div key={col.title} className="flex flex-col gap-4 items-start w-[164px]">
                <p
                  className="text-[24px] text-white font-normal leading-[32px] overflow-hidden text-ellipsis w-full"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  {col.title}
                </p>
                <div className="flex flex-col gap-[10px] items-start">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-[14px] text-[#ede1d7] font-normal leading-[22px] overflow-hidden text-ellipsis block w-full"
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
        <div className="flex gap-8 items-center">
          <p
            className="text-[14px] text-[#f7f2ed] font-normal leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="size-[7px] relative shrink-0">
            <Image src={imgFooterDot} alt="" fill className="object-contain" unoptimized />
          </div>
          <p
            className="text-[14px] text-[#f7f2ed] font-normal leading-[22px] whitespace-nowrap"
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
export default function BrainPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ed] pb-0">
      <Navbar />
      <div className="flex flex-col gap-0 pb-0">
        <BrainHeroSection />
        <StatsSection />
        <AnatomySection />
        <LearningSection />
        <CoordinateSection />
        <SlackNativeSection />
        <RunModesSection />
        <BrainSlackStepsSection />
        <ScheduleViewSection />
        <CTACard />
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}

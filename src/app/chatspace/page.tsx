import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────

// Navbar
const imgLogoUnion = "https://www.figma.com/api/mcp/asset/4ca61ef3-bab2-47cd-bdbc-33a4c1f26fba";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/fd3be969-c8fa-483e-a812-69a388d60dcc";

// Hero
const imgHeroArrow = "https://www.figma.com/api/mcp/asset/4d49e9a6-9d03-4a41-bc1f-2d96869a5a3a";
const imgHeroApp = "https://www.figma.com/api/mcp/asset/f2436eb0-4a1d-4eab-9ec4-74bbf3513cc4";

// Compare section
const imgCompare = "https://www.figma.com/api/mcp/asset/dd484fd8-30dc-43ac-9efd-2842d02712c9";

// Auto-routing section
const imgRoutingMockup = "https://www.figma.com/api/mcp/asset/21e1658c-f776-40cf-a275-84062132f09e";
const imgOpenAI = "https://www.figma.com/api/mcp/asset/b7be1264-315f-4d1e-9821-c873bf59631c";
const imgMistral = "https://www.figma.com/api/mcp/asset/d89587ef-c113-477f-8df6-c4c9211fa4a9";
const imgClaude = "https://www.figma.com/api/mcp/asset/a299fc1f-99da-43b8-adc7-8f7065412765";
const imgGemini = "https://www.figma.com/api/mcp/asset/e4362275-b378-4317-afbe-b9436b897a75";

// Features 2×2
const imgResearch = "https://www.figma.com/api/mcp/asset/2b344dba-6d80-4574-8aad-d46729f7ebdb";
const imgHighlights = "https://www.figma.com/api/mcp/asset/b45a75a1-cea0-43d4-b315-d19c26ed79d2";
const imgPinsUI = "https://www.figma.com/api/mcp/asset/b8f073c2-cef6-406b-87bc-1edc3c034fa1";
const imgAgents = "https://www.figma.com/api/mcp/asset/d31e6283-9adf-440a-912b-22418f7df05d";

// CTA integration logos
const imgStripe = "https://www.figma.com/api/mcp/asset/d6b63d9b-09dd-4e19-a86c-8e99279b6e2b";
const imgShopify = "https://www.figma.com/api/mcp/asset/c6d7089f-dd4c-49e0-bdb9-d5a644df5757";
const imgFigma = "https://www.figma.com/api/mcp/asset/3848a3ec-2957-4713-87cd-0747173dd022";
const imgCanva = "https://www.figma.com/api/mcp/asset/7e38e525-f505-4c44-8906-53cd61659f95";
const imgWord = "https://www.figma.com/api/mcp/asset/76b58056-b850-4316-bc7b-1e0f4acc8e56";
const imgGDrive = "https://www.figma.com/api/mcp/asset/5dd98314-647c-4146-ac35-ca5f25e347b7";
const imgJira = "https://www.figma.com/api/mcp/asset/2629da1f-ec97-4aad-964c-17f7c69d65f2";
const imgOutlook = "https://www.figma.com/api/mcp/asset/6f3ca98f-5f97-4e70-956a-fc92ec49544d";
const imgAtlassian = "https://www.figma.com/api/mcp/asset/9db3f65f-b8fe-45aa-b4f8-1b7719df66c1";
const imgMailchimp = "https://www.figma.com/api/mcp/asset/af3ed4ab-f613-4522-9f3f-d2a50966f814";
const imgExcel = "https://www.figma.com/api/mcp/asset/1c4ea08e-1e20-49fd-9af1-6f7ef7bc5f4c";
const imgLinkedIn = "https://www.figma.com/api/mcp/asset/1b55d06b-8579-4832-afc1-4afd2ef01f48";
const imgGmail = "https://www.figma.com/api/mcp/asset/2ceab259-93d2-466d-a03a-2396ecdc7cb5";
const imgSlack = "https://www.figma.com/api/mcp/asset/2485d865-3e29-4a03-839a-2ef691a3c8d5";

// Footer
const imgFooterBg = "https://www.figma.com/api/mcp/asset/a0aa7d92-a66f-4a07-a1ed-1bafeaa2513e";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/8846dfd9-8bb7-45f9-817c-200e6cbaa631";
const imgFooterLine = "https://www.figma.com/api/mcp/asset/3a45c9e3-e1f6-413b-8943-8244f02bf444";
const imgFooterEllipse = "https://www.figma.com/api/mcp/asset/ba4a4183-b1ed-423c-b45f-bb4386b35a36";
const imgSubmitIcon = "https://www.figma.com/api/mcp/asset/e5e68e6e-e80c-4b3d-8ecc-bca2e5c9d999";

// ─── Shared button styles ─────────────────────────────────────────────────────
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

function Badge({ label, color = "neutral" }: { label: string; color?: "neutral" | "brown" }) {
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
    <section className="w-full bg-white border border-[rgba(0,0,0,0.08)] rounded-[26.56px] overflow-clip pt-8 pb-0 px-9 flex flex-col gap-[59px] items-center justify-center">
      {/* Top content */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="Solution · Unified Chatspace" color="brown" />
        <p
          className="text-[48px] text-black text-center leading-[56px] font-normal max-w-[977px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Every major AI model. One chat that remembers, researches, and compares.
        </p>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[977px]">
          Souvenir&apos;s Chatspace routes your prompt to the best model, maintains context, and lets you save outputs as pins, organize them into folders, and easily share AI work with your team.
        </p>
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

      {/* Hero screenshot */}
      <div className="w-full border-[5px] border-[#827a74] rounded-tl-[16px] rounded-tr-[16px] overflow-hidden flex-shrink-0 self-center">
        <div className="relative w-full" style={{ paddingBottom: "46.8%" }}>
          <Image src={imgHeroApp} alt="Souvenir Chatspace" fill className="object-cover object-top" unoptimized />
        </div>
      </div>
    </section>
  );
}

// ─── Stats ────────────────────────────────────────────────────────────────────
function StatsSection() {
  const stats = [
    {
      value: "4",
      headline: "Frontier model labs — auto-selected by intent.",
      sub: "OpenAI · Anthropic · Gemini · Mistral",
    },
    {
      value: "3",
      headline: "Compare Models side-by-side, same prompt. Pick the winner.",
      sub: "Compare · Cost · Speed · Output",
    },
    {
      value: "∞",
      headline: `Not memory that compounds. “Ai work that is saved and carried forward”`,
      sub: "Save · Organize · Share",
    },
  ];

  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-8 items-start">
      {stats.map((stat, i) => (
        <div key={i} className={`flex flex-col gap-4 items-center text-center ${i === 2 ? "flex-1" : "w-[372px]"}`}>
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

// ─── Compare Section ──────────────────────────────────────────────────────────
function CompareSection() {
  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-8 items-center">
      {/* Left: text */}
      <div className="flex flex-col gap-4 items-start flex-shrink-0 w-[387px]">
        <Badge label="The routing algorithm" />
        <h2
          className="text-[40px] text-black font-normal leading-[48px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Three models. One prompt. You pick the winner.
        </h2>
        <p className="text-[16px] text-black leading-[22px] w-[335px]" style={{ fontFamily: "var(--font-besley)" }}>
          Don&apos;t trust auto-routing on high-stakes work. Run the same prompt across three frontier models side by side, see the outputs in one view, and ship the answer that actually fits.
        </p>
      </div>

      {/* Right: screenshot */}
      <div className="flex-1 relative rounded-[16px] overflow-hidden h-[429px]">
        <Image src={imgCompare} alt="Compare models side by side" fill className="object-cover object-top" unoptimized />
      </div>
    </section>
  );
}

// ─── Auto-routing Section ─────────────────────────────────────────────────────
function RoutingSection() {
  return (
    <section className="w-full bg-white rounded-[16px] p-9 flex gap-[39px] items-center">
      {/* Left: phone mockup */}
      <div className="bg-[#ede1d7] rounded-[17px] overflow-hidden relative flex-shrink-0 w-[694px] h-[542px]">
        {/* Model icons button overlay */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-[2px] overflow-clip pb-[8.5px] pt-[6.4px] px-[10.6px] rounded-[10.6px] shadow-[0px_0px_0px_1.06px_#000,0px_1.16px_1.16px_0px_rgba(59,54,50,0.1),0px_1.55px_3.33px_0px_rgba(59,54,50,0.4)]">
          <span className="absolute inset-0 bg-gradient-to-b from-[#524b47] to-[#26211e] rounded-[10.6px] pointer-events-none" />
          <span className="absolute inset-0 rounded-[10.6px] pointer-events-none shadow-[inset_0px_1.06px_0.39px_0px_rgba(247,242,237,0.3),inset_0px_-2.32px_0.39px_0px_#120c08,inset_0px_-2.71px_4.26px_-2.32px_rgba(247,242,237,0.5)]" />
          {[imgOpenAI, imgMistral, imgClaude, imgGemini].map((src, i) => (
            <div key={i} className="relative size-[25.5px] rounded-[6px] overflow-hidden flex-shrink-0 z-10">
              <Image src={src} alt="" fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
        {/* Phone mockup screenshot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative border-[1.97px] border-[#9c938b] rounded-[35px] overflow-hidden" style={{ width: "639px", height: "676px", top: "76px" }}>
            <Image src={imgRoutingMockup} alt="Model routing UI" fill className="object-cover object-top" unoptimized />
          </div>
        </div>
      </div>

      {/* Right: text */}
      <div className="flex flex-col gap-4 items-start flex-shrink-0 w-[524px]">
        <div className="flex flex-col gap-4 items-start">
          <Badge label="The routing algorithm" />
          <div>
            <p
              className="text-[40px] text-black font-normal leading-[48px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Reads your intent.
            </p>
            <p
              className="text-[40px] text-black font-normal leading-[48px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Routes to the right model.
            </p>
          </div>
        </div>
        <p className="text-[16px] text-black leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
          You don&apos;t pick the model. The Chatspace reads what you&apos;re asking and selects from OpenAI, Anthropic, Gemini, or Mistral — based on the task, quality required, and cost. Same chat, different engines, no toggling.
        </p>
      </div>
    </section>
  );
}

// ─── Features 2×2 Grid ────────────────────────────────────────────────────────
function FeatureCard({
  featureLabel,
  title,
  description,
  image,
  imageAlt,
}: {
  featureLabel: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <div className="flex-1 bg-white rounded-[16px] overflow-hidden relative flex flex-col h-[595px]">
      {/* Text header */}
      <div className="flex flex-col gap-4 px-[18px] pt-[25px] pb-0 flex-shrink-0">
        <p className="text-[13px] font-mono text-[#524b47] leading-[16px]">{featureLabel}</p>
        <p
          className="text-[24px] text-black font-normal leading-[32px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          {title}
        </p>
        <p className="text-[16px] text-black leading-[22px] max-w-[626px]">{description}</p>
      </div>
      {/* Screenshot */}
      <div className="absolute bottom-0 left-[18px] right-0 h-[384px] rounded-tl-[16px] overflow-hidden">
        <Image src={image} alt={imageAlt} fill className="object-cover object-top" unoptimized />
      </div>
    </div>
  );
}

function FeaturesGrid() {
  return (
    <section className="flex flex-col gap-6 w-full">
      {/* Row 1: Research mode + Highlights */}
      <div className="flex gap-6 w-full">
        <FeatureCard
          featureLabel="Feature · Research mode"
          title="Ask a real question. Get a researched answer."
          description="Turn on Research mode and Chatspace becomes a deep-research agent — searches the web, reads sources, breaks complex questions into sub-questions, and synthesizes one structured answer with citations."
          image={imgResearch}
          imageAlt="Research mode"
        />
        <FeatureCard
          featureLabel="Feature · Highlights"
          title="Save the line. Quote it later."
          description="The good answer arrives. The thread keeps going. Three days later you can't find it. Highlights fix that — save any part of any chat as a quotable card, tagged and searchable. The signal stays. The noise scrolls away."
          image={imgHighlights}
          imageAlt="Highlights feature"
        />
      </div>

      {/* Row 2: Pins + Agents */}
      <div className="flex gap-6 w-full">
        <FeatureCard
          featureLabel="Feature · Pins"
          title="Memory that lasts. Organized into folders."
          description="Pins are the persistent memory of your workspace — brand voice, decisions, templates, customer archetypes. Group them into folders. Every Assistant and Brain reads them automatically when relevant."
          image={imgPinsUI}
          imageAlt="Pins feature"
        />
        <FeatureCard
          featureLabel="Feature · In-use Agents"
          title="Pull a specialist into the chat."
          description="Type @ - any Assistant joins the conversation. They read what came before, do their part, and pass context to whoever you call next. The chat stops being a chatbot. It starts being a workspace where your workforce gathers around one problem."
          image={imgAgents}
          imageAlt="In-use Agents feature"
        />
      </div>
    </section>
  );
}

// ─── CTA — Model Featured Card ────────────────────────────────────────────────
function CtaSection() {
  return (
    <section className="w-full bg-white rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] overflow-hidden relative p-6 flex gap-[112px] items-center">
      <span className="absolute inset-0 rounded-[12px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      {/* Left: text */}
      <div className="flex flex-col gap-4 items-start relative z-10">
        <p
          className="text-[40px] text-[#524b47] font-normal leading-[48px] w-[821px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          Stop re-teaching AI. Start compounding your work.
        </p>
        <p
          className="text-[24px] text-[#6a625d] font-normal leading-[32px] overflow-hidden text-ellipsis w-[801px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          One workspace where your memory, Assistants, and chats live together — across every major AI model.
        </p>
        <div className="flex items-center gap-6 mt-2">
          <ButtonGhost>Join Discord Community</ButtonGhost>
          <ButtonDark>Book a Demo</ButtonDark>
        </div>
      </div>

      {/* Right: integration logos grid */}
      <div className="flex gap-[14px] items-start flex-shrink-0 relative z-10">
        {[
          [imgStripe, imgShopify, imgFigma, imgCanva],
          [imgWord, imgGDrive, null, null],
          [imgOutlook, imgAtlassian, imgJira, null],
          [imgExcel, imgLinkedIn, imgGmail, imgSlack],
        ].map((col, ci) => (
          <div key={ci} className="flex flex-col gap-[14px]">
            {col.map((logo, li) =>
              logo ? (
                <div
                  key={li}
                  className="bg-white/20 border border-white/30 rounded-[9.5px] flex items-center justify-center size-[75px] flex-shrink-0"
                >
                  <div className="relative size-[47px]">
                    <Image src={logo} alt="" fill className="object-contain" unoptimized />
                  </div>
                </div>
              ) : (
                <div key={li} className="size-[75px] flex-shrink-0" />
              )
            )}
          </div>
        ))}
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
              <label className="text-[14px] text-white leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>
                Newsletter
              </label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">
                  your@company.com
                </span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0 relative">
                  <span className="absolute inset-0 rounded-[10px] shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)] pointer-events-none" />
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitIcon} alt="" fill className="object-contain" unoptimized />
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
export default function ChatspacePage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto pb-0 flex flex-col gap-[100px]">
        <HeroSection />
        <StatsSection />
        <CompareSection />
        <RoutingSection />
        <FeaturesGrid />
        <CtaSection />
      </div>

      <div className="max-w-[1328px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

import Image from "next/image";

// ─── NAVBAR ASSETS ────────────────────────────────────────────────────────────
const imgNavLogo    = "https://www.figma.com/api/mcp/asset/2c32168b-248f-457e-9afa-1877cd90543f";
const imgNavChevron = "https://www.figma.com/api/mcp/asset/5f0459bc-fb71-4407-ac95-d5bd5b5a0bfd";

// ─── HERO ASSETS ─────────────────────────────────────────────────────────────
const imgHeroArrow   = "https://www.figma.com/api/mcp/asset/33418cdb-6d68-4879-a89d-ae689a942640";
const imgHeroPersona = "https://www.figma.com/api/mcp/asset/80ce296c-c7bf-4949-bac7-a6522c214f7b";
const imgHeroImg9    = "https://www.figma.com/api/mcp/asset/31fb734b-8608-4503-89e6-48d98e176001";
const imgHeroImg8    = "https://www.figma.com/api/mcp/asset/4aacb138-2761-4ce5-9021-4ee9b2245f1b";
const imgHeroImg7    = "https://www.figma.com/api/mcp/asset/401172e0-6925-4b00-8ec8-8f8d16e65947";
const imgHeroOpenAI  = "https://www.figma.com/api/mcp/asset/24a11615-160c-42f9-98ef-d040c90e2ca3";
const imgHeroClaude  = "https://www.figma.com/api/mcp/asset/22ca5042-fe2c-4600-8eee-57c915e7f210";
const imgHeroGemini  = "https://www.figma.com/api/mcp/asset/06789985-bc24-4afe-b47a-869f8f15b0c9";
const imgHeroMistral = "https://www.figma.com/api/mcp/asset/418ae450-793e-46ec-8d78-280baae361f8";
const imgHeroHub     = "https://www.figma.com/api/mcp/asset/061193e9-16e6-41dd-8ffb-888d6906b916";
const imgHeroSlack   = "https://www.figma.com/api/mcp/asset/5ed70ab5-909b-4e90-9254-e08ddc9a3dde";
const imgHeroGSheets = "https://www.figma.com/api/mcp/asset/4fa64895-c4db-45f2-a1cc-6ee268b995e8";
const imgHeroSalesforce  = "https://www.figma.com/api/mcp/asset/938f4ab8-b1d1-4c02-b627-51480fa1fce8";
const imgHeroQuickbooks  = "https://www.figma.com/api/mcp/asset/492aba41-954b-4aee-a4ec-d24b05935287";
const imgHeroGoogleAds   = "https://www.figma.com/api/mcp/asset/4e05e735-ddde-4dd4-9a94-b3280a19fb2b";
// Connector lines (hub/workspace network)
const imgHeroLine20 = "https://www.figma.com/api/mcp/asset/48a67730-2622-435f-bb59-9b0896307590";
const imgHeroLine21 = "https://www.figma.com/api/mcp/asset/1514476a-b8b9-40e9-9635-3de0d23e78ee";
const imgHeroLine22 = "https://www.figma.com/api/mcp/asset/bdb74182-0c0a-454c-b5ec-c83c5db09778";
const imgHeroLine23 = "https://www.figma.com/api/mcp/asset/3b9a0e08-ab9c-4420-bdef-ebdaf1c34329";
const imgHeroLine24 = "https://www.figma.com/api/mcp/asset/3900de2e-8cd9-4af4-a1c1-c925394910ae";
const imgHeroLine25 = "https://www.figma.com/api/mcp/asset/38777691-bfab-425e-8319-5e8c1ec110dd";
const imgHeroLine26 = "https://www.figma.com/api/mcp/asset/73721cc0-0127-4cef-8d0d-6a15f0c58eb9";
const imgHeroLine27 = "https://www.figma.com/api/mcp/asset/a62d9e35-73ff-46d7-b80f-4da20a711801";
// AI model connection lines
const imgHeroAiLine1  = "https://www.figma.com/api/mcp/asset/f18a2d87-33b1-4060-8076-69c8e2ceb2c0";
const imgHeroAiLine2  = "https://www.figma.com/api/mcp/asset/0ca0ffcf-ccef-47b4-ba37-e67099ab3ef3";
const imgHeroAiLine3  = "https://www.figma.com/api/mcp/asset/72064867-e227-4d54-a9b8-3a51c9a8916a";
const imgHeroAiLine4  = "https://www.figma.com/api/mcp/asset/312e433c-ef18-473a-b212-fb37af467ebe";
const imgHeroAiLine5  = "https://www.figma.com/api/mcp/asset/dc498040-1b6f-4122-a0af-4539586888ba";
const imgHeroAiLine6  = "https://www.figma.com/api/mcp/asset/2b76b32b-6c0f-47fb-8764-aaa953759b1c";
const imgHeroAiLine7  = "https://www.figma.com/api/mcp/asset/a7af4369-51f0-4311-9f74-bf2d04bcdd66";
const imgHeroAiLine8  = "https://www.figma.com/api/mcp/asset/7ab0759d-ab14-4487-ab15-a5458eec54a5";
const imgHeroAiLine9  = "https://www.figma.com/api/mcp/asset/a17939ef-c148-4ff6-ab68-208ac00c76bf";
const imgHeroAiLine10 = "https://www.figma.com/api/mcp/asset/7f2feb12-88be-4f4d-bfe1-510b0a6be366";
const imgHeroAiLine11 = "https://www.figma.com/api/mcp/asset/06a5defb-074e-4793-bc13-1dcd089377f9";
const imgHeroAiLine12 = "https://www.figma.com/api/mcp/asset/f18c6c34-a3f4-4620-ad5a-d79d93377ca5";
const imgHeroAiLine13 = "https://www.figma.com/api/mcp/asset/0bd12ab1-d222-4f15-bd1b-1c012ac52113";
const imgHeroAiLine14 = "https://www.figma.com/api/mcp/asset/6570fec1-a5ed-4861-a0d1-11078c4a1a86";
const imgHeroAiLine15 = "https://www.figma.com/api/mcp/asset/2609b5b4-e05d-467b-912b-a5bb8e4e6778";
const imgHeroAiLine16 = "https://www.figma.com/api/mcp/asset/d47c0fe6-fb78-424d-b5e7-3cb0665f1600";
const imgHeroAiLine17 = "https://www.figma.com/api/mcp/asset/83964e45-ed6a-41d0-855b-beca655fa4f8";
const imgHeroAiLine18 = "https://www.figma.com/api/mcp/asset/10446795-975a-467b-9bd2-d49359b57f64";
const imgHeroAiLine19 = "https://www.figma.com/api/mcp/asset/2bcfd99a-d037-464a-b999-cfcd8e1b9f0a";

// ─── WHY SOUVENIR ASSETS ──────────────────────────────────────────────────────
const imgWhyStickyNote = "https://www.figma.com/api/mcp/asset/abb84507-9838-45ab-b615-f7ccfbe51883";
const imgWhyCodeIcon   = "https://www.figma.com/api/mcp/asset/fe9ed403-b52a-4896-9d2a-1fb10d9df572";
const imgWhyChara      = "https://www.figma.com/api/mcp/asset/a9832249-6550-4314-80d3-e2cdc4d48bde";
const imgWhyChara1     = "https://www.figma.com/api/mcp/asset/dfd6eb03-a244-4de0-ab29-7b07cd72878f";
const imgWhyChara2     = "https://www.figma.com/api/mcp/asset/aa964255-3f70-48f3-bde1-e30e4d859492";

// ─── KNOWLEDGE / PINS ASSETS ──────────────────────────────────────────────────
const imgPinIcon    = "https://www.figma.com/api/mcp/asset/abb84507-9838-45ab-b615-f7ccfbe51883";
const imgFolderIcon = "https://www.figma.com/api/mcp/asset/fe9ed403-b52a-4896-9d2a-1fb10d9df572";
const imgBrushIcon  = "https://www.figma.com/api/mcp/asset/0c067b11-23a5-4448-b296-8510b1c70fbf";

// ─── AGENTS ASSETS ────────────────────────────────────────────────────────────
const imgAgentPinIcon  = "https://www.figma.com/api/mcp/asset/f111ed72-dc6c-49e2-a463-d6bff0b7e8e9";
const imgAgentDotsIcon = "https://www.figma.com/api/mcp/asset/a7bae6b3-9f7a-4d6e-a3b7-5a8d4129cecb";
const imgAgent1 = "https://www.figma.com/api/mcp/asset/fd8f33f9-2082-4c2a-b21c-096ad4a672e8";
const imgAgent2 = "https://www.figma.com/api/mcp/asset/4b46bb68-89e6-4c5f-b280-8c2e7dd7eac9";
const imgAgent3 = "https://www.figma.com/api/mcp/asset/f63e1238-68c2-4af6-aa47-504887030877";
const imgAgent4 = "https://www.figma.com/api/mcp/asset/a4d2c994-e79b-4906-9870-567142583e5a";
const imgAgent5 = "https://www.figma.com/api/mcp/asset/4952c74b-3c99-4613-904d-1ccdbee9218a";
const imgAgent6 = "https://www.figma.com/api/mcp/asset/79889117-79d3-4e9d-a771-3812ae38b4d7";

// ─── MODEL PICKER ASSETS ──────────────────────────────────────────────────────
const imgModelScreenshot = "https://www.figma.com/api/mcp/asset/a589ef66-9bc9-4d38-a047-36379921115d";
const imgModelOpenAI  = "https://www.figma.com/api/mcp/asset/c691bf9e-95f0-415a-aa2e-e11bd2a1f5ee";
const imgModelMistral = "https://www.figma.com/api/mcp/asset/9dcabafc-e423-4132-968c-161d26a9839d";
const imgModelClaude  = "https://www.figma.com/api/mcp/asset/b9b54d4b-c313-4ad6-8711-90ba4a9feec2";
const imgModelGemini  = "https://www.figma.com/api/mcp/asset/0da6859a-30e6-4f74-a027-7c938c95c925";

// ─── CTA / INTEGRATIONS ASSETS ───────────────────────────────────────────────
const imgCtaStripe     = "https://www.figma.com/api/mcp/asset/c0667668-e7a1-4641-af9c-e47e6daed1ca";
const imgCtaShopify    = "https://www.figma.com/api/mcp/asset/798ed100-7440-4ccd-b168-7286507a5f83";
const imgCtaFigma      = "https://www.figma.com/api/mcp/asset/2bbd4a47-41d5-4067-bca1-826c8c7a0e18";
const imgCtaCanva      = "https://www.figma.com/api/mcp/asset/b16e598b-512b-43b3-a38c-eff45f824e18";
const imgCtaWord       = "https://www.figma.com/api/mcp/asset/a426334c-8482-49ad-8d73-b8ea0e691d5a";
const imgCtaGDrive     = "https://www.figma.com/api/mcp/asset/15294643-c67d-428d-939f-c12a8b7d513d";
const imgCtaJira       = "https://www.figma.com/api/mcp/asset/dd5cbbbf-db0a-4977-8046-683aa5524578";
const imgCtaOutlook    = "https://www.figma.com/api/mcp/asset/c62d921d-e53e-4bcd-9bc2-08a8bb9ceb23";
const imgCtaGithub     = "https://www.figma.com/api/mcp/asset/e4cb6ca8-fff5-4a39-9e69-8fdb094bd4fc";
const imgCtaAtlassian  = "https://www.figma.com/api/mcp/asset/69519f18-e229-44c0-a9cb-66021322bb29";
const imgCtaMailchimp  = "https://www.figma.com/api/mcp/asset/e930f48b-aa9d-4202-b40c-8054f2e82a42";
const imgCtaExcel      = "https://www.figma.com/api/mcp/asset/aeb2d1a0-8786-45e9-bd32-5929f50e4ff2";
const imgCtaLinkedIn   = "https://www.figma.com/api/mcp/asset/ce1a0b7d-501f-45c7-8606-d748713c7224";
const imgCtaGmail      = "https://www.figma.com/api/mcp/asset/24b4ca1d-5b4f-46ec-b9f9-c354c2f0c36f";
const imgCtaSlack      = "https://www.figma.com/api/mcp/asset/5c9f6bf7-0917-4d3d-abf0-34d90ef99b88";

// ─── FOOTER ASSETS ────────────────────────────────────────────────────────────
const imgFooterBg          = "https://www.figma.com/api/mcp/asset/344286e6-5360-4d78-9e0d-5d35b86836b2";
const imgFooterLogo        = "https://www.figma.com/api/mcp/asset/4b728a1c-f81a-473a-9a29-f4f17689b02d";
const imgFooterArrow       = "https://www.figma.com/api/mcp/asset/0946fd94-fec0-4d3f-b710-8e6d7e07addd";

// ─── SHARED UI ────────────────────────────────────────────────────────────────
function ButtonGhost({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

function ButtonDark({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] ${className}`}>
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

type BadgeColor = "neutral" | "brown" | "green" | "red" | "blue" | "yellow";
function Badge({ label, color = "neutral" }: { label: string; color?: BadgeColor }) {
  const s: Record<BadgeColor, { bg: string; text: string; shadow: string; inset: string }> = {
    neutral: { bg: "bg-[#ede1d7]", text: "text-[#524b47]", shadow: "shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]", inset: "shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)]" },
    brown:   { bg: "bg-[#e6d5ca]", text: "text-[#683d1b]", shadow: "shadow-[0px_1px_1.5px_0px_rgba(20,12,5,0.2),0px_0px_0px_1px_rgba(126,84,53,0.5)]",  inset: "shadow-[inset_0px_1px_0px_0px_rgba(250,241,235,0.7),inset_0px_-1px_0px_0px_rgba(126,84,53,0.1)]" },
    green:   { bg: "bg-[#f7fee6]", text: "text-[#456211]", shadow: "shadow-[0px_1px_1.5px_0px_rgba(17,25,1,0.2),0px_0px_0px_1px_rgba(128,183,7,0.5)]",  inset: "shadow-[inset_0px_1px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1px_0px_0px_rgba(128,183,7,0.1)]" },
    red:     { bg: "bg-[#ffbfb6]", text: "text-[#7a201c]", shadow: "shadow-[0px_1px_1.5px_0px_rgba(24,2,2,0.2),0px_0px_0px_1px_rgba(159,38,35,0.5)]",   inset: "shadow-[inset_0px_1px_0px_0px_rgba(253,231,231,0.7),inset_0px_-1px_0px_0px_rgba(159,38,35,0.1)]" },
    blue:    { bg: "bg-[#cadcf1]", text: "text-[#135487]", shadow: "shadow-[0px_1px_1.5px_0px_rgba(2,15,24,0.2),0px_0px_0px_1px_rgba(13,110,178,0.5)]",  inset: "shadow-[inset_0px_1px_0px_0px_rgba(231,244,253,0.7),inset_0px_-1px_0px_0px_rgba(13,110,178,0.1)]" },
    yellow:  { bg: "bg-[#e9dfc9]", text: "text-[#6d5921]", shadow: "shadow-[0px_1px_1.5px_0px_rgba(20,16,5,0.2),0px_0px_0px_1px_rgba(143,116,39,0.5)]", inset: "shadow-[inset_0px_1px_0px_0px_rgba(250,246,235,0.7),inset_0px_-1px_0px_0px_rgba(143,116,39,0.1)]" },
  };
  const c = s[color];
  return (
    <span className={`inline-flex items-center justify-center overflow-clip px-[5px] py-[2px] rounded-[6px] ${c.shadow} relative shrink-0`}>
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${c.bg}`} />
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${c.inset}`} />
      <span className={`relative text-[11px] font-medium leading-[16px] whitespace-nowrap ${c.text}`}>{label}</span>
    </span>
  );
}

// Shared workspace title bar used in Knowledge + Agents sections
function WorkspaceBar() {
  return (
    <div className="border border-[#d1c6bd] flex items-center justify-between px-5 py-[20px] rounded-[16px] w-full shrink-0">
      <div className="flex items-center gap-4">
        <div className="relative size-8 flex-shrink-0">
          <Image src={imgPinIcon} alt="" fill className="object-contain" unoptimized />
        </div>
        <p className="text-[24px] font-normal leading-[32px] text-black whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>
          # exec-strategy
        </p>
      </div>
      <Badge label="38 pins across 4 folders" color="blue" />
    </div>
  );
}

// ─── 1. NAVBAR ────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <nav className="w-full px-[200px] py-6 flex flex-col items-start">
      <div className="w-full bg-white/20 border border-[#d1c6bd] rounded-[22px] p-3 flex items-center">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="size-10 relative shrink-0">
              <Image src={imgNavLogo} alt="Souvenir" fill className="object-contain" unoptimized />
            </div>
            <span className="text-[34px] tracking-[0.01em] leading-none text-black font-normal" style={{ fontFamily: "var(--font-besley)" }}>
              Souvenir
            </span>
          </div>

          {/* Nav links */}
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

// ─── 2. HERO ──────────────────────────────────────────────────────────────────
function HeroDiagram() {
  return (
    <div className="relative w-[600px] h-[529px] bg-[#ede1d7] border border-white border-b-[2px] rounded-[12px] overflow-clip flex-shrink-0">
      {/* Header: badge + heading */}
      <div className="absolute left-[29px] top-[29px] w-[541px] flex flex-col gap-[9px]">
        {/* Green Souvenir badge */}
        <span className="inline-flex items-center justify-center overflow-clip px-[5px] py-[2px] rounded-[6px] relative shrink-0 shadow-[0px_1.218px_1.827px_0px_rgba(17,25,1,0.2),0px_0px_0px_1px_rgba(128,183,7,0.5)]">
          <span className="absolute inset-0 rounded-[6px] bg-[#f7fee6] pointer-events-none" />
          <span className="absolute inset-0 rounded-[6px] pointer-events-none shadow-[inset_0px_1.218px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1.218px_0px_0px_rgba(128,183,7,0.1)]" />
          <span className="relative text-[11px] font-medium leading-[16px] whitespace-nowrap text-[#456211]">Souvenir</span>
        </span>
        {/* Heading */}
        <p className="text-[22px] font-normal leading-[29px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
          One workspace. Coordinated Assistants. The Brain remembers everything.
        </p>
      </div>

      {/* Connector lines — Group 35529 (workspace network) */}
      <div className="absolute flex h-[127px] items-center justify-center left-[334px] top-[398px] w-[262px]">
        <div className="flex-none rotate-[-154.16deg]">
          <div className="h-0 relative w-[292px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine20} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[177px] items-center justify-center left-[328px] top-[168px] w-[273px]">
        <div className="flex-none rotate-[147.03deg]">
          <div className="h-0 relative w-[325px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine21} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[216px] items-center justify-center left-[-6px] top-[130px] w-[282px]">
        <div className="flex-none rotate-[37.54deg]">
          <div className="h-0 relative w-[355px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine22} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[46px] items-center justify-center left-[-29px] top-[387px] w-[294px]">
        <div className="flex-none rotate-[-8.91deg]">
          <div className="h-0 relative w-[297px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine26} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[70px] items-center justify-center left-[340px] top-[288px] w-[269px]">
        <div className="flex-none rotate-[165.41deg]">
          <div className="h-0 relative w-[278px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine27} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[10px] items-center justify-center left-[-143px] top-[313px] w-[175px]">
        <div className="flex-none rotate-[-3.31deg]">
          <div className="h-0 relative w-[175px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine24} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[110px] items-center justify-center left-[-67px] top-[435px] w-[103px]">
        <div className="flex-none rotate-[-46.74deg]">
          <div className="h-0 relative w-[150px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine25} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[134px] items-center justify-center left-[-19px] top-[407px] w-[297px]">
        <div className="flex-none rotate-[-24.18deg]">
          <div className="h-0 relative w-[326px]">
            <div className="absolute inset-[-2px_0_0_0]">
              <img alt="" className="block max-w-none w-full" src={imgHeroLine23} />
            </div>
          </div>
        </div>
      </div>

      {/* AI model connection lines */}
      <div className="absolute flex h-[43px] items-center justify-center left-[292px] top-[412px] w-[9px]">
        <div className="flex-none rotate-[101.13deg]">
          <div className="h-0 relative w-[44px]"><div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine1} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[9px] items-center justify-center left-[204px] top-[362px] w-[62px]">
        <div className="flex-none rotate-[-171.54deg]">
          <div className="h-0 relative w-[63px]"><div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine5} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[63px] items-center justify-center left-[303px] top-[274px] w-0">
        <div className="flex-none -rotate-90">
          <div className="h-0 relative w-[63px]"><div className="absolute inset-[-2px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine8} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[11px] items-center justify-center left-[195px] top-[243px] w-[35px]">
        <div className="flex-none rotate-[17.01deg]">
          <div className="h-0 relative w-[36px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine9} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[51px] items-center justify-center left-[210px] top-[199px] w-[34px]">
        <div className="flex-none rotate-[56.13deg]">
          <div className="h-0 relative w-[61px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine10} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[34px] items-center justify-center left-[258px] top-[215px] w-[1px]">
        <div className="flex-none rotate-[88.57deg]">
          <div className="h-0 relative w-[34px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine11} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[64px] items-center justify-center left-[318px] top-[185px] w-0">
        <div className="flex-none rotate-90">
          <div className="h-0 relative w-[64px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine12} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[23px] items-center justify-center left-[345px] top-[226px] w-[7px]">
        <div className="flex-none rotate-[105.95deg]">
          <div className="h-0 relative w-[24px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine13} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[3px] items-center justify-center left-[352px] top-[261px] w-[49px]">
        <div className="flex-none rotate-[176.12deg]">
          <div className="h-0 relative w-[50px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine14} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[31px] items-center justify-center left-[405px] top-[375px] w-[70px]">
        <div className="flex-none rotate-[-156.23deg]">
          <div className="h-0 relative w-[77px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine15} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[5px] items-center justify-center left-[408px] top-[359px] w-[80px]">
        <div className="flex-none rotate-[176.42deg]">
          <div className="h-0 relative w-[81px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine16} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[44px] items-center justify-center left-[405px] top-[311px] w-[47px]">
        <div className="flex-none rotate-[136.58deg]">
          <div className="h-0 relative w-[65px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine17} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[41px] items-center justify-center left-[401px] top-[379px] w-[19px]">
        <div className="flex-none rotate-[-115.14deg]">
          <div className="h-0 relative w-[45px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine18} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[7px] items-center justify-center left-[341px] top-[369px] w-[43px]">
        <div className="flex-none rotate-[-8.91deg]">
          <div className="h-0 relative w-[43px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine19} /></div></div>
        </div>
      </div>
      <div className="absolute h-0 left-[236px] top-[476px] w-[30px]">
        <div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine2} /></div>
      </div>
      <div className="absolute flex h-[8px] items-center justify-center left-[319px] top-[478px] w-[43px]">
        <div className="flex-none rotate-[10.01deg]">
          <div className="h-0 relative w-[43px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine4} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[13px] items-center justify-center left-[159px] top-[374px] w-0">
        <div className="flex-none -rotate-90">
          <div className="h-0 relative w-[13px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine6} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[16px] items-center justify-center left-[158px] top-[333px] w-0">
        <div className="flex-none -rotate-90">
          <div className="h-0 relative w-[16px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine7} /></div></div>
        </div>
      </div>
      <div className="absolute flex h-[32px] items-center justify-center left-[317px] top-[479px] w-[8px]">
        <div className="flex-none rotate-[-104.74deg]">
          <div className="h-0 relative w-[33px]"><div className="absolute inset-[-1px_0_0_0]"><img alt="" className="block max-w-none w-full" src={imgHeroAiLine3} /></div></div>
        </div>
      </div>

      {/* Central Souvenir hub icon */}
      <div className="absolute size-[76px]" style={{ left: "calc(50% + 2.79px)", top: "calc(50% + 110.42px)", transform: "translate(-50%,-50%)" }}>
        <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgHeroHub} />
      </div>

      {/* App logos */}
      {/* Google Ads / Sheets icon */}
      <div className="absolute bg-white flex flex-col h-[28px] items-start left-[241px] overflow-clip p-[4px] rounded-[5px] top-[189px] w-[34px]">
        <div className="relative h-[19px] w-[25px] flex-shrink-0">
          <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgHeroGSheets} />
        </div>
      </div>
      {/* Slack */}
      <div className="absolute left-[303px] size-[28px] top-[159px]">
        <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgHeroSlack} />
      </div>
      {/* Salesforce */}
      <div className="absolute bg-white flex flex-col h-[26px] items-start left-[349px] overflow-clip p-[5px] rounded-[6px] top-[200px] w-[33px]">
        <div className="relative h-[16px] w-[23px] flex-shrink-0">
          <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgHeroSalesforce} />
        </div>
      </div>
      {/* Quickbooks */}
      <div className="absolute left-[172px] size-[26px] top-[223px]">
        <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgHeroQuickbooks} />
      </div>
      {/* Google Ads */}
      <div className="absolute bg-white flex flex-col h-[28px] items-start left-[184px] overflow-clip p-[3px] rounded-[7px] top-[173px] w-[30px]">
        <div className="relative h-[23px] w-[25px] flex-shrink-0">
          <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgHeroGoogleAds} />
        </div>
      </div>
      {/* AI model logos */}
      <div className="absolute left-[449px] overflow-clip rounded-[6px] size-[28px] top-[287px]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHeroOpenAI} />
      </div>
      <div className="absolute left-[488px] overflow-clip rounded-[6px] size-[34px] top-[341px]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHeroClaude} />
      </div>
      <div className="absolute left-[473px] overflow-clip rounded-[6px] size-[29px] top-[401px]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHeroGemini} />
      </div>
      <div className="absolute left-[416px] overflow-clip rounded-[6px] size-[30px] top-[420px]">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgHeroMistral} />
      </div>

      {/* Pin Insert cards */}
      {/* Morning Briefing */}
      <div className="absolute bg-white flex h-[41px] items-center left-[29px] p-[5px] rounded-[10px] top-[292px] w-[208px]">
        <div className="flex flex-col gap-[3px] w-full">
          <p className="font-medium leading-[14px] text-[9px] text-[#26211e] truncate">Morning Briefing</p>
          <div className="flex gap-[4px] items-center">
            <Badge label="Daily 8am" color="red" />
            <Badge label="revenue, ad spend" color="green" />
            <Badge label="GP:CAC posted to Slack" color="yellow" />
          </div>
        </div>
      </div>
      {/* Utilization Report */}
      <div className="absolute bg-white flex h-[52px] items-center left-[29px] p-[7px] rounded-[10px] top-[387px] w-[217px]">
        <div className="flex flex-col gap-[3px] w-full">
          <p className="font-medium leading-[18px] text-[12px] text-[#26211e] truncate">Utilization Report</p>
          <div className="flex gap-[5px] items-center">
            <Badge label="Weekly → billable hrs by team" color="red" />
            <Badge label="margin alerts" color="green" />
          </div>
        </div>
      </div>

      {/* Agent label pins */}
      {/* Ad Copywriter */}
      <div className="absolute bg-[#f7f2ed] left-[105px] overflow-clip px-[10px] py-[5px] rounded-[13px] shadow-[0px_1.675px_2.345px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.838px_#ede1d7] top-[483px]">
        <p className="font-normal leading-[18px] text-[13px] text-[#26211e] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>Ad Copywriter</p>
      </div>
      <div className="absolute border border-white flex items-center justify-center left-[195px] overflow-clip p-[4px] rounded-full shadow-[0px_0.665px_0.665px_0px_rgba(59,54,50,0.05),0px_0px_0px_0.61px_#ede1d7] size-[40px] top-[457px]">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <img alt="" className="absolute w-full h-full object-cover" src={imgHeroPersona} />
          <div className="absolute inset-0 bg-[#cfbeac] rounded-full" />
        </div>
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgHeroImg8} />
      </div>
      {/* Email & SMS Lifecycle */}
      <div className="absolute bg-[#f7f2ed] left-[389px] overflow-clip px-[10px] py-[5px] rounded-[13px] shadow-[0px_1.675px_2.345px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.838px_#ede1d7] top-[495px]">
        <p className="font-normal leading-[18px] text-[13px] text-[#26211e] whitespace-nowrap" style={{ fontFamily: "var(--font-besley)" }}>Email &amp; SMS Lifecycle</p>
      </div>
      <div className="absolute border border-white flex items-center justify-center left-[362px] overflow-clip p-[4px] rounded-full shadow-[0px_0.665px_0.665px_0px_rgba(59,54,50,0.05),0px_0px_0px_0.61px_#ede1d7] size-[40px] top-[470px]">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <img alt="" className="absolute w-full h-full object-cover" src={imgHeroPersona} />
          <div className="absolute inset-0 bg-[#cfbeac] rounded-full" />
        </div>
        <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgHeroImg7} />
      </div>

      {/* Floating pill buttons */}
      <div className="absolute flex items-center justify-center left-[384px] overflow-clip px-[3px] py-[3px] rounded-[8px] shadow-[0px_0.914px_0.914px_0px_rgba(59,54,50,0.05),0px_1.218px_2.619px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.838px_#ede1d7] top-[354px] h-[25px] w-[23px] bg-white">
        <p className="font-semibold leading-[18px] text-[13px] text-[#524b47]">Ai</p>
      </div>
      <div className="absolute flex items-center justify-center left-[229px] overflow-clip px-[3px] py-[3px] rounded-[8px] shadow-[0px_0.914px_0.914px_0px_rgba(59,54,50,0.05),0px_1.218px_2.619px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.838px_#ede1d7] top-[250px] h-[25px] w-[122px] bg-white">
        <p className="font-semibold leading-[18px] text-[13px] text-[#524b47]">900+ Connectors</p>
      </div>
      <div className="absolute flex items-center justify-center left-[118px] overflow-clip px-[3px] py-[3px] rounded-[8px] shadow-[0px_0.914px_0.914px_0px_rgba(59,54,50,0.05),0px_1.218px_2.619px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.838px_#ede1d7] top-[349px] h-[25px] w-[85px] bg-white">
        <p className="font-semibold leading-[18px] text-[13px] text-[#524b47]">Automation</p>
      </div>
      <div className="absolute flex items-center justify-center left-[265px] overflow-clip px-[3px] py-[3px] rounded-[8px] shadow-[0px_0.914px_0.914px_0px_rgba(59,54,50,0.05),0px_1.218px_2.619px_0px_rgba(38,33,30,0.15),0px_0px_0px_0.838px_#ede1d7] top-[456px] h-[25px] w-[56px] bg-white">
        <p className="font-semibold leading-[18px] text-[13px] text-[#524b47]">Agents</p>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="bg-white rounded-[16px] px-9 py-8 flex items-center w-full overflow-hidden">
      <div className="flex gap-[59px] items-center">
        {/* Left: text */}
        <div className="flex flex-col gap-[29px] items-start flex-shrink-0 w-[595px]">
          <Badge label="Souvenir for Individuals · prosumers, creators, freelancers" color="brown" />
          <div className="flex flex-col gap-4">
            <h1 className="text-[44px] font-normal leading-[52px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
              Your personal AI{" "}
              <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>operating system.</em>
            </h1>
            <p className="text-[15px] text-black leading-[20px]">
              Souvenir connects your disconnected apps, automates tasks across them, and saves your AI work forever.
            </p>
          </div>
          <div className="flex items-center gap-[15px]">
            <ButtonGhost>Get started for free</ButtonGhost>
            <ButtonDark>
              Book a Demo
              <span className="relative size-[15px] flex-shrink-0">
                <Image src={imgHeroArrow} alt="" fill className="object-contain" unoptimized />
              </span>
            </ButtonDark>
          </div>
        </div>
        {/* Right: diagram */}
        <HeroDiagram />
      </div>
    </section>
  );
}

// ─── 3. WHY SOUVENIR? ─────────────────────────────────────────────────────────
type ProblemRow = { bold: string; normal: string };

function RedProblemRow({ bold, normal }: ProblemRow) {
  return (
    <div className="bg-white flex items-center gap-[8px] justify-center overflow-clip p-2 rounded-[11px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative flex-shrink-0 size-[30px]">
        <div className="absolute left-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(159,38,35,0.5)] inset-0">
          <div className="absolute inset-0 bg-[#ffbfb6] rounded-[8px]" />
          <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(253,231,231,0.7),inset_0px_-1.343px_0px_0px_rgba(159,38,35,0.1)]" />
          <div className="absolute inset-[22%]">
            <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgWhyStickyNote} />
          </div>
        </div>
      </div>
      <p className="text-[16px] leading-[22px] overflow-hidden text-ellipsis text-[#26211e]">
        <span className="font-semibold text-[#c62b29]">{bold} </span>
        <span className="font-normal text-black">{normal}</span>
      </p>
    </div>
  );
}

function GreenSolutionRow({ bold, normal }: ProblemRow) {
  return (
    <div className="bg-white flex items-center gap-[8px] justify-center overflow-clip p-2 rounded-[11px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative flex-shrink-0 size-[30px]">
        <div className="absolute left-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(128,183,7,0.5)] inset-0">
          <div className="absolute inset-0 bg-[#e5f2c5] rounded-[8px]" />
          <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(247,254,230,0.7),inset_0px_-1.343px_0px_0px_rgba(128,183,7,0.1)]" />
          <div className="absolute inset-[16%]">
            <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgWhyCodeIcon} />
          </div>
        </div>
      </div>
      <p className="text-[16px] leading-[22px] overflow-hidden text-ellipsis text-[#26211e]">
        <span className="font-semibold text-[#628b10]">{bold} </span>
        <span className="font-normal text-black">{normal}</span>
      </p>
    </div>
  );
}

function WhySouvenirSection() {
  const problems: ProblemRow[] = [
    { bold: "Re-explaining context", normal: "— to every new ChatGPT chat — your voice, your tone, your project brief." },
    { bold: "Notes spread", normal: "— across Notion, Apple Notes, Drive, voice memos — you can never find that one good idea." },
    { bold: "Manually copy-pasting", normal: "— between Gmail, Sheets, ChatGPT, Claude — you're the integration layer." },
    { bold: "Repeat work", normal: "— every week — the same newsletter, the same invoices, the same drafts." },
    { bold: "Locked into one AI model", normal: "— paying for ChatGPT Plus and Claude Pro and Perplexity separately." },
  ];
  const solutions: ProblemRow[] = [
    { bold: "Pinned context", normal: "— your voice, your projects, your decisions are saved once and pulled into every chat." },
    { bold: "One searchable workspace", normal: "— notes, files, voice memos, web bookmarks all unified." },
    { bold: "Auto-connected app", normal: "— Souvenir reads from Gmail, Drive, Notion, Calendar so you don't have to." },
    { bold: "Brains on autopilot", normal: "— weekly newsletter, monthly invoices, daily triage run on their own." },
    { bold: "Multi-agent workforce", normal: "— in one chat — auto-routed to the best one per task, billed as one credit pool." },
  ];

  return (
    <section className="flex flex-col gap-8 items-center w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="The shift" color="neutral" />
        <h2 className="text-[36px] font-normal leading-[42px] text-black text-center" style={{ fontFamily: "var(--font-besley)" }}>
          Why Souvenir?
        </h2>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[576px]">
          The cost of running everything across disconnected apps adds up — in hours, in lost context, in re-explaining yourself to every new chat.
        </p>
      </div>

      {/* Two-column comparison */}
      <div className="relative w-full flex gap-[100px]">
        {/* Without Souvenir */}
        <div className="flex-1 bg-white rounded-[16px] p-8 flex flex-col gap-4">
          <Badge label="Without Souvenir" color="red" />
          <h3 className="text-[24px] font-normal leading-[32px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
            Data leaking. Context lost. Operations stalled.
          </h3>
          <div className="flex flex-col gap-4">
            {problems.map((r, i) => <RedProblemRow key={i} {...r} />)}
          </div>
        </div>

        {/* Running men separator */}
        <div className="absolute left-[calc(50%-20px)] top-[50%] -translate-y-1/2 flex items-center gap-[-7px]">
          <div className="relative size-[40px]">
            <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgWhyChara} />
          </div>
          <div className="relative size-[40px]">
            <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgWhyChara1} />
          </div>
          <div className="relative size-[40px]">
            <img alt="" className="absolute inset-0 w-full h-full object-contain" src={imgWhyChara2} />
          </div>
        </div>

        {/* With Souvenir */}
        <div className="flex-1 bg-white rounded-[16px] p-8 flex flex-col gap-4">
          <Badge label="With Souvenir" color="green" />
          <h3 className="text-[24px] font-normal leading-[32px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
            One operational layer.{" "}
            <em className="text-[#3b3632]" style={{ fontFamily: "var(--font-besley)" }}>One workforce. Audit-logged.</em>
          </h3>
          <div className="flex flex-col gap-4">
            {solutions.map((r, i) => <GreenSolutionRow key={i} {...r} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. KNOWLEDGE ORGANIZED ───────────────────────────────────────────────────
type PinItem = { name: string; meta: string };
type FolderCard = { folder: string; count: string; pins: PinItem[] };

function PinRow({ name, meta }: PinItem) {
  return (
    <div className="bg-white flex items-center gap-[8px] overflow-clip p-2 rounded-[11px] shadow-[0px_1.343px_1.88px_0px_rgba(82,75,71,0.12),0px_0px_0px_0.671px_#ede1d7]">
      <div className="relative flex-shrink-0 size-[30px]">
        <div className="absolute inset-0 overflow-clip rounded-[8px] shadow-[0px_0px_0px_1px_rgba(103,79,104,0.5)]">
          <div className="absolute inset-0 bg-[#ded0df] rounded-[8px]" />
          <div className="absolute inset-0 rounded-[8px] shadow-[inset_0px_1.343px_0px_0px_rgba(248,236,249,0.7),inset_0px_-1.343px_0px_0px_rgba(103,79,104,0.1)]" />
          <div className="absolute inset-[22%]">
            <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgBrushIcon} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1 min-w-0">
        <p className="font-semibold text-[16px] leading-[22px] text-[#120c08] truncate">{name}</p>
        <p className="font-mono text-[13px] leading-[16px] text-[#524b47] whitespace-nowrap ml-2 flex-shrink-0">{meta}</p>
      </div>
    </div>
  );
}

function FolderCardUI({ folder, count, pins }: FolderCard) {
  return (
    <div className="bg-white rounded-[16px] p-8 flex flex-col gap-[10px] flex-1">
      <div className="flex items-center gap-[10px]">
        <div className="relative size-[32px] flex-shrink-0">
          <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgFolderIcon} />
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[24px] font-normal leading-[32px] text-black" style={{ fontFamily: "var(--font-besley)" }}>{folder}</p>
          <p className="text-[16px] font-normal leading-[22px] text-black" style={{ fontFamily: "var(--font-besley)" }}>{count}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {pins.map((p, i) => <PinRow key={i} {...p} />)}
      </div>
    </div>
  );
}

function KnowledgeSection() {
  const row1: FolderCard[] = [
    { folder: "Book draft", count: "12 pins", pins: [
      { name: "Re-explaining context", meta: "used 8×" },
      { name: "Writing voice profile", meta: "used 14×" },
      { name: "Chapter 4 · first draft", meta: "just pinned" },
    ]},
    { folder: "Client work", count: "9 pins", pins: [
      { name: "Onboarding template", meta: "used 6×" },
      { name: "Invoice template", meta: "used 11×" },
      { name: "Brand brief — Sage Co.", meta: "used 2×" },
    ]},
  ];
  const row2: FolderCard[] = [
    { folder: "Newsletter", count: "11 pins", pins: [
      { name: "Subject line hooks", meta: "used 22×" },
      { name: "Content pillars", meta: "used 9×" },
      { name: "Last 5 issues archive", meta: "reference" },
    ]},
    { folder: "Personal", count: "6 pins", pins: [
      { name: "2026 goals", meta: "just pinned" },
      { name: "Reading list", meta: "used 4×" },
      { name: "Travel checklist", meta: "used 2×" },
    ]},
  ];

  return (
    <section className="flex flex-col gap-8 items-center w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="The shift" color="neutral" />
        <h2 className="text-[36px] font-normal leading-[42px] text-black text-center" style={{ fontFamily: "var(--font-besley)" }}>
          Your knowledge,{" "}
          <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>organized.</em>
        </h2>
        <p className="text-[16px] text-black leading-[22px] text-center">
          Save any chat output as a Pin. Sort into folders. Surface in any future conversation.
        </p>
      </div>
      {/* Workspace bar */}
      <WorkspaceBar />
      {/* Folder grid */}
      <div className="flex gap-5 w-full">
        {row1.map((f, i) => <FolderCardUI key={i} {...f} />)}
      </div>
      <div className="flex gap-5 w-full">
        {row2.map((f, i) => <FolderCardUI key={i} {...f} />)}
      </div>
    </section>
  );
}

// ─── 5. PERSONAL TEAM OF AI AGENTS ───────────────────────────────────────────
type AgentCard = {
  img: string;
  name: string;
  subtitle: string;
  visibility: "Private" | "Team";
  quote: string;
};

function AgentCardUI({ img, name, subtitle, visibility, quote }: AgentCard) {
  return (
    <div className="bg-white flex flex-col gap-[12px] overflow-clip p-[16px] rounded-[22px] shadow-[0px_2.728px_3.819px_0px_rgba(82,75,71,0.12),0px_0px_0px_1.364px_#ede1d7] flex-1">
      {/* Header */}
      <div className="flex items-start gap-4">
        {/* Persona photo */}
        <div className="relative rounded-[11px] shadow-[0px_1.488px_1.486px_0px_rgba(59,54,50,0.05),0px_0px_0px_1.364px_#ede1d7] overflow-hidden flex-shrink-0 size-[89px]">
          <img alt={name} className="absolute inset-0 w-full h-full object-cover" src={img} />
        </div>
        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col gap-[11px]">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <p className="text-[22px] font-normal leading-[30px] text-[#26211e] truncate" style={{ fontFamily: "var(--font-besley)" }}>{name}</p>
              <p className="font-mono text-[18px] leading-[22px] text-[#827a74] truncate">{subtitle}</p>
            </div>
            <div className="relative flex-shrink-0 size-[27px] p-[8px]">
              <img alt="" className="absolute block inset-0 w-full h-full object-contain" src={imgAgentDotsIcon} />
            </div>
          </div>
          <div className="flex gap-[12px]">
            <Badge label={visibility} color="neutral" />
            <Badge label="Research" color="blue" />
          </div>
        </div>
      </div>
      {/* Quote */}
      <p className="text-[15px] font-normal leading-[22px] text-[#857a72] overflow-hidden" style={{ fontFamily: "var(--font-besley)" }}>
        {quote}
      </p>
    </div>
  );
}

function AgentsSection() {
  const agents: AgentCard[] = [
    {
      img: imgAgent1, name: "Content Writer", subtitle: "Drafts in your voice", visibility: "Private",
      quote: `"I noticed you skipped the second espresso this week — three days running. Whatever's pulling your attention, I hope it's worth the trade…"`,
    },
    {
      img: imgAgent2, name: "Research Agent", subtitle: "@Web research", visibility: "Team",
      quote: `"Found 3 case studies on remote async teams. Top one: Doist (Twist). Cited sources, themes pulled, ready for your draft."`,
    },
    {
      img: imgAgent3, name: "Note Organizer", subtitle: "@structured doc", visibility: "Team",
      quote: `"Pulled 14 thoughts from your 9-minute walk. Sorted into 3 themes. Top 4 action items moved to your Personal folder."`,
    },
    {
      img: imgAgent4, name: "Inbox Triager", subtitle: "@Reads & classifies", visibility: "Private",
      quote: `"23 overnight emails. 3 need you (replies drafted). 11 auto-archived. 9 newsletters waiting in Reading Queue."`,
    },
    {
      img: imgAgent5, name: "Project Manager", subtitle: "@Tracks tools", visibility: "Private",
      quote: `"3 projects open. Sage Co. is at risk (no commits in 4 days). Book draft on track. Newsletter due Friday."`,
    },
    {
      img: imgAgent6, name: "Web Scraper", subtitle: "@Pulls data", visibility: "Private",
      quote: `"47 listings pulled from the niche board. De-duped to 31. Saved to 'Lead pool · Q1' with company, role, link, scored 1–10."`,
    },
  ];

  return (
    <section className="flex flex-col gap-8 items-center w-full">
      {/* Header */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="A workforce built for one" color="neutral" />
        <h2 className="text-[36px] font-normal leading-[42px] text-black text-center" style={{ fontFamily: "var(--font-besley)" }}>
          Personal team of AI Agents
        </h2>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[576px]">
          The cost of running everything across disconnected apps adds up — in hours, in lost context, in re-explaining yourself to every new chat.
        </p>
      </div>
      {/* Workspace bar */}
      <WorkspaceBar />
      {/* Agent cards grid */}
      <div className="flex gap-[22px] w-full">
        {agents.slice(0, 3).map((a, i) => <AgentCardUI key={i} {...a} />)}
      </div>
      <div className="flex gap-[22px] w-full">
        {agents.slice(3).map((a, i) => <AgentCardUI key={i} {...a} />)}
      </div>
    </section>
  );
}

// ─── 6. AUTOMATION: SET IT ONCE ───────────────────────────────────────────────
function AutomationSection() {
  return (
    <section className="bg-white rounded-[16px] px-9 py-8 flex gap-7 items-center w-full">
      {/* Left: text */}
      <div className="flex flex-col gap-4 max-w-[631px] flex-shrink-0">
        <Badge label="Brain & Automation" color="neutral" />
        <h2 className="text-[36px] font-normal leading-[42px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
          Set it once.{" "}
          <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>Runs forever.</em>
        </h2>
        <p className="text-[16px] text-black leading-[22px] max-w-[576px] text-center">
          Schedule tasks to run on their own. Output lands where you want it.
        </p>
      </div>
      {/* Right: visual placeholder */}
      <div className="flex-1 bg-[#ede1d7] border border-white border-b-[2px] h-[385px] overflow-clip rounded-[12px] relative">
        {/* The Figma design has a UI screenshot here — shown as a styled placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-[#9c938b] text-[14px]">Automation interface</p>
        </div>
      </div>
    </section>
  );
}

// ─── 7. MODEL PICKER ─────────────────────────────────────────────────────────
function ModelPickerSection() {
  return (
    <section className="bg-white rounded-[16px] px-9 py-9 flex gap-[39px] items-center w-full">
      {/* Left: app UI screenshot */}
      <div className="bg-[#ede1d7] h-[542px] overflow-clip relative rounded-[17px] flex-shrink-0 w-[694px]">
        {/* Model selector UI screenshot */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[76px] border-[2px] border-[#9c938b] rounded-[35px] overflow-hidden w-[640px] h-[676px]">
          <img alt="Model selector" className="absolute inset-0 w-full h-full object-cover object-top" src={imgModelScreenshot} />
        </div>
        {/* AI model pills row */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[24px] flex items-center gap-[2px] bg-gradient-to-b from-[#524b47] to-[#26211e] overflow-clip px-[11px] py-[6px] rounded-[11px] shadow-[0px_0px_0px_1.064px_#000]">
          {[imgModelOpenAI, imgModelMistral, imgModelClaude, imgModelGemini].map((src, i) => (
            <div key={i} className="overflow-clip rounded-[6px] size-[26px] flex-shrink-0">
              <img alt="" className="w-full h-full object-cover" src={src} />
            </div>
          ))}
          <span className="absolute inset-0 rounded-[11px] pointer-events-none shadow-[inset_0px_1.064px_0.387px_0px_rgba(247,242,237,0.3),inset_0px_-2.322px_0.387px_0px_#120c08,inset_0px_-2.709px_4.258px_-2.322px_rgba(247,242,237,0.5)]" />
        </div>
      </div>

      {/* Right: text */}
      <div className="flex flex-col gap-4 flex-shrink-0 w-[524px]">
        <Badge label="Every major AI model" color="neutral" />
        <h2 className="text-[40px] font-normal leading-[48px] text-black" style={{ fontFamily: "var(--font-besley)" }}>
          Souvenir picks.{" "}
          <em className="text-[#6a625d]" style={{ fontFamily: "var(--font-besley)" }}>You don&apos;t think about it.</em>
        </h2>
        <p className="text-[16px] text-black leading-[22px]">
          Same chat, different models. Choose which model you want or have Souvenir autoroute each of your queries to the best model for the task.
        </p>
      </div>
    </section>
  );
}

// ─── 8. CTA + INTEGRATIONS ───────────────────────────────────────────────────
function AppIconBox({ src, name }: { src: string; name: string }) {
  return (
    <div className="bg-white/20 flex items-center justify-center rounded-[9px] size-[75px] flex-shrink-0">
      <div className="relative size-[47px]">
        <img alt={name} className="absolute block inset-0 w-full h-full object-contain" src={src} />
      </div>
    </div>
  );
}

function CTASection() {
  const col1 = [imgCtaStripe, imgCtaShopify, imgCtaFigma, imgCtaCanva];
  const col2 = [imgCtaWord, imgCtaGDrive, imgCtaJira, imgCtaMailchimp];
  const col3 = [imgCtaOutlook, imgCtaGithub, imgCtaAtlassian, imgCtaSlack];
  const col4 = [imgCtaExcel, imgCtaLinkedIn, imgCtaGmail, imgCtaSlack];
  const names = ["Stripe","Shopify","Figma","Canva","Word","Drive","Jira","Mailchimp","Outlook","GitHub","Atlassian","Slack","Excel","LinkedIn","Gmail","Slack"];

  return (
    <section className="relative overflow-clip rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] w-full">
      <div className="absolute inset-0 bg-white rounded-[12px]" />
      <div className="absolute inset-0 rounded-[12px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      <div className="relative flex gap-[112px] items-center overflow-clip px-6 py-6">
        {/* Left: text + CTAs */}
        <div className="flex flex-col gap-4 w-[821px] flex-shrink-0">
          <h2 className="text-[40px] font-normal leading-[48px] text-[#120c08]" style={{ fontFamily: "var(--font-besley)" }}>
            Stop re-teaching AI. Start compounding your work.
          </h2>
          <p className="text-[24px] font-normal leading-[32px] text-[#120c08]" style={{ fontFamily: "var(--font-besley)" }}>
            Souvenir is your personal AI operating system, one unified workspace where your disconnected apps are unified and your tasks are automated across them.
          </p>
          <div className="flex items-center gap-6 mt-2">
            <ButtonGhost>Join Discord Community</ButtonGhost>
            <ButtonDark>Book a Demo</ButtonDark>
          </div>
        </div>
        {/* Right: app icon grid */}
        <div className="flex gap-[14px] items-start flex-shrink-0">
          {[col1, col2, col3, col4].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-[14px]">
              {col.map((src, ri) => (
                <AppIconBox key={ri} src={src} name={names[ci * 4 + ri]} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 9. FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  const links = {
    Product:  ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company:  ["About", "Blogs"],
    Legal:    ["Terms of Service", "Privacy Policy", "Other Policies"],
  };

  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      {/* Background */}
      <div className="absolute inset-0 rounded-[16px] overflow-hidden">
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgFooterBg} />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95 rounded-[16px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8">
        {/* Top row */}
        <div className="flex gap-[120px] items-start">
          {/* Brand + newsletter */}
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
            {/* Newsletter input */}
            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]" style={{ fontFamily: "var(--font-besley)" }}>Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0" style={{ fontFamily: "var(--font-besley)" }}>
                  your@company.com
                </span>
                <button className="relative bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
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

          {/* Nav columns */}
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

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function IndividualPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1334px] mx-auto pb-0 flex flex-col gap-[100px]">
        <HeroSection />
        <WhySouvenirSection />
        <KnowledgeSection />
        <AgentsSection />
        <AutomationSection />
        <ModelPickerSection />
        <CTASection />
      </div>

      <div className="max-w-[1334px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

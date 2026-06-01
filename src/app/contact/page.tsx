import Image from "next/image";

// ─── Asset URLs (Figma exports, valid 7 days) ────────────────────────────────
const imgNavLogo      = "https://www.figma.com/api/mcp/asset/83b0effa-6e47-4106-aa51-6e2e0315a5e2";
const imgChevron      = "https://www.figma.com/api/mcp/asset/19115899-c159-4093-b7a7-aee88e7dea71";
const imgMailIcon     = "https://www.figma.com/api/mcp/asset/be6f53de-e9eb-4322-942f-6900fe8c9671";
const imgFooterLogo   = "https://www.figma.com/api/mcp/asset/81ad2693-dc9c-492f-b112-e269570649bf";
const imgFooterBg     = "https://www.figma.com/api/mcp/asset/55129a74-9a93-4d4b-a5b7-146480c2423f";
const imgFooterDot    = "https://www.figma.com/api/mcp/asset/c296283c-600d-467b-9740-b1e84d094c19";
const imgSubmitArrow  = "https://www.figma.com/api/mcp/asset/d4edf563-80ce-49ab-b517-608a7d7bf0c5";

// ─── Shared button components ─────────────────────────────────────────────────
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

function Badge({ label, color = "neutral" }: { label: string; color?: "neutral" | "blue" }) {
  const styles = {
    neutral: {
      bg: "bg-[#ede1d7]",
      text: "text-[#524b47]",
      shadow: "shadow-[0px_1px_1.5px_0px_rgba(18,12,8,0.2),0px_0px_0px_1px_rgba(106,98,93,0.5)]",
      inset: "shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.7),inset_0px_-1px_0px_0px_rgba(106,98,93,0.1)]",
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
              <Image src={imgNavLogo} alt="Souvenir logo" fill className="object-contain" unoptimized />
            </div>
            <span
              className="text-[34px] tracking-[0.01em] leading-none text-black font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Souvenir
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Product
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image src={imgChevron} alt="" fill className="object-contain" unoptimized />
              </span>
            </button>
            <button className="flex items-center gap-0.5 text-[14px] text-[#524b47] leading-[22px]">
              Solution
              <span className="size-4 relative ml-0.5 flex-shrink-0">
                <Image src={imgChevron} alt="" fill className="object-contain" unoptimized />
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

// ─── Contact Section ──────────────────────────────────────────────────────────
function ContactSection() {
  return (
    <section className="flex justify-center w-full">
      <div className="flex gap-16 items-start">
        {/* Left: info + contact card */}
        <div className="flex flex-col gap-8 w-[384px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              <Badge label="Company·Contact" color="neutral" />
              <h1
                className="text-[40px] text-black leading-[48px] font-normal whitespace-nowrap"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Get in touch.
              </h1>
            </div>
            <p
              className="text-[16px] text-black leading-[22px]"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              We respond within 1 business day
            </p>
          </div>

          {/* Email contact card */}
          <div className="border border-[#d1c6bd] rounded-[16px] p-5 flex gap-5 items-start w-full">
            <div className="relative size-[60px] flex-shrink-0">
              <Image src={imgMailIcon} alt="Email" fill className="object-contain" unoptimized />
            </div>
            <div className="flex flex-col gap-2">
              <Badge label="GENERAL" color="blue" />
              <p
                className="text-[24px] text-black leading-[32px] font-normal"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                info@getsouvenir.com
              </p>
            </div>
          </div>
        </div>

        {/* Right: contact form card */}
        <div className="bg-white rounded-[18px] shadow-[0px_12px_16px_0px_rgba(130,122,116,0.12),0px_2px_2.8px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7] p-4 w-[359px]">
          <div className="flex flex-col gap-4">
            <h2
              className="text-[24px] text-black leading-[32px] font-normal"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              Send us a message
            </h2>

            <div className="flex flex-col gap-4 w-full">
              {/* Your name */}
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-[14px] text-[#524b47] leading-[22px]"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  Your name
                </label>
                <div className="bg-white w-full flex items-center overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full text-[14px] text-[#26211e] leading-[22px] placeholder:text-[#6a625d] outline-none bg-transparent min-w-0"
                    style={{ fontFamily: "var(--font-besley)" }}
                  />
                </div>
              </div>

              {/* Email address */}
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-[14px] text-[#524b47] leading-[22px]"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  Email address
                </label>
                <div className="bg-white w-full flex items-center overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7] h-9">
                  <input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full text-[14px] text-[#26211e] leading-[22px] placeholder:text-[#6a625d] outline-none bg-transparent min-w-0"
                    style={{ fontFamily: "var(--font-besley)" }}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1 w-full">
                <label
                  className="text-[14px] text-[#524b47] leading-[22px]"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  Message
                </label>
                <div className="bg-white w-full overflow-clip px-2.5 pt-[7px] pb-2 rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                  <textarea
                    name="message"
                    placeholder="Tell us what you need....."
                    rows={5}
                    className="w-full text-[14px] text-[#26211e] leading-[22px] placeholder:text-[#6a625d] outline-none bg-transparent resize-none min-w-0"
                    style={{ fontFamily: "var(--font-besley)" }}
                  />
                </div>
              </div>

              {/* Submit */}
              <ButtonDark className="w-full py-2">
                Send message
              </ButtonDark>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const footerLinks: Record<string, string[]> = {
    Product:   ["AI Assistants", "Brain & Automation", "Slack Command Center", "Unified Chatspace", "Pricing"],
    Solutions: ["Businesses", "Individuals"],
    Company:   ["About", "Blogs"],
    Legal:     ["Terms of Service", "Privacy Policy", "Other Policies"],
  };

  return (
    <footer className="relative w-full overflow-hidden rounded-[16px] min-h-[362px]">
      {/* Background texture */}
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-90" />
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

            {/* Newsletter input */}
            <div className="flex flex-col gap-1 w-[327px]">
              <label
                className="text-[14px] text-white leading-[22px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Newsletter
              </label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span
                  className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  your@company.com
                </span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-1 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap flex-shrink-0">
                  <span className="relative size-4 flex-shrink-0">
                    <Image src={imgSubmitArrow} alt="" fill className="object-contain" unoptimized />
                  </span>
                  Subscribe
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
          <p
            className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="relative size-[7px] flex-shrink-0">
            <Image src={imgFooterDot} alt="" fill className="object-contain" unoptimized />
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

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto pb-0">
        <div className="pt-16 pb-[100px]">
          <ContactSection />
        </div>
      </div>

      <div className="max-w-[1328px] mx-auto pb-8">
        <Footer />
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

// ─── Asset URLs (Figma MCP exports – expire ~7 days) ──────────────────────────
const imgLogoUnion   = "https://www.figma.com/api/mcp/asset/60c0e154-8772-485a-8525-5736c1d39066";
const imgChevronDown = "https://www.figma.com/api/mcp/asset/c705d94a-8bf5-4003-8197-8f176d67fd45";
const imgTokenIcon   = "https://www.figma.com/api/mcp/asset/04956c1e-bcb5-49e0-9b84-744d7071895f";
const imgSlackLogo   = "https://www.figma.com/api/mcp/asset/3adb78b9-98bd-4fec-bdb1-3517f25ecd36";
const imgFooterBg    = "https://www.figma.com/api/mcp/asset/74982765-99cb-421d-a38a-55e17640ae92";
const imgFooterLogo  = "https://www.figma.com/api/mcp/asset/d6ebf9eb-da7a-4cb5-bd91-451b326c69b5";
const imgSubmitIcon  = "https://www.figma.com/api/mcp/asset/2aee586a-46aa-4d30-be7e-3c69d67e163f";

// ─── Primitive: ButtonGhost ────────────────────────────────────────────────────
function ButtonGhost({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15),0px_0px_0px_1px_#ede1d7] bg-white text-[#524b47] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
      {children}
    </button>
  );
}

// ─── Primitive: ButtonDark ─────────────────────────────────────────────────────
function ButtonDark({
  children,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex gap-0.5 items-center justify-center overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] shadow-[0px_0px_0px_1px_#000,0px_1.091px_1.091px_0px_rgba(59,54,50,0.1),0px_1.455px_3.127px_0px_rgba(59,54,50,0.4)] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap ${className}`}
    >
      <span className="absolute inset-0 rounded-[10px] pointer-events-none bg-gradient-to-b from-[#524b47] to-[#26211e]" />
      <span className="absolute inset-0 rounded-[10px] pointer-events-none shadow-[inset_0px_1px_0.364px_0px_rgba(247,242,237,0.3),inset_0px_-2.182px_0.364px_0px_#120c08,inset_0px_-2.545px_4px_-2.182px_rgba(247,242,237,0.5)]" />
      <span className="relative z-10 flex items-center gap-1">{children}</span>
    </button>
  );
}

// ─── Primitive: Badge ──────────────────────────────────────────────────────────
type BadgeColor = "neutral" | "brown" | "yellow" | "green" | "red";
const BADGE_STYLES: Record<BadgeColor, { bg: string; text: string; shadow: string; inset: string }> = {
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
function Badge({ label, color = "neutral" }: { label: string; color?: BadgeColor }) {
  const s = BADGE_STYLES[color];
  return (
    <span className={`relative inline-flex items-center justify-center overflow-clip px-[5px] py-0.5 rounded-[6px] shrink-0 ${s.shadow}`}>
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.bg}`} />
      <span className={`absolute inset-0 rounded-[6px] pointer-events-none ${s.inset}`} />
      <span className={`relative text-[11px] font-medium leading-[16px] whitespace-nowrap ${s.text}`}>{label}</span>
    </span>
  );
}

// ─── Bullet feature item ───────────────────────────────────────────────────────
function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex items-center p-[2px] shrink-0">
        <div className="relative size-2 shrink-0 rounded-full shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_rgba(182,172,164,0.4)]">
          <div className="absolute inset-0 rounded-full bg-[#ede1d7]" />
          <div className="absolute inset-0 rounded-full shadow-[inset_0px_1px_0px_0px_rgba(247,242,237,0.61),inset_0px_-1px_0px_0px_rgba(106,98,93,0.05)]" />
        </div>
      </div>
      <p
        className="text-[14px] text-[#3b3632] leading-[22px] whitespace-nowrap"
        style={{ fontFamily: "var(--font-besley)" }}
      >
        {children}
      </p>
    </div>
  );
}

// ─── Feature group (label + bullet list + optional divider below) ─────────────
function FeatureGroup({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <p
        className="text-[13px] text-[#827a74] leading-[16px]"
        style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
      >
        {label}
      </p>
      {items.map((item) => (
        <BulletItem key={item}>{item}</BulletItem>
      ))}
    </div>
  );
}

// ─── Horizontal divider ────────────────────────────────────────────────────────
function Divider() {
  return <div className="w-full h-px bg-[#e5e5e5]" />;
}

// ─── Credit picker card (Individual – light bg) ────────────────────────────────
function IndividualCreditPicker({
  tierIdx,
  onChange,
}: {
  tierIdx: number;
  onChange: (i: number) => void;
}) {
  const tiers = [
    { label: "$12", credits: "5,000" },
    { label: "$25", credits: "10,000" },
    { label: "$100", credits: "50,000" },
  ];
  const t = tiers[tierIdx];
  const pct = (tierIdx / (tiers.length - 1)) * 100;

  return (
    <div className="flex flex-col gap-6 bg-[#ede1d7] rounded-[16px] p-4 w-full">
      {/* Label + price */}
      <div className="flex flex-col gap-1">
        <p
          className="text-[13px] text-[#6a625d] leading-[16px]"
          style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
        >
          Pick your monthly credits
        </p>
        <div className="flex items-baseline gap-1">
          <span
            className="text-[40px] font-normal leading-[48px] text-black"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {t.label}
          </span>
          <span
            className="text-[14px] text-[#827a74] leading-[22px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            /mo
          </span>
        </div>
      </div>

      {/* Credits display + slider */}
      <div className="flex flex-col gap-6 w-full">
        {/* Credits card */}
        <div className="relative flex flex-col items-start px-3 py-3 rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15)]">
          <div className="absolute inset-0 bg-[#f7f2ed] rounded-[12px]" />
          <div className="absolute inset-0 rounded-[12px] shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
          <div className="relative flex items-end gap-1">
            <span
              className="text-[24px] font-normal leading-[32px] text-black"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              {t.credits}
            </span>
            <span className="text-[11px] text-[#6a625d] leading-[19px]">credits / month</span>
          </div>
        </div>

        {/* Slider + tick labels */}
        <div className="flex flex-col gap-2 w-full">
          <input
            type="range"
            min={0}
            max={tiers.length - 1}
            step={1}
            value={tierIdx}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1 rounded-full cursor-pointer appearance-none"
            style={{
              background: `linear-gradient(to right, #3b3632 0%, #3b3632 ${pct}%, white ${pct}%, white 100%)`,
              outline: "none",
            }}
          />
          <div
            className="flex items-center justify-between text-[14px] leading-[22px] text-[#3b3632]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {tiers.map((t) => (
              <span key={t.label}>{t.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Credit picker card (Team – dark bg) ──────────────────────────────────────
function TeamCreditPicker({
  tierIdx,
  onChange,
}: {
  tierIdx: number;
  onChange: (i: number) => void;
}) {
  const tiers = [
    { label: "$125", credits: "60,000" },
    { label: "$250", credits: "125,000" },
    { label: "$500", credits: "250,000" },
    { label: "$1k", credits: "500,000" },
    { label: "$1.5k", credits: "750,000" },
    { label: "$2k", credits: "1,000,000" },
  ];
  const t = tiers[tierIdx];
  const pct = (tierIdx / (tiers.length - 1)) * 100;

  return (
    <div className="flex flex-col gap-6 bg-[#120c08] rounded-[16px] p-4 w-full">
      {/* Label + price */}
      <div className="flex flex-col gap-1">
        <p
          className="text-[13px] text-white leading-[16px]"
          style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
        >
          {"Pick your team's volume"}
        </p>
        <div className="flex items-baseline gap-1">
          <span
            className="text-[40px] font-normal leading-[48px] text-white"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {t.label}
          </span>
          <span
            className="text-[14px] text-[#ede1d7] leading-[22px]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            /mo
          </span>
        </div>
      </div>

      {/* Credits display + slider */}
      <div className="flex flex-col gap-6 w-full">
        {/* Credits card */}
        <div className="relative flex flex-col items-start px-3 py-3 rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15)]">
          <div className="absolute inset-0 bg-[#f7f2ed] rounded-[12px]" />
          <div className="absolute inset-0 rounded-[12px] shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
          <div className="relative flex items-end gap-1">
            <span
              className="text-[24px] font-normal leading-[32px] text-black"
              style={{ fontFamily: "var(--font-besley)" }}
            >
              {t.credits}
            </span>
            <span className="text-[11px] text-[#6a625d] leading-[19px]">credits / month</span>
          </div>
        </div>

        {/* Slider + tick labels */}
        <div className="flex flex-col gap-2 w-full">
          <input
            type="range"
            min={0}
            max={tiers.length - 1}
            step={1}
            value={tierIdx}
            onChange={(e) => onChange(Number(e.target.value))}
            className="w-full h-1 rounded-full cursor-pointer appearance-none"
            style={{
              background: `linear-gradient(to right, #524b47 0%, #524b47 ${pct}%, rgba(255,255,255,0.2) ${pct}%, rgba(255,255,255,0.2) 100%)`,
              outline: "none",
            }}
          />
          <div
            className="flex items-center justify-between text-[14px] leading-[22px] text-[#f7f2ed]"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            {tiers.map((t) => (
              <span key={t.label}>{t.label}</span>
            ))}
          </div>
        </div>
      </div>
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
            <div className="relative size-10 shrink-0">
              <Image src={imgLogoUnion} alt="Souvenir" fill className="object-contain" unoptimized />
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
            <button className="text-[14px] text-[#524b47] font-medium leading-[22px]">Pricing</button>
            <button className="text-[14px] text-[#524b47] leading-[22px]">About</button>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <ButtonGhost>Sign in</ButtonGhost>
            <ButtonDark>Get started for free</ButtonDark>
          </div>
        </div>
      </div>
    </nav>
  );
}

// ─── Pricing section ──────────────────────────────────────────────────────────
function PricingSection() {
  const [yearly, setYearly] = useState(false);
  const [indivTier, setIndivTier] = useState(0);
  const [teamTier, setTeamTier] = useState(0);

  return (
    <section className="w-full bg-white border-t border-l border-r border-[rgba(0,0,0,0.08)] border-b-[2.213px] border-b-[rgba(0,0,0,0.08)] rounded-[26.56px] px-9 py-[100px] flex flex-col gap-16 items-center">

      {/* ── Hero ── */}
      <div className="flex flex-col gap-4 items-center">
        <Badge label="Multi-agent workforce" color="brown" />
        <h1
          className="text-[48px] font-normal text-center leading-[56px]"
          style={{ fontFamily: "var(--font-besley)" }}
        >
          <span className="text-black">Pay for what you use. </span>
          <span className="text-[#6a625d]">Nothing else.</span>
        </h1>
        <p className="text-[16px] text-black text-center leading-[22px] max-w-[977px]">
          Credits-only pricing. No per-seat fees. Every feature, every integration, every model — on every plan.
        </p>
      </div>

      {/* ── Billing toggle ── */}
      <div className="relative flex items-center pr-4 rounded-[10px]">
        {/* Tab track background */}
        <div className="absolute inset-0 rounded-[10px] bg-[rgba(247,242,237,0.5)] shadow-[inset_0px_-1px_0px_0px_rgba(255,255,255,0.9),inset_0px_1px_0px_0px_#ede1d7,inset_0px_0px_4px_0px_rgba(209,198,189,0.5)]" />
        <div className="relative flex gap-1 items-center p-1">
          {/* Monthly tab */}
          {!yearly ? (
            <ButtonDark onClick={() => setYearly(false)}>Monthly</ButtonDark>
          ) : (
            <button
              onClick={() => setYearly(false)}
              className="flex items-center justify-center px-2.5 py-[7px] rounded-[10px] text-[#827a74] text-[14px] font-medium leading-[22px] whitespace-nowrap"
            >
              Monthly
            </button>
          )}

          {/* Yearly tab */}
          {yearly ? (
            <ButtonDark onClick={() => setYearly(true)}>Yearly</ButtonDark>
          ) : (
            <button
              onClick={() => setYearly(true)}
              className="flex items-center justify-center px-2.5 py-[7px] rounded-[10px] text-[#827a74] text-[14px] font-medium leading-[22px] whitespace-nowrap"
            >
              Yearly
            </button>
          )}

          {/* Save 25% badge */}
          <Badge label="Save 25%" color="yellow" />
        </div>
      </div>

      {/* ── Plans ── */}
      <div className="flex gap-8 items-start w-full">

        {/* ── Individual ── */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-white border border-[#e5e5e5] rounded-[18px] p-3 flex flex-col gap-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">

            {/* Title + subtitle */}
            <div className="flex flex-col gap-1">
              <h2
                className="text-[24px] font-normal leading-[32px] text-black"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Individual
              </h2>
              <p
                className="text-[14px] text-[#827a74] leading-[22px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                For prosumers, creators, and solo operators.
              </p>
            </div>

            {/* Welcome gift card */}
            <div className="relative flex items-center gap-3 px-3 py-3 rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15)]">
              <div className="absolute inset-0 bg-[#f7f2ed] rounded-[12px]" />
              <div className="absolute inset-0 rounded-[12px] shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
              {/* Token icon */}
              <div className="relative bg-[#3b3632] rounded-[12px] size-14 shrink-0 overflow-clip z-10">
                <div className="absolute inset-[7%]">
                  <Image src={imgTokenIcon} alt="" fill className="object-contain" unoptimized />
                </div>
              </div>
              {/* Text */}
              <div className="relative z-10 flex flex-col gap-0.5">
                <p
                  className="text-[13px] text-[#6a625d] leading-[16px]"
                  style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
                >
                  Welcome gift
                </p>
                <p className="text-[16px] font-semibold text-black leading-[22px]">1,000 free credits</p>
                <p className="text-[11px] text-[#6a625d] leading-[19px] max-w-[251px]">
                  No credit card required. Try every feature with real workloads before you pay.
                </p>
              </div>
            </div>

            {/* Credit picker */}
            <IndividualCreditPicker tierIdx={indivTier} onChange={setIndivTier} />

            {/* Features */}
            <div className="flex flex-col gap-6 mt-2">
              <FeatureGroup
                label="Memory & Organization"
                items={[
                  "Cross-model memory that compounds",
                  "Unlimited Pins",
                  "Project folders",
                  "Highlights from any answer",
                ]}
              />
              <Divider />
              <FeatureGroup
                label="Your AI workforce"
                items={[
                  "Unlimited AI Assistants",
                  "Unlimited Brain & Automation",
                  "Scheduled tasks & triggers",
                ]}
              />
              <Divider />
              <FeatureGroup
                label="Models & tools"
                items={[
                  "Every major AI model",
                  "Auto-route or pick manually",
                  "Model Compare side-by-side",
                  "Unlimited web search",
                  "250+ connectors",
                ]}
              />

              {/* CTA */}
              <ButtonGhost className="w-full justify-center py-2">Start free</ButtonGhost>
            </div>
          </div>
        </div>

        {/* ── Team ── */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-white border border-black rounded-[18px] p-3 flex flex-col gap-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">

            {/* Title row + Most popular badge */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h2
                  className="text-[24px] font-normal leading-[32px] text-black"
                  style={{ fontFamily: "var(--font-besley)" }}
                >
                  Team
                </h2>
                <Badge label="Most popular" color="yellow" />
              </div>
              <p
                className="text-[14px] text-[#827a74] leading-[22px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Shared credits across unlimited members. No per-seat fees.
              </p>
            </div>

            {/* Slack Manager card */}
            <div className="relative flex items-center gap-3 px-3 py-3 rounded-[12px] shadow-[0px_1.091px_1.091px_0px_rgba(59,54,50,0.05),0px_1.455px_3.127px_0px_rgba(38,33,30,0.15)]">
              <div className="absolute inset-0 bg-[#f7f2ed] rounded-[12px]" />
              <div className="absolute inset-0 rounded-[12px] shadow-[inset_0px_-2.182px_0.364px_0px_#ede1d7]" />
              {/* Slack logo */}
              <div className="relative size-[60px] shrink-0 z-10">
                <Image src={imgSlackLogo} alt="Slack" fill className="object-contain" unoptimized />
              </div>
              {/* Text */}
              <div className="relative z-10 flex flex-col gap-0.5">
                <p
                  className="text-[13px] text-[#6a625d] leading-[16px]"
                  style={{ fontFamily: "var(--font-geist-mono, monospace)" }}
                >
                  Team-exclusive
                </p>
                <p className="text-[16px] font-semibold text-black leading-[22px]">Souvenir Slack Manager</p>
                <p className="text-[11px] text-[#6a625d] leading-[19px] max-w-[251px]">
                  One bot in Slack & Microsoft Teams. The entire AI workforce, accessible by @-mention.
                </p>
              </div>
            </div>

            {/* Credit picker (dark) */}
            <TeamCreditPicker tierIdx={teamTier} onChange={setTeamTier} />

            {/* Features */}
            <div className="flex flex-col gap-6 mt-2">
              <FeatureGroup
                label="Everything in Individual, plus"
                items={["Slack & Teams manager bot"]}
              />
              <Divider />
              <FeatureGroup
                label="Team collaboration"
                items={[
                  "Unlimited members · no per-seat",
                  "Shared AI Assistants",
                  "Shared Pins & Highlights",
                  "Shared Project folders",
                ]}
              />
              <Divider />
              <FeatureGroup
                label="Governance & control"
                items={[
                  "Admin controls + per-member caps",
                  "Approval gates",
                  "Full audit trail",
                ]}
              />
              <Divider />
              <FeatureGroup
                label="Support"
                items={["Priority email support", "Online meeting support"]}
              />

              {/* CTA */}
              <ButtonDark className="w-full justify-center py-2">Start a Team Workspace</ButtonDark>
            </div>
          </div>
        </div>

        {/* ── Custom ── */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="bg-white border border-[#e5e5e5] rounded-[18px] p-3 flex flex-col gap-2 drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)]">

            {/* Title + subtitle */}
            <div className="flex flex-col gap-1">
              <h2
                className="text-[24px] font-normal leading-[32px] text-black"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                Custom
              </h2>
              <p
                className="text-[14px] text-[#827a74] leading-[22px]"
                style={{ fontFamily: "var(--font-besley)" }}
              >
                For organizations running Souvenir at scale.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-6 mt-2">
              <FeatureGroup
                label="Everything in Team, plus"
                items={["Custom credit volume", "Volume discounts"]}
              />
              <Divider />
              <FeatureGroup
                label="Enterprise security"
                items={["SSO", "Shared AI Assistants", "DPA & SLA", "Private deployment options"]}
              />
              <Divider />
              <FeatureGroup
                label="White-glove service"
                items={[
                  "Onboarding & training",
                  "Dedicated success manager",
                  "Monthly strategy review",
                  "Learning workspace",
                ]}
              />

              {/* CTA */}
              <ButtonGhost className="w-full justify-center py-2">Contact us</ButtonGhost>
            </div>
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
      <div className="absolute inset-0">
        <Image src={imgFooterBg} alt="" fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a2e1e] via-[#2d1a10] to-[#1a0e08] opacity-95" />
      </div>

      <div className="relative z-10 px-[41px] py-8 flex flex-col gap-8 max-w-[1328px]">
        {/* Top row */}
        <div className="flex gap-[120px] items-start">
          {/* Brand + newsletter */}
          <div className="flex flex-col gap-4 w-[399px]">
            <div className="flex items-center gap-3">
              <div className="relative size-10 shrink-0">
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

            <div className="flex flex-col gap-1 w-[327px]">
              <label className="text-[14px] text-white leading-[22px]">Newsletter</label>
              <div className="bg-white flex items-center gap-0.5 overflow-clip px-2.5 py-[7px] rounded-[10px] shadow-[0px_1px_1.5px_0px_rgba(82,75,71,0.12),0px_0px_0px_1px_#ede1d7]">
                <span className="flex-1 text-[14px] text-[#6a625d] leading-[22px] px-0.5 min-w-0">
                  your@company.com
                </span>
                <button className="bg-gradient-to-b from-[#524b47] to-[#26211e] flex items-center gap-0.5 overflow-clip pb-2 pt-1.5 px-2.5 rounded-[10px] text-[#f7f2ed] text-[14px] font-medium leading-[22px] whitespace-nowrap shrink-0">
                  <span className="relative size-4 shrink-0">
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

        <div className="h-px bg-white/20 w-full" />

        <div className="flex items-center gap-8">
          <p
            className="text-[14px] text-[#f7f2ed] leading-[22px] whitespace-nowrap"
            style={{ fontFamily: "var(--font-besley)" }}
          >
            © 2026 Souvenir Inc. Made with context.
          </p>
          <div className="size-1.5 rounded-full bg-[#f7f2ed]/60 shrink-0" />
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
export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f7f2ed]">
      <Navbar />

      <div className="max-w-[1328px] mx-auto pb-0 flex flex-col gap-[100px]">
        <PricingSection />
      </div>

      <div className="max-w-[1328px] mx-auto mt-[100px] pb-8">
        <Footer />
      </div>
    </div>
  );
}

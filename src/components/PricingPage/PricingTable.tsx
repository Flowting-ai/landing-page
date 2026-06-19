"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/kaya/Button";
import { Badge } from "@/components/Badge";
import { Slider } from "@/components/Slider";
import { SIGNUP_URL, DEMO_URL } from "@/lib/links";

type Tier = { price: number; credits: string };

type Group = { title: string; items: string[] };
type Plan = {
  name: string;
  tagline: string;
  popular?: boolean;
  monthly?: number;
  creditLabel?: string;
  marks?: string[];
  /** credit tiers the per-card KDS Slider steps through (price → credits/mo) */
  tiers?: Tier[];
  highlight?: { title: string; desc: string };
  intro?: string;
  groups: Group[];
  cta: string;
  ctaHref: string;
  ctaVariant: "default" | "secondary";
  dark?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Individual",
    tagline: "For prosumers, creators, and solo operators.",
    monthly: 12,
    creditLabel: "5,000 credits / month",
    marks: ["$12", "$25", "$100"],
    tiers: [
      { price: 12, credits: "5,000" },
      { price: 25, credits: "12,000" },
      { price: 100, credits: "60,000" },
    ],
    highlight: { title: "1,000 free credits", desc: "No credit card required. Try every feature with real workloads before you pay." },
    groups: [
      { title: "Memory & Organization", items: ["Cross-model memory that compounds", "Unlimited Pins", "Project folders", "Highlights from any answer"] },
      { title: "Your AI workforce", items: ["Unlimited AI Assistants", "Unlimited Brain & Automation", "Scheduled tasks & triggers"] },
      { title: "Models & tools", items: ["Every major AI model", "Auto-route or pick manually", "Model Compare side-by-side", "Unlimited web search", "250+ connectors"] },
    ],
    cta: "Start free",
    ctaHref: SIGNUP_URL,
    ctaVariant: "secondary",
  },
  {
    name: "Team",
    tagline: "Shared credits across unlimited members. No per-seat fees.",
    popular: true,
    monthly: 125,
    creditLabel: "60,000 credits / month",
    marks: ["$125", "$250", "$500", "$1k", "$2k"],
    tiers: [
      { price: 125, credits: "60,000" },
      { price: 250, credits: "130,000" },
      { price: 500, credits: "280,000" },
      { price: 1000, credits: "600,000" },
      { price: 2000, credits: "1,300,000" },
    ],
    highlight: { title: "Souvenir Slack Manager", desc: "One bot in Slack & Microsoft Teams. The entire AI workforce, accessible by @-mention." },
    intro: "Everything in Individual, plus",
    groups: [
      { title: "", items: ["Slack & Teams manager bot"] },
      { title: "Team collaboration", items: ["Unlimited members · no per-seat", "Shared AI Assistants", "Shared Pins & Highlights", "Shared Project folders"] },
      { title: "Governance & control", items: ["Admin controls + per-member caps", "Approval gates", "Full audit trail"] },
      { title: "Support", items: ["Priority email support", "Online meeting support"] },
    ],
    cta: "Start a Team Workspace",
    ctaHref: SIGNUP_URL,
    ctaVariant: "default",
    dark: true,
  },
  {
    name: "Custom",
    tagline: "For organizations running Souvenir at scale.",
    intro: "Everything in Team, plus",
    groups: [
      { title: "", items: ["Custom credit volume", "Volume discounts"] },
      { title: "Enterprise security", items: ["SSO", "Shared AI Assistants", "DPA & SLA", "Private deployment options"] },
      { title: "White-glove service", items: ["Onboarding & training", "Dedicated success manager", "Monthly strategy review", "Learning workspace"] },
      { title: "Support", items: ["Priority email support", "Online meeting support"] },
    ],
    cta: "Talk to sales",
    ctaHref: DEMO_URL,
    ctaVariant: "secondary",
  },
];

function Dot() {
  return <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-subtle" />;
}

function PlanCard({ plan, yearly }: { plan: Plan; yearly: boolean }) {
  const tiers = plan.tiers;
  const [tierIdx, setTierIdx] = useState(0);
  const tier = tiers?.[tierIdx];
  // price comes from the selected slider tier when tiers exist, else the flat monthly
  const basePrice = tier ? tier.price : plan.monthly ?? null;
  const price = basePrice !== null ? (yearly ? Math.round(basePrice * 0.75) : basePrice) : null;
  const creditLabel = tier ? `${tier.credits} credits / month` : plan.creditLabel;
  return (
    <div className={"relative flex h-full flex-col rounded-[var(--r-2xl)] border p-6 sm:p-7 " + (plan.popular ? "border-line-strong bg-surface" : "border-line bg-surface")} style={{ boxShadow: plan.popular ? "var(--shadow-lg)" : "var(--shadow-sm)" }}>
      <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[var(--r-2xl)]" style={{ boxShadow: "var(--shadow-inner)" }} />
      <div className="flex items-center justify-between">
        <h3 className="font-display text-[length:var(--text-h3)] text-ink">{plan.name}</h3>
        {plan.popular && <Badge label="Most popular" color="Neutral" />}
      </div>
      <p className="mt-1.5 min-h-[2.5em] font-sans text-[var(--text-small)] text-ink-muted">{plan.tagline}</p>

      {plan.highlight && (
        <div className="mt-4 flex items-start gap-3 rounded-[var(--r-md)] border border-line bg-bg-subtle p-3.5" style={{ boxShadow: "var(--shadow-inner)" }}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-ink font-display text-[14px] text-dark-ink">◈</span>
          <div>
            <span className="font-sans text-[var(--text-small)] font-semibold text-ink">{plan.highlight.title}</span>
            <p className="mt-0.5 font-sans text-[var(--text-micro)] text-ink-muted">{plan.highlight.desc}</p>
          </div>
        </div>
      )}

      {price !== null ? (
        <div className={"mt-4 rounded-[var(--r-lg)] p-4 " + (plan.dark ? "bg-dark-bg" : "bg-bg-subtle")} style={{ boxShadow: "var(--shadow-inner)" }}>
          <span className={"font-sans text-[var(--text-micro)] " + (plan.dark ? "text-dark-ink-muted" : "text-ink-subtle")}>Pick your {plan.name === "Team" ? "team's volume" : "monthly credits"}</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={"font-display text-[2.25rem] leading-none " + (plan.dark ? "text-dark-ink" : "text-ink")}>${price}</span>
            <span className={"font-sans text-[var(--text-small)] " + (plan.dark ? "text-dark-ink-muted" : "text-ink-muted")}>/mo{yearly ? " · billed yearly" : ""}</span>
          </div>
          <div className={"mt-3 rounded-[var(--r-sm)] px-3 py-2 " + (plan.dark ? "bg-[var(--dark-surface)]" : "bg-surface")}>
            <span className={"font-mono text-[var(--text-micro)] tabular-nums " + (plan.dark ? "text-dark-ink" : "text-ink")}>{creditLabel}</span>
          </div>
          {tiers && tiers.length > 1 ? (
            <div className="mt-3">
              <Slider
                aria-label={`Pick your ${plan.name === "Team" ? "team's volume" : "monthly credits"}`}
                value={[tierIdx]}
                min={0}
                max={tiers.length - 1}
                step={1}
                onValueChange={(v) => setTierIdx(v[0] ?? 0)}
                fillColor={plan.dark ? "var(--neutral-100)" : "var(--accent)"}
              />
              <div className="mt-2 flex justify-between">
                {plan.marks?.map((m) => <span key={m} className={"font-mono text-[var(--text-micro)] " + (plan.dark ? "text-dark-ink-muted" : "text-ink-subtle")}>{m}</span>)}
              </div>
            </div>
          ) : (
            <div className="mt-2 flex justify-between">
              {plan.marks?.map((m) => <span key={m} className={"font-mono text-[var(--text-micro)] " + (plan.dark ? "text-dark-ink-muted" : "text-ink-subtle")}>{m}</span>)}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-4 rounded-[var(--r-lg)] bg-bg-subtle p-4" style={{ boxShadow: "var(--shadow-inner)" }}>
          <span className="font-display text-[2.25rem] leading-none text-ink">Custom</span>
          <p className="mt-1 font-sans text-[var(--text-small)] text-ink-muted">Usage-based, billed your way.</p>
        </div>
      )}

      <div className="mt-6 flex flex-1 flex-col gap-5">
        {plan.intro && <span className="font-sans text-[var(--text-micro)] font-medium text-ink-secondary">{plan.intro}</span>}
        {plan.groups.map((g, gi) => (
          <div key={g.title || gi}>
            {g.title && <span className="font-mono text-[var(--text-micro)] uppercase tracking-[0.1em] text-ink-subtle">{g.title}</span>}
            <ul className={"flex flex-col gap-2 " + (g.title ? "mt-2.5" : "")}>
              {g.items.map((it) => (
                <li key={it} className="flex items-start gap-2.5 font-sans text-[var(--text-small)] text-ink-secondary"><Dot />{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-7" style={{ ["--font-size-body" as string]: "15px", ["--line-height-body" as string]: "22px" }}>
        <a href={plan.ctaHref} target={/^https?:/.test(plan.ctaHref) ? "_blank" : undefined} rel={/^https?:/.test(plan.ctaHref) ? "noreferrer" : undefined} className="block">
          <Button variant={plan.ctaVariant} size="md" fluid className="justify-center px-6 py-3">{plan.cta}</Button>
        </a>
      </div>
    </div>
  );
}

export default function PricingTable() {
  const [yearly, setYearly] = useState(false);
  return (
    <section className="pb-[var(--section-y)]">
      <Container wide>
        <Reveal>
          <div className="mb-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-[var(--r-pill)] border border-line bg-surface p-1" style={{ boxShadow: "var(--shadow-sm)" }}>
              <button onClick={() => setYearly(false)} className={"rounded-[var(--r-pill)] px-4 py-1.5 font-sans text-[var(--text-small)] font-medium transition-colors " + (!yearly ? "bg-ink text-dark-ink" : "text-ink-muted")}>Monthly</button>
              <button onClick={() => setYearly(true)} className={"inline-flex items-center gap-2 rounded-[var(--r-pill)] px-4 py-1.5 font-sans text-[var(--text-small)] font-medium transition-colors " + (yearly ? "bg-ink text-dark-ink" : "text-ink-muted")}>Yearly <Badge label="Save 25%" color="Neutral" /></button>
            </div>
          </div>
        </Reveal>
        <div className="grid items-stretch gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}><div className="h-full"><PlanCard plan={p} yearly={yearly} /></div></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

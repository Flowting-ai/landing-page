"use client";

import React, { useMemo, useState } from "react";
import { Check } from "lucide-react";

import { Switch } from "@/components/ui/switch";
import { CARD_CONFIG, type CardConfig } from "@/components/PricingPage/PricingPlans/PricingPlansSection";
import Link from "next/link";

type BillingPlan = "monthly" | "annual";

function Tick({ label }: { label?: string }) {
  return (
    <span className="inline-flex items-center justify-center gap-2">
      <Check className="h-4 w-4 text-white bg-[#F26725] rounded-full p-0.5" strokeWidth={3} />
      {label ? <span className="text-sm text-black">{label}</span> : null}
    </span>
  );
}

function TableTitleRow({ title }: { title: string }) {
  return (
    <tr>
      <td
        colSpan={4}
        className="py-4 pr-6 text-left text-lg font-semibold text-black"
      >
        {title}
      </td>
    </tr>
  );
}

function DataRow({
  label,
  starter,
  pro,
  power,
}: {
  label: string;
  starter: React.ReactNode;
  pro: React.ReactNode;
  power: React.ReactNode;
}) {
  return (
    <tr className="border-b border-[#E5E5E5] ">
      <td className="py-4 pr-6 text-left text-sm font-medium text-black align-middle">
        {label}
      </td>
      <td className="py-4 px-3 text-left text-sm text-black align-middle">
        {starter}
      </td>
      <td className="py-4 px-3 text-left text-sm text-black align-middle">
        {pro}
      </td>
      <td className="py-4 px-3 text-left text-sm text-black align-middle">
        {power}
      </td>
    </tr>
  );
}

export default function CompareAllFeaturesSection() {
  const [billing, setBilling] = useState<BillingPlan>("monthly");

  const cardsById = useMemo(() => {
    const map: Record<CardConfig["id"], CardConfig> = {
      starter: CARD_CONFIG.find((c) => c.id === "starter")!,
      pro: CARD_CONFIG.find((c) => c.id === "pro")!,
      power: CARD_CONFIG.find((c) => c.id === "power")!,
    };
    return map;
  }, []);

  const starterPrice =
    billing === "annual"
      ? cardsById.starter.annualPrice
      : cardsById.starter.monthlyPrice;
  const proPrice =
    billing === "annual" ? cardsById.pro.annualPrice : cardsById.pro.monthlyPrice;
  const powerPrice =
    billing === "annual"
      ? cardsById.power.annualPrice
      : cardsById.power.monthlyPrice;

  const billedLabel = billing === "annual" ? "Billed annually" : "Billed monthly";

  return (
    <section className="w-full bg-[#FAF9F8] px-4 my-10 lg:my-20">
      {/* Title */}
      <section className="w-full text-center space-y-3">
          <h1 className="font-besley text-3xl md:text-4xl text-black">
            Compare all features
          </h1>
          <p className="font-geist text-sm md:text-base text-[#525252]">
            Everything side by side so you can pick the right plan
          </p>
        </section>
      {/* Table */}
      <div className="max-w-6xl mx-auto py-12 lg:py-16">
        <div className="bg-white rounded-[16px] font-geist shadow-lg shadow-zinc-200 overflow-hidden">
          <div className="w-full overflow-x-auto px-6">
            <table className="w-full min-w-[980px] table-fixed text-left mb-6">
              <colgroup>
                <col className="w-[30%]" />
                <col className="w-[23.333%]" />
                <col className="w-[23.333%]" />
                <col className="w-[23.333%]" />
              </colgroup>

              <tbody>
                <tr>
                  <td className="py-5 pr-6 align-middle">
                    <div className="inline-flex items-center gap-3 rounded-full border border-main-border p-2">
                      <span className="rounded-full px-1 py-0.5 text-sm font-semibold text-black">
                        Annual 25% OFF
                      </span>
                      <Switch
                        checked={billing === "annual"}
                        onCheckedChange={(v) => setBilling(v ? "annual" : "monthly")}
                        className="bg-[#D47E514D]!"
                      />
                    </div>
                  </td>

                  <td className="py-5 px-3 align-middle">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-0">
                        <span className="font-semibold text-lg text-black">
                          Starter
                        </span>
                        <div className="flex items-baseline justify-start gap-1">
                          <span className="font-besley text-3xl font-semibold text-black">
                            ${starterPrice}
                          </span>
                          <span className="text-sm font-semibold text-black/80">
                            /mo
                          </span>
                        </div>
                        <span className="text-xs text-[#525252]">{billedLabel}</span>
                      </div>
                      <Link
                      href="/contact"
                        type="button"
                        className="flex items-center justify-center w-full cursor-pointer bg-black text-[#F2F2F0] rounded-[8px] py-2 text-sm font-medium hover:bg-[#0A0A0A] transition-colors"
                      >
                        Select plan
                      </Link>
                    </div>
                  </td>

                  <td className="py-5 px-3 align-middle">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-0">
                        <span className="font-semibold text-lg text-black">Pro</span>
                        <div className="flex items-baseline justify-start gap-1">
                          <span className="font-besley text-3xl font-semibold text-black">
                            ${proPrice}
                          </span>
                          <span className="text-sm font-semibold text-black/80">
                            /mo
                          </span>
                        </div>
                        <span className="text-xs text-[#525252]">{billedLabel}</span>
                      </div>
                      <Link
                      href="/contact"
                        type="button"
                        className="flex items-center justify-center w-full cursor-pointer bg-black text-[#F2F2F0] rounded-[8px] py-2 text-sm font-medium hover:bg-[#0A0A0A] transition-colors"
                      >
                        Select plan
                      </Link>
                    </div>
                  </td>

                  <td className="py-5 px-3 align-middle">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-0">
                        <span className="font-semibold text-lg text-black">
                          Power
                        </span>
                        <div className="flex items-baseline justify-start gap-1">
                          <span className="font-besley text-3xl font-semibold text-black">
                            ${powerPrice}
                          </span>
                          <span className="text-sm font-semibold text-black/80">
                            /mo
                          </span>
                        </div>
                        <span className="text-xs text-[#525252]">{billedLabel}</span>
                      </div>
                      <Link
                      href="/contact"
                        type="button"
                        className="flex items-center justify-center w-full cursor-pointer bg-black text-[#F2F2F0] rounded-[8px] py-2 text-sm font-medium hover:bg-[#0A0A0A] transition-colors"
                      >
                        Select plan
                      </Link>
                    </div>
                  </td>
                </tr>

                <TableTitleRow title="AI Capabilities" />
                <DataRow
                  label="AI Models"
                  starter="Basic"
                  pro="Basic + Advanced"
                  power="Basic + Advanced + Power"
                />
                <DataRow
                  label="Smart Routing"
                  starter="Basic Algorithm"
                  pro="Advanced"
                  power="All + Manual Switch"
                />
                <DataRow
                  label="Model Compare"
                  starter="-"
                  pro={<Tick />}
                  power={<Tick />}
                />

                <TableTitleRow title="Workspace" />
                <DataRow
                  label="Personas"
                  starter="3"
                  pro="Unlimited + 2 shared"
                  power="Unlimited + unlimited sharing"
                />
                <DataRow label="Pins" starter="100" pro="2000" power="Unlimited" />
                <DataRow
                  label="Workflows"
                  starter="-"
                  pro="2"
                  power="Unlimited"
                />
                <DataRow
                  label="Web Search"
                  starter="10 / day"
                  pro="Unlimited"
                  power="Unlimited"
                />

                <TableTitleRow title="Analytics" />
                <DataRow
                  label="Persona Analytics"
                  starter="-"
                  pro={<Tick />}
                  power={<Tick label="Advanced" />}
                />
                <DataRow
                  label="Workflow Analytics"
                  starter="-"
                  pro={<Tick />}
                  power={<Tick label="Advanced" />}
                />

                <TableTitleRow title="Access & Support" />
                <DataRow
                  label="Priority Compute"
                  starter="-"
                  pro="-"
                  power={<Tick />}
                />
                <DataRow
                  label="Customer Support"
                  starter="Community"
                  pro="Email & Chat"
                  power="Priority • < 1 hr"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}


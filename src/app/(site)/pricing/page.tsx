import type { Metadata } from "next";
import PricingHero from "@/components/PricingPage/PricingHero";
import PricingTable from "@/components/PricingPage/PricingTable";
import { ReassuranceRow, TopUps, PricingFAQ } from "@/components/PricingPage/PricingExtras";
import FinalCTABand from "@/components/sections/FinalCTABand";

export const metadata: Metadata = {
  title: "Pricing — Souvenir",
  description: "Pay for what you use. Credits-only pricing, no per-seat fees — every feature, integration, and model on every plan. Start with 1,000 free credits, no card required.",
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingTable />
      <ReassuranceRow />
      <TopUps />
      <PricingFAQ />
      <FinalCTABand
        title="1,000 credits, on us. No card required."
        body="Test every Souvenir feature with real workloads. Pay only when you're ready."
        primary="Get started for free"
        secondary="Talk to sales"
      />
    </>
  );
}

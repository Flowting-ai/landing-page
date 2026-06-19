import type { Metadata } from "next";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import ProblemSection from "@/components/HomePage/Problem/ProblemSection";
import StatsSection from "@/components/HomePage/Stats/StatsSection";
import ContextSection from "@/components/HomePage/Context/ContextSection";
import PillarsSection from "@/components/HomePage/Pillars/PillarsSection";
import ComparisonSection from "@/components/HomePage/Comparison/ComparisonSection";
import FinalCTASection from "@/components/HomePage/FinalCTA/FinalCTASection";

// Legacy first-pass landing page, kept for reference — not part of the live IA.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <ContextSection />
      <PillarsSection />
      <ComparisonSection />
      <FinalCTASection />
    </>
  );
}

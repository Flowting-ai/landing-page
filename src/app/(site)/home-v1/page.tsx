import HeroSection from "@/components/HomePage/Hero/HeroSection";
import ProblemSection from "@/components/HomePage/Problem/ProblemSection";
import StatsSection from "@/components/HomePage/Stats/StatsSection";
import ContextSection from "@/components/HomePage/Context/ContextSection";
import PillarsSection from "@/components/HomePage/Pillars/PillarsSection";
import ComparisonSection from "@/components/HomePage/Comparison/ComparisonSection";
import FinalCTASection from "@/components/HomePage/FinalCTA/FinalCTASection";

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

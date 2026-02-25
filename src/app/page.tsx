import AutoManualSection from "@/components/HomePage/AutoManual/AutoManualSection";
import FeaturesSection from "@/components/HomePage/Features/FeaturesSection";
import FlowtingSelectSection from "@/components/HomePage/Flowting/FlowtingSelectSection";
import Footer from "@/components/Common/Footer/Footer";
import GoBuildSomething from "@/components/HomePage/GoBuildSomething/GoBuildSomething";
import HeroSection from "@/components/HomePage/Hero/HeroSection";
import PersonasSection from "@/components/HomePage/Personas/PersonasSection";
import ProblemsSection from "@/components/HomePage/Problems/ProblemsSection";
import QuoteFlowting from "@/components/HomePage/QuoteFlowting/QuoteFlowting";
import WorkflowsSection from "@/components/HomePage/Workflows/WorkflowsSection";
import YourContextSection from "@/components/HomePage/YourContext/YourContextSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <ProblemsSection/>
      <FlowtingSelectSection/>
      <AutoManualSection/>
      <YourContextSection/>
      <FeaturesSection/>
      <PersonasSection/>
      <WorkflowsSection/>
      <QuoteFlowting/>
      <GoBuildSomething/>
      <Footer/> 
    </>
  );
}

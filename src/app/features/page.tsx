import Footer from "@/components/Common/Footer/Footer";
import ChatModelsSection from "@/components/FeaturesPage/ChatModels/ChatModelsSection";
import HeroSection from "@/components/FeaturesPage/Hero/HeroSection";
import PersonasSection from "@/components/FeaturesPage/Personas/PersonasSection";
import WorkflowsSection from "@/components/FeaturesPage/Workflows/WorkflowsSection";
import GoBuildSomething from "@/components/HomePage/GoBuildSomething/GoBuildSomething";

export default function FeaturesPage() {
  return (
    <>
      <HeroSection />
      <ChatModelsSection />
      <WorkflowsSection />
      <PersonasSection />
      <GoBuildSomething/>
      <Footer/>
    </>
  );
}

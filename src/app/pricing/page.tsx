import Footer from "@/components/Common/Footer/Footer";
import GoBuildSomething from "@/components/HomePage/GoBuildSomething/GoBuildSomething";
import FAQSection from "@/components/PricingPage/FAQ/FAQSection";
import HeroSection from "@/components/PricingPage/Hero/HeroSection";
import PricingPlansSection from "@/components/PricingPage/PricingPlans/PricingPlansSection";

export default function PricingPage() {
  return (
    <>
      <HeroSection />
      <PricingPlansSection />
      <FAQSection />
      <GoBuildSomething />
      <Footer />
    </>
  );
}

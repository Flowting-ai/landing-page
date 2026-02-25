import AboutContent from "@/components/AboutPage/AboutContent/AboutContent";
import HeroSection from "@/components/AboutPage/Hero/HeroSection";
import JoinUs from "@/components/AboutPage/JoinUs/JoinUs";
import WhatWeBelieve from "@/components/AboutPage/WhatWeBelieve/WhatWeBelieve";
import Footer from "@/components/Common/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutContent />
      <WhatWeBelieve/>
      <JoinUs/>
      <Footer/>
    </>
  );
}

import Navbar from "@/components/Common/Navbar/Navbar";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen">
      {/* === NAVBAR === */}
      <div className="container mx-auto flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>

      {/* === ABOUT PAGE === */}
      <div className="container mx-auto h-full flex items-center justify-center flex-col gap-4 px-4 lg:px-16 py-4 lg:py-12 xl:py-16 mt-6 lg:mt-0">
        {/* Title + Small Descriptions */}
        <div className="text-center flex flex-col items-center gap-3">
          <h1 className="font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[52px] text-text">
            The AI Workspace
            <br />
            You Deserve
          </h1>
          <p className="max-w-xl font-normal text-balance text-sm lg:text-base xl:text-lg text-text">
            Great AI needs great context. We build tools that remember, so you
            don&apos;t have to repeat yourself.
          </p>
        </div>

        {/* Image */}
        <div className="w-full h-auto flex items-center justify-center">
        <Image
          src="./AboutPage/about-hero.png"
          alt="Guy Sitting On Chair"
          width={564}
          height={270}
          className="w-full max-w-[564px] h-auto object-contain"
        /></div>       
      </div>
    </div>
  );
}

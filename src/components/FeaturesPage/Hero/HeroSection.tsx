import Navbar from "@/components/Common/Navbar/Navbar";

export default function HeroSection() {
  return (
    <div className="w-full h-screen">
      {/* === NAVBAR === */}
      <div className="z-50 absolute left-1/2 -translate-x-1/2 container mx-auto flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>

      {/* === ABOUT PAGE HERO SECTION === */}
      <div className="z-0 relative container mx-auto min-h-screen flex flex-col items-center justify-center gap-4 px-4 lg:px-16 mt-6 lg:mt-0 overflow-hidden">
        
        {/* Gradient Layers */}
        <div className="z-1 absolute top-0 -left-40 w-[40%] h-full bg-linear-to-tr from-blue-200 via-amber-100 to-blue-300 rounded-full blur-[30px] opacity-50"></div>
        <div className="z-1 absolute top-0 -right-40 w-[45%] h-2/3 bg-linear-to-br from-amber-200 via-amber-100 via-35% to-blue-300 rounded-full blur-[30px] opacity-50"></div>
        {/* Title + Small Descriptions */}
        <div className="z-2 text-center flex flex-col items-center gap-3 pt-4">
          <h1 className="font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[56px] text-text">
            Your models can change. <br /> Your <span className="text-[#303030]">thinking</span> shouldn&apos;t.
          </h1>
          <p className="max-w-xl font-normal leading-[120%] text-balance text-sm lg:text-base xl:text-lg text-text">
          One workspace for every AI model. Switch freely, keep full context, and turn your best conversations into reusable workflows.
          </p>
        </div>
      </div>
    </div>
  );
}

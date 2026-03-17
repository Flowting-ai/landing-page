import Navbar from "@/components/Common/Navbar/Navbar";

export default function HeroSection() {
  return (
    <div className="w-full h-auto">
      <div className="z-50 container mx-auto flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>

      {/* <div className="z-0 relative container mx-auto min-h-[40vh] lg:min-h-[60vh] bg-main-bg flex flex-col items-center justify-center gap-4 px-4 lg:px-16 py-24 lg:py-30 overflow-hidden">
        <div className="z-1 absolute top-0 -left-40 w-[40%] h-2/3 bg-linear-to-tr from-blue-200 via-amber-100 to-blue-300 rounded-full blur-[30px] opacity-50"></div>
        <div className="z-1 absolute top-0 -right-40 w-[45%] h-2/3 bg-linear-to-br from-amber-200 via-amber-100 via-35% to-blue-300 rounded-full blur-[30px] opacity-50"></div>

        <div className="z-2 text-center flex flex-col items-center gap-6 pt-[8%]">
          <h1 className="font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[56px] text-text">
            Plans that grow with <span className="text-[#303030]">you</span>
          </h1>
          <p className="max-w-xl font-geist font-normal leading-[120%] text-balance text-xs sm:text-sm lg:text-base xl:text-lg text-text">
            One workspace. Every AI model. No commitment.
          </p>
        </div>
      </div> */}
    </div>
  );
}

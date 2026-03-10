import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function JoinUs() {
  return (
    <div className="w-full h-auto my-10 lg:my-20">
      {/* === ABOUT PAGE === */}
      <div className="overflow-hidden relative container mx-auto flex items-center justify-center flex-col gap-4 px-4 lg:px-16 py-4 lg:py-12 xl:py-16 mt-6 lg:mt-0">
        {/* Title + Small Descriptions */}
        <div className="z-3 text-center flex flex-col items-center justify-center gap-6 py-60 lg:py-50">
          <h1 className="font-medium md:font-normal leading-[120%] text-2xl lg:text-[36px] text-black">
            Join Us On
            <br />
            the journey
          </h1>
          <Link
            href="/contact"
            className="font-geist text-nav-bg bg-nav-button-bg border border-nav-button-bg rounded-xl shadow-sm px-4 py-2 text-center font-medium flex items-center gap-2 transition-all hover:opacity-90 active:scale-[0.98]"
          >
            Follow Our Journey <ArrowRight size={16} />
          </Link>
        </div>
        {/* Gradient Bg */}
        <div className="z-1 absolute w-[35%] h-150 bg-linear-to-b from-amber-200/30 to-blue-300/30 rounded-full blur-xl"></div>
        {/* Image */}
        <div className="z-2 absolute translate-y-0 w-full h-auto flex items-center justify-center">
          <Image
            src="./logos/souvenir-quote-logo.svg"
            alt="quoteBackground"
            width={564}
            height={270}
            className="mix-blend-color-burn opacity-8 w-full max-w-[564px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function WhatWeBelieve() {
  return (
    <div className="w-full min-h-screen">
      {/* === wHAT WE BELIEVE === */}
      <div className="container mx-auto h-full flex items-center justify-center flex-col gap-10 px-4 lg:px-16 py-4 lg:py-12 xl:py-16 mt-6 lg:mt-0">
        {/* Title + Small Descriptions */}
        <div className="text-center flex flex-col items-center gap-3">
          <h1 className="max-w-4xl font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[42px] text-text">
            What We Believe
          </h1>
          {/* <p className="max-w-xl font-normal text-balance text-sm lg:text-base xl:text-lg text-text">
            Great AI needs great context. We build tools that remember, so you
            don&apos;t have to repeat yourself.
          </p> */}
        </div>

        {/* Image */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="w-full h-full bg-white rounded-[16px] shadow-sm flex items-start justify-center overflow-hidden">
          <Image
            src="./AboutPage/what-we-believe1.png"
            alt="what-we-believe1"
            width={564}
            height={270}
            className="w-full max-w-[424px] h-auto object-contain bg-white"
          />
          </div>
          <div className="w-full h-full bg-white rounded-[16px] shadow-sm flex items-start justify-center overflow-hidden">
          <Image
            src="./AboutPage/what-we-believe2.png"
            alt="what-we-believe2"
            width={564}
            height={270}
            className="w-full max-w-[424px] h-auto object-contain bg-white"
          />
          </div>
          <div className="w-full h-full bg-white rounded-[16px] shadow-sm flex items-start justify-center overflow-hidden">
          <Image
            src="./AboutPage/what-we-believe3.png"
            alt="what-we-believe3"
            width={564}
            height={270}
            className="w-full max-w-[424px] h-auto object-contain bg-white"
          />
          </div>
          

          

          
        </div>
      </div>
    </div>
  );
}

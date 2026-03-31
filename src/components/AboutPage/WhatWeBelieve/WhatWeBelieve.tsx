import Image from "next/image";

export default function WhatWeBelieve() {
  const cards = [
    {
      imgSrc: "./AboutPage/about1.svg",
      alt: "about1",
      titleLines: ["Context is", "everything"],
      content:
        "Great AI needs great context. We build tools that remember, so you don't have to repeat yourself.",
    },
    {
      imgSrc: "./AboutPage/about2.svg",
      alt: "about2",
      titleLines: ["Built for", "everyone"],
      content:
        "Researchers, students, founders, teams. We felt this pain firsthand. We build what we wish existed",
    },
    {
      imgSrc: "./AboutPage/about3.png",
      alt: "about3",
      titleLines: ["Power without complexity"],
      content: "Advanced features, simple experience. No manual required.",
    },
  ];

  return (
    <div className="w-full h-auto my-10 lg:my-20">
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

        {/* Cards */}
        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 px-20">
          {cards.map((card) => (
            <div
              key={card.alt}
              className="w-full h-full bg-white rounded-[16px] shadow-sm flex flex-col items-start justify-start overflow-hidden px-4 py-6 gap-4"
            >
              <div className="w-full flex items-center justify-center">
                <Image
                  src={card.imgSrc}
                  alt={card.alt}
                  width={564}
                  height={270}
                  unoptimized
                  className="w-full max-w-[333px] h-auto max-h-[347px] object-contain bg-white"
                />
              </div>

              <h3 className="w-full font-geist text-[#525252] text-3xl text-left leading-[120%] px-4">
                {card.titleLines.map((line, idx) => (
                  <span key={`${card.alt}-${idx}`} className="block">
                    {line}
                  </span>
                ))}
              </h3>

              <p className="font-geist text-[#525252] text-md text-left leading-[120%] px-4 mb-10">
                {card.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

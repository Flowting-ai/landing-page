"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

export default function QuoteFlowting() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto mb-10 lg:mb-40 overflow-hidden"
    >
      <div className="container mx-auto text-center bg-linear-to-b flex flex-col items-center gap-10 px-4 lg:px-16">
        {/* Title */}
        {/* <div className="flex flex-col gap-2">
          <div className="text-transparent bg-clip-text bg-black">
            <h3 className="font-medium lg:font-normal leading-[120%] text-xl lg:text-[37px] text-text">
              For the ones who utilize AI
            </h3>
          </div>
          <p className="font-normal text-base">
            For the ones who build with AI Researchers, students, founders, and
            teams pushing the boundaries of what&quot;s possible.
            <br /> You deserve tools that keep up with how you think. FlowtingAI
            is the workspace where AI finally works the way you do. <br />
            When AI remembers what matters, it stops making things up.
          </p>
        </div> */}

        {/* Quote Background */}
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen max-h-screen flex items-center justify-center gap-6">
            <div className="z-2 w-full max-w-140 text-left flex flex-col gap-3">
              <h4 className="font-semibold text-lg md:text-xl lg:text-3xl text-quote-text">
                For the ones who utilize AI
              </h4>
              <ul className="list-none font-normal text-base md:text-lg lg:text-2xl text-quote-subtext flex flex-col gap-2">
                <li>
                  Researchers, students, founders, and teams pushing the
                  boundaries of what&apos;s possible. You deserve tools that
                  keep up with how you think.{" "}
                </li>
                <li>
                  FlowtingAI is the workspace where AI finally works the way you
                  do.
                </li>
                <li>
                  When AI remembers what matters, it stops making things up.
                </li>
              </ul>
              <div className="w-full flex items-center justify-end">
                <p className="font-medium text-sm md:text-lg lg:text-xl">
                  - Team Flowting
                </p>
              </div>
            </div>
            <div className="absolute w-[60vw] h-[70%] bg-linear-to-b from-quote-via via-40% via-quote-via to-quote-startend rounded-full blur-3xl"></div>

            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-[50vw] h-full overflow-hidden">
                <Image
                  src="./quoteFlowting/quoteBackground.svg"
                  alt="Quote Background"
                  width={16}
                  height={16}
                  className="z-1 mix-blend-soft-light -translate-x-[16%] -translate-y-[7%] w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

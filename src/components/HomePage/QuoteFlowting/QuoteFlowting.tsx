"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

export default function QuoteFlowting() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto my-10 lg:my-40 overflow-hidden"
    >
      <div className="container mx-auto text-center bg-linear-to-b flex flex-col items-center gap-10 px-4 lg:px-16">
        {/* Quote Background */}
        <div className="relative w-full flex items-center justify-center">
          <div className="w-full min-h-[60vh] sm:min-h-[80vh] lg:min-h-screen max-h-screen flex items-center justify-center gap-6">
            <div className="z-2 w-full max-w-md text-left flex flex-col gap-3">
              <h4 className="font-semibold text-lg md:text-xl lg:text-3xl text-quote-text">
                For the ones who utilize AI
              </h4>
              <ul className="list-none font-normal text-base md:text-lg lg:text-2xl text-[#262320] flex flex-col gap-2">
                <li>
                  Researchers, students, founders, and teams pushing the
                  boundaries of what&apos;s possible. You deserve tools that
                  keep up with how you think.{" "}
                </li>
                <li>
                  SouvenirAI is the workspace where AI finally works the way you
                  do.
                </li>
                <li>
                  When AI remembers what matters, it stops making things up.
                </li>
              </ul>
              <div className="w-full flex items-center justify-end">
                <p className="font-geist font-medium tracking-tight text-sm md:text-lg lg:text-xl">
                  - Team SouvenirAI
                </p>
              </div>
            </div>
            <div className="z-0 absolute -translate-x-[12%] translate-y-[0%] w-[50vw] h-[70vh] bg-linear-to-b from-quote-via via-40% via-quote-via to-quote-startend rounded-full blur-3xl"></div>

            <div className="absolute w-full h-full flex items-center justify-center">
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src="./logos/souvenir-quote-logo.svg"
                  alt="Quote Background"
                  width={500}
                  height={500}
                  className="z-2 mix-blend-color-dodge opacity-73 -translate-x-[14%] -translate-y-[7%] max-w-[600px] w-full max-h-[600px] h-full drop-shadow-sm object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

export default function PersonasSection() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} className="w-full h-auto my-20 lg:my-40">
      <div className="container mx-auto text-center flex flex-col items-center gap-4 lg:gap-10 px-4 lg:px-16">
        <div className="w-full flex flex-col gap-2">
          <h3 className="font-medium lg:font-normal leading-[120%] text-xl lg:text-[37px] text-text">
            Your AI, Your Rules
          </h3>
          <p className="font-normal text-sm lg:text-base text-subtext">
            Create custom personas. <br className="block sm:hidden" /> Share them with anyone.
          </p>
        </div>

        {/* Personas */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-4">
          {/* Create Persona */}
          <div className="relative w-full h-auto max-h-164 flex items-center justify-center p-4">
            {/* Text */}
            <div className="z-3 absolute top-[12%] left-[17%] xl:top-20 xl:left-20 text-left text-text flex flex-col gap-2">
              <h3 className="text-lg lg:text-xl xl:text-[28px]">
                Create Persona
              </h3>
              <p className="w-4/5 lg:w-2/3 text-xs md:text-sm xl:text-base leading-[120%]">
                Build your own AI expert. Give it a role, a voice, and the
                context it needs. Use it everywhere.
              </p>
            </div>
            <div className="w-full bg-white rounded-3xl shadow flex items-center justify-center">
              <div className="relative w-full h-auto min-h-90 max-h-90 sm:min-h-110 sm:max-h-110 md:min-h-130 md:max-h-130 lg:h-150 xl:min-h-156 xl:max-h-156 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Gradient Background */}
                <div className="z-1 absolute w-full h-full p-12">
                  <div className="w-full h-full bg-linear-to-b from-[#CCEAEF] via-amber-100 to-[#CCEAEF] rounded-[25px] blur-sm"></div>
                </div>
                {/* Image */}
                <div className="z-2 translate-y-8 md:translate-y-10 lg:translate-y-12 w-full h-full p-0">
                  <Image
                    src="./personas/persona-avatars.svg"
                    alt="persona-avatars"
                    width={500}
                    height={500}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Share Persona */}
          <div className="relative w-full h-auto max-h-164 flex items-center justify-center p-4">
            {/* Text */}
            <div className="z-3 absolute top-[12%] left-[17%] xl:top-20 xl:left-20 text-left text-text flex flex-col gap-2">
              <h3 className="text-lg md:text-2xl lg:text-xl xl:text-[28px]">
                Share Persona
              </h3>
              <p className="w-4/5 xl:w-2/3 text-xs md:text-sm xl:text-base leading-[120%]">
                Build your own AI expert. Give it a role, a voice, and the
                context it needs. Use it everywhere.
              </p>
            </div>
            <div className="w-full h-auto min-h-90 max-h-90 sm:min-h-110 sm:max-h-110 md:min-h-130 md:max-h-130 lg:h-auto xl:min-h-156 xl:max-h-156 bg-white rounded-3xl shadow flex items-center justify-center p-4 ">
              <div className="relative w-full min-h-82 max-h-82 sm:min-h-102 sm:max-h-102 md:min-h-122 md:max-h-122 lg:h-auto xl:min-h-148 xl:max-h-148 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-[#CCEAEF] via-amber-100 to-[#CCEAEF] rounded-2xl blur-none"></div>
                {/* Image */}
                <div className="z-2 absolute w-full h-full">
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src="./personas/persona-skew.svg"
                      alt="persona-skew"
                      width={500}
                      height={500}
                      className="absolute bottom-0 right-0 w-4/5 h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

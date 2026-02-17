"use client";

import { Player } from "@lottiefiles/react-lottie-player";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

export default function AutoManualSection() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} className="w-full h-auto my-10 lg:my-40">
      <div className="container mx-auto text-left flex flex-col gap-4 px-4 lg:px-16">
        <div className="w-full flex flex-col gap-2">
          <h3 className="font-medium lg:font-normal leading-[120%] text-xl lg:text-[37px] text-text">
            Auto or manual. You choose <br /> without losing context
          </h3>
          <p className="font-normal text-sm lg:text-base text-subtext">
            Choose between our wide range of models or let our algorithm select
            the best model for you.
          </p>
        </div>
        {/* Lottie: responsive (mobile) — same behavior as video: autoplay, loop, no controls */}
        <div className="w-full rounded-xl shadow-sm overflow-hidden block lg:hidden aspect-[623/1046]">
          <Player
            autoplay
            loop
            src="./lottie2.json"
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        {/* Video: desktop */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto rounded-4xl hidden lg:block"
        >
          <source src="./autoManual.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      </div>
    </section>
  );
}

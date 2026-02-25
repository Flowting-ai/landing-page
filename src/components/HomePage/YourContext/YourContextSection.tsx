"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { LiaHandPointer } from "react-icons/lia";

const DOT_IDLE = { scale: 1, boxShadow: "0 0 6px 2px rgba(255,255,255,0.35)" };
const DOT_PULSE = {
  scale: 1.6,
  boxShadow:
    "0 0 32px 14px rgba(255,255,255,0.98), 0 0 60px 20px rgba(255,255,255,0.6)",
};
const DOT_PILLAR = {
  scale: 1,
  boxShadow: "0 0 16px 6px rgba(255,255,255,0.92)",
};

function animateDotPillarize(
  tl: gsap.core.Timeline,
  ref: React.RefObject<HTMLDivElement | null>,
  delay: number,
) {
  if (!ref.current) return;
  const pulseIn = 0.12;
  const settle = 0.22;
  // Single bright pulse: quick ramp to peak glow, then settle to pillar
  tl.fromTo(
    ref.current,
    DOT_IDLE,
    { ...DOT_PULSE, duration: pulseIn, ease: "power2.out" },
    delay,
  ).to(
    ref.current,
    { ...DOT_PILLAR, duration: settle, ease: "power2.in" },
    delay + pulseIn,
  );
}

export default function YourContextSection() {
  const c1d1 = useRef<HTMLDivElement>(null);
  const c1d2 = useRef<HTMLDivElement>(null);
  const c1d3 = useRef<HTMLDivElement>(null);
  const c1d4 = useRef<HTMLDivElement>(null);
  const c2d1 = useRef<HTMLDivElement>(null);
  const c2d2 = useRef<HTMLDivElement>(null);
  const c2d3 = useRef<HTMLDivElement>(null);

  const dotRefs = [c1d1, c1d2, c1d3, c1d4, c2d1, c2d2, c2d3];

  const sectionRef = useFadeInOnScroll<HTMLElement>();

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
    let t = 0;
    const step = 0.5;

    // Connector 1: Dot 1 → 2 → 3 → 4
    animateDotPillarize(tl, c1d1, t);
    t += step;
    animateDotPillarize(tl, c1d2, t);
    t += step;
    animateDotPillarize(tl, c1d3, t);
    t += step;
    animateDotPillarize(tl, c1d4, t);
    t += step;
    // Connector 2: Dot 1 → 2 → 3
    animateDotPillarize(tl, c2d1, t);
    t += step;
    animateDotPillarize(tl, c2d2, t);
    t += step;
    animateDotPillarize(tl, c2d3, t);
    t += step;

    // Reset all to idle and hold before loop
    tl.to(
      dotRefs.map((r) => r.current).filter(Boolean),
      { ...DOT_IDLE, duration: 0.3, stagger: 0.04, ease: "power2.inOut" },
      t + 0.2,
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-auto pb-10 lg:pb-40">
      <div className="container mx-auto text-center flex flex-col items-center gap-4 lg:gap-10 px-4 lg:px-16">
        {/* Title - large Screen */}
        <div className="w-full hidden lg:flex flex-col gap-2">
          <h3 className="font-normal leading-[120%] text-xl xl:text-[37px] text-text">
            &quot;Your context, always with you.&quot;
          </h3>
          <p className="font-normal text-sm lg:text-base text-subtext">
            Your thinking stays connected across every model and conversation
          </p>
        </div>

        <div className="relative w-full h-auto">
          {/* Title - Smaller Screens */}
          <div className="lg:hidden absolute top-0 w-full left-1/2 -translate-x-1/2 flex flex-col gap-2">
            <h3 className="font-medium leading-[120%] text-xl text-text">
              &quot;Your context, always with you.&quot;
            </h3>

            <p className="font-normal text-sm lg:text-base text-subtext">
              Your thinking stays connected across every model and conversation
            </p>
          </div>

          {/* Content */}
          <div className="translate-y-10 scale-46 sm:scale-50 md:scale-75 lg:scale-100 relative w-full min-h-42 lg:min-h-96 flex items-center justify-center">
            {/* Background */}
            <div className="w-100 max-w-100 h-100 max-h-100 bg-linear-to-b from-amber-100/50 via-amber-100 to-blue-300/60 blur-[60px]"></div>
            
            {/* === Z-1 === */}
            {/* Window */}
            <Image
              src="./yourContext/window.svg"
              alt="Window"
              width={16}
              height={16}
              className="z-1 absolute top-1/2 left-1/2 -translate-1/2 w-full! max-w-[200px] h-auto! object-contain drop-shadow-sm drop-shadow-white"
            />

            {/* FlowtingAI Logo */}
            <Image
              src="./hero/FlowtingLogoSilver.svg"
              alt="Flowting Logo"
              width={16}
              height={16}
              className="z-1 absolute top-1/2 left-1/2 -translate-1/2 w-full! max-w-20 h-auto! object-contain"
            />

            {/* === Z-3 === */}
            {/* Border + Claude */}
            <div className="z-3 top-2 -translate-x-40 absolute flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="./yourContext/borderFrame.svg"
                  alt="Border Frame"
                  width={16}
                  height={16}
                  className="w-full max-w-[125px] h-full max-h-[125px] object-contain"
                />
                <Image
                  src="./yourContext/claude.svg"
                  alt="claude"
                  width={16}
                  height={16}
                  className="absolute w-auto h-auto object-contain"
                />
              </div>
            </div>
            {/* Border + Persona */}
            <div className="z-3 bottom-22 -translate-x-70 absolute flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="./yourContext/borderFrame.svg"
                  alt="Border Frame"
                  width={16}
                  height={16}
                  className="w-full max-w-31.5 h-full max-h-31.5 object-contain"
                />
                <Image
                  src="./yourContext/persona.svg"
                  alt="persona"
                  width={16}
                  height={16}
                  className="absolute w-auto h-auto object-contain"
                />
              </div>
            </div>

            {/* OpenAI */}
            <Image
              src="./yourContext/openai.svg"
              alt="openai"
              width={66}
              height={66}
              className="z-3 absolute bottom-12 -translate-x-48 w-16.5 h-16.5 object-contain backdrop-blur-sm"
            />

            {/* PinsFrame + Pins */}
            <div className="z-3 top-22 translate-x-45 w-25 absolute flex items-center justify-center backdrop-blur-lg">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="./yourContext/pinsFrame.svg"
                  alt="Pins Frame"
                  width={100}
                  height={100}
                  className="w-full max-w-25 h-full max-h-25 object-contain"
                />
                <Image
                  src="./yourContext/pin.svg"
                  alt="pin"
                  width={44}
                  height={44}
                  className="absolute w-11 h-11 object-contain"
                />
              </div>
            </div>

            {/* PointerFrame + CursorPointer */}
            <div className="z-3 bottom-34 translate-x-62 w-16 h-16 absolute flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src="./yourContext/pinsFrame.svg"
                  alt="Pointer Frame"
                  width={16}
                  height={16}
                  className="w-full h-full object-contain backdrop-blur-sm"
                />
                <Image
                  src="./yourContext/cursor-pointer.svg"
                  alt="Cursor Pointer"
                  width={44}
                  height={44}
                  className="absolute w-11 h-11 object-contain"
                />
              </div>
            </div>

            {/* === Z-2 === */}
            {/* Connector1 */}
            <Image
              src="./yourContext/connector1.svg"
              alt="connector1"
              width={16}
              height={16}
              className="z-2 absolute top-18 translate-x-4 w-57 h-auto object-contain drop-shadow-xs"
            />

            {/* Connector2 */}
            <Image
              src="./yourContext/connector2.svg"
              alt="connector2"
              width={16}
              height={16}
              className="scale-106 md:scale-100 lg:scale-100 z-2 absolute bottom-20 translate-x-7 w-93.75 h-auto object-contain drop-shadow-xs"
            />

            {/* === Z-4 === */}
            {/* Dots - Connector 1 */}
            {/* Dot 1 */}
            <div className="z-4 absolute top-17 -translate-x-24 w-2 h-2 flex items-center justify-center">
              <div
                ref={c1d1}
                className="w-full h-full bg-white rounded-full will-change-transform drop-shadow-sm drop-shadow-zinc-300"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>
            {/* Dot 2 */}
            <div className="z-4 absolute top-20 -translate-x-6 w-3 h-3 flex items-center justify-center">
              <div
                ref={c1d2}
                className="w-full h-full bg-white rounded-full will-change-transform"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>
            {/* Dot 3 */}
            <div className="z-4 absolute top-32 translate-x-17 w-2.5 h-2.5 flex items-center justify-center">
              <div
                ref={c1d3}
                className="w-full h-full bg-white rounded-full will-change-transform"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>
            {/* Dot 4 */}
            <div className="z-4 absolute top-34 translate-x-32 w-2 h-2 flex items-center justify-center">
              <div
                ref={c1d4}
                className="w-full h-full bg-white rounded-full will-change-transform drop-shadow-sm drop-shadow-zinc-300"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>

            {/* Dots - Connector 2 */}
            {/* Dot 1 */}
            <div className="z-4 absolute bottom-19 -translate-x-40 w-2 h-2 flex items-center justify-center">
              <div
                ref={c2d1}
                className="w-full h-full bg-white rounded-full will-change-transform drop-shadow-sm drop-shadow-zinc-300"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>
            {/* Dot 2 */}
            <div className="z-4 absolute bottom-28 translate-x-4 w-4 h-4 flex items-center justify-center">
              <div
                ref={c2d2}
                className="w-full h-full bg-white rounded-full will-change-transform"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>
            {/* Dot 3 */}
            <div className="z-4 absolute bottom-41 translate-x-54 w-2 h-2 flex items-center justify-center">
              <div
                ref={c2d3}
                className="w-full h-full bg-white rounded-full will-change-transform drop-shadow-sm drop-shadow-zinc-300"
                style={{ boxShadow: DOT_IDLE.boxShadow }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

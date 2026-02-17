'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const logos = [
  { name: "meta", src: "./goBuildSomething/meta.svg" },
  { name: "qwen", src: "./goBuildSomething/qwen.svg" },
  { name: "claude", src: "./goBuildSomething/claude.svg" },
  { name: "gemini", src: "./goBuildSomething/gemini.svg" },
  { name: "grok", src: "./goBuildSomething/grok.svg" },
  { name: "openai", src: "./goBuildSomething/openai.svg" },
  { name: "deepseek", src: "./goBuildSomething/deepseek.svg" },
];

export default function GoBuildSomething() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileLogoRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  useEffect(() => {
    if (!containerRef.current) return;

    const logoElements = logoRefs.current.filter(Boolean) as HTMLDivElement[];
    if (logoElements.length === 0) return;

    // Set initial state - logos positioned below window (invisible)
    gsap.set(logoElements, {
      y: 174, // Start below the window (window height)
      opacity: 0,
    });

    // Create timeline for the animation cycle
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // Phase 1: Logos rise from bottom one by one (slower, elegant)
    logoElements.forEach((logo, index) => {
      tl.to(
        logo,
        {
          y: 0,
          opacity: 1,
          duration: 0.8, // Slower rise
          ease: "power3.out", // More elegant easing
        },
        index * 0.2 // Stagger by 0.2 seconds for smoother sequence
      );
    });

    // Calculate when all logos have finished appearing
    const allAppearTime = (logoElements.length - 1) * 0.2 + 0.8;
    
    // Hold all logos visible for 1.5 seconds after all have appeared
    tl.to({}, { duration: 1.5 }, allAppearTime);

    // Phase 2: Logos sink back down in same order (faster than rise, but not too fast)
    // Start sinking after hold period
    const sinkStartTime = allAppearTime + 1.5;
    logoElements.forEach((logo, index) => {
      tl.to(
        logo,
        {
          y: 174,
          opacity: 0,
          duration: 0.55, // Slightly slower sink, still faster than 0.8s rise
          ease: "power2.in",
        },
        sinkStartTime + index * 0.12 // Stagger with a clear difference between logos
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  // Mobile: staggered opacity animation (start to end)
  useEffect(() => {
    const elements = mobileLogoRefs.current.filter(Boolean) as HTMLSpanElement[];
    if (elements.length === 0) return;

    gsap.set(elements, { opacity: 0 });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    const stagger = 0.18;
    const fadeDuration = 0.5;

    // Fade in from start to end
    elements.forEach((el, index) => {
      tl.to(el, { opacity: 1, duration: fadeDuration, ease: "power2.out" }, index * stagger);
    });
    const allInTime = (elements.length - 1) * stagger + fadeDuration;
    tl.to({}, { duration: 1.2 }, allInTime);
    // Fade out same order (start to end)
    elements.forEach((el, index) => {
      tl.to(el, { opacity: 0, duration: fadeDuration, ease: "power2.in" }, allInTime + 1.2 + index * stagger);
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full h-auto mb-10 lg:mb-20">
      <div className="container mx-auto text-center flex flex-col items-center gap-12 lg:gap-24 px-4 lg:px-16">
        <div className="w-full flex flex-col gap-2">
          <h3 className="font-medium lg:font-normal leading-[116%] text-xl lg:text-[37px] text-text">
            Go Build Something.
          </h3>
          <p className="font-normal text-text">One Workspace. All Models.</p>
        </div>

        {/* Flowting Windows */}
        <div className="w-full flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            {/* Mobile Windows */}
            <div className="relative lg:hidden flex items-center gap-4">
              {/* window */}
              <Image
                src="./goBuildSomething/window.svg"
                alt="flowting window"
                width={700}
                height={100}
                className="w-full h-auto object-contain"
              />
              {/* qwen */}
              <span
                ref={(el) => { mobileLogoRefs.current[0] = el; }}
                className="absolute left-4 top-[70%]"
              >
                <Image
                  src="./goBuildSomething/qwen.svg"
                  alt="flowting window qwen"
                  width={12}
                  height={12}
                  className="object-contain"
                />
              </span>
              {/* meta */}
              <span
                ref={(el) => { mobileLogoRefs.current[1] = el; }}
                className="absolute left-8 top-[58%]"
              >
                <Image
                  src="./goBuildSomething/meta.svg"
                  alt="flowting window meta"
                  width={15}
                  height={15}
                  className="object-contain"
                />
              </span>
              {/* gemini */}
              <span
                ref={(el) => { mobileLogoRefs.current[2] = el; }}
                className="absolute left-13 top-[48%]"
              >
                <Image
                  src="./goBuildSomething/gemini.svg"
                  alt="flowting window gemini"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </span>
              {/* grok */}
              <span
                ref={(el) => { mobileLogoRefs.current[3] = el; }}
                className="absolute left-20 top-[38%]"
              >
                <Image
                  src="./goBuildSomething/grok.svg"
                  alt="flowting window grok"
                  width={21}
                  height={21}
                  className="object-contain"
                />
              </span>
              {/* claude */}
              <span
                ref={(el) => { mobileLogoRefs.current[4] = el; }}
                className="absolute left-28 top-[29%]"
              >
                <Image
                  src="./goBuildSomething/claude.svg"
                  alt="flowting window claude"
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </span>
              {/* OpenAI */}
              <span
                ref={(el) => { mobileLogoRefs.current[5] = el; }}
                className="absolute left-38 top-[22%]"
              >
                <Image
                  src="./goBuildSomething/openai.svg"
                  alt="flowting window openai"
                  width={27}
                  height={27}
                  className="object-contain"
                />
              </span>
              {/* Deepseek */}
              {/* <Image
                src="./goBuildSomething/deepseek.svg"
                alt="flowting window deepseek"
                width={30}
                height={30}
                className="absolute left-40 top-[16%] object-contain"
              /> */}
            </div>

            {/* Desktop Windows */}
            <div
              ref={containerRef}
              className="w-full hidden lg:flex items-center justify-between px-4"
            >
              {logos.map((logo, index) => (
                <div
                  key={logo.name}
                  className="relative h-[174px] w-[115px] rounded-full drop-shadow-sm overflow-hidden shrink-0"
                >
                  {/* Window frame */}
                  <Image
                    src="./goBuildSomething/window.svg"
                    alt="window frame"
                    width={115}
                    height={174}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
                  />
                  {/* Sun icon for middle window (gemini, index 3) */}
                  {index === 3 && (
                    <Image
                      src="./goBuildSomething/sun.svg"
                      alt="sun"
                      width={115}
                      height={174}
                      className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-full h-auto object-contain"
                    />
                  )}
                  {/* Animated logo */}
                  <div
                    ref={(el) => {
                      logoRefs.current[index] = el;
                    }}
                    className="absolute inset-0 flex items-center justify-center z-20"
                  >
                    <Image
                      src={logo.src}
                      alt={`${logo.name} logo`}
                      width={48}
                      height={48}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

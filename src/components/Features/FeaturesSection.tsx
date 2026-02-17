"use client";
import Iridescence from "@/animations/Iridescence";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const features = [
  {
    id: 1,
    title: "Chat across any model",
    description:
      "No two AIs think exactly alike. Some master writing, others dominate code, and some specialize in deep research. FlowtingAI brings them all into one seamless experience. Choose your preferred model or let Flowting select the best match for you - without losing your conversation. One chat, many minds.",
    image: "/features/feature1.svg",
    styling: "translate-x-12 scale-90",
  },
  {
    id: 2,
    title: "Save what counts",
    description:
      "You know the feeling: the AI delivers the perfect response, only for it to get buried in the feed hours later. With Flowting, just pin it. One click saves that insight, summary, or code block instantly. No more digging through chat history. But a scattered collection is just clutter in disguise.",
    image: "/features/feature2.svg",
    styling: "translate-x-0 scale-90",
  },
  {
    id: 3,
    title: "Organize on your terms",
    description:
      "Organize your saved work - No more dumping insights into random folders or forcing tags that don't apply. It's your system, your structure. Structure over scatter. Sanity over chaos.",
    image: "/features/feature3.svg",
    styling: "translate-x-0 scale-90",
  },
  {
    id: 4,
    title: "Your AI finally remembers",
    description:
      "New conversation? Bring your saved context in with one click. The research, the decisions, the progress-all there. No manual copy-paste. No starting over. Every chat continues where the last one ended. This is where your AI stops forgetting - and starts thinking with you. Memory, unlocked.",
    image: "/features/feature4.svg",
    styling: "translate-x-16 scale-120",
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top;
      const viewportCenter = window.innerHeight / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      featureRefs.current.forEach((ref, idx) => {
        if (!ref) return;
        const refRect = ref.getBoundingClientRect();
        const refCenter = refRect.top + refRect.height / 2;
        const distance = Math.abs(refCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, true);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll, true);
  }, []);

  return (
    <section
      className="w-full mt-0 lg:mt-10 mb-10 lg:mb-40"
      ref={sectionRef}
    >
      <div ref={containerRef}>
        <div className="container mx-auto text-center flex flex-col items-center gap-10 px-4 lg:px-16">
        <div className="w-full flex flex-col gap-2">
          <h3 className="font-medium lg:font-normal leading-[120%] text-balance text-xl lg:text-[37px] text-text">
            Practical Features. Measurable Impact.
          </h3>
          <p className="font-normal text-sm lg:text-base text-subtext">
            Designed for Efficiency and Reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Features */}
          <div className="w-full">
            {features.map((feature, idx) => (
              <div
                key={feature.id}
                ref={(el) => {
                  featureRefs.current[idx] = el;
                }}
                className="relative w-full h-auto lg:h-screen bg-linear-to-b from-blue-200/40 via-amber-100 to-[#3E53577D]/49 lg:from-transparent lg:via-transparent lg:to-transparent border-2 lg:border-0 border-white rounded-3xl shadow-sm lg:shadow-none flex flex-col justify-center gap-4 text-left p-8 lg:p-12 overflow-hidden lg:overflow-auto mb-4 last:mb-0"
              >
                {/* <div className="z-2 absolute left-2 w-1/2 h-1/2 bg-linear-to-b from-blue-100/30 via-amber-100/30 to-blue-200/30 blur-[30px]"></div> */}
                <h4 className="font-normal text-xl lg:text-[28px]">
                  {feature.title}
                </h4>
                <p className="text-subtext text-sm lg:text-base xl:text-xl leading-relaxed">
                  {feature.description}
                </p>
                <div className="lg:hidden w-full h-auto flex items-center justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={520}
                    height={520}
                    className={`w-full h-auto max-h-162.5 object-contain ${feature.styling}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - transparent container; blue background is sticky and centered with max-h 769px on desktop */}
          <div className="hidden lg:block w-full relative">
            <div
              className="mx-auto w-full max-w-lg"
              style={{
                position: "sticky",
                top: "calc((100vh - 640px) / 2)",
                maxHeight: 640,
                height: 640,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              {/* Blue Background */}
              <div className="z-0 absolute inset-0 overflow-hidden rounded-3xl">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover bg-blue-400"
                >
                  <source src="./blueBg2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <Iridescence
                  color={[0, 0.8, 1]}
                  mouseReact
                  amplitude={0.1}
                  speed={1}
                /> */}
              </div>

              {/* images - switch based on activeIndex; they align vertically to the same area as the feature content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-0">
                <div className="wabsolute w-full h-full bg-blue-100/30"></div>
                {features.map((feature, idx) => (
                  <div
                    key={feature.id}
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
                    style={{
                      opacity: activeIndex === idx ? 1 : 0,
                      pointerEvents: activeIndex === idx ? "auto" : "none",
                    }}
                  >
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={520}
                      height={520}
                      className={`w-full h-auto max-h-162.5 object-contain ${feature.styling}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* wrapper for containerRef */}
    </div>
    </section>
  );
}

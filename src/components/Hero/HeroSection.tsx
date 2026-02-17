"use client";
import Image from "next/image";
// import Link from "next/link";
import Navbar from "../Navbar/Navbar";
// import Iridescence from "@/animations/Iridescence";
import {
  ChevronDown,
  GitCompare,
  Pin,
  UserRoundPen,
  Workflow,
} from "lucide-react";
import { RiClaudeFill } from "react-icons/ri";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  // Chat status line refs
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const containerRef = useRef(null);

  // Top hero copy refs
  const titleLine1Ref = useRef<HTMLParagraphElement | null>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement | null>(null);
  const titleLine3Ref = useRef<HTMLParagraphElement | null>(null);

  const [line4DisplayText, setLine4DisplayText] = useState("");
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  const LINE4_TEXT = "Generating best response. . .";

  // Looping chat status animation
  useGSAP(
    () => {
      const timeline = gsap.timeline({ repeat: -1 });
      const typewriterObj = { count: 0 };

      // Reset line 4 text at start of each loop
      timeline.add(() => setLine4DisplayText(""), 0);

      // Line 1: Analyzing your prompt...
      timeline.fromTo(
        line1Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );

      // Line 2: Checking Available Models... (Line 1 stays visible)
      timeline.fromTo(
        line2Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "+=0.3",
      );

      // Line 3: Selecting Claude... (Lines 1 & 2 stay visible)
      timeline.fromTo(
        line3Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "+=0.3",
      );

      // Line 4: Generating best response... (All visible)
      timeline.fromTo(
        line4Ref.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "+=0.3",
      );

      // Typewriter effect on line 4 text once container is visible
      timeline.to(
        typewriterObj,
        {
          count: LINE4_TEXT.length,
          duration: 1.2,
          ease: "none",
          onUpdate: () => {
            setLine4DisplayText(
              LINE4_TEXT.slice(0, Math.round(typewriterObj.count)),
            );
          },
        },
        "+=0",
      );

      // Hold all visible for a moment
      timeline.to(
        [
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          line4Ref.current,
        ],
        { opacity: 1, duration: 1 },
        "+=0",
      );

      // All disappear together
      timeline.to(
        [
          line1Ref.current,
          line2Ref.current,
          line3Ref.current,
          line4Ref.current,
        ],
        { opacity: 0, duration: 0.5, ease: "power2.in" },
      );

      // Pause before loop (reset typewriter for next loop)
      timeline.to({}, { duration: 0.5 });
      timeline.set(typewriterObj, { count: 0 });
    },
    { scope: containerRef },
  );

  // One-time staggered hero text animation
  useGSAP(() => {
    const elements = [
      titleLine1Ref.current,
      titleLine2Ref.current,
      titleLine3Ref.current,
    ].filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.2,
        delay: 0.25,
      },
    );
  }, []);
  return (
    <section ref={sectionRef} className="w-full h-auto">
      {/* === NAVBAR === */}
      <div className="container mx-auto flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>

      <div className="container mx-auto flex flex-col gap-4 px-4 lg:px-16 mt-6 lg:mt-0">
        {/* Title + Small Descriptions */}
        <div className="flex flex-col gap-3 lg:gap-2 my-4">
          <p
            ref={titleLine1Ref}
            className="font-normal text-sm lg:text-base xl:text-lg text-text opacity-0"
          >
            Elevate your work.
          </p>
          <div className="flex">
            <h1
              ref={titleLine2Ref}
              className="font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[42px] text-text opacity-0"
            >
              Do your best work with FlowtingAI.
              <br />
              The new home for AI practitioners
            </h1>
          </div>
          <p
            ref={titleLine3Ref}
            className="font-normal text-sm lg:text-base xl:text-lg text-text opacity-0"
          >
            Turn scattered AI chats into focused workflows
          </p>
        </div>

        {/* Content */}
        <div className="relative w-full h-auto min-h-114.75 lg:min-h-149.5 flex items-center justify-center">
          <div className="z-0 absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl flex items-center justify-center">
            {/* Flowting Content */}
            <div className="z-3 absolute -bottom-2 -right-1 md:right-auto lg:top-30.5 w-[95%] md:w-[85%] xl:w-[80%] xl:h-234 bg-white rounded-tl-xl sm:rounded-t-xl shadow-lg shadow-zinc-400 overflow-hidden">
              <div className="relative w-full h-full flex">
                {/* Left Sidebar */}
                <div className="hidden w-16 h-full bg-app-bg border-r border-app-border lg:flex flex-col px-3">
                  {/* Logo */}
                  <div className="w-full h-auto min-h-14 border-b border-app-border flex items-center justify-center">
                    <Image
                      src="./hero/FlowtingLogoBlue.svg"
                      alt="Flowting Logo Blue"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  {/* Icons */}
                  <div className="w-full h-full flex flex-col items-center gap-3 mt-5">
                    <button className="w-10 h-10 text-black! bg-white border border-zinc-600 rounded-[18px] flex items-center justify-center">
                      <Image
                        src="./hero/notebook-pen-black.svg"
                        alt="notebook-pen"
                        width={16}
                        height={16}
                        className="w-4 h-4 object-contain"
                      />
                    </button>
                    <button className="w-10 h-10 text-black! bg-white border border-app-border rounded-[18px] flex items-center justify-center">
                      <UserRoundPen size={16} strokeWidth={2} />
                    </button>
                    <button className="w-10 h-10 text-black! bg-white border border-app-border rounded-[18px] flex items-center justify-center">
                      <Workflow size={16} strokeWidth={2} />
                    </button>
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  {/* Topbar */}
                  <div className="w-full h-14 border-b border-app-border flex items-center px-4">
                    <button className="animate-dual-beam animate-border-rotate bg-app-bg! border-2! border-transparent rounded-lg shadow-sm flex items-center gap-2 px-3 py-1.5">
                      <Image
                        src="./hero/FlowtingLogo.svg"
                        alt="Flowting Logo"
                        width={20}
                        height={20}
                        className="w-4 h-4 lg:w-5 lg:h-5 object-contain"
                      />
                      <span className="text-sm lg:text-base">
                        Flowting AI Framework
                      </span>
                      <ChevronDown size={16} />
                    </button>
                  </div>

                  <div className="flex-1 flex">
                    {/* Chat Interface */}
                    <div className="flex-1 flex flex-col gap-4 my-6">
                      <div className="w-full h-auto flex items-center justify-end px-2 lg:px-6">
                        <p className="w-[90%] sm:w-full md:max-w-2/3 lg:max-w-1/2 text-xs text-black lg:text-sm border border-app-border rounded-tr-sm rounded-tl-2xl rounded-b-2xl px-4 py-2">
                          Analyze this react code for stale closures, shallow
                          comparison issues, or improper hook usage. Then,
                          provide the fix and explain the architectural reason
                          why this happened so I can prevent it elsewhere.
                        </p>
                      </div>
                      <div className="w-full h-auto flex flex-row lg:flex-row items-start justify-start gap-0 px-2 lg:px-6">
                        <Image
                          src="./hero/FlowtingBox.svg"
                          alt="Flowting Avatar"
                          width={20}
                          height={20}
                          className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                        />

                        {/* Output container */}
                        <div
                          ref={containerRef}
                          className="w-full max-w-full md:max-w-2/3 lg:max-w-4/5 xl:max-w-1/2 min-h-52 text-xs lg:text-sm text-zinc-400 flex flex-col gap-2 px-2"
                        >
                          <p
                            ref={line1Ref}
                            className="w-full h-10 font-mono tracking-tight font-medium bg-zinc-100 border-0 border-blue-300 rounded-xl flex items-center justify-start gap-2 px-4 opacity-0"
                          >
                            Analyzing your prompt...
                          </p>

                          <p
                            ref={line2Ref}
                            className="w-full h-10 font-mono tracking-tight font-medium bg-zinc-100 border-0 border-blue-300 rounded-xl flex items-center justify-start gap-2 px-4 opacity-0"
                          >
                            Checking Available Models...
                          </p>

                          <div
                            ref={line3Ref}
                            className="w-full h-auto lg:h-10 font-mono tracking-tight font-medium bg-zinc-100 border-0 border-blue-300 rounded-xl flex items-center justify-start gap-2 px-4 py-2 opacity-0"
                          >
                            <p className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-2">
                              Selecting{" "}
                              <span className="font-geist tracking-normal text-zinc-100 bg-zinc-900 rounded-lg flex items-center justify-center gap-1 px-2 py-1">
                                <RiClaudeFill className="text-[#D97757]" />
                                Claude Opus 4.6
                              </span>{" "}
                              for Deep Analysis
                            </p>
                          </div>

                          <div
                            ref={line4Ref}
                            className="w-auto h-10 tracking-normal text-text border border-main-border rounded-tl-sm rounded-tr-2xl rounded-b-2xl flex items-center px-4 opacity-0"
                          >
                            <span className="text-text">{line4DisplayText}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="hidden w-16 h-full border-l border-app-border lg:flex flex-col px-1">
                      {/* Icons */}
                      <div className="w-full h-full flex flex-col items-center gap-3 mt-3">
                        <button className="w-full h-16 bg-transparent border-0 border-app-border rounded-xl flex flex-col items-center justify-center gap-1">
                          <Pin
                            size={24}
                            strokeWidth={1.4}
                            className="text-black"
                          />
                          <p className="font-semibold text-[10px] leading-[120%] text-black">
                            Pin
                          </p>
                        </button>
                        <button className="w-full h-16 bg-transparent border-0 border-main-border rounded-xl flex flex-col items-center justify-center gap-1">
                          <GitCompare
                            size={24}
                            strokeWidth={1.4}
                            className="text-black"
                          />
                          <p className="font-semibold text-[10px] leading-[120%] text-black">
                            Compare <br />
                            Models
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blur Glass */}
            {/* <div className="z-2 absolute inset-0 backdrop-blur-[5px]"></div> */}

            {/* Animated BG */}
            {/* <Iridescence
              color={[0, 0.6, 0.8]}
              mouseReact
              amplitude={0.1}
              speed={1}
            /> */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full lg:w-full h-full lg:h-auto rounded-4xl blur-lg object-cover"
            >
              <source src="./blueBg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

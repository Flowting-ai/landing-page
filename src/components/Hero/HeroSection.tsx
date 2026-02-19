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
import dynamic from "next/dynamic";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false }
);

gsap.registerPlugin(useGSAP);

export default function HeroSection() {
  const messageLineRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef(null);

  // Top hero copy refs
  const titleLine1Ref = useRef<HTMLParagraphElement | null>(null);
  const titleLine2Ref = useRef<HTMLHeadingElement | null>(null);
  const titleLine3Ref = useRef<HTMLParagraphElement | null>(null);

  const [messagePhase, setMessagePhase] = useState<1 | 2 | 3 | 4>(1);
  const [displayText, setDisplayText] = useState("");
  const [showClaudeAvatar, setShowClaudeAvatar] = useState(false);
  const sectionRef = useFadeInOnScroll<HTMLDivElement>();

  const LINE_1 = "Analyzing your prompt...";
  const LINE_2 = "Checking Available Models...";
  const LINE_3 = "Selecting Claude Opus 4.6 for Deep Analysis";
  const LINE_4 = "Generating best response....";

  const LINES = [LINE_1, LINE_2, LINE_3, LINE_4] as const;

  // Looping chat status: same spot — typewriter → hold → disappear → next message in place
  useGSAP(
    () => {
      const timeline = gsap.timeline({ repeat: -1 });
      const typewriterObj = { count: 0 };

      const runStep = (phase: 1 | 2 | 3 | 4) => {
        const line = LINES[phase - 1];
        const duration = phase === 3 ? 1 : phase === 4 ? 1.1 : 0.85;
        timeline.add(() => {
          setMessagePhase(phase);
          setDisplayText("");
          setShowClaudeAvatar(phase === 4);
        });
        timeline.set(messageLineRef.current, { opacity: 1 }, "<");
        timeline.set(typewriterObj, { count: 0 }, "<");
        timeline.to(
          typewriterObj,
          {
            count: line.length,
            duration,
            ease: "none",
            onUpdate: () =>
              setDisplayText(line.slice(0, Math.round(typewriterObj.count))),
          },
          "<",
        );
        timeline.to(
          messageLineRef.current,
          { opacity: 0, duration: 0.35 },
          `+=${phase === 4 ? 0.7 : 0.5}`,
        );
        if (phase === 4) {
          timeline.add(() => setShowClaudeAvatar(false), "+=0");
        }
      };

      timeline.add(() => setShowClaudeAvatar(false), 0);
      timeline.set(messageLineRef.current, { opacity: 0 }, 0);

      runStep(1);
      runStep(2);
      runStep(3);
      runStep(4);

      timeline.to({}, { duration: 0.8 });
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
    <section className="w-full h-auto">
      {/* === NAVBAR === */}
      <div className="container mx-auto flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>

      <div
        ref={sectionRef}
        className="container mx-auto flex flex-col gap-4 px-4 lg:px-16 mt-6 lg:mt-0"
      >
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
            {/* Flowting Content
            <div className="z-3 absolute -bottom-2 -right-1 md:right-auto lg:top-30.5 w-[95%] md:w-[85%] xl:w-[80%] xl:h-234 bg-white rounded-tl-xl sm:rounded-t-xl shadow-lg shadow-zinc-400 overflow-hidden">
              <div className="relative w-full h-full flex">
                Left Sidebar
                <div className="hidden w-16 h-full bg-app-bg border-r border-app-border lg:flex flex-col px-3">
                  Logo
                  <div className="w-full h-auto min-h-14 border-b border-app-border flex items-center justify-center">
                    <Image
                      src="./hero/FlowtingLogoBlue.svg"
                      alt="Flowting Logo Blue"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  Icons
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
                  Topbar
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
                    Chat Interface
                    <div className="flex-1 flex flex-col gap-4 my-6">
                      <div className="w-full h-auto flex items-center justify-end px-2 lg:px-6">
                        <p className="w-[90%] sm:w-full md:max-w-2/3 lg:max-w-1/2 text-xs text-black lg:text-sm border border-app-border rounded-tr-sm rounded-tl-2xl rounded-b-2xl px-4 py-2">
                          Summarize this document and give me 3 key action
                          items I can use in my next meeting.
                        </p>
                      </div>
                      <div className="w-full h-auto flex flex-row lg:flex-row items-start justify-start gap-0 px-2 lg:px-6">
                        {showClaudeAvatar ? (
                          <Image
                            src="/yourContext/claude.svg"
                            alt="Claude"
                            width={20}
                            height={20}
                            className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                          />
                          <RiClaudeFill className="w-8 h-8 lg:w-12 lg:h-12 text-[#D97757]" />
                        ) : (
                          <Image
                            src="./hero/FlowtingBox.svg"
                            alt="Flowting Avatar"
                            width={20}
                            height={20}
                            className="w-8 h-8 lg:w-12 lg:h-12 object-contain"
                          />
                        )}

                        Output container — single line, same place, text replaces in place
                        <div
                          ref={containerRef}
                          className="relative w-full max-w-full md:max-w-2/3 lg:max-w-4/5 xl:max-w-1/2 min-h-8 lg:min-h-12 text-xs lg:text-sm text-zinc-400 flex flex-col px-2"
                        >
                          <div
                            ref={messageLineRef}
                            className="absolute left-2 top-0 opacity-0 w-[calc(100%-1rem)] h-8 lg:h-12 flex items-center"
                          >
                            {messagePhase <= 2 && (
                              <p className="w-full h-8 lg:h-12 font-mono tracking-tight font-medium rounded-xl flex items-center justify-start gap-2 px-4">
                                {displayText}
                              </p>
                            )}
                            {messagePhase === 3 && (
                              <div className="w-full h-8 lg:h-12 font-mono tracking-tight font-medium rounded-xl flex items-center justify-start gap-2 px-4">
                                <p className="flex flex-wrap items-center gap-1 md:gap-2">
                                  {displayText.includes("Claude Opus 4.6") ? (
                                    <>
                                      {displayText.split("Claude Opus 4.6")[0]}
                                      <span className="font-geist tracking-normal text-zinc-100 bg-zinc-900 rounded-lg flex items-center justify-center gap-1 px-2 py-1">
                                        <RiClaudeFill className="text-[#D97757]" />
                                        Claude Opus 4.6
                                      </span>
                                      {displayText.split("Claude Opus 4.6")[1]}
                                    </>
                                  ) : (
                                    displayText
                                  )}
                                </p>
                              </div>
                            )}
                            {messagePhase === 4 && (
                              <div className="w-auto h-8 lg:h-12 tracking-normal text-text border border-main-border rounded-tl-sm rounded-tr-2xl rounded-b-2xl flex items-center px-4">
                                <span className="text-text">{displayText}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    Right Sidebar
                    <div className="hidden w-16 h-full border-l border-app-border lg:flex flex-col px-1">
                      Icons
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
            </div> */}

            {/* Blur Glass
            <div className="z-2 absolute inset-0 backdrop-blur-[5px]"></div> */}

            {/* Video: desktop */}
            <Player
              autoplay
              loop
              src="./lottie1.json"
              className="w-full h-full z-2 absolute top-1/2 left-1/2 -translate-1/2 scale-110"
            />

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

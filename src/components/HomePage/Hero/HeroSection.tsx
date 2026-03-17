"use client";
import Image from "next/image";
// import Link from "next/link";
import Navbar from "../../Common/Navbar/Navbar";
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
  { ssr: false },
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

      {/* === HERO SECTION === */}
      <div
        ref={sectionRef}
        className="container mx-auto flex flex-col gap-4 px-4 lg:px-16 mt-6 lg:mt-0"
      >
        {/* Title + Small Descriptions */}
        <div className="flex flex-col gap-3 lg:gap-2 my-4">
          <p
            ref={titleLine1Ref}
            className="font-geist font-normal text-sm lg:text-base xl:text-lg text-text opacity-0"
          >
            Elevate your work.
          </p>
          <div className="flex">
            <h1
              ref={titleLine2Ref}
              className="font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[42px] text-text opacity-0"
            >
              Do your best work with SouvenirAI.
              <br />
              The new home for AI practitioners
            </h1>
          </div>
          {/* <p
            ref={titleLine3Ref}
            className="font-geist font-normal text-sm lg:text-base xl:text-lg text-text opacity-0"
          >
            Turn scattered AI chats into focused workflows
          </p> */}
        </div>

        {/* Content */}
        <div className="relative w-full h-auto min-h-114.75 lg:min-h-149.5 flex items-center justify-center">
          <div className="z-0 absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl flex items-center justify-center">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="z-1 relative w-full lg:w-full h-full lg:h-auto rounded-4xl blur-lg object-cover"
            >
              <source src="./blueBg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video: desktop */}
            <Player
              autoplay
              loop
              src="./souvenir-home-1a.json"
              className="z-2 hidden lg:flex w-full h-full absolute top-1/2 left-1/2 -translate-1/2 scale-120"
            />

            {/* Lottie: responsive (mobile) — same behavior as video: autoplay, loop, no controls */}
            <div className="z-2 absolute w-full border border-main-border rounded-2xl shadow-sm overflow-hidden block lg:hidden">
              <Player
                autoplay
                loop
                src="./lottie1b.json"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

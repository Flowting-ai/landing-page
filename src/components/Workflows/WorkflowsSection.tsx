"use client";

import Image from "next/image";
import { useState } from "react";
import { Workflow } from "lucide-react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
const WORKFLOWS_DATA = [
  {
    title: "System Research",
    desc: "From question to synthesis, one workflow, two research experts.",
    imgSrc: "./workflows/workflow1-SR.svg",
  },
  {
    title: "Client Engagement",
    desc: "From discovery to deliverable, one workflow, four consulting experts.",
    imgSrc: "./workflows/workflow2-CE.svg",
  },
  {
    title: "Content Production",
    desc: "From brief to publication, one workflow, three content specialists.",
    imgSrc: "./workflows/workflow3-CP.svg",
  },
  {
    title: "Sales Outreach",
    desc: "From prospect to outreach, one workflow, two sales specialists.",
    imgSrc: "./workflows/workflow4-SO.svg",
  },
];

export default function WorkflowsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWorkflow = WORKFLOWS_DATA[activeIndex];
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="w-full h-auto mt-10 mb-10 lg:mt-40 lg:mb-20"
    >
      <div className="relative container mx-auto text-center lg:text-left flex flex-col items-start px-4 lg:px-16">
        <div className="w-full flex flex-col gap-2">
          <h3 className="font-medium lg:font-normal leading-[120%] text-xl lg:text-[37px] text-text">
            Build workflows that run on AI.
          </h3>
          <p className="font-normal text-sm lg:text-base text-subtext">
            Connect your chats, models and personas into directional workflows.
            <br className="block sm:hidden" /> Set it up once, run it anytime.{" "}
            <br className="block sm:hidden" /> Your personal no code workflow
            editor.
          </p>
        </div>

        {/* Mobile/Tablet: Grid of Cards with Images */}
        <div className="w-full mt-6 lg:hidden">
          <div className="relative w-full bg-white rounded-3xl shadow-sm p-4 overflow-hidden">
            {/* Gradient Blocks */}
            <div className="z-0 absolute top-0 left-0 -translate-x-1/2 w-1/3 h-2/3 bg-linear-to-b from-blue-100 to-amber-100/70 blur-3xl"></div>
            <div className="z-0 absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-r from-blue-100 to-amber-100/70 blur-3xl"></div>

            {/* Cards Grid */}
            <div className="z-1 relative grid grid-cols-1 md:grid-cols-2 gap-4">
              {WORKFLOWS_DATA.map((workflow) => {
                return (
                  <div
                    key={workflow.title}
                    className={`relative bg-white border animate-dual-beam3 rounded-[18px] p-2 shadow-sm hover:shadow-md transition-shadow overflow-hidden`}
                  >
                    {/* Gradient */}
                    <div className="absolute top-2 left-0 w-full h-1/2 bg-linear-to-br from-cyan-300 to-amber-100 blur-lg"></div>

                    {/* Content */}
                    <div className="flex flex-col gap-3">
                      <div className="border animate-dual-beam3 rounded-2xl flex items-center justify-center p-2">
                        <div className="relative bg-transparent border animate-dual-beam3 rounded-[14px] flex flex-col gap-2 p-4 overflow-hidden">
                          <div className="z-1 absolute top-0 left-0 w-full h-full bg-white"></div>
                          <div className="z-2 flex items-center gap-2">
                            <div className="h-7 w-7 flex items-center justify-center rounded-full bg-slate-900 text-white">
                              <Workflow size={14} strokeWidth={2} />
                            </div>
                            <span className="text-sm font-medium text-text md:text-base">
                              {workflow.title}
                            </span>
                          </div>

                          <p className="z-2 text-left text-xs text-subtext md:text-sm">
                            {workflow.desc}
                          </p>
                        </div>
                      </div>
                      <div className="relative w-full h-auto mt-2 overflow-hidden">
                        <Image
                          src={workflow.imgSrc}
                          alt={workflow.title}
                          width={800}
                          height={450}
                          className="h-auto w-full object-contain"
                        />
                        {/* Utility Tools Image - Bottom Center */}
                        <div className="w-full flex items-center justify-center">
                          <Image
                            src="./workflows/workflow-utility.svg"
                            alt="Workflow Utility"
                            width={40}
                            height={14}
                            className="w-8 sm:w-10 md:w-12 h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Desktop: Tab Interface */}
        <div className="w-full mt-6 hidden lg:block">
          <div className="relative w-full bg-white rounded-3xl shadow-sm p-4 overflow-hidden">
            {/* Gradient Blocks */}
            <div className="z-0 absolute top-0 left-0 -translate-x-1/2 w-1/3 h-2/3 bg-linear-to-b from-blue-100 to-amber-100/70 blur-3xl"></div>
            <div className="z-0 absolute top-0 right-0 w-1/3 h-1/3 bg-linear-to-r from-blue-100 to-amber-100/70 blur-3xl"></div>

            {/* Buttons Container */}
            <div className="z-1 relative w-full bg-transparent border animate-dual-beam3 rounded-[18px] flex flex-row gap-3 p-2">
              {WORKFLOWS_DATA.map((workflow, index) => {
                const isActive = index === activeIndex;

                return (
                  <button
                    key={workflow.title}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`cursor-pointer group flex-1 border border-transparent rounded-2xl p-2 text-left transition-shadow ${
                      isActive
                        ? "animate-dual-beam2 shadow-lg bg-white"
                        : "hover:shadow-md shadow-sm bg-white"
                    }`}
                  >
                    <div className="flex h-full w-full flex-col gap-1 rounded-2xl bg-transparent px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                          <Workflow size={14} strokeWidth={2} />
                        </div>
                        <span
                          className={`text-sm font-medium md:text-base ${isActive ? "text-black" : "text-text"}`}
                        >
                          {workflow.title}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-subtext md:text-sm">
                        {workflow.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Common Image Section */}
            <div className="z-1 relative bg-transparent w-full h-auto min-h-[65vh] p-4 mt-4">
              <div className="flex w-full items-center justify-center">
                <Image
                  src={activeWorkflow.imgSrc}
                  alt={activeWorkflow.title}
                  width={800}
                  height={450}
                  className="h-auto w-full object-contain"
                />
                {/* Utility Tools Image - Bottom Center */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex items-center justify-center pb-0">
                  <Image
                    src="./workflows/workflow-utility.svg"
                    alt="Workflow Utility"
                    width={40}
                    height={14}
                    className="w-10 xl:w-45 h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

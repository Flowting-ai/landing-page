'use client';

import ProblemCard from "./ProblemCard";
import card1 from "./pb1.png";
import card2 from "./pb2.png";
import card3 from "./pb3.png";
import card4 from "./pb4.png";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const CARD_CONTENT = [
  {
    id: 1,
    problem: "Choice Paralysis",
    description:
      "You spend more time picking the right model than doing the actual work.",
    solution: "Auto-routing picks for you",
    layer1: card1,
  },
  {
    id: 2,
    problem: "Scattered Workflow",
    description:
      "You start in ChatGPT, switch to Claude, copy into Notion. Your work lives in five tabs and none of them talk to each other.",
    solution: "One workspace, all models",
    layer1: card2,
  },
  {
    id: 3,
    problem: "Work Gets Buried",
    description:
      "That perfect prompt from last week? Buried in an old chat you'll never find.",
    solution: "Save, organize, reuse",
    layer1: card3,
  },
  {
    id: 4,
    problem: "AI Has No Memory",
    description: "New chat, new model, same briefing. Again and again.",
    solution: "Context that stays with you",
    layer1: card4,
  },
];

export default function ProblemsSection() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} className="w-full h-auto my-10 lg:my-40">
      <div className="container mx-auto text-center flex flex-col items-center justify-center gap-4 lg:gap-12 px-4 lg:px-16">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium lg:font-normal leading-[120%] text-xl lg:text-[37px] text-text">
            Sound familiar?
          </h3>
          <p className="font-normal text-sm lg:text-base text-subtext">
            Turn scattered AI chats into focused workflows
          </p>
        </div>

        <div className="w-full bg-zinc-200/50 sm:bg-transparent rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 sm:gap-4 md:gap-4 lg:gap-4 p-0">
          {CARD_CONTENT.map(
            ({ id, problem, description, solution, layer1 }) => (
              <ProblemCard
                key={id}
                problem={problem}
                description={description}
                solution={solution}
                layer1={layer1}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

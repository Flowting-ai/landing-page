import Image from "next/image";
import type { StaticImageData } from "next/image";

export interface ProblemCardProps {
  problem: string;
  description: string;
  solution: string;
  layer1: StaticImageData;
}

export default function ProblemCard({
  problem,
  description,
  solution,
  layer1,
}: ProblemCardProps) {
  return (
    <div className="group w-full h-auto rounded-none flex items-center justify-center transition-all duration-0 px-10 sm:px-0 py-6 sm:py-0">
      <div className="aspect-33/50 min-w-[297px] w-full min-h-[450px] h-full bg-linear-to-b from-zinc-300 via-30% via-zinc-600 to-zinc-200 rounded-[18px] group-hover:shadow-sm p-[3px] transition-all duration-300">
        <div className="relative w-full h-full rounded-[15px] flex flex-col justify-between px-0 py-0 transition-all duration-500 overflow-hidden">
          <div className="z-2 absolute w-full h-full bg-transparent"></div>
          {/* Image */}
          <Image
            src={layer1}
            alt={problem}
            fill
            className="z-1 w-full h-full opacity-100 object-contain scale-103 group-hover:scale-110 transition-all duration-500"
          />

          {/* Content */}
          <div className="z-3 text-left group-hover:translate-y-2 flex flex-col gap-2 pt-6 transition-all duration-300">
            <h3 className="z-3 font-medium text-[20px] lg:text-[24px] text-black px-6">
              {problem}
            </h3>
            <h3 className="z-3 font-normal text-sm lg:text-base text-black px-6">
              {description}
            </h3>
          </div>

          <h3 className="z-3 w-full h-auto group-hover:-translate-y-2 font-light text-sm lg:text-base bg-transparent group-hover:bg-linear-to-r group-hover:from-zinc-300/40 group-hover:via-white group-hover:to-zinc-300/40 group-hover:backdrop-blur-[5px] opacity-0 group-hover:opacity-100 py-3 mb-8 transition-all duration-300">
            {solution}
          </h3>
        </div>
      </div>
    </div>
  );
}

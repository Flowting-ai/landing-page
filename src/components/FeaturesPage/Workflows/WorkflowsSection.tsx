import Image from "next/image";

export default function WorkflowsSection() {
  return (
    <div className="w-full h-auto my-10 lg:my-20">
      <div className="z-0 relative container mx-auto h-auto flex flex-col items-center justify-center gap-4 px-4 lg:px-16 mt-6 lg:mt-0">
        {/* Title */}
        <div className="w-full">
          <p className="font-mono font-normal text-[12px] text-[#929291] px-2">
            Workflows
          </p>
        </div>
        {/* Title + Small Descriptions */}
        <div className="z-2 w-full h-auto text-left flex flex-col md:flex-row items-start justify-between gap-3 pb-6">
          <h1 className="font-semibold leading-[120%] text-2xl lg:text-[37px] xl:text-[48px] text-black">
            Automate your best workflows
          </h1>
          <p className="pt-2 max-w-xl font-normal tracking-[-0.3px] leading-[24px] text-sm lg:text-base xl:text-xl text-black">
            Connect docs, personas, and models into repeatable workflows. Build
            it once, run it anytime — and context keeps compounding with every
            run
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          {/* Bento 1 */}
          <Image
            src="./FeaturesPage/workflows-bento1.png"
            alt="workflows-bento1"
            width={1440}
            height={500}
            className="w-full h-auto object-contain"
          />
          {/* Bento 2 & 3 */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="./FeaturesPage/workflows-bento2.png"
              alt="workflows-bento2"
              width={1440}
              height={500}
              className="w-full h-auto object-contain"
            />
            <Image
              src="./FeaturesPage/workflows-bento3.png"
              alt="workflows-bento3"
              width={1440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Bento 4 */}
          <div className="flex gap-4">
            <Image
              src="./FeaturesPage/workflows-bento4.png"
              alt="workflows-bento4"
              width={1440}
              height={500}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

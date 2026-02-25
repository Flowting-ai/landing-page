import Image from "next/image";

export default function PersonasSection() {
  return (
    <div className="w-full h-auto mb-28">
      <div className="z-0 relative container mx-auto min-h-screen flex flex-col items-center justify-center gap-4 px-4 lg:px-16 mt-6 lg:mt-0">
        {/* Title */}
        <div className="w-full">
          <p className="font-mono font-normal text-[12px] text-[#929291] px-2">
            AI Personas
          </p>
        </div>
        {/* Title + Small Descriptions */}
        <div className="z-2 w-full h-auto text-left flex flex-row items-start justify-between gap-3 pb-6">
          <h1 className="font-semibold leading-[120%] text-2xl lg:text-[37px] xl:text-[48px] text-black">
            Build your own AI experts.
          </h1>
          <p className="pt-2 max-w-xl font-normal tracking-[-0.3px] leading-[24px] text-sm lg:text-base xl:text-xl text-black">
            Create reusable personas with custom instructions, tone, and
            context. Use them anywhere.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4">
          {/* Bento 1 */}
          <Image
            src="./FeaturesPage/personas-bento1.png"
            alt="personas-bento1"
            width={1440}
            height={500}
            className="w-full h-auto object-contain"
          />
          {/* Bento 2 & 3 */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="./FeaturesPage/personas-bento2.png"
              alt="personas-bento2"
              width={1440}
              height={500}
              className="w-full h-auto object-contain"
            />
            <Image
              src="./FeaturesPage/personas-bento3.png"
              alt="personas-bento3"
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

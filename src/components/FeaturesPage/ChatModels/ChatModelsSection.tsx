import Image from "next/image";

export default function ChatModelsSection() {
  return (
    <div className="w-full h-auto my-10 lg:my-20">
      <div className="z-0 relative container mx-auto h-auto flex flex-col items-center justify-center gap-4 px-4 lg:px-16 mt-6 lg:mt-0">
        {/* Title */}
        <div className="w-full">
          <p className="font-mono font-normal text-[12px] text-[#929291] px-2">Multi-Model Workspace</p>
        </div>
        {/* Title + Small Descriptions */}
        <div className="z-2 w-full h-[128px] text-left flex flex-col md:flex-row items-start lg:items-center justify-between gap-3">
          <h1 className="font-semibold leading-[120%] text-2xl lg:text-[37px] xl:text-[48px] text-black">
          One workspace, every model.
          </h1>
          <p className="pt-2 max-w-xl font-normal tracking-[-0.3px] leading-[24px] text-sm lg:text-base xl:text-xl text-black">
          Stop re-explaining yourself every time you switch models. Start a conversation with Claude, continue with GPT, compare with Gemini, all in one thread, with full context preserved.
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 mt-10 sm:mt-8 md:mt-6 lg:mt-0">
          {/* Bento 1 */}
        <Image
          src="./FeaturesPage/chatmodels-bento1.png"
          alt="chatmodels-bento1"
          width={1440}
          height={500}
          className="w-full h-auto object-contain"
        />
        {/* Bento 2 & 3 */}
        <div className="grid grid-cols-2 gap-4">
        <Image
          src="./FeaturesPage/chatmodels-bento2.png"
          alt="chatmodels-bento2"
          width={1440}
          height={500}
          className="w-full h-auto object-contain"
        />
        <Image
          src="./FeaturesPage/chatmodels-bento3.png"
          alt="chatmodels-bento3"
          width={1440}
          height={500}
          className="w-full h-auto object-contain"
        />
        </div>
        {/* Bento 4 & 5 */}
        <div className="flex flex-col lg:flex-row gap-4">
        <Image
          src="./FeaturesPage/chatmodels-bento4.png"
          alt="chatmodels-bento4"
          width={1440}
          height={500}
          className="w-auto h-full max-h-[640px] object-contain"
        />
        <Image
          src="./FeaturesPage/chatmodels-bento5.png"
          alt="chatmodels-bento5"
          width={1440}
          height={500}
          className="w-full h-full max-h-[640px] object-contain"
        />
        </div>
        </div>
      </div>
    </div>
  );
}

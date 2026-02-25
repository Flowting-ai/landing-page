export default function AboutContent() {
  return (
    <div className="w-full h-auto my-10 lg:my-20">
      {/* === ABOUT CONTENT === */}
      <div className="container mx-auto h-full flex items-center justify-center flex-col gap-4 px-4 lg:px-16 py-4 lg:py-12 xl:py-16 mt-6 lg:mt-0">
        {/* Title + Small Descriptions */}
        <div className="text-left flex flex-col gap-6">
          <h1 className="max-w-4xl font-medium md:font-normal leading-[120%] text-2xl lg:text-[37px] xl:text-[42px] text-[#262320]">
            Everyone is racing to make AI smarter. <br />
            No one is fixing how people actually use it.
          </h1>
          <ul className="list-none max-w-4xl font-normal text-sm lg:text-base xl:text-lg text-text flex flex-col gap-3">
            <li>
              Today&apos;s AI tools forget your identity, lose your context, and
              force you to repeat yourself — copy-pasting between tabs,
              re-explaining projects, watching your best work disappear into old
              chats.
            </li>
            <li>We&apos;re building the fix.</li>
            <li>
              FlowtingAI acts as a memory layer for AI — preserving context,
              organizing conversations, and letting memory flow across models.
              Every interaction builds on what came before.
            </li>
            <li>
              The big players compete on intelligence. We compete on continuity.
            </li>
            <li>
              They&apos;re building faster engines. We&apos;re building the
              road.
            </li>
          </ul>
          <div className="w-full max-w-4xl flex flex-col gap-6 py-6">
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-2/5">
                <h4 className="text-[24px] lg:text-[32px] text-text">Our Mission</h4>
              </div>
              <div className="w-full md:w-3/5 py-3">
                <p className="text-sm md:text-[20px] text-[#262320]">To give AI a memory, so your work builds on itself, instead of
                starting over.</p>
              </div>
            </div>  
            <div className="flex flex-col md:flex-row items-start">
              <div className="w-full md:w-2/5">
                <h4 className="text-[24px] lg:text-[32px] text-text">Our Product</h4>
              </div>
              <div className="w-full md:w-3/5 py-3">
                <p className="text-sm md:text-[20px] text-[#262320]">One workspace where context persists, the right model is picked for you, and every output is reusable.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

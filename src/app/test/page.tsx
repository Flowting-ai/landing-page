import Image from "next/image";

export default function PricingPage() {
    return (
      <div className="w-full h-screen flex items-center justify-start">
        <div className="relative w-1/2 h-full bg-linear-to-b from-blue-200 via-amber-200 to-blue-200 border border-zinc-400 rounded-none shadow-md flex items-center justify-center">
        <Image
          src="/logos/souvenir-logo-chat.svg"
          alt="Guy Sitting On Chair"
          width={564}
          height={270}
          className="w-full max-w-[564px] h-auto object-contain mix-blend-color-burn"
        />
        
        
        <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col gap-8">
        <div className="flex items-center gap-4">
        <Image
          src="/logos/souvenir-logo.svg"
          alt="Guy Sitting On Chair"
          width={564}
          height={270}
          className="w-[36px] max-w-[564px] h-auto object-contain mix-blend-color-burn"
        />
        <h3 className="font-geist font-light leading-[120%] text-4xl text-black">Souvenir</h3>
        </div>  
          <h1 className="font-geist font-normal leading-[120%] text-5xl text-black">Access your <br /> intelligent <br /> workspace</h1>
        </div>
        </div>
      </div>   
    );
  }
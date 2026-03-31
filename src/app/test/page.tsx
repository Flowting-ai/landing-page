import Image from "next/image";

export default function PricingPage() {
    return (
      <div className="w-full h-screen flex items-center justify-center p-0">
        <div className="w-full h-full bg-linear-to-b from-blue-200 via-amber-200 to-blue-200 border border-zinc-400 rounded-none shadow-md flex items-center justify-center">
        <Image
          src="/logos/souvenir-logo-chat.svg"
          alt="Guy Sitting On Chair"
          width={564}
          height={270}
          className="w-full max-w-[564px] h-auto object-contain mix-blend-color-burn"
        />
        </div>
      </div>   
    );
  }
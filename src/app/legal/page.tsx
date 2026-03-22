import type { Metadata } from "next";
import Navbar from "@/components/Common/Navbar/Navbar";
import LegalHub from "@/components/LegalPage/LegalHub";

export const metadata: Metadata = {
  title: "Legal | Souvenir AI",
  description: "Terms, privacy, AI policies, and trust documentation for Souvenir AI.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F8]">
      <div className="container mx-auto bg-[#FAF9F8] flex items-center justify-center px-2 lg:px-16 py-3 lg:py-6">
        <Navbar />
      </div>
      <LegalHub />
    </div>
  );
}

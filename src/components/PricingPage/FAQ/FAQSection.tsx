"use client";

import { useState } from "react";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";
import { HiChevronDown } from "react-icons/hi2";

const FAQ_ITEMS = [
  {
    question: "Can I change plans later?",
    answer:
      ".",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      ".",
  },
  {
    question: "How many tokens can I recharge?",
    answer:
      ".",
  },
];

export default function FAQSection() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={sectionRef} className="w-full h-auto my-10 lg:my-40">
      <div className="container mx-auto flex flex-col items-center justify-center gap-8 lg:gap-12 px-4 lg:px-16">
        <div className="text-center flex flex-col gap-2 max-w-2xl">
          <h3 className="font-medium lg:font-normal leading-[120%] text-xl lg:text-[37px] text-text">
            Frequently asked questions
          </h3>
          <p className="font-geist font-normal text-sm lg:text-base text-subtext">
            Everything you need to know about plans and billing
          </p>
        </div>

        <div className="w-full max-w-2xl mx-auto flex flex-col">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="border-b border-main-border last:border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 py-5 text-left font-geist text-base lg:text-lg text-foreground hover:text-text transition-colors"
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <HiChevronDown
                  className={`shrink-0 w-5 h-5 text-text transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-geist text-sm lg:text-base text-text pb-5 pr-8">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

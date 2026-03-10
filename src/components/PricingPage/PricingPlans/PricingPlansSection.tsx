"use client";

import Link from "next/link";
import { useFadeInOnScroll } from "@/hooks/useFadeInOnScroll";

const PLANS = [
  {
    name: "Starter",
    price: 12,
    period: "month",
    description: "For individuals and side projects.",
    features: [
      "feature 1",
      "feature 1",
      "feature 1",
      "feature 1",
      "feature 1",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 20,
    period: "month",
    description: "For professionals who need more.",
    features: [
      "feature 2",
      "feature 2",
      "feature 2",
      "feature 2",
      "feature 2",
    ],
    cta: "Get Started",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Team",
    price: 100,
    period: "month",
    description: "For teams that build together.",
    features: [
      "feature 3",
      "feature 3",
      "feature 3",
      "feature 3",
      "feature 3",
      "feature 3",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

export default function PricingPlansSection() {
  const sectionRef = useFadeInOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} className="w-full h-auto my-10 lg:my-20">
      <div className="container mx-auto flex flex-col items-center gap-8 lg:gap-12 px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-5xl mx-auto gap-6 lg:gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border-2 p-6 lg:p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "border-foreground bg-main-bg shadow-lg scale-[1.02] lg:scale-105"
                  : "border-main-border bg-background hover:border-zinc-400 hover:shadow-md"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-geist text-xs font-medium bg-foreground text-background px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <div className="flex flex-col gap-2 mb-6">
                <h3 className="font-medium text-xl lg:text-2xl text-foreground">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-medium text-3xl lg:text-4xl text-foreground">
                    ${plan.price}
                  </span>
                  <span className="font-geist text-text text-base">/{plan.period}</span>
                </div>
                <p className="font-geist text-sm text-text mt-1">{plan.description}</p>
              </div>
              <ul className="flex flex-col gap-3 flex-1 font-geist text-sm text-text">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-foreground mt-0.5 shrink-0">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`mt-6 w-full text-center font-geist font-medium py-3 px-4 rounded-xl transition-all duration-300 active:scale-[0.98] ${
                  plan.highlighted
                    ? "bg-nav-button-bg text-nav-bg hover:opacity-90"
                    : "bg-main-bg border border-main-border text-foreground hover:bg-main-bg/80"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { legalHref, legalSections } from "@/lib/legal-docs";

export default function LegalHub() {
  return (
    <main className="w-full min-h-[60vh] font-geist text-text bg-[#FAF9F8]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-10 sm:py-14 lg:py-20">
        <h1 className="font-besley text-5xl max-sm:text-4xl text-left text-foreground mb-10 sm:mb-12 lg:mb-14">
          Souvenir AI Legal
        </h1>

        <div className="flex flex-col gap-10 sm:gap-12 lg:gap-14">
          {legalSections.map((section) => (
            <section key={section.slug} aria-labelledby={`legal-section-${section.slug}`}>
              <h2
                id={`legal-section-${section.slug}`}
                className="font-geist text-text text-2xl font-medium mb-4"
              >
                {section.title}
              </h2>
              <nav aria-label={section.title}>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.slug}>
                      <Link
                        href={legalHref(section.slug, link.slug)}
                        className="w-full border-t border-b border-main-border py-2 px-2 flex flex-row items-center justify-between gap-3 text-left hover:bg-black/2 transition-colors rounded-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/30"
                      >
                        <span className="font-geist text-text text-sm sm:text-base">
                          {link.label}
                        </span>
                        <ChevronRight
                          className="shrink-0 size-5 sm:size-[1.35rem] text-text"
                          strokeWidth={1.4}
                          aria-hidden
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

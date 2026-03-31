import type { LegalDocumentBody } from "@/lib/legal-document-content";
import LegalPolicyTOCFloat from "./LegalPolicyTOCFloat";

type Props = {
  sectionTitle: string;
  documentTitle: string;
  body: LegalDocumentBody;
};

const shell = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12";

/** Large left gutter inside 7xl — column sits middle-right, not centered. */
const contentGutter =
  "pl-[10%] sm:pl-[14%] md:pl-[20%] lg:pl-[28%] xl:pl-[32%] 2xl:pl-[34%]";

/** Reading measure; stays left-aligned within the gutter (no mx-auto). */
const readingMeasure = "max-w-2xl text-left";

export default function LegalPolicyTemplate({
  sectionTitle,
  documentTitle,
  body,
}: Props) {
  return (
    <div className="w-full min-h-screen bg-main-bg font-geist text-text pb-24 sm:pb-28">
      <header className="w-full border-b border-main-border">
        <div className={`${shell} py-8 sm:py-9 lg:py-10`}>
          <div className={contentGutter}>
            <div className={readingMeasure}>
              <p className="text-sm text-text mb-2">
                {sectionTitle} / {documentTitle}
              </p>
              <h1 className="font-besley text-4xl sm:text-5xl text-black">
                {documentTitle}
              </h1>
            </div>
          </div>
        </div>
      </header>

      <section
        id="legal-table-of-contents"
        className="w-full border-b border-main-border scroll-mt-24 py-8 sm:py-10"
      >
        <div className={shell}>
          <h2 className="text-left font-geist text-text text-base sm:text-lg font-medium">
            Table of Content
          </h2>
          <div className={`mt-5 ${contentGutter}`}>
            <nav
              className={`${readingMeasure}`}
              aria-label="Table of contents"
            >
              <ol className="border-l border-main-border pl-4 sm:pl-6 md:pl-8 space-y-2.5 sm:space-y-3 text-left list-none">
                {body.toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-geist text-text text-sm sm:text-base hover:text-black underline-offset-2 hover:underline"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </section>

      <section className="w-full border-main-border pt-6 sm:pt-8">
        <div className={shell}>
          <div className="text-left">
            <p className="text-sm sm:text-base text-text">Last Updated</p>
            <time
              dateTime={body.lastUpdatedIso}
              className="mt-1 block text-sm sm:text-base font-light text-text"
            >
              {body.lastUpdated}
            </time>
          </div>
        </div>
      </section>

      <div className={shell}>
        <div className={contentGutter}>
          <article className={`${readingMeasure} pt-10 sm:pt-12 pb-8`}>
            {body.intro ? (
              <p className="font-geist text-text text-base leading-relaxed mb-10 sm:mb-12">
                {body.intro}
              </p>
            ) : null}

            <div className="space-y-10 sm:space-y-12">
              {body.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 text-left"
                >
                  <h2 className="font-geist text-text text-xl font-semibold mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="font-geist text-text text-base leading-relaxed mb-4 last:mb-0"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </article>
        </div>
      </div>

      <LegalPolicyTOCFloat shellClassName={shell} />
    </div>
  );
}

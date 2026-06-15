import { MessageBubble } from "@/components/MessageBubble";
import { Badge } from "@/components/Badge";
import ShowcaseFrame from "@/components/showcase/ShowcaseFrame";

const PINS = [
  { title: "Code Snippet Request Helper", tags: ["programming", "code-generation"] },
  { title: "Dynamics 365 Finance Certification", tags: ["careers", "guide"] },
  { title: "Euler's Formula & Constants", tags: ["math", "reference"] },
];

/** Chatspace hero visual: a chat thread + a Pinboard rail (real MessageBubble + Pin cards). */
export default function ChatPinVisual() {
  return (
    <ShowcaseFrame title="souvenir · chatspace">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        {/* chat column */}
        <div className="flex flex-col gap-4 border-b border-line p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[var(--text-small)] font-medium text-ink-muted">New chat</span>
            <span className="inline-flex items-center gap-2 rounded-[var(--r-pill)] border border-line-strong bg-surface px-3 py-1.5 font-sans text-[var(--text-micro)] font-medium text-ink" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="h-1.5 w-1.5 rounded-full bg-ink" /> Souvenir Muse (Advanced) ▾
            </span>
          </div>
          <div className="flex justify-end">
            <MessageBubble role="user" content="Steps to get Dynamics 365 finance and operations certification" />
          </div>
          <div className="flex justify-start">
            <MessageBubble role="assistant" content={`To earn the Dynamics 365 Finance & Operations certification:

1. Choose the right certification path
2. Review the skills measured
3. Leverage Microsoft Learn
4. Gain practical experience
5. Use official practice & study materials`} />
          </div>
        </div>

        {/* pinboard rail */}
        <div className="flex flex-col gap-2.5 bg-bg-subtle p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <span className="font-sans text-[var(--text-small)] font-semibold text-ink">Pinboard</span>
            <Badge label="All pins" color="Neutral" />
          </div>
          {PINS.map((p) => (
            <div key={p.title} className="flex flex-col gap-2 rounded-[var(--r-md)] border border-line bg-surface p-3" style={{ boxShadow: "var(--shadow-sm)" }}>
              <span className="font-sans text-[var(--text-small)] font-medium text-ink">{p.title}</span>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <Badge key={t} label={t} color="Neutral" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </ShowcaseFrame>
  );
}

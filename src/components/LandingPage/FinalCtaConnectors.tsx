import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Button } from "@/components/kaya/Button";
import { DEMO_URL } from "@/lib/links";
import { ConnectorIcon } from "@strange-huge/icons/connectors";
import TrackCTA from "@/components/analytics/TrackCTA";

/** Home final CTA (Figma node 6435-15258): a warm band with a clearly-visible
 *  full-color integration-logo grid as the backdrop, and a centered card on top
 *  carrying the closing message + two CTAs. Replaces the old dark, faded
 *  `appGrid` band on Home (feedback #15: "logos in background, not visible").
 *  The shared dark `FinalCTABand` stays in place for the other product pages.
 *
 *  Logos use ONLY valid @strange-huge color ConnectorIcon ids (the Figma mock's
 *  shopify/tiktok/whatsapp/etc. aren't in the icon set + several are CLAUDE.md
 *  banned → render blank), so the grid reads as a rich, on-system logo field. */

// Three rows of valid color logos — offset per row so the field reads varied.
const ROWS: string[][] = [
  ["stripe", "webflow", "figma", "notion", "intercom", "slack", "github", "gmail", "zendesk"],
  ["airtable", "asana", "hubspot", "jira", "linear", "googledrive", "vercel", "zapier", "mixpanel"],
  ["mixpanel", "linear", "asana", "stripe", "googledrive", "slack", "hubspot", "github", "figma"],
];

function LogoTile({ id }: { id: string }) {
  return (
    <span
      className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[18px] border border-line bg-surface sm:h-[80px] sm:w-[80px]"
      style={{ boxShadow: "var(--shadow-sm)" }}
    >
      <ConnectorIcon id={id} size={40} />
    </span>
  );
}

export default function FinalCtaConnectors() {
  return (
    <section className="px-[var(--gutter)] py-[var(--section-y)]">
      <Container wide>
        <div
          className="relative overflow-hidden rounded-[var(--r-2xl)] px-4 py-12 sm:px-8 sm:py-16"
          style={{ backgroundColor: "var(--surface-warm)", boxShadow: "var(--shadow-inner)" }}
        >
          {/* Backdrop: full-color logo grid, clearly visible (not faded). Softly
              masked at the very edges so the band reads as a contained field. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 flex flex-col justify-between gap-4 p-4 sm:p-6"
            style={{
              WebkitMaskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
              maskImage: "linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)",
            }}
          >
            {ROWS.map((row, r) => (
              <div key={r} className="flex items-center justify-between">
                {row.map((id, i) => (
                  <LogoTile key={`${r}-${i}-${id}`} id={id} />
                ))}
              </div>
            ))}
          </div>

          {/* Centered card on top — the closing message + CTAs. */}
          <Reveal>
            <div
              className="relative z-10 mx-auto flex max-w-[60rem] flex-col items-center rounded-[var(--r-2xl)] border border-line bg-surface px-6 py-10 text-center sm:px-12 sm:py-12"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <h2 className="font-display max-w-[28ch] text-[length:var(--text-h2)] leading-[var(--text-h2--line-height)] tracking-[var(--text-h2--letter-spacing)] text-ink text-balance">
                Give your team a brain that remembers{" "}
                <em className="italic text-ink-muted">— and agents that do the work.</em>
              </h2>
              <p className="mt-4 max-w-[52ch] font-sans text-[length:var(--text-body)] leading-[var(--text-body--line-height)] text-ink-secondary">
                Bring your apps, scattered data, and daily workflows into one operational layer — with a
                workforce of AI agents run from inside your Slack.
              </p>
              <div
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
                style={{ ["--font-size-body" as string]: "16px", ["--line-height-body" as string]: "24px" }}
              >
                {/* Both are real Kaya Buttons at size md → identical size/shape
                    (was a hand-rolled pill link that didn't match). Figma order:
                    secondary (community) left, primary (demo) right. */}
                <TrackCTA event="community_click" params={{ location: "home_final_cta" }}>
                  <a href={DEMO_URL} className="inline-flex">
                    <Button variant="secondary" size="md" className="px-7 py-3">Join Slack Community</Button>
                  </a>
                </TrackCTA>
                <TrackCTA event="book_demo_click" params={{ location: "home_final_cta" }}>
                  <a href={DEMO_URL} target="_blank" rel="noreferrer" className="inline-flex">
                    <Button variant="default" size="md" className="px-7 py-3">Book a Demo</Button>
                  </a>
                </TrackCTA>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

import type { Meta, StoryObj } from "@storybook/nextjs";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/sections/SectionHeading";
import FinalCTABand from "@/components/sections/FinalCTABand";
import { Button } from "@/components/kaya/Button";

/**
 * The section-archetype catalogue — ONE representative example per archetype, built from
 * tokens + primitives. The point is that the rhythm is **deliberately varied**: hero,
 * problem-immersion, feature-row, proof, comparison, CTA, footer each read differently.
 * The banned move is the repeated hero → stat-trio → 3 feature-splits → comparison → CTA.
 *
 * These are catalogue *examples*, not the production pages — full pages stay on the
 * shot.mjs + design-audit loop.
 */
const meta = {
  title: "Archetypes",
  parameters: { layout: "fullscreen" },
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

/** HERO — Besley at the hero ceiling, a single lead, the espresso CTA, warm ambience. */
export const Hero: Story = {
  render: () => (
    <section style={{ position: "relative", overflow: "hidden", paddingBlock: "var(--section-y-lg)" }}>
      <div className="glow-warm" style={{ position: "absolute", inset: "-10% 0 auto 0", height: 520, pointerEvents: "none" }} />
      <Container>
        <div style={{ position: "relative", maxWidth: "16ch" }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)" }}>
            The memory your work keeps
          </span>
          <h1 style={{ fontFamily: "var(--font-title)", fontSize: "var(--text-hero)", lineHeight: "var(--text-hero--line-height)", letterSpacing: "var(--text-hero--letter-spacing)", color: "var(--ink)", textWrap: "balance", margin: "16px 0 0" }}>
            Souvenir
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--text-lead--line-height)", color: "var(--ink-muted)", maxWidth: "46ch", marginTop: 20 }}>
            Your company's AI brain, in Slack. Agents that remember your context, run your workflows,
            and connect every tool you use.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Button variant="default">Book a Demo</Button>
            <Button variant="outline">See how it works</Button>
          </div>
        </div>
      </Container>
    </section>
  ),
};

/** PROBLEM-IMMERSION — feel the chaos before the relief. Dark, copy-led, no product shot. */
export const ProblemImmersion: Story = {
  render: () => (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--dark-bg)", paddingBlock: "var(--section-y-lg)" }}>
      <div className="dotgrid-dark" style={{ position: "absolute", inset: 0, opacity: 0.5, pointerEvents: "none" }} />
      <Container>
        <div style={{ position: "relative", maxWidth: "24ch" }}>
          <h2 style={{ fontFamily: "var(--font-title)", fontSize: "var(--text-display)", lineHeight: "var(--text-display--line-height)", letterSpacing: "var(--text-display--letter-spacing)", color: "var(--dark-ink)", textWrap: "balance" }}>
            Your context is scattered across twelve tabs.
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-lead)", lineHeight: "var(--text-lead--line-height)", color: "var(--dark-ink-muted)", maxWidth: "52ch", marginTop: 20 }}>
            Slack threads. Notion pages. A Drive nobody can search. Every answer your team already
            found, lost again the moment the tab closed.
          </p>
        </div>
      </Container>
    </section>
  ),
};

/** FEATURE-ROW — text on one side, an abstracted concept-visual on the other (not a screenshot). */
export const FeatureRow: Story = {
  render: () => (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
          <div>
            <span style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)" }}>
              One operational layer
            </span>
            <h2 style={{ fontFamily: "var(--font-title)", fontSize: "var(--text-h2)", lineHeight: "var(--text-h2--line-height)", letterSpacing: "var(--text-h2--letter-spacing)", color: "var(--ink)", marginTop: 12, textWrap: "balance" }}>
              Memory that compounds, not resets.
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", lineHeight: "var(--text-body--line-height)", color: "var(--ink-muted)", maxWidth: "48ch", marginTop: 14 }}>
              Every decision, doc, and thread becomes part of a brain your agents can draw on — so the
              second time is never from scratch.
            </p>
          </div>
          <div aria-hidden style={{ aspectRatio: "4 / 3", borderRadius: "var(--r-2xl)", background: "var(--surface-warm)", boxShadow: "var(--shadow-md), var(--shadow-inner)", display: "grid", placeItems: "center", color: "var(--ink-subtle)", fontFamily: "var(--font-body)", fontSize: "var(--text-small)" }}>
            abstracted concept-visual
          </div>
        </div>
      </Container>
    </section>
  ),
};

/** PROOF — stat trio. Ochre highlight + tabular nums on the numbers (positive signal only). */
export const Proof: Story = {
  render: () => {
    const stats = [
      { n: "12 hrs", l: "saved per teammate, weekly" },
      { n: "1", l: "place every answer lives" },
      { n: "40+", l: "tools connected on day one" },
    ];
    return (
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <SectionHeading eyebrow="Why teams switch" title="Less searching. More shipping." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
            {stats.map((s) => (
              <div key={s.l} style={{ background: "var(--surface)", borderRadius: "var(--r-xl)", boxShadow: "var(--shadow-sm)", padding: 28, textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-title)", fontSize: "var(--text-display)", color: "var(--highlight)", fontVariantNumeric: "tabular-nums", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "var(--ink-muted)", marginTop: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  },
};

/** COMPARISON — before / after. Meaning by label + position, never color alone (colorblind rule). */
export const Comparison: Story = {
  render: () => (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          <div style={{ borderRadius: "var(--r-xl)", border: "1px solid var(--line-strong)", padding: 28 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-muted)" }}>Without Souvenir</div>
            <ul style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--ink-muted)", lineHeight: 1.9, marginTop: 12, paddingLeft: 18 }}>
              <li>Context dies when the tab closes</li>
              <li>Same questions, answered weekly</li>
              <li>Tools that don't talk to each other</li>
            </ul>
          </div>
          <div style={{ borderRadius: "var(--r-xl)", background: "var(--surface)", boxShadow: "var(--shadow-md), var(--shadow-inner)", padding: 28 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)" }}>With Souvenir</div>
            <ul style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-body)", color: "var(--ink)", lineHeight: 1.9, marginTop: 12, paddingLeft: 18 }}>
              <li>A brain that remembers everything</li>
              <li>Answers compound over time</li>
              <li>Every tool, one operational layer</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  ),
};

/** CTA — the dark final band with the signature mauve glow (reuses the FinalCTABand primitive). */
export const CTA: Story = {
  render: () => (
    <FinalCTABand
      title="Your company's AI brain, in Slack."
      body="Connect your apps, keep your context, and put a coordinated team of agents to work."
    />
  ),
};

/** FOOTER — wordmark + link columns, warm and quiet. */
export const Footer: Story = {
  render: () => {
    const cols = [
      { h: "Product", links: ["Chatspace", "Brain", "Slack", "Pricing"] },
      { h: "Company", links: ["About", "Blog", "Careers"] },
      { h: "Legal", links: ["Privacy", "Terms", "Cookies"] },
    ];
    return (
      <footer style={{ borderTop: "1px solid var(--line)", paddingBlock: "var(--section-y-sm)" }}>
        <Container>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 32 }}>
            <div>
              <div style={{ fontFamily: "var(--font-title)", fontSize: "var(--text-h3)", color: "var(--ink)" }}>Souvenir</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "var(--ink-muted)", maxWidth: "30ch", marginTop: 8 }}>
                The memory your work keeps.
              </p>
            </div>
            {cols.map((c) => (
              <div key={c.h}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-micro)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--ink-subtle)" }}>{c.h}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                  {c.links.map((l) => (
                    <li key={l}><a href="#" style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-small)", color: "var(--ink-muted)", textDecoration: "none" }}>{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </footer>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/nextjs";
import Reveal from "@/components/ui/Reveal";

/** The site's ONLY entrance primitive: fade + 24px rise, once, power3.out, on scroll
 *  into view. Reduced-motion safe (renders static). Use one focal reveal per section —
 *  not decoration on everything. Reload the story to replay. */
const meta = {
  title: "Primitives/Reveal",
  component: Reveal,
  parameters: { layout: "padded" },
  args: { delay: 0, y: 24, children: "Reveal me" },
  decorators: [(Story) => <div style={{ padding: 64, minHeight: 240 }}><Story /></div>],
} satisfies Meta<typeof Reveal>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <p style={{ fontFamily: "var(--font-title)", fontSize: "var(--text-h2)", color: "var(--ink)", maxWidth: "20ch" }}>
        Content assembles into place.
      </p>
    ),
  },
};

export const Staggered: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {[0, 0.04, 0.08, 0.12].map((d, i) => (
        <Reveal key={i} delay={d}>
          <div style={{ background: "var(--surface)", boxShadow: "var(--shadow-sm)", borderRadius: "var(--r-md)", padding: "14px 18px", fontFamily: "var(--font-body)", color: "var(--ink)" }}>
            Item {i + 1} — staggered ~40ms apart (a sense of arrival)
          </div>
        </Reveal>
      ))}
    </div>
  ),
};

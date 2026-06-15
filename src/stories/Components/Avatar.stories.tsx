import type { Meta, StoryObj } from "@storybook/nextjs";
import { Avatar } from "@/components/Avatar";

/**
 * Vendored KDS atom (~12 live imports). Initials avatar in 4 sizes; initials are
 * auto-derived from `name`. Marketing usage: persona/agent identities in roster
 * grids, testimonial bylines, the Chatspace/Brain concept-visuals. Use a warm
 * neutral or the persona's own color for `color` — keep it muted on the canvas.
 */
const meta = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  parameters: { layout: "centered" },
  args: { name: "Ada Lovelace", size: "md" },
  argTypes: { size: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] } },
} satisfies Meta<typeof Avatar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {(["xs", "sm", "md", "lg"] as const).map((s) => (
        <Avatar key={s} size={s} name="Ada Lovelace" />
      ))}
    </div>
  ),
};

export const Roster: Story = {
  render: () => {
    const people = [
      { name: "Ada Lovelace", color: "var(--purple-600)" },
      { name: "Alan Turing", color: "var(--brown-600)" },
      { name: "Grace Hopper", color: "var(--neutral-700)" },
      { name: "Katherine Johnson", color: "var(--yellow-700)" },
    ];
    return (
      <div style={{ display: "flex" }}>
        {people.map((p, i) => (
          <span key={p.name} style={{ marginLeft: i === 0 ? 0 : -8 }}>
            <Avatar name={p.name} color={p.color} size="lg" style={{ boxShadow: "0 0 0 2px var(--bg)" }} />
          </span>
        ))}
      </div>
    );
  },
};

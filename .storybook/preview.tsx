import type { Preview } from "@storybook/nextjs";
import { withThemeByDataAttribute } from "@storybook/addon-themes";

// Pulls the WHOLE token graph (Kaya primitives → marketing.css) + Tailwind v4
// utilities. Storybook reads the same single source of truth the site does.
// Fonts are loaded separately in .storybook/preview-head.html — @storybook/nextjs
// does not inject the next/font --font-* variables into the preview iframe.
import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    // Theme toggle flips `data-theme` on the REAL token layer (marketing.css),
    // so the mauve default AND the documented ochre one-token swap preview live
    // across every story — truthful, not Storybook-only styling.
    withThemeByDataAttribute({
      themes: { Mauve: "mauve", Ochre: "ochre" },
      defaultTheme: "Mauve",
      attributeName: "data-theme",
    }),
  ],
  parameters: {
    layout: "fullscreen",
    backgrounds: { disable: true }, // body uses --bg (warm cream) from the tokens
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    options: {
      storySort: {
        order: [
          "Foundations",
          ["Overview", "Brand", "Color", "Typography", "Spacing & Rhythm", "Motion", "Elevation & Depth"],
          "Components",
          ["Overview", "Atoms", "Molecules", "Organisms"],
          "Primitives",
          "Archetypes",
        ],
      },
    },
  },
};

export default preview;

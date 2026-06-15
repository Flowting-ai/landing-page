import * as React from "react";
import type { Preview, Decorator } from "@storybook/nextjs";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { fontVariables } from "../src/lib/fonts";

// Pulls the WHOLE token graph (Kaya primitives → marketing.css) + Tailwind v4
// utilities. Storybook reads the same single source of truth the site does.
import "../src/app/globals.css";

/**
 * Apply the next/font variable classes to <body> (not a wrapper div) via effect,
 * so Radix portals/dialogs that mount outside the story root still inherit the
 * fonts. Mirrors how app/layout.tsx applies them.
 */
function FontProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    const classes = fontVariables.split(" ").filter(Boolean);
    document.body.classList.add(...classes);
    return () => document.body.classList.remove(...classes);
  }, []);
  return <>{children}</>;
}

const withFonts: Decorator = (Story) => (
  <FontProvider>
    <Story />
  </FontProvider>
);

const preview: Preview = {
  decorators: [
    withFonts,
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

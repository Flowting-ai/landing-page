import type { StorybookConfig } from "@storybook/nextjs";

/**
 * Storybook is the marketing DESIGN-SYSTEM home (Docs-first, token-driven,
 * theme-switchable). It reads FROM the CSS-variable tokens — the single source
 * of truth — exactly as the site does. Scope is the DS layer only: foundations
 * docs, reusable primitives, and ONE example per section archetype. Full-page
 * verification stays on scripts/shot.mjs + the design-audit loop, never here.
 */
const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(ts|tsx)",
    "../src/components/**/*.stories.@(ts|tsx)",
  ],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes"],
  framework: {
    // The Next adapter auto-handles next/font, next/image, the Tailwind v4
    // PostCSS pipeline, and the "@/*" tsconfig path alias — the minimal-friction
    // path on Next 16 + React 19.
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};

export default config;

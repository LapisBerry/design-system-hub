import { defineTheme } from "@dsh/core";

/** Gingham. Picnic gingham: woven checks, rickrack ribbon, jam-jar lid avatars (light only). */
export const gingham = defineTheme({
  meta: {
    id: "gingham",
    name: "Gingham",
    tagline: "Pack a basket, bring a friend.",
    description:
      "A picnic system: red gingham checks on filled cards, dialogs, tabs and switches, dividers stitched with wavy rickrack ribbon, avatars dressed like jam-jar lids with a pinked fabric cover, raised cards with a folded tablecloth corner, and a looping script for headings. Built for bakeries and recipe sites, farmers' markets, family events and summer menus.",
    keywords: ["gingham", "picnic", "homey", "cheerful"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,700&family=Quattrocento+Sans:ital,wght@0,400;0,700;1,400&family=Courier+Prime&display=swap",
  },
  color: {
    bg: "#fdf5ee",
    surface: "#fffdf9",
    surfaceAlt: "#f7e9de",
    text: "#2a1f1c",
    textMuted: "#62524c",
    border: "#ecd9cc",
    borderStrong: "#2a1f1c",
    primary: "#c22f3d",
    onPrimary: "#ffffff",
    accent: "#f3c44f",
    onAccent: "#2a1f1c",
    success: "#3b7b3a",
    warning: "#9a5a00",
    danger: "#a8202c",
    info: "#2e62a3",
    onStatus: "#ffffff",
    focus: "#2e62a3",
    overlay: "rgba(42, 31, 28, 0.5)",
  },
  type: {
    fontDisplay: '"Lobster Two", Georgia, cursive',
    fontBody: '"Quattrocento Sans", system-ui, sans-serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.6,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 700,
    trackingDisplay: "0em",
    trackingLabel: "0.02em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "6px",
    radiusMd: "10px",
    radiusLg: "16px",
    radiusControl: "999px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(120, 50, 40, 0.12)",
    shadowMd: "0 10px 24px -12px rgba(120, 50, 40, 0.25)",
    shadowLg: "0 26px 50px -20px rgba(120, 50, 40, 0.32)",
    shadowControl: "0 2px 0 rgba(120, 30, 40, 0.3)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "120ms",
    durationBase: "220ms",
    durationSlow: "380ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.3, 1.3, 0.5, 1)",
    pressScale: 0.96,
  },
});

export default gingham;

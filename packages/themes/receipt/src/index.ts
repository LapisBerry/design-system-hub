import { defineTheme } from "@dsh/core";

/** Receipt: a thermal till roll. Monospace everything, dotted leaders, torn zigzag edges and faded ink. */
export const receipt = defineTheme({
  meta: {
    id: "receipt",
    name: "Receipt",
    tagline: "Printed on a thermal till roll.",
    description:
      "A receipt system: warm-white thermal paper, slightly faded black ink, monospace everything, torn zigzag edges on panels, dotted leader lines, asterisk rules, inverted totals and barcode-striped progress. Fun for point-of-sale and ordering, budgeting and expense apps, restaurant menus, order confirmations and playful summaries.",
    keywords: ["receipt", "monospace", "thermal", "minimal"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Spline+Sans+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",
  },
  color: {
    bg: "#d9d6cf",
    surface: "#fbfaf6",
    surfaceAlt: "#f0eee8",
    text: "#1e1e1e",
    textMuted: "#555350",
    border: "#c9c6bf",
    borderStrong: "#1e1e1e",
    primary: "#1e1e1e",
    onPrimary: "#fbfaf6",
    accent: "#c4262e",
    onAccent: "#ffffff",
    success: "#2c6e3f",
    warning: "#86600a",
    danger: "#c4262e",
    info: "#2b4f86",
    onStatus: "#ffffff",
    focus: "#c4262e",
    overlay: "rgba(30, 30, 30, 0.4)",
  },
  type: {
    fontDisplay: '"Spline Sans Mono", ui-monospace, monospace',
    fontBody: '"Spline Sans Mono", ui-monospace, monospace',
    fontMono: '"Spline Sans Mono", ui-monospace, monospace',
    baseSize: 14,
    scaleRatio: 1.2,
    lineHeight: 1.6,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 700,
    trackingDisplay: "0.02em",
    trackingLabel: "0.08em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "0",
    radiusMd: "0",
    radiusLg: "0",
    radiusControl: "0",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 1px rgba(0, 0, 0, 0.1)",
    shadowMd: "0 6px 14px -8px rgba(0, 0, 0, 0.35)",
    shadowLg: "0 16px 30px -14px rgba(0, 0, 0, 0.45)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 30, controlMd: 36, controlLg: 44 },
  motion: {
    durationFast: "80ms",
    durationBase: "160ms",
    durationSlow: "600ms",
    easing: "steps(4)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.98,
  },
});

export default receipt;

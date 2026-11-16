import { defineTheme } from "@dsh/core";

/** Press. Letterpress: debossed ink on cotton paper, blind impressions (light only). */
export const press = defineTheme({
  meta: {
    id: "press",
    name: "Press",
    tagline: "Pressed into the paper, not printed on it.",
    description:
      "A letterpress system: thick cotton paper, type and buttons debossed into the sheet, blind impressions without ink for quiet controls, a high-contrast wedge serif for display over a classic Garamond, and one spot red. Built for invitations and weddings, stationers and print shops, wine and spirits, and refined personal sites.",
    keywords: ["letterpress", "tactile", "refined", "print"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Gloock&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Courier+Prime&display=swap",
  },
  color: {
    bg: "#f2ede3",
    surface: "#f8f4ec",
    surfaceAlt: "#ebe4d6",
    text: "#1f1d1a",
    textMuted: "#5a554d",
    border: "#d9d1c1",
    borderStrong: "#1f1d1a",
    primary: "#b22d2d",
    onPrimary: "#fff7ef",
    accent: "#2d5a3d",
    onAccent: "#ffffff",
    success: "#2d6a3d",
    warning: "#8a5a00",
    danger: "#a82424",
    info: "#2b4b8a",
    onStatus: "#ffffff",
    focus: "#2b4b8a",
    overlay: "rgba(31, 29, 26, 0.45)",
  },
  type: {
    fontDisplay: '"Gloock", Georgia, serif',
    fontBody: '"EB Garamond", Garamond, Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 17,
    scaleRatio: 1.333,
    lineHeight: 1.6,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "-0.01em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "1px",
    radiusMd: "2px",
    radiusLg: "2px",
    radiusControl: "2px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "inset 0 1px 1px rgba(0, 0, 0, 0.12)",
    shadowMd: "0 1px 1px rgba(60, 50, 30, 0.12), 0 6px 14px -8px rgba(60, 50, 30, 0.25)",
    shadowLg: "0 24px 48px -20px rgba(60, 50, 30, 0.4)",
    shadowControl: "inset 0 1px 2px rgba(0, 0, 0, 0.25)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "120ms",
    durationBase: "240ms",
    durationSlow: "480ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.99,
  },
});

export default press;

import { defineTheme } from "@dsh/core";

/** Codex. Illuminated manuscript: uncial hand, rubricated red, gold-leaf initials (light only). */
export const codex = defineTheme({
  meta: {
    id: "codex",
    name: "Codex",
    tagline: "Written by hand, lit in gold.",
    description:
      "An illuminated-manuscript system on warm vellum: an uncial display hand, big headings that open with a gold-leaf initial boxed in lapis blue, rubric red for actions, a knotwork interlace for dividers and pilcrows that mark alerts. Built for archives and museums, scripture and poetry apps, fantasy reading and heritage storytelling.",
    keywords: ["manuscript", "medieval", "gilded", "calligraphic"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Uncial+Antiqua&family=Cardo:ital,wght@0,400;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap",
  },
  color: {
    bg: "#f2e7ce",
    surface: "#faf3e0",
    surfaceAlt: "#ecdbb4",
    text: "#2a1d10",
    textMuted: "#5f4a30",
    border: "#dbc59a",
    borderStrong: "#2a1d10",
    primary: "#a3201c",
    onPrimary: "#fff8e8",
    accent: "#c89a2c",
    onAccent: "#2a1d10",
    success: "#3b6b2a",
    warning: "#8a5a00",
    danger: "#9c1a16",
    info: "#23507a",
    onStatus: "#fff8e8",
    focus: "#23507a",
    overlay: "rgba(42, 29, 16, 0.55)",
  },
  type: {
    fontDisplay: '"Uncial Antiqua", "Cardo", serif',
    fontBody: '"Cardo", Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 17,
    scaleRatio: 1.25,
    lineHeight: 1.6,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0.01em",
    trackingLabel: "0.04em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "2px",
    radiusMd: "3px",
    radiusLg: "4px",
    radiusControl: "3px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(70, 45, 15, 0.15)",
    shadowMd: "0 10px 24px -12px rgba(70, 45, 15, 0.3)",
    shadowLg: "0 26px 50px -20px rgba(70, 45, 15, 0.4)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 50 },
  motion: {
    durationFast: "120ms",
    durationBase: "240ms",
    durationSlow: "420ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.7, 0.2, 1)",
    pressScale: 0.98,
  },
});

export default codex;

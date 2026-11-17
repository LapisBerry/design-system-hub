import { defineTheme } from "@dsh/core";

/** Hoop. Cross-stitch: aida cloth, X-stitch borders, embroidery-hoop avatars (light only). */
export const hoop = defineTheme({
  meta: {
    id: "hoop",
    name: "Hoop",
    tagline: "One cross at a time.",
    description:
      "A cross-stitch system on aida cloth: a fine woven grid behind the page, borders and dividers made of rows of little X stitches in raspberry and teal thread, avatars framed in a wooden embroidery hoop, checkboxes that fill with a stitched X and progress that fills stitch by stitch. Built for craft and hobby shops, pattern libraries, family apps and cosy games.",
    keywords: ["cross-stitch", "craft", "cosy", "handmade"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Cherry+Swash:wght@400;700&family=Asap:wght@400;500;600;700&family=Cutive+Mono&display=swap",
  },
  color: {
    bg: "#f5efe3",
    surface: "#fffcf5",
    surfaceAlt: "#efe6d4",
    text: "#2b2320",
    textMuted: "#5f5249",
    border: "#e0d5c0",
    borderStrong: "#2b2320",
    primary: "#b8325a",
    onPrimary: "#ffffff",
    accent: "#2b8a7e",
    onAccent: "#ffffff",
    success: "#3f7d3a",
    warning: "#9a5d00",
    danger: "#b0281f",
    info: "#2f5f9e",
    onStatus: "#ffffff",
    focus: "#2b8a7e",
    overlay: "rgba(43, 35, 32, 0.5)",
  },
  type: {
    fontDisplay: '"Cherry Swash", "Asap", serif',
    fontBody: '"Asap", system-ui, sans-serif',
    fontMono: '"Cutive Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0em",
    trackingLabel: "0.02em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "4px",
    radiusMd: "6px",
    radiusLg: "10px",
    radiusControl: "8px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(80, 55, 30, 0.12)",
    shadowMd: "0 10px 24px -12px rgba(80, 55, 30, 0.25)",
    shadowLg: "0 26px 50px -20px rgba(80, 55, 30, 0.32)",
    shadowControl: "0 2px 0 rgba(43, 35, 32, 0.18)",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 50 },
  motion: {
    durationFast: "120ms",
    durationBase: "220ms",
    durationSlow: "380ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.25, 1.2, 0.5, 1)",
    pressScale: 0.97,
  },
});

export default hoop;

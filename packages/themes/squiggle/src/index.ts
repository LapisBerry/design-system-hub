import { defineTheme } from "@dsh/core";

/** Squiggle: 1980s Memphis design. Confetti shapes, wavy underlines, clashing pastels with black outlines. */
export const squiggle = defineTheme({
  meta: {
    id: "squiggle",
    name: "Squiggle",
    tagline: "Confetti, zigzags and a squiggle under every title.",
    description:
      "A Memphis-style system: cobalt, bubblegum pink and lemon on cream, black outlines, wavy squiggle underlines, confetti-scattered backgrounds and color-blocked offset shadows filled with dots and stripes. Great for creative studios, event and party brands, education, playful marketing sites and design-forward consumer apps.",
    keywords: ["memphis", "80s", "playful", "pattern"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Righteous&family=Poppins:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap",
  },
  color: {
    bg: "#fff7ec",
    surface: "#ffffff",
    surfaceAlt: "#fff0dc",
    text: "#17171c",
    textMuted: "#4d4d58",
    border: "#17171c",
    borderStrong: "#17171c",
    primary: "#3140d4",
    onPrimary: "#ffffff",
    accent: "#ff6fae",
    onAccent: "#17171c",
    success: "#0f8f78",
    warning: "#b77b00",
    danger: "#e0353b",
    info: "#3140d4",
    onStatus: "#ffffff",
    focus: "#00a3a3",
    overlay: "rgba(23, 23, 28, 0.45)",
  },
  type: {
    fontDisplay: '"Righteous", "Poppins", system-ui, sans-serif',
    fontBody: '"Poppins", system-ui, sans-serif',
    fontMono: '"Fira Code", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.3,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "0.01em",
    trackingLabel: "0.04em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "6px",
    radiusMd: "10px",
    radiusLg: "16px",
    radiusControl: "999px",
    borderWidth: "2px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "3px 3px 0 0 #ffd23f",
    shadowMd: "6px 6px 0 0 #ffd23f, 6px 6px 0 2px #17171c",
    shadowLg: "9px 9px 0 0 #ff6fae, 9px 9px 0 2px #17171c",
    shadowControl: "3px 3px 0 0 #17171c",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "120ms",
    durationBase: "220ms",
    durationSlow: "380ms",
    easing: "cubic-bezier(0.3, 1.4, 0.6, 1)",
    easingEnter: "cubic-bezier(0.2, 1.6, 0.4, 1)",
    pressScale: 0.95,
  },
});

export default squiggle;

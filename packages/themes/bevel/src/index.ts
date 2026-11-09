import { defineTheme } from "@dsh/core";

/** Bevel: a 1990s desktop. Gray beveled chrome, sunken fields, navy title bars on a teal desktop. */
export const bevel = defineTheme({
  meta: {
    id: "bevel",
    name: "Bevel",
    tagline: "Raised buttons, sunken fields, a teal desktop.",
    description:
      "A retro desktop system: light gray chrome with crisp raised and sunken bevels, navy title bars with window controls, dotted focus rectangles and chunky block progress bars, all on a teal desktop. Good for nostalgic games, internal tools with a sense of humor, portfolios and retro web toys.",
    keywords: ["retro", "desktop", "90s", "beveled"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Noto+Sans+Mono:wght@400;700&display=swap",
  },
  color: {
    bg: "#3aa6a6",
    surface: "#c6c6c6",
    surfaceAlt: "#b4b4b4",
    text: "#000000",
    textMuted: "#3b3b3b",
    border: "#7b7b7b",
    borderStrong: "#000000",
    primary: "#000080",
    onPrimary: "#ffffff",
    accent: "#ffff00",
    onAccent: "#000000",
    success: "#006b00",
    warning: "#7a5a00",
    danger: "#b00000",
    info: "#00007a",
    onStatus: "#ffffff",
    focus: "#000000",
    overlay: "rgba(0, 40, 40, 0.35)",
  },
  type: {
    fontDisplay: '"Noto Sans", Tahoma, Verdana, sans-serif',
    fontBody: '"Noto Sans", Tahoma, Verdana, sans-serif',
    fontMono: '"Noto Sans Mono", "Courier New", monospace',
    baseSize: 14,
    scaleRatio: 1.2,
    lineHeight: 1.45,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 700,
    trackingDisplay: "0",
    trackingLabel: "0",
    labelCase: "none",
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
    shadowSm: "inset -1px -1px #000, inset 1px 1px #fff, inset -2px -2px #7b7b7b, inset 2px 2px #e4e4e4",
    shadowMd: "inset -1px -1px #000, inset 1px 1px #e4e4e4, inset -2px -2px #7b7b7b, inset 2px 2px #fff",
    shadowLg: "inset -1px -1px #000, inset 1px 1px #e4e4e4, inset -2px -2px #7b7b7b, inset 2px 2px #fff, 4px 4px 0 rgba(0, 0, 0, 0.35)",
    shadowControl: "inset -1px -1px #000, inset 1px 1px #fff, inset -2px -2px #7b7b7b, inset 2px 2px #e4e4e4",
  },
  space: { unit: 4, controlSm: 26, controlMd: 32, controlLg: 40 },
  motion: {
    durationFast: "0ms",
    durationBase: "0ms",
    durationSlow: "0ms",
    easing: "steps(1)",
    easingEnter: "steps(1)",
    pressScale: 1,
  },
});

export default bevel;

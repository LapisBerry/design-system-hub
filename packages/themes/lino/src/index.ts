import { defineTheme } from "@dsh/core";

/** Lino. Linocut print: gouge-mark hatching, rough carved edges, black and red ink (light only). */
export const lino = defineTheme({
  meta: {
    id: "lino",
    name: "Lino",
    tagline: "Carved by hand, pulled by hand.",
    description:
      "A linocut-print system on cream paper: shapes have rough hand-carved edges, fills carry the speckle of a hand-inked block, tracks and quiet surfaces are covered in gouge-mark hatching, dividers are carved wavy lines and the second ink is a warm red. A gritty display face over a sturdy book serif. Built for bookshops, breweries, folk music, makers' markets and craft festivals.",
    keywords: ["linocut", "printmaking", "rough", "folk"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Rubik+Dirt&family=Vollkorn:ital,wght@0,400;0,600;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap",
  },
  color: {
    bg: "#f0e8d6",
    surface: "#f7f1e3",
    surfaceAlt: "#e8dcc3",
    text: "#16120d",
    textMuted: "#4f4535",
    border: "#d3c3a2",
    borderStrong: "#16120d",
    primary: "#16120d",
    onPrimary: "#f7f1e3",
    accent: "#c8321e",
    onAccent: "#ffffff",
    success: "#3f6b2c",
    warning: "#8f5300",
    danger: "#b0261a",
    info: "#1f4f7a",
    onStatus: "#ffffff",
    focus: "#c8321e",
    overlay: "rgba(22, 18, 13, 0.55)",
  },
  type: {
    fontDisplay: '"Rubik Dirt", "Vollkorn", sans-serif',
    fontBody: '"Vollkorn", Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 17,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0em",
    trackingLabel: "0.08em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "2px",
    radiusMd: "3px",
    radiusLg: "4px",
    radiusControl: "3px",
    borderWidth: "2px",
    borderWidthStrong: "3px",
  },
  elevation: {
    shadowSm: "none",
    shadowMd: "none",
    shadowLg: "0 18px 40px -20px rgba(22, 18, 13, 0.45)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 50 },
  motion: {
    durationFast: "90ms",
    durationBase: "160ms",
    durationSlow: "280ms",
    easing: "steps(3, end)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default lino;

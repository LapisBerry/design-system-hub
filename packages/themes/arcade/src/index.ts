import { defineTheme } from "@dsh/core";

/** Arcade: 8-bit pixel art. Stepped corners, a bright palette on midnight blue, chunky pixel type. */
export const arcade = defineTheme({
  meta: {
    id: "arcade",
    name: "Arcade",
    tagline: "Insert coin. Press start.",
    description:
      "An 8-bit system with stepped pixel corners, a saturated cabinet palette on midnight blue, pixel fonts for headings and buttons that drop into the screen when pressed. Built for games, game jams, streaming overlays, fan sites and playful side projects.",
    keywords: ["pixel", "8-bit", "game", "retro"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Pixelify+Sans:wght@400;500;600;700&family=Silkscreen&display=swap",
  },
  color: {
    bg: "#14112b",
    surface: "#1f1a44",
    surfaceAlt: "#2b2560",
    text: "#f4f1ff",
    textMuted: "#b7b0e6",
    border: "#3f378a",
    borderStrong: "#f4f1ff",
    primary: "#ffcf3f",
    onPrimary: "#14112b",
    accent: "#3ee0ff",
    onAccent: "#14112b",
    success: "#5cf08a",
    warning: "#ffa53f",
    danger: "#ff5c7a",
    info: "#3ee0ff",
    onStatus: "#14112b",
    focus: "#ff5c7a",
    overlay: "rgba(8, 6, 24, 0.75)",
  },
  type: {
    fontDisplay: '"Press Start 2P", "Pixelify Sans", ui-monospace, monospace',
    fontBody: '"Pixelify Sans", ui-monospace, monospace',
    fontMono: '"Silkscreen", ui-monospace, monospace',
    baseSize: 17,
    scaleRatio: 1.25,
    lineHeight: 1.45,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "0",
    trackingLabel: "0.04em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "0",
    radiusMd: "0",
    radiusLg: "0",
    radiusControl: "0",
    borderWidth: "4px",
    borderWidthStrong: "4px",
  },
  elevation: {
    shadowSm: "4px 4px 0 0 #000000",
    shadowMd: "6px 6px 0 0 #000000",
    shadowLg: "10px 10px 0 0 #000000",
    shadowControl: "inset -4px -4px 0 0 rgba(0, 0, 0, 0.35), inset 4px 4px 0 0 rgba(255, 255, 255, 0.35)",
  },
  space: { unit: 4, controlSm: 36, controlMd: 44, controlLg: 56 },
  motion: {
    durationFast: "80ms",
    durationBase: "120ms",
    durationSlow: "200ms",
    easing: "steps(2, end)",
    easingEnter: "steps(4, end)",
    pressScale: 1,
  },
});

export default arcade;

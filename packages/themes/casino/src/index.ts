import { defineTheme } from "@dsh/core";

/** Casino. Card table: green baize, poker-chip avatars, playing-card corners, gold (dark only). */
export const casino = defineTheme({
  meta: {
    id: "casino",
    name: "Casino",
    tagline: "The house always looks good.",
    description:
      "A card-table system on green baize: raised cards carry playing-card corner indices and a gold inner frame, avatars are poker chips with striped edge spots, the spinner is a roulette wheel, dividers end in a gold diamond and every label is set in tracked small caps. Built for card and board games, trivia and quiz nights, sweepstakes and game-night apps.",
    keywords: ["casino", "cards", "felt", "gold"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Playfair+Display+SC:wght@400;700;900&family=Raleway:wght@400;500;600;700&family=Fragment+Mono&display=swap",
  },
  color: {
    bg: "#0b3b2a",
    surface: "#0f4a35",
    surfaceAlt: "#145a41",
    text: "#f6f1e1",
    textMuted: "#c3d6c9",
    border: "#1e6c50",
    borderStrong: "#d4af37",
    primary: "#d4af37",
    onPrimary: "#0b2a1e",
    accent: "#c8102e",
    onAccent: "#ffffff",
    success: "#7fe0a6",
    warning: "#ffd166",
    danger: "#ff7b7b",
    info: "#9ccbff",
    onStatus: "#0b2a1e",
    focus: "#ffd166",
    overlay: "rgba(0, 0, 0, 0.65)",
  },
  type: {
    fontDisplay: '"Playfair Display SC", Georgia, serif',
    fontBody: '"Raleway", system-ui, sans-serif',
    fontMono: '"Fragment Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0.02em",
    trackingLabel: "0.1em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "4px",
    radiusMd: "8px",
    radiusLg: "12px",
    radiusControl: "8px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.45)",
    shadowMd: "0 10px 24px -12px rgba(0, 0, 0, 0.7)",
    shadowLg: "0 26px 50px -20px rgba(0, 0, 0, 0.85)",
    shadowControl: "0 2px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 50 },
  motion: {
    durationFast: "120ms",
    durationBase: "220ms",
    durationSlow: "420ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default casino;

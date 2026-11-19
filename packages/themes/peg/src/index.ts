import { defineTheme } from "@dsh/core";

/** Peg. Felt letter board: ribbed felt, white plastic letters, an oak frame (dark only). */
export const peg = defineTheme({
  meta: {
    id: "peg",
    name: "Peg",
    tagline: "Today's special: you.",
    description:
      "A felt letter-board system: ribbed black felt behind everything, headings and buttons set in white plastic letters that sit in the grooves with a little drop shadow, raised cards in an oak frame, badges like spare letter tiles and dividers that are just one more groove. Built for cafes and menu boards, announcements, event boards and in-store signage.",
    keywords: ["letterboard", "felt", "signage", "casual"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=League+Gothic&family=Sarabun:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Roboto+Mono:wght@400;500&display=swap",
  },
  color: {
    bg: "#121212",
    surface: "#1c1c1c",
    surfaceAlt: "#272727",
    text: "#f5f5f2",
    textMuted: "#b8b8b2",
    border: "#333333",
    borderStrong: "#c49a6c",
    primary: "#f5f5f2",
    onPrimary: "#121212",
    accent: "#ff6f91",
    onAccent: "#121212",
    success: "#7fdc8f",
    warning: "#ffd166",
    danger: "#ff6b6b",
    info: "#7fb7ff",
    onStatus: "#121212",
    focus: "#ffd166",
    overlay: "rgba(0, 0, 0, 0.72)",
  },
  type: {
    fontDisplay: '"League Gothic", "Sarabun", sans-serif',
    fontBody: '"Sarabun", system-ui, sans-serif',
    fontMono: '"Roboto Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.3,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "0.06em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "2px",
    radiusMd: "3px",
    radiusLg: "4px",
    radiusControl: "2px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.6)",
    shadowMd: "0 10px 24px -12px rgba(0, 0, 0, 0.85)",
    shadowLg: "0 26px 50px -20px rgba(0, 0, 0, 0.95)",
    shadowControl: "0 2px 0 rgba(0, 0, 0, 0.8)",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 50 },
  motion: {
    durationFast: "90ms",
    durationBase: "170ms",
    durationSlow: "300ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default peg;

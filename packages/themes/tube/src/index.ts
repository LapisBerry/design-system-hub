import { defineTheme } from "@dsh/core";

/** Tube: neon signs on a brick wall. Glowing glass tubes in pink and cyan that flicker on. */
export const tube = defineTheme({
  meta: {
    id: "tube",
    name: "Tube",
    tagline: "Bent glass, buzzing pink, a brick wall at midnight.",
    description:
      "A neon-sign system: glowing glass-tube outlines in hot pink and ice cyan against a dark brick wall, headlines that flicker on, and controls that light up when you touch them. Built for bars and venues, nightlife and events, streaming overlays, music apps and late-night brands.",
    keywords: ["neon", "glow", "nightlife", "signage"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Tilt+Neon&family=Outfit:wght@300;400;500;600;700&family=Ubuntu+Mono&display=swap",
  },
  color: {
    bg: "#120f14",
    surface: "#1b171e",
    surfaceAlt: "#241f28",
    text: "#f7eefa",
    textMuted: "#b9a9c2",
    border: "#342b3a",
    borderStrong: "#56485f",
    primary: "#ff4fae",
    onPrimary: "#16020c",
    accent: "#40f2ff",
    onAccent: "#021417",
    success: "#6cff7a",
    warning: "#ffd23f",
    danger: "#ff5a5a",
    info: "#40f2ff",
    onStatus: "#120f14",
    focus: "#40f2ff",
    overlay: "rgba(5, 3, 7, 0.75)",
  },
  type: {
    fontDisplay: '"Tilt Neon", "Outfit", system-ui, sans-serif',
    fontBody: '"Outfit", system-ui, sans-serif',
    fontMono: '"Ubuntu Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.3,
    lineHeight: 1.55,
    weightBody: 300,
    weightStrong: 500,
    weightDisplay: 400,
    trackingDisplay: "0.02em",
    trackingLabel: "0.08em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "8px",
    radiusMd: "14px",
    radiusLg: "22px",
    radiusControl: "999px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 2px 10px -4px rgba(0, 0, 0, 0.8)",
    shadowMd: "0 14px 34px -14px rgba(0, 0, 0, 0.9)",
    shadowLg: "0 0 0 1px rgba(255, 79, 174, 0.4), 0 0 30px -6px rgba(255, 79, 174, 0.5), 0 24px 50px -16px rgba(0, 0, 0, 0.9)",
    shadowControl: "0 0 16px -4px rgba(255, 79, 174, 0.8)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "120ms",
    durationBase: "240ms",
    durationSlow: "600ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default tube;

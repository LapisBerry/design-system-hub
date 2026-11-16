import { defineTheme } from "@dsh/core";

/** Acid. Blacklight rave: acid lime and UV violet, marching-ant borders (dark only). */
export const acid = defineTheme({
  meta: {
    id: "acid",
    name: "Acid",
    tagline: "Lights down, blacklights on.",
    description:
      "A blacklight rave system: acid lime and ultraviolet glowing on black, extended capitals with outlined echoes, marching-ant borders, stickers slapped on at angles and strobe-stepped motion. Built for club nights and festivals, music releases, streetwear drops and high-energy streaming overlays.",
    keywords: ["rave", "blacklight", "loud", "underground"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Rubik+Mono+One&family=Bai+Jamjuree:wght@400;500;600;700&family=Syne+Mono&display=swap",
  },
  color: {
    bg: "#0b0612",
    surface: "#140c20",
    surfaceAlt: "#1d1230",
    text: "#f5f2ff",
    textMuted: "#b6a8d6",
    border: "#2e1f4a",
    borderStrong: "#c6ff00",
    primary: "#c6ff00",
    onPrimary: "#0b0612",
    accent: "#b44bff",
    onAccent: "#0b0612",
    success: "#3dff9a",
    warning: "#ffe14a",
    danger: "#ff3d7f",
    info: "#4ae0ff",
    onStatus: "#0b0612",
    focus: "#ff3df5",
    overlay: "rgba(5, 2, 10, 0.78)",
  },
  type: {
    fontDisplay: '"Rubik Mono One", "Bai Jamjuree", sans-serif',
    fontBody: '"Bai Jamjuree", system-ui, sans-serif',
    fontMono: '"Syne Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.4,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "-0.02em",
    trackingLabel: "0.1em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "0px",
    radiusMd: "0px",
    radiusLg: "0px",
    radiusControl: "0px",
    borderWidth: "2px",
    borderWidthStrong: "3px",
  },
  elevation: {
    shadowSm: "0 0 8px rgba(198, 255, 0, 0.25)",
    shadowMd: "0 0 0 1px rgba(198, 255, 0, 0.3), 0 0 30px -6px rgba(180, 75, 255, 0.5)",
    shadowLg: "0 0 60px -10px rgba(180, 75, 255, 0.6)",
    shadowControl: "0 0 16px rgba(198, 255, 0, 0.45)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "50ms",
    durationBase: "100ms",
    durationSlow: "200ms",
    easing: "cubic-bezier(0.9, 0, 0.1, 1)",
    easingEnter: "steps(4, end)",
    pressScale: 0.94,
  },
});

export default acid;

import { defineTheme } from "@dsh/core";

/** Phosphor: a CRT terminal. Green glow on black, monospace everything, instant motion. */
export const phosphor = defineTheme({
  meta: {
    id: "phosphor",
    name: "Phosphor",
    tagline: "Green glow on a cathode screen.",
    description:
      "A retro terminal system: monospace type, glowing phosphor green with amber highlights, scanlines and bracketed buttons. Built for developer tools, dashboards, CLIs on the web, hacker-themed games and status pages.",
    keywords: ["terminal", "retro", "mono"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=VT323&display=swap",
  },
  color: {
    bg: "#050d07",
    surface: "#08150c",
    surfaceAlt: "#0f2416",
    text: "#c3f5cf",
    textMuted: "#78b487",
    border: "#1d4a2a",
    borderStrong: "#2f7a45",
    primary: "#3dff7e",
    onPrimary: "#03140a",
    accent: "#ffb000",
    onAccent: "#1a1100",
    success: "#3dff7e",
    warning: "#ffb000",
    danger: "#ff5f56",
    info: "#5fd7ff",
    onStatus: "#03140a",
    focus: "#ffb000",
    overlay: "rgba(0, 6, 2, 0.78)",
  },
  type: {
    fontDisplay: '"VT323", "JetBrains Mono", ui-monospace, monospace',
    fontBody: '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
    fontMono: '"JetBrains Mono", ui-monospace, monospace',
    baseSize: 14,
    scaleRatio: 1.333,
    lineHeight: 1.6,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0.01em",
    trackingLabel: "0.06em",
    labelCase: "uppercase",
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
    shadowSm: "0 0 0 1px rgba(61, 255, 126, 0.12)",
    shadowMd: "0 0 0 1px #1d4a2a, 0 0 28px -6px rgba(61, 255, 126, 0.28)",
    shadowLg: "0 0 0 1px #2f7a45, 0 0 56px -8px rgba(61, 255, 126, 0.4)",
    shadowControl: "0 0 18px -4px rgba(61, 255, 126, 0.7)",
  },
  space: { unit: 4, controlSm: 30, controlMd: 36, controlLg: 44 },
  motion: {
    durationFast: "60ms",
    durationBase: "100ms",
    durationSlow: "180ms",
    easing: "steps(3, end)",
    easingEnter: "steps(4, end)",
    pressScale: 1,
  },
});

export default phosphor;

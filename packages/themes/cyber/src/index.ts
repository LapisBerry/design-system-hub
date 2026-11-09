import { defineTheme } from "@dsh/core";

/** Cyber: a sci-fi HUD. Angled cut corners, hazard yellow on cold black, scan lines and a glitch on hover. */
export const cyber = defineTheme({
  meta: {
    id: "cyber",
    name: "Cyber",
    tagline: "Hazard yellow on a heads-up display.",
    description:
      "A sci-fi interface system: chamfered 45-degree corners, hazard yellow and cold cyan on near-black, a squared techno face, bracketed readouts and a quick glitch when you hover. Built for games, esports, crypto and hardware dashboards, and anything that should feel like a cockpit.",
    keywords: ["sci-fi", "hud", "angular", "neon"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Oxanium:wght@500;600;700;800&family=Chakra+Petch:wght@400;500;600;700&family=Share+Tech+Mono&display=swap",
  },
  color: {
    bg: "#0a0b0d",
    surface: "#121418",
    surfaceAlt: "#1a1d23",
    text: "#e9edf2",
    textMuted: "#8e98a5",
    border: "#262b33",
    borderStrong: "#3d4652",
    primary: "#f7e733",
    onPrimary: "#0a0b0d",
    accent: "#21e6f2",
    onAccent: "#0a0b0d",
    success: "#3dff9a",
    warning: "#ff9f1c",
    danger: "#ff2a6d",
    info: "#21e6f2",
    onStatus: "#0a0b0d",
    focus: "#21e6f2",
    overlay: "rgba(0, 0, 0, 0.75)",
  },
  type: {
    fontDisplay: '"Oxanium", "Chakra Petch", system-ui, sans-serif',
    fontBody: '"Chakra Petch", system-ui, sans-serif',
    fontMono: '"Share Tech Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.3,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0.01em",
    trackingLabel: "0.12em",
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
    shadowSm: "none",
    shadowMd: "0 0 0 1px rgba(247, 231, 51, 0.08), 0 20px 40px -20px rgba(0, 0, 0, 1)",
    shadowLg: "0 0 0 1px rgba(33, 230, 242, 0.25), 0 0 40px -10px rgba(33, 230, 242, 0.35)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 48 },
  motion: {
    durationFast: "90ms",
    durationBase: "160ms",
    durationSlow: "260ms",
    easing: "cubic-bezier(0.7, 0, 0.3, 1)",
    easingEnter: "cubic-bezier(0.1, 0.9, 0.2, 1)",
    pressScale: 0.98,
  },
});

export default cyber;

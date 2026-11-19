import { defineTheme } from "@dsh/core";

/** Thermal. Thermal camera: ironbow heat gradients, heat blooms, temperature scales (dark only). */
export const thermal = defineTheme({
  meta: {
    id: "thermal",
    name: "Thermal",
    tagline: "See what's running hot.",
    description:
      "A thermal-camera system: the ironbow palette runs from cold violet through red and orange to white-hot, filling progress, sliders and dividers, raised cards carry a temperature-scale strip down one edge, interactive cards bloom with heat and show a spot-meter crosshair on hover, and avatars glow like heat signatures. Built for energy and climate data, sensors and building monitoring, fitness and inspection tools.",
    keywords: ["thermal", "heat", "data", "glowing"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Azeret+Mono:wght@400;500&display=swap",
  },
  color: {
    bg: "#07060d",
    surface: "#110f1c",
    surfaceAlt: "#1b1830",
    text: "#f4f2ff",
    textMuted: "#ada8c8",
    border: "#2a2547",
    borderStrong: "#ff9f1c",
    primary: "#ffb627",
    onPrimary: "#07060d",
    accent: "#ff4d6d",
    onAccent: "#07060d",
    success: "#7ee081",
    warning: "#ffd23f",
    danger: "#ff3b3b",
    info: "#5ec8ff",
    onStatus: "#07060d",
    focus: "#ffffff",
    overlay: "rgba(0, 0, 0, 0.75)",
  },
  type: {
    fontDisplay: '"Exo 2", system-ui, sans-serif',
    fontBody: '"Exo 2", system-ui, sans-serif',
    fontMono: '"Azeret Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 800,
    trackingDisplay: "-0.01em",
    trackingLabel: "0.08em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "3px",
    radiusMd: "6px",
    radiusLg: "10px",
    radiusControl: "6px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.6)",
    shadowMd: "0 10px 24px -12px rgba(0, 0, 0, 0.9)",
    shadowLg: "0 26px 50px -20px rgba(0, 0, 0, 0.95)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 50 },
  motion: {
    durationFast: "100ms",
    durationBase: "220ms",
    durationSlow: "420ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default thermal;

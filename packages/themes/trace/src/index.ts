import { defineTheme } from "@dsh/core";

/** Trace. Circuit board: solder-mask green, copper traces, silkscreen labels (dark only). */
export const trace = defineTheme({
  meta: {
    id: "trace",
    name: "Trace",
    tagline: "Copper on green, labelled in silkscreen.",
    description:
      "A printed-circuit system: solder-mask green with routed copper traces in the background, gold-plated pads for buttons, through-hole rings for radios, chip-package avatars and white silkscreen capitals with reference designators. Built for electronics and maker tools, IoT dashboards, hardware startups and engineering education.",
    keywords: ["pcb", "electronics", "technical", "maker"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=B612:wght@400;700&family=B612+Mono:wght@400;700&display=swap",
  },
  color: {
    bg: "#0a2418",
    surface: "#0f3122",
    surfaceAlt: "#154030",
    text: "#f2f7f0",
    textMuted: "#a8c4b2",
    border: "#1f5a40",
    borderStrong: "#c58b3c",
    primary: "#e0a458",
    onPrimary: "#1a0f02",
    accent: "#f2f7f0",
    onAccent: "#0a2418",
    success: "#6fe39a",
    warning: "#f5c84a",
    danger: "#ff6b5a",
    info: "#7cc8ff",
    onStatus: "#0a2418",
    focus: "#f5d06b",
    overlay: "rgba(0, 10, 5, 0.7)",
  },
  type: {
    fontDisplay: '"B612", system-ui, sans-serif',
    fontBody: '"B612", system-ui, sans-serif',
    fontMono: '"B612 Mono", ui-monospace, monospace',
    baseSize: 14,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 700,
    trackingDisplay: "0.02em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "2px",
    radiusMd: "4px",
    radiusLg: "6px",
    radiusControl: "4px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 0 0 1px rgba(0, 0, 0, 0.3)",
    shadowMd: "0 10px 24px -12px rgba(0, 0, 0, 0.7)",
    shadowLg: "0 24px 50px -20px rgba(0, 0, 0, 0.8)",
    shadowControl: "inset 0 -2px 0 rgba(0, 0, 0, 0.25)",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 48 },
  motion: {
    durationFast: "60ms",
    durationBase: "120ms",
    durationSlow: "220ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.1, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default trace;

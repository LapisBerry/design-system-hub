import { defineTheme } from "@dsh/core";

/** Flap. Split-flap departure board: tiles with a hinge line, flip-in motion (dark only). */
export const flap = defineTheme({
  meta: {
    id: "flap",
    name: "Flap",
    tagline: "Now boarding.",
    description:
      "A departures-board system: charcoal split-flap tiles with a hinge line through the middle, bright board-yellow and white characters in tall condensed capitals, segmented progress cells and panels that flip into place. Built for travel and transport, event schedules, queues and status boards, sports results and glanceable dashboards.",
    keywords: ["split-flap", "schedule", "mechanical", "glanceable"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@600;700;800;900&family=Instrument+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
  },
  color: {
    bg: "#111214",
    surface: "#1a1b1e",
    surfaceAlt: "#232428",
    text: "#f2f2ee",
    textMuted: "#a6a7a2",
    border: "#2c2d31",
    borderStrong: "#5a5b60",
    primary: "#ffd23a",
    onPrimary: "#111214",
    accent: "#f2f2ee",
    onAccent: "#111214",
    success: "#4fd683",
    warning: "#ffb43a",
    danger: "#ff5c4d",
    info: "#6fb6ff",
    onStatus: "#111214",
    focus: "#ffd23a",
    overlay: "rgba(0, 0, 0, 0.72)",
  },
  type: {
    fontDisplay: '"Big Shoulders Display", "Arial Narrow", sans-serif',
    fontBody: '"Instrument Sans", system-ui, sans-serif',
    fontMono: '"JetBrains Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.3,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 800,
    trackingDisplay: "0.04em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "3px",
    radiusMd: "4px",
    radiusLg: "6px",
    radiusControl: "3px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 0 rgba(0, 0, 0, 0.6)",
    shadowMd: "0 2px 0 #000000, 0 12px 24px -12px rgba(0, 0, 0, 0.8)",
    shadowLg: "0 30px 60px -20px rgba(0, 0, 0, 0.9)",
    shadowControl: "inset 0 -1px 0 rgba(0, 0, 0, 0.5), 0 1px 0 rgba(0, 0, 0, 0.6)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "80ms",
    durationBase: "160ms",
    durationSlow: "300ms",
    easing: "cubic-bezier(0.55, 0, 0.45, 1)",
    easingEnter: "cubic-bezier(0.3, 1.4, 0.6, 1)",
    pressScale: 0.98,
  },
});

export default flap;

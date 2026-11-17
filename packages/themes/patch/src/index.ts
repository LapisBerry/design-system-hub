import { defineTheme } from "@dsh/core";

/** Patch. Modular synth: patch cables, jack sockets, knobs and LEDs on black panels (dark only). */
export const patch = defineTheme({
  meta: {
    id: "patch",
    name: "Patch",
    tagline: "Patch it in and turn it up.",
    description:
      "A modular-synth system: black anodized panels with silkscreen labels and status LEDs, dividers drawn as sagging patch cables with plugs on each end, radio buttons and avatars as jack sockets, slider thumbs as knurled knobs with a pointer line and a spinner that turns like a knob. Cable orange and cyan on black. Built for audio and music tools, creative coding, node editors and lab software.",
    keywords: ["synth", "modular", "hardware", "patchable"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Antonio:wght@500;600;700&family=Sofia+Sans:wght@400;500;600;700&family=Kode+Mono:wght@400;500&display=swap",
  },
  color: {
    bg: "#0e0f11",
    surface: "#1d1f23",
    surfaceAlt: "#292c32",
    text: "#eceef1",
    textMuted: "#a3a8b1",
    border: "#34373e",
    borderStrong: "#6b7079",
    primary: "#ffb020",
    onPrimary: "#0e0f11",
    accent: "#35d0e0",
    onAccent: "#0e0f11",
    success: "#6be08a",
    warning: "#ffd23f",
    danger: "#ff5a5f",
    info: "#5ab0ff",
    onStatus: "#0e0f11",
    focus: "#35d0e0",
    overlay: "rgba(0, 0, 0, 0.72)",
  },
  type: {
    fontDisplay: '"Antonio", "Sofia Sans", sans-serif',
    fontBody: '"Sofia Sans", system-ui, sans-serif',
    fontMono: '"Kode Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.22,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0.04em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "2px",
    radiusMd: "3px",
    radiusLg: "4px",
    radiusControl: "3px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.6)",
    shadowMd: "0 1px 0 rgba(255, 255, 255, 0.05) inset, 0 10px 24px -12px rgba(0, 0, 0, 0.9)",
    shadowLg: "0 1px 0 rgba(255, 255, 255, 0.06) inset, 0 26px 50px -20px rgba(0, 0, 0, 0.95)",
    shadowControl: "0 2px 0 rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
  },
  space: { unit: 4, controlSm: 30, controlMd: 38, controlLg: 48 },
  motion: {
    durationFast: "70ms",
    durationBase: "150ms",
    durationSlow: "280ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    pressScale: 0.97,
  },
});

export default patch;

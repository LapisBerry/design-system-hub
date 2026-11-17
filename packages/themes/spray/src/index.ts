import { defineTheme } from "@dsh/core";

/** Spray. Graffiti: overspray halos, paint drips, splat avatars on a night wall (dark only). */
export const spray = defineTheme({
  meta: {
    id: "spray",
    name: "Spray",
    tagline: "Tag it before sunrise.",
    description:
      "A graffiti system on a night wall: solid shapes have the fuzzy halo of a spray can, headings are tags with drips running off them, buttons drip on hover, avatars are paint splats and dividers are a single sprayed stroke. Hot pink, cyan and caution yellow over a tagger's hand and a wide grotesk. Built for streetwear, skate and music scenes, youth campaigns and events.",
    keywords: ["graffiti", "street", "loud", "drippy"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Sedgwick+Ave+Display&family=Anybody:wdth,wght@75..150,400..800&family=Space+Mono:wght@400;700&display=swap",
  },
  color: {
    bg: "#17171a",
    surface: "#202024",
    surfaceAlt: "#2b2b31",
    text: "#f4f4f0",
    textMuted: "#b4b4ad",
    border: "#37373e",
    borderStrong: "#f4f4f0",
    primary: "#ff3d8b",
    onPrimary: "#17171a",
    accent: "#2ee6ff",
    onAccent: "#17171a",
    success: "#63e68a",
    warning: "#ffd23d",
    danger: "#ff5c4d",
    info: "#6fb2ff",
    onStatus: "#17171a",
    focus: "#ffd23d",
    overlay: "rgba(0, 0, 0, 0.72)",
  },
  type: {
    fontDisplay: '"Sedgwick Ave Display", "Anybody", cursive',
    fontBody: '"Anybody", system-ui, sans-serif',
    fontMono: '"Space Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.28,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0.01em",
    trackingLabel: "0.04em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "8px",
    radiusMd: "14px",
    radiusLg: "22px",
    radiusControl: "14px",
    borderWidth: "1px",
    borderWidthStrong: "3px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.5)",
    shadowMd: "0 10px 24px -12px rgba(0, 0, 0, 0.8)",
    shadowLg: "0 26px 50px -20px rgba(0, 0, 0, 0.9)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "100ms",
    durationBase: "200ms",
    durationSlow: "360ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.3, 1.4, 0.5, 1)",
    pressScale: 0.96,
  },
});

export default spray;

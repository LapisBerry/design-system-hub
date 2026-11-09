import { defineTheme } from "@dsh/core";

/** Kraft: shipping and packaging. Brown kraft paper, stencil type, rubber stamps and packing tape. */
export const kraft = defineTheme({
  meta: {
    id: "kraft",
    name: "Kraft",
    tagline: "Kraft paper, stencil type and a rubber stamp.",
    description:
      "A packaging system: brown kraft paper with visible fibers, stencil headlines, typewriter labels, red and blue rubber-stamp badges, packing tape across cards and cut-here dividers. Built for e-commerce and shipping, coffee roasters and craft brands, makers, logistics dashboards and anything handmade.",
    keywords: ["packaging", "stencil", "stamp", "craft"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Stardos+Stencil:wght@400;700&family=Archivo+Narrow:wght@400;500;600;700&family=Courier+Prime:wght@400;700&display=swap",
  },
  color: {
    bg: "#c9a77c",
    surface: "#ddc49f",
    surfaceAlt: "#cfb088",
    text: "#2a1c0e",
    textMuted: "#563e24",
    border: "#a8875e",
    borderStrong: "#3a2914",
    primary: "#b3261e",
    onPrimary: "#ffffff",
    accent: "#1d4f91",
    onAccent: "#ffffff",
    success: "#2f6b2f",
    warning: "#7f5200",
    danger: "#b3261e",
    info: "#1d4f91",
    onStatus: "#ffffff",
    focus: "#1d4f91",
    overlay: "rgba(42, 28, 14, 0.45)",
  },
  type: {
    fontDisplay: '"Stardos Stencil", "Archivo Narrow", Impact, sans-serif',
    fontBody: '"Archivo Narrow", "Arial Narrow", sans-serif',
    fontMono: '"Courier Prime", "Courier New", monospace',
    baseSize: 16,
    scaleRatio: 1.28,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0.03em",
    trackingLabel: "0.1em",
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
    shadowSm: "0 1px 2px rgba(42, 28, 14, 0.25)",
    shadowMd: "0 2px 0 rgba(42, 28, 14, 0.15), 0 10px 18px -10px rgba(42, 28, 14, 0.55)",
    shadowLg: "0 3px 0 rgba(42, 28, 14, 0.15), 0 20px 34px -14px rgba(42, 28, 14, 0.6)",
    shadowControl: "0 2px 0 rgba(42, 28, 14, 0.35)",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 48 },
  motion: {
    durationFast: "110ms",
    durationBase: "200ms",
    durationSlow: "340ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.3, 1.3, 0.5, 1)",
    pressScale: 0.97,
  },
});

export default kraft;

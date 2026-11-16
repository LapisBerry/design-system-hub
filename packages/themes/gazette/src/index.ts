import { defineTheme } from "@dsh/core";

/** Gazette. Tabloid newsprint: banner headlines, column rules, halftone, red EXTRA. */
export const gazette = defineTheme({
  meta: {
    id: "gazette",
    name: "Gazette",
    tagline: "Stop the presses.",
    description:
      "A newspaper system: gray newsprint, condensed banner headlines over thick-and-thin rules, column rules between sections, halftone fills, a classic text serif and a red EXTRA flash for anything urgent. Built for news and newsletters, community bulletins, campaign pages and content-heavy blogs.",
    keywords: ["newspaper", "tabloid", "editorial", "urgent"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=PT+Mono&display=swap",
  },
  color: {
    bg: "#ece7dc",
    surface: "#f6f2e8",
    surfaceAlt: "#e2dccf",
    text: "#141414",
    textMuted: "#4d4a44",
    border: "#c9c2b3",
    borderStrong: "#141414",
    primary: "#141414",
    onPrimary: "#f6f2e8",
    accent: "#c8102e",
    onAccent: "#ffffff",
    success: "#2e6b34",
    warning: "#8a5a00",
    danger: "#c8102e",
    info: "#1f4e79",
    onStatus: "#ffffff",
    focus: "#c8102e",
    overlay: "rgba(20, 20, 20, 0.55)",
  },
  type: {
    fontDisplay: '"Oswald", "Arial Narrow", sans-serif',
    fontBody: '"Old Standard TT", Georgia, serif',
    fontMono: '"PT Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.36,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 700,
    trackingDisplay: "-0.01em",
    trackingLabel: "0.08em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "0px",
    radiusMd: "0px",
    radiusLg: "0px",
    radiusControl: "0px",
    borderWidth: "1px",
    borderWidthStrong: "3px",
  },
  elevation: {
    shadowSm: "none",
    shadowMd: "none",
    shadowLg: "0 18px 40px -20px rgba(0, 0, 0, 0.4)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 48 },
  motion: {
    durationFast: "80ms",
    durationBase: "160ms",
    durationSlow: "280ms",
    easing: "cubic-bezier(0.3, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.3, 0, 0.2, 1)",
    pressScale: 0.98,
  },
});

export default gazette;

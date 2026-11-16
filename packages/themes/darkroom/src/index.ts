import { defineTheme } from "@dsh/core";

/** Darkroom. Photo darkroom: safelight red, film sprockets, developing motion (dark only). */
export const darkroom = defineTheme({
  meta: {
    id: "darkroom",
    name: "Darkroom",
    tagline: "Under the safelight, slowly developing.",
    description:
      "A photographic darkroom system: everything bathed in safelight red with an amber second light, film-strip sprocket holes along panels, frame numbers in the edge, contact-sheet avatars and dialogs that develop from overexposed to sharp. Built for photography portfolios and labs, film festivals, editing tools and moody editorial.",
    keywords: ["photography", "film", "moody", "analog"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Public+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Share+Tech+Mono&display=swap",
  },
  color: {
    bg: "#120606",
    surface: "#1c0b0b",
    surfaceAlt: "#261111",
    text: "#ffe9e2",
    textMuted: "#d19c92",
    border: "#3a1a18",
    borderStrong: "#7a3a34",
    primary: "#ff3b2f",
    onPrimary: "#1a0302",
    accent: "#ffb02e",
    onAccent: "#1a0d00",
    success: "#7ad18a",
    warning: "#ffc552",
    danger: "#ff6a6a",
    info: "#8fc1ff",
    onStatus: "#120606",
    focus: "#ffb02e",
    overlay: "rgba(0, 0, 0, 0.75)",
  },
  type: {
    fontDisplay: '"Bebas Neue", "Arial Narrow", sans-serif',
    fontBody: '"Public Sans", system-ui, sans-serif',
    fontMono: '"Share Tech Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.32,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "0.06em",
    trackingLabel: "0.16em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "0px",
    radiusMd: "2px",
    radiusLg: "2px",
    radiusControl: "2px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 0 0 1px rgba(0, 0, 0, 0.4)",
    shadowMd: "0 0 40px -12px rgba(255, 59, 47, 0.25), 0 16px 30px -16px rgba(0, 0, 0, 0.9)",
    shadowLg: "0 0 80px -20px rgba(255, 59, 47, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.95)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "160ms",
    durationBase: "360ms",
    durationSlow: "900ms",
    easing: "cubic-bezier(0.4, 0, 0.6, 1)",
    easingEnter: "cubic-bezier(0.2, 0, 0, 1)",
    pressScale: 0.98,
  },
});

export default darkroom;

import { defineTheme } from "@dsh/core";

/** Riso: risograph print. Fluorescent pink and blue overprint, halftones and slight misregistration. */
export const riso = defineTheme({
  meta: {
    id: "riso",
    name: "Riso",
    tagline: "Two inks, slightly off register.",
    description:
      "A risograph-print system: fluorescent pink and medium blue inks that overprint, halftone dots, grain and a deliberate bit of misregistration. Great for zines, music and arts events, indie publishers, cafés and community projects.",
    keywords: ["print", "zine", "halftone", "fluorescent"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@400;500;600;700&family=Courier+Prime:wght@400;700&display=swap",
  },
  color: {
    bg: "#f7f5f0",
    surface: "#fdfcf9",
    surfaceAlt: "#ece8de",
    text: "#1f2350",
    textMuted: "#4d5180",
    border: "#d7d2c4",
    borderStrong: "#1f2350",
    primary: "#ff48b0",
    onPrimary: "#1f2350",
    accent: "#0071b8",
    onAccent: "#ffffff",
    success: "#00a95c",
    warning: "#ffe800",
    danger: "#ff665e",
    info: "#5ec8e5",
    onStatus: "#1f2350",
    focus: "#0071b8",
    overlay: "rgba(31, 35, 80, 0.45)",
  },
  type: {
    fontDisplay: '"Archivo Black", "Archivo", Impact, system-ui, sans-serif',
    fontBody: '"Archivo", system-ui, sans-serif',
    fontMono: '"Courier Prime", "Courier New", monospace',
    baseSize: 16,
    scaleRatio: 1.333,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "-0.02em",
    trackingLabel: "0.02em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "3px",
    radiusMd: "4px",
    radiusLg: "6px",
    radiusControl: "4px",
    borderWidth: "2px",
    borderWidthStrong: "3px",
  },
  elevation: {
    shadowSm: "2px 3px 0 0 rgba(255, 72, 176, 0.85)",
    shadowMd: "5px 6px 0 0 rgba(255, 72, 176, 0.85)",
    shadowLg: "9px 10px 0 0 rgba(255, 72, 176, 0.85)",
    shadowControl: "3px 3px 0 0 rgba(0, 113, 184, 0.9)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "120ms",
    durationBase: "200ms",
    durationSlow: "340ms",
    easing: "cubic-bezier(0.3, 0, 0.3, 1)",
    easingEnter: "cubic-bezier(0.2, 1.4, 0.4, 1)",
    pressScale: 0.97,
  },
});

export default riso;

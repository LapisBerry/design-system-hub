import { defineTheme } from "@dsh/core";

/** Catalog. Library card catalog: ruled index cards, typewriter, due-date stamps (light only). */
export const catalog = defineTheme({
  meta: {
    id: "catalog",
    name: "Catalog",
    tagline: "Filed, typed and stamped.",
    description:
      "A library system: ruled index cards with a red top line and a punched rod hole, typewriter headings, a bookish serif for reading, drawer-guide tabs and rubber due-date stamps for badges. Built for libraries and archives, reading trackers, research notes, schools and collection managers.",
    keywords: ["library", "archival", "typewriter", "bookish"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Special+Elite&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap",
  },
  color: {
    bg: "#dcd3c0",
    surface: "#fbf6e8",
    surfaceAlt: "#efe6d0",
    text: "#1d1a16",
    textMuted: "#57504a",
    border: "#cfc3a8",
    borderStrong: "#1d1a16",
    primary: "#a3262a",
    onPrimary: "#fff8ec",
    accent: "#2c4f7c",
    onAccent: "#ffffff",
    success: "#3e6b38",
    warning: "#8a5c0a",
    danger: "#a3262a",
    info: "#2c4f7c",
    onStatus: "#ffffff",
    focus: "#2c4f7c",
    overlay: "rgba(29, 26, 22, 0.5)",
  },
  type: {
    fontDisplay: '"Special Elite", "Courier Prime", monospace',
    fontBody: '"Libre Baskerville", Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.25,
    lineHeight: 1.7,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0em",
    trackingLabel: "0.04em",
    labelCase: "none",
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
    shadowSm: "0 1px 1px rgba(60, 40, 20, 0.15)",
    shadowMd: "0 1px 1px rgba(60, 40, 20, 0.15), 0 4px 0 -1px #efe6d0, 0 5px 2px -1px rgba(60, 40, 20, 0.18)",
    shadowLg: "0 20px 40px -18px rgba(60, 40, 20, 0.4)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 32, controlMd: 40, controlLg: 48 },
  motion: {
    durationFast: "90ms",
    durationBase: "160ms",
    durationSlow: "300ms",
    easing: "cubic-bezier(0.3, 0, 0.3, 1)",
    easingEnter: "cubic-bezier(0.2, 0.8, 0.3, 1)",
    pressScale: 0.98,
  },
});

export default catalog;

import { defineTheme } from "@dsh/core";

/** Vapor: vaporwave. A purple dusk, a neon grid running to the horizon and chrome pink-to-cyan type. */
export const vapor = defineTheme({
  meta: {
    id: "vapor",
    name: "Vapor",
    tagline: "A neon grid running into a purple sunset.",
    description:
      "A vaporwave system: deep purple dusk, hot pink and electric cyan, chrome gradient headlines, a perspective grid on the floor and a striped retro sun. Made for music and creator tools, event pages, nightlife, retro games and anything that wants a dreamy 1990s mood.",
    keywords: ["vaporwave", "retro", "gradient", "synthwave"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Audiowide&family=Kanit:wght@300;400;500;600&family=Ubuntu+Mono:wght@400;700&display=swap",
  },
  color: {
    bg: "#1a0b2e",
    surface: "#24113d",
    surfaceAlt: "#30184f",
    text: "#fdf0ff",
    textMuted: "#cbb0e4",
    border: "#432566",
    borderStrong: "#7c51ad",
    primary: "#ff71ce",
    onPrimary: "#1a0b2e",
    accent: "#01cdfe",
    onAccent: "#1a0b2e",
    success: "#05ffa1",
    warning: "#fffb96",
    danger: "#ff6b8b",
    info: "#01cdfe",
    onStatus: "#1a0b2e",
    focus: "#01cdfe",
    overlay: "rgba(10, 3, 22, 0.72)",
  },
  type: {
    fontDisplay: '"Audiowide", "Kanit", system-ui, sans-serif',
    fontBody: '"Kanit", system-ui, sans-serif',
    fontMono: '"Ubuntu Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.3,
    lineHeight: 1.55,
    weightBody: 300,
    weightStrong: 500,
    weightDisplay: 400,
    trackingDisplay: "0.04em",
    trackingLabel: "0.14em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "4px",
    radiusMd: "8px",
    radiusLg: "14px",
    radiusControl: "6px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 0 0 1px rgba(255, 113, 206, 0.15), 0 4px 14px -6px rgba(255, 113, 206, 0.4)",
    shadowMd: "0 0 0 1px rgba(255, 113, 206, 0.2), 0 18px 40px -16px rgba(255, 113, 206, 0.45)",
    shadowLg: "0 0 0 1px rgba(1, 205, 254, 0.35), 0 26px 60px -18px rgba(1, 205, 254, 0.5)",
    shadowControl: "0 6px 20px -8px rgba(255, 113, 206, 0.8)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "140ms",
    durationBase: "260ms",
    durationSlow: "520ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.9, 0.3, 1.1)",
    pressScale: 0.97,
  },
});

export default vapor;

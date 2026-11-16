import { defineTheme } from "@dsh/core";

/** Abyss. Deep sea: bioluminescent glow, drifting particles, sonar pings (dark only). */
export const abyss = defineTheme({
  meta: {
    id: "abyss",
    name: "Abyss",
    tagline: "Light that lives a thousand meters down.",
    description:
      "A deep-sea system: ocean darkening with depth, bioluminescent cyan and jellyfish violet, slowly drifting particles, bubble avatars, a sonar-ping spinner and soft rounded type. Motion is slow and buoyant. Built for meditation and sleep apps, aquariums and ocean causes, ambient music, exploration games and calm night-mode products.",
    keywords: ["deep sea", "bioluminescent", "calm", "mysterious"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500;600;700&family=Nunito+Sans:ital,wght@0,400;0,600;0,700;1,400&family=Fira+Code&display=swap",
  },
  color: {
    bg: "#020b14",
    surface: "#06182a",
    surfaceAlt: "#0b2238",
    text: "#e4f6ff",
    textMuted: "#8fb4c8",
    border: "#123452",
    borderStrong: "#2f6f8f",
    primary: "#3ff2d0",
    onPrimary: "#011a16",
    accent: "#b98bff",
    onAccent: "#12052a",
    success: "#5ff2a0",
    warning: "#ffd36b",
    danger: "#ff6f91",
    info: "#5fc8ff",
    onStatus: "#020b14",
    focus: "#3ff2d0",
    overlay: "rgba(0, 4, 10, 0.75)",
  },
  type: {
    fontDisplay: '"Comfortaa", "Nunito Sans", sans-serif',
    fontBody: '"Nunito Sans", system-ui, sans-serif',
    fontMono: '"Fira Code", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.6,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 700,
    trackingDisplay: "0em",
    trackingLabel: "0.04em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "10px",
    radiusMd: "18px",
    radiusLg: "28px",
    radiusControl: "999px",
    borderWidth: "1px",
    borderWidthStrong: "1.5px",
  },
  elevation: {
    shadowSm: "0 0 0 1px rgba(63, 242, 208, 0.08)",
    shadowMd: "0 0 30px -10px rgba(63, 242, 208, 0.25), 0 20px 40px -20px rgba(0, 0, 0, 0.8)",
    shadowLg: "0 0 60px -15px rgba(185, 139, 255, 0.35), 0 30px 60px -20px rgba(0, 0, 0, 0.9)",
    shadowControl: "0 0 18px -2px rgba(63, 242, 208, 0.55)",
  },
  space: { unit: 4, controlSm: 36, controlMd: 44, controlLg: 54 },
  motion: {
    durationFast: "240ms",
    durationBase: "500ms",
    durationSlow: "1100ms",
    easing: "cubic-bezier(0.45, 0.05, 0.55, 0.95)",
    easingEnter: "cubic-bezier(0.25, 1, 0.5, 1)",
    pressScale: 0.97,
  },
});

export default abyss;

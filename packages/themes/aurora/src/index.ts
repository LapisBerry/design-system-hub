import { defineTheme } from "@dsh/core";

/** Aurora: dark, precise software. Hairline gradient borders, northern-lights glow, tight sans. */
export const aurora = defineTheme({
  meta: {
    id: "aurora",
    name: "Aurora",
    tagline: "Northern lights behind precise dark glass.",
    description:
      "A dark-first product system: near-black surfaces, hairline gradient borders that catch the light, a slow northern-lights glow and a crisp geometric sans. Designed for developer platforms, AI products, launch sites and pro tools that live in dark mode.",
    keywords: ["dark", "saas", "gradient", "precise"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Geist:wght@300..800&family=Geist+Mono:wght@400;500&display=swap",
  },
  color: {
    bg: "#07080c",
    surface: "#0e1016",
    surfaceAlt: "#161922",
    text: "#eceef4",
    textMuted: "#9399a8",
    border: "#1f232e",
    borderStrong: "#343a4a",
    primary: "#eceef4",
    onPrimary: "#07080c",
    accent: "#7cf2c8",
    onAccent: "#07080c",
    success: "#5ee6a0",
    warning: "#f5c062",
    danger: "#ff7a85",
    info: "#7cb6ff",
    onStatus: "#07080c",
    focus: "#a58bff",
    overlay: "rgba(3, 4, 8, 0.7)",
  },
  type: {
    fontDisplay: '"Geist", "Inter", system-ui, sans-serif',
    fontBody: '"Geist", "Inter", system-ui, sans-serif',
    fontMono: '"Geist Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 500,
    weightDisplay: 600,
    trackingDisplay: "-0.04em",
    trackingLabel: "-0.005em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "6px",
    radiusMd: "9px",
    radiusLg: "14px",
    radiusControl: "9px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.6)",
    shadowMd: "0 0 0 1px rgba(255, 255, 255, 0.04), 0 16px 40px -16px rgba(0, 0, 0, 0.9)",
    shadowLg: "0 0 0 1px rgba(255, 255, 255, 0.06), 0 30px 80px -20px rgba(0, 0, 0, 1), 0 0 80px -30px rgba(124, 242, 200, 0.25)",
    shadowControl: "0 0 0 1px rgba(255, 255, 255, 0.1) inset, 0 8px 24px -10px rgba(165, 139, 255, 0.6)",
  },
  space: { unit: 4, controlSm: 30, controlMd: 36, controlLg: 44 },
  motion: {
    durationFast: "120ms",
    durationBase: "220ms",
    durationSlow: "400ms",
    easing: "cubic-bezier(0.32, 0.72, 0, 1)",
    easingEnter: "cubic-bezier(0.32, 0.72, 0, 1)",
    pressScale: 0.98,
  },
});

export default aurora;

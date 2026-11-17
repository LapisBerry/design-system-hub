import { defineTheme } from "@dsh/core";

/** Bigtop. Circus big top: candy-striped canopies, scalloped valances, bunting (light only). */
export const bigtop = defineTheme({
  meta: {
    id: "bigtop",
    name: "Bigtop",
    tagline: "Roll up, roll up.",
    description:
      "A circus system: card and dialog headers hang a red-and-cream striped canopy with a scalloped valance, faint tent stripes fan out behind the page, dividers are strings of bunting, avatars sit in a striped circus ring, progress spins like a barber pole and buttons bounce when you press them. A Western-flavored circus face over a tidy sans. Built for festivals and fairs, kids' events, ticketing and playful promotions.",
    keywords: ["circus", "festive", "striped", "showtime"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Sancreek&family=Fira+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Courier+Prime:wght@400;700&display=swap",
  },
  color: {
    bg: "#fff5e6",
    surface: "#fffbf3",
    surfaceAlt: "#fbe7c8",
    text: "#2a1410",
    textMuted: "#64463a",
    border: "#f0d6b0",
    borderStrong: "#2a1410",
    primary: "#c8202f",
    onPrimary: "#ffffff",
    accent: "#f5b700",
    onAccent: "#2a1410",
    success: "#2f7a3a",
    warning: "#9a5600",
    danger: "#a5141f",
    info: "#1f4fa0",
    onStatus: "#ffffff",
    focus: "#1f4fa0",
    overlay: "rgba(42, 20, 16, 0.55)",
  },
  type: {
    fontDisplay: '"Sancreek", Georgia, serif',
    fontBody: '"Fira Sans", system-ui, sans-serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "0.02em",
    trackingLabel: "0.06em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "4px",
    radiusMd: "8px",
    radiusLg: "12px",
    radiusControl: "8px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(120, 40, 20, 0.14)",
    shadowMd: "0 10px 24px -12px rgba(120, 40, 20, 0.28)",
    shadowLg: "0 26px 50px -20px rgba(120, 40, 20, 0.36)",
    shadowControl: "0 3px 0 rgba(120, 15, 25, 0.45)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "110ms",
    durationBase: "200ms",
    durationSlow: "360ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.34, 1.7, 0.6, 1)",
    pressScale: 0.93,
  },
});

export default bigtop;

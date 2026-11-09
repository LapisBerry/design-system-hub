import { defineTheme } from "@dsh/core";

/** Marquee: opening night. Red velvet, gold bulbs chasing around the sign, ticket-stub buttons. */
export const marquee = defineTheme({
  meta: {
    id: "marquee",
    name: "Marquee",
    tagline: "Red velvet, chasing bulbs, tonight only.",
    description:
      "A theatre and cinema system: red velvet curtain folds, gold display type, marquee signs framed by chasing light bulbs, ticket-stub buttons with punched notches and admit-one badges. Built for cinemas and theatres, ticketing, live events, award shows, podcasts and showbiz launches.",
    keywords: ["theatre", "cinema", "showbiz", "glamour"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Montserrat:wght@400;500;600;700;800&family=Oxygen+Mono&display=swap",
  },
  color: {
    bg: "#12060a",
    surface: "#1d0a10",
    surfaceAlt: "#291016",
    text: "#fff4e0",
    textMuted: "#d6b8a3",
    border: "#3d1a21",
    borderStrong: "#7a3a40",
    primary: "#f5c242",
    onPrimary: "#1d0f00",
    accent: "#e3263f",
    onAccent: "#ffffff",
    success: "#7ccf7c",
    warning: "#f5c242",
    danger: "#ff5f5f",
    info: "#8fc1ff",
    onStatus: "#12060a",
    focus: "#f5c242",
    overlay: "rgba(8, 2, 4, 0.82)",
  },
  type: {
    fontDisplay: '"Abril Fatface", Georgia, serif',
    fontBody: '"Montserrat", system-ui, sans-serif',
    fontMono: '"Oxygen Mono", ui-monospace, monospace',
    baseSize: 15,
    scaleRatio: 1.33,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0.02em",
    trackingLabel: "0.16em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "3px",
    radiusMd: "6px",
    radiusLg: "10px",
    radiusControl: "4px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 2px 8px -2px rgba(0, 0, 0, 0.8)",
    shadowMd: "0 0 40px -16px rgba(245, 194, 66, 0.35), 0 18px 40px -16px rgba(0, 0, 0, 1)",
    shadowLg: "0 0 60px -14px rgba(245, 194, 66, 0.45), 0 30px 60px -20px rgba(0, 0, 0, 1)",
    shadowControl: "0 4px 14px -6px rgba(245, 194, 66, 0.6)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "130ms",
    durationBase: "240ms",
    durationSlow: "480ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.9, 0.3, 1.1)",
    pressScale: 0.97,
  },
});

export default marquee;

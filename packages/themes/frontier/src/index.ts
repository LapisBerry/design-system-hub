import { defineTheme } from "@dsh/core";

/** Frontier. Old West poster: wood type, nailed corners, star badges (light only). */
export const frontier = defineTheme({
  meta: {
    id: "frontier",
    name: "Frontier",
    tagline: "Wanted: one good interface.",
    description:
      "A frontier-poster system: sun-faded poster paper, wood-type headlines with an inline shadow, posters nailed up at the corners, barn red and denim blue, star-shaped avatars and ornament rules. Built for barbecue and whiskey brands, rodeos and county fairs, western games, outdoor gear and festival lineups.",
    keywords: ["western", "wood type", "rustic", "poster"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Rye&family=Noticia+Text:ital,wght@0,400;0,700;1,400&family=Courier+Prime&display=swap",
  },
  color: {
    bg: "#e9dcc0",
    surface: "#f4ead3",
    surfaceAlt: "#e2d2b0",
    text: "#22170e",
    textMuted: "#5d4a35",
    border: "#cbb68e",
    borderStrong: "#22170e",
    primary: "#7a2416",
    onPrimary: "#f8efd9",
    accent: "#2f4a5c",
    onAccent: "#ffffff",
    success: "#4a6b2a",
    warning: "#8a5500",
    danger: "#9a1e12",
    info: "#2f4a5c",
    onStatus: "#ffffff",
    focus: "#b8641c",
    overlay: "rgba(34, 23, 14, 0.55)",
  },
  type: {
    fontDisplay: '"Rye", Georgia, serif',
    fontBody: '"Noticia Text", Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.33,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0.02em",
    trackingLabel: "0.1em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "0px",
    radiusMd: "2px",
    radiusLg: "3px",
    radiusControl: "2px",
    borderWidth: "2px",
    borderWidthStrong: "3px",
  },
  elevation: {
    shadowSm: "0 1px 0 rgba(34, 23, 14, 0.25)",
    shadowMd: "0 2px 0 rgba(34, 23, 14, 0.2), 0 12px 24px -14px rgba(34, 23, 14, 0.5)",
    shadowLg: "0 26px 50px -20px rgba(34, 23, 14, 0.55)",
    shadowControl: "inset 0 -2px 0 rgba(0, 0, 0, 0.25)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "100ms",
    durationBase: "200ms",
    durationSlow: "400ms",
    easing: "cubic-bezier(0.5, 0, 0.5, 1)",
    easingEnter: "cubic-bezier(0.2, 0.9, 0.3, 1.2)",
    pressScale: 0.97,
  },
});

export default frontier;

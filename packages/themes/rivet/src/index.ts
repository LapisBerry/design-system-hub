import { defineTheme } from "@dsh/core";

/** Rivet: steampunk. Oiled leather, riveted copper plates, brass gauges and engraved capitals. */
export const rivet = defineTheme({
  meta: {
    id: "rivet",
    name: "Rivet",
    tagline: "Riveted copper, oiled leather and a pressure gauge.",
    description:
      "A steampunk system: dark leather surfaces, brushed copper and brass plates fixed with rivets at every corner, engraved roman capitals, pipe-like progress gauges and toggles that look like brass levers. Made for adventure and crafting games, tabletop tools, breweries and workshops, and Victorian-flavored storytelling.",
    keywords: ["steampunk", "copper", "victorian", "mechanical"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Crimson+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Cutive+Mono&display=swap",
  },
  color: {
    bg: "#16100c",
    surface: "#211812",
    surfaceAlt: "#2b2018",
    text: "#f1e4cf",
    textMuted: "#c0ab8e",
    border: "#3d2d20",
    borderStrong: "#7a5634",
    primary: "#d0844a",
    onPrimary: "#1a0e05",
    accent: "#c9a648",
    onAccent: "#1a1203",
    success: "#8db06a",
    warning: "#e0a84a",
    danger: "#e0664f",
    info: "#7fb0b8",
    onStatus: "#16100c",
    focus: "#7fb0b8",
    overlay: "rgba(6, 4, 2, 0.78)",
  },
  type: {
    fontDisplay: '"Cinzel", Georgia, serif',
    fontBody: '"Crimson Pro", Georgia, serif',
    fontMono: '"Cutive Mono", ui-monospace, monospace',
    baseSize: 18,
    scaleRatio: 1.28,
    lineHeight: 1.5,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0.06em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "3px",
    radiusMd: "5px",
    radiusLg: "8px",
    radiusControl: "4px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "inset 0 1px 0 rgba(255, 220, 170, 0.08), 0 2px 4px rgba(0, 0, 0, 0.6)",
    shadowMd: "inset 0 1px 0 rgba(255, 220, 170, 0.08), 0 12px 26px -10px rgba(0, 0, 0, 0.9)",
    shadowLg: "inset 0 1px 0 rgba(255, 220, 170, 0.1), 0 26px 50px -16px rgba(0, 0, 0, 1)",
    shadowControl: "inset 0 1px 0 rgba(255, 240, 210, 0.45), inset 0 -2px 0 rgba(0, 0, 0, 0.35), 0 2px 3px rgba(0, 0, 0, 0.6)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 50 },
  motion: {
    durationFast: "140ms",
    durationBase: "260ms",
    durationSlow: "460ms",
    easing: "cubic-bezier(0.5, 0, 0.3, 1)",
    easingEnter: "cubic-bezier(0.3, 1.25, 0.5, 1)",
    pressScale: 0.97,
  },
});

export default rivet;

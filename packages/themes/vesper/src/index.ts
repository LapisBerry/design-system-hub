import { defineTheme } from "@dsh/core";

/** Vesper: gothic. Blackletter titles, bone and oxblood by candlelight, pointed-arch panels. */
export const vesper = defineTheme({
  meta: {
    id: "vesper",
    name: "Vesper",
    tagline: "Blackletter by candlelight.",
    description:
      "A gothic system: blackletter display titles over a refined old-style serif, bone text and oxblood red on near-black, antique gold hairlines, pointed-arch panels and cross-shaped ornaments. Suited to fantasy and horror games, tabletop tools, metal and goth music, tattoo studios, wine and dark-academia reading apps.",
    keywords: ["gothic", "blackletter", "dark", "ornate"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Cormorant+SC:wght@500;600&family=Courier+Prime&display=swap",
  },
  color: {
    bg: "#0e0b0c",
    surface: "#171213",
    surfaceAlt: "#201819",
    text: "#eee3d3",
    textMuted: "#b6a896",
    border: "#33292a",
    borderStrong: "#6a5446",
    primary: "#c82a42",
    onPrimary: "#ffffff",
    accent: "#c9a86a",
    onAccent: "#1a1206",
    success: "#7ea878",
    warning: "#d3a446",
    danger: "#e65a5a",
    info: "#93a7cf",
    onStatus: "#0e0b0c",
    focus: "#c9a86a",
    overlay: "rgba(4, 2, 3, 0.8)",
  },
  type: {
    fontDisplay: '"UnifrakturMaguntia", "Cormorant Garamond", serif',
    fontBody: '"Cormorant Garamond", Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 18,
    scaleRatio: 1.3,
    lineHeight: 1.55,
    weightBody: 500,
    weightStrong: 700,
    weightDisplay: 400,
    trackingDisplay: "0.01em",
    trackingLabel: "0.12em",
    labelCase: "uppercase",
  },
  shape: {
    radiusSm: "1px",
    radiusMd: "2px",
    radiusLg: "2px",
    radiusControl: "1px",
    borderWidth: "1px",
    borderWidthStrong: "1px",
  },
  elevation: {
    shadowSm: "0 2px 8px -2px rgba(0, 0, 0, 0.8)",
    shadowMd: "0 18px 40px -18px rgba(0, 0, 0, 1)",
    shadowLg: "0 0 0 1px rgba(201, 168, 106, 0.25), 0 30px 60px -20px rgba(0, 0, 0, 1)",
    shadowControl: "none",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 50 },
  motion: {
    durationFast: "180ms",
    durationBase: "320ms",
    durationSlow: "600ms",
    easing: "cubic-bezier(0.45, 0, 0.25, 1)",
    easingEnter: "cubic-bezier(0.2, 0.6, 0.2, 1)",
    pressScale: 0.99,
  },
});

export default vesper;

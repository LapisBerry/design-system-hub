import { defineTheme } from "@dsh/core";

/** Tarot. Tarot cards: gilded card frames, star cartouches, sun-and-moon avatars (dark only). */
export const tarot = defineTheme({
  meta: {
    id: "tarot",
    name: "Tarot",
    tagline: "The cards are on your side.",
    description:
      "A tarot system under a starry indigo sky: raised cards are framed like a tarot deck with a gilt double border, a star cartouche at the top and a name plate at the foot, avatars are radiant sun medallions, the spinner cycles through moon phases and dividers meet at a four-point star. Gold and lilac with decorative Roman capitals. Built for astrology and wellness, narrative games, journaling and storytelling.",
    keywords: ["tarot", "mystic", "celestial", "gilded"],
    scheme: "dark",
    fontsHref: "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Courier+Prime&display=swap",
  },
  color: {
    bg: "#120f24",
    surface: "#1b1735",
    surfaceAlt: "#262046",
    text: "#f3ecd8",
    textMuted: "#bdb39a",
    border: "#352d5c",
    borderStrong: "#d8b35a",
    primary: "#d8b35a",
    onPrimary: "#120f24",
    accent: "#b993ff",
    onAccent: "#120f24",
    success: "#7fd8a3",
    warning: "#f6c86b",
    danger: "#ff7a8a",
    info: "#8fb6ff",
    onStatus: "#120f24",
    focus: "#f6d98b",
    overlay: "rgba(6, 4, 16, 0.75)",
  },
  type: {
    fontDisplay: '"Cinzel Decorative", "Crimson Text", serif',
    fontBody: '"Crimson Text", Georgia, serif',
    fontMono: '"Courier Prime", ui-monospace, monospace',
    baseSize: 17,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 700,
    trackingDisplay: "0.03em",
    trackingLabel: "0.12em",
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
    shadowSm: "0 1px 2px rgba(0, 0, 0, 0.5)",
    shadowMd: "0 10px 24px -12px rgba(0, 0, 0, 0.8)",
    shadowLg: "0 26px 50px -20px rgba(0, 0, 0, 0.9), 0 0 40px -10px rgba(216, 179, 90, 0.15)",
    shadowControl: "0 0 0 1px rgba(216, 179, 90, 0.35), 0 4px 12px -6px rgba(216, 179, 90, 0.5)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "140ms",
    durationBase: "260ms",
    durationSlow: "520ms",
    easing: "cubic-bezier(0.4, 0, 0.2, 1)",
    easingEnter: "cubic-bezier(0.2, 0.7, 0.2, 1)",
    pressScale: 0.98,
  },
});

export default tarot;

import { defineTheme } from "@dsh/core";

/** Cork. Corkboard: pinned notes, sticky notes, tape and polaroids (light only). */
export const cork = defineTheme({
  meta: {
    id: "cork",
    name: "Cork",
    tagline: "Pin it up where everyone can see it.",
    description:
      "A corkboard system: speckled cork behind everything, cards pinned up slightly crooked with a red pushpin, sticky-note yellow panels, masking-tape badges, polaroid avatars and a thick marker headline. Pinned things straighten up when you hover them. Built for team boards and retros, classrooms, mood boards, planning and family organizers.",
    keywords: ["corkboard", "notes", "collaborative", "handmade"],
    fontsHref: "https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rethink+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Mono&display=swap",
  },
  color: {
    bg: "#c49a6c",
    surface: "#fffbea",
    surfaceAlt: "#fbf0b8",
    text: "#1e140b",
    textMuted: "#3f3226",
    border: "#d8c7a0",
    borderStrong: "#1e140b",
    primary: "#c8243c",
    onPrimary: "#ffffff",
    accent: "#2a8bd4",
    onAccent: "#ffffff",
    success: "#2f7a3e",
    warning: "#8a5a00",
    danger: "#b8202f",
    info: "#1f6aa8",
    onStatus: "#ffffff",
    focus: "#1f6aa8",
    overlay: "rgba(30, 20, 11, 0.5)",
  },
  type: {
    fontDisplay: '"Permanent Marker", "Rethink Sans", cursive',
    fontBody: '"Rethink Sans", system-ui, sans-serif',
    fontMono: '"Space Mono", ui-monospace, monospace',
    baseSize: 16,
    scaleRatio: 1.25,
    lineHeight: 1.55,
    weightBody: 400,
    weightStrong: 600,
    weightDisplay: 400,
    trackingDisplay: "0em",
    trackingLabel: "0.02em",
    labelCase: "none",
  },
  shape: {
    radiusSm: "2px",
    radiusMd: "3px",
    radiusLg: "2px",
    radiusControl: "4px",
    borderWidth: "1px",
    borderWidthStrong: "2px",
  },
  elevation: {
    shadowSm: "0 1px 2px rgba(40, 25, 10, 0.3)",
    shadowMd: "0 2px 3px rgba(40, 25, 10, 0.25), 0 12px 20px -10px rgba(40, 25, 10, 0.45)",
    shadowLg: "0 26px 44px -16px rgba(40, 25, 10, 0.55)",
    shadowControl: "0 2px 0 rgba(40, 25, 10, 0.3)",
  },
  space: { unit: 4, controlSm: 34, controlMd: 42, controlLg: 52 },
  motion: {
    durationFast: "120ms",
    durationBase: "220ms",
    durationSlow: "420ms",
    easing: "cubic-bezier(0.3, 0, 0.3, 1)",
    easingEnter: "cubic-bezier(0.2, 1.2, 0.4, 1)",
    pressScale: 0.97,
  },
});

export default cork;

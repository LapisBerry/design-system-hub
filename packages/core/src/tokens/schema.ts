/**
 * The token contract every design system in the hub must fill in.
 *
 * Core components only read CSS variables generated from this shape, so any
 * theme that satisfies `ThemeDefinition` works with every component.
 */

export interface ColorTokens {
  /** Page background. */
  bg: string;
  /** Cards, inputs, popovers. */
  surface: string;
  /** Subtle fills: hovered rows, tracks, code blocks. */
  surfaceAlt: string;
  text: string;
  textMuted: string;
  border: string;
  /** Border used on hover / strong dividers. */
  borderStrong: string;

  primary: string;
  /** Text and icons placed on top of `primary`. */
  onPrimary: string;
  accent: string;
  onAccent: string;

  success: string;
  warning: string;
  danger: string;
  info: string;
  /** Text placed on top of the four status colors. */
  onStatus: string;

  /** Keyboard focus ring. */
  focus: string;
  /** Modal backdrop. */
  overlay: string;
}

export interface TypographyTokens {
  fontDisplay: string;
  fontBody: string;
  fontMono: string;
  /** Root font size in px. Every other size is a step on the scale. */
  baseSize: number;
  /** Modular scale ratio, e.g. 1.25 (major third). */
  scaleRatio: number;
  lineHeight: number;
  weightBody: number;
  weightStrong: number;
  weightDisplay: number;
  /** Tracking for headings, e.g. "-0.02em". */
  trackingDisplay: string;
  /** Tracking for labels, buttons and badges. */
  trackingLabel: string;
  /** Case for labels, buttons and badges. */
  labelCase: "none" | "uppercase" | "lowercase" | "capitalize";
}

export interface ShapeTokens {
  radiusSm: string;
  radiusMd: string;
  radiusLg: string;
  /** Radius for buttons specifically, so pill buttons can sit on square cards. */
  radiusControl: string;
  borderWidth: string;
  /** Width for emphasized borders (cards, focus, brutalist outlines). */
  borderWidthStrong: string;
}

export interface ElevationTokens {
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  /** Applied to filled buttons at rest. Use "none" to disable. */
  shadowControl: string;
}

export interface SpaceTokens {
  /** Base spacing unit in px. Spacing steps are multiples of this. */
  unit: number;
  /** Control heights in px. */
  controlSm: number;
  controlMd: number;
  controlLg: number;
}

export interface MotionTokens {
  durationFast: string;
  durationBase: string;
  durationSlow: string;
  easing: string;
  /** Easing for elements entering the screen (dialogs, toasts). */
  easingEnter: string;
  /** Scale applied to buttons while pressed, e.g. 0.97. Use 1 for none. */
  pressScale: number;
}

export interface ThemeMeta {
  /** Machine id, used as the `data-ds-theme` attribute. Lowercase, no spaces. */
  id: string;
  name: string;
  tagline: string;
  /** Two or three sentences on the personality and when to use it. */
  description: string;
  /** Short words that capture the feel. */
  keywords: string[];
  /** Google Fonts (or other) stylesheet URL for the theme's fonts. */
  fontsHref?: string;
  /** Whether the base `color` palette is light or dark. Defaults to "light". */
  scheme?: "light" | "dark";
}

export interface ThemeDefinition {
  meta: ThemeMeta;
  color: ColorTokens;
  /** Optional alternate dark palette (only for themes whose base scheme is light). Missing keys fall back to `color`. */
  colorDark?: Partial<ColorTokens>;
  type: TypographyTokens;
  shape: ShapeTokens;
  elevation: ElevationTokens;
  /** Optional dark-mode shadows (shadows often need to be stronger on dark). */
  elevationDark?: Partial<ElevationTokens>;
  space: SpaceTokens;
  motion: MotionTokens;
}

export type ColorMode = "light" | "dark";

/** Identity helper that gives theme authors type checking and autocomplete. */
export function defineTheme(theme: ThemeDefinition): ThemeDefinition {
  return theme;
}

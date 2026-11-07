import type { ColorTokens } from "./schema.ts";

/** Parse #rgb, #rrggbb or rgb()/rgba() into 0-255 channels. Returns null for anything else. */
export function parseColor(input: string): [number, number, number] | null {
  const s = input.trim();
  const hex = s.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) h = h.split("").map((c) => c + c).join("");
    return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)) as [number, number, number];
  }
  const rgb = s.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/i);
  if (rgb) return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  return null;
}

function luminance([r, g, b]: [number, number, number]): number {
  const lin = (c: number) => {
    const v = c / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}

/** WCAG 2 contrast ratio between two colors, or null if either can't be parsed. */
export function contrastRatio(a: string, b: string): number | null {
  const ca = parseColor(a);
  const cb = parseColor(b);
  if (!ca || !cb) return null;
  const [hi, lo] = [luminance(ca), luminance(cb)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

export interface ContrastCheck {
  label: string;
  fg: keyof ColorTokens;
  bg: keyof ColorTokens;
  /** Minimum ratio: 4.5 for body text, 3 for large text and UI parts. */
  min: number;
}

/** The pairs every theme is expected to pass. */
export const CONTRAST_CHECKS: ContrastCheck[] = [
  { label: "Body text on background", fg: "text", bg: "bg", min: 4.5 },
  { label: "Body text on surface", fg: "text", bg: "surface", min: 4.5 },
  { label: "Muted text on surface", fg: "textMuted", bg: "surface", min: 4.5 },
  { label: "Label on primary", fg: "onPrimary", bg: "primary", min: 4.5 },
  { label: "Label on accent", fg: "onAccent", bg: "accent", min: 3 },
  { label: "Label on danger", fg: "onStatus", bg: "danger", min: 3 },
  { label: "Primary on surface (links, outlines)", fg: "primary", bg: "surface", min: 3 },
];

export function runContrastChecks(colors: ColorTokens) {
  return CONTRAST_CHECKS.map((c) => {
    const ratio = contrastRatio(colors[c.fg], colors[c.bg]);
    return { ...c, ratio, pass: ratio === null ? null : ratio >= c.min };
  });
}

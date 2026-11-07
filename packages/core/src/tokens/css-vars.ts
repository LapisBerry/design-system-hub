import type { ColorMode, ColorTokens, ThemeDefinition } from "./schema.ts";

const kebab = (s: string) => s.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase());

/** Resolve the palette for a mode, falling back to the light palette. */
export function resolveColors(theme: ThemeDefinition, mode: ColorMode = "light"): ColorTokens {
  return mode === "dark" && theme.colorDark ? { ...theme.color, ...theme.colorDark } : theme.color;
}

export function hasDarkMode(theme: ThemeDefinition): boolean {
  return Boolean(theme.colorDark);
}

/**
 * Turn a theme into a flat map of CSS custom properties (`--ds-*`).
 * Apply it as an inline style or print it into a stylesheet with `themeToCss`.
 */
export function themeToCssVars(theme: ThemeDefinition, mode: ColorMode = "light"): Record<string, string> {
  const vars: Record<string, string> = {};
  const colors = resolveColors(theme, mode);
  for (const [k, v] of Object.entries(colors)) vars[`--ds-color-${kebab(k)}`] = v;

  const t = theme.type;
  vars["--ds-font-display"] = t.fontDisplay;
  vars["--ds-font-body"] = t.fontBody;
  vars["--ds-font-mono"] = t.fontMono;
  vars["--ds-line-height"] = String(t.lineHeight);
  vars["--ds-weight-body"] = String(t.weightBody);
  vars["--ds-weight-strong"] = String(t.weightStrong);
  vars["--ds-weight-display"] = String(t.weightDisplay);
  vars["--ds-tracking-display"] = t.trackingDisplay;
  vars["--ds-tracking-label"] = t.trackingLabel;
  vars["--ds-label-case"] = t.labelCase;
  // Type scale: steps -2..6 on a modular scale from the base size.
  for (let step = -2; step <= 6; step++) {
    const px = t.baseSize * Math.pow(t.scaleRatio, step);
    const name = step < 0 ? `n${-step}` : String(step);
    vars[`--ds-text-${name}`] = `${(px / 16).toFixed(4)}rem`;
  }

  for (const [k, v] of Object.entries(theme.shape)) vars[`--ds-${kebab(k)}`] = v;

  const elevation =
    mode === "dark" && theme.elevationDark ? { ...theme.elevation, ...theme.elevationDark } : theme.elevation;
  for (const [k, v] of Object.entries(elevation)) vars[`--ds-${kebab(k)}`] = v;

  const s = theme.space;
  for (const step of [1, 2, 3, 4, 5, 6, 8, 10, 12, 16]) vars[`--ds-space-${step}`] = `${s.unit * step}px`;
  vars["--ds-control-sm"] = `${s.controlSm}px`;
  vars["--ds-control-md"] = `${s.controlMd}px`;
  vars["--ds-control-lg"] = `${s.controlLg}px`;

  const m = theme.motion;
  vars["--ds-duration-fast"] = m.durationFast;
  vars["--ds-duration-base"] = m.durationBase;
  vars["--ds-duration-slow"] = m.durationSlow;
  vars["--ds-easing"] = m.easing;
  vars["--ds-easing-enter"] = m.easingEnter;
  vars["--ds-press-scale"] = String(m.pressScale);
  return vars;
}

/** Print a theme as a CSS rule, for projects that prefer a static stylesheet. */
export function themeToCss(theme: ThemeDefinition, mode: ColorMode = "light", selector?: string): string {
  const sel = selector ?? `[data-ds-theme="${theme.meta.id}"][data-ds-mode="${mode}"]`;
  const body = Object.entries(themeToCssVars(theme, mode))
    .map(([k, v]) => `  ${k}: ${v};`)
    .join("\n");
  return `${sel} {\n${body}\n}\n`;
}

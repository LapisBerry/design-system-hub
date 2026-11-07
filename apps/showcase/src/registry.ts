import type { ThemeDefinition } from "@dsh/core";
import { folio } from "@dsh/theme-folio";
import { grit } from "@dsh/theme-grit";
import { mist } from "@dsh/theme-mist";
import { phosphor } from "@dsh/theme-phosphor";
import { terra } from "@dsh/theme-terra";
import { grid } from "@dsh/theme-grid";

import "@dsh/core/styles.css";
import "@dsh/theme-folio/theme.css";
import "@dsh/theme-grit/theme.css";
import "@dsh/theme-mist/theme.css";
import "@dsh/theme-phosphor/theme.css";
import "@dsh/theme-terra/theme.css";
import "@dsh/theme-grid/theme.css";

/** Every design system in the hub. Add a new theme package here to show it in the showcase. */
export const THEMES: ThemeDefinition[] = [mist, grit, folio, terra, grid, phosphor];

export const themeById = (id: string) => THEMES.find((t) => t.meta.id === id);

/** Load each theme's web fonts once. */
export function loadThemeFonts() {
  for (const t of THEMES) {
    const href = t.meta.fontsHref;
    if (!href || document.querySelector(`link[data-ds-font="${t.meta.id}"]`)) continue;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    link.dataset.dsFont = t.meta.id;
    document.head.appendChild(link);
  }
}

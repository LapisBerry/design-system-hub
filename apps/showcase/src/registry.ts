import type { ThemeDefinition } from "@dsh/core";
import { folio } from "@dsh/theme-folio";
import { grit } from "@dsh/theme-grit";
import { mist } from "@dsh/theme-mist";
import { phosphor } from "@dsh/theme-phosphor";
import { terra } from "@dsh/theme-terra";
import { grid } from "@dsh/theme-grid";
import { konstrukt } from "@dsh/theme-konstrukt";
import { sorbet } from "@dsh/theme-sorbet";
import { noir } from "@dsh/theme-noir";
import { blueprint } from "@dsh/theme-blueprint";
import { riso } from "@dsh/theme-riso";
import { dial } from "@dsh/theme-dial";

import "@dsh/core/styles.css";
import "@dsh/theme-folio/theme.css";
import "@dsh/theme-grit/theme.css";
import "@dsh/theme-mist/theme.css";
import "@dsh/theme-phosphor/theme.css";
import "@dsh/theme-terra/theme.css";
import "@dsh/theme-grid/theme.css";
import "@dsh/theme-konstrukt/theme.css";
import "@dsh/theme-sorbet/theme.css";
import "@dsh/theme-noir/theme.css";
import "@dsh/theme-blueprint/theme.css";
import "@dsh/theme-riso/theme.css";
import "@dsh/theme-dial/theme.css";

/** Every design system in the hub. Add a new theme package here to show it in the showcase. */
export const THEMES: ThemeDefinition[] = [
  mist,
  grit,
  folio,
  terra,
  grid,
  phosphor,
  konstrukt,
  sorbet,
  noir,
  blueprint,
  riso,
  dial,
];

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

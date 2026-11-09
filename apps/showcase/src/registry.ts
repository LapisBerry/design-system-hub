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
import { kumo } from "@dsh/theme-kumo";
import { arcade } from "@dsh/theme-arcade";
import { clarity } from "@dsh/theme-clarity";
import { pow } from "@dsh/theme-pow";
import { origami } from "@dsh/theme-origami";
import { aurora } from "@dsh/theme-aurora";
import { sketch } from "@dsh/theme-sketch";
import { deco } from "@dsh/theme-deco";
import { graphite } from "@dsh/theme-graphite";
import { harbor } from "@dsh/theme-harbor";
import { puff } from "@dsh/theme-puff";
import { cyber } from "@dsh/theme-cyber";
import { vapor } from "@dsh/theme-vapor";
import { bevel } from "@dsh/theme-bevel";
import { botanica } from "@dsh/theme-botanica";
import { ledger } from "@dsh/theme-ledger";
import { tube } from "@dsh/theme-tube";
import { vesper } from "@dsh/theme-vesper";
import { squiggle } from "@dsh/theme-squiggle";
import { kraft } from "@dsh/theme-kraft";
import { wash } from "@dsh/theme-wash";
import { tropic } from "@dsh/theme-tropic";
import { fjord } from "@dsh/theme-fjord";
import { tile } from "@dsh/theme-tile";
import { atomic } from "@dsh/theme-atomic";
import { rivet } from "@dsh/theme-rivet";
import { marquee } from "@dsh/theme-marquee";
import { holo } from "@dsh/theme-holo";
import { wire } from "@dsh/theme-wire";
import { bento } from "@dsh/theme-bento";
import { contour } from "@dsh/theme-contour";
import { transit } from "@dsh/theme-transit";
import { receipt } from "@dsh/theme-receipt";
import { groove } from "@dsh/theme-groove";
import { relief } from "@dsh/theme-relief";
import { sprint } from "@dsh/theme-sprint";

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
import "@dsh/theme-kumo/theme.css";
import "@dsh/theme-arcade/theme.css";
import "@dsh/theme-clarity/theme.css";
import "@dsh/theme-pow/theme.css";
import "@dsh/theme-origami/theme.css";
import "@dsh/theme-aurora/theme.css";
import "@dsh/theme-sketch/theme.css";
import "@dsh/theme-deco/theme.css";
import "@dsh/theme-graphite/theme.css";
import "@dsh/theme-harbor/theme.css";
import "@dsh/theme-puff/theme.css";
import "@dsh/theme-cyber/theme.css";
import "@dsh/theme-vapor/theme.css";
import "@dsh/theme-bevel/theme.css";
import "@dsh/theme-botanica/theme.css";
import "@dsh/theme-ledger/theme.css";
import "@dsh/theme-tube/theme.css";
import "@dsh/theme-vesper/theme.css";
import "@dsh/theme-squiggle/theme.css";
import "@dsh/theme-kraft/theme.css";
import "@dsh/theme-wash/theme.css";
import "@dsh/theme-tropic/theme.css";
import "@dsh/theme-fjord/theme.css";
import "@dsh/theme-tile/theme.css";
import "@dsh/theme-atomic/theme.css";
import "@dsh/theme-rivet/theme.css";
import "@dsh/theme-marquee/theme.css";
import "@dsh/theme-holo/theme.css";
import "@dsh/theme-wire/theme.css";
import "@dsh/theme-bento/theme.css";
import "@dsh/theme-contour/theme.css";
import "@dsh/theme-transit/theme.css";
import "@dsh/theme-receipt/theme.css";
import "@dsh/theme-groove/theme.css";
import "@dsh/theme-relief/theme.css";
import "@dsh/theme-sprint/theme.css";

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
  kumo,
  arcade,
  clarity,
  pow,
  origami,
  aurora,
  sketch,
  deco,
  graphite,
  harbor,
  puff,
  cyber,
  vapor,
  bevel,
  botanica,
  ledger,
  tube,
  vesper,
  squiggle,
  kraft,
  wash,
  tropic,
  fjord,
  tile,
  atomic,
  rivet,
  marquee,
  holo,
  wire,
  bento,
  contour,
  transit,
  receipt,
  groove,
  relief,
  sprint,
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

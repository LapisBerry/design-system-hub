/**
 * Fails (exit 1) if any theme misses a WCAG contrast target.
 * Run with: pnpm check:contrast
 */
import { resolveColors, runContrastChecks, type ColorMode, type ThemeDefinition } from "@dsh/core";
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

const themes: ThemeDefinition[] = [folio, grit, mist, phosphor, terra, grid, konstrukt, sorbet, noir, blueprint, riso, dial,
  kumo, arcade, clarity, pow, origami, aurora, sketch, deco, graphite, harbor, puff, cyber,
  vapor, bevel, botanica, ledger, tube, vesper, squiggle, kraft, wash, tropic, fjord, tile,
  atomic, rivet, marquee, holo, wire, bento, contour, transit, receipt, groove, relief, sprint,
];
let failures = 0;

for (const theme of themes) {
  const modes: ColorMode[] = theme.colorDark ? ["light", "dark"] : ["light"];
  for (const mode of modes) {
    const label = theme.colorDark ? `${theme.meta.name} (${mode})` : theme.meta.name;
    console.log(`\n${label}`);
    for (const c of runContrastChecks(resolveColors(theme, mode))) {
      const ratio = c.ratio === null ? "  n/a" : c.ratio.toFixed(2).padStart(5);
      const mark = c.pass === false ? "FAIL" : "ok  ";
      if (c.pass === false) failures++;
      console.log(`  ${mark} ${ratio}  (min ${c.min})  ${c.label}`);
    }
  }
}

console.log(failures ? `\n${failures} contrast check(s) failed.` : "\nAll contrast checks passed.");
process.exit(failures ? 1 : 0);

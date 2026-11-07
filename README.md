# Design System Hub

One shared component base, many distinct design systems.

`@dsh/core` is the middle layer: accessible React components plus a token contract. Every design system in this repo is a small package that fills in that contract and adds a little personality CSS. The showcase app renders all of them side by side so you can compare and pick one for a project.

```
packages/
  core/                 @dsh/core: components, token schema, base styles
  themes/
    mist/               Soft light through frosted glass
    grit/               Neo-brutalist: thick lines, hard shadows
    folio/              Editorial: ink on paper, serif type
    terra/              Organic: clay, olive, sand, leaf corners
    grid/               Swiss precision for dense software
    phosphor/           Retro CRT terminal (dark only)
apps/
  showcase/             Vite + React gallery, compare view, token docs
scripts/
  check-contrast.ts     Fails if any theme misses WCAG contrast targets
```

## Run it

```bash
pnpm install
pnpm dev              # showcase at http://localhost:5173
pnpm build            # static site in apps/showcase/dist
pnpm typecheck
pnpm check:contrast
```

## The systems

| System | Feel | Good for | Modes |
| --- | --- | --- | --- |
| **Mist** | Frosted glass, lavender light, pill controls, spring motion | Wellness, productivity, consumer apps | Light, dark |
| **Grit** | Heavy outlines, offset shadows that press in, flat bright color | Indie tools, launch pages, creative apps | Light, dark |
| **Folio** | Serif type, hairline rules, small-caps labels, ruled inputs | Journals, newsletters, docs, portfolios | Light, dark |
| **Terra** | Earthy palette, leaf-shaped corners, paper grain | Food, travel, sustainability, lifestyle | Light, dark |
| **Grid** | Tight grotesque, strict 4px rhythm, one signal red, dense controls | Admin panels, analytics, finance | Light, dark |
| **Phosphor** | Green glow, scanlines, monospace, `[ BRACKETED ]` buttons | Dev tools, status pages, retro games | Dark only |

Every theme passes the contrast checks in `packages/core/src/tokens/contrast.ts` (4.5:1 for body text and primary button labels, 3:1 for large text and UI parts) in every mode it supports.

## How it works

1. **Components** in `@dsh/core` handle structure and behavior: keyboard support, ARIA wiring, focus rings, reduced motion. They render stable class names (`ds-button`) and data attributes (`data-variant="soft"`), never hard-coded colors.
2. **Base styles** (`@dsh/core/styles.css`) style those classes using only `--ds-*` CSS variables.
3. **A theme** is a `ThemeDefinition` object (color, type, shape, elevation, space, motion) plus an optional `theme.css` scoped to `[data-ds-theme="<id>"]` for details tokens can't express.
4. **`<DesignSystemProvider theme={…} mode="light|dark">`** turns the theme into CSS variables on a wrapper element. Providers can be nested or placed side by side.

### Components

Button, IconButton, Input, Textarea, Select, Field (label + hint + error), Checkbox, RadioGroup, Switch, Slider, Tabs, Accordion, Dialog, Tooltip, Alert, Badge, Card, Avatar, Progress, Spinner, Heading, Text, Code, Kbd, Divider.

## Use a system in another project

```tsx
import "@dsh/core/styles.css";
import "@dsh/theme-grit/theme.css";
import { DesignSystemProvider, Button } from "@dsh/core";
import { grit } from "@dsh/theme-grit";

export function App() {
  return (
    <DesignSystemProvider theme={grit} mode="light">
      <Button>Ship it</Button>
    </DesignSystemProvider>
  );
}
```

Packages export TypeScript source, so any modern bundler (Vite, Next.js with `transpilePackages`, etc.) can consume them directly from a workspace or a git dependency. Not using React? Open a system's **Tokens** tab in the showcase and copy its CSS variables.

Each theme lists its web fonts in `meta.fontsHref`; add that stylesheet to your page or self-host the same families.

## Create a new design system

1. Copy a theme folder, for example `packages/themes/mist` to `packages/themes/<name>`, and rename the package to `@dsh/theme-<name>`.
2. Edit `src/index.ts`. `defineTheme` type-checks every token, so missing values are compile errors. Set a unique `meta.id`.
3. Rewrite `src/theme.css` (or delete most of it). Scope every rule to `[data-ds-theme="<id>"]`.
4. Register it in `apps/showcase/src/registry.ts` (import the theme and its CSS, add to `THEMES`), add it to `apps/showcase/package.json`, and add it to `scripts/check-contrast.ts`.
5. `pnpm install && pnpm check:contrast && pnpm dev`.

Tips for a system that feels distinct rather than recolored: pick a strong type pairing first, decide on one signature detail (Grit's pressable shadows, Folio's ruled inputs, Terra's leaf corners), and let motion match the personality (Phosphor uses `steps()` easing, Mist uses spring overshoot).

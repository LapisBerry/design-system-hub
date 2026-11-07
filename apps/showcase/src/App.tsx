import { useEffect, useState, type ReactNode } from "react";
import { DesignSystemProvider, hasDarkMode, type ColorMode, type ThemeDefinition } from "@dsh/core";
import { THEMES, themeById } from "./registry.ts";
import { ComponentSheet, MiniPreview, SampleScreen, SPECIMENS, TypographySpecimen } from "./specimens.tsx";
import { TokenSheet } from "./TokenSheet.tsx";
import { MoonIcon, SunIcon } from "./icons.tsx";

/* ---------- Tiny hash router ---------- */

function useHashRoute(): string[] {
  const read = () => window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [parts, setParts] = useState(read);
  useEffect(() => {
    const on = () => {
      setParts(read());
      window.scrollTo({ top: 0 });
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return parts;
}

function readStored(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function writeStored(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable: fine, the choice just won't persist */
  }
}

/* ---------- App shell ---------- */

export function App() {
  const route = useHashRoute();
  const [mode, setMode] = useState<ColorMode>(() => {
    const stored = readStored("dsh-mode");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    writeStored("dsh-mode", mode);
  }, [mode]);

  const [page, a, b] = route;
  let content: ReactNode;
  if (page === "system" && a && themeById(a)) content = <SystemPage theme={themeById(a)!} tab={b ?? "preview"} mode={mode} />;
  else if (page === "compare") content = <ComparePage specimen={a ?? "buttons"} mode={mode} />;
  else content = <HomePage mode={mode} />;

  return (
    <div className="shell">
      <header className="shell-header">
        <a href="#/" className="shell-brand">
          <span className="shell-brand__mark" aria-hidden="true">
            {THEMES.slice(0, 4).map((t) => <i key={t.meta.id} style={{ background: t.color.primary }} />)}
          </span>
          Design System Hub
        </a>
        <nav className="shell-nav" aria-label="Main">
          <a href="#/" aria-current={!page ? "page" : undefined}>Gallery</a>
          <a href="#/compare" aria-current={page === "compare" ? "page" : undefined}>Compare</a>
          <details className="shell-menu">
            <summary aria-current={page === "system" ? "page" : undefined}>Systems</summary>
            <div className="shell-menu__list">
              {THEMES.map((t) => (
                <a key={t.meta.id} href={`#/system/${t.meta.id}`} onClick={(e) => (e.currentTarget.closest("details") as HTMLDetailsElement).removeAttribute("open")}>
                  <span className="shell-dot" style={{ background: t.color.primary }} />
                  {t.meta.name}
                </a>
              ))}
            </div>
          </details>
        </nav>
        <button
          type="button"
          className="shell-mode"
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={mode === "dark" ? "Light mode" : "Dark mode"}
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>
      <main className="shell-main">{content}</main>
      <footer className="shell-footer">
        Every system here is built on <code>@dsh/core</code>: the same components, different tokens and personality.
      </footer>
    </div>
  );
}

/* ---------- Gallery ---------- */

function HomePage({ mode }: { mode: ColorMode }) {
  return (
    <>
      <section className="shell-hero">
        <p className="shell-eyebrow">{THEMES.length} systems · 1 shared core</p>
        <h1>One component base. Many distinct design systems.</h1>
        <p className="shell-lede">
          Every system below runs the exact same accessible React components from <code>@dsh/core</code>. Only the tokens and a thin
          personality layer change. Pick one for your next project, compare them side by side, or fork one to start your own.
        </p>
        <div className="shell-hero__actions">
          <a className="shell-btn shell-btn--primary" href="#/compare">Compare side by side</a>
          <a className="shell-btn" href="#/system/mist">Explore a system</a>
        </div>
      </section>

      <section className="gallery" aria-label="Design systems">
        {THEMES.map((t) => (
          <a key={t.meta.id} className="gallery-card" href={`#/system/${t.meta.id}`}>
            <DesignSystemProvider theme={t} mode={mode} className="gallery-card__preview" inert>
              <MiniPreview />
            </DesignSystemProvider>
            <div className="gallery-card__meta">
              <div className="gallery-card__title">
                <strong>{t.meta.name}</strong>
                <span className="shell-swatches" aria-hidden="true">
                  {[t.color.primary, t.color.accent, t.color.text, t.color.bg].map((c, i) => <i key={i} style={{ background: c }} />)}
                </span>
              </div>
              <p>{t.meta.description}</p>
              <div className="shell-tags">
                {t.meta.keywords.map((k) => <span key={k}>{k}</span>)}
                {!hasDarkMode(t) && <span>{t.meta.scheme === "dark" ? "dark only" : "light only"}</span>}
              </div>
            </div>
          </a>
        ))}
      </section>

      <section className="shell-how">
        <h2>How the hub fits together</h2>
        <ol>
          <li>
            <strong><code>@dsh/core</code></strong> holds the components, their accessibility behavior, and a base stylesheet that reads only
            <code> --ds-*</code> CSS variables.
          </li>
          <li>
            <strong>A theme package</strong> fills in the token contract (<code>defineTheme</code>): color, type, shape, elevation, spacing and motion.
            An optional <code>theme.css</code> adds details tokens can't express, such as Grit's pressable shadows or Phosphor's scanlines.
          </li>
          <li>
            <strong><code>&lt;DesignSystemProvider theme=&#123;…&#125;&gt;</code></strong> scopes a theme to any part of the page, so several systems
            can live side by side, like they do here.
          </li>
        </ol>
      </section>
    </>
  );
}

/* ---------- System detail ---------- */

const SYSTEM_TABS = [
  { id: "preview", label: "Preview" },
  { id: "components", label: "Components" },
  { id: "tokens", label: "Tokens" },
  { id: "usage", label: "Use it" },
];

function SystemPage({ theme, tab, mode }: { theme: ThemeDefinition; tab: string; mode: ColorMode }) {
  const supportsMode = hasDarkMode(theme);
  return (
    <>
      <section className="system-head">
        <div>
          <p className="shell-eyebrow">Design system</p>
          <h1>{theme.meta.name}</h1>
          <p className="shell-lede">{theme.meta.description}</p>
          <div className="shell-tags">
            {theme.meta.keywords.map((k) => <span key={k}>{k}</span>)}
            {!supportsMode && <span>{theme.meta.scheme === "dark" ? "dark only" : "light only"}</span>}
          </div>
        </div>
        <nav className="system-switch" aria-label="Other systems">
          {THEMES.map((t) => (
            <a key={t.meta.id} href={`#/system/${t.meta.id}/${tab}`} aria-current={t.meta.id === theme.meta.id ? "page" : undefined} title={t.meta.name}>
              <span className="shell-dot" style={{ background: t.color.primary }} />
              {t.meta.name}
            </a>
          ))}
        </nav>
      </section>

      <nav className="system-tabs" aria-label={`${theme.meta.name} sections`}>
        {SYSTEM_TABS.map((t) => (
          <a key={t.id} href={`#/system/${theme.meta.id}/${t.id}`} aria-current={tab === t.id ? "page" : undefined}>
            {t.label}
          </a>
        ))}
      </nav>

      {tab === "usage" ? (
        <UsageGuide theme={theme} />
      ) : (
        <DesignSystemProvider theme={theme} mode={mode} className="system-canvas">
          {tab === "components" && <ComponentSheet />}
          {tab === "tokens" && <TokenSheet />}
          {tab === "preview" && (
            <div className="system-preview">
              <TypographySpecimen />
              <SampleScreen />
            </div>
          )}
        </DesignSystemProvider>
      )}
    </>
  );
}

function UsageGuide({ theme }: { theme: ThemeDefinition }) {
  const id = theme.meta.id;
  const pkg = `@dsh/theme-${id}`;
  return (
    <div className="usage">
      <h2>Use {theme.meta.name} in a project</h2>
      <p>Install the core and the theme (from this monorepo as a workspace, or once published to a registry):</p>
      <pre>{`pnpm add @dsh/core ${pkg}`}</pre>
      <p>Import the styles once, then wrap your app (or any part of it) in the provider:</p>
      <pre>{`import "@dsh/core/styles.css";
import "${pkg}/theme.css";
import { DesignSystemProvider, Button, Field, Input } from "@dsh/core";
import { ${id} } from "${pkg}";

export function App() {
  return (
    <DesignSystemProvider theme={${id}} mode="${hasDarkMode(theme) ? "light" : theme.meta.scheme ?? "light"}">
      <Field label="Email">
        <Input type="email" />
      </Field>
      <Button>Subscribe</Button>
    </DesignSystemProvider>
  );
}`}</pre>
      {theme.meta.fontsHref && (
        <>
          <p>{theme.meta.name} uses web fonts. Add this to your HTML head (or self-host the same families):</p>
          <pre>{`<link rel="stylesheet" href="${theme.meta.fontsHref}" />`}</pre>
        </>
      )}
      <p>Not using React? Copy the CSS variables from the Tokens tab and style your own markup with them.</p>
    </div>
  );
}

/* ---------- Compare ---------- */

function ComparePage({ specimen, mode }: { specimen: string; mode: ColorMode }) {
  const current = SPECIMENS.find((s) => s.id === specimen) ?? SPECIMENS[0];
  const { Component } = current;
  return (
    <>
      <section className="compare-head">
        <div>
          <p className="shell-eyebrow">Compare</p>
          <h1>Same components, {THEMES.length} personalities</h1>
          <p className="shell-lede">Each panel below renders identical markup. Only the theme changes.</p>
        </div>
        <nav className="compare-picker" aria-label="Pick what to compare">
          {SPECIMENS.map((s) => (
            <a key={s.id} href={`#/compare/${s.id}`} aria-current={s.id === current.id ? "page" : undefined}>{s.title}</a>
          ))}
        </nav>
      </section>
      <section className="compare-grid" data-specimen={current.id}>
        {THEMES.map((t) => (
          <div className="compare-cell" key={t.meta.id}>
            <div className="compare-cell__label">
              <a href={`#/system/${t.meta.id}/components`}>
                <span className="shell-dot" style={{ background: t.color.primary }} />
                {t.meta.name}
              </a>
            </div>
            <DesignSystemProvider theme={t} mode={mode} className="compare-cell__canvas">
              <Component />
            </DesignSystemProvider>
          </div>
        ))}
      </section>
    </>
  );
}

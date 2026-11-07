import { createContext, useContext, useMemo, type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import type { ColorMode, ThemeDefinition } from "./tokens/schema.ts";
import { hasDarkMode, themeToCssVars } from "./tokens/css-vars.ts";

interface DesignSystemContextValue {
  theme: ThemeDefinition;
  mode: ColorMode;
}

const DesignSystemContext = createContext<DesignSystemContextValue | null>(null);

export function useDesignSystem(): DesignSystemContextValue {
  const ctx = useContext(DesignSystemContext);
  if (!ctx) throw new Error("useDesignSystem must be used inside <DesignSystemProvider>");
  return ctx;
}

export interface DesignSystemProviderProps extends HTMLAttributes<HTMLDivElement> {
  theme: ThemeDefinition;
  /** Falls back to "light" when the theme has no dark palette. */
  mode?: ColorMode;
  children: ReactNode;
}

/**
 * Scopes a theme to a subtree. Several providers can sit on one page,
 * which is how the showcase renders systems side by side.
 */
export function DesignSystemProvider({ theme, mode = "light", children, className, style, ...rest }: DesignSystemProviderProps) {
  const effectiveMode: ColorMode = mode === "dark" && hasDarkMode(theme) ? "dark" : "light";
  const vars = useMemo(() => themeToCssVars(theme, effectiveMode), [theme, effectiveMode]);
  const value = useMemo(() => ({ theme, mode: effectiveMode }), [theme, effectiveMode]);
  return (
    <DesignSystemContext.Provider value={value}>
      <div
        {...rest}
        className={["ds-root", className].filter(Boolean).join(" ")}
        data-ds-theme={theme.meta.id}
        data-ds-mode={effectiveMode}
        style={{ ...(vars as CSSProperties), colorScheme: effectiveMode === "dark" ? "dark" : (theme.meta.scheme ?? "light"), ...style }}
      >
        {children}
      </div>
    </DesignSystemContext.Provider>
  );
}

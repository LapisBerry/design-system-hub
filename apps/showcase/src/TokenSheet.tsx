import { useState } from "react";
import { Badge, Button, Code, Heading, Text, resolveColors, runContrastChecks, themeToCss, useDesignSystem, type ColorTokens } from "@dsh/core";
import { Row, Stack } from "./specimens.tsx";

const COLOR_GROUPS: Array<{ title: string; keys: Array<keyof ColorTokens> }> = [
  { title: "Surfaces", keys: ["bg", "surface", "surfaceAlt", "border", "borderStrong"] },
  { title: "Text", keys: ["text", "textMuted"] },
  { title: "Brand", keys: ["primary", "onPrimary", "accent", "onAccent", "focus"] },
  { title: "Status", keys: ["success", "warning", "danger", "info", "onStatus"] },
];

export function TokenSheet() {
  const { theme, mode } = useDesignSystem();
  const colors = resolveColors(theme, mode);
  const checks = runContrastChecks(colors);
  const [moved, setMoved] = useState(false);
  const [copied, setCopied] = useState(false);
  const css = themeToCss(theme, mode);

  return (
    <Stack gap={10}>
      <section className="spec-section">
        <div className="spec-section__head"><Heading level={3} size={2}>Color</Heading></div>
        <Stack gap={5}>
          {COLOR_GROUPS.map((g) => (
            <div key={g.title}>
              <Text size="sm" muted style={{ marginBottom: "var(--ds-space-2)" }}>{g.title}</Text>
              <div className="tok-swatches">
                {g.keys.map((k) => (
                  <div className="tok-swatch" key={k}>
                    <div className="tok-swatch__chip" style={{ background: colors[k] }} />
                    <div className="tok-swatch__name">{k}</div>
                    <div className="tok-swatch__value">{colors[k]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Stack>
      </section>

      <section className="spec-section">
        <div className="spec-section__head">
          <Heading level={3} size={2}>Contrast</Heading>
          <Text size="sm" muted>WCAG 2 ratios for the pairs the components actually use.</Text>
        </div>
        <div className="tok-table" role="table" aria-label="Contrast checks">
          {checks.map((c) => (
            <div className="tok-table__row" role="row" key={c.label}>
              <span role="cell" className="tok-contrast-sample" style={{ background: colors[c.bg], color: colors[c.fg] }}>Aa</span>
              <span role="cell" style={{ flex: 1 }}>{c.label}</span>
              <span role="cell" className="tok-mono">{c.ratio ? c.ratio.toFixed(2) : "n/a"} : 1</span>
              <span role="cell">
                <Badge tone={c.pass ? "success" : "danger"} variant="soft">{c.pass ? `Pass ${c.min}` : `Fail ${c.min}`}</Badge>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="spec-section">
        <div className="spec-section__head">
          <Heading level={3} size={2}>Type scale</Heading>
          <Text size="sm" muted>
            {theme.type.baseSize}px base, ratio {theme.type.scaleRatio}. Display: <Code>{theme.type.fontDisplay.split(",")[0]}</Code> Body:{" "}
            <Code>{theme.type.fontBody.split(",")[0]}</Code>
          </Text>
        </div>
        <Stack gap={2}>
          {[6, 5, 4, 3, 2, 1, 0, -1, -2].map((step) => {
            const name = step < 0 ? `n${-step}` : String(step);
            const px = theme.type.baseSize * Math.pow(theme.type.scaleRatio, step);
            return (
              <div className="tok-type-row" key={step}>
                <span className="tok-mono tok-type-row__label">{name} · {px.toFixed(0)}px</span>
                <span
                  style={{
                    fontSize: `var(--ds-text-${name})`,
                    fontFamily: step >= 2 ? "var(--ds-font-display)" : "var(--ds-font-body)",
                    fontWeight: step >= 2 ? "var(--ds-weight-display)" : "var(--ds-weight-body)",
                    letterSpacing: step >= 2 ? "var(--ds-tracking-display)" : undefined,
                    lineHeight: 1.15,
                  }}
                >
                  The quick brown fox
                </span>
              </div>
            );
          })}
        </Stack>
      </section>

      <section className="spec-section">
        <div className="spec-section__head"><Heading level={3} size={2}>Shape and elevation</Heading></div>
        <div className="tok-shapes">
          {(["Sm", "Md", "Lg", "Control"] as const).map((r) => (
            <div key={r} className="tok-shape" style={{ borderRadius: `var(--ds-radius-${r.toLowerCase()})` }}>
              <span className="tok-mono">radius {r.toLowerCase()}</span>
              <span className="tok-mono tok-dim">{theme.shape[`radius${r}`]}</span>
            </div>
          ))}
          {(["Sm", "Md", "Lg"] as const).map((s) => (
            <div key={s} className="tok-shape" style={{ boxShadow: `var(--ds-shadow-${s.toLowerCase()})`, borderColor: "transparent" }}>
              <span className="tok-mono">shadow {s.toLowerCase()}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="spec-section">
        <div className="spec-section__head">
          <Heading level={3} size={2}>Motion</Heading>
          <Text size="sm" muted>
            Fast {theme.motion.durationFast}, base {theme.motion.durationBase}, slow {theme.motion.durationSlow}. Press scale {theme.motion.pressScale}.
          </Text>
        </div>
        <Stack gap={3}>
          {(["fast", "base", "slow"] as const).map((d) => (
            <div className="tok-motion-track" key={d}>
              <div
                className="tok-motion-dot"
                style={{
                  transform: moved ? "translateX(calc(100cqw - 100%))" : "none",
                  transition: `transform var(--ds-duration-${d}) var(--ds-easing-enter)`,
                }}
              />
              <span className="tok-mono tok-dim tok-motion-label">{d}</span>
            </div>
          ))}
          <Row><Button size="sm" variant="soft" onClick={() => setMoved((m) => !m)}>Play motion</Button></Row>
        </Stack>
      </section>

      <section className="spec-section">
        <div className="spec-section__head">
          <Heading level={3} size={2}>CSS variables</Heading>
          <Text size="sm" muted>Paste these into any project to use the tokens without React.</Text>
        </div>
        <Stack gap={2}>
          <pre className="tok-code">{css}</pre>
          <Row>
            <Button
              size="sm"
              variant="outline"
              tone="neutral"
              onClick={() => {
                navigator.clipboard?.writeText(css).then(() => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }, () => {});
              }}
            >
              {copied ? "Copied" : "Copy CSS"}
            </Button>
          </Row>
        </Stack>
      </section>
    </Stack>
  );
}

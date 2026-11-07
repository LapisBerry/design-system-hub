import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils.ts";

export type Tone = "neutral" | "primary" | "accent" | "success" | "warning" | "danger" | "info";

/* ---------- Text ---------- */

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  /** Visual size on the type scale, independent of the semantic level. */
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ level = 2, size, className, ...rest }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag className={cx("ds-heading", className)} data-size={size ?? 7 - level} {...rest} />;
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg";
  muted?: boolean;
  as?: "p" | "span" | "div";
}

export function Text({ size = "md", muted, as: Tag = "p", className, ...rest }: TextProps) {
  return <Tag className={cx("ds-text", className)} data-size={size} data-muted={muted || undefined} {...rest} />;
}

export function Kbd({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <kbd className={cx("ds-kbd", className)} {...rest} />;
}

export function Code({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <code className={cx("ds-code", className)} {...rest} />;
}

/* ---------- Badge ---------- */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  variant?: "solid" | "soft" | "outline";
}

export function Badge({ tone = "neutral", variant = "soft", className, ...rest }: BadgeProps) {
  return <span className={cx("ds-badge", className)} data-tone={tone} data-variant={variant} {...rest} />;
}

/* ---------- Card ---------- */

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outlined" | "filled";
  padding?: "none" | "sm" | "md" | "lg";
  interactive?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { variant = "elevated", padding = "md", interactive, className, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={cx("ds-card", className)}
      data-variant={variant}
      data-padding={padding}
      data-interactive={interactive || undefined}
      {...rest}
    />
  );
});

/* ---------- Avatar ---------- */

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
}

export function Avatar({ name, src, size = "md", className, ...rest }: AvatarProps) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
  return (
    <span className={cx("ds-avatar", className)} data-size={size} role="img" aria-label={name} {...rest}>
      {src ? <img src={src} alt="" /> : <span aria-hidden="true">{initials}</span>}
    </span>
  );
}

/* ---------- Alert ---------- */

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: Exclude<Tone, "primary" | "accent" | "neutral">;
  title?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
}

export function Alert({ tone = "info", title, icon, action, className, children, ...rest }: AlertProps) {
  return (
    <div
      className={cx("ds-alert", className)}
      data-tone={tone}
      role={tone === "danger" || tone === "warning" ? "alert" : "status"}
      {...rest}
    >
      {icon && <span className="ds-alert__icon" aria-hidden="true">{icon}</span>}
      <div className="ds-alert__body">
        {title && <div className="ds-alert__title">{title}</div>}
        {children && <div className="ds-alert__content">{children}</div>}
      </div>
      {action && <div className="ds-alert__action">{action}</div>}
    </div>
  );
}

/* ---------- Progress & Spinner ---------- */

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** 0-100. Omit for an indeterminate bar. */
  value?: number;
  label: string;
  tone?: "primary" | "accent" | "success" | "warning" | "danger";
}

export function Progress({ value, label, tone = "primary", className, ...rest }: ProgressProps) {
  const clamped = value == null ? undefined : Math.max(0, Math.min(100, value));
  return (
    <div
      className={cx("ds-progress", className)}
      role="progressbar"
      aria-label={label}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clamped}
      data-tone={tone}
      data-indeterminate={clamped == null || undefined}
      {...rest}
    >
      <div className="ds-progress__bar" style={clamped == null ? undefined : { width: `${clamped}%` }} />
    </div>
  );
}

export interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function Spinner({ size = "md", label = "Loading", className, ...rest }: SpinnerProps) {
  return <span className={cx("ds-spinner", className)} data-size={size} role="status" aria-label={label} {...rest} />;
}

/* ---------- Divider ---------- */

export function Divider({ className, ...rest }: HTMLAttributes<HTMLHRElement>) {
  return <hr className={cx("ds-divider", className)} {...rest} />;
}

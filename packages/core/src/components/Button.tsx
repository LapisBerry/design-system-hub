import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cx } from "../utils.ts";
import { Spinner } from "./Display.tsx";

export type ButtonVariant = "solid" | "soft" | "outline" | "ghost";
export type ButtonTone = "primary" | "accent" | "neutral" | "danger";
export type ControlSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  tone?: ButtonTone;
  size?: ControlSize;
  loading?: boolean;
  /** Icon placed before the label. */
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "solid", tone = "primary", size = "md", loading, startIcon, endIcon, fullWidth, className, children, disabled, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cx("ds-button", className)}
      data-variant={variant}
      data-tone={tone}
      data-size={size}
      data-full-width={fullWidth || undefined}
      data-loading={loading || undefined}
      aria-busy={loading || undefined}
      disabled={disabled || loading}
      {...rest}
    >
      {loading ? <Spinner size="sm" label="Loading" /> : startIcon}
      {children != null && <span className="ds-button__label">{children}</span>}
      {endIcon}
    </button>
  );
});

export interface IconButtonProps extends Omit<ButtonProps, "startIcon" | "endIcon" | "children" | "fullWidth"> {
  /** Required: icon-only buttons need an accessible name. */
  label: string;
  icon: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { label, icon, className, ...rest },
  ref,
) {
  return (
    <Button ref={ref} aria-label={label} title={label} className={cx("ds-icon-button", className)} startIcon={icon} {...rest} />
  );
});

import { cloneElement, isValidElement, useEffect, useId, useRef, type ReactElement, type ReactNode } from "react";
import { cx } from "../utils.ts";

/* ---------- Dialog (native <dialog>: focus trap, Esc and top layer for free) ---------- */

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  /** Buttons shown at the bottom right. */
  footer?: ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Dialog({ open, onOpenChange, title, description, children, footer, size = "md", className }: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const id = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className={cx("ds-dialog", className)}
      data-size={size}
      aria-labelledby={`${id}-title`}
      aria-describedby={description ? `${id}-desc` : undefined}
      onClose={() => onOpenChange(false)}
      onClick={(e) => {
        // Click on the backdrop (the dialog element itself, outside the panel) closes it.
        if (e.target === e.currentTarget) onOpenChange(false);
      }}
    >
      <div className="ds-dialog__panel">
        <header className="ds-dialog__header">
          <h2 className="ds-dialog__title" id={`${id}-title`}>{title}</h2>
          {description && <p className="ds-dialog__description" id={`${id}-desc`}>{description}</p>}
          <button type="button" className="ds-dialog__close" aria-label="Close" onClick={() => onOpenChange(false)}>
            <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" /></svg>
          </button>
        </header>
        {children && <div className="ds-dialog__body">{children}</div>}
        {footer && <footer className="ds-dialog__footer">{footer}</footer>}
      </div>
    </dialog>
  );
}

/* ---------- Tooltip (shows on hover and keyboard focus) ---------- */

export interface TooltipProps {
  content: ReactNode;
  side?: "top" | "bottom";
  /** A single focusable element, e.g. a Button. */
  children: ReactElement<{ "aria-describedby"?: string }>;
}

export function Tooltip({ content, side = "top", children }: TooltipProps) {
  const id = useId();
  const trigger = isValidElement(children) ? cloneElement(children, { "aria-describedby": id }) : children;
  return (
    <span className="ds-tooltip" data-side={side}>
      {trigger}
      <span role="tooltip" id={id} className="ds-tooltip__content">{content}</span>
    </span>
  );
}

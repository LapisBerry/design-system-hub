import {
  createContext,
  forwardRef,
  useContext,
  useId,
  useState,
  type CSSProperties,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cx } from "../utils.ts";
import type { ControlSize } from "./Button.tsx";

/* ---------- Field: label + hint + error wiring ---------- */

interface FieldContextValue {
  id: string;
  describedBy?: string;
  invalid: boolean;
}
const FieldContext = createContext<FieldContextValue | null>(null);

export interface FieldProps {
  label: ReactNode;
  hint?: ReactNode;
  /** When set, the control is marked invalid and this message is announced. */
  error?: ReactNode;
  required?: boolean;
  className?: string;
  children: ReactNode;
}

/** Wraps any single form control and connects its label, hint and error for screen readers. */
export function Field({ label, hint, error, required, className, children }: FieldProps) {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <FieldContext.Provider value={{ id, describedBy, invalid: Boolean(error) }}>
      <div className={cx("ds-field", className)} data-invalid={error ? true : undefined}>
        <label className="ds-field__label" htmlFor={id}>
          {label}
          {required && <span className="ds-field__required" aria-hidden="true"> *</span>}
        </label>
        {children}
        {hint && <div className="ds-field__hint" id={hintId}>{hint}</div>}
        {error && <div className="ds-field__error" id={errorId}>{error}</div>}
      </div>
    </FieldContext.Provider>
  );
}

function useFieldProps<T extends { id?: string; "aria-describedby"?: string; "aria-invalid"?: unknown }>(props: T) {
  const field = useContext(FieldContext);
  if (!field) return props;
  return {
    ...props,
    id: props.id ?? field.id,
    "aria-describedby": props["aria-describedby"] ?? field.describedBy,
    "aria-invalid": props["aria-invalid"] ?? (field.invalid || undefined),
  };
}

/* ---------- Text inputs ---------- */

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: ControlSize;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { size = "md", startAdornment, endAdornment, className, ...props },
  ref,
) {
  const p = useFieldProps(props);
  return (
    <div className={cx("ds-input", className)} data-size={size} data-disabled={p.disabled || undefined}>
      {startAdornment && <span className="ds-input__adornment">{startAdornment}</span>}
      <input ref={ref} className="ds-input__control" {...p} />
      {endAdornment && <span className="ds-input__adornment">{endAdornment}</span>}
    </div>
  );
});

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(function Textarea(
  { className, rows = 4, ...props },
  ref,
) {
  const p = useFieldProps(props);
  return <textarea ref={ref} rows={rows} className={cx("ds-textarea", className)} {...p} />;
});

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  size?: ControlSize;
}

/** Native select, so it stays accessible and mobile friendly. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { size = "md", className, children, ...props },
  ref,
) {
  const p = useFieldProps(props);
  return (
    <div className={cx("ds-select", className)} data-size={size}>
      <select ref={ref} className="ds-select__control" {...p}>
        {children}
      </select>
      <svg className="ds-select__chevron" viewBox="0 0 16 16" aria-hidden="true">
        <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
});

/* ---------- Choice controls ---------- */

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: ReactNode;
  description?: ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, className, id, ...rest },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  return (
    <div className={cx("ds-choice", className)} data-kind="checkbox">
      <input ref={ref} type="checkbox" id={inputId} className="ds-choice__input" {...rest} />
      <span className="ds-choice__box" aria-hidden="true">
        <svg viewBox="0 0 16 16"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      <label htmlFor={inputId} className="ds-choice__label">
        {label}
        {description && <span className="ds-choice__description">{description}</span>}
      </label>
    </div>
  );
});

export interface RadioGroupProps {
  name?: string;
  legend: ReactNode;
  options: Array<{ value: string; label: ReactNode; description?: ReactNode; disabled?: boolean }>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function RadioGroup({ name, legend, options, value, defaultValue, onChange, orientation = "vertical", className }: RadioGroupProps) {
  const autoName = useId();
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  return (
    <fieldset className={cx("ds-radio-group", className)} data-orientation={orientation}>
      <legend className="ds-field__label">{legend}</legend>
      <div className="ds-radio-group__options">
        {options.map((o) => {
          const id = `${autoName}-${o.value}`;
          return (
            <div className="ds-choice" data-kind="radio" key={o.value}>
              <input
                type="radio"
                id={id}
                className="ds-choice__input"
                name={name ?? autoName}
                value={o.value}
                checked={current === o.value}
                disabled={o.disabled}
                onChange={() => {
                  setInternal(o.value);
                  onChange?.(o.value);
                }}
              />
              <span className="ds-choice__box" aria-hidden="true" />
              <label htmlFor={id} className="ds-choice__label">
                {o.label}
                {o.description && <span className="ds-choice__description">{o.description}</span>}
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
}

export interface SwitchProps {
  label: ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export function Switch({ label, checked, defaultChecked = false, onCheckedChange, disabled, className }: SwitchProps) {
  const id = useId();
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked ?? internal;
  return (
    <div className={cx("ds-switch", className)}>
      <button
        type="button"
        role="switch"
        id={id}
        aria-checked={on}
        disabled={disabled}
        className="ds-switch__track"
        data-state={on ? "on" : "off"}
        onClick={() => {
          setInternal(!on);
          onCheckedChange?.(!on);
        }}
      >
        <span className="ds-switch__thumb" />
      </button>
      <label htmlFor={id} className="ds-switch__label">{label}</label>
    </div>
  );
}

export interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "value" | "defaultValue"> {
  label: ReactNode;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  showValue?: boolean;
  formatValue?: (value: number) => string;
}

export function Slider({ label, value, defaultValue, onValueChange, showValue = true, formatValue = String, min = 0, max = 100, step = 1, className, ...rest }: SliderProps) {
  const id = useId();
  const [internal, setInternal] = useState(defaultValue ?? Number(min));
  const current = value ?? internal;
  const pct = ((current - Number(min)) / (Number(max) - Number(min))) * 100;
  return (
    <div className={cx("ds-slider", className)}>
      <div className="ds-slider__header">
        <label htmlFor={id} className="ds-field__label">{label}</label>
        {showValue && <output htmlFor={id} className="ds-slider__value">{formatValue(current)}</output>}
      </div>
      <input
        id={id}
        type="range"
        className="ds-slider__control"
        min={min}
        max={max}
        step={step}
        value={current}
        style={{ "--ds-slider-fill": `${pct}%` } as CSSProperties}
        onChange={(e) => {
          const v = Number(e.target.value);
          setInternal(v);
          onValueChange?.(v);
        }}
        {...rest}
      />
    </div>
  );
}

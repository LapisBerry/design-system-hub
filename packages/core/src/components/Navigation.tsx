import { createContext, useContext, useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { cx } from "../utils.ts";

/* ---------- Tabs (WAI-ARIA tabs pattern, automatic activation) ---------- */

interface TabsContextValue {
  baseId: string;
  value: string;
  setValue: (v: string) => void;
}
const TabsContext = createContext<TabsContextValue | null>(null);
const useTabs = () => {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs parts must be used inside <Tabs>");
  return ctx;
};

export interface TabsProps {
  value?: string;
  defaultValue: string;
  onValueChange?: (value: string) => void;
  variant?: "line" | "pill" | "enclosed";
  className?: string;
  children: ReactNode;
}

export function Tabs({ value, defaultValue, onValueChange, variant = "line", className, children }: TabsProps) {
  const baseId = useId();
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;
  const setValue = (v: string) => {
    setInternal(v);
    onValueChange?.(v);
  };
  return (
    <TabsContext.Provider value={{ baseId, value: current, setValue }}>
      <div className={cx("ds-tabs", className)} data-variant={variant}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabList({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const tabs = Array.from(ref.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]:not(:disabled)') ?? []);
    const i = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (i < 0) return;
    let next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % tabs.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + tabs.length) % tabs.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = tabs.length - 1;
    if (next >= 0) {
      e.preventDefault();
      tabs[next]!.focus();
      tabs[next]!.click();
    }
  };
  return (
    <div ref={ref} role="tablist" aria-label={label} className={cx("ds-tabs__list", className)} onKeyDown={onKeyDown}>
      {children}
    </div>
  );
}

export function Tab({ value, children, disabled }: { value: string; children: ReactNode; disabled?: boolean }) {
  const { baseId, value: current, setValue } = useTabs();
  const selected = current === value;
  return (
    <button
      type="button"
      role="tab"
      id={`${baseId}-tab-${value}`}
      aria-controls={`${baseId}-panel-${value}`}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      disabled={disabled}
      className="ds-tabs__tab"
      data-state={selected ? "active" : "inactive"}
      onClick={() => setValue(value)}
    >
      {children}
    </button>
  );
}

export function TabPanel({ value, children, className }: { value: string; children: ReactNode; className?: string }) {
  const { baseId, value: current } = useTabs();
  if (current !== value) return null;
  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={cx("ds-tabs__panel", className)}
    >
      {children}
    </div>
  );
}

/* ---------- Accordion (built on native details/summary) ---------- */

export interface AccordionItem {
  id: string;
  title: ReactNode;
  content: ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  /** Allow only one item open at a time. */
  single?: boolean;
  defaultOpen?: string[];
  className?: string;
}

export function Accordion({ items, single, defaultOpen = [], className }: AccordionProps) {
  const name = useId();
  return (
    <div className={cx("ds-accordion", className)}>
      {items.map((item) => (
        <details
          key={item.id}
          className="ds-accordion__item"
          open={defaultOpen.includes(item.id) || undefined}
          // `name` gives exclusive accordions natively in modern browsers.
          {...(single ? { name } : {})}
        >
          <summary className="ds-accordion__trigger">
            <span>{item.title}</span>
            <svg className="ds-accordion__chevron" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </summary>
          <div className="ds-accordion__content">{item.content}</div>
        </details>
      ))}
    </div>
  );
}

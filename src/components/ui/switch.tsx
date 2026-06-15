"use client";

import * as React from "react";

type SwitchProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange"
> & {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      onCheckedChange,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isControlled = typeof checked === "boolean";
    const [internal, setInternal] = React.useState<boolean>(
      defaultChecked ?? false,
    );
    const value = isControlled ? (checked as boolean) : internal;

    return (
      <button
        {...props}
        ref={ref}
        type={props.type ?? "button"}
        role="switch"
        aria-checked={value}
        disabled={disabled}
        onClick={(e) => {
          props.onClick?.(e);
          if (disabled) return;
          const next = !value;
          if (!isControlled) setInternal(next);
          onCheckedChange?.(next);
        }}
        className={cx(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-main-border p-0.5 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
          disabled && "cursor-not-allowed opacity-50",
          value ? "bg-black" : "bg-white",
          className,
        )}
      >
        <span
          className={cx(
            "pointer-events-none block h-5 w-5 rounded-full border shadow-md ring-0 transition-all duration-300",
            value ? "translate-x-5" : "translate-x-0",
            checked ? "bg-black border-zinc-700" : "bg-white border-main-border",
          )}
        />
      </button>
    );
  },
);
Switch.displayName = "Switch";


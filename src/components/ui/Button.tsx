import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
}

const base =
  "relative inline-flex items-center justify-center gap-2 font-sans font-medium rounded-[var(--r-pill)] " +
  "transition-[transform,background,color,box-shadow] duration-200 ease-out " +
  "active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[var(--text-small)]",
  lg: "h-[3.25rem] px-7 text-[var(--text-body)]",
};

/* primary = KDS dark (matches the product + the reference sites).
   accent = dusty mauve (--accent), the signature note for rare accent moments.
   Meaning never rides on color alone — label + position carry it (colorblind-safe). */
const variants: Record<Variant, string> = {
  primary:
    "text-dark-ink " +
    "[background:linear-gradient(180deg,var(--neutral-700),var(--neutral-900))] " +
    "shadow-[0_1px_2px_rgba(82,75,71,.25),0_0_0_1px_var(--neutral-950),inset_0_1px_0_rgba(255,255,255,.12)] " +
    "hover:[background:linear-gradient(180deg,var(--neutral-600),var(--neutral-800))] hover:-translate-y-px",
  secondary:
    "bg-surface text-ink border border-line-strong " +
    "shadow-[var(--shadow-sm)] hover:border-ink hover:-translate-y-px",
  accent:
    "bg-accent text-white shadow-[var(--shadow-sm)] hover:bg-accent-hover hover:shadow-[var(--shadow-md)] hover:-translate-y-px",
  ghost: "bg-transparent text-ink hover:bg-surface-warm",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", href, className = "", children, ...props },
  ref,
) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button ref={ref} className={cls} {...props}>{children}</button>;
});

export default Button;

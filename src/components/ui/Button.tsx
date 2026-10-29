import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

type Variant = "primary" | "gold" | "outline" | "outline-light" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-900 text-cream-50 shadow-[0_10px_30px_-10px_rgba(20,38,28,0.6)] hover:bg-forest-800 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-12px_rgba(20,38,28,0.6)] active:translate-y-0",
  gold:
    "bg-gold-500 text-forest-950 shadow-[0_10px_30px_-10px_rgba(199,162,74,0.7)] hover:bg-gold-400 hover:-translate-y-0.5 active:translate-y-0",
  outline:
    "border border-ink-900/15 bg-transparent text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50",
  "outline-light":
    "border border-cream-50/25 bg-transparent text-cream-50 hover:border-cream-50 hover:bg-cream-50 hover:text-forest-900",
  ghost: "bg-transparent text-ink-900 hover:bg-ink-900/5",
  whatsapp:
    "bg-[#25D366] text-forest-950 shadow-[0_10px_30px_-10px_rgba(37,211,102,0.6)] hover:bg-[#1ebe5a] hover:-translate-y-0.5 active:translate-y-0",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-5 text-xs",
  md: "h-12 px-7 text-sm",
  lg: "h-14 px-9 text-[15px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsAnchor) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <a className={classes} {...rest}>
        {children}
      </a>
    );
  }
  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} type={rest.type ?? "button"} {...rest}>
      {children}
    </button>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1", className)}
    >
      <path d="M3 10h14M11 4l6 6-6 6" />
    </svg>
  );
}

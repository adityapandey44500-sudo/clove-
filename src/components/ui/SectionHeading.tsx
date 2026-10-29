import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function Eyebrow({ children, light = false, className }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]",
        light ? "text-gold-400" : "text-forest-600",
        className,
      )}
    >
      <span className={cn("h-px w-8", light ? "bg-gold-400" : "bg-forest-600")} />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left", light = false, className }: Props) {
  const center = align === "center";
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow light={light} className={cn(center && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "mt-5 font-display text-4xl font-light leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]",
          light ? "text-cream-50" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-6 text-base leading-relaxed sm:text-lg", light ? "text-cream-200/75" : "text-ink-500")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}

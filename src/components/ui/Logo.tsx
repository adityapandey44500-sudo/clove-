import { cn } from "@/utils/cn";
import { site } from "@/config/site";

export function GarlicMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path
        d="M16 5c1 3 2 4 4 6 3 3 5 6 5 10a9 9 0 0 1-18 0c0-4 2-7 5-10 2-2 3-3 4-6Z"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <path
        d="M16 11v17M12 14.5c1 4 1.5 7 1.5 13M20 14.5c-1 4-1.5 7-1.5 13"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
      />
      <path d="M16 5c-.8-1-1.3-2-1.4-3M16 5c.8-1 1.3-2 1.4-3" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className, light = false }: { className?: string; light?: boolean }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label={`${site.name} home`}>
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-500 group-hover:rotate-6",
          light ? "bg-gold-500 text-forest-950" : "bg-forest-900 text-gold-400",
        )}
      >
        <GarlicMark className="h-6 w-6" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[22px] font-semibold tracking-tight", light ? "text-cream-50" : "text-ink-900")}>
          {site.shortName}
        </span>
        <span className={cn("mt-1 text-[9px] font-semibold uppercase tracking-[0.3em]", light ? "text-gold-400" : "text-ink-500")}>
          Garlic Powder
        </span>
      </span>
    </a>
  );
}

import { cn } from "@/utils/cn";
import { GarlicMark } from "./Logo";

/**
 * A faithful, crisp recreation of the official Clove Garlic Powder pack label —
 * used on every product card so customers see exactly what's printed on the jar/pouch.
 */
export function ClovePackLabel({ netWt, className }: { netWt: string; className?: string }) {
  return (
    <div
      className={cn(
        "relative flex items-stretch overflow-hidden rounded-2xl border border-[#15454a]/15 bg-[#faf4e2] shadow-[0_2px_10px_-4px_rgba(21,69,74,0.25)]",
        className,
      )}
    >
      {/* Premium ribbon */}
      <div className="hidden shrink-0 items-center bg-[#15454a] px-1.5 py-2 sm:flex">
        <span
          className="whitespace-nowrap text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#f3e3ab]"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Premium
        </span>
      </div>

      {/* Clove emblem */}
      <div className="flex shrink-0 items-center justify-center border-r border-[#15454a]/15 px-2 sm:px-2.5">
        <div className="flex h-10 w-10 flex-col items-center justify-center rounded-full border-[1.5px] border-[#15454a] bg-white px-1 text-center sm:h-12 sm:w-12">
          <GarlicMark className="h-2.5 w-2.5 text-[#15454a] sm:h-3 sm:w-3" />
          <span className="mt-0.5 font-display text-[8px] font-black leading-none tracking-tight text-[#15454a] sm:text-[9px]">
            CLOVE
          </span>
          <span className="hidden text-[4.5px] font-bold uppercase leading-none tracking-[0.1em] text-[#15454a]/70 sm:block">
            White Garlic
          </span>
        </div>
      </div>

      {/* Natural seal */}
      <div className="hidden shrink-0 items-center px-2.5 sm:flex">
        <div className="flex h-9 w-9 shrink-0 flex-col items-center justify-center rounded-full border-2 border-dashed border-emerald-600/70 bg-emerald-50 text-center leading-[1.05]">
          <span className="text-[7px] font-extrabold text-emerald-700">100%</span>
          <span className="text-[4px] font-bold uppercase tracking-[0.06em] text-emerald-700">Natural</span>
        </div>
      </div>

      {/* Title + tagline */}
      <div className="flex min-w-0 flex-1 flex-col justify-center px-2.5 py-2">
        <p className="truncate font-display text-[13px] font-black leading-none tracking-tight text-[#15454a] sm:text-[15px]">
          CLOVE <span className="font-medium text-[#15454a]/80">Garlic Powder</span>
        </p>
        <p className="mt-1 truncate text-[9px] italic leading-none text-[#15454a]/60 sm:text-[10px]">{"Essence of Purity"}</p>
      </div>

      {/* Net weight */}
      <div className="flex shrink-0 items-center border-l border-[#15454a]/15 px-2 sm:px-3">
        <span className="whitespace-nowrap rounded-full bg-[#15454a] px-2 py-1.5 text-[8px] font-bold uppercase tracking-wide text-[#f3e3ab] sm:px-2.5 sm:text-[9px]">
          Net Wt {netWt}
        </span>
      </div>
    </div>
  );
}

import { marqueeItems } from "@/data/content";
import { GarlicMark } from "./ui/Logo";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-forest-800 bg-forest-900 py-5 text-cream-100">
      <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap pr-10">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-10">
            <span className="font-display text-xl font-light tracking-wide sm:text-2xl">{item}</span>
            <GarlicMark className="h-5 w-5 text-gold-400" />
          </span>
        ))}
      </div>
    </div>
  );
}

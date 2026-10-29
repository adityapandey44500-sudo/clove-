import { useEffect, useState } from "react";
import { site, whatsappLink } from "@/config/site";
import { cn } from "@/utils/cn";
import { Icon } from "./ui/Icons";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(`Hi ${site.name}! I'd like to order garlic powder.`)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "group fixed bottom-6 right-6 z-40 flex items-center gap-3 transition-all duration-500",
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="hidden rounded-full bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-ink-900 shadow-soft transition-all duration-300 group-hover:translate-x-0 sm:block">
        Order on WhatsApp
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center">
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-forest-950 shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
          <Icon.whatsapp className="h-7 w-7" />
        </span>
      </span>
    </a>
  );
}

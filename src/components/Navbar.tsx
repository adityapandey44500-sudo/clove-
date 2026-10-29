import { useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { navLinks } from "@/data/content";
import { site, formatPrice, whatsappLink } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { Logo } from "./ui/Logo";
import { Icon } from "./ui/Icons";
import { Button } from "./ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();
  const [bump, setBump] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (count === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [count]);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Announcement bar */}
      <div
        className={cn(
          "overflow-hidden bg-forest-900 text-cream-100 transition-all duration-500",
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100",
        )}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-center gap-2 px-4 text-[11px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
          <Icon.truck className="h-4 w-4 text-gold-400" />
          <span className="truncate">
            Free nationwide shipping over {formatPrice(site.freeShippingOver)} · Cash on delivery available
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-ink-900/8 bg-cream-50/85 shadow-[0_8px_30px_-16px_rgba(22,19,15,0.25)] backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          <ul className="hidden items-center gap-9 lg:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative text-[13px] font-semibold uppercase tracking-[0.16em] text-ink-700 transition-colors hover:text-ink-900"
                >
                  {l.label}
                  <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={open}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900 transition-all hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
              aria-label={`Open cart, ${count} items`}
            >
              <Icon.cart className="h-5 w-5" />
              {count > 0 && (
                <span
                  className={cn(
                    "absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-500 px-1 text-[10px] font-bold text-forest-950 transition-transform",
                    bump && "scale-125",
                  )}
                >
                  {count}
                </span>
              )}
            </button>
            <Button href="#products" size="sm" className="hidden sm:inline-flex">
              Shop Now
            </Button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white/60 text-ink-900 lg:hidden"
              aria-label="Open menu"
            >
              <Icon.menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] transition-all duration-500 lg:hidden",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!menuOpen}
      >
        <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={cn(
            "grain absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-cream-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            menuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="relative z-10 flex items-center justify-between border-b border-ink-900/8 px-6 py-5">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10"
              aria-label="Close menu"
            >
              <Icon.x className="h-5 w-5" />
            </button>
          </div>
          <ul className="relative z-10 flex flex-1 flex-col gap-1 px-6 py-8">
            {navLinks.map((l, i) => (
              <li key={l.href} style={{ transitionDelay: `${80 + i * 40}ms` }} className={cn("transition-all duration-500", menuOpen ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0")}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-ink-900/8 py-4 font-display text-3xl font-light text-ink-900"
                >
                  {l.label}
                  <Icon.arrow className="h-5 w-5 text-gold-600" />
                </a>
              </li>
            ))}
          </ul>
          <div className="relative z-10 space-y-3 px-6 pb-8">
            <Button href="#products" className="w-full" onClick={() => setMenuOpen(false)}>
              Shop Now
            </Button>
            <Button
              href={whatsappLink(`Hi ${site.name}! I'd like to know more about your garlic powder.`)}
              target="_blank"
              rel="noreferrer"
              variant="whatsapp"
              className="w-full"
            >
              <Icon.whatsapp className="h-5 w-5" /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

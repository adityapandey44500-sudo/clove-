import { cn } from "@/utils/cn";
import { useCart } from "@/context/CartContext";
import { site, formatPrice, whatsappLink } from "@/config/site";
import { Icon } from "./ui/Icons";
import { Button } from "./ui/Button";

export function CartDrawer() {
  const { items, isOpen, close, setQty, remove, subtotal, clear } = useCart();
  const freeShipping = subtotal >= site.freeShippingOver;
  const remaining = Math.max(0, site.freeShippingOver - subtotal);
  const progress = Math.min(100, (subtotal / site.freeShippingOver) * 100);

  const message = [
    `Hi ${site.name}! I'd like to place an order:`,
    "",
    ...items.map((l) => `• ${l.product.name} (${l.product.size}) × ${l.qty} — ${formatPrice(l.qty * l.product.price)}`),
    "",
    `Subtotal: ${formatPrice(subtotal)}`,
    freeShipping ? "Shipping: Free" : "Shipping: please confirm",
    "",
    "Name:",
    "Delivery address:",
    "Phone:",
  ].join("\n");

  return (
    <div
      className={cn("fixed inset-0 z-[70] transition-all duration-500", isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0")}
      aria-hidden={!isOpen}
      role="dialog"
      aria-label="Shopping cart"
    >
      <div className="absolute inset-0 bg-forest-950/60 backdrop-blur-sm" onClick={close} />
      <aside
        className={cn(
          "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-cream-50 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-ink-900/8 px-6 py-5">
          <div>
            <h3 className="font-display text-2xl font-medium text-ink-900">Your Cart</h3>
            <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
              {items.length === 0 ? "Empty" : `${items.reduce((n, l) => n + l.qty, 0)} items`}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/10 transition hover:bg-ink-900 hover:text-cream-50"
            aria-label="Close cart"
          >
            <Icon.x className="h-5 w-5" />
          </button>
        </div>

        {items.length > 0 && (
          <div className="border-b border-ink-900/8 bg-cream-100 px-6 py-4">
            <p className="text-xs font-medium text-ink-700">
              {freeShipping ? (
                <span className="inline-flex items-center gap-2 text-forest-600">
                  <Icon.check className="h-4 w-4" /> You've unlocked free shipping
                </span>
              ) : (
                <>
                  Add <span className="font-bold text-ink-900">{formatPrice(remaining)}</span> more for free shipping
                </>
              )}
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-900/8">
              <div className="h-full rounded-full bg-gradient-to-r from-gold-500 to-forest-600 transition-all duration-700" style={{ width: `${progress}%` }} />
            </div>
          </div>
        )}

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cream-200 text-ink-500">
                <Icon.cart className="h-8 w-8" />
              </div>
              <p className="mt-6 font-display text-2xl text-ink-900">Nothing here yet</p>
              <p className="mt-2 max-w-[22ch] text-sm text-ink-500">Add a jar or two and we'll send your order straight to WhatsApp.</p>
              <Button href="#products" onClick={close} className="mt-8">
                Browse Products
              </Button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((l) => (
                <li key={l.id} className="flex gap-4">
                  <div className="h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-cream-200">
                    <img src={l.product.image} alt={l.product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-display text-lg leading-tight text-ink-900">{l.product.name}</p>
                        <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{l.product.size}</p>
                      </div>
                      <button type="button" onClick={() => remove(l.id)} className="text-ink-400 transition hover:text-ink-900" aria-label="Remove">
                        <Icon.x className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <div className="inline-flex items-center rounded-full border border-ink-900/12">
                        <button type="button" onClick={() => setQty(l.id, l.qty - 1)} className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-ink-900/5" aria-label="Decrease">
                          <Icon.minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-7 text-center text-sm font-semibold tabular-nums">{l.qty}</span>
                        <button type="button" onClick={() => setQty(l.id, l.qty + 1)} className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-ink-900/5" aria-label="Increase">
                          <Icon.plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-ink-900">{formatPrice(l.qty * l.product.price)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink-900/8 bg-white/60 px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-ink-500">Subtotal</span>
              <span className="font-display text-2xl font-medium text-ink-900">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-400">{freeShipping ? "Free shipping applied." : "Shipping confirmed on WhatsApp. COD available."}</p>
            <Button href={whatsappLink(message)} target="_blank" rel="noreferrer" variant="whatsapp" size="lg" className="mt-5 w-full">
              <Icon.whatsapp className="h-5 w-5" /> Checkout on WhatsApp
            </Button>
            <button type="button" onClick={clear} className="mt-3 w-full text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-400 transition hover:text-ink-900">
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}

import { useState } from "react";
import { products, type Product } from "@/data/products";
import { site, formatPrice, whatsappLink } from "@/config/site";
import { useCart } from "@/context/CartContext";
import { cn } from "@/utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button } from "./ui/Button";
import { Icon } from "./ui/Icons";
import { ClovePackLabel } from "./ui/ClovePackLabel";

function ProductCard({ product, featured }: { product: Product; featured?: boolean }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const grams = product.size.toLowerCase().endsWith("kg")
    ? parseFloat(product.size) * 1000
    : parseFloat(product.size);
  const perGram = product.price / grams;
  const discount = product.compareAt ? Math.round((1 - product.price / product.compareAt) * 100) : 0;

  const handleAdd = () => {
    add(product.id, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[2rem] border bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift",
        featured ? "border-gold-500/50 shadow-soft ring-1 ring-gold-500/30" : "border-ink-900/8",
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-cream-100">
        <img
          src={product.image}
          alt={`${product.name} — ${product.size} garlic powder`}
          className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-5 top-5 rounded-full px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]",
              featured ? "bg-gold-500 text-forest-950" : "bg-forest-900 text-cream-50",
            )}
          >
            {product.badge}
          </span>
        )}
        {discount > 0 && (
          <span className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-700 backdrop-blur">
            Save {discount}%
          </span>
        )}
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between rounded-2xl bg-white/85 px-4 py-3 text-xs text-ink-700 backdrop-blur-xl">
          <span className="font-semibold">{product.servings}</span>
          <span className="text-ink-500">{formatPrice(Math.round(perGram * 100))} / 100g</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-[1.65rem] font-medium leading-tight text-ink-900">{product.name}</h3>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.22em] text-ink-500">{product.size} · Garlic powder</p>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl font-medium text-ink-900">{formatPrice(product.price)}</p>
            {product.compareAt && <p className="text-xs text-ink-400 line-through">{formatPrice(product.compareAt)}</p>}
          </div>
        </div>

        <ClovePackLabel netWt={product.size} className="mt-5" />

        <p className="mt-5 text-[15px] leading-relaxed text-ink-500">{product.description}</p>

        <ul className="mt-5 space-y-2">
          {product.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5 text-sm text-ink-700">
              <Icon.check className="h-4 w-4 shrink-0 text-forest-600" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          <div className="flex items-stretch gap-3">
            <div className="inline-flex items-center rounded-full border border-ink-900/12">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} className="flex h-12 w-11 items-center justify-center rounded-full transition hover:bg-ink-900/5" aria-label="Decrease quantity">
                <Icon.minus className="h-4 w-4" />
              </button>
              <span className="w-7 text-center text-sm font-bold tabular-nums">{qty}</span>
              <button type="button" onClick={() => setQty((q) => Math.min(99, q + 1))} className="flex h-12 w-11 items-center justify-center rounded-full transition hover:bg-ink-900/5" aria-label="Increase quantity">
                <Icon.plus className="h-4 w-4" />
              </button>
            </div>
            <Button onClick={handleAdd} variant={featured ? "gold" : "primary"} className="flex-1">
              {added ? (
                <>
                  <Icon.check className="h-4 w-4" /> Added
                </>
              ) : (
                <>
                  <Icon.cart className="h-4 w-4" /> Add to cart
                </>
              )}
            </Button>
          </div>
          <a
            href={whatsappLink(`Hi ${site.name}! I'd like to order ${qty} × ${product.name} (${product.size}) — ${formatPrice(product.price * qty)}.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 transition hover:text-forest-700"
          >
            <Icon.whatsapp className="h-4 w-4 text-[#25D366]" /> Or order directly on WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

export function Products() {
  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="The Collection"
            title={
              <>
                One powder. <em className="italic text-forest-700">Three ways</em> to keep it close.
              </>
            }
            description="Same small-batch garlic powder in every pack — choose the size that fits your kitchen."
          />
          <Reveal delay={150} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500 lg:pb-2">
            <span className="inline-flex items-center gap-2">
              <Icon.truck className="h-4 w-4 text-forest-600" /> Free shipping over {formatPrice(site.freeShippingOver)}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon.shield className="h-4 w-4 text-forest-600" /> Cash on delivery
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <ProductCard product={p} featured={i === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center text-sm text-ink-500">
          {site.deliveryNote}. Need a custom size or gift pack?{" "}
          <a href={whatsappLink(`Hi ${site.name}! I'm interested in a custom / gift pack of garlic powder.`)} target="_blank" rel="noreferrer" className="font-semibold text-forest-700 underline-offset-4 hover:underline">
            Message us
          </a>
          .
        </Reveal>
      </div>
    </section>
  );
}

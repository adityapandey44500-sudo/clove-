import kitchenImg from "@/assets/kitchen.jpg";
import { uses } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button, ArrowIcon } from "./ui/Button";

export function Uses() {
  return (
    <section id="recipes" className="grain relative overflow-hidden bg-cream-100 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <Reveal direction="right" className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative h-full min-h-[460px] overflow-hidden rounded-[2rem] shadow-lift lg:min-h-full">
              <img src={kitchenImg} alt="Chef sprinkling garlic powder over a sizzling skillet" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/10 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/15 bg-white/10 p-5 text-cream-50 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-300">Kitchen conversion</p>
                <p className="mt-2 font-display text-2xl font-light leading-tight">
                  <span className="font-medium text-gold-400">⅛ tsp</span> Clove = <span className="font-medium text-gold-400">1</span> fresh clove
                </p>
                <p className="mt-1.5 text-xs text-cream-200/70">Ours is more concentrated than most — start low, then adjust.</p>
              </div>
            </div>
          </Reveal>

          {/* Copy + cards */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <SectionHeading
              eyebrow="In the Kitchen"
              title={
                <>
                  Where a pinch <em className="italic text-forest-700">does the work</em> of a whole bulb
                </>
              }
              description="No peeling, no chopping, no burnt bits in the pan. Fine, fresh-tasting garlic that dissolves into whatever you're cooking."
            />

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {uses.map((u, i) => (
                <Reveal key={u.title} delay={i * 80}>
                  <div className="group h-full rounded-3xl border border-ink-900/8 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lift">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm text-gold-600">0{i + 1}</span>
                      <span className="rounded-full bg-cream-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-forest-700">{u.ratio}</span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl font-medium text-ink-900">{u.title}</h3>
                    <p className="mt-2.5 text-[15px] leading-relaxed text-ink-500">{u.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200} className="mt-10">
              <Button href="#products" variant="outline">
                Stock your kitchen <ArrowIcon />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import heroImg from "@/assets/hero.jpg";
import { Button, ArrowIcon } from "./ui/Button";
import { Icon } from "./ui/Icons";
import { GarlicMark } from "./ui/Logo";
import { Reveal } from "./ui/Reveal";

const trust = ["100% garlic", "Zero additives", "Lab tested", "Cash on delivery"];

function RotatingBadge() {
  return (
    <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow text-forest-900">
        <defs>
          <path id="circlePath" d="M50,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" />
        </defs>
        <text className="fill-current font-bold uppercase" style={{ fontSize: "6.6px", letterSpacing: "0.16em" }}>
          <textPath href="#circlePath">Small batch · Single origin · 100% garlic ·</textPath>
        </text>
      </svg>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest-900 text-gold-400 shadow-lift">
        <GarlicMark className="h-8 w-8" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="grain relative overflow-hidden bg-cream-50 pt-[116px]">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-gold-300/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[460px] w-[460px] rounded-full bg-forest-500/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-900/10 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pb-28 lg:pt-14">
        {/* Copy */}
        <div className="lg:col-span-6 xl:col-span-6">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-forest-600/20 bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-forest-700 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-forest-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-forest-600" />
              </span>
              Fresh harvest · Now shipping
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-7 font-display text-[3.1rem] font-light leading-[0.98] tracking-tight text-ink-900 text-balance sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem]">
              100% Garlic.
              <br />
              <em className="font-light italic text-forest-700">Essence of Purity.</em>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
              Small-batch garlic powder from single-origin farms — low-temperature dried and
              stone-ground within 48 hours of harvest. One ingredient on the label, and you can
              taste it in every pinch.
            </p>
          </Reveal>

          <Reveal delay={300} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="#products" size="lg">
              Shop the Collection <ArrowIcon />
            </Button>
            <Button href="#process" size="lg" variant="outline">
              See how it's made
            </Button>
          </Reveal>

          <Reveal delay={400} className="mt-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {trust.map((t) => (
                <li key={t} className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-forest-900/90 text-cream-50">
                    <Icon.check className="h-3 w-3" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={500} className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-2.5">
              {["SM", "HR", "BA", "AK"].map((i, idx) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cream-50 text-[11px] font-bold text-cream-50"
                  style={{ background: ["#244434", "#a8853a", "#2f5a45", "#6f675e"][idx] }}
                >
                  {i}
                </span>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon.star key={i} className="h-3.5 w-3.5" />
                ))}
                <span className="ml-1.5 text-sm font-bold text-ink-900">4.9</span>
              </div>
              <p className="text-xs text-ink-500">Loved by 300+ home cooks & chefs</p>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <div className="relative lg:col-span-6">
          <Reveal direction="none" delay={150} className="relative mx-auto max-w-[520px] lg:ml-auto">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-cream-200 shadow-lift">
              <img
                src={heroImg}
                alt="Clove Garlic Powder in a glass jar surrounded by fresh garlic bulbs"
                className="h-full w-full object-cover transition-transform duration-[1800ms] ease-out hover:scale-[1.04]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/25 via-transparent to-transparent" />
            </div>

            {/* Floating: ingredient card */}
            <div className="absolute -left-4 top-10 animate-float sm:-left-10">
              <div className="rounded-2xl border border-white/60 bg-white/85 p-4 shadow-soft backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-500">Ingredients</p>
                <p className="mt-1 font-display text-2xl font-medium text-ink-900">Garlic.</p>
                <p className="text-[11px] text-ink-500">That's the whole list.</p>
              </div>
            </div>

            {/* Floating: batch card */}
            <div className="absolute -right-3 bottom-16 animate-float-slow sm:-right-8">
              <div className="flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 p-4 pr-5 shadow-soft backdrop-blur-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-gold-400">
                  <Icon.sparkle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-ink-500">Batch 0427</p>
                  <p className="text-sm font-semibold text-ink-900">Ground this week</p>
                </div>
              </div>
            </div>

            {/* Rotating badge */}
            <div className="absolute -bottom-10 left-4 hidden sm:block lg:-left-12">
              <RotatingBadge />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

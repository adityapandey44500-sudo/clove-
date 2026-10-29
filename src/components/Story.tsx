import farmImg from "@/assets/farm.jpg";
import { stats } from "@/data/content";
import { site } from "@/config/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button, ArrowIcon } from "./ui/Button";

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Image */}
          <Reveal direction="right" className="relative lg:col-span-6">
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-gold-500/40" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-lift">
                <img src={farmImg} alt="Freshly harvested garlic bulbs in a wicker basket on a farm" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute -bottom-8 right-4 max-w-[280px] rounded-2xl bg-forest-900 p-6 text-cream-50 shadow-lift sm:-right-8">
                <p className="font-display text-lg font-light italic leading-snug">
                  "If I wouldn't put it in my mother's kitchen, it doesn't go in the jar."
                </p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">— Founder, {site.name}</p>
              </div>
            </div>
          </Reveal>

          {/* Copy */}
          <div className="lg:col-span-6 lg:pl-6">
            <SectionHeading
              eyebrow="Our Story"
              title={
                <>
                  From sun-soaked fields to <em className="italic text-forest-700">your spice rack</em>
                </>
              }
            />
            <Reveal delay={120} className="mt-8 space-y-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              <p>
                {site.name} began with a simple frustration: every garlic powder on the shelf tasted
                flat, listed ingredients we couldn't pronounce, and clumped within weeks. We knew the
                garlic grown an hour from our home deserved better.
              </p>
              <p>
                So we partnered directly with a handful of farms around Bihar, built a small
                low-temperature drying room, and started grinding in batches small enough to taste
                every single one. No fillers, no flow agents — just garlic, treated with patience.
              </p>
            </Reveal>
            <Reveal delay={220} className="mt-9">
              <Button href="#process" variant="outline">
                Follow the journey <ArrowIcon />
              </Button>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={100} className="mt-24 lg:mt-32">
          <dl className="grid grid-cols-2 divide-ink-900/8 overflow-hidden rounded-[2rem] border border-ink-900/8 bg-white/60 md:grid-cols-4 md:divide-x">
            {stats.map((s, i) => (
              <div key={s.label} className={`flex flex-col ${i < 2 ? "border-b border-ink-900/8 p-8 md:border-b-0 lg:p-10" : "p-8 lg:p-10"}`}>
                <dt className="order-2 mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{s.label}</dt>
                <dd className="order-1 font-display text-5xl font-light tracking-tight text-forest-800 lg:text-6xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

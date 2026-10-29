import processImg from "@/assets/process.jpg";
import { processSteps } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icons";

export function Process() {
  return (
    <section id="process" className="grain grain-light relative overflow-clip bg-forest-900 py-24 text-cream-50 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-forest-600/30 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="The Process"
          title={
            <>
              Forty-eight hours, <em className="italic text-gold-400">five patient steps</em>
            </>
          }
          description="Speed ruins garlic. Every step in our process is slower than the industry standard — and that's exactly the point."
        />

        <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Sticky image */}
          <div className="lg:col-span-5">
            <Reveal direction="right" className="lg:sticky lg:top-32">
              <div className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-lift">
                  <img src={processImg} alt="Garlic slices drying beside freshly ground garlic powder" className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-6 bottom-6">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-forest-950">
                          <Icon.thermo className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold-300">Low & slow</p>
                          <p className="text-sm font-semibold">18–24 hours below 60°C</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Steps */}
          <ol className="relative lg:col-span-7">
            <div className="absolute bottom-6 left-[27px] top-6 hidden w-px bg-gradient-to-b from-gold-500/60 via-cream-50/15 to-transparent sm:block" />
            {processSteps.map((s, i) => (
              <Reveal key={s.step} delay={i * 90}>
                <li className="group relative flex gap-6 py-8 first:pt-0 sm:gap-10">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-forest-900 font-display text-lg text-gold-400 transition-all duration-500 group-hover:bg-gold-500 group-hover:text-forest-950">
                    {s.step}
                  </div>
                  <div className="border-b border-cream-50/10 pb-8 group-last:border-b-0">
                    <h3 className="font-display text-2xl font-medium sm:text-3xl">{s.title}</h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-cream-200/70 sm:text-base">{s.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

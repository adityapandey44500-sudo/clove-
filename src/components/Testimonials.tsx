import { testimonials } from "@/data/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icons";

export function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Kind Words"
          title={
            <>
              Trusted in home kitchens <em className="italic text-forest-700">and restaurant lines</em> alike
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="h-full">
              <figure className="relative flex h-full flex-col rounded-[2rem] border border-ink-900/8 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift lg:p-10">
                <span className="absolute right-8 top-6 font-display text-7xl leading-none text-gold-300/70">"</span>
                <div className="flex items-center gap-1 text-gold-500">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Icon.star key={k} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 font-display text-xl font-light leading-relaxed text-ink-800">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink-900/8 pt-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-900 text-sm font-bold text-gold-400">
                    {t.name
                      .replace("Chef ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-ink-900">{t.name}</p>
                    <p className="text-xs text-ink-500">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

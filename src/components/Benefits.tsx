import { benefits } from "@/data/content";
import { Icon, type IconName } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Benefits() {
  return (
    <section id="benefits" className="grain relative bg-cream-100 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why Clove Garlic Powder"
          title={
            <>
              Garlic powder, <em className="italic text-forest-700">the way it should be</em> made
            </>
          }
          description="Most garlic powder is an afterthought — a by-product dried hard and fast, then bulked out with flow agents. Ours is the opposite of an afterthought."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const I = Icon[b.icon as IconName];
            return (
              <Reveal key={b.title} delay={i * 80}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-900/8 bg-white p-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold-300/0 transition-all duration-700 group-hover:bg-gold-300/40 group-hover:blur-2xl" />
                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-900 text-gold-400 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-forest-950">
                      <I className="h-7 w-7" />
                    </div>
                    <span className="absolute right-0 top-0 font-display text-sm text-ink-400">0{i + 1}</span>
                    <h3 className="mt-7 font-display text-2xl font-medium text-ink-900">{b.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{b.text}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

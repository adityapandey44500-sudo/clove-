import { comparison } from "@/data/content";
import { site } from "@/config/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icons";
import { GarlicMark } from "./ui/Logo";

export function Comparison() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="The Honest Comparison"
          title={
            <>
              Read the label. <em className="italic text-forest-700">Then taste the difference.</em>
            </>
          }
        />

        {/* Desktop table */}
        <Reveal delay={120} className="mt-14 hidden overflow-hidden rounded-[2rem] border border-ink-900/8 bg-white shadow-soft md:block">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-ink-900/8">
                <th className="w-1/4 px-8 py-6 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-500">Feature</th>
                <th className="w-[40%] bg-forest-900 px-8 py-6 text-cream-50">
                  <span className="inline-flex items-center gap-2.5">
                    <GarlicMark className="h-5 w-5 text-gold-400" />
                    <span className="font-display text-xl font-medium">{site.name}</span>
                  </span>
                </th>
                <th className="px-8 py-6 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-500">Typical store brand</th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r, i) => (
                <tr key={r.feature} className={i % 2 === 1 ? "bg-cream-50/70" : ""}>
                  <td className="px-8 py-5 text-sm font-semibold text-ink-900">{r.feature}</td>
                  <td className="bg-forest-900/[0.97] px-8 py-5 text-cream-50">
                    <span className="inline-flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-950">
                        <Icon.check className="h-3 w-3" />
                      </span>
                      {r.us}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-ink-500">
                    <span className="inline-flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900/8 text-ink-500">
                        <Icon.x className="h-3 w-3" />
                      </span>
                      {r.them}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-12 space-y-4 md:hidden">
          {comparison.rows.map((r, i) => (
            <Reveal key={r.feature} delay={i * 60}>
              <div className="overflow-hidden rounded-3xl border border-ink-900/8 bg-white">
                <p className="px-6 pt-5 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-500">{r.feature}</p>
                <div className="mt-3 grid grid-cols-1">
                  <div className="flex items-start gap-3 bg-forest-900 px-6 py-4 text-sm text-cream-50">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-950">
                      <Icon.check className="h-3 w-3" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">{site.name}</span>
                      {r.us}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 px-6 py-4 text-sm text-ink-500">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ink-900/8">
                      <Icon.x className="h-3 w-3" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink-400">Store brand</span>
                      {r.them}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

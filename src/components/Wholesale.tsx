import { site, whatsappLink } from "@/config/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button, ArrowIcon } from "./ui/Button";
import { Icon } from "./ui/Icons";
import { GarlicMark } from "./ui/Logo";

const perks = [
  "1kg and 5kg food-service packs",
  "Custom grind — fine, granulated or flakes",
  "Private-label & co-branded packaging",
  "Certificate of analysis with every batch",
  "Monthly supply contracts at locked rates",
  "Dispatch within 48 hours of order",
];

const miniStats = [
  { value: "5kg+", label: "Wholesale pricing" },
  { value: "COA", label: "With every batch" },
  { value: "48h", label: "Dispatch window" },
];

export function Wholesale() {
  return (
    <section id="wholesale" className="grain grain-light relative overflow-hidden bg-forest-900 py-24 text-cream-50 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-forest-600/25 blur-3xl" />
        <GarlicMark className="absolute -bottom-24 -right-24 h-[420px] w-[420px] text-cream-50/[0.04]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionHeading
              light
              eyebrow="Wholesale & HoReCa"
              title={
                <>
                  Supplying kitchens that <em className="italic text-gold-400">take garlic seriously</em>
                </>
              }
              description="Restaurants, bakeries, caterers and food brands — get the same small-batch quality at volume, with the consistency your recipes depend on."
            />
            <Reveal delay={150} className="mt-10 flex flex-wrap gap-3">
              <Button
                href={whatsappLink(`Hi ${site.name}! I'd like a wholesale quote for garlic powder.\n\nBusiness name:\nCity:\nEstimated monthly volume (kg):`)}
                target="_blank"
                rel="noreferrer"
                variant="gold"
                size="lg"
              >
                Request a quote <ArrowIcon />
              </Button>
              <Button href={`mailto:${site.email}?subject=Wholesale%20enquiry`} variant="outline-light" size="lg">
                <Icon.mail className="h-4 w-4" /> {site.email}
              </Button>
            </Reveal>

            <Reveal delay={250} className="mt-12 grid grid-cols-3 gap-4 border-t border-cream-50/10 pt-10">
              {miniStats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-light text-gold-400 sm:text-4xl">{s.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-200/60">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal direction="left" delay={120} className="lg:col-span-6">
            <div className="rounded-[2rem] border border-cream-50/10 bg-white/[0.05] p-8 backdrop-blur-sm sm:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">What's included</p>
              <ul className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8">
                {perks.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] leading-snug text-cream-100">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-950">
                      <Icon.check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl bg-forest-950/60 p-6">
                <p className="font-display text-lg font-light italic leading-relaxed text-cream-100">
                  "Consistency is the whole game in a professional kitchen. Same aroma, same grind, same colour — every single delivery."
                </p>
                <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">— Chef Hamza Raza, Olive & Ember</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

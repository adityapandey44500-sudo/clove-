import { useState } from "react";
import { faqs } from "@/data/content";
import { site, whatsappLink } from "@/config/site";
import { cn } from "@/utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Icon } from "./ui/Icons";
import { Button } from "./ui/Button";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="grain relative bg-cream-100 py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Questions"
              title={
                <>
                  Everything you'd ask <em className="italic text-forest-700">before your first jar</em>
                </>
              }
              description="Still curious? We answer every message personally, usually within the hour."
            />
            <Reveal delay={150} className="mt-8">
              <Button href={whatsappLink(`Hi ${site.name}! I have a question about your garlic powder.`)} target="_blank" rel="noreferrer" variant="whatsapp">
                <Icon.whatsapp className="h-5 w-5" /> Ask on WhatsApp
              </Button>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100} className="divide-y divide-ink-900/8 rounded-[2rem] border border-ink-900/8 bg-white px-6 sm:px-8">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={f.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className={cn("font-display text-xl font-medium transition-colors sm:text-[1.35rem]", isOpen ? "text-forest-700" : "text-ink-900")}>
                        {f.q}
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-500",
                          isOpen ? "rotate-45 border-forest-900 bg-forest-900 text-cream-50" : "border-ink-900/15 text-ink-700",
                        )}
                      >
                        <Icon.plus className="h-4 w-4" />
                      </span>
                    </button>
                    <div className={cn("grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <div className="overflow-hidden">
                        <p className="pb-7 pr-12 text-[15px] leading-relaxed text-ink-500 sm:text-base">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

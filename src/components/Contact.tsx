import { useState, type FormEvent } from "react";
import { site, whatsappLink } from "@/config/site";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Button, ArrowIcon } from "./ui/Button";
import { Icon } from "./ui/Icons";

const inputClass =
  "w-full rounded-2xl border border-ink-900/10 bg-cream-50 px-5 py-4 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-forest-600 focus:bg-white focus:ring-4 focus:ring-forest-600/10";

const details = [
  { icon: Icon.whatsapp, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink(`Hi ${site.name}!`) },
  { icon: Icon.mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: Icon.pin, label: "Based in", value: site.address },
  { icon: Icon.clock, label: "Hours", value: site.hours },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", topic: "Place an order", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = [
      `Hi ${site.name}! I'm ${form.name || "—"}.`,
      `Topic: ${form.topic}`,
      form.phone ? `Phone: ${form.phone}` : "",
      "",
      form.message,
    ]
      .filter((l) => l !== undefined)
      .join("\n");
    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Get in Touch"
              title={
                <>
                  Say hello — <em className="italic text-forest-700">we read every message</em>
                </>
              }
              description="Orders, wholesale, a recipe question or just to tell us how you used it. We'd genuinely love to hear from you."
            />
            <Reveal delay={150} className="mt-10 space-y-5">
              {details.map((d) => {
                const I = d.icon;
                const content = (
                  <>
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-900 text-gold-400 transition-colors group-hover:bg-gold-500 group-hover:text-forest-950">
                      <I className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-ink-500">{d.label}</span>
                      <span className="mt-0.5 block text-[15px] font-semibold text-ink-900">{d.value}</span>
                    </span>
                  </>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                    {content}
                  </a>
                ) : (
                  <div key={d.label} className="group flex items-center gap-4">
                    {content}
                  </div>
                );
              })}
            </Reveal>
            <Reveal delay={250} className="mt-10 flex items-center gap-3">
              {[
                { href: site.social.instagram, Icon: Icon.instagram, label: "Instagram" },
                { href: site.social.facebook, Icon: Icon.facebook, label: "Facebook" },
                { href: site.social.tiktok, Icon: Icon.tiktok, label: "TikTok" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 text-ink-700 transition hover:border-ink-900 hover:bg-ink-900 hover:text-cream-50"
                >
                  <s.Icon className="h-5 w-5" />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal direction="left" delay={120} className="lg:col-span-7">
            <form onSubmit={onSubmit} className="rounded-[2rem] border border-ink-900/8 bg-white p-7 shadow-soft sm:p-10">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">Your name</span>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} placeholder="Ayesha Khan" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">Phone / WhatsApp</span>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} placeholder="+92 3xx xxxxxxx" inputMode="tel" />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">How can we help?</span>
                <div className="relative">
                  <select value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })} className={`${inputClass} appearance-none pr-12`}>
                    {["Place an order", "Wholesale / restaurant supply", "Private label", "Recipe or product question", "Something else"].map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                  <Icon.chevron className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
                </div>
              </label>
              <label className="mt-5 block">
                <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500">Message</span>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us what you need…"
                />
              </label>
              <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-400">Submitting opens WhatsApp with your message pre-filled — no account needed.</p>
                <Button type="submit" size="lg" className="sm:shrink-0">
                  Send via WhatsApp <ArrowIcon />
                </Button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

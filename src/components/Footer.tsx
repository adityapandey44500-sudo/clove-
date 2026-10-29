import { useState, type FormEvent } from "react";
import { site } from "@/config/site";
import { navLinks } from "@/data/content";
import { products } from "@/data/products";
import { Logo } from "./ui/Logo";
import { Icon } from "./ui/Icons";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const year = new Date().getFullYear();

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDone(true);
    setEmail("");
  };

  return (
    <footer className="grain grain-light relative overflow-hidden bg-forest-950 text-cream-200">
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo light />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-cream-200/65">
              Small-batch, single-origin garlic powder. One ingredient, dried low and slow, ground
              fresh every week in Patna, Bihar.
            </p>
            <div className="mt-7 flex items-center gap-3">
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
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream-50/15 text-cream-200 transition hover:border-gold-500 hover:bg-gold-500 hover:text-forest-950"
                >
                  <s.Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">Shop</p>
              <ul className="mt-5 space-y-3">
                {products.map((p) => (
                  <li key={p.id}>
                    <a href="#products" className="text-sm text-cream-200/75 transition hover:text-cream-50">
                      {p.name} · {p.size}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#wholesale" className="text-sm text-cream-200/75 transition hover:text-cream-50">
                    Wholesale packs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">Explore</p>
              <ul className="mt-5 space-y-3">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-cream-200/75 transition hover:text-cream-50">
                      {l.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact" className="text-sm text-cream-200/75 transition hover:text-cream-50">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-400">Fresh from the mill</p>
            <p className="mt-5 text-sm leading-relaxed text-cream-200/65">
              New harvest drops, recipes and the occasional discount. One email a month, never more.
            </p>
            {done ? (
              <p className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm text-gold-300">
                <Icon.check className="h-4 w-4" /> You're on the list. Welcome!
              </p>
            ) : (
              <form onSubmit={subscribe} className="mt-5 flex rounded-full border border-cream-50/15 bg-white/[0.04] p-1.5 focus-within:border-gold-500/60">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 bg-transparent px-4 text-sm text-cream-50 placeholder:text-cream-200/40 focus:outline-none"
                />
                <button type="submit" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 text-forest-950 transition hover:bg-gold-400" aria-label="Subscribe">
                  <Icon.arrow className="h-4 w-4" />
                </button>
              </form>
            )}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-200/50">
              <span className="inline-flex items-center gap-2"><Icon.shield className="h-3.5 w-3.5 text-gold-400" /> Lab tested</span>
              <span className="inline-flex items-center gap-2"><Icon.truck className="h-3.5 w-3.5 text-gold-400" /> Nationwide delivery</span>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream-50/10 pt-8 text-xs text-cream-200/50 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">
            Grown & ground with care in India
            <span className="text-gold-400">✦</span>
          </p>
          <div className="flex gap-5">
            <a href="#top" className="transition hover:text-cream-50">Privacy</a>
            <a href="#top" className="transition hover:text-cream-50">Terms</a>
            <a href="#top" className="transition hover:text-cream-50">Back to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

# Clove Garlic Powder — Website

A premium, single-page brand website built with **React + Vite + Tailwind CSS v4**.
Orders are collected through **WhatsApp** (cart → pre-filled WhatsApp message), so no backend is needed.

## ✏️ Customise in 2 minutes

| What to change | File |
| --- | --- |
| Brand name, WhatsApp number, email, address, currency, free-shipping threshold, social links | `src/config/site.ts` |
| Products, sizes, prices, badges | `src/data/products.ts` |
| Nav links, benefits, process steps, FAQs, testimonials, comparison table | `src/data/content.ts` |
| Pack label design (text shown on the jar/pouch label) | `src/components/ui/ClovePackLabel.tsx` |
| Images (hero, farm, process, products, kitchen) | `src/assets/*.jpg` — replace files with the same names |
| Colours & fonts | `src/index.css` (`@theme` block) |
| Browser tab title / SEO description | `index.html` |

> **Important:** `whatsapp` in `src/config/site.ts` is set to `919608003347` (India country code +
> number, digits only, no "+", spaces or dashes). Every "Order" / "Checkout" button sends the
> message to this number.

## 🚀 Deploy (GitHub → Vercel)

1. Create a new repository on GitHub and upload all project files (or `git push`).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository.
3. Vercel auto-detects Vite. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every future push to GitHub redeploys automatically.

## 🧑‍💻 Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Sections

Announcement bar · Sticky nav · Hero · Marquee · Story + stats · Why Clove Garlic Powder · Products
(cart + WhatsApp checkout, with the official pack label shown on every card) · Process · Honest
comparison · In the kitchen · Reviews · Wholesale / HoReCa · FAQ · Contact form (opens WhatsApp) ·
Footer with newsletter · Floating WhatsApp button

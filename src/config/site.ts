/**
 * ─────────────────────────────────────────────────────────────
 *  BRAND SETTINGS — edit these values to personalise the site.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  /** Full brand name — used in copy, messages, meta tags & footer. */
  name: "Clove Garlic Powder",
  /** Short wordmark used in the logo lockup (paired with "Garlic Powder" underneath). */
  shortName: "Clove",
  tagline: "Essence of Purity",
  /** WhatsApp number with country code, digits only (no "+", spaces or dashes). */
  whatsapp: "919608003347",
  phoneDisplay: "+91 96080 03347",
  email: "clovegarlicpowder07@gmail.com",
  address: "Patna, Bihar — India",
  hours: "Mon – Sat · 9am – 7pm",
  currency: "₹",
  freeShippingOver: 499,
  deliveryNote: "Nationwide delivery in 3–6 working days",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
  foundedYear: 2025,
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const formatPrice = (value: number) =>
  `${site.currency}${value.toLocaleString("en-IN")}`;

import productJar from "@/assets/product-jar.jpg";
import productPouch from "@/assets/product-pouch.jpg";
import productBulk from "@/assets/product-bulk.jpg";

export type Product = {
  id: string;
  name: string;
  size: string;
  price: number;
  compareAt?: number;
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
  servings: string;
};

export const products: Product[] = [
  {
    id: "signature-jar-100",
    name: "Signature Jar",
    size: "100g",
    price: 110,
    compareAt: 140,
    image: productJar,
    badge: "Best Seller",
    description:
      "Our classic reusable glass jar. Perfect for the everyday spice rack — airtight, elegant and refillable.",
    highlights: ["Airtight glass jar", "Shaker-free, scoop-ready", "Refill pouches available"],
    servings: "≈ 95 servings",
  },
  {
    id: "kitchen-pouch-250",
    name: "Kitchen Pouch",
    size: "250g",
    price: 269,
    compareAt: 325,
    image: productPouch,
    badge: "Value Pack",
    description:
      "A resealable kraft pouch for households that cook daily. Same small-batch powder, better value per gram.",
    highlights: ["Resealable zip-lock", "Window to see the grind", "Saves on cost per gram"],
    servings: "≈ 240 servings",
  },
  {
    id: "chefs-pack-1kg",
    name: "Chef's Pack",
    size: "1kg",
    price: 999,
    image: productBulk,
    badge: "For Kitchens",
    description:
      "Built for restaurants, bakeries and caterers. Consistent grind, consistent flavour — batch after batch.",
    highlights: ["Food-service grade", "Batch & lot traceability", "Wholesale rates on 5kg+"],
    servings: "≈ 950 servings",
  },
];

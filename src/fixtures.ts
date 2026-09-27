import type { ProductLike } from "./runtime/context";

/** Editor/canvas fixture data (doc 4 §5) — the data channel's default value. */
export const fixtureProduct: ProductLike = {
  id: "fixture-product-01",
  title: "Aurora Runner Sneakers",
  handle: "aurora-runner",
  description: "Everyday cushioning with a sculpted midsole and breathable knit upper.",
  thumbnail: null,
  images: [
    { url: "https://picsum.photos/seed/ls-a/800/800", alt: "Aurora Runner — side" },
    { url: "https://picsum.photos/seed/ls-b/800/800", alt: "Aurora Runner — top" },
    { url: "https://picsum.photos/seed/ls-c/800/800", alt: "Aurora Runner — detail" },
  ],
  variants: [
    {
      id: "variant-01",
      title: "Ocean / 40",
      options: [
        { option: { title: "Color" }, value: "Ocean" },
        { option: { title: "Size" }, value: "40" },
      ],
      inventory_quantity: 14,
      manage_inventory: true,
      calculated_price: { calculated_amount: 12900, currency_code: "usd" },
    },
    {
      id: "variant-02",
      title: "Ocean / 42",
      options: [
        { option: { title: "Color" }, value: "Ocean" },
        { option: { title: "Size" }, value: "42" },
      ],
      inventory_quantity: 2,
      manage_inventory: true,
      calculated_price: { calculated_amount: 12900, currency_code: "usd" },
    },
    {
      id: "variant-03",
      title: "Dune / 42",
      options: [
        { option: { title: "Color" }, value: "Dune" },
        { option: { title: "Size" }, value: "42" },
      ],
      inventory_quantity: 0,
      manage_inventory: true,
      calculated_price: { calculated_amount: 13400, currency_code: "usd" },
    },
  ],
  calculated_price: { calculated_amount: 12900, currency_code: "usd" },
  metadata: { rating: "4.6", review_count: "128" },
};

export const fixtureProducts: ProductLike[] = [
  fixtureProduct,
  {
    ...fixtureProduct,
    id: "fixture-product-02",
    title: "Meridian Knit Tee",
    variants: [
      { ...fixtureProduct.variants![0], id: "variant-11", title: "Slate / M" },
    ],
  },
  {
    ...fixtureProduct,
    id: "fixture-product-03",
    title: "Harbor Weekender Bag",
    variants: [
      { ...fixtureProduct.variants![0], id: "variant-21", title: "Default" },
    ],
  },
];

export const fixtureCart = {
  id: "fixture-cart-01",
  item_count: 2,
  currency_code: "usd",
  items: [
    { id: "line-01", title: "Aurora Runner Sneakers", variant_title: "Ocean / 42", thumbnail: null, quantity: 1, unit_price: 12900, total: 12900 },
    { id: "line-02", title: "Meridian Knit Tee", variant_title: "Slate / M", thumbnail: null, quantity: 2, unit_price: 4900, total: 9800 },
  ],
  subtotal: 22700,
  shipping_total: 500,
  tax_total: 0,
  discount_total: 0,
  total: 23200,
};

export interface CategoryLike {
  id: string;
  name: string;
  handle?: string;
  emoji?: string;
  imageUrl?: string | null;
}

export const fixtureCategories: CategoryLike[] = [
  { id: "cat-01", name: "Sneakers", emoji: "👟", handle: "sneakers" },
  { id: "cat-02", name: "Tees", emoji: "👕", handle: "tees" },
  { id: "cat-03", name: "Bags", emoji: "🎒", handle: "bags" },
  { id: "cat-04", name: "Accessories", emoji: "🧢", handle: "accessories" },
];

export const fixtureTestimonials = [
  { id: "t-1", quote: "Best fitting sneakers I have owned. The app makes reordering effortless.", author: "Amna K." },
  { id: "t-2", quote: "Fast delivery and painless returns straight from the app.", author: "Daniel R." },
  { id: "t-3", quote: "The seasonal picks are always on point.", author: "Sofia M." },
];

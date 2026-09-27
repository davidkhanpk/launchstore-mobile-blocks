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

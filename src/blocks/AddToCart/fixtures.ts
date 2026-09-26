/**
 * Editor-only fixture for the data channel (doc 4 §5, doc 6 §3).
 * The app receives the real product from the screen context; the Puck canvas
 * renders from this instead — behavior differences never leak into design mode.
 */
export function AddToCartFixtures() {
  return {
    product: {
      id: "fixture-product-01",
      title: "Aurora Runner Sneakers",
      variants: [
        {
          id: "variant-01",
          title: "Ocean / 42",
          calculated_price: { calculated_amount: 12900, currency_code: "usd" },
          inventory_quantity: 14,
          manage_inventory: true,
        },
      ],
    },
  };
}

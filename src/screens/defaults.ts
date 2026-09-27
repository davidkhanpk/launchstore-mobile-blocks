import type { ScreenDoc } from "../types";

/**
 * Built-in fallback screen layouts — what the app renders before a merchant
 * designs anything (config bundle screens take precedence; these are the
 * last-resort rung of the fallback chain: bundle → cache → defaults).
 * Task 3.4's derivation service replaces these with per-store derived
 * layouts once the merchant enables mobile.
 */
export const DEFAULT_SCREENS: Record<string, ScreenDoc> = {
  home: {
    templateType: "MOBILE_HOME",
    version: 1,
    blocks: [
      { type: "Hero", props: {} },
      { type: "ProductRail", props: { title: "Featured" } },
    ],
  },
  product: {
    templateType: "MOBILE_PRODUCT",
    version: 1,
    blocks: [
      { type: "ProductGallery", props: { variant: "pager" } },
      { type: "ProductTitle", props: {} },
      { type: "ProductPrice", props: {} },
      { type: "ProductVariantSelector", props: { style: "chips" } },
      { type: "StockIndicator", props: {} },
      { type: "QuantitySelector", props: {} },
      { type: "AddToCart", props: { fullWidth: true } },
      { type: "ProductRail", props: { title: "You may also like" } },
    ],
  },
  listing: {
    templateType: "MOBILE_LISTING",
    version: 1,
    blocks: [{ type: "ProductRail", props: {} }],
  },
};

export * from "./types";
export * from "./registry";
export { AddToCart, AddToCartBlock } from "./blocks/AddToCart/AddToCart";
export { AddToCartRestyle } from "./blocks/AddToCart/variants/AddToCart.restyle";
export { AddToCartGluestack } from "./blocks/AddToCart/variants/AddToCart.gluestack";
export { AddToCartFixtures } from "./blocks/AddToCart/fixtures";
export * from "./theme/tokens";
export { buildRestyleTheme } from "./theme/restyle-theme";
export type { Theme as RestyleTheme } from "./theme/restyle-theme";
export { themeVars } from "./theme/nativewind-vars";

import type { BlockRegistry } from "./types";
import { AddToCart } from "./blocks/AddToCart/AddToCart";

/** The live catalog — grows block by block through Epic 2 (task 2.3). */
export const REGISTRY: BlockRegistry = {
  [AddToCart.meta.name]: AddToCart,
};

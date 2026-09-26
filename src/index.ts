export * from "./types";
export * from "./registry";
export { AddToCart, AddToCartBlock } from "./blocks/AddToCart/AddToCart";
export type { AddToCartProps } from "./blocks/AddToCart/AddToCart";
export { AddToCartFixtures } from "./blocks/AddToCart/fixtures";

import type { BlockRegistry } from "./types";
import { AddToCart } from "./blocks/AddToCart/AddToCart";

/** The live catalog — grows block by block through Epic 2 (task 2.3). */
export const REGISTRY: BlockRegistry = {
  [AddToCart.meta.name]: AddToCart,
};

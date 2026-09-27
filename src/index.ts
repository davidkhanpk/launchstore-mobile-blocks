export * from "./types";
export * from "./registry";
export * from "./runtime/context";
export * from "./screens/defaults";

// Block set A (doc 8 task 2.3) — single-file blocks with co-located meta/fixtures.
export { ProductTitleBlock, meta as productTitleMeta } from "./blocks/ProductTitle";
export { ProductPriceBlock, meta as productPriceMeta } from "./blocks/ProductPrice";
export { ProductGalleryBlock, meta as productGalleryMeta } from "./blocks/ProductGallery";
export {
  ProductVariantSelectorBlock,
  meta as productVariantSelectorMeta,
} from "./blocks/ProductVariantSelector";
export { QuantitySelectorBlock, meta as quantitySelectorMeta } from "./blocks/QuantitySelector";
export { StockIndicatorBlock, meta as stockIndicatorMeta } from "./blocks/StockIndicator";
export { ProductCardBlock, meta as productCardMeta } from "./blocks/ProductCard";
export { HeroBlock, meta as heroMeta } from "./blocks/Hero";
export { ProductRailBlock, meta as productRailMeta } from "./blocks/ProductRail";

// Flagship block + spike variants (0.6 comparison screen).
export { AddToCart, AddToCartBlock } from "./blocks/AddToCart/AddToCart";
export type { AddToCartProps } from "./blocks/AddToCart/AddToCart";
export { AddToCartRestyle } from "./blocks/AddToCart/variants/AddToCart.restyle";
export { AddToCartGluestack } from "./blocks/AddToCart/variants/AddToCart.gluestack";
export { AddToCartFixtures } from "./blocks/AddToCart/fixtures";
export { fixtureProduct, fixtureProducts } from "./fixtures";

// Theming engines + token contract.
export * from "./theme/tokens";
export { buildRestyleTheme } from "./theme/restyle-theme";
export type { Theme as RestyleTheme } from "./theme/restyle-theme";
export { themeVars } from "./theme/nativewind-vars";

import type { BlockDefinition, BlockRegistry } from "./types";
import { AddToCart } from "./blocks/AddToCart/AddToCart";
import { ProductTitleBlock, meta as productTitleMeta } from "./blocks/ProductTitle";
import { ProductPriceBlock, meta as productPriceMeta } from "./blocks/ProductPrice";
import { ProductGalleryBlock, meta as productGalleryMeta } from "./blocks/ProductGallery";
import {
  ProductVariantSelectorBlock,
  meta as productVariantSelectorMeta,
} from "./blocks/ProductVariantSelector";
import { QuantitySelectorBlock, meta as quantitySelectorMeta } from "./blocks/QuantitySelector";
import { StockIndicatorBlock, meta as stockIndicatorMeta } from "./blocks/StockIndicator";
import { ProductCardBlock, meta as productCardMeta } from "./blocks/ProductCard";
import { HeroBlock, meta as heroMeta } from "./blocks/Hero";
import { ProductRailBlock, meta as productRailMeta } from "./blocks/ProductRail";
import { fixtureProduct, fixtureProducts } from "./fixtures";

const def = (component: unknown, meta: any, fixtures?: () => Record<string, unknown>): BlockDefinition =>
  ({ component: component as any, meta, fixtures }) as BlockDefinition;

/** The live catalog — block set A (task 2.3). */
export const REGISTRY: BlockRegistry = {
  [AddToCart.meta.name]: AddToCart,
  ProductTitle: def(ProductTitleBlock, productTitleMeta),
  ProductPrice: def(ProductPriceBlock, productPriceMeta),
  ProductGallery: def(ProductGalleryBlock, productGalleryMeta),
  ProductVariantSelector: def(ProductVariantSelectorBlock, productVariantSelectorMeta),
  QuantitySelector: def(QuantitySelectorBlock, quantitySelectorMeta),
  StockIndicator: def(StockIndicatorBlock, stockIndicatorMeta),
  ProductCard: def(ProductCardBlock, productCardMeta, () => ({ product: fixtureProduct })),
  Hero: def(HeroBlock, heroMeta),
  ProductRail: def(ProductRailBlock, productRailMeta, () => ({ products: fixtureProducts })),
};

import meta from "./AddToCart.meta";
import { AddToCartRestyle } from "./variants/AddToCart.restyle";
import type { AddToCartVariantProps } from "./variants/AddToCart.restyle";

/**
 * Registry entry. Default engine: @shopify/restyle (runs anywhere, zero build
 * setup). The NativeWind/gluestack variant is exported alongside for the
 * task 0.3-0.6 spike comparison; the facade switches to the winner once the
 * decision record (0.6) lands.
 */
export const AddToCartBlock = AddToCartRestyle;
export type { AddToCartVariantProps as AddToCartProps } from "./variants/AddToCart.restyle";

export const AddToCart = {
  meta,
  component: AddToCartBlock,
};

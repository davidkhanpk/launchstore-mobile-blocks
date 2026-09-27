import React from "react";
import type { AddToCartVariantProps } from "./AddToCart.restyle";
/**
 * Variant B — the NativeWind engine (gluestack-ui's foundation: gluestack
 * components are copy-paste primitives styled with these same Tailwind
 * classes). Runtime theming via CSS variables: a wrapper sets
 * vars(themeVars(tokens)) and every --ls-* class re-resolves. Requires the
 * consuming app to run the NativeWind babel/metro plugin and extend
 * tailwind.config.js (see this package's tailwind.config.js).
 */
export declare function AddToCartGluestack({ label, variant, fullWidth, busy, onPress, }: AddToCartVariantProps): React.JSX.Element;

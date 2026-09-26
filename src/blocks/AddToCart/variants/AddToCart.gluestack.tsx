import React from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import type { AddToCartVariantProps } from "./AddToCart.restyle";

const BG: Record<NonNullable<AddToCartVariantProps["variant"]>, string> = {
  primary: "bg-ls-btn-primary-bg",
  secondary: "bg-ls-btn-secondary-bg",
  danger: "bg-ls-btn-danger-bg",
};
const FG: Record<NonNullable<AddToCartVariantProps["variant"]>, string> = {
  primary: "text-ls-btn-primary-fg",
  secondary: "text-ls-btn-secondary-fg",
  danger: "text-ls-btn-danger-fg",
};

/**
 * Variant B — the NativeWind engine (gluestack-ui's foundation: gluestack
 * components are copy-paste primitives styled with these same Tailwind
 * classes). Runtime theming via CSS variables: a wrapper sets
 * vars(themeVars(tokens)) and every --ls-* class re-resolves. Requires the
 * consuming app to run the NativeWind babel/metro plugin and extend
 * tailwind.config.js (see this package's tailwind.config.js).
 */
export function AddToCartGluestack({
  label = "Add to Cart",
  variant = "primary",
  fullWidth,
  busy,
  onPress,
}: AddToCartVariantProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      disabled={busy}
      className={`rounded-ls-md px-5 py-3.5 active:opacity-80 ${BG[variant]} ${
        fullWidth ? "w-full" : "self-start"
      }`}
    >
      {busy ? (
        <ActivityIndicator />
      ) : (
        <Text className={`text-base font-semibold ${FG[variant]}`}>{label}</Text>
      )}
    </Pressable>
  );
}

import React, { useState } from "react";
import { ActivityIndicator, Pressable, Text } from "react-native";
import meta from "./AddToCart.meta";
import {
  matchVariant,
  useCommerce,
  useProductInteraction,
  useScreenData,
  type ProductLike,
} from "../../runtime/context";

/**
 * Canonical AddToCart on the NativeWind engine, consistent with block set A.
 * The dual spike variants remain exported for the 0.6 comparison screen;
 * the facade flips between engines in one line if the decision reverses.
 */

const BG: Record<string, string> = {
  primary: "bg-ls-btn-primary-bg",
  secondary: "bg-ls-btn-secondary-bg",
  danger: "bg-ls-btn-danger-bg",
};
const FG: Record<string, string> = {
  primary: "text-ls-btn-primary-fg",
  secondary: "text-ls-btn-secondary-fg",
  danger: "text-ls-btn-danger-fg",
};

export interface AddToCartProps {
  label?: string;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
}

export function AddToCartBlock({
  label = "Add to Cart",
  variant = "primary",
  fullWidth,
}: AddToCartProps) {
  const product = useScreenData<ProductLike>("product");
  const { selectedOptions, quantity } = useProductInteraction();
  const commerce = useCommerce();
  const [state, setState] = useState<"idle" | "busy" | "added" | "error">("idle");

  const matched = matchVariant(product, selectedOptions);

  async function handlePress() {
    if (!matched) {
      setState("error");
      return;
    }
    setState("busy");
    try {
      await commerce.addToCart(matched.id, quantity);
      commerce.track("add_to_cart", {
        productId: product?.id,
        variantId: matched.id,
        quantity,
      });
      setState("added");
      setTimeout(() => setState("idle"), 1500);
    } catch {
      setState("error");
    }
  }

  const text =
    state === "added" ? "Added ✓" : state === "error" ? "Select options" : label;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={handlePress}
      disabled={state === "busy"}
      className={`items-center justify-center rounded-ls-md px-5 py-3.5 active:opacity-80 ${BG[variant]} ${
        fullWidth ? "w-full" : "self-start"
      }`}
    >
      {state === "busy" ? (
        <ActivityIndicator />
      ) : (
        <Text className={`text-base font-semibold ${FG[variant]}`}>{text}</Text>
      )}
    </Pressable>
  );
}

export const AddToCart = {
  meta,
  component: AddToCartBlock,
};

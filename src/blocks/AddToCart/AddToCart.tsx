import React from "react";
import { Pressable, Text } from "react-native";
import meta from "./AddToCart.meta";

export interface AddToCartProps {
  /** ── Merchant props (puckData) ── */
  label?: string;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  /**
   * ── Runtime channels (doc 6 §3) ──
   * In the app these come from ScreenDataProvider + CommerceProvider;
   * in the editor they resolve to fixtures + inert mocks.
   * TODO(task 0.3): this scaffold stub gets replaced by the dual spike
   * implementations (gluestack vs @shopify/restyle); every visual value
   * must read from theme tokens, never literals (doc 4 §3 step ①).
   */
}

export function AddToCartBlock({
  label = "Add to Cart",
  fullWidth,
}: AddToCartProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => ({
        // Scaffold placeholder styling — tokens replace this in task 0.3.
        opacity: pressed ? 0.8 : 1,
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        backgroundColor: "#111111",
        alignSelf: fullWidth ? "stretch" : "flex-start",
      })}
    >
      <Text style={{ color: "#ffffff", fontWeight: "600" }}>{label}</Text>
    </Pressable>
  );
}

export const AddToCart = {
  meta,
  component: AddToCartBlock,
};

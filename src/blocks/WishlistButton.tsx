import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useCommerce, useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "WishlistButton",
  label: "Wishlist Button",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: ["track"],
};

export interface WishlistButtonProps {
  label?: string;
}

export function WishlistButtonBlock({ label = "Save" }: WishlistButtonProps) {
  const product = useScreenData<ProductLike>("product");
  const commerce = useCommerce();
  const [saved, setSaved] = useState(false);
  if (!product) return null;
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={() => {
        setSaved((v) => !v);
        commerce.track(saved ? "wishlist_removed" : "wishlist_added", { productId: product.id });
      }}
      className={`flex-row items-center gap-1.5 self-start rounded-ls-md border px-4 py-2 ${
        saved ? "border-ls-brand-primary bg-ls-brand-primary" : "border-ls-ui-surface bg-ls-ui-surface"
      }`}
    >
      <Text className={saved ? "text-ls-text-inverse" : "text-ls-text-primary"}>
        {saved ? "♥" : "♡"}
      </Text>
      <Text className={`text-sm font-medium ${saved ? "text-ls-text-inverse" : "text-ls-text-primary"}`}>
        {saved ? "Saved" : label}
      </Text>
    </Pressable>
  );
}

export const fixtures = () => ({});

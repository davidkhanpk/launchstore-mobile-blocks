import React from "react";
import { Text, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductRating",
  label: "Product Rating",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductRatingProps {
  rating?: number;
  reviewCount?: number;
}

function Stars({ value }: { value: number }) {
  const full = Math.round(value);
  return (
    <Text className="text-ls-brand-primary" accessibilityLabel={`${value} out of 5 stars`}>
      {"★".repeat(full)}
      <Text className="opacity-25">{"★".repeat(Math.max(0, 5 - full))}</Text>
    </Text>
  );
}

export function ProductRatingBlock({ rating, reviewCount }: ProductRatingProps) {
  const product = useScreenData<ProductLike>("product");
  const meta = product as unknown as { metadata?: Record<string, string> } | undefined;
  const value = rating ?? Number(meta?.metadata?.rating ?? 0);
  const count = reviewCount ?? Number(meta?.metadata?.review_count ?? 0);
  if (!value) return null;
  return (
    <View className="flex-row items-center gap-2">
      <Stars value={value} />
      <Text className="text-xs text-ls-text-primary opacity-60">
        {value.toFixed(1)}{count ? ` (${count})` : ""}
      </Text>
    </View>
  );
}

export const fixtures = () => ({});

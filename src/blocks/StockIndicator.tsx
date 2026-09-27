import React from "react";
import { Text, View } from "react-native";
import { matchVariant, useProductInteraction, useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "StockIndicator",
  label: "Stock Indicator",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface StockIndicatorProps {
  lowThreshold?: number;
}

export function StockIndicatorBlock({ lowThreshold = 5 }: StockIndicatorProps) {
  const product = useScreenData<ProductLike>("product");
  const { selectedOptions } = useProductInteraction();
  const variant = matchVariant(product, selectedOptions);
  if (!variant) return null;

  const out = variant.manage_inventory !== false && (variant.inventory_quantity ?? 0) <= 0;
  const low = !out && variant.manage_inventory !== false && (variant.inventory_quantity ?? 0) <= lowThreshold;
  const label = out ? "Out of stock" : low ? `Only ${variant.inventory_quantity} left` : "In stock";
  const tone = out ? "text-ls-btn-danger-fg" : low ? "text-ls-brand-primary" : "text-ls-text-primary";

  return (
    <View className="flex-row items-center gap-2">
      <View className={`h-2 w-2 rounded-full ${out ? "bg-ls-btn-danger-bg" : "bg-ls-brand-primary"}`} />
      <Text className={`text-sm font-medium ${tone}`}>{label}</Text>
    </View>
  );
}

export const fixtures = () => ({});

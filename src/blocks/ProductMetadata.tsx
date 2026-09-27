import React from "react";
import { Text, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductMetadata",
  label: "Product Metadata",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductMetadataProps {
  rows?: Array<{ label: string; value: string }>;
}

export function ProductMetadataBlock({ rows }: ProductMetadataProps) {
  const product = useScreenData<ProductLike>("product");
  if (!product) return null;
  const items =
    rows ??
    [
      { label: "Product ID", value: product.handle ?? product.id.slice(0, 12) },
      { label: "Variants", value: String(product.variants?.length ?? 0) },
    ];
  return (
    <View className="gap-1.5">
      {items.map((row) => (
        <View key={row.label} className="flex-row justify-between">
          <Text className="text-xs text-ls-text-primary opacity-50">{row.label}</Text>
          <Text className="text-xs text-ls-text-primary opacity-80">{row.value}</Text>
        </View>
      ))}
    </View>
  );
}

export const fixtures = () => ({});

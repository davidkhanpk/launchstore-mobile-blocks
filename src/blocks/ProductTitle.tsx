import React from "react";
import { Text, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductTitle",
  label: "Product Title",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
  a11y: { role: "header" },
};

export interface ProductTitleProps {
  level?: "lg" | "md";
}

export function ProductTitleBlock({ level = "lg" }: ProductTitleProps) {
  const product = useScreenData<ProductLike>("product");
  if (!product) return null;
  return (
    <View>
      <Text
        accessibilityRole="header"
        className={level === "lg" ? "text-2xl font-bold text-ls-text-primary" : "text-lg font-semibold text-ls-text-primary"}
      >
        {product.title}
      </Text>
    </View>
  );
}

export const fixtures = () => ({});

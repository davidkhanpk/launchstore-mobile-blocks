import React from "react";
import { Text, View } from "react-native";
import { formatPrice, useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductPrice",
  label: "Price",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductPriceProps {
  /** Show the per-selected-variant price instead of the product default. */
  followSelection?: boolean;
}

export function ProductPriceBlock({ followSelection }: ProductPriceProps) {
  const product = useScreenData<ProductLike>("product");
  if (!product) return null;
  const price = product.calculated_price;
  if (!price) return null;
  return (
    <View className="flex-row items-baseline gap-2">
      <Text className="text-xl font-bold text-ls-brand-primary">
        {formatPrice(price.calculated_amount, price.currency_code)}
      </Text>
    </View>
  );
}

export const fixtures = () => ({});

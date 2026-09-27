import React from 'react';
import { Text } from 'react-native';
import { useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductDescription",
  label: "Product Description",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductDescriptionProps {
  numberOfLines?: number;
}

export function ProductDescriptionBlock({ numberOfLines }: ProductDescriptionProps) {
  const product = useScreenData<ProductLike>("product");
  if (!product?.description) return null;
  return (
    <Text numberOfLines={numberOfLines} className="text-sm leading-5 text-ls-text-primary opacity-70">
      {product.description}
    </Text>
  );
}

export const fixtures = () => ({});

import React from "react";
import { FlatList, Text, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import { fixtureProducts } from "../fixtures";
import { ProductCardBlock } from "./ProductCard";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductRail",
  label: "Product Rail",
  description: "Horizontal snap-scroll of product cards — the mobile idiom replacing web grids/carousels.",
  category: "HOMEPAGE",
  mobileBehavior: "reimagined",
  dataDeps: ["products"],
  actions: ["addToCart"],
};

export interface ProductRailProps {
  title?: string;
  products?: ProductLike[];
  onProductPress?: (product: ProductLike) => void;
}

export function ProductRailBlock({ title, products: productsProp, onProductPress }: ProductRailProps) {
  const products = productsProp ?? useScreenData<ProductLike[]>("products") ?? fixtureProducts;
  if (!products.length) return null;
  return (
    <View className="gap-3">
      {title ? (
        <Text accessibilityRole="header" className="px-1 text-lg font-bold text-ls-text-primary">
          {title}
        </Text>
      ) : null}
      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 4 }}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => <ProductCardBlock product={item} onPress={onProductPress} />}
      />
    </View>
  );
}

export const fixtures = () => ({ products: fixtureProducts });

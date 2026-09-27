import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import { fixtureProducts } from "../fixtures";
import { ProductCardBlock } from "./ProductCard";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductGrid",
  label: "Product Grid",
  description: "Vertical product grid — the mobile listing idiom (infinite scroll / load more).",
  category: "LISTING",
  mobileBehavior: "reimagined",
  dataDeps: ["products"],
  actions: ["addToCart"],
};

export interface ProductGridProps {
  columns?: 1 | 2 | 3;
  /** Load-more button instead of infinite scroll (screen option proxy). */
  loadMore?: boolean;
  products?: ProductLike[];
  onProductPress?: (product: ProductLike) => void;
}

export function ProductGridBlock({
  columns = 2,
  loadMore,
  products: productsProp,
  onProductPress,
}: ProductGridProps) {
  const [expanded, setExpanded] = React.useState(false);
  const all = productsProp ?? useScreenData<ProductLike[]>("products") ?? fixtureProducts;
  const products = loadMore && !expanded ? all.slice(0, columns! * 4) : all;

  return (
    <View className="gap-3">
      <FlatList
        data={products}
        numColumns={columns}
        key={columns}
        scrollEnabled={false}
        columnWrapperStyle={columns > 1 ? { gap: 10 } : undefined}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => (
          <View style={{ flex: columns > 1 ? 1 : undefined }}>
            <ProductCardBlock product={item} onPress={onProductPress} />
          </View>
        )}
      />
      {loadMore && !expanded && all.length > products.length ? (
        <Pressable
          accessibilityRole="button"
          onPress={() => setExpanded(true)}
          className="self-center rounded-ls-md border border-ls-ui-surface px-6 py-2.5"
        >
          <Text className="text-sm font-medium text-ls-text-primary">
            Load more ({all.length - products.length})
          </Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({ products: fixtureProducts });

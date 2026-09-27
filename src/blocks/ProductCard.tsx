import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { formatPrice, useCommerce, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductCard",
  label: "Product Card",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: ["addToCart"],
};

export interface ProductCardProps {
  product?: ProductLike;
  showAddButton?: boolean;
  onPress?: (product: ProductLike) => void;
}

export function ProductCardBlock({ product, showAddButton = true, onPress }: ProductCardProps) {
  const commerce = useCommerce();
  if (!product) return null;
  const price = product.calculated_price;
  const image = product.images?.[0]?.url ?? product.thumbnail;
  const variant = product.variants?.[0];

  return (
    <Pressable
      accessible
      accessibilityLabel={product.title}
      onPress={() => onPress?.(product)}
      className="w-44 overflow-hidden rounded-ls-md bg-ls-ui-surface"
    >
      <View className="relative">
        <Image
          source={image ? { uri: image } : { uri: "https://picsum.photos/seed/ls-card/400/400" }}
          style={{ width: "100%", aspectRatio: 1 }}
          contentFit="cover"
          transition={100}
        />
      </View>
      <View className="gap-1 p-3">
        <Text numberOfLines={2} className="text-sm font-semibold text-ls-text-primary">
          {product.title}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text className="text-sm font-bold text-ls-brand-primary">
            {price ? formatPrice(price.calculated_amount, price.currency_code) : ""}
          </Text>
          {showAddButton && variant ? (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Add ${product.title} to cart`}
              onPress={(e) => {
                e.stopPropagation?.();
                void commerce.addToCart(variant.id, 1);
              }}
              className="rounded-ls-md bg-ls-btn-primary-bg px-3 py-1.5"
            >
              <Text className="text-xs font-semibold text-ls-btn-primary-fg">Add</Text>
            </Pressable>
          ) : null}
        </View>
      </View>
    </Pressable>
  );
}

export const fixtures = () => ({});

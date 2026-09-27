import { Image } from "expo-image";
import React, { useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductGallery",
  label: "Product Gallery",
  description: "Swipeable image pager — the native descendant of the web Swiper galleries (doc 10 §3).",
  category: "PRODUCT",
  mobileBehavior: "reimagined",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductGalleryProps {
  variant?: "pager" | "grid";
  /** Snap the pager to the selected variant's first image (screen option proxy). */
  variantImageSync?: boolean;
  aspectRatio?: number;
}

export function ProductGalleryBlock({
  variant = "pager",
  aspectRatio = 1,
}: ProductGalleryProps) {
  const product = useScreenData<ProductLike>("product");
  const [index, setIndex] = useState(0);
  const images = product?.images?.length ? product.images : product?.thumbnail ? [{ url: product.thumbnail }] : [];
  if (!images.length) {
    return (
      <View
        className="w-full items-center justify-center rounded-ls-md bg-ls-ui-surface"
        style={{ aspectRatio }}
      >
        <Image source={{ uri: "https://picsum.photos/seed/ls-empty/600/600" }} style={{ width: "100%", height: "100%" }} />
      </View>
    );
  }

  if (variant === "grid") {
    return (
      <View className="flex-row flex-wrap gap-2">
        {images.map((img) => (
          <View key={img.url} className="w-[49%] overflow-hidden rounded-ls-md">
            <Image source={{ uri: img.url }} style={{ width: "100%", aspectRatio }} />
          </View>
        ))}
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          setIndex(Math.round(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width || 1)))
        }
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View className="w-full overflow-hidden rounded-ls-md">
            <Image
              source={{ uri: item.url }}
              style={{ width: "100%", aspectRatio }}
              contentFit="cover"
              transition={120}
            />
          </View>
        )}
      />
      {images.length > 1 ? (
        <View className="mt-2 flex-row justify-center gap-1.5">
          {images.map((img, i) => (
            <View
              key={img.url}
              className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-ls-brand-primary" : "bg-ls-ui-surface"}`}
            />
          ))}
        </View>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({});

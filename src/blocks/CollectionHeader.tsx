import React from "react";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "CollectionHeader",
  label: "Collection Header",
  description: "Banner image with title and optional count.",
  category: "LISTING",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface CollectionHeaderProps {
  title?: string;
  imageUrl?: string;
  count?: number;
}

export function CollectionHeaderBlock({ title = "Collection", imageUrl, count }: CollectionHeaderProps) {
  return (
    <View className="gap-3">
      <Image
        source={{ uri: imageUrl ?? "https://picsum.photos/seed/ls-collection/1200/500" }}
        style={{ width: "100%", aspectRatio: 2.4 }}
        contentFit="cover"
        className="rounded-ls-md"
      />
      <View className="gap-0.5">
        <Text accessibilityRole="header" className="text-2xl font-bold text-ls-text-primary">
          {title}
        </Text>
        {typeof count === "number" ? (
          <Text className="text-sm text-ls-text-primary opacity-60">{count} products</Text>
        ) : null}
      </View>
    </View>
  );
}

export const fixtures = () => ({ title: "Summer collection" });

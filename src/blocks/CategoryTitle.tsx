import React from "react";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "CategoryTitle",
  label: "Category Title",
  category: "LISTING",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface CategoryTitleProps {
  title?: string;
  count?: number;
}

export function CategoryTitleBlock({ title = "Category", count }: CategoryTitleProps) {
  return (
    <View className="gap-1">
      <Text accessibilityRole="header" className="text-2xl font-bold text-ls-text-primary">
        {title}
      </Text>
      {typeof count === "number" ? (
        <Text className="text-sm text-ls-text-primary opacity-60">{count} products</Text>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({ title: "Featured category" });

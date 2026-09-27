import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { fixtureCategories, type CategoryLike } from "../fixtures";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "CategoriesGrid",
  label: "Categories Grid",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: ["categories"],
  actions: [],
};

export interface CategoriesGridProps {
  columns?: 2 | 3;
  categories?: CategoryLike[];
  onCategoryPress?: (category: CategoryLike) => void;
}

export function CategoriesGridBlock({ columns = 2, categories, onCategoryPress }: CategoriesGridProps) {
  const items = categories ?? fixtureCategories;
  return (
    <FlatList
      data={items}
      numColumns={columns}
      scrollEnabled={false}
      key={columns}
      columnWrapperStyle={{ gap: 10 }}
      contentContainerStyle={{ gap: 10 }}
      keyExtractor={(c) => c.id}
      renderItem={({ item }) => (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={item.name}
          onPress={() => onCategoryPress?.(item)}
          className="flex-1 items-center gap-2 rounded-ls-md bg-ls-ui-surface px-3 py-5"
        >
          <Text className="text-3xl">{item.emoji ?? "🛍️"}</Text>
          <Text className="text-sm font-semibold text-ls-text-primary">{item.name}</Text>
        </Pressable>
      )}
    />
  );
}

export const fixtures = () => ({ categories: fixtureCategories });

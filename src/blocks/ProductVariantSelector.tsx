import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useProductInteraction, useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductVariantSelector",
  label: "Variant Selector",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductVariantSelectorProps {
  style?: "chips" | "list";
}

/** Option groups derived from variant options (variant-level, no extra fetch). */
function optionGroups(product: ProductLike) {
  const groups = new Map<string, string[]>();
  for (const v of product.variants ?? []) {
    for (const o of v.options ?? []) {
      const title = o.option?.title ?? "Option";
      const list = groups.get(title) ?? [];
      if (!list.includes(o.value)) list.push(o.value);
      groups.set(title, list);
    }
  }
  return [...groups.entries()];
}

export function ProductVariantSelectorBlock({ style = "chips" }: ProductVariantSelectorProps) {
  const product = useScreenData<ProductLike>("product");
  const { selectedOptions, setSelectedOptions } = useProductInteraction();
  if (!product) return null;
  const groups = optionGroups(product);
  if (!groups.length) return null;

  return (
    <View className="gap-3">
      {groups.map(([title, values]) => (
        <View key={title} className="gap-2">
          <Text className="text-sm font-semibold text-ls-text-primary">{title}</Text>
          {style === "chips" ? (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }}>
              {values.map((value) => {
                const selected = selectedOptions[title] === value;
                return (
                  <Pressable
                    key={value}
                    accessibilityRole="button"
                    accessibilityLabel={`${title}: ${value}`}
                    onPress={() => setSelectedOptions({ ...selectedOptions, [title]: value })}
                    className={`rounded-ls-md border px-4 py-2 ${
                      selected
                        ? "border-ls-brand-primary bg-ls-brand-primary"
                        : "border-ls-ui-surface bg-ls-ui-surface"
                    }`}
                  >
                    <Text className={selected ? "text-sm font-medium text-ls-text-inverse" : "text-sm text-ls-text-primary"}>
                      {value}
                    </Text>
                  </Pressable>
                );
              })}
            </ScrollView>
          ) : (
            <View className="gap-2">
              {values.map((value) => (
                <Pressable
                  key={value}
                  accessibilityRole="button"
                  onPress={() => setSelectedOptions({ ...selectedOptions, [title]: value })}
                  className={`rounded-ls-md px-4 py-3 ${
                    selectedOptions[title] === value ? "bg-ls-brand-primary" : "bg-ls-ui-surface"
                  }`}
                >
                  <Text className={selectedOptions[title] === value ? "text-ls-text-inverse" : "text-ls-text-primary"}>
                    {value}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

export const fixtures = () => ({});

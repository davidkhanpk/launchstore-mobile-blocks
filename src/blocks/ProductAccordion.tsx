import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useScreenData, type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "ProductAccordion",
  label: "Product Accordion",
  description: "Collapsible detail sections — details / shipping / returns.",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: ["product"],
  actions: [],
};

export interface ProductAccordionProps {
  sections?: Array<{ title: string; body: string }>;
}

const DEFAULT_SECTIONS = [
  { title: "Shipping", body: "Free shipping on orders over $75. Delivered in 3–5 business days." },
  { title: "Returns", body: "30-day returns, free of charge. Items must be unworn with tags attached." },
];

export function ProductAccordionBlock({ sections }: ProductAccordionProps) {
  const product = useScreenData<ProductLike>("product");
  const [open, setOpen] = useState<number | null>(0);
  const items =
    sections ??
    [
      { title: "Details", body: product?.description ?? "" },
      ...DEFAULT_SECTIONS,
    ].filter((s) => s.body);

  return (
    <View className="gap-2">
      {items.map((section, i) => {
        const isOpen = open === i;
        return (
          <View key={section.title} className="overflow-hidden rounded-ls-md bg-ls-ui-surface">
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={section.title}
              onPress={() => setOpen(isOpen ? null : i)}
              className="flex-row items-center justify-between px-4 py-3"
            >
              <Text className="text-sm font-semibold text-ls-text-primary">{section.title}</Text>
              <Text className="text-ls-text-primary opacity-50">{isOpen ? "−" : "+"}</Text>
            </Pressable>
            {isOpen ? (
              <Text className="px-4 pb-3 text-sm leading-5 text-ls-text-primary opacity-70">
                {section.body}
              </Text>
            ) : null}
          </View>
        );
      })}
    </View>
  );
}

export const fixtures = () => ({});

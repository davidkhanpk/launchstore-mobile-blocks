import React from "react";
import { Pressable, Text, View } from "react-native";
import { useProductInteraction } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "QuantitySelector",
  label: "Quantity",
  category: "PRODUCT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface QuantitySelectorProps {
  min?: number;
  max?: number;
}

export function QuantitySelectorBlock({ min = 1, max = 99 }: QuantitySelectorProps) {
  const { quantity, setQuantity } = useProductInteraction();
  return (
    <View className="flex-row items-center rounded-ls-md border border-ls-ui-surface bg-ls-ui-surface">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Decrease quantity"
        onPress={() => setQuantity(Math.max(min, quantity - 1))}
        className="px-4 py-2.5"
      >
        <Text className="text-lg font-semibold text-ls-text-primary">−</Text>
      </Pressable>
      <Text accessibilityLabel="Quantity" className="min-w-8 text-center text-base font-semibold text-ls-text-primary">
        {quantity}
      </Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Increase quantity"
        onPress={() => setQuantity(Math.min(max, quantity + 1))}
        className="px-4 py-2.5"
      >
        <Text className="text-lg font-semibold text-ls-text-primary">+</Text>
      </Pressable>
    </View>
  );
}

export const fixtures = () => ({});

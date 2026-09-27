import React from "react";
import { Pressable, Text, View } from "react-native";
import {
  formatPrice,
  useCommerce,
  useScreenData,
  type CartLike,
} from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "CartItems",
  label: "Cart Items",
  description: "Line items with quantity steppers and remove — the cart core.",
  category: "CART",
  mobileBehavior: "native-port",
  dataDeps: ["cart"],
  actions: ["updateCartLine", "removeCartLine"],
};

export function CartItemsBlock() {
  const cart = useScreenData<CartLike>("cart");
  const commerce = useCommerce();
  const items = cart?.items ?? [];
  if (!items.length) return null;

  return (
    <View className="gap-3">
      {items.map((line) => (
        <View key={line.id} className="flex-row items-center gap-3 rounded-ls-md bg-ls-ui-surface p-3">
          <View className="h-16 w-16 items-center justify-center rounded-ls-md bg-ls-brand-primary/10">
            <Text className="text-xl opacity-40">👟</Text>
          </View>
          <View className="flex-1 gap-0.5">
            <Text numberOfLines={1} className="text-sm font-semibold text-ls-text-primary">
              {line.title}
            </Text>
            {line.variant_title ? (
              <Text className="text-xs text-ls-text-primary opacity-50">{line.variant_title}</Text>
            ) : null}
            <Text className="text-sm font-bold text-ls-brand-primary">
              {formatPrice(line.total ?? line.unit_price ?? 0, cart?.currency_code ?? undefined)}
            </Text>
          </View>
          <View className="items-end gap-1.5">
            <View className="flex-row items-center gap-2">
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Decrease quantity"
                onPress={() => void commerce.updateCartLine(line.id, Math.max(0, line.quantity - 1))}
                className="h-7 w-7 items-center justify-center rounded-ls-md bg-ls-ui-background"
              >
                <Text className="text-ls-text-primary">−</Text>
              </Pressable>
              <Text className="min-w-4 text-center text-sm font-semibold text-ls-text-primary">
                {line.quantity}
              </Text>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Increase quantity"
                onPress={() => void commerce.updateCartLine(line.id, line.quantity + 1)}
                className="h-7 w-7 items-center justify-center rounded-ls-md bg-ls-ui-background"
              >
                <Text className="text-ls-text-primary">+</Text>
              </Pressable>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel={`Remove ${line.title}`}
              onPress={() => void commerce.removeCartLine(line.id)}
            >
              <Text className="text-xs text-ls-text-primary opacity-50">Remove</Text>
            </Pressable>
          </View>
        </View>
      ))}
    </View>
  );
}

export const fixtures = () => ({});

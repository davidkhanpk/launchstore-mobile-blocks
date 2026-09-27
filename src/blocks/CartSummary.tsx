import React from "react";
import { Text, View } from "react-native";
import { formatPrice, useScreenData, type CartLike } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "CartSummary",
  label: "Cart Summary",
  description: "Totals breakdown — subtotal, shipping, discount, total.",
  category: "CART",
  mobileBehavior: "native-port",
  dataDeps: ["cart"],
  actions: [],
};

export function CartSummaryBlock() {
  const cart = useScreenData<CartLike>("cart");
  if (!cart) return null;
  const currency = cart.currency_code ?? undefined;
  const rows = [
    { label: "Subtotal", value: formatPrice(cart.subtotal, currency) },
    ...(cart.shipping_total ? [{ label: "Shipping", value: formatPrice(cart.shipping_total, currency) }] : []),
    ...(cart.discount_total ? [{ label: "Discount", value: `−${formatPrice(cart.discount_total, currency)}` }] : []),
  ];

  return (
    <View className="gap-2 rounded-ls-md bg-ls-ui-surface p-4">
      {rows.map((row) => (
        <View key={row.label} className="flex-row justify-between">
          <Text className="text-sm text-ls-text-primary opacity-70">{row.label}</Text>
          <Text className="text-sm text-ls-text-primary">{row.value}</Text>
        </View>
      ))}
      <View className="mt-1 flex-row justify-between border-t border-ls-ui-border pt-2">
        <Text className="text-base font-bold text-ls-text-primary">Total</Text>
        <Text className="text-base font-bold text-ls-brand-primary">
          {formatPrice(cart.total ?? cart.subtotal, currency)}
        </Text>
      </View>
    </View>
  );
}

export const fixtures = () => ({});

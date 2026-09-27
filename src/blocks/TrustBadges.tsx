import React from "react";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "TrustBadges",
  label: "Trust Badges",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface TrustBadgesProps {
  /** Comma-separated in the editor; array from data. */
  items?: string[] | string;
}

export function TrustBadgesBlock({ items }: TrustBadgesProps) {
  const list =
    typeof items === "string"
      ? items.split(",").map((s) => s.trim()).filter(Boolean)
      : (items ?? ["Free shipping", "30-day returns", "Secure checkout"]);
  return (
    <View className="flex-row flex-wrap justify-center gap-x-5 gap-y-2">
      {list.map((item) => (
        <View key={item} className="flex-row items-center gap-1.5">
          <Text className="text-ls-brand-primary">✓</Text>
          <Text className="text-xs font-medium text-ls-text-primary opacity-80">{item}</Text>
        </View>
      ))}
    </View>
  );
}

export const fixtures = () => ({});

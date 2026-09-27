import React from "react";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "StatsRow",
  label: "Stats Row",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface StatsRowProps {
  /** Comma-separated "value|label" pairs, e.g. "10k+|customers,4.8★|rating". */
  stats?: string;
}

export function StatsRowBlock({ stats }: StatsRowProps) {
  const pairs = (stats ?? "10k+|customers, 4.8★|avg rating, 24h|dispatch")
    .split(",")
    .map((pair) => pair.split("|").map((x) => x.trim()))
    .filter((pair) => pair.length === 2 && pair[0]);

  return (
    <View className="flex-row justify-around rounded-ls-md bg-ls-ui-surface px-4 py-5">
      {pairs.map(([value, label]) => (
        <View key={label} className="items-center gap-1">
          <Text className="text-xl font-bold text-ls-brand-primary">{value}</Text>
          <Text className="text-xs text-ls-text-primary opacity-60">{label}</Text>
        </View>
      ))}
    </View>
  );
}

export const fixtures = () => ({});

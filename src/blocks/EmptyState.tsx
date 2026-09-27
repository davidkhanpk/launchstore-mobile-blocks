import React from "react";
import { Pressable, Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "EmptyState",
  label: "Empty State",
  category: "LISTING",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface EmptyStateProps {
  message?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export function EmptyStateBlock({
  message = "Nothing here yet",
  ctaLabel,
  onCta,
}: EmptyStateProps) {
  return (
    <View className="items-center gap-3 py-12">
      <Text className="text-4xl">🛍️</Text>
      <Text className="text-sm text-ls-text-primary opacity-60">{message}</Text>
      {ctaLabel ? (
        <Pressable
          accessibilityRole="button"
          onPress={onCta}
          className="rounded-ls-md bg-ls-btn-primary-bg px-6 py-2.5"
        >
          <Text className="text-sm font-semibold text-ls-btn-primary-fg">{ctaLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({});

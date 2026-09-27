import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "Hero",
  label: "Hero",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface HeroProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  imageUrl?: string;
  onCta?: () => void;
}

export function HeroBlock({ heading, subheading, ctaLabel, imageUrl, onCta }: HeroProps) {
  return (
    <View className="w-full overflow-hidden rounded-ls-lg">
      <Image
        source={{ uri: imageUrl ?? "https://picsum.photos/seed/ls-hero/1200/800" }}
        style={{ width: "100%", aspectRatio: 1.6 }}
        contentFit="cover"
      />
      <View className="gap-2 p-5">
        {heading ? (
          <Text accessibilityRole="header" className="text-2xl font-bold text-ls-text-primary">
            {heading}
          </Text>
        ) : null}
        {subheading ? (
          <Text className="text-sm text-ls-text-primary opacity-70">{subheading}</Text>
        ) : null}
        {ctaLabel ? (
          <Pressable
            accessibilityRole="button"
            onPress={onCta}
            className="mt-1 self-start rounded-ls-md bg-ls-btn-primary-bg px-6 py-3"
          >
            <Text className="text-sm font-semibold text-ls-btn-primary-fg">{ctaLabel}</Text>
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}

export const fixtures = () => ({
  heading: "New season, new kicks",
  subheading: "Editor's picks from the collection",
  ctaLabel: "Shop now",
});

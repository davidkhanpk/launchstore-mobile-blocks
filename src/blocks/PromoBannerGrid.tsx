import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "PromoBannerGrid",
  label: "Promo Banner Grid",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export interface PromoBannerGridProps {
  primaryTitle?: string;
  primaryCta?: string;
  primaryImageUrl?: string;
  secondaryTitle?: string;
  secondaryCta?: string;
  secondaryImageUrl?: string;
}

function PromoCard({
  title,
  cta,
  imageUrl,
  tall,
}: {
  title: string;
  cta?: string;
  imageUrl?: string;
  tall?: boolean;
}) {
  return (
    <Pressable accessibilityRole="button" accessibilityLabel={title} className="flex-1 overflow-hidden rounded-ls-md">
      <Image
        source={{ uri: imageUrl ?? `https://picsum.photos/seed/ls-promo-${title}/600/${tall ? 800 : 500}` }}
        style={{ width: "100%", aspectRatio: tall ? 0.75 : 1.2 }}
        contentFit="cover"
      />
      <View className="absolute inset-0 justify-end bg-black/30 p-3">
        <Text className="text-base font-bold text-white">{title}</Text>
        {cta ? <Text className="mt-0.5 text-xs text-white opacity-90">{cta} →</Text> : null}
      </View>
    </Pressable>
  );
}

export function PromoBannerGridBlock({
  primaryTitle = "New season",
  primaryCta = "Explore",
  primaryImageUrl,
  secondaryTitle = "Clearance",
  secondaryCta = "Up to 50% off",
  secondaryImageUrl,
}: PromoBannerGridProps) {
  return (
    <View className="flex-row gap-3">
      <PromoCard title={primaryTitle} cta={primaryCta} imageUrl={primaryImageUrl} tall />
      <PromoCard title={secondaryTitle} cta={secondaryCta} imageUrl={secondaryImageUrl} />
    </View>
  );
}

export const fixtures = () => ({});

import { Image } from "expo-image";
import React, { useRef, useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Pressable, Text, View } from "react-native";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "BannerCarousel",
  label: "Banner Carousel",
  description: "Auto-advancing promo slides — the native descendant of the web ContentSlider.",
  category: "HOMEPAGE",
  mobileBehavior: "reimagined",
  dataDeps: [],
  actions: [],
};

export interface BannerSlide {
  imageUrl?: string;
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
}

export interface BannerCarouselProps {
  slides?: BannerSlide[];
  /** Auto-advance seconds (0 = off). */
  autoAdvanceSeconds?: number;
}

const DEFAULT_SLIDES: BannerSlide[] = [
  { imageUrl: "https://picsum.photos/seed/ls-banner1/1200/700", heading: "Season sale", subheading: "Up to 40% off", ctaLabel: "Shop sale" },
  { imageUrl: "https://picsum.photos/seed/ls-banner2/1200/700", heading: "New arrivals", subheading: "Fresh this week", ctaLabel: "See what's new" },
];

export function BannerCarouselBlock({ slides, autoAdvanceSeconds = 5 }: BannerCarouselProps) {
  const items = slides?.length ? slides : DEFAULT_SLIDES;
  const [index, setIndex] = useState(0);
  const listRef = useRef<FlatList<BannerSlide>>(null);

  React.useEffect(() => {
    if (!autoAdvanceSeconds || items.length < 2) return;
    const timer = setInterval(() => {
      const next = (index + 1) % items.length;
      listRef.current?.scrollToIndex({ index: next, animated: true });
      setIndex(next);
    }, autoAdvanceSeconds * 1000);
    return () => clearInterval(timer);
  }, [index, items.length, autoAdvanceSeconds]);

  return (
    <View>
      <FlatList
        ref={listRef}
        data={items}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, i) => String(i)}
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          setIndex(Math.round(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width || 1)))
        }
        renderItem={({ item }) => (
          <View className="w-full overflow-hidden rounded-ls-lg">
            <Image source={{ uri: item.imageUrl ?? "https://picsum.photos/seed/ls-banner/1200/700" }} style={{ width: "100%", aspectRatio: 1.7 }} contentFit="cover" />
            <View className="absolute inset-0 justify-end bg-black/35 p-5">
              {item.heading ? (
                <Text accessibilityRole="header" className="text-2xl font-bold text-white">
                  {item.heading}
                </Text>
              ) : null}
              {item.subheading ? (
                <Text className="mt-1 text-sm text-white opacity-90">{item.subheading}</Text>
              ) : null}
              {item.ctaLabel ? (
                <Pressable accessibilityRole="button" className="mt-3 self-start rounded-ls-md bg-white px-5 py-2">
                  <Text className="text-sm font-semibold text-gray-900">{item.ctaLabel}</Text>
                </Pressable>
              ) : null}
            </View>
          </View>
        )}
      />
      {items.length > 1 ? (
        <View className="mt-2 flex-row justify-center gap-1.5">
          {items.map((_, i) => (
            <View key={i} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-ls-brand-primary" : "bg-ls-ui-border"}`} />
          ))}
        </View>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({});

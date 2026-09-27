import React, { useState } from "react";
import { FlatList, NativeScrollEvent, NativeSyntheticEvent, Text, View } from "react-native";
import { fixtureTestimonials } from "../fixtures";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "TestimonialSlider",
  label: "Testimonials",
  category: "HOMEPAGE",
  mobileBehavior: "reimagined",
  dataDeps: ["testimonials"],
  actions: [],
};

export interface TestimonialLike {
  id: string;
  quote: string;
  author: string;
}

export function TestimonialSliderBlock({ items }: { items?: TestimonialLike[] }) {
  const list: TestimonialLike[] = items?.length ? items : fixtureTestimonials;
  const [index, setIndex] = useState(0);
  return (
    <View>
      <FlatList
        data={list}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(t) => t.id}
        onMomentumScrollEnd={(e: NativeSyntheticEvent<NativeScrollEvent>) =>
          setIndex(Math.round(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width || 1)))
        }
        renderItem={({ item }) => (
          <View className="w-full gap-2 rounded-ls-md bg-ls-ui-surface p-5">
            <Text className="text-base leading-6 text-ls-text-primary">“{item.quote}”</Text>
            <Text className="text-xs font-semibold text-ls-brand-primary">— {item.author}</Text>
          </View>
        )}
      />
      {list.length > 1 ? (
        <View className="mt-2 flex-row justify-center gap-1.5">
          {list.map((t, i) => (
            <View key={t.id} className={`h-1.5 w-1.5 rounded-full ${i === index ? "bg-ls-brand-primary" : "bg-ls-ui-border"}`} />
          ))}
        </View>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({});

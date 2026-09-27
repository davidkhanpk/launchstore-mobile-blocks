import React, { useState } from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { useListingInteraction, type SortOption } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "FilterSortBar",
  label: "Filter / Sort Bar",
  description: "Sort chip row + bottom-sheet with sort options (filters grow here with facets).",
  category: "LISTING",
  mobileBehavior: "reimagined",
  dataDeps: [],
  actions: [],
};

const SORTS: Array<{ value: SortOption; label: string }> = [
  { value: "recommended", label: "Recommended" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
];

export function FilterSortBarBlock() {
  const { sort, setSort } = useListingInteraction();
  const [open, setOpen] = useState(false);
  const active = SORTS.find((s) => s.value === sort);

  return (
    <View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Sort products"
        onPress={() => setOpen(true)}
        className="self-start rounded-ls-md border border-ls-ui-surface bg-ls-ui-surface px-4 py-2"
      >
        <Text className="text-sm text-ls-text-primary">Sort: {active?.label ?? "Recommended"} ▾</Text>
      </Pressable>

      <Modal visible={open} animationType="slide" transparent onRequestClose={() => setOpen(false)}>
        <Pressable className="flex-1 justify-end bg-black/40" onPress={() => setOpen(false)}>
          <View className="rounded-t-ls-lg bg-ls-ui-background p-5 gap-2">
            <Text className="mb-1 text-base font-bold text-ls-text-primary">Sort by</Text>
            {SORTS.map((option) => (
              <Pressable
                key={option.value}
                accessibilityRole="button"
                onPress={() => {
                  setSort(option.value);
                  setOpen(false);
                }}
                className={`rounded-ls-md px-4 py-3 ${
                  sort === option.value ? "bg-ls-brand-primary" : "bg-ls-ui-surface"
                }`}
              >
                <Text
                  className={
                    sort === option.value ? "text-ls-text-inverse" : "text-ls-text-primary"
                  }
                >
                  {option.label}
                </Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

export const fixtures = () => ({});

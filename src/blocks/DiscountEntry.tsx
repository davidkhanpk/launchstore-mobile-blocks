import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useCommerce } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "DiscountEntry",
  label: "Discount Code",
  category: "CART",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: ["applyDiscount"],
};

export function DiscountEntryBlock() {
  const commerce = useCommerce();
  const [code, setCode] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "error">("idle");

  async function apply() {
    if (!code.trim()) return;
    setState("busy");
    try {
      await commerce.applyDiscount(code.trim());
      setState("done");
    } catch {
      setState("error");
    }
  }

  return (
    <View className="gap-2">
      <View className="flex-row gap-2">
        <TextInput
          accessibilityLabel="Discount code"
          value={code}
          onChangeText={setCode}
          placeholder="Discount code"
          placeholderTextColor="#9CA3AF"
          className="flex-1 rounded-ls-md border border-ls-ui-border bg-ls-ui-background px-4 py-2.5 text-sm text-ls-text-primary"
        />
        <Pressable
          accessibilityRole="button"
          onPress={() => void apply()}
          disabled={state === "busy"}
          className="items-center justify-center rounded-ls-md bg-ls-btn-primary-bg px-5"
        >
          <Text className="text-sm font-semibold text-ls-btn-primary-fg">
            {state === "busy" ? "…" : "Apply"}
          </Text>
        </Pressable>
      </View>
      {state === "done" ? (
        <Text className="text-xs text-ls-brand-primary">Code applied ✓</Text>
      ) : state === "error" ? (
        <Text className="text-xs text-ls-btn-danger-fg">Invalid code</Text>
      ) : null}
    </View>
  );
}

export const fixtures = () => ({});

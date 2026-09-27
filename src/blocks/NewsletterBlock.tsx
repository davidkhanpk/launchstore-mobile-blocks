import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { useCommerce } from "../runtime/context";
import type { BlockMeta } from "../types";

export const meta: BlockMeta = {
  name: "NewsletterBlock",
  label: "Newsletter Signup",
  category: "HOMEPAGE",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: ["track"],
};

export interface NewsletterBlockProps {
  title?: string;
  placeholder?: string;
  ctaLabel?: string;
}

export function NewsletterBlockBlock({
  title = "Join our list",
  placeholder = "Email address",
  ctaLabel = "Subscribe",
}: NewsletterBlockProps) {
  const commerce = useCommerce();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <View className="gap-3 rounded-ls-md bg-ls-ui-surface p-5">
      <Text className="text-base font-bold text-ls-text-primary">{title}</Text>
      {done ? (
        <Text className="text-sm text-ls-brand-primary">Thanks — you&apos;re on the list ✓</Text>
      ) : (
        <View className="flex-row gap-2">
          <TextInput
            accessibilityLabel="Email address"
            value={email}
            onChangeText={setEmail}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            keyboardType="email-address"
            autoCapitalize="none"
            className="flex-1 rounded-ls-md border border-ls-ui-border bg-ls-ui-background px-4 py-2.5 text-sm text-ls-text-primary"
          />
          <Pressable
            accessibilityRole="button"
            onPress={() => {
              if (!email.includes("@")) return;
              commerce.track("newsletter_subscribed", { email });
              setDone(true);
            }}
            className="items-center justify-center rounded-ls-md bg-ls-btn-primary-bg px-5"
          >
            <Text className="text-sm font-semibold text-ls-btn-primary-fg">{ctaLabel}</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

export const fixtures = () => ({});

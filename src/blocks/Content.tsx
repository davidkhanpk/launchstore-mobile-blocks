import { Image } from "expo-image";
import React from "react";
import { Text, View, Pressable } from "react-native";
import type { BlockMeta } from "../types";

/**
 * Generic content blocks — the mobile CONTENT category toolkit shared by
 * content/legal pages and as building material inside other screens.
 */

export const headingMeta: BlockMeta = {
  name: "Heading",
  label: "Heading",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function HeadingBlock({ text = "Heading", level = "lg" }: { text?: string; level?: "lg" | "md" | "sm" }) {
  const cls =
    level === "lg"
      ? "text-2xl font-bold text-ls-text-primary"
      : level === "md"
        ? "text-lg font-semibold text-ls-text-primary"
        : "text-base font-semibold text-ls-text-primary";
  return (
    <Text accessibilityRole="header" className={cls}>
      {text}
    </Text>
  );
}

export const textMeta: BlockMeta = {
  name: "TextBlock",
  label: "Text",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function TextBlock({ text = "Paragraph text." }: { text?: string }) {
  return (
    <Text className="text-sm leading-6 text-ls-text-primary opacity-80">{text}</Text>
  );
}

export const imageMeta: BlockMeta = {
  name: "ImageBlock",
  label: "Image",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function ImageBlock({
  imageUrl,
  aspectRatio = 1.6,
}: {
  imageUrl?: string;
  aspectRatio?: number;
}) {
  return (
    <Image
      source={{ uri: imageUrl ?? "https://picsum.photos/seed/ls-content/1000/600" }}
      style={{ width: "100%", aspectRatio }}
      contentFit="cover"
      className="rounded-ls-md"
    />
  );
}

export const buttonMeta: BlockMeta = {
  name: "ButtonBlock",
  label: "Button",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function ButtonBlock({
  label = "Tap me",
  onPress,
}: {
  label?: string;
  onPress?: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="self-start rounded-ls-md bg-ls-btn-primary-bg px-6 py-3"
    >
      <Text className="text-sm font-semibold text-ls-btn-primary-fg">{label}</Text>
    </Pressable>
  );
}

export const contentFixtures = () => ({});

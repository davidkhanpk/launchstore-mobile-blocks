import { Image } from "expo-image";
import React, { useState } from "react";
import { Pressable, Share, Text, View } from "react-native";
import { useNavigation } from "../runtime/context";
import type { BlockMeta } from "../types";

/**
 * Generic set C — web-parity utilities (Link, Accordion, Alert, Badge, Card,
 * List, Avatar) plus mobile-native idioms (SearchEntry, ShareButton).
 * All CONTENT category: available on every screen type.
 */

// ── Link ────────────────────────────────────────────────────────────────────

export const linkMeta: BlockMeta = {
  name: "Link",
  label: "Link",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function LinkBlock({
  text = "Learn more",
  url,
}: {
  text?: string;
  url?: string;
}) {
  const nav = useNavigation();
  return (
    <Pressable accessibilityRole="link" onPress={() => url && nav.go(url)}>
      <Text className="text-sm font-medium text-ls-brand-primary underline">
        {text}
      </Text>
    </Pressable>
  );
}

// ── Accordion (generic) ─────────────────────────────────────────────────────

export const accordionMeta: BlockMeta = {
  name: "Accordion",
  label: "Accordion",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function AccordionBlock({
  title = "Section",
  body = "Collapsible content.",
}: {
  title?: string;
  body?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View className="overflow-hidden rounded-ls-md bg-ls-ui-surface">
      <Pressable
        accessibilityRole="button"
        onPress={() => setOpen(!open)}
        className="flex-row items-center justify-between px-4 py-3"
      >
        <Text className="text-sm font-semibold text-ls-text-primary">{title}</Text>
        <Text className="text-ls-text-primary opacity-50">{open ? "−" : "+"}</Text>
      </Pressable>
      {open ? (
        <Text className="px-4 pb-3 text-sm leading-5 text-ls-text-primary opacity-70">{body}</Text>
      ) : null}
    </View>
  );
}

// ── Alert ───────────────────────────────────────────────────────────────────

export const alertMeta: BlockMeta = {
  name: "Alert",
  label: "Alert",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function AlertBlock({
  tone = "info",
  message = "Free shipping on orders over $75.",
}: {
  tone?: "info" | "success" | "warning" | "error";
  message?: string;
}) {
  const icon = { info: "ℹ️", success: "✅", warning: "⚠️", error: "⛔" }[tone];
  return (
    <View className="flex-row items-center gap-2.5 rounded-ls-md bg-ls-ui-surface px-4 py-3">
      <Text className="text-base">{icon}</Text>
      <Text className="flex-1 text-sm text-ls-text-primary">{message}</Text>
    </View>
  );
}

// ── Badge ───────────────────────────────────────────────────────────────────

export const badgeMeta: BlockMeta = {
  name: "Badge",
  label: "Badge",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function BadgeBlock({
  text = "New",
  tone = "brand",
}: {
  text?: string;
  tone?: "brand" | "success" | "danger" | "neutral";
}) {
  const toneCls = {
    brand: "bg-ls-brand-primary text-ls-text-inverse",
    success: "bg-ls-btn-primary-bg text-ls-btn-primary-fg",
    danger: "bg-ls-btn-danger-bg text-ls-btn-danger-fg",
    neutral: "bg-ls-ui-surface text-ls-text-primary",
  }[tone];
  return (
    <View className={`self-start rounded-full px-3 py-1 ${toneCls}`}>
      <Text className="text-xs font-semibold">{text}</Text>
    </View>
  );
}

// ── Card (flat: image + title + body + optional CTA) ───────────────────────

export const cardMeta: BlockMeta = {
  name: "Card",
  label: "Card",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function CardBlock({
  imageUrl,
  title = "Card title",
  body,
  ctaLabel,
}: {
  imageUrl?: string;
  title?: string;
  body?: string;
  ctaLabel?: string;
}) {
  return (
    <View className="overflow-hidden rounded-ls-md bg-ls-ui-surface">
      {imageUrl ? (
        <Image
          source={{ uri: imageUrl }}
          style={{ width: "100%", aspectRatio: 1.8 }}
          contentFit="cover"
        />
      ) : null}
      <View className="gap-1.5 p-4">
        <Text className="text-base font-bold text-ls-text-primary">{title}</Text>
        {body ? (
          <Text className="text-sm leading-5 text-ls-text-primary opacity-70">{body}</Text>
        ) : null}
        {ctaLabel ? (
          <Text className="mt-1 text-sm font-semibold text-ls-brand-primary">{ctaLabel} →</Text>
        ) : null}
      </View>
    </View>
  );
}

// ── List ────────────────────────────────────────────────────────────────────

export const listMeta: BlockMeta = {
  name: "List",
  label: "List",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function ListBlock({ items }: { items?: string[] | string }) {
  const rows =
    typeof items === "string"
      ? items.split(",").map((s) => s.trim()).filter(Boolean)
      : (items ?? ["Fast shipping", "Easy returns", "Secure payments"]);
  return (
    <View className="gap-2.5">
      {rows.map((row) => (
        <View key={row} className="flex-row items-center gap-2">
          <Text className="text-ls-brand-primary">•</Text>
          <Text className="flex-1 text-sm text-ls-text-primary">{row}</Text>
        </View>
      ))}
    </View>
  );
}

// ── Avatar ──────────────────────────────────────────────────────────────────

export const avatarMeta: BlockMeta = {
  name: "Avatar",
  label: "Avatar",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function AvatarBlock({
  imageUrl,
  name = "Store Team",
  subtitle,
}: {
  imageUrl?: string;
  name?: string;
  subtitle?: string;
}) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <View className="flex-row items-center gap-3">
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={{ width: 44, height: 44, borderRadius: 22 }} />
      ) : (
        <View className="h-11 w-11 items-center justify-center rounded-full bg-ls-brand-primary">
          <Text className="text-sm font-bold text-ls-text-inverse">{initials}</Text>
        </View>
      )}
      <View>
        <Text className="text-sm font-semibold text-ls-text-primary">{name}</Text>
        {subtitle ? (
          <Text className="text-xs text-ls-text-primary opacity-60">{subtitle}</Text>
        ) : null}
      </View>
    </View>
  );
}

// ── SearchEntry (mobile-native) ────────────────────────────────────────────

export const searchEntryMeta: BlockMeta = {
  name: "SearchEntry",
  label: "Search Entry",
  description: "Tap-to-search bar — the universal mobile commerce idiom.",
  category: "CONTENT",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function SearchEntryBlock({ placeholder = "Search products…" }: { placeholder?: string }) {
  const nav = useNavigation();
  return (
    <Pressable
      accessibilityRole="search"
      accessibilityLabel="Search"
      onPress={() => nav.go("/search")}
      className="flex-row items-center gap-2 rounded-ls-md border border-ls-ui-border bg-ls-ui-surface px-4 py-3"
    >
      <Text className="text-ls-text-primary opacity-40">🔍</Text>
      <Text className="flex-1 text-sm text-ls-text-primary opacity-50">{placeholder}</Text>
    </Pressable>
  );
}

// ── ShareButton (mobile-native — native share sheet) ───────────────────────

export const shareMeta: BlockMeta = {
  name: "ShareButton",
  label: "Share Button",
  description: "Opens the OS share sheet — mobile-only idiom.",
  category: "CONTENT",
  mobileBehavior: "reimagined",
  dataDeps: [],
  actions: [],
};

export function ShareButtonBlock({
  label = "Share",
  message = "Check this out!",
}: {
  label?: string;
  message?: string;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => void Share.share({ message }).catch(() => {})}
      className="self-start rounded-ls-md border border-ls-ui-border bg-ls-ui-surface px-5 py-2.5"
    >
      <Text className="text-sm font-medium text-ls-text-primary">↗ {label}</Text>
    </Pressable>
  );
}

export const genericFixtures = () => ({});

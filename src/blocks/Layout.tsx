import React from "react";
import { Text, View } from "react-native";
import type { BlockMeta } from "../types";

/**
 * LAYOUT-M — the canvas composition basics (doc 10's layout category).
 * SectionBand is the flat-list stand-in for the web Section wrapper: a
 * full-width colored band with an optional heading, styled by scheme tokens.
 */

export const sectionBandMeta: BlockMeta = {
  name: "SectionBand",
  label: "Section Band",
  description: "Full-width colored band with optional heading — visual section break.",
  category: "LAYOUT-M",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function SectionBandBlock({
  heading,
  scheme = "surface",
}: {
  heading?: string;
  scheme?: "surface" | "background" | "accent";
}) {
  const bg =
    scheme === "accent" ? "bg-ls-brand-primary" : scheme === "background" ? "bg-ls-ui-background" : "bg-ls-ui-surface";
  const fg = scheme === "accent" ? "text-ls-text-inverse" : "text-ls-text-primary";
  return (
    <View className={`w-full rounded-ls-md ${bg} px-4 py-5`}>
      {heading ? (
        <Text accessibilityRole="header" className={`text-base font-bold ${fg}`}>
          {heading}
        </Text>
      ) : null}
    </View>
  );
}

export const spacerMeta: BlockMeta = {
  name: "Spacer",
  label: "Spacer",
  category: "LAYOUT-M",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function SpacerBlock({ height = 24 }: { height?: number }) {
  return <View style={{ height }} />;
}

export const dividerMeta: BlockMeta = {
  name: "Divider",
  label: "Divider",
  category: "LAYOUT-M",
  mobileBehavior: "native-port",
  dataDeps: [],
  actions: [],
};

export function DividerBlock() {
  return <View className="h-px w-full bg-ls-ui-border" />;
}

export const layoutFixtures = () => ({});

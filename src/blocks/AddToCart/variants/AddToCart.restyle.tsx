import { createText } from "@shopify/restyle";
import React from "react";
import { ActivityIndicator, Pressable } from "react-native";
import type { Theme } from "../../../theme/restyle-theme";

const Text = createText<Theme>();

export interface AddToCartVariantProps {
  label?: string;
  variant?: "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  busy?: boolean;
  onPress?: () => void;
}

const BG: Record<NonNullable<AddToCartVariantProps["variant"]>, keyof Theme["colors"]> = {
  primary: "buttonPrimaryBg",
  secondary: "buttonSecondaryBg",
  danger: "buttonDangerBg",
};
const FG: Record<NonNullable<AddToCartVariantProps["variant"]>, keyof Theme["colors"]> = {
  primary: "buttonPrimaryFg",
  secondary: "buttonSecondaryFg",
  danger: "buttonDangerFg",
};

/**
 * Variant A — @shopify/restyle engine. Runtime theming via theme-object swap:
 * wrap in <ThemeProvider theme={buildRestyleTheme(tokens)}> and every themed
 * block re-renders when the tokens change. No babel/metro setup required.
 */
export function AddToCartRestyle({
  label = "Add to Cart",
  variant = "primary",
  fullWidth,
  busy,
  onPress,
}: AddToCartVariantProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      disabled={busy}
      style={({ pressed }) => ({
        backgroundColor: BG[variant] as string,
        borderRadius: 12,
        paddingVertical: 14,
        paddingHorizontal: 20,
        opacity: pressed ? 0.8 : 1,
        alignSelf: fullWidth ? "stretch" : "flex-start",
        alignItems: "center",
        justifyContent: "center",
      })}
    >
      {busy ? <ActivityIndicator /> : <Text variant="buttonLabel" color={FG[variant] as any}>{label}</Text>}
    </Pressable>
  );
}

import type { BaseTheme } from "@shopify/restyle";
import type { RawThemeTokens } from "./tokens";
import { resolveThemeTokens } from "./tokens";

/**
 * Variant A engine: @shopify/restyle. Runtime theming is this library's core
 * design — swap the theme object, every themed component re-renders.
 */
export interface Theme extends BaseTheme {
  colors: {
    brandPrimary: string;
    brandSecondary: string;
    brandAccent: string;
    textPrimary: string;
    textSecondary: string;
    textMuted: string;
    textInverse: string;
    uiBackground: string;
    uiSurface: string;
    uiBorder: string;
    buttonPrimaryBg: string;
    buttonPrimaryFg: string;
    buttonSecondaryBg: string;
    buttonSecondaryFg: string;
    buttonDangerBg: string;
    buttonDangerFg: string;
  };
  borderRadii: { sm: number; md: number; lg: number; full: number };
  spacing: { xs: number; sm: number; md: number; lg: number; xl: number };
  textVariants: {
    buttonLabel: { fontSize: number; fontWeight: "600" };
  };
}

const num = (v: string | undefined, fallback: number) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
};

export function buildRestyleTheme(raw: RawThemeTokens): Theme {
  const t = resolveThemeTokens(raw);
  return {
    colors: {
      brandPrimary: t.colors.brand.primary,
      brandSecondary: t.colors.brand.secondary,
      brandAccent: t.colors.brand.accent,
      textPrimary: t.colors.text.primary,
      textSecondary: t.colors.text.secondary,
      textMuted: t.colors.text.muted,
      textInverse: t.colors.text.inverse,
      uiBackground: t.colors.ui.background,
      uiSurface: t.colors.ui.surface,
      uiBorder: t.colors.ui.border,
      buttonPrimaryBg: t.colors.button.primary.background,
      buttonPrimaryFg: t.colors.button.primary.text,
      buttonSecondaryBg: t.colors.button.secondary.background,
      buttonSecondaryFg: t.colors.button.secondary.text,
      buttonDangerBg: t.colors.button.danger.background,
      buttonDangerFg: t.colors.button.danger.text,
    },
    borderRadii: {
      sm: num(t.layout.borderRadius.sm, 6),
      md: num(t.layout.borderRadius.md, 12),
      lg: num(t.layout.borderRadius.lg, 18),
      full: 9999,
    },
    spacing: {
      xs: num(t.layout.spacing.xs, 4),
      sm: num(t.layout.spacing.sm, 8),
      md: num(t.layout.spacing.md, 16),
      lg: num(t.layout.spacing.lg, 24),
      xl: num(t.layout.spacing.xl, 32),
    },
    textVariants: {
      buttonLabel: {
        fontSize: num(t.typography.fontSize.md, 16),
        fontWeight: "600",
      },
    },
  };
}

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

/** Platform layout tokens ship as "12" or "12px" — parseFloat handles both. */
const num = (v: string | undefined, fallback: number) => {
  const n = parseFloat(v ?? "");
  return Number.isFinite(n) ? n : fallback;
};

/** Component namespaces may be absent in legacy themes — derive safe defaults. */
function buttonColors(t: ReturnType<typeof resolveThemeTokens>) {
  const btn = t.colors.button ?? ({} as Record<string, never>);
  return {
    primaryBg: btn.primary?.background ?? t.colors.brand?.primary ?? "#111111",
    primaryFg: btn.primary?.text ?? t.colors.text?.inverse ?? "#FFFFFF",
    secondaryBg: btn.secondary?.background ?? t.colors.ui?.surface ?? "#F3F4F6",
    secondaryFg: btn.secondary?.text ?? t.colors.text?.primary ?? "#111827",
    dangerBg: btn.danger?.background ?? t.colors.status?.error ?? "#DC2626",
    dangerFg: btn.danger?.text ?? t.colors.text?.inverse ?? "#FFFFFF",
  };
}

export function buildRestyleTheme(raw: RawThemeTokens): Theme {
  const t = resolveThemeTokens(raw);
  const btn = buttonColors(t);
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
      buttonPrimaryBg: btn.primaryBg,
      buttonPrimaryFg: btn.primaryFg,
      buttonSecondaryBg: btn.secondaryBg,
      buttonSecondaryFg: btn.secondaryFg,
      buttonDangerBg: btn.dangerBg,
      buttonDangerFg: btn.dangerFg,
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

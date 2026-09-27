import type { RawThemeTokens } from "./tokens";
import { resolveThemeTokens } from "./tokens";

/**
 * Variant B's runtime token-swap mechanism: NativeWind theming flows through
 * CSS variables. Wrap the block tree in
 *   <View style={vars(themeVars(tokens))}>
 * (vars from 'nativewind') — publishing new tokens re-resolves every --ls-*
 * class without remounting. This mirrors how the web storefront swaps
 * --theme-* custom properties today.
 */
export function themeVars(raw: RawThemeTokens): Record<string, string> {
  const t = resolveThemeTokens(raw);
  // Component namespaces may be absent in legacy themes — derive safe defaults.
  const btnPrimaryBg = t.colors.button?.primary?.background ?? t.colors.brand.primary;
  const btnPrimaryFg = t.colors.button?.primary?.text ?? t.colors.text.inverse;
  const btnSecondaryBg = t.colors.button?.secondary?.background ?? t.colors.ui.surface;
  const btnSecondaryFg = t.colors.button?.secondary?.text ?? t.colors.text.primary;
  const btnDangerBg = t.colors.button?.danger?.background ?? t.colors.status.error;
  const btnDangerFg = t.colors.button?.danger?.text ?? t.colors.text.inverse;
  return {
    "--ls-brand-primary": t.colors.brand.primary,
    "--ls-brand-secondary": t.colors.brand.secondary,
    "--ls-brand-accent": t.colors.brand.accent,
    "--ls-text-primary": t.colors.text.primary,
    "--ls-text-inverse": t.colors.text.inverse,
    "--ls-ui-background": t.colors.ui.background,
    "--ls-ui-surface": t.colors.ui.surface,
    "--ls-btn-primary-bg": btnPrimaryBg,
    "--ls-btn-primary-fg": btnPrimaryFg,
    "--ls-btn-secondary-bg": btnSecondaryBg,
    "--ls-btn-secondary-fg": btnSecondaryFg,
    "--ls-btn-danger-bg": btnDangerBg,
    "--ls-btn-danger-fg": btnDangerFg,
    // Platform tokens may ship as "12" or "12px" — normalize, then append px once.
    "--ls-radius-sm": `${parseFloat(t.layout.borderRadius.sm)}px`,
    "--ls-radius-md": `${parseFloat(t.layout.borderRadius.md)}px`,
    "--ls-radius-lg": `${parseFloat(t.layout.borderRadius.lg)}px`,
  };
}

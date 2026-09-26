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
  return {
    "--ls-brand-primary": t.colors.brand.primary,
    "--ls-brand-secondary": t.colors.brand.secondary,
    "--ls-brand-accent": t.colors.brand.accent,
    "--ls-text-primary": t.colors.text.primary,
    "--ls-text-inverse": t.colors.text.inverse,
    "--ls-ui-background": t.colors.ui.background,
    "--ls-ui-surface": t.colors.ui.surface,
    "--ls-btn-primary-bg": t.colors.button.primary.background,
    "--ls-btn-primary-fg": t.colors.button.primary.text,
    "--ls-btn-secondary-bg": t.colors.button.secondary.background,
    "--ls-btn-secondary-fg": t.colors.button.secondary.text,
    "--ls-btn-danger-bg": t.colors.button.danger.background,
    "--ls-btn-danger-fg": t.colors.button.danger.text,
    "--ls-radius-sm": `${t.layout.borderRadius.sm}px`,
    "--ls-radius-md": `${t.layout.borderRadius.md}px`,
    "--ls-radius-lg": `${t.layout.borderRadius.lg}px`,
  };
}

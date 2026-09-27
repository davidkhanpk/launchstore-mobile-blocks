import type { RawThemeTokens } from "./tokens";
/**
 * Variant B's runtime token-swap mechanism: NativeWind theming flows through
 * CSS variables. Wrap the block tree in
 *   <View style={vars(themeVars(tokens))}>
 * (vars from 'nativewind') — publishing new tokens re-resolves every --ls-*
 * class without remounting. This mirrors how the web storefront swaps
 * --theme-* custom properties today.
 */
export declare function themeVars(raw: RawThemeTokens): Record<string, string>;

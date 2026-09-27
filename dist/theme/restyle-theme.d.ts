import type { BaseTheme } from "@shopify/restyle";
import type { RawThemeTokens } from "./tokens";
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
    borderRadii: {
        sm: number;
        md: number;
        lg: number;
        full: number;
    };
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    textVariants: {
        buttonLabel: {
            fontSize: number;
            fontWeight: "600";
        };
    };
}
export declare function buildRestyleTheme(raw: RawThemeTokens): Theme;

import React from "react";
export interface AddToCartVariantProps {
    label?: string;
    variant?: "primary" | "secondary" | "danger";
    fullWidth?: boolean;
    busy?: boolean;
    onPress?: () => void;
}
/**
 * Variant A — @shopify/restyle engine. Runtime theming via theme-object swap:
 * wrap in <ThemeProvider theme={buildRestyleTheme(tokens)}> and every themed
 * block re-renders when the tokens change. No babel/metro setup required.
 */
export declare function AddToCartRestyle({ label, variant, fullWidth, busy, onPress, }: AddToCartVariantProps): React.JSX.Element;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartRestyle = AddToCartRestyle;
const jsx_runtime_1 = require("react/jsx-runtime");
const restyle_1 = require("@shopify/restyle");
const react_native_1 = require("react-native");
const Text = (0, restyle_1.createText)();
const BG = {
    primary: "buttonPrimaryBg",
    secondary: "buttonSecondaryBg",
    danger: "buttonDangerBg",
};
const FG = {
    primary: "buttonPrimaryFg",
    secondary: "buttonSecondaryFg",
    danger: "buttonDangerFg",
};
/**
 * Variant A — @shopify/restyle engine. Runtime theming via theme-object swap:
 * wrap in <ThemeProvider theme={buildRestyleTheme(tokens)}> and every themed
 * block re-renders when the tokens change. No babel/metro setup required.
 */
function AddToCartRestyle({ label = "Add to Cart", variant = "primary", fullWidth, busy, onPress, }) {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: label, onPress: onPress, disabled: busy, style: ({ pressed }) => ({
            backgroundColor: BG[variant],
            borderRadius: 12,
            paddingVertical: 14,
            paddingHorizontal: 20,
            opacity: pressed ? 0.8 : 1,
            alignSelf: fullWidth ? "stretch" : "flex-start",
            alignItems: "center",
            justifyContent: "center",
        }), children: busy ? (0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, {}) : (0, jsx_runtime_1.jsx)(Text, { variant: "buttonLabel", color: FG[variant], children: label }) }));
}

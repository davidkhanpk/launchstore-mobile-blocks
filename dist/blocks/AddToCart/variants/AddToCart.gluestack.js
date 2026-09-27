"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCartGluestack = AddToCartGluestack;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const BG = {
    primary: "bg-ls-btn-primary-bg",
    secondary: "bg-ls-btn-secondary-bg",
    danger: "bg-ls-btn-danger-bg",
};
const FG = {
    primary: "text-ls-btn-primary-fg",
    secondary: "text-ls-btn-secondary-fg",
    danger: "text-ls-btn-danger-fg",
};
/**
 * Variant B — the NativeWind engine (gluestack-ui's foundation: gluestack
 * components are copy-paste primitives styled with these same Tailwind
 * classes). Runtime theming via CSS variables: a wrapper sets
 * vars(themeVars(tokens)) and every --ls-* class re-resolves. Requires the
 * consuming app to run the NativeWind babel/metro plugin and extend
 * tailwind.config.js (see this package's tailwind.config.js).
 */
function AddToCartGluestack({ label = "Add to Cart", variant = "primary", fullWidth, busy, onPress, }) {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: label, onPress: onPress, disabled: busy, className: `rounded-ls-md px-5 py-3.5 active:opacity-80 ${BG[variant]} ${fullWidth ? "w-full" : "self-start"}`, children: busy ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, {})) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: `text-base font-semibold ${FG[variant]}`, children: label })) }));
}

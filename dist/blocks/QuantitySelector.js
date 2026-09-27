"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.QuantitySelectorBlock = QuantitySelectorBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "QuantitySelector",
    label: "Quantity",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function QuantitySelectorBlock({ min = 1, max = 99 }) {
    const { quantity, setQuantity } = (0, context_1.useProductInteraction)();
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center rounded-ls-md border border-ls-ui-surface bg-ls-ui-surface", children: [(0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: "Decrease quantity", onPress: () => setQuantity(Math.max(min, quantity - 1)), className: "px-4 py-2.5", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-lg font-semibold text-ls-text-primary", children: "\u2212" }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityLabel: "Quantity", className: "min-w-8 text-center text-base font-semibold text-ls-text-primary", children: quantity }), (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: "Increase quantity", onPress: () => setQuantity(Math.min(max, quantity + 1)), className: "px-4 py-2.5", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-lg font-semibold text-ls-text-primary", children: "+" }) })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

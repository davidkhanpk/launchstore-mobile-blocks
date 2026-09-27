"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.EmptyCartBlock = EmptyCartBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
exports.meta = {
    name: "EmptyCart",
    label: "Empty Cart",
    category: "CART",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function EmptyCartBlock({ message = "Your cart is empty", ctaLabel = "Start shopping", onCta, }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "items-center gap-3 py-14", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-4xl", children: "\uD83D\uDED2" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm text-ls-text-primary opacity-60", children: message }), ctaLabel ? ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: onCta, className: "rounded-ls-md bg-ls-btn-primary-bg px-6 py-2.5", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-btn-primary-fg", children: ctaLabel }) })) : null] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

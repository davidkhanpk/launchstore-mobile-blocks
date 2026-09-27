"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.CartItemsBlock = CartItemsBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "CartItems",
    label: "Cart Items",
    description: "Line items with quantity steppers and remove — the cart core.",
    category: "CART",
    mobileBehavior: "native-port",
    dataDeps: ["cart"],
    actions: ["updateCartLine", "removeCartLine"],
};
function CartItemsBlock() {
    const cart = (0, context_1.useScreenData)("cart");
    const commerce = (0, context_1.useCommerce)();
    const items = cart?.items ?? [];
    if (!items.length)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "gap-3", children: items.map((line) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-3 rounded-ls-md bg-ls-ui-surface p-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { className: "h-16 w-16 items-center justify-center rounded-ls-md bg-ls-brand-primary/10", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xl opacity-40", children: "\uD83D\uDC5F" }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-1 gap-0.5", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 1, className: "text-sm font-semibold text-ls-text-primary", children: line.title }), line.variant_title ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-50", children: line.variant_title })) : null, (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-bold text-ls-brand-primary", children: (0, context_1.formatPrice)(line.total ?? line.unit_price ?? 0, cart?.currency_code ?? undefined) })] }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "items-end gap-1.5", children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: "Decrease quantity", onPress: () => void commerce.updateCartLine(line.id, Math.max(0, line.quantity - 1)), className: "h-7 w-7 items-center justify-center rounded-ls-md bg-ls-ui-background", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-text-primary", children: "\u2212" }) }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "min-w-4 text-center text-sm font-semibold text-ls-text-primary", children: line.quantity }), (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: "Increase quantity", onPress: () => void commerce.updateCartLine(line.id, line.quantity + 1), className: "h-7 w-7 items-center justify-center rounded-ls-md bg-ls-ui-background", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-text-primary", children: "+" }) })] }), (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: `Remove ${line.title}`, onPress: () => void commerce.removeCartLine(line.id), children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-50", children: "Remove" }) })] })] }, line.id))) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

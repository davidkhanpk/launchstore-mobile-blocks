"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.CartSummaryBlock = CartSummaryBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "CartSummary",
    label: "Cart Summary",
    description: "Totals breakdown — subtotal, shipping, discount, total.",
    category: "CART",
    mobileBehavior: "native-port",
    dataDeps: ["cart"],
    actions: [],
};
function CartSummaryBlock() {
    const cart = (0, context_1.useScreenData)("cart");
    if (!cart)
        return null;
    const currency = cart.currency_code ?? undefined;
    const rows = [
        { label: "Subtotal", value: (0, context_1.formatPrice)(cart.subtotal, currency) },
        ...(cart.shipping_total ? [{ label: "Shipping", value: (0, context_1.formatPrice)(cart.shipping_total, currency) }] : []),
        ...(cart.discount_total ? [{ label: "Discount", value: `−${(0, context_1.formatPrice)(cart.discount_total, currency)}` }] : []),
    ];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-2 rounded-ls-md bg-ls-ui-surface p-4", children: [rows.map((row) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row justify-between", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm text-ls-text-primary opacity-70", children: row.label }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm text-ls-text-primary", children: row.value })] }, row.label))), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "mt-1 flex-row justify-between border-t border-ls-ui-border pt-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base font-bold text-ls-text-primary", children: "Total" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base font-bold text-ls-brand-primary", children: (0, context_1.formatPrice)(cart.total ?? cart.subtotal, currency) })] })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

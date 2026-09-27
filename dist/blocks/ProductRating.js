"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductRatingBlock = ProductRatingBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductRating",
    label: "Product Rating",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
function Stars({ value }) {
    const full = Math.round(value);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-ls-brand-primary", accessibilityLabel: `${value} out of 5 stars`, children: ["★".repeat(full), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "opacity-25", children: "★".repeat(Math.max(0, 5 - full)) })] }));
}
function ProductRatingBlock({ rating, reviewCount }) {
    const product = (0, context_1.useScreenData)("product");
    const meta = product;
    const value = rating ?? Number(meta?.metadata?.rating ?? 0);
    const count = reviewCount ?? Number(meta?.metadata?.review_count ?? 0);
    if (!value)
        return null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(Stars, { value: value }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-60", children: [value.toFixed(1), count ? ` (${count})` : ""] })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

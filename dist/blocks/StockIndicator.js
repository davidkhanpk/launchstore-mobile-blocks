"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.StockIndicatorBlock = StockIndicatorBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "StockIndicator",
    label: "Stock Indicator",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
function StockIndicatorBlock({ lowThreshold = 5 }) {
    const product = (0, context_1.useScreenData)("product");
    const { selectedOptions } = (0, context_1.useProductInteraction)();
    const variant = (0, context_1.matchVariant)(product, selectedOptions);
    if (!variant)
        return null;
    const out = variant.manage_inventory !== false && (variant.inventory_quantity ?? 0) <= 0;
    const low = !out && variant.manage_inventory !== false && (variant.inventory_quantity ?? 0) <= lowThreshold;
    const label = out ? "Out of stock" : low ? `Only ${variant.inventory_quantity} left` : "In stock";
    const tone = out ? "text-ls-btn-danger-fg" : low ? "text-ls-brand-primary" : "text-ls-text-primary";
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { className: `h-2 w-2 rounded-full ${out ? "bg-ls-btn-danger-bg" : "bg-ls-brand-primary"}` }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: `text-sm font-medium ${tone}`, children: label })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductMetadataBlock = ProductMetadataBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductMetadata",
    label: "Product Metadata",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
function ProductMetadataBlock({ rows }) {
    const product = (0, context_1.useScreenData)("product");
    if (!product)
        return null;
    const items = rows ??
        [
            { label: "Product ID", value: product.handle ?? product.id.slice(0, 12) },
            { label: "Variants", value: String(product.variants?.length ?? 0) },
        ];
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "gap-1.5", children: items.map((row) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row justify-between", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-50", children: row.label }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-80", children: row.value })] }, row.label))) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

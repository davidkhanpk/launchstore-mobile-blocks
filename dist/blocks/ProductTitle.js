"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductTitleBlock = ProductTitleBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductTitle",
    label: "Product Title",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
    a11y: { role: "header" },
};
function ProductTitleBlock({ level = "lg" }) {
    const product = (0, context_1.useScreenData)("product");
    if (!product)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: level === "lg" ? "text-2xl font-bold text-ls-text-primary" : "text-lg font-semibold text-ls-text-primary", children: product.title }) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

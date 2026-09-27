"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductDescriptionBlock = ProductDescriptionBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductDescription",
    label: "Product Description",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
function ProductDescriptionBlock({ numberOfLines }) {
    const product = (0, context_1.useScreenData)("product");
    if (!product?.description)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: numberOfLines, className: "text-sm leading-5 text-ls-text-primary opacity-70", children: product.description }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

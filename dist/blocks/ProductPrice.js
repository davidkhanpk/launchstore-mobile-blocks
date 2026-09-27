"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductPriceBlock = ProductPriceBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductPrice",
    label: "Price",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
function ProductPriceBlock({ followSelection }) {
    const product = (0, context_1.useScreenData)("product");
    if (!product)
        return null;
    const price = product.calculated_price;
    if (!price)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "flex-row items-baseline gap-2", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xl font-bold text-ls-brand-primary", children: (0, context_1.formatPrice)(price.calculated_amount, price.currency_code) }) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

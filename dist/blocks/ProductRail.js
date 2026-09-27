"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductRailBlock = ProductRailBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
const fixtures_1 = require("../fixtures");
const ProductCard_1 = require("./ProductCard");
exports.meta = {
    name: "ProductRail",
    label: "Product Rail",
    description: "Horizontal snap-scroll of product cards — the mobile idiom replacing web grids/carousels.",
    category: "HOMEPAGE",
    mobileBehavior: "reimagined",
    dataDeps: ["products"],
    actions: ["addToCart"],
};
function ProductRailBlock({ title, products: productsProp, onProductPress }) {
    const products = productsProp ?? (0, context_1.useScreenData)("products") ?? fixtures_1.fixtureProducts;
    if (!products.length)
        return null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-3", children: [title ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: "px-1 text-lg font-bold text-ls-text-primary", children: title })) : null, (0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: products, horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: { gap: 12, paddingHorizontal: 4 }, keyExtractor: (p) => p.id, renderItem: ({ item }) => (0, jsx_runtime_1.jsx)(ProductCard_1.ProductCardBlock, { product: item, onPress: onProductPress }) })] }));
}
const fixtures = () => ({ products: fixtures_1.fixtureProducts });
exports.fixtures = fixtures;

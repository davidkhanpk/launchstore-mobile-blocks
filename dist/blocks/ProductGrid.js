"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductGridBlock = ProductGridBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
const fixtures_1 = require("../fixtures");
const ProductCard_1 = require("./ProductCard");
exports.meta = {
    name: "ProductGrid",
    label: "Product Grid",
    description: "Vertical product grid — the mobile listing idiom (infinite scroll / load more).",
    category: "LISTING",
    mobileBehavior: "reimagined",
    dataDeps: ["products"],
    actions: ["addToCart"],
};
function ProductGridBlock({ columns = 2, loadMore, products: productsProp, onProductPress, }) {
    const [expanded, setExpanded] = react_1.default.useState(false);
    const all = productsProp ?? (0, context_1.useScreenData)("products") ?? fixtures_1.fixtureProducts;
    const products = loadMore && !expanded ? all.slice(0, columns * 4) : all;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: products, numColumns: columns, scrollEnabled: false, columnWrapperStyle: columns > 1 ? { gap: 10 } : undefined, contentContainerStyle: { gap: 10 }, keyExtractor: (p) => p.id, renderItem: ({ item }) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { style: { flex: columns > 1 ? 1 : undefined }, children: (0, jsx_runtime_1.jsx)(ProductCard_1.ProductCardBlock, { product: item, onPress: onProductPress }) })) }, columns), loadMore && !expanded && all.length > products.length ? ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => setExpanded(true), className: "self-center rounded-ls-md border border-ls-ui-surface px-6 py-2.5", children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-sm font-medium text-ls-text-primary", children: ["Load more (", all.length - products.length, ")"] }) })) : null] }));
}
const fixtures = () => ({ products: fixtures_1.fixtureProducts });
exports.fixtures = fixtures;

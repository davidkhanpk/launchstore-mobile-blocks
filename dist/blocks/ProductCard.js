"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductCardBlock = ProductCardBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductCard",
    label: "Product Card",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: ["addToCart"],
};
function ProductCardBlock({ product, showAddButton = true, onPress }) {
    const commerce = (0, context_1.useCommerce)();
    if (!product)
        return null;
    const price = product.calculated_price;
    const image = product.images?.[0]?.url ?? product.thumbnail;
    const variant = product.variants?.[0];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessible: true, accessibilityLabel: product.title, onPress: () => onPress?.(product), className: "w-44 overflow-hidden rounded-ls-md bg-ls-ui-surface", children: [(0, jsx_runtime_1.jsx)(react_native_1.View, { className: "relative", children: (0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: image ? { uri: image } : { uri: "https://picsum.photos/seed/ls-card/400/400" }, style: { width: "100%", aspectRatio: 1 }, contentFit: "cover", transition: 100 }) }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-1 p-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 2, className: "text-sm font-semibold text-ls-text-primary", children: product.title }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center justify-between", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-bold text-ls-brand-primary", children: price ? (0, context_1.formatPrice)(price.calculated_amount, price.currency_code) : "" }), showAddButton && variant ? ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: `Add ${product.title} to cart`, onPress: (e) => {
                                    e.stopPropagation?.();
                                    void commerce.addToCart(variant.id, 1);
                                }, className: "rounded-ls-md bg-ls-btn-primary-bg px-3 py-1.5", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs font-semibold text-ls-btn-primary-fg", children: "Add" }) })) : null] })] })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

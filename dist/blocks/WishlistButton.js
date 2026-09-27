"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.WishlistButtonBlock = WishlistButtonBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "WishlistButton",
    label: "Wishlist Button",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: ["track"],
};
function WishlistButtonBlock({ label = "Save" }) {
    const product = (0, context_1.useScreenData)("product");
    const commerce = (0, context_1.useCommerce)();
    const [saved, setSaved] = (0, react_1.useState)(false);
    if (!product)
        return null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: label, onPress: () => {
            setSaved((v) => !v);
            commerce.track(saved ? "wishlist_removed" : "wishlist_added", { productId: product.id });
        }, className: `flex-row items-center gap-1.5 self-start rounded-ls-md border px-4 py-2 ${saved ? "border-ls-brand-primary bg-ls-brand-primary" : "border-ls-ui-surface bg-ls-ui-surface"}`, children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: saved ? "text-ls-text-inverse" : "text-ls-text-primary", children: saved ? "♥" : "♡" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: `text-sm font-medium ${saved ? "text-ls-text-inverse" : "text-ls-text-primary"}`, children: saved ? "Saved" : label })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

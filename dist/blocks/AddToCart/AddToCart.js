"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddToCart = void 0;
exports.AddToCartBlock = AddToCartBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const AddToCart_meta_1 = __importDefault(require("./AddToCart.meta"));
const context_1 = require("../../runtime/context");
/**
 * Canonical AddToCart on the NativeWind engine, consistent with block set A.
 * The dual spike variants remain exported for the 0.6 comparison screen;
 * the facade flips between engines in one line if the decision reverses.
 */
const BG = {
    primary: "bg-ls-btn-primary-bg",
    secondary: "bg-ls-btn-secondary-bg",
    danger: "bg-ls-btn-danger-bg",
};
const FG = {
    primary: "text-ls-btn-primary-fg",
    secondary: "text-ls-btn-secondary-fg",
    danger: "text-ls-btn-danger-fg",
};
function AddToCartBlock({ label = "Add to Cart", variant = "primary", fullWidth, }) {
    const product = (0, context_1.useScreenData)("product");
    const { selectedOptions, quantity } = (0, context_1.useProductInteraction)();
    const commerce = (0, context_1.useCommerce)();
    const [state, setState] = (0, react_1.useState)("idle");
    const matched = (0, context_1.matchVariant)(product, selectedOptions);
    async function handlePress() {
        if (!matched) {
            setState("error");
            return;
        }
        setState("busy");
        try {
            await commerce.addToCart(matched.id, quantity);
            commerce.track("add_to_cart", {
                productId: product?.id,
                variantId: matched.id,
                quantity,
            });
            setState("added");
            setTimeout(() => setState("idle"), 1500);
        }
        catch {
            setState("error");
        }
    }
    const text = state === "added" ? "Added ✓" : state === "error" ? "Select options" : label;
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: label, onPress: handlePress, disabled: state === "busy", className: `items-center justify-center rounded-ls-md px-5 py-3.5 active:opacity-80 ${BG[variant]} ${fullWidth ? "w-full" : "self-start"}`, children: state === "busy" ? ((0, jsx_runtime_1.jsx)(react_native_1.ActivityIndicator, {})) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: `text-base font-semibold ${FG[variant]}`, children: text })) }));
}
exports.AddToCart = {
    meta: AddToCart_meta_1.default,
    component: AddToCartBlock,
};

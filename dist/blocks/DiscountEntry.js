"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.DiscountEntryBlock = DiscountEntryBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "DiscountEntry",
    label: "Discount Code",
    category: "CART",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: ["applyDiscount"],
};
function DiscountEntryBlock() {
    const commerce = (0, context_1.useCommerce)();
    const [code, setCode] = (0, react_1.useState)("");
    const [state, setState] = (0, react_1.useState)("idle");
    async function apply() {
        if (!code.trim())
            return;
        setState("busy");
        try {
            await commerce.applyDiscount(code.trim());
            setState("done");
        }
        catch {
            setState("error");
        }
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-2", children: [(0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, { accessibilityLabel: "Discount code", value: code, onChangeText: setCode, placeholder: "Discount code", placeholderTextColor: "#9CA3AF", className: "flex-1 rounded-ls-md border border-ls-ui-border bg-ls-ui-background px-4 py-2.5 text-sm text-ls-text-primary" }), (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => void apply(), disabled: state === "busy", className: "items-center justify-center rounded-ls-md bg-ls-btn-primary-bg px-5", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-btn-primary-fg", children: state === "busy" ? "…" : "Apply" }) })] }), state === "done" ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-brand-primary", children: "Code applied \u2713" })) : state === "error" ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-btn-danger-fg", children: "Invalid code" })) : null] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

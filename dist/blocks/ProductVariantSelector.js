"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductVariantSelectorBlock = ProductVariantSelectorBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductVariantSelector",
    label: "Variant Selector",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
/** Option groups derived from variant options (variant-level, no extra fetch). */
function optionGroups(product) {
    const groups = new Map();
    for (const v of product.variants ?? []) {
        for (const o of v.options ?? []) {
            const title = o.option?.title ?? "Option";
            const list = groups.get(title) ?? [];
            if (!list.includes(o.value))
                list.push(o.value);
            groups.set(title, list);
        }
    }
    return [...groups.entries()];
}
function ProductVariantSelectorBlock({ style = "chips" }) {
    const product = (0, context_1.useScreenData)("product");
    const { selectedOptions, setSelectedOptions } = (0, context_1.useProductInteraction)();
    if (!product)
        return null;
    const groups = optionGroups(product);
    if (!groups.length)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "gap-3", children: groups.map(([title, values]) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-text-primary", children: title }), style === "chips" ? ((0, jsx_runtime_1.jsx)(react_native_1.ScrollView, { horizontal: true, showsHorizontalScrollIndicator: false, contentContainerStyle: { gap: 8 }, children: values.map((value) => {
                        const selected = selectedOptions[title] === value;
                        return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: `${title}: ${value}`, onPress: () => setSelectedOptions({ ...selectedOptions, [title]: value }), className: `rounded-ls-md border px-4 py-2 ${selected
                                ? "border-ls-brand-primary bg-ls-brand-primary"
                                : "border-ls-ui-surface bg-ls-ui-surface"}`, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: selected ? "text-sm font-medium text-ls-text-inverse" : "text-sm text-ls-text-primary", children: value }) }, value));
                    }) })) : ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "gap-2", children: values.map((value) => ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => setSelectedOptions({ ...selectedOptions, [title]: value }), className: `rounded-ls-md px-4 py-3 ${selectedOptions[title] === value ? "bg-ls-brand-primary" : "bg-ls-ui-surface"}`, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: selectedOptions[title] === value ? "text-ls-text-inverse" : "text-ls-text-primary", children: value }) }, value))) }))] }, title))) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

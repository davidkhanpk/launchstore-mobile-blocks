"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.FilterSortBarBlock = FilterSortBarBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "FilterSortBar",
    label: "Filter / Sort Bar",
    description: "Sort chip row + bottom-sheet with sort options (filters grow here with facets).",
    category: "LISTING",
    mobileBehavior: "reimagined",
    dataDeps: [],
    actions: [],
};
const SORTS = [
    { value: "recommended", label: "Recommended" },
    { value: "newest", label: "Newest" },
    { value: "price-asc", label: "Price: low to high" },
    { value: "price-desc", label: "Price: high to low" },
];
function FilterSortBarBlock() {
    const { sort, setSort } = (0, context_1.useListingInteraction)();
    const [open, setOpen] = (0, react_1.useState)(false);
    const active = SORTS.find((s) => s.value === sort);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: "Sort products", onPress: () => setOpen(true), className: "self-start rounded-ls-md border border-ls-ui-surface bg-ls-ui-surface px-4 py-2", children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-sm text-ls-text-primary", children: ["Sort: ", active?.label ?? "Recommended", " \u25BE"] }) }), (0, jsx_runtime_1.jsx)(react_native_1.Modal, { visible: open, animationType: "slide", transparent: true, onRequestClose: () => setOpen(false), children: (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { className: "flex-1 justify-end bg-black/40", onPress: () => setOpen(false), children: (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "rounded-t-ls-lg bg-ls-ui-background p-5 gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "mb-1 text-base font-bold text-ls-text-primary", children: "Sort by" }), SORTS.map((option) => ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => {
                                    setSort(option.value);
                                    setOpen(false);
                                }, className: `rounded-ls-md px-4 py-3 ${sort === option.value ? "bg-ls-brand-primary" : "bg-ls-ui-surface"}`, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: sort === option.value ? "text-ls-text-inverse" : "text-ls-text-primary", children: option.label }) }, option.value)))] }) }) })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

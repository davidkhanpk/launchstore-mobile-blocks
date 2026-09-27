"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductAccordionBlock = ProductAccordionBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductAccordion",
    label: "Product Accordion",
    description: "Collapsible detail sections — details / shipping / returns.",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: [],
};
const DEFAULT_SECTIONS = [
    { title: "Shipping", body: "Free shipping on orders over $75. Delivered in 3–5 business days." },
    { title: "Returns", body: "30-day returns, free of charge. Items must be unworn with tags attached." },
];
function ProductAccordionBlock({ sections }) {
    const product = (0, context_1.useScreenData)("product");
    const [open, setOpen] = (0, react_1.useState)(0);
    const items = sections ??
        [
            { title: "Details", body: product?.description ?? "" },
            ...DEFAULT_SECTIONS,
        ].filter((s) => s.body);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "gap-2", children: items.map((section, i) => {
            const isOpen = open === i;
            return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "overflow-hidden rounded-ls-md bg-ls-ui-surface", children: [(0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: section.title, onPress: () => setOpen(isOpen ? null : i), className: "flex-row items-center justify-between px-4 py-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-text-primary", children: section.title }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-text-primary opacity-50", children: isOpen ? "−" : "+" })] }), isOpen ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "px-4 pb-3 text-sm leading-5 text-ls-text-primary opacity-70", children: section.body })) : null] }, section.title));
        }) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.CategoryTitleBlock = CategoryTitleBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
exports.meta = {
    name: "CategoryTitle",
    label: "Category Title",
    category: "LISTING",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function CategoryTitleBlock({ title = "Category", count }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-1", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: "text-2xl font-bold text-ls-text-primary", children: title }), typeof count === "number" ? ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-sm text-ls-text-primary opacity-60", children: [count, " products"] })) : null] }));
}
const fixtures = () => ({ title: "Featured category" });
exports.fixtures = fixtures;

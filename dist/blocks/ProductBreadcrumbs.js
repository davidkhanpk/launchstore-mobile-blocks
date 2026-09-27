"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductBreadcrumbsBlock = ProductBreadcrumbsBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
exports.meta = {
    name: "ProductBreadcrumbs",
    label: "Breadcrumbs",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function ProductBreadcrumbsBlock({ items }) {
    const crumbs = typeof items === 'string'
        ? items.split(',').map((s) => s.trim()).filter(Boolean)
        : (items ?? ['Home', 'Shop']);
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { numberOfLines: 1, className: "text-xs text-ls-text-primary opacity-50", children: crumbs.join('  ›  ') }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

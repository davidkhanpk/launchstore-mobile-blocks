"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.TrustBadgesBlock = TrustBadgesBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
exports.meta = {
    name: "TrustBadges",
    label: "Trust Badges",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function TrustBadgesBlock({ items }) {
    const list = typeof items === "string"
        ? items.split(",").map((s) => s.trim()).filter(Boolean)
        : (items ?? ["Free shipping", "30-day returns", "Secure checkout"]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "flex-row flex-wrap justify-center gap-x-5 gap-y-2", children: list.map((item) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-1.5", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-brand-primary", children: "\u2713" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs font-medium text-ls-text-primary opacity-80", children: item })] }, item))) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

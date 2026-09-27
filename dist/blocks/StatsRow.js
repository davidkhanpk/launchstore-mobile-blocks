"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.StatsRowBlock = StatsRowBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
exports.meta = {
    name: "StatsRow",
    label: "Stats Row",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function StatsRowBlock({ stats }) {
    const pairs = (stats ?? "10k+|customers, 4.8★|avg rating, 24h|dispatch")
        .split(",")
        .map((pair) => pair.split("|").map((x) => x.trim()))
        .filter((pair) => pair.length === 2 && pair[0]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "flex-row justify-around rounded-ls-md bg-ls-ui-surface px-4 py-5", children: pairs.map(([value, label]) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "items-center gap-1", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xl font-bold text-ls-brand-primary", children: value }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-60", children: label })] }, label))) }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

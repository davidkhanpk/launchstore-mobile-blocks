"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.CountdownTimerBlock = CountdownTimerBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
exports.meta = {
    name: "CountdownTimer",
    label: "Countdown Timer",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function remaining(endsAt) {
    const diff = new Date(endsAt).getTime() - Date.now();
    if (Number.isNaN(diff) || diff <= 0)
        return null;
    const s = Math.floor(diff / 1000);
    return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}
function CountdownTimerBlock({ title = "Sale ends in", endsAt }) {
    const target = endsAt ?? new Date(Date.now() + 36 * 3600 * 1000).toISOString();
    const [left, setLeft] = (0, react_1.useState)(() => remaining(target));
    (0, react_1.useEffect)(() => {
        const t = setInterval(() => setLeft(remaining(target)), 1000);
        return () => clearInterval(t);
    }, [target]);
    const cells = left
        ? [
            { v: left.d, l: "days" },
            { v: left.h, l: "hrs" },
            { v: left.m, l: "min" },
            { v: left.s, l: "sec" },
        ]
        : null;
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "items-center gap-3 rounded-ls-md bg-ls-brand-primary px-4 py-5", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold uppercase tracking-wide text-ls-text-inverse", children: title }), cells ? ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "flex-row gap-2", children: cells.map((cell) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "w-14 items-center rounded-ls-md bg-white/15 px-2 py-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xl font-bold text-white", children: String(cell.v).padStart(2, "0") }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-[10px] uppercase text-white opacity-70", children: cell.l })] }, cell.l))) })) : ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base font-bold text-white", children: "Finished" }))] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

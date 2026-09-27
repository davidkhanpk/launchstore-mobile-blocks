"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutFixtures = exports.dividerMeta = exports.spacerMeta = exports.sectionBandMeta = void 0;
exports.SectionBandBlock = SectionBandBlock;
exports.SpacerBlock = SpacerBlock;
exports.DividerBlock = DividerBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
/**
 * LAYOUT-M — the canvas composition basics (doc 10's layout category).
 * SectionBand is the flat-list stand-in for the web Section wrapper: a
 * full-width colored band with an optional heading, styled by scheme tokens.
 */
exports.sectionBandMeta = {
    name: "SectionBand",
    label: "Section Band",
    description: "Full-width colored band with optional heading — visual section break.",
    category: "LAYOUT-M",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function SectionBandBlock({ heading, scheme = "surface", }) {
    const bg = scheme === "accent" ? "bg-ls-brand-primary" : scheme === "background" ? "bg-ls-ui-background" : "bg-ls-ui-surface";
    const fg = scheme === "accent" ? "text-ls-text-inverse" : "text-ls-text-primary";
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: `w-full rounded-ls-md ${bg} px-4 py-5`, children: heading ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: `text-base font-bold ${fg}`, children: heading })) : null }));
}
exports.spacerMeta = {
    name: "Spacer",
    label: "Spacer",
    category: "LAYOUT-M",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function SpacerBlock({ height = 24 }) {
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { style: { height } });
}
exports.dividerMeta = {
    name: "Divider",
    label: "Divider",
    category: "LAYOUT-M",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function DividerBlock() {
    return (0, jsx_runtime_1.jsx)(react_native_1.View, { className: "h-px w-full bg-ls-ui-border" });
}
const layoutFixtures = () => ({});
exports.layoutFixtures = layoutFixtures;

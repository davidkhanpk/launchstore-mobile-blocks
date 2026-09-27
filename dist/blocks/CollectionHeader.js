"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.CollectionHeaderBlock = CollectionHeaderBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_native_1 = require("react-native");
exports.meta = {
    name: "CollectionHeader",
    label: "Collection Header",
    description: "Banner image with title and optional count.",
    category: "LISTING",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function CollectionHeaderBlock({ title = "Collection", imageUrl, count }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-3", children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUrl ?? "https://picsum.photos/seed/ls-collection/1200/500" }, style: { width: "100%", aspectRatio: 2.4 }, contentFit: "cover", className: "rounded-ls-md" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-0.5", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: "text-2xl font-bold text-ls-text-primary", children: title }), typeof count === "number" ? ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-sm text-ls-text-primary opacity-60", children: [count, " products"] })) : null] })] }));
}
const fixtures = () => ({ title: "Summer collection" });
exports.fixtures = fixtures;

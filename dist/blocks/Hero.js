"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.HeroBlock = HeroBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_native_1 = require("react-native");
exports.meta = {
    name: "Hero",
    label: "Hero",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function HeroBlock({ heading, subheading, ctaLabel, imageUrl, onCta }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "w-full overflow-hidden rounded-ls-lg", children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUrl ?? "https://picsum.photos/seed/ls-hero/1200/800" }, style: { width: "100%", aspectRatio: 1.6 }, contentFit: "cover" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-2 p-5", children: [heading ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: "text-2xl font-bold text-ls-text-primary", children: heading })) : null, subheading ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm text-ls-text-primary opacity-70", children: subheading })) : null, ctaLabel ? ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: onCta, className: "mt-1 self-start rounded-ls-md bg-ls-btn-primary-bg px-6 py-3", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-btn-primary-fg", children: ctaLabel }) })) : null] })] }));
}
const fixtures = () => ({
    heading: "New season, new kicks",
    subheading: "Editor's picks from the collection",
    ctaLabel: "Shop now",
});
exports.fixtures = fixtures;

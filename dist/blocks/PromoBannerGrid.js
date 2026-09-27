"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.PromoBannerGridBlock = PromoBannerGridBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_native_1 = require("react-native");
exports.meta = {
    name: "PromoBannerGrid",
    label: "Promo Banner Grid",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function PromoCard({ title, cta, imageUrl, tall, }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: title, className: "flex-1 overflow-hidden rounded-ls-md", children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUrl ?? `https://picsum.photos/seed/ls-promo-${title}/600/${tall ? 800 : 500}` }, style: { width: "100%", aspectRatio: tall ? 0.75 : 1.2 }, contentFit: "cover" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "absolute inset-0 justify-end bg-black/30 p-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base font-bold text-white", children: title }), cta ? (0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "mt-0.5 text-xs text-white opacity-90", children: [cta, " \u2192"] }) : null] })] }));
}
function PromoBannerGridBlock({ primaryTitle = "New season", primaryCta = "Explore", primaryImageUrl, secondaryTitle = "Clearance", secondaryCta = "Up to 50% off", secondaryImageUrl, }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row gap-3", children: [(0, jsx_runtime_1.jsx)(PromoCard, { title: primaryTitle, cta: primaryCta, imageUrl: primaryImageUrl, tall: true }), (0, jsx_runtime_1.jsx)(PromoCard, { title: secondaryTitle, cta: secondaryCta, imageUrl: secondaryImageUrl })] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

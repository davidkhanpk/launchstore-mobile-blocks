"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.BannerCarouselBlock = BannerCarouselBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
exports.meta = {
    name: "BannerCarousel",
    label: "Banner Carousel",
    description: "Auto-advancing promo slides — the native descendant of the web ContentSlider.",
    category: "HOMEPAGE",
    mobileBehavior: "reimagined",
    dataDeps: [],
    actions: [],
};
const DEFAULT_SLIDES = [
    { imageUrl: "https://picsum.photos/seed/ls-banner1/1200/700", heading: "Season sale", subheading: "Up to 40% off", ctaLabel: "Shop sale" },
    { imageUrl: "https://picsum.photos/seed/ls-banner2/1200/700", heading: "New arrivals", subheading: "Fresh this week", ctaLabel: "See what's new" },
];
function BannerCarouselBlock({ slides, autoAdvanceSeconds = 5 }) {
    const items = slides?.length ? slides : DEFAULT_SLIDES;
    const [index, setIndex] = (0, react_1.useState)(0);
    const listRef = (0, react_1.useRef)(null);
    react_1.default.useEffect(() => {
        if (!autoAdvanceSeconds || items.length < 2)
            return;
        const timer = setInterval(() => {
            const next = (index + 1) % items.length;
            listRef.current?.scrollToIndex({ index: next, animated: true });
            setIndex(next);
        }, autoAdvanceSeconds * 1000);
        return () => clearInterval(timer);
    }, [index, items.length, autoAdvanceSeconds]);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.FlatList, { ref: listRef, data: items, horizontal: true, pagingEnabled: true, showsHorizontalScrollIndicator: false, keyExtractor: (_, i) => String(i), onMomentumScrollEnd: (e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width || 1))), renderItem: ({ item }) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "w-full overflow-hidden rounded-ls-lg", children: [(0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: item.imageUrl ?? "https://picsum.photos/seed/ls-banner/1200/700" }, style: { width: "100%", aspectRatio: 1.7 }, contentFit: "cover" }), (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "absolute inset-0 justify-end bg-black/35 p-5", children: [item.heading ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: "text-2xl font-bold text-white", children: item.heading })) : null, item.subheading ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "mt-1 text-sm text-white opacity-90", children: item.subheading })) : null, item.ctaLabel ? ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", className: "mt-3 self-start rounded-ls-md bg-white px-5 py-2", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-gray-900", children: item.ctaLabel }) })) : null] })] })) }), items.length > 1 ? ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "mt-2 flex-row justify-center gap-1.5", children: items.map((_, i) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: `h-1.5 w-1.5 rounded-full ${i === index ? "bg-ls-brand-primary" : "bg-ls-ui-border"}` }, i))) })) : null] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

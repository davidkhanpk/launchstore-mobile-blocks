"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.ProductGalleryBlock = ProductGalleryBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "ProductGallery",
    label: "Product Gallery",
    description: "Swipeable image pager — the native descendant of the web Swiper galleries (doc 10 §3).",
    category: "PRODUCT",
    mobileBehavior: "reimagined",
    dataDeps: ["product"],
    actions: [],
};
function ProductGalleryBlock({ variant = "pager", aspectRatio = 1, }) {
    const product = (0, context_1.useScreenData)("product");
    const [index, setIndex] = (0, react_1.useState)(0);
    const images = product?.images?.length ? product.images : product?.thumbnail ? [{ url: product.thumbnail }] : [];
    if (!images.length) {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "w-full items-center justify-center rounded-ls-md bg-ls-ui-surface", style: { aspectRatio }, children: (0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: "https://picsum.photos/seed/ls-empty/600/600" }, style: { width: "100%", height: "100%" } }) }));
    }
    if (variant === "grid") {
        return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "flex-row flex-wrap gap-2", children: images.map((img) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "w-[49%] overflow-hidden rounded-ls-md", children: (0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: img.url }, style: { width: "100%", aspectRatio } }) }, img.url))) }));
    }
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: images, horizontal: true, pagingEnabled: true, showsHorizontalScrollIndicator: false, onMomentumScrollEnd: (e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width || 1))), keyExtractor: (item) => item.url, renderItem: ({ item }) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "w-full overflow-hidden rounded-ls-md", children: (0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: item.url }, style: { width: "100%", aspectRatio }, contentFit: "cover", transition: 120 }) })) }), images.length > 1 ? ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "mt-2 flex-row justify-center gap-1.5", children: images.map((img, i) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: `h-1.5 w-1.5 rounded-full ${i === index ? "bg-ls-brand-primary" : "bg-ls-ui-surface"}` }, img.url))) })) : null] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

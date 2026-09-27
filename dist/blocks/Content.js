"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentFixtures = exports.buttonMeta = exports.imageMeta = exports.textMeta = exports.headingMeta = void 0;
exports.HeadingBlock = HeadingBlock;
exports.TextBlock = TextBlock;
exports.ImageBlock = ImageBlock;
exports.ButtonBlock = ButtonBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_native_1 = require("react-native");
/**
 * Generic content blocks — the mobile CONTENT category toolkit shared by
 * content/legal pages and as building material inside other screens.
 */
exports.headingMeta = {
    name: "Heading",
    label: "Heading",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function HeadingBlock({ text = "Heading", level = "lg" }) {
    const cls = level === "lg"
        ? "text-2xl font-bold text-ls-text-primary"
        : level === "md"
            ? "text-lg font-semibold text-ls-text-primary"
            : "text-base font-semibold text-ls-text-primary";
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { accessibilityRole: "header", className: cls, children: text }));
}
exports.textMeta = {
    name: "TextBlock",
    label: "Text",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function TextBlock({ text = "Paragraph text." }) {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm leading-6 text-ls-text-primary opacity-80", children: text }));
}
exports.imageMeta = {
    name: "ImageBlock",
    label: "Image",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function ImageBlock({ imageUrl, aspectRatio = 1.6, }) {
    return ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUrl ?? "https://picsum.photos/seed/ls-content/1000/600" }, style: { width: "100%", aspectRatio }, contentFit: "cover", className: "rounded-ls-md" }));
}
exports.buttonMeta = {
    name: "ButtonBlock",
    label: "Button",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function ButtonBlock({ label = "Tap me", onPress, }) {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: onPress, className: "self-start rounded-ls-md bg-ls-btn-primary-bg px-6 py-3", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-btn-primary-fg", children: label }) }));
}
const contentFixtures = () => ({});
exports.contentFixtures = contentFixtures;

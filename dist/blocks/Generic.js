"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericFixtures = exports.shareMeta = exports.searchEntryMeta = exports.avatarMeta = exports.listMeta = exports.cardMeta = exports.badgeMeta = exports.alertMeta = exports.accordionMeta = exports.linkMeta = void 0;
exports.LinkBlock = LinkBlock;
exports.AccordionBlock = AccordionBlock;
exports.AlertBlock = AlertBlock;
exports.BadgeBlock = BadgeBlock;
exports.CardBlock = CardBlock;
exports.ListBlock = ListBlock;
exports.AvatarBlock = AvatarBlock;
exports.SearchEntryBlock = SearchEntryBlock;
exports.ShareButtonBlock = ShareButtonBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const expo_image_1 = require("expo-image");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
/**
 * Generic set C — web-parity utilities (Link, Accordion, Alert, Badge, Card,
 * List, Avatar) plus mobile-native idioms (SearchEntry, ShareButton).
 * All CONTENT category: available on every screen type.
 */
// ── Link ────────────────────────────────────────────────────────────────────
exports.linkMeta = {
    name: "Link",
    label: "Link",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function LinkBlock({ text = "Learn more", url, }) {
    const nav = (0, context_1.useNavigation)();
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "link", onPress: () => url && nav.go(url), children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-medium text-ls-brand-primary underline", children: text }) }));
}
// ── Accordion (generic) ─────────────────────────────────────────────────────
exports.accordionMeta = {
    name: "Accordion",
    label: "Accordion",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function AccordionBlock({ title = "Section", body = "Collapsible content.", }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "overflow-hidden rounded-ls-md bg-ls-ui-surface", children: [(0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => setOpen(!open), className: "flex-row items-center justify-between px-4 py-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-text-primary", children: title }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-text-primary opacity-50", children: open ? "−" : "+" })] }), open ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "px-4 pb-3 text-sm leading-5 text-ls-text-primary opacity-70", children: body })) : null] }));
}
// ── Alert ───────────────────────────────────────────────────────────────────
exports.alertMeta = {
    name: "Alert",
    label: "Alert",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function AlertBlock({ tone = "info", message = "Free shipping on orders over $75.", }) {
    const icon = { info: "ℹ️", success: "✅", warning: "⚠️", error: "⛔" }[tone];
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-2.5 rounded-ls-md bg-ls-ui-surface px-4 py-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base", children: icon }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "flex-1 text-sm text-ls-text-primary", children: message })] }));
}
// ── Badge ───────────────────────────────────────────────────────────────────
exports.badgeMeta = {
    name: "Badge",
    label: "Badge",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function BadgeBlock({ text = "New", tone = "brand", }) {
    const toneCls = {
        brand: "bg-ls-brand-primary text-ls-text-inverse",
        success: "bg-ls-btn-primary-bg text-ls-btn-primary-fg",
        danger: "bg-ls-btn-danger-bg text-ls-btn-danger-fg",
        neutral: "bg-ls-ui-surface text-ls-text-primary",
    }[tone];
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: `self-start rounded-full px-3 py-1 ${toneCls}`, children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs font-semibold", children: text }) }));
}
// ── Card (flat: image + title + body + optional CTA) ───────────────────────
exports.cardMeta = {
    name: "Card",
    label: "Card",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function CardBlock({ imageUrl, title = "Card title", body, ctaLabel, }) {
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "overflow-hidden rounded-ls-md bg-ls-ui-surface", children: [imageUrl ? ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUrl }, style: { width: "100%", aspectRatio: 1.8 }, contentFit: "cover" })) : null, (0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-1.5 p-4", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base font-bold text-ls-text-primary", children: title }), body ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm leading-5 text-ls-text-primary opacity-70", children: body })) : null, ctaLabel ? ((0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "mt-1 text-sm font-semibold text-ls-brand-primary", children: [ctaLabel, " \u2192"] })) : null] })] }));
}
// ── List ────────────────────────────────────────────────────────────────────
exports.listMeta = {
    name: "List",
    label: "List",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function ListBlock({ items }) {
    const rows = typeof items === "string"
        ? items.split(",").map((s) => s.trim()).filter(Boolean)
        : (items ?? ["Fast shipping", "Easy returns", "Secure payments"]);
    return ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "gap-2.5", children: rows.map((row) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-brand-primary", children: "\u2022" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "flex-1 text-sm text-ls-text-primary", children: row })] }, row))) }));
}
// ── Avatar ──────────────────────────────────────────────────────────────────
exports.avatarMeta = {
    name: "Avatar",
    label: "Avatar",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function AvatarBlock({ imageUrl, name = "Store Team", subtitle, }) {
    const initials = name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row items-center gap-3", children: [imageUrl ? ((0, jsx_runtime_1.jsx)(expo_image_1.Image, { source: { uri: imageUrl }, style: { width: 44, height: 44, borderRadius: 22 } })) : ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "h-11 w-11 items-center justify-center rounded-full bg-ls-brand-primary", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-bold text-ls-text-inverse", children: initials }) })), (0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-text-primary", children: name }), subtitle ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-xs text-ls-text-primary opacity-60", children: subtitle })) : null] })] }));
}
// ── SearchEntry (mobile-native) ────────────────────────────────────────────
exports.searchEntryMeta = {
    name: "SearchEntry",
    label: "Search Entry",
    description: "Tap-to-search bar — the universal mobile commerce idiom.",
    category: "CONTENT",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: [],
};
function SearchEntryBlock({ placeholder = "Search products…" }) {
    const nav = (0, context_1.useNavigation)();
    return ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessibilityRole: "search", accessibilityLabel: "Search", onPress: () => nav.go("/search"), className: "flex-row items-center gap-2 rounded-ls-md border border-ls-ui-border bg-ls-ui-surface px-4 py-3", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-ls-text-primary opacity-40", children: "\uD83D\uDD0D" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "flex-1 text-sm text-ls-text-primary opacity-50", children: placeholder })] }));
}
// ── ShareButton (mobile-native — native share sheet) ───────────────────────
exports.shareMeta = {
    name: "ShareButton",
    label: "Share Button",
    description: "Opens the OS share sheet — mobile-only idiom.",
    category: "CONTENT",
    mobileBehavior: "reimagined",
    dataDeps: [],
    actions: [],
};
function ShareButtonBlock({ label = "Share", message = "Check this out!", }) {
    return ((0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => void react_native_1.Share.share({ message }).catch(() => { }), className: "self-start rounded-ls-md border border-ls-ui-border bg-ls-ui-surface px-5 py-2.5", children: (0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-sm font-medium text-ls-text-primary", children: ["\u2197 ", label] }) }));
}
const genericFixtures = () => ({});
exports.genericFixtures = genericFixtures;

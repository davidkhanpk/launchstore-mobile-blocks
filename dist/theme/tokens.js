"use strict";
/**
 * The mobile-side mirror of the platform `Theme` entity's token payload
 * (themes.globalSettings.colors.tokens + typography + layout — see
 * src/store/store.service.ts getDefaultThemeData). This is the shape the
 * mobile-config bundle delivers (doc 3 §2); nothing here may know about
 * Restyle, NativeWind, or any theming engine — engines adapt to it.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SAMPLE_THEME_TOKENS = void 0;
exports.resolveThemeTokens = resolveThemeTokens;
/**
 * Resolve dotted references ("brand.primary") to literal values — the mobile
 * counterpart of the platform's ThemeTokenService.resolveToken. Cycles bail
 * out with the raw value.
 */
function resolveThemeTokens(raw) {
    const flat = new Map();
    const walk = (prefix, node) => {
        if (node && typeof node === "object") {
            for (const [k, v] of Object.entries(node)) {
                walk(`${prefix}.${k}`, v);
            }
        }
        else if (typeof node === "string") {
            flat.set(prefix, node);
        }
    };
    walk("colors", raw.colors);
    const resolve = (value, depth = 0) => {
        if (!value.includes(".") || depth > 4)
            return value;
        const hit = flat.get(value.startsWith("colors.") ? value : `colors.${value}`);
        return hit !== undefined && hit !== value ? resolve(hit, depth + 1) : value;
    };
    const transform = (node) => node && typeof node === "object"
        ? Object.fromEntries(Object.entries(node).map(([k, v]) => [k, transform(v)]))
        : typeof node === "string"
            ? resolve(node)
            : node;
    return { ...raw, colors: transform(raw.colors) };
}
/** Fixture tokens for the spike / editor fixtures — shape-identical to a real bundle. */
exports.SAMPLE_THEME_TOKENS = {
    colors: {
        brand: { primary: "#4F46E5", secondary: "#7C3AED", accent: "#EC4899" },
        text: { primary: "#111827", secondary: "#4B5563", muted: "#9CA3AF", inverse: "#FFFFFF" },
        ui: { background: "#FFFFFF", surface: "#F9FAFB", border: "#E5E7EB", borderHover: "#D1D5DB" },
        status: { success: "#059669", error: "#DC2626", warning: "#D97706", info: "#2563EB" },
        button: {
            primary: { background: "brand.primary", text: "text.inverse" },
            secondary: { background: "ui.surface", text: "text.primary" },
            danger: { background: "status.error", text: "text.inverse" },
        },
        card: { background: "ui.surface", border: "ui.border" },
        badge: {
            sale: { background: "status.error", text: "text.inverse" },
            new: { background: "brand.secondary", text: "text.inverse" },
        },
        scheme: {
            light: { background: "ui.background", text: "text.primary" },
            accent: { background: "brand.primary", text: "text.inverse" },
        },
    },
    typography: {
        fontFamily: { heading: "Inter-SemiBold", body: "Inter-Regular" },
        fontSize: { xs: "12", sm: "14", md: "16", lg: "18", xl: "20" },
        fontWeight: { normal: "400", medium: "500", semibold: "600", bold: "700" },
    },
    layout: {
        borderRadius: { sm: "6", md: "12", lg: "18", full: "9999" },
        spacing: { xs: "4", sm: "8", md: "16", lg: "24", xl: "32" },
    },
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPrice = formatPrice;
exports.ScreenDataProvider = ScreenDataProvider;
exports.useScreenData = useScreenData;
exports.CommerceProviderOverride = CommerceProviderOverride;
exports.useCommerce = useCommerce;
exports.ProductInteractionProvider = ProductInteractionProvider;
exports.useProductInteraction = useProductInteraction;
exports.ListingInteractionProvider = ListingInteractionProvider;
exports.useListingInteraction = useListingInteraction;
exports.NavigationProviderOverride = NavigationProviderOverride;
exports.useNavigation = useNavigation;
exports.matchVariant = matchVariant;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function formatPrice(amount, currency) {
    if (amount == null)
        return "";
    try {
        return new Intl.NumberFormat(undefined, {
            style: "currency",
            currency: currency ?? "usd",
        }).format(amount / 100);
    }
    catch {
        return `${(amount / 100).toFixed(2)} ${currency ?? ""}`.trim();
    }
}
// ── Screen data channel ─────────────────────────────────────────────────────
const ScreenDataContext = (0, react_1.createContext)({});
function ScreenDataProvider({ value, children, }) {
    return (0, jsx_runtime_1.jsx)(ScreenDataContext.Provider, { value: value, children: children });
}
function useScreenData(key) {
    return (0, react_1.useContext)(ScreenDataContext)[key];
}
const InertCommerce = {
    async addToCart() {
        /* canvas: no orders from the editor */
    },
    async updateCartLine() { },
    async removeCartLine() { },
    async applyDiscount() { },
    track() {
        /* canvas: no telemetry from the editor */
    },
    live: false,
};
const CommerceContext = (0, react_1.createContext)(InertCommerce);
function CommerceProviderOverride({ value, children, }) {
    return (0, jsx_runtime_1.jsx)(CommerceContext.Provider, { value: value, children: children });
}
function useCommerce() {
    return (0, react_1.useContext)(CommerceContext);
}
const ProductInteractionContext = (0, react_1.createContext)(null);
function ProductInteractionProvider({ children }) {
    const [selectedOptions, setSelectedOptions] = (0, react_1.useState)({});
    const [quantity, setQuantity] = (0, react_1.useState)(1);
    return ((0, jsx_runtime_1.jsx)(ProductInteractionContext.Provider, { value: { selectedOptions, setSelectedOptions, quantity, setQuantity }, children: children }));
}
function useProductInteraction() {
    const ctx = (0, react_1.useContext)(ProductInteractionContext);
    return (ctx ?? {
        selectedOptions: {},
        setSelectedOptions: () => { },
        quantity: 1,
        setQuantity: () => { },
    });
}
const ListingInteractionContext = (0, react_1.createContext)(null);
function ListingInteractionProvider({ children }) {
    const [sort, setSort] = (0, react_1.useState)('recommended');
    return ((0, jsx_runtime_1.jsx)(ListingInteractionContext.Provider, { value: { sort, setSort }, children: children }));
}
function useListingInteraction() {
    const ctx = (0, react_1.useContext)(ListingInteractionContext);
    return ctx ?? { sort: 'recommended', setSort: () => { } };
}
const InertNavigation = {
    go() {
        /* canvas: no navigation from the editor */
    },
    live: false,
};
const NavigationContext = (0, react_1.createContext)(InertNavigation);
function NavigationProviderOverride({ value, children, }) {
    return (0, jsx_runtime_1.jsx)(NavigationContext.Provider, { value: value, children: children });
}
function useNavigation() {
    return (0, react_1.useContext)(NavigationContext);
}
/** Resolve the variant matching the current selection (example PDP semantics). */
function matchVariant(product, selectedOptions) {
    if (!product?.variants?.length)
        return undefined;
    return (product.variants.find((v) => (v.options ?? []).every((o) => !selectedOptions[o.option?.title ?? ""] || selectedOptions[o.option?.title ?? ""] === o.value)) ?? product.variants[0]);
}

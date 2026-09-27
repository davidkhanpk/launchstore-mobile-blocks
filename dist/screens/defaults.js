"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_SCREENS = void 0;
/**
 * Built-in fallback screen layouts — what the app renders before a merchant
 * designs anything (config bundle screens take precedence; these are the
 * last-resort rung of the fallback chain: bundle → cache → defaults).
 * Task 3.4's derivation service replaces these with per-store derived
 * layouts once the merchant enables mobile.
 */
exports.DEFAULT_SCREENS = {
    home: {
        templateType: "MOBILE_HOME",
        version: 1,
        blocks: [
            { type: "BannerCarousel", props: {} },
            { type: "CategoriesGrid", props: {} },
            { type: "ProductRail", props: { title: "Featured" } },
            { type: "PromoBannerGrid", props: {} },
            { type: "TrustBadges", props: {} },
        ],
    },
    product: {
        templateType: "MOBILE_PRODUCT",
        version: 1,
        // AddToCart lives in the sticky footer (BlockScreen stickyCta), not in
        // the scroll — the native PDP pattern (doc 10 §2.2). Related rail
        // returns when the data layer serves real related products.
        blocks: [
            { type: "ProductGallery", props: { variant: "pager" } },
            { type: "ProductTitle", props: {} },
            { type: "ProductPrice", props: {} },
            { type: "ProductVariantSelector", props: { style: "chips" } },
            { type: "StockIndicator", props: {} },
            { type: "QuantitySelector", props: {} },
            { type: "ProductDescription", props: {} },
            { type: "ProductAccordion", props: {} },
        ],
    },
    cart: {
        templateType: 'MOBILE_CART_PAGE',
        version: 1,
        blocks: [
            { type: 'CartItems', props: {} },
            { type: 'DiscountEntry', props: {} },
            { type: 'CartSummary', props: {} },
            { type: 'AddToCart', props: { label: 'Checkout', fullWidth: true } },
        ],
    },
    checkout: {
        templateType: 'MOBILE_CHECKOUT_PAGE',
        version: 1,
        blocks: [
            { type: 'AddToCart', props: { label: 'Place order', fullWidth: true } },
        ],
    },
    content: {
        templateType: 'MOBILE_CONTENT',
        version: 1,
        blocks: [
            { type: 'Heading', props: { text: 'Page title', level: 'lg' } },
            { type: 'TextBlock', props: { text: 'Content goes here.' } },
        ],
    },
    account: {
        templateType: 'MOBILE_ACCOUNT_PAGE',
        version: 1,
        blocks: [
            { type: 'Avatar', props: { name: 'Your Account' } },
            { type: 'Heading', props: { text: 'Orders', level: 'md' } },
        ],
    },
    orderConfirmation: {
        templateType: 'MOBILE_ORDER_CONFIRMATION_PAGE',
        version: 1,
        blocks: [
            { type: 'Heading', props: { text: 'Order confirmed 🎉', level: 'lg' } },
            { type: 'ProductRail', props: { title: 'You may also like' } },
        ],
    },
    listing: {
        templateType: "MOBILE_LISTING",
        version: 1,
        blocks: [{ type: "ProductRail", props: {} }],
    },
};

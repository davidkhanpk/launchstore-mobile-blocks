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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartSummaryBlock = exports.cartItemsMeta = exports.CartItemsBlock = exports.emptyStateMeta = exports.EmptyStateBlock = exports.collectionHeaderMeta = exports.CollectionHeaderBlock = exports.categoryTitleMeta = exports.CategoryTitleBlock = exports.filterSortBarMeta = exports.FilterSortBarBlock = exports.productGridMeta = exports.ProductGridBlock = exports.productBreadcrumbsMeta = exports.ProductBreadcrumbsBlock = exports.wishlistButtonMeta = exports.WishlistButtonBlock = exports.productRatingMeta = exports.ProductRatingBlock = exports.productMetadataMeta = exports.ProductMetadataBlock = exports.productAccordionMeta = exports.ProductAccordionBlock = exports.productDescriptionMeta = exports.ProductDescriptionBlock = exports.fixtureProducts = exports.fixtureProduct = exports.AddToCartFixtures = exports.AddToCartGluestack = exports.AddToCartRestyle = exports.AddToCartBlock = exports.AddToCart = exports.productRailMeta = exports.ProductRailBlock = exports.heroMeta = exports.HeroBlock = exports.productCardMeta = exports.ProductCardBlock = exports.stockIndicatorMeta = exports.StockIndicatorBlock = exports.quantitySelectorMeta = exports.QuantitySelectorBlock = exports.productVariantSelectorMeta = exports.ProductVariantSelectorBlock = exports.productGalleryMeta = exports.ProductGalleryBlock = exports.productPriceMeta = exports.ProductPriceBlock = exports.productTitleMeta = exports.ProductTitleBlock = void 0;
exports.listMeta = exports.ListBlock = exports.cardMeta = exports.CardBlock = exports.badgeMeta = exports.BadgeBlock = exports.alertMeta = exports.AlertBlock = exports.accordionMeta = exports.AccordionBlock = exports.linkMeta = exports.LinkBlock = exports.fixtureTestimonials = exports.fixtureCategories = exports.statsRowMeta = exports.StatsRowBlock = exports.newsletterBlockMeta = exports.NewsletterBlockBlock = exports.promoBannerGridMeta = exports.PromoBannerGridBlock = exports.testimonialSliderMeta = exports.TestimonialSliderBlock = exports.trustBadgesMeta = exports.TrustBadgesBlock = exports.countdownTimerMeta = exports.CountdownTimerBlock = exports.categoriesGridMeta = exports.CategoriesGridBlock = exports.bannerCarouselMeta = exports.BannerCarouselBlock = exports.dividerMeta = exports.DividerBlock = exports.spacerMeta = exports.SpacerBlock = exports.sectionBandMeta = exports.SectionBandBlock = exports.fixtureCart = exports.buttonMeta = exports.ButtonBlock = exports.imageMeta = exports.ImageBlock = exports.textMeta = exports.TextBlock = exports.headingMeta = exports.HeadingBlock = exports.emptyCartMeta = exports.EmptyCartBlock = exports.discountEntryMeta = exports.DiscountEntryBlock = exports.cartSummaryMeta = void 0;
exports.REGISTRY = exports.themeVars = exports.buildRestyleTheme = exports.shareMeta = exports.ShareButtonBlock = exports.searchEntryMeta = exports.SearchEntryBlock = exports.avatarMeta = exports.AvatarBlock = void 0;
__exportStar(require("./types"), exports);
__exportStar(require("./registry"), exports);
__exportStar(require("./runtime/context"), exports);
__exportStar(require("./screens/defaults"), exports);
// Block set A (doc 8 task 2.3) — single-file blocks with co-located meta/fixtures.
var ProductTitle_1 = require("./blocks/ProductTitle");
Object.defineProperty(exports, "ProductTitleBlock", { enumerable: true, get: function () { return ProductTitle_1.ProductTitleBlock; } });
Object.defineProperty(exports, "productTitleMeta", { enumerable: true, get: function () { return ProductTitle_1.meta; } });
var ProductPrice_1 = require("./blocks/ProductPrice");
Object.defineProperty(exports, "ProductPriceBlock", { enumerable: true, get: function () { return ProductPrice_1.ProductPriceBlock; } });
Object.defineProperty(exports, "productPriceMeta", { enumerable: true, get: function () { return ProductPrice_1.meta; } });
var ProductGallery_1 = require("./blocks/ProductGallery");
Object.defineProperty(exports, "ProductGalleryBlock", { enumerable: true, get: function () { return ProductGallery_1.ProductGalleryBlock; } });
Object.defineProperty(exports, "productGalleryMeta", { enumerable: true, get: function () { return ProductGallery_1.meta; } });
var ProductVariantSelector_1 = require("./blocks/ProductVariantSelector");
Object.defineProperty(exports, "ProductVariantSelectorBlock", { enumerable: true, get: function () { return ProductVariantSelector_1.ProductVariantSelectorBlock; } });
Object.defineProperty(exports, "productVariantSelectorMeta", { enumerable: true, get: function () { return ProductVariantSelector_1.meta; } });
var QuantitySelector_1 = require("./blocks/QuantitySelector");
Object.defineProperty(exports, "QuantitySelectorBlock", { enumerable: true, get: function () { return QuantitySelector_1.QuantitySelectorBlock; } });
Object.defineProperty(exports, "quantitySelectorMeta", { enumerable: true, get: function () { return QuantitySelector_1.meta; } });
var StockIndicator_1 = require("./blocks/StockIndicator");
Object.defineProperty(exports, "StockIndicatorBlock", { enumerable: true, get: function () { return StockIndicator_1.StockIndicatorBlock; } });
Object.defineProperty(exports, "stockIndicatorMeta", { enumerable: true, get: function () { return StockIndicator_1.meta; } });
var ProductCard_1 = require("./blocks/ProductCard");
Object.defineProperty(exports, "ProductCardBlock", { enumerable: true, get: function () { return ProductCard_1.ProductCardBlock; } });
Object.defineProperty(exports, "productCardMeta", { enumerable: true, get: function () { return ProductCard_1.meta; } });
var Hero_1 = require("./blocks/Hero");
Object.defineProperty(exports, "HeroBlock", { enumerable: true, get: function () { return Hero_1.HeroBlock; } });
Object.defineProperty(exports, "heroMeta", { enumerable: true, get: function () { return Hero_1.meta; } });
var ProductRail_1 = require("./blocks/ProductRail");
Object.defineProperty(exports, "ProductRailBlock", { enumerable: true, get: function () { return ProductRail_1.ProductRailBlock; } });
Object.defineProperty(exports, "productRailMeta", { enumerable: true, get: function () { return ProductRail_1.meta; } });
// Flagship block + spike variants (0.6 comparison screen).
var AddToCart_1 = require("./blocks/AddToCart/AddToCart");
Object.defineProperty(exports, "AddToCart", { enumerable: true, get: function () { return AddToCart_1.AddToCart; } });
Object.defineProperty(exports, "AddToCartBlock", { enumerable: true, get: function () { return AddToCart_1.AddToCartBlock; } });
var AddToCart_restyle_1 = require("./blocks/AddToCart/variants/AddToCart.restyle");
Object.defineProperty(exports, "AddToCartRestyle", { enumerable: true, get: function () { return AddToCart_restyle_1.AddToCartRestyle; } });
var AddToCart_gluestack_1 = require("./blocks/AddToCart/variants/AddToCart.gluestack");
Object.defineProperty(exports, "AddToCartGluestack", { enumerable: true, get: function () { return AddToCart_gluestack_1.AddToCartGluestack; } });
var fixtures_1 = require("./blocks/AddToCart/fixtures");
Object.defineProperty(exports, "AddToCartFixtures", { enumerable: true, get: function () { return fixtures_1.AddToCartFixtures; } });
var fixtures_2 = require("./fixtures");
Object.defineProperty(exports, "fixtureProduct", { enumerable: true, get: function () { return fixtures_2.fixtureProduct; } });
Object.defineProperty(exports, "fixtureProducts", { enumerable: true, get: function () { return fixtures_2.fixtureProducts; } });
// Block set B (catalog parity) — product completion, listing, cart, content.
var ProductDescription_1 = require("./blocks/ProductDescription");
Object.defineProperty(exports, "ProductDescriptionBlock", { enumerable: true, get: function () { return ProductDescription_1.ProductDescriptionBlock; } });
Object.defineProperty(exports, "productDescriptionMeta", { enumerable: true, get: function () { return ProductDescription_1.meta; } });
var ProductAccordion_1 = require("./blocks/ProductAccordion");
Object.defineProperty(exports, "ProductAccordionBlock", { enumerable: true, get: function () { return ProductAccordion_1.ProductAccordionBlock; } });
Object.defineProperty(exports, "productAccordionMeta", { enumerable: true, get: function () { return ProductAccordion_1.meta; } });
var ProductMetadata_1 = require("./blocks/ProductMetadata");
Object.defineProperty(exports, "ProductMetadataBlock", { enumerable: true, get: function () { return ProductMetadata_1.ProductMetadataBlock; } });
Object.defineProperty(exports, "productMetadataMeta", { enumerable: true, get: function () { return ProductMetadata_1.meta; } });
var ProductRating_1 = require("./blocks/ProductRating");
Object.defineProperty(exports, "ProductRatingBlock", { enumerable: true, get: function () { return ProductRating_1.ProductRatingBlock; } });
Object.defineProperty(exports, "productRatingMeta", { enumerable: true, get: function () { return ProductRating_1.meta; } });
var WishlistButton_1 = require("./blocks/WishlistButton");
Object.defineProperty(exports, "WishlistButtonBlock", { enumerable: true, get: function () { return WishlistButton_1.WishlistButtonBlock; } });
Object.defineProperty(exports, "wishlistButtonMeta", { enumerable: true, get: function () { return WishlistButton_1.meta; } });
var ProductBreadcrumbs_1 = require("./blocks/ProductBreadcrumbs");
Object.defineProperty(exports, "ProductBreadcrumbsBlock", { enumerable: true, get: function () { return ProductBreadcrumbs_1.ProductBreadcrumbsBlock; } });
Object.defineProperty(exports, "productBreadcrumbsMeta", { enumerable: true, get: function () { return ProductBreadcrumbs_1.meta; } });
var ProductGrid_1 = require("./blocks/ProductGrid");
Object.defineProperty(exports, "ProductGridBlock", { enumerable: true, get: function () { return ProductGrid_1.ProductGridBlock; } });
Object.defineProperty(exports, "productGridMeta", { enumerable: true, get: function () { return ProductGrid_1.meta; } });
var FilterSortBar_1 = require("./blocks/FilterSortBar");
Object.defineProperty(exports, "FilterSortBarBlock", { enumerable: true, get: function () { return FilterSortBar_1.FilterSortBarBlock; } });
Object.defineProperty(exports, "filterSortBarMeta", { enumerable: true, get: function () { return FilterSortBar_1.meta; } });
var CategoryTitle_1 = require("./blocks/CategoryTitle");
Object.defineProperty(exports, "CategoryTitleBlock", { enumerable: true, get: function () { return CategoryTitle_1.CategoryTitleBlock; } });
Object.defineProperty(exports, "categoryTitleMeta", { enumerable: true, get: function () { return CategoryTitle_1.meta; } });
var CollectionHeader_1 = require("./blocks/CollectionHeader");
Object.defineProperty(exports, "CollectionHeaderBlock", { enumerable: true, get: function () { return CollectionHeader_1.CollectionHeaderBlock; } });
Object.defineProperty(exports, "collectionHeaderMeta", { enumerable: true, get: function () { return CollectionHeader_1.meta; } });
var EmptyState_1 = require("./blocks/EmptyState");
Object.defineProperty(exports, "EmptyStateBlock", { enumerable: true, get: function () { return EmptyState_1.EmptyStateBlock; } });
Object.defineProperty(exports, "emptyStateMeta", { enumerable: true, get: function () { return EmptyState_1.meta; } });
var CartItems_1 = require("./blocks/CartItems");
Object.defineProperty(exports, "CartItemsBlock", { enumerable: true, get: function () { return CartItems_1.CartItemsBlock; } });
Object.defineProperty(exports, "cartItemsMeta", { enumerable: true, get: function () { return CartItems_1.meta; } });
var CartSummary_1 = require("./blocks/CartSummary");
Object.defineProperty(exports, "CartSummaryBlock", { enumerable: true, get: function () { return CartSummary_1.CartSummaryBlock; } });
Object.defineProperty(exports, "cartSummaryMeta", { enumerable: true, get: function () { return CartSummary_1.meta; } });
var DiscountEntry_1 = require("./blocks/DiscountEntry");
Object.defineProperty(exports, "DiscountEntryBlock", { enumerable: true, get: function () { return DiscountEntry_1.DiscountEntryBlock; } });
Object.defineProperty(exports, "discountEntryMeta", { enumerable: true, get: function () { return DiscountEntry_1.meta; } });
var EmptyCart_1 = require("./blocks/EmptyCart");
Object.defineProperty(exports, "EmptyCartBlock", { enumerable: true, get: function () { return EmptyCart_1.EmptyCartBlock; } });
Object.defineProperty(exports, "emptyCartMeta", { enumerable: true, get: function () { return EmptyCart_1.meta; } });
var Content_1 = require("./blocks/Content");
Object.defineProperty(exports, "HeadingBlock", { enumerable: true, get: function () { return Content_1.HeadingBlock; } });
Object.defineProperty(exports, "headingMeta", { enumerable: true, get: function () { return Content_1.headingMeta; } });
Object.defineProperty(exports, "TextBlock", { enumerable: true, get: function () { return Content_1.TextBlock; } });
Object.defineProperty(exports, "textMeta", { enumerable: true, get: function () { return Content_1.textMeta; } });
Object.defineProperty(exports, "ImageBlock", { enumerable: true, get: function () { return Content_1.ImageBlock; } });
Object.defineProperty(exports, "imageMeta", { enumerable: true, get: function () { return Content_1.imageMeta; } });
Object.defineProperty(exports, "ButtonBlock", { enumerable: true, get: function () { return Content_1.ButtonBlock; } });
Object.defineProperty(exports, "buttonMeta", { enumerable: true, get: function () { return Content_1.buttonMeta; } });
var fixtures_3 = require("./fixtures");
Object.defineProperty(exports, "fixtureCart", { enumerable: true, get: function () { return fixtures_3.fixtureCart; } });
var Layout_1 = require("./blocks/Layout");
Object.defineProperty(exports, "SectionBandBlock", { enumerable: true, get: function () { return Layout_1.SectionBandBlock; } });
Object.defineProperty(exports, "sectionBandMeta", { enumerable: true, get: function () { return Layout_1.sectionBandMeta; } });
Object.defineProperty(exports, "SpacerBlock", { enumerable: true, get: function () { return Layout_1.SpacerBlock; } });
Object.defineProperty(exports, "spacerMeta", { enumerable: true, get: function () { return Layout_1.spacerMeta; } });
Object.defineProperty(exports, "DividerBlock", { enumerable: true, get: function () { return Layout_1.DividerBlock; } });
Object.defineProperty(exports, "dividerMeta", { enumerable: true, get: function () { return Layout_1.dividerMeta; } });
var BannerCarousel_1 = require("./blocks/BannerCarousel");
Object.defineProperty(exports, "BannerCarouselBlock", { enumerable: true, get: function () { return BannerCarousel_1.BannerCarouselBlock; } });
Object.defineProperty(exports, "bannerCarouselMeta", { enumerable: true, get: function () { return BannerCarousel_1.meta; } });
var CategoriesGrid_1 = require("./blocks/CategoriesGrid");
Object.defineProperty(exports, "CategoriesGridBlock", { enumerable: true, get: function () { return CategoriesGrid_1.CategoriesGridBlock; } });
Object.defineProperty(exports, "categoriesGridMeta", { enumerable: true, get: function () { return CategoriesGrid_1.meta; } });
var CountdownTimer_1 = require("./blocks/CountdownTimer");
Object.defineProperty(exports, "CountdownTimerBlock", { enumerable: true, get: function () { return CountdownTimer_1.CountdownTimerBlock; } });
Object.defineProperty(exports, "countdownTimerMeta", { enumerable: true, get: function () { return CountdownTimer_1.meta; } });
var TrustBadges_1 = require("./blocks/TrustBadges");
Object.defineProperty(exports, "TrustBadgesBlock", { enumerable: true, get: function () { return TrustBadges_1.TrustBadgesBlock; } });
Object.defineProperty(exports, "trustBadgesMeta", { enumerable: true, get: function () { return TrustBadges_1.meta; } });
var TestimonialSlider_1 = require("./blocks/TestimonialSlider");
Object.defineProperty(exports, "TestimonialSliderBlock", { enumerable: true, get: function () { return TestimonialSlider_1.TestimonialSliderBlock; } });
Object.defineProperty(exports, "testimonialSliderMeta", { enumerable: true, get: function () { return TestimonialSlider_1.meta; } });
var PromoBannerGrid_1 = require("./blocks/PromoBannerGrid");
Object.defineProperty(exports, "PromoBannerGridBlock", { enumerable: true, get: function () { return PromoBannerGrid_1.PromoBannerGridBlock; } });
Object.defineProperty(exports, "promoBannerGridMeta", { enumerable: true, get: function () { return PromoBannerGrid_1.meta; } });
var NewsletterBlock_1 = require("./blocks/NewsletterBlock");
Object.defineProperty(exports, "NewsletterBlockBlock", { enumerable: true, get: function () { return NewsletterBlock_1.NewsletterBlockBlock; } });
Object.defineProperty(exports, "newsletterBlockMeta", { enumerable: true, get: function () { return NewsletterBlock_1.meta; } });
var StatsRow_1 = require("./blocks/StatsRow");
Object.defineProperty(exports, "StatsRowBlock", { enumerable: true, get: function () { return StatsRow_1.StatsRowBlock; } });
Object.defineProperty(exports, "statsRowMeta", { enumerable: true, get: function () { return StatsRow_1.meta; } });
var fixtures_4 = require("./fixtures");
Object.defineProperty(exports, "fixtureCategories", { enumerable: true, get: function () { return fixtures_4.fixtureCategories; } });
Object.defineProperty(exports, "fixtureTestimonials", { enumerable: true, get: function () { return fixtures_4.fixtureTestimonials; } });
var Generic_1 = require("./blocks/Generic");
Object.defineProperty(exports, "LinkBlock", { enumerable: true, get: function () { return Generic_1.LinkBlock; } });
Object.defineProperty(exports, "linkMeta", { enumerable: true, get: function () { return Generic_1.linkMeta; } });
Object.defineProperty(exports, "AccordionBlock", { enumerable: true, get: function () { return Generic_1.AccordionBlock; } });
Object.defineProperty(exports, "accordionMeta", { enumerable: true, get: function () { return Generic_1.accordionMeta; } });
Object.defineProperty(exports, "AlertBlock", { enumerable: true, get: function () { return Generic_1.AlertBlock; } });
Object.defineProperty(exports, "alertMeta", { enumerable: true, get: function () { return Generic_1.alertMeta; } });
Object.defineProperty(exports, "BadgeBlock", { enumerable: true, get: function () { return Generic_1.BadgeBlock; } });
Object.defineProperty(exports, "badgeMeta", { enumerable: true, get: function () { return Generic_1.badgeMeta; } });
Object.defineProperty(exports, "CardBlock", { enumerable: true, get: function () { return Generic_1.CardBlock; } });
Object.defineProperty(exports, "cardMeta", { enumerable: true, get: function () { return Generic_1.cardMeta; } });
Object.defineProperty(exports, "ListBlock", { enumerable: true, get: function () { return Generic_1.ListBlock; } });
Object.defineProperty(exports, "listMeta", { enumerable: true, get: function () { return Generic_1.listMeta; } });
Object.defineProperty(exports, "AvatarBlock", { enumerable: true, get: function () { return Generic_1.AvatarBlock; } });
Object.defineProperty(exports, "avatarMeta", { enumerable: true, get: function () { return Generic_1.avatarMeta; } });
Object.defineProperty(exports, "SearchEntryBlock", { enumerable: true, get: function () { return Generic_1.SearchEntryBlock; } });
Object.defineProperty(exports, "searchEntryMeta", { enumerable: true, get: function () { return Generic_1.searchEntryMeta; } });
Object.defineProperty(exports, "ShareButtonBlock", { enumerable: true, get: function () { return Generic_1.ShareButtonBlock; } });
Object.defineProperty(exports, "shareMeta", { enumerable: true, get: function () { return Generic_1.shareMeta; } });
// Theming engines + token contract.
__exportStar(require("./theme/tokens"), exports);
var restyle_theme_1 = require("./theme/restyle-theme");
Object.defineProperty(exports, "buildRestyleTheme", { enumerable: true, get: function () { return restyle_theme_1.buildRestyleTheme; } });
var nativewind_vars_1 = require("./theme/nativewind-vars");
Object.defineProperty(exports, "themeVars", { enumerable: true, get: function () { return nativewind_vars_1.themeVars; } });
const AddToCart_2 = require("./blocks/AddToCart/AddToCart");
const ProductTitle_2 = require("./blocks/ProductTitle");
const ProductPrice_2 = require("./blocks/ProductPrice");
const ProductGallery_2 = require("./blocks/ProductGallery");
const ProductVariantSelector_2 = require("./blocks/ProductVariantSelector");
const QuantitySelector_2 = require("./blocks/QuantitySelector");
const StockIndicator_2 = require("./blocks/StockIndicator");
const ProductCard_2 = require("./blocks/ProductCard");
const Hero_2 = require("./blocks/Hero");
const ProductRail_2 = require("./blocks/ProductRail");
const fixtures_5 = require("./fixtures");
const fixtures_6 = require("./fixtures");
const ProductDescription_2 = require("./blocks/ProductDescription");
const ProductAccordion_2 = require("./blocks/ProductAccordion");
const ProductMetadata_2 = require("./blocks/ProductMetadata");
const ProductRating_2 = require("./blocks/ProductRating");
const WishlistButton_2 = require("./blocks/WishlistButton");
const ProductBreadcrumbs_2 = require("./blocks/ProductBreadcrumbs");
const ProductGrid_2 = require("./blocks/ProductGrid");
const FilterSortBar_2 = require("./blocks/FilterSortBar");
const CategoryTitle_2 = require("./blocks/CategoryTitle");
const CollectionHeader_2 = require("./blocks/CollectionHeader");
const EmptyState_2 = require("./blocks/EmptyState");
const CartItems_2 = require("./blocks/CartItems");
const CartSummary_2 = require("./blocks/CartSummary");
const DiscountEntry_2 = require("./blocks/DiscountEntry");
const EmptyCart_2 = require("./blocks/EmptyCart");
const Content_2 = require("./blocks/Content");
const Layout_2 = require("./blocks/Layout");
const BannerCarousel_2 = require("./blocks/BannerCarousel");
const CategoriesGrid_2 = require("./blocks/CategoriesGrid");
const CountdownTimer_2 = require("./blocks/CountdownTimer");
const TrustBadges_2 = require("./blocks/TrustBadges");
const TestimonialSlider_2 = require("./blocks/TestimonialSlider");
const PromoBannerGrid_2 = require("./blocks/PromoBannerGrid");
const NewsletterBlock_2 = require("./blocks/NewsletterBlock");
const StatsRow_2 = require("./blocks/StatsRow");
const Generic_2 = require("./blocks/Generic");
const def = (component, meta, fixtures) => ({ component: component, meta, fixtures });
/** The live catalog — block set A (task 2.3). */
exports.REGISTRY = {
    [AddToCart_2.AddToCart.meta.name]: AddToCart_2.AddToCart,
    ProductTitle: def(ProductTitle_2.ProductTitleBlock, ProductTitle_2.meta),
    ProductPrice: def(ProductPrice_2.ProductPriceBlock, ProductPrice_2.meta),
    ProductGallery: def(ProductGallery_2.ProductGalleryBlock, ProductGallery_2.meta),
    ProductVariantSelector: def(ProductVariantSelector_2.ProductVariantSelectorBlock, ProductVariantSelector_2.meta),
    QuantitySelector: def(QuantitySelector_2.QuantitySelectorBlock, QuantitySelector_2.meta),
    StockIndicator: def(StockIndicator_2.StockIndicatorBlock, StockIndicator_2.meta),
    ProductCard: def(ProductCard_2.ProductCardBlock, ProductCard_2.meta, () => ({ product: fixtures_5.fixtureProduct })),
    Hero: def(Hero_2.HeroBlock, Hero_2.meta),
    ProductRail: def(ProductRail_2.ProductRailBlock, ProductRail_2.meta, () => ({ products: fixtures_5.fixtureProducts })),
    ProductDescription: def(ProductDescription_2.ProductDescriptionBlock, ProductDescription_2.meta),
    ProductAccordion: def(ProductAccordion_2.ProductAccordionBlock, ProductAccordion_2.meta),
    ProductMetadata: def(ProductMetadata_2.ProductMetadataBlock, ProductMetadata_2.meta),
    ProductRating: def(ProductRating_2.ProductRatingBlock, ProductRating_2.meta),
    WishlistButton: def(WishlistButton_2.WishlistButtonBlock, WishlistButton_2.meta),
    ProductBreadcrumbs: def(ProductBreadcrumbs_2.ProductBreadcrumbsBlock, ProductBreadcrumbs_2.meta),
    ProductGrid: def(ProductGrid_2.ProductGridBlock, ProductGrid_2.meta, () => ({ products: fixtures_5.fixtureProducts })),
    FilterSortBar: def(FilterSortBar_2.FilterSortBarBlock, FilterSortBar_2.meta),
    CategoryTitle: def(CategoryTitle_2.CategoryTitleBlock, CategoryTitle_2.meta),
    CollectionHeader: def(CollectionHeader_2.CollectionHeaderBlock, CollectionHeader_2.meta),
    EmptyState: def(EmptyState_2.EmptyStateBlock, EmptyState_2.meta),
    CartItems: def(CartItems_2.CartItemsBlock, CartItems_2.meta, () => ({ cart: fixtures_6.fixtureCart })),
    CartSummary: def(CartSummary_2.CartSummaryBlock, CartSummary_2.meta, () => ({ cart: fixtures_6.fixtureCart })),
    DiscountEntry: def(DiscountEntry_2.DiscountEntryBlock, DiscountEntry_2.meta),
    EmptyCart: def(EmptyCart_2.EmptyCartBlock, EmptyCart_2.meta),
    Heading: def(Content_2.HeadingBlock, Content_2.headingMeta),
    TextBlock: def(Content_2.TextBlock, Content_2.textMeta),
    ImageBlock: def(Content_2.ImageBlock, Content_2.imageMeta),
    ButtonBlock: def(Content_2.ButtonBlock, Content_2.buttonMeta),
    SectionBand: def(Layout_2.SectionBandBlock, Layout_2.sectionBandMeta),
    Spacer: def(Layout_2.SpacerBlock, Layout_2.spacerMeta),
    Divider: def(Layout_2.DividerBlock, Layout_2.dividerMeta),
    BannerCarousel: def(BannerCarousel_2.BannerCarouselBlock, BannerCarousel_2.meta),
    CategoriesGrid: def(CategoriesGrid_2.CategoriesGridBlock, CategoriesGrid_2.meta),
    CountdownTimer: def(CountdownTimer_2.CountdownTimerBlock, CountdownTimer_2.meta),
    TrustBadges: def(TrustBadges_2.TrustBadgesBlock, TrustBadges_2.meta),
    TestimonialSlider: def(TestimonialSlider_2.TestimonialSliderBlock, TestimonialSlider_2.meta),
    PromoBannerGrid: def(PromoBannerGrid_2.PromoBannerGridBlock, PromoBannerGrid_2.meta),
    NewsletterBlock: def(NewsletterBlock_2.NewsletterBlockBlock, NewsletterBlock_2.meta),
    StatsRow: def(StatsRow_2.StatsRowBlock, StatsRow_2.meta),
    Link: def(Generic_2.LinkBlock, Generic_2.linkMeta),
    Accordion: def(Generic_2.AccordionBlock, Generic_2.accordionMeta),
    Alert: def(Generic_2.AlertBlock, Generic_2.alertMeta),
    Badge: def(Generic_2.BadgeBlock, Generic_2.badgeMeta),
    Card: def(Generic_2.CardBlock, Generic_2.cardMeta),
    List: def(Generic_2.ListBlock, Generic_2.listMeta),
    Avatar: def(Generic_2.AvatarBlock, Generic_2.avatarMeta),
    SearchEntry: def(Generic_2.SearchEntryBlock, Generic_2.searchEntryMeta),
    ShareButton: def(Generic_2.ShareButtonBlock, Generic_2.shareMeta),
};

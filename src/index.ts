export * from "./types";
export * from "./registry";
export * from "./runtime/context";
export * from "./screens/defaults";

// Block set A (doc 8 task 2.3) — single-file blocks with co-located meta/fixtures.
export { ProductTitleBlock, meta as productTitleMeta } from "./blocks/ProductTitle";
export { ProductPriceBlock, meta as productPriceMeta } from "./blocks/ProductPrice";
export { ProductGalleryBlock, meta as productGalleryMeta } from "./blocks/ProductGallery";
export {
  ProductVariantSelectorBlock,
  meta as productVariantSelectorMeta,
} from "./blocks/ProductVariantSelector";
export { QuantitySelectorBlock, meta as quantitySelectorMeta } from "./blocks/QuantitySelector";
export { StockIndicatorBlock, meta as stockIndicatorMeta } from "./blocks/StockIndicator";
export { ProductCardBlock, meta as productCardMeta } from "./blocks/ProductCard";
export { HeroBlock, meta as heroMeta } from "./blocks/Hero";
export { ProductRailBlock, meta as productRailMeta } from "./blocks/ProductRail";

// Flagship block + spike variants (0.6 comparison screen).
export { AddToCart, AddToCartBlock } from "./blocks/AddToCart/AddToCart";
export type { AddToCartProps } from "./blocks/AddToCart/AddToCart";
export { AddToCartRestyle } from "./blocks/AddToCart/variants/AddToCart.restyle";
export { AddToCartGluestack } from "./blocks/AddToCart/variants/AddToCart.gluestack";
export { AddToCartFixtures } from "./blocks/AddToCart/fixtures";
export { fixtureProduct, fixtureProducts } from "./fixtures";

// Block set B (catalog parity) — product completion, listing, cart, content.
export { ProductDescriptionBlock, meta as productDescriptionMeta } from './blocks/ProductDescription';
export { ProductAccordionBlock, meta as productAccordionMeta } from './blocks/ProductAccordion';
export { ProductMetadataBlock, meta as productMetadataMeta } from './blocks/ProductMetadata';
export { ProductRatingBlock, meta as productRatingMeta } from './blocks/ProductRating';
export { WishlistButtonBlock, meta as wishlistButtonMeta } from './blocks/WishlistButton';
export { ProductBreadcrumbsBlock, meta as productBreadcrumbsMeta } from './blocks/ProductBreadcrumbs';
export { ProductGridBlock, meta as productGridMeta } from './blocks/ProductGrid';
export { FilterSortBarBlock, meta as filterSortBarMeta } from './blocks/FilterSortBar';
export { CategoryTitleBlock, meta as categoryTitleMeta } from './blocks/CategoryTitle';
export { CollectionHeaderBlock, meta as collectionHeaderMeta } from './blocks/CollectionHeader';
export { EmptyStateBlock, meta as emptyStateMeta } from './blocks/EmptyState';
export { CartItemsBlock, meta as cartItemsMeta } from './blocks/CartItems';
export { CartSummaryBlock, meta as cartSummaryMeta } from './blocks/CartSummary';
export { DiscountEntryBlock, meta as discountEntryMeta } from './blocks/DiscountEntry';
export { EmptyCartBlock, meta as emptyCartMeta } from './blocks/EmptyCart';
export { HeadingBlock, headingMeta, TextBlock, textMeta, ImageBlock, imageMeta, ButtonBlock, buttonMeta } from './blocks/Content';
export { fixtureCart } from './fixtures';
export { SectionBandBlock, sectionBandMeta, SpacerBlock, spacerMeta, DividerBlock, dividerMeta } from './blocks/Layout';
export { BannerCarouselBlock, meta as bannerCarouselMeta } from './blocks/BannerCarousel';
export { CategoriesGridBlock, meta as categoriesGridMeta } from './blocks/CategoriesGrid';
export { CountdownTimerBlock, meta as countdownTimerMeta } from './blocks/CountdownTimer';
export { TrustBadgesBlock, meta as trustBadgesMeta } from './blocks/TrustBadges';
export { TestimonialSliderBlock, meta as testimonialSliderMeta } from './blocks/TestimonialSlider';
export { PromoBannerGridBlock, meta as promoBannerGridMeta } from './blocks/PromoBannerGrid';
export { NewsletterBlockBlock, meta as newsletterBlockMeta } from './blocks/NewsletterBlock';
export { StatsRowBlock, meta as statsRowMeta } from './blocks/StatsRow';
export { fixtureCategories, fixtureTestimonials } from './fixtures';
export { LinkBlock, linkMeta, AccordionBlock, accordionMeta, AlertBlock, alertMeta, BadgeBlock, badgeMeta, CardBlock, cardMeta, ListBlock, listMeta, AvatarBlock, avatarMeta, SearchEntryBlock, searchEntryMeta, ShareButtonBlock, shareMeta } from './blocks/Generic';

// Theming engines + token contract.
export * from "./theme/tokens";
export { buildRestyleTheme } from "./theme/restyle-theme";
export type { Theme as RestyleTheme } from "./theme/restyle-theme";
export { themeVars } from "./theme/nativewind-vars";

import type { BlockDefinition, BlockRegistry } from "./types";
import { AddToCart } from "./blocks/AddToCart/AddToCart";
import { ProductTitleBlock, meta as productTitleMeta } from "./blocks/ProductTitle";
import { ProductPriceBlock, meta as productPriceMeta } from "./blocks/ProductPrice";
import { ProductGalleryBlock, meta as productGalleryMeta } from "./blocks/ProductGallery";
import {
  ProductVariantSelectorBlock,
  meta as productVariantSelectorMeta,
} from "./blocks/ProductVariantSelector";
import { QuantitySelectorBlock, meta as quantitySelectorMeta } from "./blocks/QuantitySelector";
import { StockIndicatorBlock, meta as stockIndicatorMeta } from "./blocks/StockIndicator";
import { ProductCardBlock, meta as productCardMeta } from "./blocks/ProductCard";
import { HeroBlock, meta as heroMeta } from "./blocks/Hero";
import { ProductRailBlock, meta as productRailMeta } from "./blocks/ProductRail";
import { fixtureProduct, fixtureProducts } from "./fixtures";
import { fixtureCart } from "./fixtures";
import { ProductDescriptionBlock, meta as productDescriptionMeta } from "./blocks/ProductDescription";
import { ProductAccordionBlock, meta as productAccordionMeta } from "./blocks/ProductAccordion";
import { ProductMetadataBlock, meta as productMetadataMeta } from "./blocks/ProductMetadata";
import { ProductRatingBlock, meta as productRatingMeta } from "./blocks/ProductRating";
import { WishlistButtonBlock, meta as wishlistButtonMeta } from "./blocks/WishlistButton";
import { ProductBreadcrumbsBlock, meta as productBreadcrumbsMeta } from "./blocks/ProductBreadcrumbs";
import { ProductGridBlock, meta as productGridMeta } from "./blocks/ProductGrid";
import { FilterSortBarBlock, meta as filterSortBarMeta } from "./blocks/FilterSortBar";
import { CategoryTitleBlock, meta as categoryTitleMeta } from "./blocks/CategoryTitle";
import { CollectionHeaderBlock, meta as collectionHeaderMeta } from "./blocks/CollectionHeader";
import { EmptyStateBlock, meta as emptyStateMeta } from "./blocks/EmptyState";
import { CartItemsBlock, meta as cartItemsMeta } from "./blocks/CartItems";
import { CartSummaryBlock, meta as cartSummaryMeta } from "./blocks/CartSummary";
import { DiscountEntryBlock, meta as discountEntryMeta } from "./blocks/DiscountEntry";
import { EmptyCartBlock, meta as emptyCartMeta } from "./blocks/EmptyCart";
import { HeadingBlock, headingMeta, TextBlock, textMeta, ImageBlock, imageMeta, ButtonBlock, buttonMeta } from "./blocks/Content";
import { SectionBandBlock, sectionBandMeta, SpacerBlock, spacerMeta, DividerBlock, dividerMeta } from "./blocks/Layout";
import { BannerCarouselBlock, meta as bannerCarouselMeta } from "./blocks/BannerCarousel";
import { CategoriesGridBlock, meta as categoriesGridMeta } from "./blocks/CategoriesGrid";
import { CountdownTimerBlock, meta as countdownTimerMeta } from "./blocks/CountdownTimer";
import { TrustBadgesBlock, meta as trustBadgesMeta } from "./blocks/TrustBadges";
import { TestimonialSliderBlock, meta as testimonialSliderMeta } from "./blocks/TestimonialSlider";
import { PromoBannerGridBlock, meta as promoBannerGridMeta } from "./blocks/PromoBannerGrid";
import { NewsletterBlockBlock, meta as newsletterBlockMeta } from "./blocks/NewsletterBlock";
import { StatsRowBlock, meta as statsRowMeta } from "./blocks/StatsRow";
import { LinkBlock, linkMeta, AccordionBlock, accordionMeta, AlertBlock, alertMeta, BadgeBlock, badgeMeta, CardBlock, cardMeta, ListBlock, listMeta, AvatarBlock, avatarMeta, SearchEntryBlock, searchEntryMeta, ShareButtonBlock, shareMeta } from "./blocks/Generic";

const def = (component: unknown, meta: any, fixtures?: () => Record<string, unknown>): BlockDefinition =>
  ({ component: component as any, meta, fixtures }) as BlockDefinition;

/** The live catalog — block set A (task 2.3). */
export const REGISTRY: BlockRegistry = {
  [AddToCart.meta.name]: AddToCart,
  ProductTitle: def(ProductTitleBlock, productTitleMeta),
  ProductPrice: def(ProductPriceBlock, productPriceMeta),
  ProductGallery: def(ProductGalleryBlock, productGalleryMeta),
  ProductVariantSelector: def(ProductVariantSelectorBlock, productVariantSelectorMeta),
  QuantitySelector: def(QuantitySelectorBlock, quantitySelectorMeta),
  StockIndicator: def(StockIndicatorBlock, stockIndicatorMeta),
  ProductCard: def(ProductCardBlock, productCardMeta, () => ({ product: fixtureProduct })),
  Hero: def(HeroBlock, heroMeta),
  ProductRail: def(ProductRailBlock, productRailMeta, () => ({ products: fixtureProducts })),
  ProductDescription: def(ProductDescriptionBlock, productDescriptionMeta),
  ProductAccordion: def(ProductAccordionBlock, productAccordionMeta),
  ProductMetadata: def(ProductMetadataBlock, productMetadataMeta),
  ProductRating: def(ProductRatingBlock, productRatingMeta),
  WishlistButton: def(WishlistButtonBlock, wishlistButtonMeta),
  ProductBreadcrumbs: def(ProductBreadcrumbsBlock, productBreadcrumbsMeta),
  ProductGrid: def(ProductGridBlock, productGridMeta, () => ({ products: fixtureProducts })),
  FilterSortBar: def(FilterSortBarBlock, filterSortBarMeta),
  CategoryTitle: def(CategoryTitleBlock, categoryTitleMeta),
  CollectionHeader: def(CollectionHeaderBlock, collectionHeaderMeta),
  EmptyState: def(EmptyStateBlock, emptyStateMeta),
  CartItems: def(CartItemsBlock, cartItemsMeta, () => ({ cart: fixtureCart })),
  CartSummary: def(CartSummaryBlock, cartSummaryMeta, () => ({ cart: fixtureCart })),
  DiscountEntry: def(DiscountEntryBlock, discountEntryMeta),
  EmptyCart: def(EmptyCartBlock, emptyCartMeta),
  Heading: def(HeadingBlock, headingMeta),
  TextBlock: def(TextBlock, textMeta),
  ImageBlock: def(ImageBlock, imageMeta),
  ButtonBlock: def(ButtonBlock, buttonMeta),
  SectionBand: def(SectionBandBlock, sectionBandMeta),
  Spacer: def(SpacerBlock, spacerMeta),
  Divider: def(DividerBlock, dividerMeta),
  BannerCarousel: def(BannerCarouselBlock, bannerCarouselMeta),
  CategoriesGrid: def(CategoriesGridBlock, categoriesGridMeta),
  CountdownTimer: def(CountdownTimerBlock, countdownTimerMeta),
  TrustBadges: def(TrustBadgesBlock, trustBadgesMeta),
  TestimonialSlider: def(TestimonialSliderBlock, testimonialSliderMeta),
  PromoBannerGrid: def(PromoBannerGridBlock, promoBannerGridMeta),
  NewsletterBlock: def(NewsletterBlockBlock, newsletterBlockMeta),
  StatsRow: def(StatsRowBlock, statsRowMeta),
  Link: def(LinkBlock, linkMeta),
  Accordion: def(AccordionBlock, accordionMeta),
  Alert: def(AlertBlock, alertMeta),
  Badge: def(BadgeBlock, badgeMeta),
  Card: def(CardBlock, cardMeta),
  List: def(ListBlock, listMeta),
  Avatar: def(AvatarBlock, avatarMeta),
  SearchEntry: def(SearchEntryBlock, searchEntryMeta),
  ShareButton: def(ShareButtonBlock, shareMeta),
};

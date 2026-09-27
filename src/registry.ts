import type { BlockRegistry, MobileBlockCategory } from "./types";

/**
 * SINGLE SOURCE OF TRUTH for MOBILE_* template-type scoping
 * (docs/store-apps doc 10 §1). Consumers:
 *  - the Puck editor's mobile palette (launchstore-frontend)
 *  - the backend AI's page-type policy — the mobile mirror of
 *    ComponentRegistryService.TEMPLATE_COMPONENT_MAP (src/ai/services/
 *    component-registry.service.ts), so the design assistant knows exactly
 *    which blocks (and how many) each MOBILE_* type allows.
 * Unlike the web map (which exists as two drifting copies), this ships with
 * the block catalog itself — categories and map travel in one package.
 */
export const MOBILE_TEMPLATE_MAP: Record<string, MobileBlockCategory[]> = {
  // One MOBILE_ counterpart per web page type — each scoped to its own
  // component categories (doc 10 §1). Cart/checkout/account/legal start on
  // shared categories until their dedicated blocks land (block set B / 6.2).
  MOBILE_HOMEPAGE: ['HOMEPAGE', 'CONTENT'],
  MOBILE_PRODUCT_PAGE: ['PRODUCT', 'CONTENT'],
  MOBILE_COLLECTION_PAGE: ['LISTING', 'HOMEPAGE', 'CONTENT'],
  MOBILE_STORE_PAGE: ['LISTING', 'HOMEPAGE', 'CONTENT'],
  MOBILE_CATEGORY_PAGE: ['LISTING', 'HOMEPAGE', 'CONTENT'],
  MOBILE_CART_PAGE: ['CART', 'HOMEPAGE', 'PRODUCT', 'CONTENT'],
  MOBILE_CHECKOUT_PAGE: ['PRODUCT', 'CONTENT'],
  MOBILE_ACCOUNT_PAGE: ['CONTENT'],
  MOBILE_ORDER_CONFIRMATION_PAGE: ['HOMEPAGE', 'CONTENT'],
  MOBILE_PRIVACY_POLICY_PAGE: ['CONTENT'],
  MOBILE_TERMS_PAGE: ['CONTENT'],
  MOBILE_CUSTOMER_SERVICE_PAGE: ['CONTENT'],
  // legacy compressed set (old rows)
  MOBILE_HOME: ['HOMEPAGE', 'CONTENT'],
  MOBILE_PRODUCT: ['PRODUCT', 'CONTENT'],
  MOBILE_LISTING: ['LISTING', 'HOMEPAGE', 'CONTENT'],
  MOBILE_CART: ['CART', 'HOMEPAGE', 'PRODUCT', 'CONTENT'],
  MOBILE_CHECKOUT: ['PRODUCT', 'CONTENT'],
  MOBILE_CONTENT: ['CONTENT'],
};

export const FALLBACK_CATEGORIES: MobileBlockCategory[] = ["LAYOUT-M", "CONTENT"];

export function allowedCategoriesFor(templateType: string): MobileBlockCategory[] {
  return MOBILE_TEMPLATE_MAP[templateType] ?? FALLBACK_CATEGORIES;
}

export function allowedBlocksFor(
  registry: BlockRegistry,
  templateType: string,
): string[] {
  const allowed = new Set(allowedCategoriesFor(templateType));
  return Object.values(registry)
    .filter((b) => allowed.has(b.meta.category))
    .map((b) => b.meta.name);
}

/**
 * The registry walker (doc 4 §3 step ⑤). Unknown block types fall back to
 * MissingBlock so a newer config never crashes an older app (doc 3 §5).
 */
export function MissingBlock({ type }: { type: string }) {
  // Intentionally inert in the scaffold; the app renders a themed placeholder.
  void type;
  return null;
}

export function resolveBlock(
  registry: BlockRegistry,
  type: string,
): BlockRegistry[string] | undefined {
  return registry[type];
}

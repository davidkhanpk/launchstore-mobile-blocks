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
  MOBILE_HOME: ["LAYOUT-M", "CONTENT", "HOMEPAGE"],
  MOBILE_PRODUCT: ["LAYOUT-M", "CONTENT", "PRODUCT"],
  MOBILE_LISTING: ["LAYOUT-M", "CONTENT", "LISTING"],
  MOBILE_CART: ["LAYOUT-M", "CONTENT", "CART"],
  MOBILE_CHECKOUT: ["LAYOUT-M", "CONTENT", "CHECKOUT"],
  MOBILE_CONTENT: ["LAYOUT-M", "CONTENT"],
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

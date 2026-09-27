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
export declare const MOBILE_TEMPLATE_MAP: Record<string, MobileBlockCategory[]>;
export declare const FALLBACK_CATEGORIES: MobileBlockCategory[];
export declare function allowedCategoriesFor(templateType: string): MobileBlockCategory[];
export declare function allowedBlocksFor(registry: BlockRegistry, templateType: string): string[];
/**
 * The registry walker (doc 4 §3 step ⑤). Unknown block types fall back to
 * MissingBlock so a newer config never crashes an older app (doc 3 §5).
 */
export declare function MissingBlock({ type }: {
    type: string;
}): null;
export declare function resolveBlock(registry: BlockRegistry, type: string): BlockRegistry[string] | undefined;

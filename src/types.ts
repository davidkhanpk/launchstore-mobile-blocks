import type { ComponentType } from "react";

/**
 * The mobile block contract (docs/store-apps doc 6 §3, doc 10 §1).
 *
 * A block takes three strictly separated input channels:
 *  - props:   merchant-configured values, serialized in MOBILE_* puckData
 *  - data:    runtime-injected commerce data (real in the app, fixtures in the editor)
 *  - actions: commerce-container functions (addToCart, checkout.*, track)
 * Blocks never call Medusa directly and never contain merchant logic.
 */

/** Typed successor to the web metas' free-text `mobileBehavior`. */
export type MobileBehavior =
  | "native-port" // web component ported ~1:1 to a native block
  | "reimagined" // same intent, native interaction pattern (e.g. gallery pager)
  | "web-only"; // intentionally absent from the mobile palette

export interface BlockMeta {
  /** Registry key — also the puckData `type` string. */
  name: string;
  label: string;
  description?: string;
  /** Drives MOBILE_* template-type scoping (see MOBILE_TEMPLATE_MAP). */
  category: MobileBlockCategory;
  mobileBehavior: MobileBehavior;
  /** Runtime data this block reads from the screen context (doc 6 §3). */
  dataDeps: string[];
  /** Commerce-container actions this block may invoke (doc 6 §3). */
  actions: string[];
  a11y?: { role?: string; labelFromProp?: string };
}

export type MobileBlockCategory =
  | "LAYOUT-M"
  | "CONTENT"
  | "HOMEPAGE"
  | "PRODUCT"
  | "LISTING"
  | "CART"
  | "CHECKOUT"
  | "ORDER";

export interface BlockDefinition<P = Record<string, unknown>> {
  meta: BlockMeta;
  /** Editor-only fixture data for the data channel (doc 4 §5). */
  fixtures?: () => Record<string, unknown>;
  component: ComponentType<P>;
}

export type BlockRegistry = Record<string, BlockDefinition<any>>;

/**
 * One serialized screen: the mobile half of puckData
 * ({ content, zones } flattened to an ordered block list per screen).
 */
export interface ScreenDoc {
  templateType: `MOBILE_${string}`;
  version: number;
  blocks: Array<{ id?: string; type: string; props?: Record<string, unknown> }>;
}

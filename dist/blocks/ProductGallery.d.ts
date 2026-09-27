import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductGalleryProps {
    variant?: "pager" | "grid";
    /** Snap the pager to the selected variant's first image (screen option proxy). */
    variantImageSync?: boolean;
    aspectRatio?: number;
}
export declare function ProductGalleryBlock({ variant, aspectRatio, }: ProductGalleryProps): React.JSX.Element;
export declare const fixtures: () => {};

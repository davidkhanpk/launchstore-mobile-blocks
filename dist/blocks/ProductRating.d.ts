import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductRatingProps {
    rating?: number;
    reviewCount?: number;
}
export declare function ProductRatingBlock({ rating, reviewCount }: ProductRatingProps): React.JSX.Element | null;
export declare const fixtures: () => {};

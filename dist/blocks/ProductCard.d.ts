import React from "react";
import { type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductCardProps {
    product?: ProductLike;
    showAddButton?: boolean;
    onPress?: (product: ProductLike) => void;
}
export declare function ProductCardBlock({ product, showAddButton, onPress }: ProductCardProps): React.JSX.Element | null;
export declare const fixtures: () => {};

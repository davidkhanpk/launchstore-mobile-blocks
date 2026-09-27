import React from "react";
import { type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductRailProps {
    title?: string;
    products?: ProductLike[];
    onProductPress?: (product: ProductLike) => void;
}
export declare function ProductRailBlock({ title, products: productsProp, onProductPress }: ProductRailProps): React.JSX.Element | null;
export declare const fixtures: () => {
    products: ProductLike[];
};

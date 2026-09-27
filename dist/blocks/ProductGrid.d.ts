import React from "react";
import { type ProductLike } from "../runtime/context";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductGridProps {
    columns?: 1 | 2 | 3;
    /** Load-more button instead of infinite scroll (screen option proxy). */
    loadMore?: boolean;
    products?: ProductLike[];
    onProductPress?: (product: ProductLike) => void;
}
export declare function ProductGridBlock({ columns, loadMore, products: productsProp, onProductPress, }: ProductGridProps): React.JSX.Element;
export declare const fixtures: () => {
    products: ProductLike[];
};

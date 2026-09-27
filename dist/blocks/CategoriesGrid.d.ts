import React from "react";
import { type CategoryLike } from "../fixtures";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface CategoriesGridProps {
    columns?: 2 | 3;
    categories?: CategoryLike[];
    onCategoryPress?: (category: CategoryLike) => void;
}
export declare function CategoriesGridBlock({ columns, categories, onCategoryPress }: CategoriesGridProps): React.JSX.Element;
export declare const fixtures: () => {
    categories: CategoryLike[];
};

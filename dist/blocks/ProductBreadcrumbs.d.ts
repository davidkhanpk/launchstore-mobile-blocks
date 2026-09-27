import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductBreadcrumbsProps {
    /** Accepts a string array (data) or comma-separated string (editor field). */
    items?: string[] | string;
}
export declare function ProductBreadcrumbsBlock({ items }: ProductBreadcrumbsProps): React.JSX.Element;
export declare const fixtures: () => {};

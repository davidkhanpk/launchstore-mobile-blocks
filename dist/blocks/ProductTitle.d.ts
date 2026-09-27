import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductTitleProps {
    level?: "lg" | "md";
}
export declare function ProductTitleBlock({ level }: ProductTitleProps): React.JSX.Element | null;
export declare const fixtures: () => {};

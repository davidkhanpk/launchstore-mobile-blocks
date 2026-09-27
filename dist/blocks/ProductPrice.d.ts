import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductPriceProps {
    /** Show the per-selected-variant price instead of the product default. */
    followSelection?: boolean;
}
export declare function ProductPriceBlock({ followSelection }: ProductPriceProps): React.JSX.Element | null;
export declare const fixtures: () => {};

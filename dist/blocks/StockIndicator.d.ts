import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface StockIndicatorProps {
    lowThreshold?: number;
}
export declare function StockIndicatorBlock({ lowThreshold }: StockIndicatorProps): React.JSX.Element | null;
export declare const fixtures: () => {};

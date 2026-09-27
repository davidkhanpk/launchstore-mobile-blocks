import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface QuantitySelectorProps {
    min?: number;
    max?: number;
}
export declare function QuantitySelectorBlock({ min, max }: QuantitySelectorProps): React.JSX.Element;
export declare const fixtures: () => {};

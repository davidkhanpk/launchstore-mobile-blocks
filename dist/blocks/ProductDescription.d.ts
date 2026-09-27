import React from 'react';
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductDescriptionProps {
    numberOfLines?: number;
}
export declare function ProductDescriptionBlock({ numberOfLines }: ProductDescriptionProps): React.JSX.Element | null;
export declare const fixtures: () => {};

import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductMetadataProps {
    rows?: Array<{
        label: string;
        value: string;
    }>;
}
export declare function ProductMetadataBlock({ rows }: ProductMetadataProps): React.JSX.Element | null;
export declare const fixtures: () => {};

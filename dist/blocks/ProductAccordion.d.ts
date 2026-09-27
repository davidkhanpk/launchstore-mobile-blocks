import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface ProductAccordionProps {
    sections?: Array<{
        title: string;
        body: string;
    }>;
}
export declare function ProductAccordionBlock({ sections }: ProductAccordionProps): React.JSX.Element;
export declare const fixtures: () => {};

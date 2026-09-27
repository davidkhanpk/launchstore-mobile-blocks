import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface TestimonialLike {
    id: string;
    quote: string;
    author: string;
}
export declare function TestimonialSliderBlock({ items }: {
    items?: TestimonialLike[];
}): React.JSX.Element;
export declare const fixtures: () => {};

import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface CategoryTitleProps {
    title?: string;
    count?: number;
}
export declare function CategoryTitleBlock({ title, count }: CategoryTitleProps): React.JSX.Element;
export declare const fixtures: () => {
    title: string;
};

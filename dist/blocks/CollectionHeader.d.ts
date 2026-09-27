import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface CollectionHeaderProps {
    title?: string;
    imageUrl?: string;
    count?: number;
}
export declare function CollectionHeaderBlock({ title, imageUrl, count }: CollectionHeaderProps): React.JSX.Element;
export declare const fixtures: () => {
    title: string;
};

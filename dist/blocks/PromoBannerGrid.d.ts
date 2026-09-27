import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface PromoBannerGridProps {
    primaryTitle?: string;
    primaryCta?: string;
    primaryImageUrl?: string;
    secondaryTitle?: string;
    secondaryCta?: string;
    secondaryImageUrl?: string;
}
export declare function PromoBannerGridBlock({ primaryTitle, primaryCta, primaryImageUrl, secondaryTitle, secondaryCta, secondaryImageUrl, }: PromoBannerGridProps): React.JSX.Element;
export declare const fixtures: () => {};

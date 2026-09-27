import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface BannerSlide {
    imageUrl?: string;
    heading?: string;
    subheading?: string;
    ctaLabel?: string;
}
export interface BannerCarouselProps {
    slides?: BannerSlide[];
    /** Auto-advance seconds (0 = off). */
    autoAdvanceSeconds?: number;
}
export declare function BannerCarouselBlock({ slides, autoAdvanceSeconds }: BannerCarouselProps): React.JSX.Element;
export declare const fixtures: () => {};

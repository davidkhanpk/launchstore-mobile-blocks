import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface HeroProps {
    heading?: string;
    subheading?: string;
    ctaLabel?: string;
    imageUrl?: string;
    onCta?: () => void;
}
export declare function HeroBlock({ heading, subheading, ctaLabel, imageUrl, onCta }: HeroProps): React.JSX.Element;
export declare const fixtures: () => {
    heading: string;
    subheading: string;
    ctaLabel: string;
};

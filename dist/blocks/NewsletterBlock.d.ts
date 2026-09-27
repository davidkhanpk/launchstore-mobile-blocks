import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface NewsletterBlockProps {
    title?: string;
    placeholder?: string;
    ctaLabel?: string;
}
export declare function NewsletterBlockBlock({ title, placeholder, ctaLabel, }: NewsletterBlockProps): React.JSX.Element;
export declare const fixtures: () => {};

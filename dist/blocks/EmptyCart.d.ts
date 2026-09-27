import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface EmptyCartProps {
    message?: string;
    ctaLabel?: string;
    onCta?: () => void;
}
export declare function EmptyCartBlock({ message, ctaLabel, onCta, }: EmptyCartProps): React.JSX.Element;
export declare const fixtures: () => {};

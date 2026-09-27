import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface EmptyStateProps {
    message?: string;
    ctaLabel?: string;
    onCta?: () => void;
}
export declare function EmptyStateBlock({ message, ctaLabel, onCta, }: EmptyStateProps): React.JSX.Element;
export declare const fixtures: () => {};

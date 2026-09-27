import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface TrustBadgesProps {
    /** Comma-separated in the editor; array from data. */
    items?: string[] | string;
}
export declare function TrustBadgesBlock({ items }: TrustBadgesProps): React.JSX.Element;
export declare const fixtures: () => {};

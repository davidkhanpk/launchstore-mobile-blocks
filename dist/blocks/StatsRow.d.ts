import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface StatsRowProps {
    /** Comma-separated "value|label" pairs, e.g. "10k+|customers,4.8★|rating". */
    stats?: string;
}
export declare function StatsRowBlock({ stats }: StatsRowProps): React.JSX.Element;
export declare const fixtures: () => {};

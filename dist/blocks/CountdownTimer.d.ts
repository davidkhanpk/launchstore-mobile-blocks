import React from "react";
import type { BlockMeta } from "../types";
export declare const meta: BlockMeta;
export interface CountdownTimerProps {
    title?: string;
    /** ISO date string, editor-entered. */
    endsAt?: string;
}
export declare function CountdownTimerBlock({ title, endsAt }: CountdownTimerProps): React.JSX.Element;
export declare const fixtures: () => {};

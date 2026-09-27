import React from "react";
import type { BlockMeta } from "../types";
/**
 * LAYOUT-M — the canvas composition basics (doc 10's layout category).
 * SectionBand is the flat-list stand-in for the web Section wrapper: a
 * full-width colored band with an optional heading, styled by scheme tokens.
 */
export declare const sectionBandMeta: BlockMeta;
export declare function SectionBandBlock({ heading, scheme, }: {
    heading?: string;
    scheme?: "surface" | "background" | "accent";
}): React.JSX.Element;
export declare const spacerMeta: BlockMeta;
export declare function SpacerBlock({ height }: {
    height?: number;
}): React.JSX.Element;
export declare const dividerMeta: BlockMeta;
export declare function DividerBlock(): React.JSX.Element;
export declare const layoutFixtures: () => {};

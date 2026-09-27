import React from "react";
import type { BlockMeta } from "../types";
/**
 * Generic content blocks — the mobile CONTENT category toolkit shared by
 * content/legal pages and as building material inside other screens.
 */
export declare const headingMeta: BlockMeta;
export declare function HeadingBlock({ text, level }: {
    text?: string;
    level?: "lg" | "md" | "sm";
}): React.JSX.Element;
export declare const textMeta: BlockMeta;
export declare function TextBlock({ text }: {
    text?: string;
}): React.JSX.Element;
export declare const imageMeta: BlockMeta;
export declare function ImageBlock({ imageUrl, aspectRatio, }: {
    imageUrl?: string;
    aspectRatio?: number;
}): React.JSX.Element;
export declare const buttonMeta: BlockMeta;
export declare function ButtonBlock({ label, onPress, }: {
    label?: string;
    onPress?: () => void;
}): React.JSX.Element;
export declare const contentFixtures: () => {};

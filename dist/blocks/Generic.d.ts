import React from "react";
import type { BlockMeta } from "../types";
/**
 * Generic set C — web-parity utilities (Link, Accordion, Alert, Badge, Card,
 * List, Avatar) plus mobile-native idioms (SearchEntry, ShareButton).
 * All CONTENT category: available on every screen type.
 */
export declare const linkMeta: BlockMeta;
export declare function LinkBlock({ text, url, }: {
    text?: string;
    url?: string;
}): React.JSX.Element;
export declare const accordionMeta: BlockMeta;
export declare function AccordionBlock({ title, body, }: {
    title?: string;
    body?: string;
}): React.JSX.Element;
export declare const alertMeta: BlockMeta;
export declare function AlertBlock({ tone, message, }: {
    tone?: "info" | "success" | "warning" | "error";
    message?: string;
}): React.JSX.Element;
export declare const badgeMeta: BlockMeta;
export declare function BadgeBlock({ text, tone, }: {
    text?: string;
    tone?: "brand" | "success" | "danger" | "neutral";
}): React.JSX.Element;
export declare const cardMeta: BlockMeta;
export declare function CardBlock({ imageUrl, title, body, ctaLabel, }: {
    imageUrl?: string;
    title?: string;
    body?: string;
    ctaLabel?: string;
}): React.JSX.Element;
export declare const listMeta: BlockMeta;
export declare function ListBlock({ items }: {
    items?: string[] | string;
}): React.JSX.Element;
export declare const avatarMeta: BlockMeta;
export declare function AvatarBlock({ imageUrl, name, subtitle, }: {
    imageUrl?: string;
    name?: string;
    subtitle?: string;
}): React.JSX.Element;
export declare const searchEntryMeta: BlockMeta;
export declare function SearchEntryBlock({ placeholder }: {
    placeholder?: string;
}): React.JSX.Element;
export declare const shareMeta: BlockMeta;
export declare function ShareButtonBlock({ label, message, }: {
    label?: string;
    message?: string;
}): React.JSX.Element;
export declare const genericFixtures: () => {};

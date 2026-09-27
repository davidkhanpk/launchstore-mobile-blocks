import type { ProductLike } from "./runtime/context";
/** Editor/canvas fixture data (doc 4 §5) — the data channel's default value. */
export declare const fixtureProduct: ProductLike;
export declare const fixtureProducts: ProductLike[];
export declare const fixtureCart: {
    id: string;
    item_count: number;
    currency_code: string;
    items: {
        id: string;
        title: string;
        variant_title: string;
        thumbnail: null;
        quantity: number;
        unit_price: number;
        total: number;
    }[];
    subtotal: number;
    shipping_total: number;
    tax_total: number;
    discount_total: number;
    total: number;
};
export interface CategoryLike {
    id: string;
    name: string;
    handle?: string;
    emoji?: string;
    imageUrl?: string | null;
}
export declare const fixtureCategories: CategoryLike[];
export declare const fixtureTestimonials: {
    id: string;
    quote: string;
    author: string;
}[];

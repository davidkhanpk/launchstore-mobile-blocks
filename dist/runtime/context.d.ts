import { type ReactNode } from "react";
/**
 * The runtime contract (doc 6 §3): blocks read DATA from screen context and
 * invoke ACTIONS from commerce context. The blocks package ships DEFAULT
 * providers that serve fixtures and inert actions — the editor canvas gets
 * correct preview behavior with zero wiring, and the app overrides both with
 * real implementations. One component, two containers.
 */
export interface VariantLike {
    id: string;
    title?: string | null;
    options?: Array<{
        option?: {
            title?: string;
        } | null;
        value: string;
    }>;
    inventory_quantity?: number | null;
    manage_inventory?: boolean;
    calculated_price?: {
        calculated_amount: number | null;
        currency_code: string;
    } | null;
}
export interface ProductLike {
    id: string;
    title: string;
    handle?: string;
    description?: string | null;
    thumbnail?: string | null;
    images?: Array<{
        url: string;
        alt?: string;
    }> | null;
    variants?: VariantLike[] | null;
    metadata?: Record<string, string> | null;
    calculated_price?: {
        calculated_amount: number | null;
        currency_code: string;
    } | null;
}
export type PriceLike = ProductLike["calculated_price"];
export declare function formatPrice(amount: number | null | undefined, currency?: string): string;
export declare function ScreenDataProvider({ value, children, }: {
    value: Record<string, unknown>;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useScreenData<T = unknown>(key: string): T | undefined;
export interface CommerceActions {
    addToCart(variantId: string, quantity: number): Promise<void>;
    updateCartLine(lineId: string, quantity: number): Promise<void>;
    removeCartLine(lineId: string): Promise<void>;
    applyDiscount(code: string): Promise<void>;
    track(event: string, payload?: Record<string, unknown>): void;
    /** true when a real commerce runtime is present (app), false in canvas */
    readonly live: boolean;
}
export declare function CommerceProviderOverride({ value, children, }: {
    value: CommerceActions;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useCommerce(): CommerceActions;
export interface ProductInteraction {
    selectedOptions: Record<string, string>;
    setSelectedOptions(next: Record<string, string>): void;
    quantity: number;
    setQuantity(q: number): void;
}
export declare function ProductInteractionProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useProductInteraction(): ProductInteraction;
export interface CartLineLike {
    id: string;
    title?: string | null;
    variant_title?: string | null;
    thumbnail?: string | null;
    quantity: number;
    unit_price?: number | null;
    total?: number | null;
}
export interface CartLike {
    id: string;
    items?: CartLineLike[] | null;
    item_count?: number;
    subtotal?: number | null;
    shipping_total?: number | null;
    tax_total?: number | null;
    discount_total?: number | null;
    total?: number | null;
    currency_code?: string | null;
}
export type SortOption = 'recommended' | 'newest' | 'price-asc' | 'price-desc';
export interface ListingInteraction {
    sort: SortOption;
    setSort(s: SortOption): void;
}
export declare function ListingInteractionProvider({ children }: {
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useListingInteraction(): ListingInteraction;
export interface NavigationActions {
    go(path: string): void;
    readonly live: boolean;
}
export declare function NavigationProviderOverride({ value, children, }: {
    value: NavigationActions;
    children: ReactNode;
}): import("react").JSX.Element;
export declare function useNavigation(): NavigationActions;
/** Resolve the variant matching the current selection (example PDP semantics). */
export declare function matchVariant(product: ProductLike | undefined, selectedOptions: Record<string, string>): VariantLike | undefined;

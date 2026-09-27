import { createContext, useContext, useState, type ReactNode } from "react";

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
  options?: Array<{ option?: { title?: string } | null; value: string }>;
  inventory_quantity?: number | null;
  manage_inventory?: boolean;
  calculated_price?: { calculated_amount: number | null; currency_code: string } | null;
}

export interface ProductLike {
  id: string;
  title: string;
  handle?: string;
  description?: string | null;
  thumbnail?: string | null;
  images?: Array<{ url: string; alt?: string }> | null;
  variants?: VariantLike[] | null;
  metadata?: Record<string, string> | null;
  calculated_price?: { calculated_amount: number | null; currency_code: string } | null;
}

export type PriceLike = ProductLike["calculated_price"];

export function formatPrice(amount: number | null | undefined, currency?: string): string {
  if (amount == null) return "";
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency ?? "usd",
    }).format(amount / 100);
  } catch {
    return `${(amount / 100).toFixed(2)} ${currency ?? ""}`.trim();
  }
}

// ── Screen data channel ─────────────────────────────────────────────────────

const ScreenDataContext = createContext<Record<string, unknown>>({});

export function ScreenDataProvider({
  value,
  children,
}: {
  value: Record<string, unknown>;
  children: ReactNode;
}) {
  return <ScreenDataContext.Provider value={value}>{children}</ScreenDataContext.Provider>;
}

export function useScreenData<T = unknown>(key: string): T | undefined {
  return (useContext(ScreenDataContext) as Record<string, T | undefined>)[key];
}

// ── Commerce action channel (default: inert — editor/canvas mode) ──────────

export interface CommerceActions {
  addToCart(variantId: string, quantity: number): Promise<void>;
  updateCartLine(lineId: string, quantity: number): Promise<void>;
  removeCartLine(lineId: string): Promise<void>;
  applyDiscount(code: string): Promise<void>;
  track(event: string, payload?: Record<string, unknown>): void;
  /** true when a real commerce runtime is present (app), false in canvas */
  readonly live: boolean;
}

const InertCommerce: CommerceActions = {
  async addToCart() {
    /* canvas: no orders from the editor */
  },
  async updateCartLine() {},
  async removeCartLine() {},
  async applyDiscount() {},
  track() {
    /* canvas: no telemetry from the editor */
  },
  live: false,
};

const CommerceContext = createContext<CommerceActions>(InertCommerce);

export function CommerceProviderOverride({
  value,
  children,
}: {
  value: CommerceActions;
  children: ReactNode;
}) {
  return <CommerceContext.Provider value={value}>{children}</CommerceContext.Provider>;
}

export function useCommerce(): CommerceActions {
  return useContext(CommerceContext);
}

// ── Product interaction state (screen-scoped selection shared across blocks) ─

export interface ProductInteraction {
  selectedOptions: Record<string, string>;
  setSelectedOptions(next: Record<string, string>): void;
  quantity: number;
  setQuantity(q: number): void;
}

const ProductInteractionContext = createContext<ProductInteraction | null>(null);

export function ProductInteractionProvider({ children }: { children: ReactNode }) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  return (
    <ProductInteractionContext.Provider
      value={{ selectedOptions, setSelectedOptions, quantity, setQuantity }}
    >
      {children}
    </ProductInteractionContext.Provider>
  );
}

export function useProductInteraction(): ProductInteraction {
  const ctx = useContext(ProductInteractionContext);
  return (
    ctx ?? {
      selectedOptions: {},
      setSelectedOptions: () => {},
      quantity: 1,
      setQuantity: () => {},
    }
  );
}

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

const ListingInteractionContext = createContext<ListingInteraction | null>(null);

export function ListingInteractionProvider({ children }: { children: ReactNode }) {
  const [sort, setSort] = useState<SortOption>('recommended');
  return (
    <ListingInteractionContext.Provider value={{ sort, setSort }}>
      {children}
    </ListingInteractionContext.Provider>
  );
}

export function useListingInteraction(): ListingInteraction {
  const ctx = useContext(ListingInteractionContext);
  return ctx ?? { sort: 'recommended', setSort: () => {} };
}

// ── Navigation channel (task 3.12) — app routes, canvas is inert ──────────

export interface NavigationActions {
  go(path: string): void;
  readonly live: boolean;
}

const InertNavigation: NavigationActions = {
  go() {
    /* canvas: no navigation from the editor */
  },
  live: false,
};

const NavigationContext = createContext<NavigationActions>(InertNavigation);

export function NavigationProviderOverride({
  value,
  children,
}: {
  value: NavigationActions;
  children: ReactNode;
}) {
  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export function useNavigation(): NavigationActions {
  return useContext(NavigationContext);
}

/** Resolve the variant matching the current selection (example PDP semantics). */
export function matchVariant(
  product: ProductLike | undefined,
  selectedOptions: Record<string, string>,
): VariantLike | undefined {
  if (!product?.variants?.length) return undefined;
  return (
    product.variants.find((v) =>
      (v.options ?? []).every((o) => !selectedOptions[o.option?.title ?? ""] || selectedOptions[o.option?.title ?? ""] === o.value),
    ) ?? product.variants[0]
  );
}

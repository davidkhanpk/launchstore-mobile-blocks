/**
 * Editor-only fixture for the data channel (doc 4 §5, doc 6 §3).
 * The app receives the real product from the screen context; the Puck canvas
 * renders from this instead — behavior differences never leak into design mode.
 */
export declare function AddToCartFixtures(): {
    product: {
        id: string;
        title: string;
        variants: {
            id: string;
            title: string;
            calculated_price: {
                calculated_amount: number;
                currency_code: string;
            };
            inventory_quantity: number;
            manage_inventory: boolean;
        }[];
    };
};

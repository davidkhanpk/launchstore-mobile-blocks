import React from "react";
export interface AddToCartProps {
    label?: string;
    variant?: "primary" | "secondary" | "danger";
    fullWidth?: boolean;
}
export declare function AddToCartBlock({ label, variant, fullWidth, }: AddToCartProps): React.JSX.Element;
export declare const AddToCart: {
    meta: {
        name: string;
        label: string;
        description: string;
        category: "PRODUCT";
        mobileBehavior: "native-port";
        dataDeps: string[];
        actions: string[];
        a11y: {
            role: string;
            labelFromProp: string;
        };
    };
    component: typeof AddToCartBlock;
};

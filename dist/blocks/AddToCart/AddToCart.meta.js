"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    name: "AddToCart",
    label: "Add to Cart",
    description: "Primary purchase CTA. Visual values come from theme tokens; behavior comes from the commerce container.",
    category: "PRODUCT",
    mobileBehavior: "native-port",
    dataDeps: ["product"],
    actions: ["addToCart", "track"],
    a11y: { role: "button", labelFromProp: "label" },
};

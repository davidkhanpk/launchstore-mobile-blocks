"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.NewsletterBlockBlock = NewsletterBlockBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const context_1 = require("../runtime/context");
exports.meta = {
    name: "NewsletterBlock",
    label: "Newsletter Signup",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: [],
    actions: ["track"],
};
function NewsletterBlockBlock({ title = "Join our list", placeholder = "Email address", ctaLabel = "Subscribe", }) {
    const commerce = (0, context_1.useCommerce)();
    const [email, setEmail] = (0, react_1.useState)("");
    const [done, setDone] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "gap-3 rounded-ls-md bg-ls-ui-surface p-5", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-base font-bold text-ls-text-primary", children: title }), done ? ((0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm text-ls-brand-primary", children: "Thanks \u2014 you're on the list \u2713" })) : ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "flex-row gap-2", children: [(0, jsx_runtime_1.jsx)(react_native_1.TextInput, { accessibilityLabel: "Email address", value: email, onChangeText: setEmail, placeholder: placeholder, placeholderTextColor: "#9CA3AF", keyboardType: "email-address", autoCapitalize: "none", className: "flex-1 rounded-ls-md border border-ls-ui-border bg-ls-ui-background px-4 py-2.5 text-sm text-ls-text-primary" }), (0, jsx_runtime_1.jsx)(react_native_1.Pressable, { accessibilityRole: "button", onPress: () => {
                            if (!email.includes("@"))
                                return;
                            commerce.track("newsletter_subscribed", { email });
                            setDone(true);
                        }, className: "items-center justify-center rounded-ls-md bg-ls-btn-primary-bg px-5", children: (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-btn-primary-fg", children: ctaLabel }) })] }))] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

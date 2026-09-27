"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.CategoriesGridBlock = CategoriesGridBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_native_1 = require("react-native");
const fixtures_1 = require("../fixtures");
exports.meta = {
    name: "CategoriesGrid",
    label: "Categories Grid",
    category: "HOMEPAGE",
    mobileBehavior: "native-port",
    dataDeps: ["categories"],
    actions: [],
};
function CategoriesGridBlock({ columns = 2, categories, onCategoryPress }) {
    const items = categories ?? fixtures_1.fixtureCategories;
    return ((0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: items, numColumns: columns, scrollEnabled: false, columnWrapperStyle: { gap: 10 }, contentContainerStyle: { gap: 10 }, keyExtractor: (c) => c.id, renderItem: ({ item }) => ((0, jsx_runtime_1.jsxs)(react_native_1.Pressable, { accessibilityRole: "button", accessibilityLabel: item.name, onPress: () => onCategoryPress?.(item), className: "flex-1 items-center gap-2 rounded-ls-md bg-ls-ui-surface px-3 py-5", children: [(0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-3xl", children: item.emoji ?? "🛍️" }), (0, jsx_runtime_1.jsx)(react_native_1.Text, { className: "text-sm font-semibold text-ls-text-primary", children: item.name })] })) }, columns));
}
const fixtures = () => ({ categories: fixtures_1.fixtureCategories });
exports.fixtures = fixtures;

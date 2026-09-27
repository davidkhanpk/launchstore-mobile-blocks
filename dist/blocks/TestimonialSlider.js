"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fixtures = exports.meta = void 0;
exports.TestimonialSliderBlock = TestimonialSliderBlock;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_native_1 = require("react-native");
const fixtures_1 = require("../fixtures");
exports.meta = {
    name: "TestimonialSlider",
    label: "Testimonials",
    category: "HOMEPAGE",
    mobileBehavior: "reimagined",
    dataDeps: ["testimonials"],
    actions: [],
};
function TestimonialSliderBlock({ items }) {
    const list = items?.length ? items : fixtures_1.fixtureTestimonials;
    const [index, setIndex] = (0, react_1.useState)(0);
    return ((0, jsx_runtime_1.jsxs)(react_native_1.View, { children: [(0, jsx_runtime_1.jsx)(react_native_1.FlatList, { data: list, horizontal: true, pagingEnabled: true, showsHorizontalScrollIndicator: false, keyExtractor: (t) => t.id, onMomentumScrollEnd: (e) => setIndex(Math.round(e.nativeEvent.contentOffset.x / (e.nativeEvent.layoutMeasurement.width || 1))), renderItem: ({ item }) => ((0, jsx_runtime_1.jsxs)(react_native_1.View, { className: "w-full gap-2 rounded-ls-md bg-ls-ui-surface p-5", children: [(0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-base leading-6 text-ls-text-primary", children: ["\u201C", item.quote, "\u201D"] }), (0, jsx_runtime_1.jsxs)(react_native_1.Text, { className: "text-xs font-semibold text-ls-brand-primary", children: ["\u2014 ", item.author] })] })) }), list.length > 1 ? ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: "mt-2 flex-row justify-center gap-1.5", children: list.map((t, i) => ((0, jsx_runtime_1.jsx)(react_native_1.View, { className: `h-1.5 w-1.5 rounded-full ${i === index ? "bg-ls-brand-primary" : "bg-ls-ui-border"}` }, t.id))) })) : null] }));
}
const fixtures = () => ({});
exports.fixtures = fixtures;

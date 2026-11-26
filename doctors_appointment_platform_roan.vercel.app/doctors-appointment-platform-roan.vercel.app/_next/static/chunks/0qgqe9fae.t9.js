(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 65828, a => {
    "use strict";
    var r = a.i(43476);
    a.i(71645);
    var t = a.i(57851);
    a.s(["Card", 0, function({
        className: a,
        ...e
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card",
            className: (0, t.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", a),
            ...e
        })
    }, "CardContent", 0, function({
        className: a,
        ...e
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-content",
            className: (0, t.cn)("px-6", a),
            ...e
        })
    }, "CardDescription", 0, function({
        className: a,
        ...e
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-description",
            className: (0, t.cn)("text-muted-foreground text-sm", a),
            ...e
        })
    }, "CardHeader", 0, function({
        className: a,
        ...e
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-header",
            className: (0, t.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", a),
            ...e
        })
    }, "CardTitle", 0, function({
        className: a,
        ...e
    }) {
        return (0, r.jsx)("div", {
            "data-slot": "card-title",
            className: (0, t.cn)("leading-none font-semibold", a),
            ...e
        })
    }])
}, 82320, a => {
    "use strict";
    var r = a.i(43476);
    a.i(71645);
    var t = a.i(65828),
        e = a.i(33917);
    a.s(["default", 0, () => (0, r.jsx)(t.Card, {
        className: "border-emerald-900/30 shadow-lg bg-gradient-to-b from-emerald-950/30 to-transparent",
        children: (0, r.jsx)(t.CardContent, {
            className: "p-6 md:p-8",
            children: (0, r.jsx)(e.PricingTable, {
                checkoutProps: {
                    appearance: {
                        elements: {
                            drawerRoot: {
                                zIndex: 2e3
                            }
                        }
                    }
                }
            })
        })
    })])
}]);
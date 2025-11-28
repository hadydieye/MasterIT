module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/card.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardAction",
    ()=>CardAction,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('px-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])('flex items-center px-6 [.border-t]:pt-6', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/accordion.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Accordion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Accordion() from the server but Accordion is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx <module evaluation>", "Accordion");
const AccordionContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccordionContent() from the server but AccordionContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx <module evaluation>", "AccordionContent");
const AccordionItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccordionItem() from the server but AccordionItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx <module evaluation>", "AccordionItem");
const AccordionTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccordionTrigger() from the server but AccordionTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx <module evaluation>", "AccordionTrigger");
}),
"[project]/components/ui/accordion.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "Accordion",
    ()=>Accordion,
    "AccordionContent",
    ()=>AccordionContent,
    "AccordionItem",
    ()=>AccordionItem,
    "AccordionTrigger",
    ()=>AccordionTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Accordion = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Accordion() from the server but Accordion is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx", "Accordion");
const AccordionContent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccordionContent() from the server but AccordionContent is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx", "AccordionContent");
const AccordionItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccordionItem() from the server but AccordionItem is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx", "AccordionItem");
const AccordionTrigger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AccordionTrigger() from the server but AccordionTrigger is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/ui/accordion.tsx", "AccordionTrigger");
}),
"[project]/components/ui/accordion.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/data/trainings.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "trainingPrograms",
    ()=>trainingPrograms
]);
const focusLabel = (seed)=>seed.focus ?? seed.title;
const makeTestimonials = (seed, presets)=>presets.map((preset)=>({
            name: preset.name,
            role: preset.role,
            location: preset.location,
            rating: preset.rating,
            quote: preset.quote.replaceAll("{title}", seed.title).replaceAll("{focus}", focusLabel(seed))
        }));
const slugify = (value)=>value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
const testimonialPresets = {
    programming: [
        {
            name: "Souleymane Bah",
            role: "Développeur front",
            location: "Dakar",
            rating: 5,
            quote: "{title} m'a aidé à structurer mon offre autour de {focus} et à facturer mon premier client."
        },
        {
            name: "Mariam Koné",
            role: "Product builder",
            location: "Abidjan",
            rating: 4.8,
            quote: "Les revues de code et la checklist qualité {focus} m'ont permis de livrer sans stress."
        },
        {
            name: "Alpha Barry",
            role: "Freelance fullstack",
            location: "Conakry",
            rating: 4.9,
            quote: "Je présente désormais {focus} avec un portfolio clair grâce au plan proposé dans {title}."
        }
    ],
    data: [
        {
            name: "Fatima Camara",
            role: "Data analyst",
            location: "Conakry",
            rating: 4.9,
            quote: "{focus} n'était pas clair pour moi avant cette formation. Les labs et dashboards sont concrets."
        },
        {
            name: "Ismael Sy",
            role: "Backend engineer",
            location: "Dakar",
            rating: 4.8,
            quote: "J'ai optimisé nos requêtes en suivant les scripts fournis dans {title}."
        },
        {
            name: "Aïssata Diallo",
            role: "BI lead",
            location: "Bamako",
            rating: 4.7,
            quote: "Le projet final {focus} m'a donné un livrable prêt à montrer au COMEX."
        }
    ],
    ai: [
        {
            name: "Boubacar Keita",
            role: "Consultant IA",
            location: "Bamako",
            rating: 5,
            quote: "J'ai vendu un POC autour de {focus} en réutilisant les prompts et scripts du module 2."
        },
        {
            name: "Kadidiatou Diarra",
            role: "Content strategist",
            location: "Abidjan",
            rating: 4.9,
            quote: "Le framework ROI IA présenté dans {title} m'aide à convaincre mes clients."
        },
        {
            name: "Mory Camara",
            role: "Data analyst",
            location: "Conakry",
            rating: 4.8,
            quote: "Les agents {focus} tournent maintenant sur mes datasets internes grâce au support de Hady."
        }
    ],
    network: [
        {
            name: "Youssoufa Camara",
            role: "Admin réseau",
            location: "Conakry",
            rating: 5,
            quote: "Les labs {focus} sont exactement ce qu'il me fallait pour réussir mes audits."
        },
        {
            name: "Oumou Kaba",
            role: "Technicienne réseau",
            location: "Bamako",
            rating: 4.9,
            quote: "J'automatise désormais mes configs grâce aux playbooks fournis dans {title}."
        },
        {
            name: "Paul Kanga",
            role: "Ingénieur infra",
            location: "Abidjan",
            rating: 4.8,
            quote: "J'ai gagné en assurance pour documenter {focus} auprès de mon équipe."
        }
    ],
    linux: [
        {
            name: "Fatoumata Sow",
            role: "Admin système",
            location: "Dakar",
            rating: 4.9,
            quote: "Les scripts {focus} couvrent 80% de mes tâches quotidiennes."
        },
        {
            name: "Alexandre Tano",
            role: "DevOps junior",
            location: "Abidjan",
            rating: 4.8,
            quote: "Je peux enfin sécuriser mes serveurs grâce au plan pas à pas de {title}."
        },
        {
            name: "Binta Diallo",
            role: "Étudiante",
            location: "Conakry",
            rating: 4.7,
            quote: "Le module pratique {focus} m'a préparée pour mes entretiens."
        }
    ],
    devops: [
        {
            name: "Ismaël Koita",
            role: "DevOps freelance",
            location: "Nouakchott",
            rating: 5,
            quote: "{title} m'a donné un runbook clair pour industrialiser {focus}."
        },
        {
            name: "Fatoumata Diallo",
            role: "Ingénieure cloud",
            location: "Dakar",
            rating: 4.9,
            quote: "Les pipelines {focus} sont prêts à l'emploi, j'ai juste adapté mes variables."
        },
        {
            name: "Samba Barry",
            role: "Admin système",
            location: "Conakry",
            rating: 4.8,
            quote: "J'ai pu déployer une infra cliente complète en suivant {title}."
        }
    ],
    security: [
        {
            name: "Néné Bah",
            role: "Analyste cyber",
            location: "Conakry",
            rating: 5,
            quote: "Les labs {focus} sont directement connectés aux attentes CEH/pentest."
        },
        {
            name: "Abdoulaye Camara",
            role: "Consultant sécurité",
            location: "Bamako",
            rating: 4.9,
            quote: "J'ai ajouté une offre récurrente grâce au module reporting de {title}."
        },
        {
            name: "Mariam Barry",
            role: "Pentesteuse junior",
            location: "Dakar",
            rating: 4.9,
            quote: "En suivant {focus}, j'ai décroché mon premier contrat freelance."
        }
    ],
    business: [
        {
            name: "Hawa Traoré",
            role: "Coach mindset",
            location: "Abidjan",
            rating: 4.8,
            quote: "{title} m'a donné un plan éditorial précis pour vendre mon offre."
        },
        {
            name: "Alpha Sow",
            role: "Créateur YouTube",
            location: "Conakry",
            rating: 4.7,
            quote: "J'ai doublé mon CA après avoir appliqué la stratégie {focus} partagée."
        },
        {
            name: "Olivia Bamba",
            role: "Social media manager",
            location: "Bamako",
            rating: 4.8,
            quote: "Les scripts et tableaux de bord fournis rendent {focus} mesurable."
        }
    ],
    skills: [
        {
            name: "Mory Barry",
            role: "Assistant comptable",
            location: "Dakar",
            rating: 4.7,
            quote: "Je maîtrise maintenant {focus} au quotidien grâce aux ressources prêtes à l'emploi."
        },
        {
            name: "Oulimata Keita",
            role: "Assistante de direction",
            location: "Conakry",
            rating: 4.8,
            quote: "Le module pratique sur {title} a boosté ma productivité."
        },
        {
            name: "Adama Sène",
            role: "Étudiant",
            location: "Dakar",
            rating: 4.6,
            quote: "Je me sens légitime pour présenter {focus} dans mon CV."
        }
    ],
    trading: [
        {
            name: "Abdou Aziz Sow",
            role: "Trader Forex",
            location: "Dakar",
            rating: 4.8,
            quote: "Le journal fourni dans {title} m'aide à exécuter {focus} avec discipline."
        },
        {
            name: "Maimouna Cissé",
            role: "Crypto trader",
            location: "Abidjan",
            rating: 4.7,
            quote: "Les stratégies partagées pour {focus} sont actionnables dès la semaine 2."
        },
        {
            name: "Yaya Diallo",
            role: "Investisseur",
            location: "Conakry",
            rating: 4.7,
            quote: "Je combine désormais {focus} avec une gestion du risque rigoureuse."
        }
    ]
};
const programTemplates = {
    programming: {
        level: "Intermédiaire",
        duration: "6 semaines • projets guidés",
        price: 380000,
        rating: 4.85,
        students: 220,
        reviews: 64,
        image: "/react-nextjs-coding.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Lead fullstack & mentor MasterIT",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Maîtrise ${focus} en construisant une application complète, du design system au déploiement.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Installer une stack ${focus} prête pour la production`,
                "Structurer ton code avec des patterns et tests modernes",
                `Connecter ${focus} à des APIs, bases de données ou services temps réel`,
                "Optimiser performances, accessibilité et DX",
                `Documenter ${focus} pour convaincre clients ou recruteurs`,
                `Packager une offre autour de ${focus}`
            ];
        },
        requirements: ()=>[
                "Bases en algorithmique ou logique",
                "VS Code + Git installés",
                "8h de pratique par semaine"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: `Fondamentaux ${focus}`,
                    lessons: [
                        "Environnement VS Code & Git",
                        `${focus} patterns essentiels`,
                        "Qualité & tests rapides",
                        "Mini-projet guidé"
                    ]
                },
                {
                    title: "Projet encadré",
                    lessons: [
                        "Cadrage client",
                        "Sprints & revues",
                        "Tests end-to-end & monitoring",
                        "Déploiement & support"
                    ]
                },
                {
                    title: "Portfolio & offre",
                    lessons: [
                        "Documentation livrable",
                        "Pitch & storytelling",
                        "Tarification",
                        "Plan d'amélioration"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.programming)
    },
    data: {
        level: "Intermédiaire",
        duration: "4 semaines • labs data",
        price: 360000,
        rating: 4.83,
        students: 170,
        reviews: 48,
        image: "/data-science-machine-learning.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Consultant data & DBA freelance",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Passe de requêtes basiques à des livrables ${focus} optimisés et documentés.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Modéliser correctement tes schémas ${focus}`,
                "Écrire des requêtes avancées (CTE, fenêtres, agrégations)",
                "Automatiser migrations, backup et monitoring",
                "Construire des dashboards actionnables",
                "Mettre en place des contrôles de qualité data",
                `Présenter un plan de gouvernance autour de ${focus}`
            ];
        },
        requirements: ()=>[
                "Notions de SQL ou tableur",
                "Machine avec Docker/PostgreSQL ou Power BI",
                "Esprit analytique et rigueur"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Modélisation avancée",
                    lessons: [
                        "Diagrammes & normalisation",
                        `${focus} optimisation d'index`,
                        "Requêtes analytiques",
                        "Data quality checks"
                    ]
                },
                {
                    title: "Ops & automatisation",
                    lessons: [
                        "Migrations versionnées",
                        "Backups & réplication",
                        "Monitoring & alerting",
                        "Security & gouvernance"
                    ]
                },
                {
                    title: "Projet data",
                    lessons: [
                        "Collecte & nettoyage",
                        "Dashboard ou API",
                        "Storytelling",
                        "Plan d'amélioration"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.data)
    },
    ai: {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • ateliers live",
        price: 420000,
        rating: 4.9,
        students: 240,
        reviews: 72,
        image: "/artificial-intelligence-neural-network.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Consultant IA & créateur d'agents",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Active des assistants et automatisations ${focus} prêts à être vendus à des PME africaines.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Cartographier les cas d'usage ${focus}`,
                "Construire des prompts et évaluations reproductibles",
                "Connecter APIs, Make et WhatsApp à tes agents",
                "Créer un prototype visuel convaincant",
                "Définir un plan de gouvernance et sécurité IA",
                `Packager ton offre ${focus} avec un ROI clair`
            ];
        },
        requirements: ()=>[
                "Compte OpenAI/DeepSeek/Ollama",
                "Aisance avec Notion ou scripts légers",
                "Volonté de tester rapidement"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Fondamentaux LLM",
                    lessons: [
                        "Panorama modèles",
                        "Prompt factories",
                        "Évaluation & guardrails",
                        `${focus} stack overview`
                    ]
                },
                {
                    title: "Automatisation & agents",
                    lessons: [
                        "Make/Zapier + webhooks",
                        "Connecteurs WhatsApp",
                        "LangChain/Ollama",
                        "Prototype livrable"
                    ]
                },
                {
                    title: "Business & livraison",
                    lessons: [
                        "Diagnostic process",
                        "Offre & pricing",
                        "Contrats + SLA",
                        "Onboarding clients"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.ai)
    },
    network: {
        level: "Intermédiaire",
        duration: "7 semaines • labs Packet Tracer",
        price: 400000,
        rating: 4.88,
        students: 190,
        reviews: 55,
        image: "/cisco-networking-ccna.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Architecte réseau & formateur Cisco",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Monte des labs ${focus} complets et prépare des certifications avec un suivi serré.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Comprendre le modèle OSI/TCP-IP appliqué à ${focus}`,
                "Configurer switching/routing Cisco avec rigueur",
                "Automatiser sauvegardes & templates",
                "Sécuriser VLAN, ACL, VPN",
                "Documenter des topologies prêtes pour la prod",
                `Planifier ton passage de certification ${focus}`
            ];
        },
        requirements: ()=>[
                "Laptop pour Packet Tracer ou GNS3",
                "Notions IP de base",
                "Volonté de pratiquer"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Fondamentaux réseau",
                    lessons: [
                        "Adressage IPv4/v6",
                        "Subnetting express",
                        "Switching & VLAN",
                        "Sécurité physique & câblage"
                    ]
                },
                {
                    title: "Labs avancés",
                    lessons: [
                        "OSPF/EIGRP",
                        "Services DHCP/DNS",
                        `${focus} troubleshooting`,
                        "WAN & VPN"
                    ]
                },
                {
                    title: "Certification & automation",
                    lessons: [
                        "Simulations d'examen",
                        "Ansible & sauvegardes",
                        "Monitoring NetFlow",
                        "Plan d'étude"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.network)
    },
    linux: {
        level: "Intermédiaire",
        duration: "5 semaines • ateliers shell",
        price: 320000,
        rating: 4.86,
        students: 210,
        reviews: 61,
        image: "/linux-server-administration.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Admin système & DevSecOps",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Industrialise ${focus} avec des checklists, scripts et bonnes pratiques prêtes à l'emploi.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Maîtriser les commandes essentielles pour ${focus}`,
                "Automatiser tâches et audits via scripts",
                "Sécuriser services critiques (SSH, firewall)",
                "Superviser journaux & performances",
                "Créer une documentation d'exploitation",
                `Préparer des entretiens ops autour de ${focus}`
            ];
        },
        requirements: ()=>[
                "Machine Linux/WSL",
                "Notions de réseau",
                "Curiosité pour la ligne de commande"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Shell & productivité",
                    lessons: [
                        "Pipelines & regex",
                        "Scripts d'inventaire",
                        "Gestion de logs",
                        `${focus} exercices guidés`
                    ]
                },
                {
                    title: "Administration système",
                    lessons: [
                        "Systemd & services",
                        "Gestion utilisateurs & ACL",
                        "Stockage & backup",
                        "Automatisation Ansible"
                    ]
                },
                {
                    title: "Sécurité & monitoring",
                    lessons: [
                        "Hardening SSH",
                        "Firewall & fail2ban",
                        "Audit Lynis",
                        "Stack observabilité"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.linux)
    },
    devops: {
        level: "Intermédiaire",
        duration: "6 semaines • sprints infra",
        price: 520000,
        rating: 4.9,
        students: 140,
        reviews: 42,
        image: "/docker-kubernetes-devops.jpg",
        instructor: "Hady Dieye",
        instructorBio: "DevOps/Cloud pour startups africaines",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Déploie ${focus} avec une approche infra-as-code, monitoring et runbook complet.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Containeriser et sécuriser ${focus}`,
                "Automatiser CI/CD avec GitHub Actions",
                "Gérer secrets, observabilité et alerting",
                "Documenter un runbook client",
                "Optimiser coûts cloud",
                `Préparer une offre managed ${focus}`
            ];
        },
        requirements: ()=>[
                "Bases Linux",
                "Expérience dev ou infra",
                "Accès à une VM ou cloud"
            ],
        curriculum: ()=>[
                {
                    title: "Containerisation",
                    lessons: [
                        "Docker multi-stage",
                        "Registries & scan",
                        "Compose prod",
                        "Policies de sécurité"
                    ]
                },
                {
                    title: "Orchestration & cloud",
                    lessons: [
                        "Kubernetes k3s",
                        "Ingress & TLS",
                        "Terraform/IaC",
                        "Secrets & vault"
                    ]
                },
                {
                    title: "Ops & livraison",
                    lessons: [
                        "CI/CD GitHub Actions",
                        "Grafana/Loki",
                        "Runbook client",
                        "Handover + support"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.devops)
    },
    security: {
        level: "Intermédiaire à Avancé",
        duration: "8 semaines • labs offensifs",
        price: 550000,
        rating: 4.94,
        students: 160,
        reviews: 60,
        image: "/ethical-hacking-cybersecurity.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Pentester & consultant sécurité",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Monte un lab ${focus}, applique méthodo PTES/RedTeam et livre des rapports actionnables.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Préparer un environnement offensif ${focus}`,
                "Automatiser reconnaissance & exploitation",
                "Documenter preuves & plans d'action",
                "Pitcher une offre sécurité récurrente",
                "Industrialiser ton reporting",
                `Réutiliser des playbooks ${focus} sur tes missions`
            ];
        },
        requirements: ()=>[
                "Bases Linux & réseaux",
                "Machine dédiée ou lab virtuel",
                "Éthique irréprochable"
            ],
        curriculum: ()=>[
                {
                    title: "Recon & exploitation",
                    lessons: [
                        "OSINT & mapping",
                        "Scan/Rustscan",
                        "Exploits & privesc",
                        "Automation scripts"
                    ]
                },
                {
                    title: "Ciblage spécifique",
                    lessons: [
                        "Web/API pentest",
                        "AD & Red Team",
                        "Crypto & protocoles",
                        "Reporting structuré"
                    ]
                },
                {
                    title: "Offre & conformité",
                    lessons: [
                        "Modèles de rapport",
                        "Roadmap corrective",
                        "Pitch offre récurrente",
                        "Gestion client"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.security)
    },
    business: {
        level: "Débutant",
        duration: "4 semaines • coaching de groupe",
        price: 260000,
        rating: 4.8,
        students: 180,
        reviews: 58,
        image: "/digital-business-entrepreneur.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Créateur de contenus & formateur business",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Structure ton offre ${focus}, publie chaque semaine et monétise avec un plan simple.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Trouver un positionnement clair pour ${focus}`,
                "Construire un calendrier éditorial actionnable",
                "Automatiser acquisition via WhatsApp/mail",
                "Créer une offre irrésistible",
                "Suivre KPI (CA, conversion, audience)",
                `Pitcher ton offre ${focus} en live`
            ];
        },
        requirements: ()=>[
                "Être prêt à publier",
                "1h par jour pour exécuter",
                "Volonté de vendre"
            ],
        curriculum: ()=>[
                {
                    title: "Audience & contenu",
                    lessons: [
                        "Avatar client",
                        "Storytelling",
                        "Short-form & lives",
                        "CTA & automatisation"
                    ]
                },
                {
                    title: "Monétisation",
                    lessons: [
                        "Offre & pricing",
                        "Funnels simples",
                        "Automations WhatsApp",
                        "Email minimaliste"
                    ]
                },
                {
                    title: "Vente & suivi",
                    lessons: [
                        "Scripts DM",
                        "Onboarding clients",
                        "Tableau de bord KPI",
                        "Optimisation hebdo"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.business)
    },
    skills: {
        level: "Tous niveaux",
        duration: "3 semaines • ateliers pratiques",
        price: 200000,
        rating: 4.7,
        students: 210,
        reviews: 52,
        image: "/placeholder.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Formateur pluridisciplinaire",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Domine ${focus} avec des modèles prêts à l'emploi et un suivi WhatsApp.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Installer un workflow efficace autour de ${focus}`,
                "Pratiquer via des mini-projets hebdo",
                "Présenter ton travail dans un portfolio",
                "Gagner du temps grâce aux templates fournis",
                "Obtenir un feedback sur ton exécution",
                "Planifier ta progression après la formation"
            ];
        },
        requirements: ()=>[
                "Laptop opérationnel",
                "Motivation à pratiquer",
                "Connexion stable"
            ],
        curriculum: (seed)=>{
            const focus = focusLabel(seed);
            return [
                {
                    title: "Fondations",
                    lessons: [
                        "Outils & raccourcis",
                        `${focus} bonnes pratiques`,
                        "Livrables attendus",
                        "Checklist qualité"
                    ]
                },
                {
                    title: "Projets",
                    lessons: [
                        "Mini-projet hebdo",
                        "Feedback pair",
                        "Amélioration continue",
                        "Documentation simple"
                    ]
                },
                {
                    title: "Portfolio",
                    lessons: [
                        "Template Notion/Behance",
                        "Pitch oral",
                        "Plan 30 jours",
                        "Suivi personnalisé"
                    ]
                }
            ];
        },
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.skills)
    },
    trading: {
        level: "Intermédiaire",
        duration: "6 semaines • live trading",
        price: 450000,
        rating: 4.78,
        students: 150,
        reviews: 46,
        image: "/professional-trading-charts.jpg",
        instructor: "Hady Dieye",
        instructorBio: "Trader swing & coach financier",
        description: (seed)=>{
            const focus = focusLabel(seed);
            return `Structure ta stratégie ${focus} avec un journal, un plan de risque et des sessions live.`;
        },
        whatYouLearn: (seed)=>{
            const focus = focusLabel(seed);
            return [
                `Lire le marché et identifier les setups ${focus}`,
                "Construire un plan de gestion du risque",
                "Automatiser une partie des entrées via scripts/indicateurs",
                "Tenir un journal Notion détaillé",
                "Analyser tes KPI (winrate, RRR, drawdown)",
                "Préparer une stratégie d'augmentation de capital"
            ];
        },
        requirements: ()=>[
                "Compte démo ou réel régulé",
                "Discipline quotidienne",
                "Connexion fiable"
            ],
        curriculum: ()=>[
                {
                    title: "Fondamentaux marché",
                    lessons: [
                        "Structure & liquidité",
                        "Macro & news",
                        "Journalisation",
                        "Psychologie trader"
                    ]
                },
                {
                    title: "Stratégies",
                    lessons: [
                        "Setups intraday",
                        "Swing & position",
                        "Crypto/forex actions",
                        "Automatisation légère"
                    ]
                },
                {
                    title: "Discipline & scaling",
                    lessons: [
                        "Gestion du risque",
                        "Revues hebdo",
                        "Plan de montée en capital",
                        "Fiscalité & conformité"
                    ]
                }
            ],
        testimonials: (seed)=>makeTestimonials(seed, testimonialPresets.trading)
    }
};
const programSeeds = [
    // Programmation
    {
        title: "Programmation Python",
        category: "Programmation",
        template: "programming",
        focus: "Python moderne"
    },
    {
        title: "React.js Frontend Pro",
        category: "Programmation",
        template: "programming",
        focus: "React.js"
    },
    {
        title: "PHP & SQL Fullstack",
        category: "Programmation",
        template: "programming",
        focus: "stack PHP + SQL"
    },
    {
        title: "React Native Mobile Apps",
        category: "Programmation",
        template: "programming",
        focus: "React Native"
    },
    {
        title: "Formation Complète Développement Web",
        category: "Programmation",
        template: "programming",
        focus: "développement web full-stack"
    },
    {
        title: "TypeScript Mastery",
        category: "Programmation",
        template: "programming",
        focus: "TypeScript"
    },
    {
        title: "JavaScript, Node.js & Algorithmique",
        category: "Programmation",
        template: "programming",
        focus: "JavaScript & algorithmique"
    },
    {
        title: "Node.js Express JWT & Mongoose",
        category: "Programmation",
        template: "programming",
        focus: "API Node.js sécurisée"
    },
    {
        title: "Unity 3D Game Builder",
        category: "Programmation",
        template: "programming",
        focus: "Unity 3D"
    },
    {
        title: "Java Applications",
        category: "Programmation",
        template: "programming",
        focus: "Java moderne"
    },
    {
        title: "Langage C Systèmes",
        category: "Programmation",
        template: "programming",
        focus: "langage C bas niveau"
    },
    {
        title: "Django REST & Admin",
        category: "Programmation",
        template: "programming",
        focus: "Django"
    },
    {
        title: "C++ Haute Performance",
        category: "Programmation",
        template: "programming",
        focus: "C++"
    },
    {
        title: "Essentiels de VS Code",
        category: "Programmation",
        template: "programming",
        focus: "workflow VS Code"
    },
    {
        title: "PowerShell Automation",
        category: "Programmation",
        template: "programming",
        focus: "scripts PowerShell"
    },
    // Data & BI
    {
        title: "PostgreSQL Architecture",
        category: "Data & BI",
        template: "data",
        focus: "PostgreSQL"
    },
    {
        title: "Power BI Dashboards",
        category: "Data & BI",
        template: "data",
        focus: "Power BI"
    },
    {
        title: "Data Science & Machine Learning",
        category: "Data & BI",
        template: "data",
        focus: "data science & ML"
    },
    {
        title: "Bases de Données Modernes",
        category: "Data & BI",
        template: "data",
        focus: "bases SQL & NoSQL"
    },
    // DevOps & Cloud
    {
        title: "Amazon Web Services (AWS)",
        category: "DevOps & Cloud",
        template: "devops",
        focus: "AWS cloud"
    },
    {
        title: "Docker & Kubernetes",
        category: "DevOps & Cloud",
        template: "devops",
        focus: "Docker & Kubernetes"
    },
    // Intelligence Artificielle
    {
        title: "IA Fullstack avec Ollama",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "stack Ollama + LangChain"
    },
    {
        title: "ChatGPT & Midjourney Studio",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "ChatGPT & Midjourney"
    },
    {
        title: "Formation DeepSeek",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "DeepSeek"
    },
    {
        title: "Intégrer l'IA dans votre Business",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "transformation IA business"
    },
    {
        title: "NoCode & Perplexity Automations",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "NoCode & Perplexity"
    },
    {
        title: "Créer du Contenu à Succès avec l'IA",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "contenu IA"
    },
    {
        title: "Qualité Logicielle & IA avec ChatGPT",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "qualité logicielle assistée par IA"
    },
    {
        title: "LLMs & Agents Experts",
        category: "Intelligence Artificielle",
        template: "ai",
        focus: "LLMs avancés"
    },
    // Réseaux & Infrastructure
    {
        title: "CCNA Booster",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "CCNA"
    },
    {
        title: "Cisco Specialist",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "Cisco avancé"
    },
    {
        title: "Fondements des Réseaux",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "fondamentaux réseaux"
    },
    {
        title: "Protocoles OSI & TCP/IP",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "protocoles OSI & TCP/IP"
    },
    {
        title: "Administrateur Réseaux",
        category: "Réseaux & Infrastructure",
        template: "network",
        focus: "administration réseau"
    },
    // Linux & Systèmes
    {
        title: "Linux Shell Bash",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "Bash & scripting"
    },
    {
        title: "Linux Sécurité",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "sécurité Linux"
    },
    {
        title: "Commandes du Terminal",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "commandes terminal"
    },
    {
        title: "Linux de A à Z par la Pratique",
        category: "Linux & Systèmes",
        template: "linux",
        focus: "opérations Linux"
    },
    // Cybersécurité & Hacking
    {
        title: "Sécurité Réseaux",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "sécurité réseaux"
    },
    {
        title: "CEH v13",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "CEH v13"
    },
    {
        title: "Active Directory Red Team Lab",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "Active Directory Red Team"
    },
    {
        title: "Cybersécurité avec l'IA",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "cybersécurité + IA"
    },
    {
        title: "Ethical Hacking from Scratch",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "ethical hacking"
    },
    {
        title: "OpenSSL Cryptage des Données",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "OpenSSL & chiffrement"
    },
    {
        title: "Essentiel de Kali Linux",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "Kali Linux"
    },
    {
        title: "Hacking WordPress",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "WordPress pentest"
    },
    {
        title: "Wireshark Expert",
        category: "Cybersécurité & Hacking",
        template: "security",
        focus: "Wireshark"
    },
    // Business & Marketing
    {
        title: "Community Management Pro",
        category: "Business & Marketing",
        template: "business",
        focus: "community management"
    },
    {
        title: "Digital Marketing 360",
        category: "Business & Marketing",
        template: "business",
        focus: "marketing digital"
    },
    {
        title: "Dropshipping Accéléré",
        category: "Business & Marketing",
        template: "business",
        focus: "dropshipping"
    },
    {
        title: "E-commerce Rentable",
        category: "Business & Marketing",
        template: "business",
        focus: "e-commerce"
    },
    {
        title: "Créer & Administrer une Chaîne YouTube",
        category: "Business & Marketing",
        template: "business",
        focus: "gestion chaîne YouTube"
    },
    {
        title: "Shorts YouTube Rentables",
        category: "Business & Marketing",
        template: "business",
        focus: "shorts YouTube"
    },
    {
        title: "The Business Legion",
        category: "Business & Marketing",
        template: "business",
        focus: "The Business Legion"
    },
    // Compétences Complémentaires
    {
        title: "Comptabilité Générale",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "comptabilité"
    },
    {
        title: "Sage 100 Immobilisations",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Sage 100"
    },
    {
        title: "Anglais Professionnel",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "anglais business"
    },
    {
        title: "Figma Design Systems",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "design Figma"
    },
    {
        title: "Canva Créatif",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Canva"
    },
    {
        title: "Windows 11 Pro",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Windows 11"
    },
    {
        title: "Windows Server Administration",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Windows Server"
    },
    {
        title: "Suite Office Productivité",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "Microsoft Office"
    },
    {
        title: "Design UX/UI",
        category: "Compétences Complémentaires",
        template: "skills",
        focus: "UX/UI design"
    },
    // Trading & Finance
    {
        title: "Trading Crypto",
        category: "Trading & Finance",
        template: "trading",
        focus: "trading crypto"
    },
    {
        title: "Forex Pro",
        category: "Trading & Finance",
        template: "trading",
        focus: "trading Forex"
    },
    {
        title: "Smart Money Concepts (SMC)",
        category: "Trading & Finance",
        template: "trading",
        focus: "SMC"
    },
    {
        title: "Alti Trading",
        category: "Trading & Finance",
        template: "trading",
        focus: "Alti trading"
    },
    {
        title: "Investisseur Boursier",
        category: "Trading & Finance",
        template: "trading",
        focus: "investissement boursier"
    },
    {
        title: "Scalper Pro",
        category: "Trading & Finance",
        template: "trading",
        focus: "scalping pro"
    },
    {
        title: "Crypto Futures Mastery",
        category: "Trading & Finance",
        template: "trading",
        focus: "crypto futures"
    },
    {
        title: "Young Trader Forex Program",
        category: "Trading & Finance",
        template: "trading",
        focus: "Young Trader Forex"
    }
];
const imageMap = {
    "Programmation Python": "/images/Programmation Python.jpg",
    "React.js Frontend Pro": "/images/React.js Frontend Pro.jpg",
    "PHP & SQL Fullstack": "/images/PHP & SQL Fullstack.jpg",
    "React Native Mobile Apps": "/images/React Native Mobile Apps.jpg",
    "Formation Complète Développement Web": "/images/Formation Complète Développement Web.jpg",
    "TypeScript Mastery": "/images/TypeScript Mastery.jpg",
    "JavaScript, Node.js & Algorithmique": "/images/JavaScript, Node.js & Algorithmique.jpg",
    "Node.js Express JWT & Mongoose": "/images/Node.js Express JWT & Mongoose.jpg",
    "Unity 3D Game Builder": "/images/Unity 3D Game Builder.jpg",
    "Java Applications": "/images/Java Applications.jpg",
    "Langage C Systèmes": "/images/Langage C Systèmes.jpg",
    "Django REST & Admin": "/images/Django REST & Admin.jpg",
    "C++ Haute Performance": "/images/C++ Haute Performance.jpg",
    "Essentiels de VS Code": "/images/Essentiels de VS Code.jpg",
    "PowerShell Automation": "/images/PowerShell Automation.jpg",
    "PostgreSQL Architecture": "/images/PostgreSQL Architecture.jpg",
    "Power BI Dashboards": "/images/Power BI Dashboards.jpg",
    "Data Science & Machine Learning": "/images/Data Science & Machine Learning.jpg",
    "Bases de Données Modernes": "/images/Bases de Données Modernes.jpg",
    "Amazon Web Services (AWS)": "/images/Amazon Web Services (AWS).jpg",
    "Docker & Kubernetes": "/images/Docker & Kubernetes.jpg",
    "IA Fullstack avec Ollama": "/images/IA Fullstack avec Ollama.png",
    "ChatGPT & Midjourney Studio": "/images/ChatGPT & Midjourney Studio.jpg",
    "Formation DeepSeek": "/images/Formation DeepSeek.jpg",
    "Intégrer l'IA dans votre Business": "/images/Intégrer l'IA dans votre Business.jpg",
    "NoCode & Perplexity Automations": "/images/NoCode & Perplexity Automations.webp",
    "Créer du Contenu à Succès avec l'IA": "/images/Créer du Contenu à Succès avec l'IA.jpg",
    "Qualité Logicielle & IA avec ChatGPT": "/images/Qualité Logicielle & IA avec ChatGPT.jpg",
    "LLMs & Agents Experts": "/images/LLMs & Agents Experts.jpg",
    "CCNA Booster": "/images/CCNA Booster.jpg",
    "Cisco Specialist": "/images/Cisco Specialist.jpg",
    "Fondements des Réseaux": "/images/Fondements des Réseaux.jpg",
    "Protocoles OSI & TCP/IP": "/images/Protocoles OSI & TCP.jpg",
    "Administrateur Réseaux": "/images/Administrateur Réseaux.jpg",
    "Linux Shell Bash": "/images/Linux Shell Bash.jpg",
    "Linux Sécurité": "/images/Linux Sécurité.jpg",
    "Commandes du Terminal": "/images/Commandes du Terminal.jpg",
    "Linux de A à Z par la Pratique": "/images/Linux de A à Z par la Pratique.jpg",
    "Sécurité Réseaux": "/images/Sécurité Réseaux.jpg",
    "CEH v13": "/images/CEH v13.jpg",
    "Active Directory Red Team Lab": "/images/Active Directory Red Team Lab.jpg",
    "Cybersécurité avec l'IA": "/images/Cybersécurité avec l'IA.jpg",
    "Ethical Hacking from Scratch": "/images/Ethical Hacking from Scratch.jpg",
    "OpenSSL Cryptage des Données": "/images/OpenSSL Cryptage des Données.jpg",
    "Essentiel de Kali Linux": "/images/Essentiel de Kali Linux.jpg",
    "Hacking WordPress": "/images/Hacking WordPress.jpg",
    "Wireshark Expert": "/images/Wireshark Expert.jpg",
    "Community Management Pro": "/images/Community Management Pro.jpg",
    "Digital Marketing 360": "/images/Digital Marketing 360.jpg",
    "Dropshipping Accéléré": "/images/Dropshipping Accéléré.jpg",
    "E-commerce Rentable": "/images/E-commerce Rentable.jpg",
    "Créer & Administrer une Chaîne YouTube": "/images/Créer & Administrer une Chaîne YouTube.jpg",
    "Shorts YouTube Rentables": "/images/Shorts YouTube Rentables.jpg",
    "The Business Legion": "/images/The Business Legion.jpg",
    "Comptabilité Générale": "/images/Comptabilité Générale.jpg",
    "Sage 100 Immobilisations": "/images/Sage 100 Immobilisations.jpg",
    "Anglais Professionnel": "/images/Anglais Professionnel.jpg",
    "Figma Design Systems": "/images/Figma Design Systems.jpg",
    "Canva Créatif": "/images/Canva Créatif.jpg",
    "Windows 11 Pro": "/images/Windows 11 Pro.jpg",
    "Windows Server Administration": "/images/Windows Server Administration.jpg",
    "Suite Office Productivité": "/images/Suite Office Productivité.jpg",
    "Design UX/UI": "/images/Design UX.jpg",
    "Trading Crypto": "/images/Trading Crypto.jpg",
    "Forex Pro": "/images/Forex Pro.jpg",
    "Smart Money Concepts (SMC)": "/images/Smart Money Concepts (SMC).jpg",
    "Alti Trading": "/images/Alti Trading.jpg",
    "Investisseur Boursier": "/images/Investisseur Boursier.jpg",
    "Scalper Pro": "/images/Scalper Pro.jpg",
    "Crypto Futures Mastery": "/images/Crypto Futures Mastery.jpg",
    "Young Trader Forex Program": "/images/Young Trader Forex Program.jpg"
};
const metadataOverrides = {
    "Programmation Python": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • ateliers pratiques",
        price: 300000,
        rating: 4.86,
        students: 320,
        reviews: 95
    },
    "React.js Frontend Pro": {
        level: "Intermédiaire",
        duration: "6 semaines • projets web",
        price: 360000,
        rating: 4.9,
        students: 280,
        reviews: 98
    },
    "PHP & SQL Fullstack": {
        level: "Intermédiaire",
        duration: "6 semaines • coaching hybride",
        price: 340000,
        rating: 4.82,
        students: 210,
        reviews: 72
    },
    "React Native Mobile Apps": {
        level: "Intermédiaire",
        duration: "6 semaines • web + mobile",
        price: 370000,
        rating: 4.88,
        students: 190,
        reviews: 68
    },
    "Formation Complète Développement Web": {
        level: "Débutant à Intermédiaire",
        duration: "7 semaines • bootcamp mixte",
        price: 360000,
        rating: 4.84,
        students: 260,
        reviews: 85
    },
    "TypeScript Mastery": {
        level: "Intermédiaire",
        duration: "5 semaines • focus typage",
        price: 320000,
        rating: 4.83,
        students: 170,
        reviews: 58
    },
    "JavaScript, Node.js & Algorithmique": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • sprints intensifs",
        price: 310000,
        rating: 4.78,
        students: 240,
        reviews: 77
    },
    "Node.js Express JWT & Mongoose": {
        level: "Intermédiaire",
        duration: "5 semaines • API sécurisées",
        price: 330000,
        rating: 4.85,
        students: 200,
        reviews: 66
    },
    "Unity 3D Game Builder": {
        level: "Intermédiaire",
        duration: "6 semaines • studio guidé",
        price: 340000,
        rating: 4.8,
        students: 150,
        reviews: 52
    },
    "Java Applications": {
        level: "Intermédiaire",
        duration: "6 semaines • services Java",
        price: 330000,
        rating: 4.79,
        students: 180,
        reviews: 60
    },
    "Langage C Systèmes": {
        level: "Avancé",
        duration: "6 semaines • bas niveau",
        price: 320000,
        rating: 4.76,
        students: 140,
        reviews: 49
    },
    "Django REST & Admin": {
        level: "Intermédiaire",
        duration: "5 semaines • projets clients",
        price: 330000,
        rating: 4.87,
        students: 205,
        reviews: 71
    },
    "C++ Haute Performance": {
        level: "Avancé",
        duration: "6 semaines • optimisation",
        price: 340000,
        rating: 4.75,
        students: 130,
        reviews: 45
    },
    "Essentiels de VS Code": {
        level: "Tous niveaux",
        duration: "3 semaines • workflows",
        price: 200000,
        rating: 4.74,
        students: 360,
        reviews: 80
    },
    "PowerShell Automation": {
        level: "Intermédiaire",
        duration: "4 semaines • scripts IT",
        price: 260000,
        rating: 4.77,
        students: 150,
        reviews: 48
    },
    "PostgreSQL Architecture": {
        level: "Intermédiaire",
        duration: "5 semaines • labs data",
        price: 340000,
        rating: 4.85,
        students: 180,
        reviews: 62
    },
    "Power BI Dashboards": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • ateliers BI",
        price: 300000,
        rating: 4.82,
        students: 210,
        reviews: 70
    },
    "Data Science & Machine Learning": {
        level: "Intermédiaire à Avancé",
        duration: "6 semaines • projets ML",
        price: 380000,
        rating: 4.88,
        students: 190,
        reviews: 73
    },
    "Bases de Données Modernes": {
        level: "Intermédiaire",
        duration: "4 semaines • SQL + NoSQL",
        price: 320000,
        rating: 4.79,
        students: 175,
        reviews: 58
    },
    "Amazon Web Services (AWS)": {
        level: "Intermédiaire",
        duration: "6 semaines • labs cloud",
        price: 380000,
        rating: 4.87,
        students: 165,
        reviews: 57
    },
    "Docker & Kubernetes": {
        level: "Intermédiaire",
        duration: "6 semaines • sprints infra",
        price: 370000,
        rating: 4.9,
        students: 180,
        reviews: 64
    },
    "IA Fullstack avec Ollama": {
        level: "Intermédiaire",
        duration: "5 semaines • agents locaux",
        price: 380000,
        rating: 4.92,
        students: 210,
        reviews: 78
    },
    "ChatGPT & Midjourney Studio": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • ateliers créa",
        price: 320000,
        rating: 4.85,
        students: 260,
        reviews: 90
    },
    "Formation DeepSeek": {
        level: "Intermédiaire",
        duration: "4 semaines • modèles open",
        price: 320000,
        rating: 4.8,
        students: 150,
        reviews: 50
    },
    "Intégrer l'IA dans votre Business": {
        level: "Managers & dirigeants",
        duration: "4 semaines • coaching exec",
        price: 400000,
        rating: 4.88,
        students: 120,
        reviews: 42
    },
    "NoCode & Perplexity Automations": {
        level: "Débutant",
        duration: "4 semaines • ateliers nocode",
        price: 300000,
        rating: 4.81,
        students: 230,
        reviews: 69
    },
    "Créer du Contenu à Succès avec l'IA": {
        level: "Débutant",
        duration: "3 semaines • studio contenu",
        price: 260000,
        rating: 4.76,
        students: 280,
        reviews: 75
    },
    "Qualité Logicielle & IA avec ChatGPT": {
        level: "Intermédiaire",
        duration: "5 semaines • QA assistée",
        price: 340000,
        rating: 4.84,
        students: 160,
        reviews: 55
    },
    "LLMs & Agents Experts": {
        level: "Avancé",
        duration: "5 semaines • RAG & agents",
        price: 380000,
        rating: 4.9,
        students: 140,
        reviews: 52
    },
    "CCNA Booster": {
        level: "Intermédiaire",
        duration: "7 semaines • labs Packet Tracer",
        price: 360000,
        rating: 4.9,
        students: 200,
        reviews: 70
    },
    "Cisco Specialist": {
        level: "Avancé",
        duration: "6 semaines • configs avancées",
        price: 370000,
        rating: 4.85,
        students: 150,
        reviews: 53
    },
    "Fondements des Réseaux": {
        level: "Débutant",
        duration: "4 semaines • bases solides",
        price: 280000,
        rating: 4.8,
        students: 260,
        reviews: 88
    },
    "Protocoles OSI & TCP/IP": {
        level: "Intermédiaire",
        duration: "4 semaines • focus protocoles",
        price: 300000,
        rating: 4.78,
        students: 190,
        reviews: 60
    },
    "Administrateur Réseaux": {
        level: "Intermédiaire",
        duration: "6 semaines • projets terrains",
        price: 360000,
        rating: 4.84,
        students: 170,
        reviews: 58
    },
    "Linux Shell Bash": {
        level: "Débutant",
        duration: "4 semaines • scripts quotidiens",
        price: 260000,
        rating: 4.82,
        students: 220,
        reviews: 67
    },
    "Linux Sécurité": {
        level: "Intermédiaire",
        duration: "5 semaines • hardening",
        price: 320000,
        rating: 4.85,
        students: 180,
        reviews: 63
    },
    "Commandes du Terminal": {
        level: "Débutant",
        duration: "3 semaines • immersion CLI",
        price: 220000,
        rating: 4.74,
        students: 300,
        reviews: 70
    },
    "Linux de A à Z par la Pratique": {
        level: "Débutant à Intermédiaire",
        duration: "6 semaines • parcours complet",
        price: 330000,
        rating: 4.83,
        students: 210,
        reviews: 66
    },
    "Sécurité Réseaux": {
        level: "Intermédiaire",
        duration: "5 semaines • ateliers sécurité",
        price: 340000,
        rating: 4.86,
        students: 190,
        reviews: 64
    },
    "CEH v13": {
        level: "Avancé",
        duration: "6 semaines • préparation certif",
        price: 380000,
        rating: 4.88,
        students: 150,
        reviews: 55
    },
    "Active Directory Red Team Lab": {
        level: "Avancé",
        duration: "6 semaines • lab AD",
        price: 380000,
        rating: 4.9,
        students: 130,
        reviews: 48
    },
    "Cybersécurité avec l'IA": {
        level: "Intermédiaire",
        duration: "5 semaines • IA + défense",
        price: 340000,
        rating: 4.82,
        students: 160,
        reviews: 54
    },
    "Ethical Hacking from Scratch": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • labs guidés",
        price: 320000,
        rating: 4.8,
        students: 210,
        reviews: 69
    },
    "OpenSSL Cryptage des Données": {
        level: "Intermédiaire",
        duration: "4 semaines • crypto appliquée",
        price: 300000,
        rating: 4.76,
        students: 140,
        reviews: 47
    },
    "Essentiel de Kali Linux": {
        level: "Débutant",
        duration: "4 semaines • outils offensifs",
        price: 280000,
        rating: 4.78,
        students: 220,
        reviews: 71
    },
    "Hacking WordPress": {
        level: "Intermédiaire",
        duration: "4 semaines • pentest web",
        price: 300000,
        rating: 4.75,
        students: 160,
        reviews: 52
    },
    "Wireshark Expert": {
        level: "Intermédiaire",
        duration: "4 semaines • analyse réseau",
        price: 300000,
        rating: 4.77,
        students: 150,
        reviews: 49
    },
    "Community Management Pro": {
        level: "Débutant",
        duration: "4 semaines • accompagnement",
        price: 260000,
        rating: 4.8,
        students: 300,
        reviews: 88
    },
    "Digital Marketing 360": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • plan 360°",
        price: 300000,
        rating: 4.82,
        students: 260,
        reviews: 80
    },
    "Dropshipping Accéléré": {
        level: "Débutant",
        duration: "4 semaines • lancement",
        price: 280000,
        rating: 4.76,
        students: 230,
        reviews: 69
    },
    "E-commerce Rentable": {
        level: "Intermédiaire",
        duration: "5 semaines • coaching boutique",
        price: 320000,
        rating: 4.8,
        students: 210,
        reviews: 66
    },
    "Créer & Administrer une Chaîne YouTube": {
        level: "Débutant",
        duration: "4 semaines • studio vidéo",
        price: 280000,
        rating: 4.79,
        students: 240,
        reviews: 72
    },
    "Shorts YouTube Rentables": {
        level: "Débutant",
        duration: "3 semaines • contenu court",
        price: 240000,
        rating: 4.77,
        students: 260,
        reviews: 75
    },
    "The Business Legion": {
        level: "Intermédiaire",
        duration: "5 semaines • offre premium",
        price: 320000,
        rating: 4.84,
        students: 180,
        reviews: 60
    },
    "Comptabilité Générale": {
        level: "Débutant",
        duration: "4 semaines • exercices réels",
        price: 260000,
        rating: 4.78,
        students: 220,
        reviews: 68
    },
    "Sage 100 Immobilisations": {
        level: "Intermédiaire",
        duration: "4 semaines • cas pratiques",
        price: 300000,
        rating: 4.8,
        students: 160,
        reviews: 55
    },
    "Anglais Professionnel": {
        level: "Tous niveaux",
        duration: "4 semaines • coaching live",
        price: 240000,
        rating: 4.76,
        students: 280,
        reviews: 73
    },
    "Figma Design Systems": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • studio UI",
        price: 280000,
        rating: 4.81,
        students: 210,
        reviews: 67
    },
    "Canva Créatif": {
        level: "Débutant",
        duration: "3 semaines • packs social media",
        price: 220000,
        rating: 4.75,
        students: 310,
        reviews: 76
    },
    "Windows 11 Pro": {
        level: "Débutant",
        duration: "3 semaines • productivité",
        price: 220000,
        rating: 4.73,
        students: 260,
        reviews: 62
    },
    "Windows Server Administration": {
        level: "Intermédiaire",
        duration: "5 semaines • labs AD",
        price: 320000,
        rating: 4.79,
        students: 170,
        reviews: 58
    },
    "Suite Office Productivité": {
        level: "Débutant",
        duration: "4 semaines • cas business",
        price: 240000,
        rating: 4.74,
        students: 300,
        reviews: 70
    },
    "Design UX/UI": {
        level: "Débutant à Intermédiaire",
        duration: "4 semaines • ateliers design",
        price: 300000,
        rating: 4.8,
        students: 200,
        reviews: 65
    },
    "Trading Crypto": {
        level: "Intermédiaire",
        duration: "6 semaines • live trading",
        price: 360000,
        rating: 4.78,
        students: 160,
        reviews: 56
    },
    "Forex Pro": {
        level: "Intermédiaire",
        duration: "6 semaines • sessions quotidiennes",
        price: 360000,
        rating: 4.82,
        students: 170,
        reviews: 58
    },
    "Smart Money Concepts (SMC)": {
        level: "Avancé",
        duration: "6 semaines • SMC & orderflow",
        price: 380000,
        rating: 4.85,
        students: 150,
        reviews: 52
    },
    "Alti Trading": {
        level: "Intermédiaire",
        duration: "5 semaines • stratégies swing",
        price: 340000,
        rating: 4.76,
        students: 140,
        reviews: 47
    },
    "Investisseur Boursier": {
        level: "Débutant à Intermédiaire",
        duration: "5 semaines • portefeuille",
        price: 320000,
        rating: 4.74,
        students: 180,
        reviews: 55
    },
    "Scalper Pro": {
        level: "Avancé",
        duration: "5 semaines • exécution rapide",
        price: 360000,
        rating: 4.79,
        students: 130,
        reviews: 44
    },
    "Crypto Futures Mastery": {
        level: "Intermédiaire",
        duration: "5 semaines • derivatives",
        price: 350000,
        rating: 4.77,
        students: 150,
        reviews: 48
    },
    "Young Trader Forex Program": {
        level: "Débutant",
        duration: "5 semaines • coaching jeunes",
        price: 300000,
        rating: 4.73,
        students: 190,
        reviews: 60
    }
};
const trainingPrograms = programSeeds.reduce((acc, seed)=>{
    const template = programTemplates[seed.template];
    const id = seed.id ?? slugify(seed.title);
    const overrides = metadataOverrides[seed.title] ?? {};
    acc[id] = {
        id,
        title: seed.title,
        category: seed.category,
        level: overrides.level ?? seed.level ?? template.level,
        duration: overrides.duration ?? seed.duration ?? template.duration,
        price: overrides.price ?? seed.price ?? template.price,
        rating: overrides.rating ?? seed.rating ?? template.rating,
        students: overrides.students ?? seed.students ?? template.students,
        reviews: overrides.reviews ?? seed.reviews ?? template.reviews,
        image: seed.image ?? imageMap[seed.title] ?? template.image,
        description: template.description(seed),
        instructor: template.instructor,
        instructorBio: template.instructorBio,
        whatYouLearn: template.whatYouLearn(seed),
        requirements: template.requirements(seed),
        curriculum: template.curriculum(seed),
        testimonials: template.testimonials(seed)
    };
    return acc;
}, {});
}),
"[project]/app/formations/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TrainingDetailPage,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/accordion.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-rsc] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-rsc] (ecmascript) <export default as BarChart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-rsc] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-rsc] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-rsc] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-rsc] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$trainings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/trainings.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
function generateStaticParams() {
    return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$trainings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trainingPrograms"]).map((id)=>({
            id
        }));
}
async function TrainingDetailPage({ params }) {
    const { id } = await params;
    const training = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$trainings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trainingPrograms"][id];
    const totalPrograms = Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$trainings$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["trainingPrograms"]).length;
    if (!training) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "224611353456";
    const whatsappMessage = encodeURIComponent(`Bonjour MasterIT, je suis intéressé par la formation "${training.title}". Pouvez-vous me donner plus d'informations ?`);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen pt-24 pb-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-2 space-y-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        className: "mb-4",
                                        children: training.category
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl md:text-5xl font-bold mb-4 text-balance",
                                        children: training.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-muted-foreground mb-6 text-pretty",
                                        children: training.description
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-6 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                        className: "h-5 w-5 fill-yellow-500 text-yellow-500"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-semibold",
                                                        children: training.rating
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 42,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: [
                                                            "(",
                                                            training.reviews,
                                                            " avis)"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 43,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 19
                                                    }, this),
                                                    training.students.toLocaleString(),
                                                    " étudiants"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this),
                                                    training.duration
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-muted-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"], {
                                                        className: "h-5 w-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 54,
                                                        columnNumber: 19
                                                    }, this),
                                                    training.level
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative aspect-video rounded-lg overflow-hidden bg-muted",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: training.image || "/placeholder.svg",
                                        alt: training.title,
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/30",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "lg",
                                            className: "rounded-full h-16 w-16 p-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                className: "h-8 w-8"
                                            }, void 0, false, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Ce que tu vas apprendre"
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-3",
                                        children: training.whatYouLearn.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                        className: "h-5 w-5 text-accent flex-shrink-0 mt-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm leading-relaxed",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-4",
                                        children: "Prérequis"
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: training.requirements.map((req, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-primary",
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm leading-relaxed",
                                                        children: req
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6",
                                        children: "Programme de la formation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Accordion"], {
                                        type: "single",
                                        collapsible: true,
                                        className: "w-full",
                                        children: training.curriculum.map((section, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                value: `section-${index}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                        className: "text-left",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        "Section ",
                                                                        index + 1,
                                                                        ": ",
                                                                        section.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 109,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    variant: "secondary",
                                                                    children: [
                                                                        section.lessons.length,
                                                                        " leçons"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 108,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-2 mt-2",
                                                            children: section.lessons.map((lesson, lessonIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "flex items-center gap-3 py-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                                            className: "h-4 w-4 text-muted-foreground"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                                            lineNumber: 119,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm",
                                                                            children: lesson
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                                            lineNumber: 120,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, lessonIndex, true, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 118,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 106,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6",
                                        children: "Ton instructeur"
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white",
                                                children: training.instructor.charAt(0)
                                            }, void 0, false, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 134,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-xl font-bold",
                                                        children: training.instructor
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-muted-foreground",
                                                        children: training.instructorBio
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-4 pt-4 border-t",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-primary",
                                                        children: training.rating
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Note moyenne"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-primary",
                                                        children: totalPrograms
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Programmes actifs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-2xl font-bold text-primary",
                                                        children: "1.2K"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-sm text-muted-foreground",
                                                        children: "Élèves accompagnés"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 153,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                className: "p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl font-bold mb-6",
                                        children: "Avis des étudiants"
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: training.testimonials.map((review, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border-b pb-6 last:border-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-white",
                                                            children: review.name.charAt(0)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2 mb-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-semibold",
                                                                            children: review.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-muted-foreground uppercase tracking-wide",
                                                                            children: review.role
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                                            lineNumber: 171,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-1 text-muted-foreground text-xs",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                                    className: "h-3 w-3"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                                    lineNumber: 173,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                review.location
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 169,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-1 mb-2",
                                                                    children: [
                                                                        Array.from({
                                                                            length: 5
                                                                        }).map((_, starIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                className: `h-4 w-4 ${starIndex < Math.round(review.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`
                                                                            }, `${review.name}-${starIndex}`, false, {
                                                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                                                lineNumber: 179,
                                                                                columnNumber: 29
                                                                            }, this)),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-muted-foreground",
                                                                            children: review.rating.toFixed(1)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                                            lineNumber: 184,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 177,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-muted-foreground leading-relaxed",
                                                                    children: [
                                                                        '"',
                                                                        review.quote,
                                                                        '"'
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 25
                                                                }, this),
                                                                index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-primary mt-2",
                                                                    children: "Validation scriptsensei : retour partagé après relecture de livrables réels."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 168,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                    lineNumber: 164,
                                                    columnNumber: 21
                                                }, this)
                                            }, review.name, false, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                        lineNumber: 161,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/formations/[id]/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/formations/[id]/page.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-6 sticky top-24 space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-3xl font-bold text-primary mb-1",
                                            children: [
                                                training.price.toLocaleString(),
                                                " GNF"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-muted-foreground",
                                            children: "Paiement unique"
                                        }, void 0, false, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                    lineNumber: 203,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full",
                                            size: "lg",
                                            children: "S'inscrire maintenant"
                                        }, void 0, false, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            asChild: true,
                                            variant: "outline",
                                            className: "w-full bg-transparent",
                                            size: "lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/whatsapp-icon.png",
                                                        alt: "WhatsApp",
                                                        width: 16,
                                                        height: 16,
                                                        className: "mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/formations/[id]/page.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Contacter sur WhatsApp"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/formations/[id]/page.tsx",
                                                lineNumber: 213,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t pt-6 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold mb-3",
                                            children: "Cette formation inclut :"
                                        }, void 0, false, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 225,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                            className: "h-5 w-5 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: training.duration
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                    lineNumber: 227,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            className: "h-5 w-5 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Ressources téléchargeables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                            className: "h-5 w-5 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Certificat de fin de formation"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-5 w-5 text-muted-foreground"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Accès à vie"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                    lineNumber: 239,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/whatsapp-icon.png",
                                                            alt: "WhatsApp",
                                                            width: 16,
                                                            height: 16,
                                                            className: "mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Support communautaire"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                                            lineNumber: 245,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                    lineNumber: 224,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "ghost",
                                    className: "w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                            className: "h-4 w-4 mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/formations/[id]/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, this),
                                        "Partager cette formation"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/formations/[id]/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/formations/[id]/page.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/formations/[id]/page.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/formations/[id]/page.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/formations/[id]/page.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/formations/[id]/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/formations/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/formations/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f7fd938._.js.map
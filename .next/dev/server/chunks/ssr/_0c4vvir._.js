module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/lib/currencies.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Single source of truth for all currency/asset data across the project.
// Import from here — never define currencies locally in components.
// ── Types ─────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "ALL_RECEIVE_ASSETS",
    ()=>ALL_RECEIVE_ASSETS,
    "CURRENCY_GROUPS",
    ()=>CURRENCY_GROUPS,
    "OVERVIEW_TAGS",
    ()=>OVERVIEW_TAGS,
    "SEND_ASSETS",
    ()=>SEND_ASSETS,
    "TAG_TO_CURRENCY",
    ()=>TAG_TO_CURRENCY
]);
const CURRENCY_GROUPS = {
    crypto: [
        {
            id: "usdt",
            name: "USDT",
            fullName: "Tether",
            detail: "TRC20",
            color: "#26a17b",
            icon: "₮",
            subItems: [
                {
                    id: "usdt-trc20",
                    name: "USDT",
                    detail: "TRC20",
                    fullName: "Tether"
                },
                {
                    id: "usdt-erc20",
                    name: "USDT",
                    detail: "ERC20",
                    fullName: "Tether"
                },
                {
                    id: "usdt-bep20",
                    name: "USDT",
                    detail: "BEP20",
                    fullName: "Tether"
                },
                {
                    id: "usdt-polygon",
                    name: "USDT",
                    detail: "Polygon",
                    fullName: "Tether"
                },
                {
                    id: "usdt-arbitrum",
                    name: "USDT",
                    detail: "Arbitrum",
                    fullName: "Tether"
                }
            ]
        },
        {
            id: "usdc",
            name: "USDC",
            fullName: "USD Coin",
            detail: "ERC20",
            color: "#2775ca",
            icon: "$",
            subItems: [
                {
                    id: "usdc-erc20",
                    name: "USDC",
                    detail: "ERC20",
                    fullName: "USD Coin"
                },
                {
                    id: "usdc-bep20",
                    name: "USDC",
                    detail: "BEP20",
                    fullName: "USD Coin"
                },
                {
                    id: "usdc-polygon",
                    name: "USDC",
                    detail: "Polygon",
                    fullName: "USD Coin"
                }
            ]
        },
        {
            id: "btc",
            name: "BTC",
            fullName: "Bitcoin",
            detail: "Bitcoin",
            color: "#f7931a",
            icon: "₿",
            subItems: [
                {
                    id: "btc-btc",
                    name: "BTC",
                    detail: "Bitcoin",
                    fullName: "Bitcoin"
                },
                {
                    id: "btc-lightning",
                    name: "BTC",
                    detail: "Lightning",
                    fullName: "Bitcoin"
                }
            ]
        },
        {
            id: "eth",
            name: "ETH",
            fullName: "Ethereum",
            detail: "Ethereum",
            color: "#627eea",
            icon: "Ξ",
            subItems: [
                {
                    id: "eth-eth",
                    name: "ETH",
                    detail: "Ethereum",
                    fullName: "Ethereum"
                },
                {
                    id: "eth-arbitrum",
                    name: "ETH",
                    detail: "Arbitrum",
                    fullName: "Ethereum"
                }
            ]
        },
        {
            id: "ltc",
            name: "LTC",
            fullName: "Litecoin",
            detail: "Litecoin",
            color: "#b0aeae",
            icon: "Ł",
            subItems: [
                {
                    id: "ltc-ltc",
                    name: "LTC",
                    detail: "Litecoin",
                    fullName: "Litecoin"
                }
            ]
        },
        {
            id: "bnb",
            name: "BNB",
            fullName: "BNB Chain",
            detail: "BEP20",
            color: "#f3ba2f",
            icon: "B",
            subItems: [
                {
                    id: "bnb-bep20",
                    name: "BNB",
                    detail: "BEP20",
                    fullName: "BNB Chain"
                }
            ]
        },
        {
            id: "sol",
            name: "SOL",
            fullName: "Solana",
            detail: "Solana",
            color: "#9945ff",
            icon: "◎",
            subItems: [
                {
                    id: "sol-sol",
                    name: "SOL",
                    detail: "Solana",
                    fullName: "Solana"
                }
            ]
        },
        {
            id: "ton",
            name: "TON",
            fullName: "Toncoin",
            detail: "TON",
            color: "#0098ea",
            icon: "◈",
            subItems: [
                {
                    id: "ton-ton",
                    name: "TON",
                    detail: "TON",
                    fullName: "Toncoin"
                }
            ]
        },
        {
            id: "trx",
            name: "TRX",
            fullName: "Tron",
            detail: "Tron",
            color: "#e84142",
            icon: "T",
            subItems: [
                {
                    id: "trx-trx",
                    name: "TRX",
                    detail: "Tron",
                    fullName: "Tron"
                }
            ]
        },
        {
            id: "xrp",
            name: "XRP",
            fullName: "Ripple",
            detail: "Ripple",
            color: "#346aa9",
            icon: "✕",
            subItems: [
                {
                    id: "xrp-xrp",
                    name: "XRP",
                    detail: "Ripple",
                    fullName: "Ripple"
                }
            ]
        },
        {
            id: "doge",
            name: "DOGE",
            fullName: "Dogecoin",
            detail: "Dogecoin",
            color: "#c2a633",
            icon: "Ð",
            subItems: [
                {
                    id: "doge-doge",
                    name: "DOGE",
                    detail: "Dogecoin",
                    fullName: "Dogecoin"
                }
            ]
        },
        {
            id: "not",
            name: "NOT",
            fullName: "Notcoin",
            detail: "TON",
            color: "#f5a623",
            icon: "N",
            subItems: [
                {
                    id: "not-ton",
                    name: "NOT",
                    detail: "TON",
                    fullName: "Notcoin"
                }
            ]
        },
        {
            id: "matic",
            name: "POL",
            fullName: "Polygon",
            detail: "Polygon",
            color: "#8247e5",
            icon: "P",
            subItems: [
                {
                    id: "matic-polygon",
                    name: "POL",
                    detail: "Polygon",
                    fullName: "Polygon"
                }
            ]
        }
    ],
    cash: [
        {
            id: "usd-green-cash",
            name: "USD Green",
            fullName: "US Dollar Green",
            detail: "Cash",
            color: "#15803d",
            icon: "$",
            subItems: [
                {
                    id: "cash-usd-green-kyiv",
                    name: "USD Green",
                    detail: "Kyiv",
                    fullName: "US Dollar Green"
                },
                {
                    id: "cash-usd-green-kharkiv",
                    name: "USD Green",
                    detail: "Kharkiv",
                    fullName: "US Dollar Green"
                },
                {
                    id: "cash-usd-green-odesa",
                    name: "USD Green",
                    detail: "Odesa",
                    fullName: "US Dollar Green"
                },
                {
                    id: "cash-usd-green-dnipro",
                    name: "USD Green",
                    detail: "Dnipro",
                    fullName: "US Dollar Green"
                },
                {
                    id: "cash-usd-green-lviv",
                    name: "USD Green",
                    detail: "Lviv",
                    fullName: "US Dollar Green"
                },
                {
                    id: "cash-usd-green-zaporizhzhia",
                    name: "USD Green",
                    detail: "Zaporizhzhia",
                    fullName: "US Dollar Green"
                },
                {
                    id: "cash-usd-green-warsaw",
                    name: "USD Green",
                    detail: "Warsaw",
                    fullName: "US Dollar Green"
                }
            ]
        },
        {
            id: "usd-blue-cash",
            name: "USD Blue",
            fullName: "US Dollar Blue",
            detail: "Cash",
            color: "#2563eb",
            icon: "$",
            subItems: [
                {
                    id: "cash-usd-blue-kyiv",
                    name: "USD Blue",
                    detail: "Kyiv",
                    fullName: "US Dollar Blue"
                },
                {
                    id: "cash-usd-blue-kharkiv",
                    name: "USD Blue",
                    detail: "Kharkiv",
                    fullName: "US Dollar Blue"
                },
                {
                    id: "cash-usd-blue-odesa",
                    name: "USD Blue",
                    detail: "Odesa",
                    fullName: "US Dollar Blue"
                },
                {
                    id: "cash-usd-blue-dnipro",
                    name: "USD Blue",
                    detail: "Dnipro",
                    fullName: "US Dollar Blue"
                },
                {
                    id: "cash-usd-blue-lviv",
                    name: "USD Blue",
                    detail: "Lviv",
                    fullName: "US Dollar Blue"
                },
                {
                    id: "cash-usd-blue-zaporizhzhia",
                    name: "USD Blue",
                    detail: "Zaporizhzhia",
                    fullName: "US Dollar Blue"
                },
                {
                    id: "cash-usd-blue-warsaw",
                    name: "USD Blue",
                    detail: "Warsaw",
                    fullName: "US Dollar Blue"
                }
            ]
        },
        {
            id: "eur-cash",
            name: "EUR",
            fullName: "Euro",
            detail: "Cash",
            color: "#3b82f6",
            icon: "€",
            subItems: [
                {
                    id: "cash-eur-kyiv",
                    name: "EUR",
                    detail: "Kyiv",
                    fullName: "Euro"
                },
                {
                    id: "cash-eur-kharkiv",
                    name: "EUR",
                    detail: "Kharkiv",
                    fullName: "Euro"
                },
                {
                    id: "cash-eur-odesa",
                    name: "EUR",
                    detail: "Odesa",
                    fullName: "Euro"
                },
                {
                    id: "cash-eur-dnipro",
                    name: "EUR",
                    detail: "Dnipro",
                    fullName: "Euro"
                },
                {
                    id: "cash-eur-lviv",
                    name: "EUR",
                    detail: "Lviv",
                    fullName: "Euro"
                },
                {
                    id: "cash-eur-zaporizhzhia",
                    name: "EUR",
                    detail: "Zaporizhzhia",
                    fullName: "Euro"
                },
                {
                    id: "cash-eur-warsaw",
                    name: "EUR",
                    detail: "Warsaw",
                    fullName: "Euro"
                }
            ]
        }
    ],
    accounts: [
        {
            id: "privatbank",
            name: "Privatbank",
            fullName: "Privatbank",
            detail: "UAH",
            color: "#4a9c2d",
            icon: "P",
            subItems: [
                {
                    id: "privat-uah",
                    name: "Privatbank",
                    detail: "UAH",
                    fullName: "Privatbank"
                },
                {
                    id: "privat-eur",
                    name: "Privatbank",
                    detail: "EUR",
                    fullName: "Privatbank"
                }
            ]
        },
        {
            id: "monobank",
            name: "Monobank",
            fullName: "Monobank",
            detail: "UAH",
            color: "#1a1a1a",
            icon: "M",
            subItems: [
                {
                    id: "mono-uah",
                    name: "Monobank",
                    detail: "UAH",
                    fullName: "Monobank"
                },
                {
                    id: "mono-usd",
                    name: "Monobank",
                    detail: "USD",
                    fullName: "Monobank"
                },
                {
                    id: "mono-eur",
                    name: "Monobank",
                    detail: "EUR",
                    fullName: "Monobank"
                }
            ]
        },
        {
            id: "oschadbank",
            name: "Oschadbank",
            fullName: "Oschadbank",
            detail: "UAH",
            color: "#00529b",
            icon: "O",
            subItems: [
                {
                    id: "oschadbank-uah",
                    name: "Oschadbank",
                    detail: "UAH",
                    fullName: "Oschadbank"
                }
            ]
        },
        {
            id: "pumb",
            name: "PUMB",
            fullName: "PUMB Bank",
            detail: "UAH",
            color: "#e8a020",
            icon: "U",
            subItems: [
                {
                    id: "pumb-uah",
                    name: "PUMB",
                    detail: "UAH",
                    fullName: "PUMB Bank"
                }
            ]
        },
        {
            id: "abank",
            name: "A-Bank",
            fullName: "A-Bank",
            detail: "UAH",
            color: "#dc2626",
            icon: "A",
            subItems: [
                {
                    id: "abank-uah",
                    name: "A-Bank",
                    detail: "UAH",
                    fullName: "A-Bank"
                }
            ]
        },
        {
            id: "revolut",
            name: "Revolut",
            fullName: "Revolut",
            detail: "USD",
            color: "#0075eb",
            icon: "R",
            subItems: [
                {
                    id: "revolut-usd",
                    name: "Revolut",
                    detail: "USD",
                    fullName: "Revolut"
                },
                {
                    id: "revolut-eur",
                    name: "Revolut",
                    detail: "EUR",
                    fullName: "Revolut"
                },
                {
                    id: "revolut-gbp",
                    name: "Revolut",
                    detail: "GBP",
                    fullName: "Revolut"
                }
            ]
        },
        {
            id: "wise",
            name: "Wise",
            fullName: "Wise",
            detail: "EUR",
            color: "#9fe870",
            icon: "W",
            subItems: [
                {
                    id: "wise-usd",
                    name: "Wise",
                    detail: "USD",
                    fullName: "Wise"
                },
                {
                    id: "wise-eur",
                    name: "Wise",
                    detail: "EUR",
                    fullName: "Wise"
                },
                {
                    id: "wise-gbp",
                    name: "Wise",
                    detail: "GBP",
                    fullName: "Wise"
                }
            ]
        },
        {
            id: "payoneer",
            name: "Payoneer",
            fullName: "Payoneer",
            detail: "USD",
            color: "#ff4800",
            icon: "Py",
            subItems: [
                {
                    id: "payoneer-usd",
                    name: "Payoneer",
                    detail: "USD",
                    fullName: "Payoneer"
                },
                {
                    id: "payoneer-eur",
                    name: "Payoneer",
                    detail: "EUR",
                    fullName: "Payoneer"
                }
            ]
        },
        {
            id: "sepa",
            name: "SEPA",
            fullName: "SEPA Transfer",
            detail: "EUR",
            color: "#003399",
            icon: "S",
            subItems: [
                {
                    id: "sepa-eur",
                    name: "SEPA",
                    detail: "EUR",
                    fullName: "SEPA Transfer"
                }
            ]
        },
        {
            id: "swift",
            name: "SWIFT",
            fullName: "SWIFT Transfer",
            detail: "USD",
            color: "#374151",
            icon: "Sw",
            subItems: [
                {
                    id: "swift-usd",
                    name: "SWIFT",
                    detail: "USD",
                    fullName: "SWIFT Transfer"
                },
                {
                    id: "swift-eur",
                    name: "SWIFT",
                    detail: "EUR",
                    fullName: "SWIFT Transfer"
                }
            ]
        }
    ]
};
const OVERVIEW_TAGS = {
    crypto: [
        "USDT",
        "USDC",
        "BTC",
        "ETH",
        "LTC",
        "BNB",
        "SOL",
        "TON",
        "TRX",
        "XRP",
        "DOGE",
        "NOT",
        "POL"
    ],
    cash: [
        "USD Green",
        "USD Blue",
        "EUR"
    ],
    accounts: [
        "Privatbank",
        "Monobank",
        "Oschadbank",
        "PUMB",
        "A-Bank",
        "Revolut",
        "Wise",
        "Payoneer",
        "SEPA",
        "SWIFT"
    ]
};
const TAG_TO_CURRENCY = {
    "USDT": {
        name: "USDT",
        detail: "TRC20",
        fullName: "Tether",
        color: "#26a17b",
        icon: "₮"
    },
    "USDC": {
        name: "USDC",
        detail: "ERC20",
        fullName: "USD Coin",
        color: "#2775ca",
        icon: "$"
    },
    "BTC": {
        name: "BTC",
        detail: "Bitcoin",
        fullName: "Bitcoin",
        color: "#f7931a",
        icon: "₿"
    },
    "ETH": {
        name: "ETH",
        detail: "Ethereum",
        fullName: "Ethereum",
        color: "#627eea",
        icon: "Ξ"
    },
    "LTC": {
        name: "LTC",
        detail: "Litecoin",
        fullName: "Litecoin",
        color: "#b0aeae",
        icon: "Ł"
    },
    "BNB": {
        name: "BNB",
        detail: "BEP20",
        fullName: "BNB Chain",
        color: "#f3ba2f",
        icon: "B"
    },
    "SOL": {
        name: "SOL",
        detail: "Solana",
        fullName: "Solana",
        color: "#9945ff",
        icon: "◎"
    },
    "TON": {
        name: "TON",
        detail: "TON",
        fullName: "Toncoin",
        color: "#0098ea",
        icon: "◈"
    },
    "TRX": {
        name: "TRX",
        detail: "Tron",
        fullName: "Tron",
        color: "#e84142",
        icon: "T"
    },
    "XRP": {
        name: "XRP",
        detail: "Ripple",
        fullName: "Ripple",
        color: "#346aa9",
        icon: "✕"
    },
    "DOGE": {
        name: "DOGE",
        detail: "Dogecoin",
        fullName: "Dogecoin",
        color: "#c2a633",
        icon: "Ð"
    },
    "NOT": {
        name: "NOT",
        detail: "TON",
        fullName: "Notcoin",
        color: "#f5a623",
        icon: "N"
    },
    "POL": {
        name: "POL",
        detail: "Polygon",
        fullName: "Polygon",
        color: "#8247e5",
        icon: "P"
    },
    "USD Green": {
        name: "USD Green",
        detail: "Cash",
        fullName: "US Dollar Green",
        color: "#15803d",
        icon: "$"
    },
    "USD Blue": {
        name: "USD Blue",
        detail: "Cash",
        fullName: "US Dollar Blue",
        color: "#2563eb",
        icon: "$"
    },
    "EUR": {
        name: "EUR",
        detail: "Cash",
        fullName: "Euro",
        color: "#3b82f6",
        icon: "€"
    },
    "Privatbank": {
        name: "Privatbank",
        detail: "UAH",
        fullName: "Privatbank",
        color: "#4a9c2d",
        icon: "P"
    },
    "Monobank": {
        name: "Monobank",
        detail: "UAH",
        fullName: "Monobank",
        color: "#1a1a1a",
        icon: "M"
    },
    "Oschadbank": {
        name: "Oschadbank",
        detail: "UAH",
        fullName: "Oschadbank",
        color: "#00529b",
        icon: "O"
    },
    "PUMB": {
        name: "PUMB",
        detail: "UAH",
        fullName: "PUMB Bank",
        color: "#e8a020",
        icon: "U"
    },
    "A-Bank": {
        name: "A-Bank",
        detail: "UAH",
        fullName: "A-Bank",
        color: "#dc2626",
        icon: "A"
    },
    "Revolut": {
        name: "Revolut",
        detail: "USD",
        fullName: "Revolut",
        color: "#0075eb",
        icon: "R"
    },
    "Wise": {
        name: "Wise",
        detail: "EUR",
        fullName: "Wise",
        color: "#9fe870",
        icon: "W"
    },
    "Payoneer": {
        name: "Payoneer",
        detail: "USD",
        fullName: "Payoneer",
        color: "#ff4800",
        icon: "Py"
    },
    "SEPA": {
        name: "SEPA",
        detail: "EUR",
        fullName: "SEPA Transfer",
        color: "#003399",
        icon: "S"
    },
    "SWIFT": {
        name: "SWIFT",
        detail: "USD",
        fullName: "SWIFT Transfer",
        color: "#374151",
        icon: "Sw"
    }
};
const SEND_ASSETS = [
    {
        id: "usdt_trc20",
        code: "USDT",
        name: "Tether TRC20",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdt_erc20",
        code: "USDT",
        name: "Tether ERC20",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdt_bep20",
        code: "USDT",
        name: "Tether BEP20",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdt_polygon",
        code: "USDT",
        name: "Tether Polygon",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdc_erc20",
        code: "USDC",
        name: "USD Coin ERC20",
        category: "crypto",
        color: "#2775ca",
        icon: "$"
    },
    {
        id: "usdc_bep20",
        code: "USDC",
        name: "USD Coin BEP20",
        category: "crypto",
        color: "#2775ca",
        icon: "$"
    },
    {
        id: "btc",
        code: "BTC",
        name: "Bitcoin",
        category: "crypto",
        color: "#f7931a",
        icon: "₿"
    },
    {
        id: "btc_lightning",
        code: "BTC",
        name: "Bitcoin Lightning",
        category: "crypto",
        color: "#f7931a",
        icon: "₿"
    },
    {
        id: "eth",
        code: "ETH",
        name: "Ethereum",
        category: "crypto",
        color: "#627eea",
        icon: "Ξ"
    },
    {
        id: "eth_arbitrum",
        code: "ETH",
        name: "Ethereum Arbitrum",
        category: "crypto",
        color: "#627eea",
        icon: "Ξ"
    },
    {
        id: "ltc",
        code: "LTC",
        name: "Litecoin",
        category: "crypto",
        color: "#b0aeae",
        icon: "Ł"
    },
    {
        id: "bnb",
        code: "BNB",
        name: "BNB Chain",
        category: "crypto",
        color: "#f3ba2f",
        icon: "B"
    },
    {
        id: "sol",
        code: "SOL",
        name: "Solana",
        category: "crypto",
        color: "#9945ff",
        icon: "◎"
    },
    {
        id: "ton",
        code: "TON",
        name: "Toncoin",
        category: "crypto",
        color: "#0098ea",
        icon: "◈"
    },
    {
        id: "trx",
        code: "TRX",
        name: "Tron",
        category: "crypto",
        color: "#e84142",
        icon: "T"
    },
    {
        id: "xrp",
        code: "XRP",
        name: "Ripple",
        category: "crypto",
        color: "#346aa9",
        icon: "✕"
    },
    {
        id: "doge",
        code: "DOGE",
        name: "Dogecoin",
        category: "crypto",
        color: "#c2a633",
        icon: "Ð"
    },
    {
        id: "not",
        code: "NOT",
        name: "Notcoin (TON)",
        category: "crypto",
        color: "#f5a623",
        icon: "N"
    },
    {
        id: "pol",
        code: "POL",
        name: "Polygon",
        category: "crypto",
        color: "#8247e5",
        icon: "P"
    },
    {
        id: "usd_fiat",
        code: "USD",
        name: "US Dollar",
        category: "fiat",
        color: "#22c55e",
        icon: "$"
    },
    {
        id: "eur_fiat",
        code: "EUR",
        name: "Euro",
        category: "fiat",
        color: "#3b82f6",
        icon: "€"
    },
    {
        id: "uah_fiat",
        code: "UAH",
        name: "Ukrainian Hryvnia",
        category: "fiat",
        color: "#fbbf24",
        icon: "₴"
    }
];
const ALL_RECEIVE_ASSETS = [
    // Crypto
    {
        id: "usdt_trc20",
        code: "USDT",
        name: "Tether TRC20",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdt_erc20",
        code: "USDT",
        name: "Tether ERC20",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdt_bep20",
        code: "USDT",
        name: "Tether BEP20",
        category: "crypto",
        color: "#26a17b",
        icon: "₮"
    },
    {
        id: "usdc_erc20",
        code: "USDC",
        name: "USD Coin ERC20",
        category: "crypto",
        color: "#2775ca",
        icon: "$"
    },
    {
        id: "btc",
        code: "BTC",
        name: "Bitcoin",
        category: "crypto",
        color: "#f7931a",
        icon: "₿"
    },
    {
        id: "btc_lightning",
        code: "BTC",
        name: "Bitcoin Lightning",
        category: "crypto",
        color: "#f7931a",
        icon: "₿"
    },
    {
        id: "eth",
        code: "ETH",
        name: "Ethereum",
        category: "crypto",
        color: "#627eea",
        icon: "Ξ"
    },
    {
        id: "ltc",
        code: "LTC",
        name: "Litecoin",
        category: "crypto",
        color: "#b0aeae",
        icon: "Ł"
    },
    {
        id: "bnb",
        code: "BNB",
        name: "BNB Chain",
        category: "crypto",
        color: "#f3ba2f",
        icon: "B"
    },
    {
        id: "sol",
        code: "SOL",
        name: "Solana",
        category: "crypto",
        color: "#9945ff",
        icon: "◎"
    },
    {
        id: "ton",
        code: "TON",
        name: "Toncoin",
        category: "crypto",
        color: "#0098ea",
        icon: "◈"
    },
    {
        id: "trx",
        code: "TRX",
        name: "Tron",
        category: "crypto",
        color: "#e84142",
        icon: "T"
    },
    {
        id: "xrp",
        code: "XRP",
        name: "Ripple",
        category: "crypto",
        color: "#346aa9",
        icon: "✕"
    },
    {
        id: "doge",
        code: "DOGE",
        name: "Dogecoin",
        category: "crypto",
        color: "#c2a633",
        icon: "Ð"
    },
    {
        id: "not",
        code: "NOT",
        name: "Notcoin (TON)",
        category: "crypto",
        color: "#f5a623",
        icon: "N"
    },
    {
        id: "pol",
        code: "POL",
        name: "Polygon",
        category: "crypto",
        color: "#8247e5",
        icon: "P"
    },
    // Ukrainian banks
    {
        id: "privat_uah",
        code: "UAH",
        name: "Privatbank",
        category: "banks",
        color: "#4a9c2d",
        icon: "P"
    },
    {
        id: "mono_uah",
        code: "UAH",
        name: "Monobank",
        category: "banks",
        color: "#1a1a1a",
        icon: "M"
    },
    {
        id: "oschadbank_uah",
        code: "UAH",
        name: "Oschadbank",
        category: "banks",
        color: "#00529b",
        icon: "O"
    },
    {
        id: "pumb_uah",
        code: "UAH",
        name: "PUMB",
        category: "banks",
        color: "#e8a020",
        icon: "U"
    },
    {
        id: "abank_uah",
        code: "UAH",
        name: "A-Bank",
        category: "banks",
        color: "#dc2626",
        icon: "A"
    },
    // E-wallets & international
    {
        id: "revolut_usd",
        code: "USD",
        name: "Revolut USD",
        category: "ewallets",
        color: "#0075eb",
        icon: "R"
    },
    {
        id: "revolut_eur",
        code: "EUR",
        name: "Revolut EUR",
        category: "ewallets",
        color: "#0075eb",
        icon: "R"
    },
    {
        id: "revolut_gbp",
        code: "GBP",
        name: "Revolut GBP",
        category: "ewallets",
        color: "#0075eb",
        icon: "R"
    },
    {
        id: "wise_usd",
        code: "USD",
        name: "Wise USD",
        category: "ewallets",
        color: "#9fe870",
        icon: "W"
    },
    {
        id: "wise_eur",
        code: "EUR",
        name: "Wise EUR",
        category: "ewallets",
        color: "#9fe870",
        icon: "W"
    },
    {
        id: "wise_gbp",
        code: "GBP",
        name: "Wise GBP",
        category: "ewallets",
        color: "#9fe870",
        icon: "W"
    },
    {
        id: "payoneer_usd",
        code: "USD",
        name: "Payoneer USD",
        category: "ewallets",
        color: "#ff4800",
        icon: "Py"
    },
    {
        id: "payoneer_eur",
        code: "EUR",
        name: "Payoneer EUR",
        category: "ewallets",
        color: "#ff4800",
        icon: "Py"
    },
    {
        id: "sepa_eur",
        code: "EUR",
        name: "SEPA Transfer",
        category: "ewallets",
        color: "#003399",
        icon: "S"
    },
    {
        id: "swift_usd",
        code: "USD",
        name: "SWIFT USD",
        category: "ewallets",
        color: "#374151",
        icon: "Sw"
    },
    {
        id: "swift_eur",
        code: "EUR",
        name: "SWIFT EUR",
        category: "ewallets",
        color: "#374151",
        icon: "Sw"
    },
    // Cash pickup
    {
        id: "cash_usd_green",
        code: "USD",
        name: "Cash USD Green",
        category: "cash",
        color: "#15803d",
        icon: "$"
    },
    {
        id: "cash_usd_blue",
        code: "USD",
        name: "Cash USD Blue",
        category: "cash",
        color: "#2563eb",
        icon: "$"
    },
    {
        id: "cash_eur",
        code: "EUR",
        name: "Cash EUR",
        category: "cash",
        color: "#3b82f6",
        icon: "€"
    },
    {
        id: "cash_uah",
        code: "UAH",
        name: "Cash UAH",
        category: "cash",
        color: "#22c55e",
        icon: "₴"
    }
];
}),
"[project]/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LandingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$sticky$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/sticky-header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$hero$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/hero-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$converter$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/converter-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$exchange$2d$possibilities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/exchange-possibilities.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$common$2d$scenarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/common-scenarios.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$before$2d$you$2d$exchange$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/before-you-exchange.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$no$2d$hidden$2d$steps$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/no-hidden-steps.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$support$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/support-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$aml$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/aml-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$popular$2d$directions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/popular-directions.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$cash$2d$cities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/cash-cities.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$reviews$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/reviews-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$faq$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/faq-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$final$2d$cta$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/final-cta.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$large$2d$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/large-footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$floating$2d$support$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/landing/floating-support-button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function LandingPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$sticky$2d$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StickyHeader"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$hero$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$converter$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConverterSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$exchange$2d$possibilities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExchangePossibilities"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$common$2d$scenarios$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CommonScenarios"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$before$2d$you$2d$exchange$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BeforeYouExchange"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$no$2d$hidden$2d$steps$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NoHiddenSteps"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$support$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupportSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$aml$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AmlSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$popular$2d$directions$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PopularDirections"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$cash$2d$cities$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CashCities"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$reviews$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReviewsSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$faq$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaqSection"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$final$2d$cta$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FinalCta"], {}, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$large$2d$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LargeFooter"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$landing$2f$floating$2d$support$2d$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FloatingSupportButton"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_0c4vvir._.js.map
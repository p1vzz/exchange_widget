# Exchange Widget — Project Context

## Stack
Next.js 16 / React 19 / Tailwind CSS 4. Deploy to Verso. Make changes locally; deploy only when user explicitly requests.

## Layout structure
Hero → Converter (overlapping card) → Exchange Possibilities (directions) → ...

## Converter card overlap
Section uses `flow-root` (BFC) to prevent margin collapse. Negative margins (`-mt-14 -mb-14`) go on the **card wrapper**, not the section. Remove `overflow-hidden` from section so card protrudes visually. Verify real overlap with `getBoundingClientRect()` — `cardTop` must be less than `converterTop`.

## Converter card specs
- Width: `w-[90%]`, height: `h-[800px]` with internal scroll
- `rounded-[24px]`, `bg-white/98 backdrop-blur-sm`
- Section bg: `bg-gradient-to-b from-black/[0.04] to-white`
- Trust badges below left column, outside inner card frame

## Exchange rate logic
`EXCHANGE_RATE = 41.05`. Both Send and Receive inputs are editable — changing one recalculates the other. Input overflow fix: `min-w-0 flex-1 text-right` so large numbers grow leftward.

## Currency groups
1. Crypto — USDT (TRC20/ERC20), BTC, ETH
2. Bank — Privat24, Mono, SEPA, wire
3. Cash — pickup in 12+ cities

## Hero animation
6 floating nodes centered: USDT, BTC, Revolut, Cash, Wise, Bank.

# QA log — 2026-09-09

## Desktop ~1440×900

- Nav, logo lockup, phone, Request an Estimate: pass
- Hero: first-party crew photo, headline, two CTAs, no overflow
- Proof strip: 1991 / CSLB / Class B / current / BBB A+
- Service cards, work grid, testimonials, local license snapshot, footer: pass
- Horizontal overflow: none
- Console errors: none (browser-smoke)

## Mobile ~390×844

- Hamburger + phone icon; tap targets ≥44px
- Hero type wraps; CTAs stack
- Proof strip 2-column
- Cards stack; no overflow
- Console errors: none

## Other routes

- `/work` album, `/contact` mailto form, `/outreach` noindex operator brief
- `robots.txt` disallows `/outreach` only
- Phone `tel:6198381131` and email `john@johnburkeconstruction.com` present

## Production build

- `npm run build` and `npm run typecheck` passed

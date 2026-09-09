# John Burke Construction — speculative redesign

This repository is a **speculative website redesign** produced by Novenworks.

- **John Burke Construction Inc. is not a Novenworks client.**
- Novenworks was **not hired** to build or replace the live site.
- Business marks, the JBC lockup, and all project photography remain the property of their owners. They are used here only to demonstrate how the company’s own material could be presented.
- The live first-party site remains [johnburkeconstruction.com](https://johnburkeconstruction.com/).

## What this is

A customer-facing brochure for a San Diego residential and commercial general contractor (CSLB #631941), plus an operator-only `/outreach` route used to pitch the work.

## Stack

TanStack Start, React, TypeScript, Tailwind CSS v4, Vite. (This workspace cannot run Next.js; the original prompt asked for App Router and was adapted.)

## Local setup

```bash
npm install
npm run dev
```

The app listens on port 8080.

```bash
npm run build
npm run typecheck
```

## Live demo

- Production: https://john-burke-construction-demo.vercel.app
- GitHub: https://github.com/Novenworks/John-Burke-Construction-Demo
- Operator brief: https://john-burke-construction-demo.vercel.app/outreach

## Routes

- `/` homepage
- `/work` photo album
- `/contact` estimate request (mailto — nothing is stored)
- `/outreach` operator brief (unlinked, `noindex`)

## Contact used (first-party)

- Phone: (619) 838-1131
- Email: john@johnburkeconstruction.com

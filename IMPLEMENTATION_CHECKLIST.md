# Broke Mode implementation checklist

Status meanings: **NOT STARTED**, **IN PROGRESS**, **BLOCKED**, **VERIFIED**. An item is only **VERIFIED** after its stated check has passed.

## Phase 1 — Foundation

| Item | Status | Completion criteria |
| --- | --- | --- |
| Inspect workspace and development tools | VERIFIED | Workspace, Node.js, npm, and Git were checked. |
| Create Next.js App Router TypeScript foundation | VERIFIED | Dependencies installed and the local starter route returned HTTP 200. |
| Configure Tailwind CSS | VERIFIED | Tailwind compiled successfully during the production build. |
| Create project instructions | VERIFIED | `AGENTS.md` documents guardrails and conventions. |
| Create setup documentation | VERIFIED | `README.md` documents setup, checks, local running, and deployment boundaries. |
| Verify lint and type checking | VERIFIED | `npm run lint` and `npm run typecheck` passed. |
| Verify production build | VERIFIED | `npm run build` passed using Next.js Webpack mode. |
| Verify starter route | VERIFIED | The development server returned HTTP 200 at `http://localhost:3000`. |

## Phase 2 — Visual prototype

| Item | Status | Completion criteria |
| --- | --- | --- |
| Design system and responsive shell | VERIFIED | Responsive sidebar/bottom navigation, shared cards, controls, and feedback patterns compile and render through the local route checks. |
| Core routes and navigation | VERIFIED | Home, Money, Discover, Group Plans, Savings Goals, and Profile all returned HTTP 200 locally. |
| Clearly labeled sample data and interactions | VERIFIED | Local-only sample data, filters, forms, voting, favourite controls, and prototype notices are implemented; lint, type check, and production build passed. |

## Future phases

| Phase | Status | Completion criteria |
| --- | --- | --- |
| Functional financial tracking | NOT STARTED | Validated local persistence, accurate money calculations, and tested transactions/goals. |
| Activity discovery | NOT STARTED | Curated activities, constraint-respecting rankings, filters, favourites, and tests. |
| Group planning | NOT STARTED | Private-budget design, controlled sample flows, voting, and authorization requirements documented. |
| Backend and authentication | NOT STARTED | Approved provider, server authorization, RLS, tests, and secure persistence. |
| Real-world data | NOT STARTED | Approved provider evaluation, server integration, attribution, caching, and fallbacks. |
| Quality and launch | NOT STARTED | Responsive/accessibility verification, production checks, and explicit deployment approval. |

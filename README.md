# Broke Mode

Broke Mode is a mobile-first web app in progress for students and young adults who want to make their money last while still finding enjoyable things to do.

The current milestone is **Phase 2: Visual prototype**. It includes a responsive local-only prototype for Home, Money, Discover, Group Plans, Goals, and Profile. It has no database, authentication, secure financial persistence, external APIs, or live event data.

## Tech stack

- Next.js with the App Router and TypeScript
- Tailwind CSS
- npm
- Vercel-compatible deployment structure

## Requirements

- Node.js 20.9 or newer (the project was checked with Node.js 24.14.1)
- npm 10 or newer (the project was checked with npm 11.11.0)

## Local setup

From the project folder:

```powershell
$env:NODE_OPTIONS='--use-system-ca'
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. Stop the development server with `Ctrl+C`. Restart it later with `npm run dev`.

The `NODE_OPTIONS` line is only needed in this environment because npm initially could not verify the package-registry certificate. It applies only to the current PowerShell window. If `npm install` already works for you, omit it.

## Checks

```powershell
npm run lint
npm run typecheck
npm run build
```

## Project structure

```text
src/app/             App Router pages, layout, and global styles
src/components/      Shared shell, UI elements, and interactive page components
src/lib/data.ts      Fictional local sample data and TypeScript types
AGENTS.md            Instructions and engineering conventions for future work
IMPLEMENTATION_CHECKLIST.md  Phase-by-phase status and acceptance criteria
.env.example         Safe template for future environment variable names
```

## Deployment

The project is structured for Vercel, but nothing has been deployed. Before deployment, install dependencies, pass the checks above, verify that no secrets are committed, and obtain explicit approval to publish.

## Roadmap

The implementation roadmap and acceptance criteria are tracked in `IMPLEMENTATION_CHECKLIST.md`. Phase 2 begins only after the Phase 1 starter page is confirmed working locally.

# Broke Mode project instructions

## Product guardrails

- Broke Mode helps students and young adults enjoy life within their budget. Use supportive, non-judgmental language.
- Do not imply bank data, live event data, accounts, or real-world pricing are available unless they are actually integrated and verified.
- Keep external services, authentication, real-world places/events, and AI integrations out of the visual-prototype phase unless the owner explicitly approves the next phase.

## Technical conventions

- Use Next.js App Router, TypeScript with strict mode, Tailwind CSS, and npm.
- Put app routes in `src/app`; shared UI belongs in `src/components`; reusable domain logic and types belong in `src/lib`.
- Prefer server-side authorization and validation when backend work begins. Never expose secrets or Supabase service-role keys to the browser.
- Represent persisted money in integer minor units (for example, cents), never floating-point values.
- Use semantic HTML, keyboard support, visible focus states, and reduced-motion-friendly interactions.
- Do not use `any` to silence TypeScript errors. Keep components focused and reusable.

## Quality bar

- Update `IMPLEMENTATION_CHECKLIST.md` as work progresses. Mark an item VERIFIED only after the stated check has passed.
- After an implementation change, run the relevant lint, type-check, tests, and production build when practical. Report what actually ran.
- Preserve existing user work. Do not reset Git history, delete branches, deploy, push, or configure paid/external services without explicit approval.

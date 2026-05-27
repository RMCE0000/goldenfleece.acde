# AGENTS.md

## Cursor Cloud specific instructions

This is a frontend-only React + Vite SPA (no backend, no database, no Docker).

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` |
| Lint | `npm run lint` |
| Build | `npm run build` |
| Preview prod build | `npm run preview` |

### Notes

- The Vite dev server runs on port **5173** by default. Use `npm run dev -- --host 0.0.0.0` to expose on all interfaces.
- The `main` branch contains only the README; the actual application code lives on feature branches. Always verify you are on a branch with `package.json` before running commands.
- No automated tests exist yet. Validation consists of `npm run lint` (ESLint) and `npm run build` (TypeScript type-check + Vite production build).

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project-Specific Instructions

- This is a recipe management app using Next.js App Router, React Server Components, and Firebase
- Authentication context at `src/components/auth-context/`
- Dashboard with charts and forms using Chakra UI, Formik, and Recharts
- Images from Firebase Storage require `remotePatterns` configuration
- Current TypeScript setup: strict mode, ESLint flat config v9

## Agent Coding Style

When making code changes in this repository, follow these style constraints to keep the codebase readable and consistent:

- Use constants only: prefer `const` for all bindings; avoid `let` and mutation unless there's a demonstrated, unavoidable need.
- Single return: avoid premature/early `return` statements inside functions; prefer computing final values and returning once at the end of the function for readability.
- Avoid nested conditionals: keep control flow flat — prefer early-exit-less patterns, ternaries, or small helper functions to reduce nesting.
- No single-letter variables: use descriptive variable names (e.g., `rawRecipe`, `startIndex`) even for callbacks.
- Use the `slugify` npm package for slug generation instead of custom implementations. Add it to `package.json` and install with `npm i slugify`.

These rules are intentionally opinionated to make code easier for humans to read and maintain. If a specific change cannot follow these rules for technical reasons, document the rationale in a short comment near the relevant code.

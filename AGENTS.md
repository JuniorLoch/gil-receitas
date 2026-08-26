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

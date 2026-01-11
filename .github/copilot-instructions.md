# Copilot instructions for Azdora site

This repository is a VuePress site (source in `docs/`) integrated with Decap CMS and hosted on Netlify. The guidance below is focused, actionable, and specific to this codebase so AI coding agents can be immediately productive.

- **Big picture:** The site source is under `docs/`. VuePress configuration and site build output live under `docs/.vuepress/`. Content pages are Markdown files (e.g., `docs/news/2023-04-10/index.md`). Netlify publishes the built site from `docs/.vuepress/dist`.

- **Build & run (developer workflow):**
  - Install: `yarn` (project uses `yarn`; Node 18 is expected).
  - Local dev server: `yarn docs:dev` (runs `vuepress dev docs`).
  - Build for production: `yarn docs:build` (runs `vuepress build docs`).
  - Netlify uses `yarn docs:build` and publishes `docs/.vuepress/dist` (see `netlify.toml`).

- **Where to look for key patterns:**
  - Site config, components and theme customizations: `docs/.vuepress/` (check `config.js`, `components/`, and `public/`).
  - Content and changelog/news entries: `docs/news/` (uses dated directories with `index.md`).
  - Root-level integration: `netlify.toml` (deploy command + publish dir) and `package.json` scripts.

- **Project-specific conventions:**
  - Content pages include YAML frontmatter at the top (title, date, tags); follow existing frontmatter structure found in `docs/news/*/index.md`.
  - Use `yarn` consistently for install/run/build — Netlify build uses `yarn` in this repo.
  - Reuse VuePress components registered via `@vuepress/plugin-register-components` (look in `docs/.vuepress/components`).

- **Common edits & examples:**
  - Add a news post: create `docs/news/YYYY-MM-DD/index.md` with frontmatter and content. Example: `docs/news/2023-04-17/index.md`.
  - Update site metadata: edit `docs/README.md` (home page frontmatter) or `docs/.vuepress/config.js`.
  - Preview a production build locally: `yarn docs:build` then `npx http-server docs/.vuepress/dist`.

- **Dependencies & environment:**
  - Dev deps listed in `package.json` (VuePress v2 beta plugins). Keep Node 18 as per `netlify.toml`.

- **What not to change without checking:**
  - `netlify.toml` (deployment behavior), `package.json` script names (CI/CD expectations), and `docs/.vuepress/config.js` (site routing and plugin configs).

- **Where to find more details in this repo:**
  - Home page and top-level docs: `docs/README.md`.
  - Example content and structure: `docs/news/` and other directories under `docs/`.

If any of these paths or behaviors are outdated or you want the Copilot instructions to emphasize different priorities, tell me which area to expand or correct.

# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite React frontend. Application code lives in `src/`, with route wiring in `src/App.jsx` and the entry point in `src/main.jsx`. Page-level views are grouped under `src/pages/` by route, shared UI lives in `src/components/`, React context belongs in `src/context/`, and API helpers are centralized in `src/api/api.jsx`. Static public assets are stored in `public/`, especially `public/assets/`. Production output is generated in `dist/` and should not be edited directly.

## Build, Test, and Development Commands

- `npm install`: install dependencies from `package-lock.json`.
- `npm run dev`: start the Vite development server with hot reload.
- `npm run build`: create the production build in `dist/`.
- `npm run preview`: serve the built app locally for a production-style check.
- `npm run lint`: run ESLint across the project.

The app expects backend URLs from `VITE_API_URL` and `VITE_IMG_URL`; defaults point to `http://localhost:5001`.

## Coding Style & Naming Conventions

Use JavaScript modules and React function components. Keep component and page files in PascalCase where practical, matching the existing route folders such as `Home`, `Projects`, and `Workshops-details`. Use camelCase for variables, functions, hooks, and API helpers, for example `getServiceBySlug`. Follow the existing JSX style: two-space indentation, double quotes in JSX imports/attributes, and semicolons. Run `npm run lint` before handing off changes.

## Testing Guidelines

There is currently no dedicated test runner or `npm test` script. For now, verify changes with `npm run lint`, `npm run build`, and a manual check through `npm run dev` or `npm run preview`. When adding tests, prefer colocated files named `*.test.jsx` near the component or page being covered, and add the corresponding test command to `package.json`.

## Commit & Pull Request Guidelines

Recent history includes both placeholders and one descriptive commit. Use clear, imperative commit subjects such as `Refactor blog filtering` or `Add workshop details route`; avoid vague messages like `cc`. Pull requests should include a short summary, affected routes/pages, verification commands run, linked issues when applicable, and screenshots for visible UI changes.

## Security & Configuration Tips

Do not commit `.env` secrets or generated build artifacts. Keep API configuration in `VITE_*` variables, and route all backend calls through `src/api/api.jsx` so URL handling and bilingual field helpers remain consistent.

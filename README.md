# Andez_app

My first app project!

A web app built with [React](https://react.dev), [TypeScript](https://www.typescriptlang.org) and [Vite](https://vite.dev).

## Run it

You need [Node.js](https://nodejs.org) 22.22 or newer (see `.nvmrc`).

```bash
npm install     # once, installs the dependencies
npm run dev     # starts the app at http://localhost:5173
```

## Other commands

| Command          | What it does                                   |
| ---------------- | ---------------------------------------------- |
| `npm test`       | runs the tests once                            |
| `npm run build`  | type-checks and builds the app into `dist/`    |
| `npm run preview`| serves the built app to check it before deploy |

## Where to start

- `src/App.tsx`: the home screen
- `src/App.test.tsx`: its tests
- `src/index.css`: the styles

## Checks

Every pull request runs `npm ci`, `npm test` and `npm run build` on GitHub Actions (`.github/workflows/ci.yml`). Pushes to `main` run them too.

# vue3-ts-vite-starter-template

A single page app [Vite](https://vitejs.dev) starter template, created to easily bootstrap Vue.js 3 apps.

**Features**

- Vue 3
- Vite 8
- TypeScript 6
- Vitest 4 for unit testing
- Pinia 3 for state management
- Vue Router 5 for client-side routing
- Tailwind 4 for layout and styling
- SCSS variables inside Vue components
- Purgecss for eliminating unused CSS
- Knip for detecting unused files and exports
- Basic multiple layouts feature
- ESLint config based on [neostandard](https://github.com/neostandard/neostandard) with sensible defaults :relaxed:
- [Prettier](https://prettier.io/) for code formatting
- Automated release workflow with [semantic-release](https://github.com/semantic-release/semantic-release)

## Project setup

```
pnpm install
```

### Compiles and hot-reloads for development

```
pnpm run dev
```

### Compiles and minifies for production

```
pnpm run build
```

## Run your unit tests

```
pnpm run test:unit
```

### Run unit tests in non-watch mode

```
pnpm run test:unit-nowatch
```

### Run unit tests with coverage output

```
pnpm run test:unit-coverage
```

### Lints files

```
pnpm run lint
```

### Lints and fixes files

```
pnpm run lint-fix
```

### Runs Typechecks

```
pnpm run typecheck
```

### Detects unused files and exports

```
pnpm run knip
```

### Runs all quality checks

```
pnpm run quality
```

This runs `knip`, `lint`, `typecheck`, unit tests in non-watch mode, and `build`.

## Testing conventions

- Test files are colocated with source files using `*.spec.ts`
- Shared test infrastructure lives in `tests/`
- `tests/vitest.router-mock-setup.ts` provides a default router mock for route-aware tests
- `tests/vitest.helpers.ts` exposes `createWrapperFor` for tests that need shared mount setup
- `createWrapperFor` includes default Pinia plugin wiring and supports merged `global.directives`
- Prefer plain `mount` for simple component tests and use `createWrapperFor` only when shared setup is required

### Customize configuration

See [Configuration Reference](https://vitejs.dev/guide/).

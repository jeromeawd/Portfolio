---
name: TypeScript Conventions
description: Use when defining or reviewing TypeScript types, APIs, generics, imports, error handling, and strict-mode compatibility in this project.
---

# TypeScript Conventions

## When to use

Use for new types, shared contracts, utility functions, refactors, and reviews where type safety or strict-mode behavior matters. Pair with `react-best-practices` for component design.

## Project settings to respect

- `strict` TypeScript with `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`.
- `verbatimModuleSyntax`: use `import type` / `export type` for type-only symbols.
- `erasableSyntaxOnly`: do not use runtime `enum`, `namespace`, or parameter properties.
- `moduleResolution: bundler` and the `@/*` path alias for `src/*`.
- No emit; Vite handles bundling.

## Guidelines

1. **Prefer inference locally, annotations at boundaries.** Let simple local values infer. Annotate public function parameters, return values, and shared contracts.
2. **Model with unions.** Use string literal unions and discriminated unions instead of loose strings or parallel booleans.
3. **Use `unknown` at trust boundaries.** Narrow it with type guards or a schema validator; never cast untrusted input with `as`.
4. **Make invalid states unrepresentable.** Require the fields that belong to each variant and include an explicit discriminant.
5. **Use `satisfies` for validation without widening.** Prefer `satisfies` over `as` when checking object shape.
6. **Keep generics meaningful.** If a generic appears once, it probably should be a concrete type.
7. **Avoid type gymnastics.** Readable explicit types beat clever conditional types unless reuse is proven.
8. **Validate at runtime.** Static types disappear; validate URL params, storage, forms, and API responses before use.
9. **Handle errors explicitly.** Use `unknown` in `catch`, narrow with `instanceof Error`, and preserve cause where useful. Never swallow errors silently.
10. **Keep shared types close to their owner.** Feature-local types live in the feature; cross-cutting contracts live in `src/types` or `src/lib`.

## Preferred patterns

```ts
type RequestState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: Project[] }
  | { status: 'error'; message: string }
```

```ts
const NAV_ITEMS = [
  { label: 'Projects', href: '/projects' },
] satisfies ReadonlyArray<{ label: string; href: string }>
```

## Common mistakes

- `any`, `as SomeType`, or non-null assertions used to silence errors.
- Optional fields that are actually required together.
- Boolean flags such as `isLoading`, `isError`, and `isSuccess` that can contradict each other.
- Duplicating a domain type in several files instead of importing the owner.
- Using `interface` for everything; use `type` for unions and computed shapes.
- Importing types without `import type`, which breaks `verbatimModuleSyntax` expectations.
- Catching errors and returning an empty value without surfacing the failure.
- Typing a library's internal shape instead of the public contract you need.

## Security

- Types are not validation. Validate all external input at runtime.
- Do not encode secrets in types, fixtures, examples, or default values.
- Do not trust client-provided IDs, roles, prices, or permissions; server-side enforcement is mandatory when a backend exists.
- Redact sensitive values from logs and error messages.

## Verification

Run `npm run typecheck` and `npm run lint`. Keep error messages actionable and avoid `@ts-expect-error`; if absolutely required, add a reason and a nearby test.

---
name: React Best Practices
description: Use when writing, refactoring, or reviewing React components and hooks, especially state modeling, effects, composition, rendering performance, and accessibility.
---

# React Best Practices

## When to use

Use for component design, hook extraction, state ownership, effects, performance work, error boundaries, and React code review. Pair with `typescript-conventions` for type design and `ui-ux-design` for visual behavior.

## Core principles

- **Model state minimally.** Store the smallest source of truth; derive the rest during render. Avoid duplicated state and synchronization effects.
- **Keep state close.** Lift state only to the closest common owner that needs it. Prefer local state over global state until sharing is real.
- **Compose, don't configure.** Prefer small components and explicit props over large option objects and boolean flags.
- **Respect one-way data flow.** Pass data down, communicate events up. Do not mutate props or shared objects.
- **Render should be pure.** No side effects, network calls, DOM writes, or storage access during render.
- **Use effects for external systems only.** Subscriptions, timers, browser APIs, analytics, and imperative widgets belong in `useEffect` with cleanup.
- **Make impossible states unrepresentable.** Use discriminated unions and explicit loading/error/empty states instead of parallel booleans.
- **Prefer the platform.** Use semantic HTML and native controls before ARIA or custom widgets.

## Workflow

1. Read the feature's existing components, hooks, types, and nearby tests.
2. Identify the state owner and the render/update path before coding.
3. Split presentational components from data and side-effect logic.
4. Implement the smallest change that satisfies the requirement.
5. Check loading, empty, error, and disabled states.
6. Verify keyboard behavior, focus, labels, and reduced motion.
7. Run lint, typecheck, and the relevant tests/build.

## Performance guidance

- Measure before optimizing. Do not add `memo`, `useMemo`, or `useCallback` by default.
- Use stable keys from data IDs, never array indexes for reorderable lists.
- Split large routes or heavy widgets with `lazy` and `Suspense` when it improves first load.
- Keep context values stable and narrowly scoped; avoid one giant app context.
- Avoid expensive derived work in render; precompute or move it to data preparation.
- Use Motion for React deliberately. Animate transform/opacity, respect `prefers-reduced-motion`, and clean up animations.

## Common mistakes

- Using `useEffect` to derive values that could be computed in render.
- Copying props into state and then syncing them with an effect.
- Adding global state for data used by one component.
- Suppressing hook dependency warnings instead of fixing ownership.
- Nesting interactive elements or using clickable `div`s.
- Omitting alt text, labels, focus styles, or error announcements.
- Optimizing with memoization without evidence of a render problem.
- Forgetting cleanup for timers, listeners, observers, or animation controls.

## Standards and security

- React 19 + TypeScript strict mode; no `any` in component contracts.
- No `dangerouslySetInnerHTML` with untrusted content. If unavoidable, sanitize with a vetted library and document why.
- Never place secrets, tokens, or private API keys in client code or `VITE_` variables.
- Do not add a backend or data source without explicit approval.
- Keep imports through the `@/` alias and use `import type` for type-only imports.

## Definition of done

The change is focused, readable, accessible, and covered by the project's current checks. Report files changed, commands run, and any unverified behavior.

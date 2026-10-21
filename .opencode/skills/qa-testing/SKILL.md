---
name: QA and Testing
description: Use when reviewing code, reproducing bugs, writing tests, or verifying lint, typecheck, build, accessibility, and regression safety before completion.
---

# QA and Testing

## When to use

Use before considering work complete, when a bug is reported, when a change touches shared behavior, or when adding regression coverage. Use `security-review` for security-specific audits.

## Current project checks

The project currently has no test runner. These checks are available now:

```sh
npm run lint
npm run typecheck
npm run build
npm run dev
npm run preview
```

If tests become necessary, propose adding Vitest and React Testing Library together with a `test` script; do not add them silently.

## Test strategy

- **Static checks first:** lint, typecheck, and build catch a large class of regressions cheaply.
- **Unit tests:** pure functions, data transforms, validation, and state reducers.
- **Component tests:** user-visible behavior with React Testing Library; query by role and accessible name.
- **Integration tests:** feature flows across components, routing, and data boundaries.
- **End-to-end tests:** only critical user journeys, when the project has a stable runner and the cost is justified.

Prefer a few meaningful tests over broad snapshots. Every bug fix should have a regression test when practical.

## Review workflow

1. Read the change, its callers, and existing tests.
2. Identify the behavioral contract and failure modes.
3. Reproduce the issue with the smallest command or test.
4. Report findings by severity with file and line references.
5. Run the narrowest useful check, then the full project checks.
6. Re-test after fixes; state clearly what was not verified.

## Quality checklist

- [ ] Behavior matches the requirement, including empty, loading, error, and disabled states.
- [ ] No unhandled promise rejections, swallowed errors, or console errors.
- [ ] Types are strict; no new `any`, unsafe casts, or ignored diagnostics.
- [ ] Interactive elements are keyboard reachable with visible focus.
- [ ] Images have appropriate alternatives; forms have labels and error messages.
- [ ] Responsive behavior holds at 320px, 768px, and wide viewports.
- [ ] Reduced-motion users retain full functionality.
- [ ] No secrets, tokens, or personal data in client code, logs, or fixtures.
- [ ] Dependencies and lockfile changes are intentional and reviewed.
- [ ] Build output is reproducible.

## Debugging guidance

- Reproduce before changing code; record the exact input and expected/actual result.
- Reduce the failing case, then inspect the nearest state transition or boundary.
- Use browser devtools, React DevTools, network panels, and source maps before adding logs.
- Remove temporary logs and debugging code before completion.
- Fix the cause, not the symptom; avoid broad try/catch blocks that hide failures.

## Common mistakes

- Reporting "tests pass" without running them.
- Testing implementation details instead of user-visible behavior.
- Snapshot-only coverage that accepts unintended changes.
- Arbitrary delays and timing-based assertions.
- Adding a test framework or dependency without approval.
- Treating a green build as complete without reviewing the diff.
- Ignoring console warnings or accessibility failures.
- Modifying production code during a review instead of handing it back.

## Reporting

Use severity order: **blocking**, **should fix**, **nice to have**. For each finding include the file, line, impact, and a concrete fix. Finish with the exact commands run and their outcomes.

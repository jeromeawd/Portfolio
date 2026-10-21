---
name: Tailwind and shadcn/ui
description: Use when styling with Tailwind CSS v4, adding or modifying shadcn/ui components, managing design tokens, or debugging component variants and dark mode.
---

# Tailwind and shadcn/ui

## When to use

Use for styling implementation, design-token changes, shadcn/ui component work, variants, responsive utilities, and theme debugging. Use `ui-ux-design` for visual decisions.

## Project setup

- Tailwind CSS v4 with the `@tailwindcss/vite` plugin. There is no `tailwind.config.js`; configuration is CSS-first in `src/styles/globals.css`.
- `src/styles/globals.css` imports Tailwind, `tw-animate-css`, and the Geist variable font, then defines the shadcn utility CSS inline (`/* ejected from shadcn@4.22.1 */`).
- The shadcn CLI is intentionally not a project dependency. Run it on demand with `npx`; review generated code and dependencies before accepting them.
- Design tokens are CSS variables in `:root` and `.dark`, mapped to utilities through `@theme inline`.
- shadcn configuration lives in `components.json`; style is `radix-nova`, base color `neutral`, icons are Lucide.
- `@/lib/utils` re-exports `cn` from the `cn` package. Use `cn` for conditional classes and merging.
- shadcn components are generated into `src/components/ui` and owned by this repository. Treat them as source, not an opaque dependency.

## Guidelines

1. Use semantic utilities such as `bg-background`, `text-muted-foreground`, `border-border`, and `ring-ring` instead of hard-coded colors.
2. Use the token scale for radius, spacing, and typography. Avoid arbitrary values unless a design requirement cannot be expressed otherwise.
3. Keep variants in `cva` only when a component truly has reusable variants. Do not build a variant matrix for a one-off state.
4. Merge incoming `className` last with `cn` so callers can override presentation without breaking defaults.
5. Keep the `data-slot` attributes from generated components and use them for styling hooks.
6. Preserve the generated accessibility behavior of Radix primitives; do not replace focus management or ARIA wiring with custom JavaScript.
7. Support light and dark themes using the `.dark` class on an ancestor and the `dark:` variant.
8. Add components with the official CLI from the project root:

   ```sh
   npx shadcn@latest add button card dialog
   ```

   Review generated code and dependencies before accepting them.

## Responsive work

- Start with the smallest viewport and add breakpoints only when content needs them.
- Use container-aware layouts where possible; avoid fixed widths that clip long content.
- Test at 320px, 768px, 1024px, and a wide viewport, plus 200% text zoom.
- Prefer `min-h-svh`/`dvh` over `100vh` for full-height layouts.

## Common mistakes

- Adding a v3 `tailwind.config.js` or `@tailwind base/components/utilities` directives.
- Overriding generated shadcn internals instead of composing or wrapping them.
- Duplicating tokens with arbitrary hex values or local CSS variables.
- Removing `data-slot`, `asChild`, or focus styles from generated components.
- Using `@apply` extensively instead of component classes and utilities.
- Forgetting that `className` overrides must go through `cn`.
- Adding all shadcn components at once instead of only what the feature needs.
- Importing `cn` from the `cn` package directly; use `@/lib/utils` for the project convention.

## Security and quality

- Never pass untrusted HTML through `dangerouslySetInnerHTML`; sanitize and justify any exception.
- Do not add remote fonts, icons, or CDNs without approval; keep assets local and pinned.
- Verify keyboard, focus, disabled, loading, and error states after styling changes.
- Run `npm run lint`, `npm run typecheck`, and `npm run build` after theme or component changes.

## Workflow

1. Read `components.json`, `src/styles/globals.css`, and the nearest existing component.
2. Reuse an existing primitive or create a small wrapper before adding a new pattern.
3. Implement with semantic tokens and responsive behavior.
4. Check light/dark and keyboard states.
5. Run the project checks and report the exact results.

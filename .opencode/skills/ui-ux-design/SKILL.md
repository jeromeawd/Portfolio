---
name: UI/UX Design
description: Use when defining or auditing visual hierarchy, design tokens, responsive layouts, typography, color, interaction states, accessibility, dark mode, and motion.
---

# UI/UX Design

## When to use

Use before implementation to set direction, during implementation for layout and state decisions, and after implementation for a design and accessibility audit. Use `tailwind-shadcn` for the implementation mechanics.

## Design principles

- **Clarity before decoration.** Every element should have one clear purpose and visual priority.
- **Consistency through tokens.** Reuse spacing, radius, type, color, and motion tokens instead of one-off values.
- **Progressive disclosure.** Show the primary task first; move secondary detail behind deliberate interaction.
- **Responsive by content.** Design for small screens first, then let content determine breakpoints.
- **Accessible by default.** Accessibility is part of the design, not a post-implementation checklist.

## Layout and typography

- Use a constrained reading width and a predictable spacing rhythm.
- Establish one clear heading hierarchy; do not skip heading levels.
- Use a small type scale with intentional line-height and measure (about 45–75 characters for body text).
- Prefer alignment and spacing over borders and boxes to create grouping.
- Define behavior for narrow, medium, and wide layouts, including long labels and zoomed text.
- Do not rely on fixed heights for text; content must be allowed to wrap.

## Color and states

- Define semantic tokens rather than raw colors in components: background, foreground, muted, border, primary, destructive, ring.
- Verify text and meaningful UI contrast against WCAG 2.2 AA.
- Never use color alone to communicate status; pair it with text, icon, or pattern.
- Design hover, focus-visible, active, disabled, selected, loading, empty, and error states.
- Check light and dark themes separately; dark mode is not an inversion.

## Accessibility requirements

- All interactive elements are keyboard reachable and have a visible focus state.
- Controls have accessible names; icon-only buttons require a label.
- Tap targets are large enough (aim for 44×44 CSS pixels where practical).
- Motion respects `prefers-reduced-motion`; avoid flashing, parallax, and autoplay.
- Forms have persistent labels, inline errors, and error summaries where needed.
- Dialogs and menus manage focus, escape behavior, and the accessible name correctly.
- Provide text alternatives for informative images and charts.

## Motion

- Use motion to explain a change in state or spatial relationship, not to delay the task.
- Keep durations short and easing consistent; avoid animating layout properties when transform or opacity will do.
- Provide a reduced-motion path that keeps all content usable.
- Do not animate content that is still loading or unstable.

## Workflow

1. Inspect the existing design tokens, components, and the current screen.
2. State the user's primary goal and the visual hierarchy.
3. Define layout, states, and responsive behavior with concrete values.
4. Check contrast, keyboard flow, focus order, and reduced motion.
5. Hand implementation to `frontend-developer`; review the result against the spec.
6. Separate blocking accessibility issues from optional polish.

## Common mistakes

- Designing only the desktop happy path.
- Adding decorative gradients, shadows, or motion without hierarchy.
- Using placeholder text as a label.
- Low-contrast muted text used for essential information.
- Hover-only interactions and hidden focus styles.
- Inconsistent spacing and radius from arbitrary values.
- Treating dark mode as a simple color swap.
- Using charts or icons without labels or alternatives.

## Deliverable

Return: design intent, layout and responsive rules, token/state changes, accessibility findings, and a prioritized list of fixes. Do not edit files; implementation belongs to the frontend specialist.

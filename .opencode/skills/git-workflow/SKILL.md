---
name: Git Workflow
description: Use when preparing changes for review, writing commit messages, creating branches, resolving conflicts, or reviewing repository hygiene. Never commit, push, or rewrite history without explicit approval.
---

# Git Workflow

## When to use

Use when organizing changes, preparing a pull request, writing commit messages, reviewing a diff, or resolving a merge conflict. Use `vercel-deployment` for release and deployment steps.

## Core rules

- Never commit, push, create tags, open pull requests, force-push, or rewrite history unless the user explicitly asks.
- Keep each commit focused on one logical change.
- Never commit `node_modules`, `dist`, coverage output, local `.env` files, logs, or editor state.
- Review `git diff` and `git status` before proposing a commit.
- Do not bypass hooks with `--no-verify` unless the user approves and the reason is documented.
- Do not use destructive commands such as `git reset --hard`, `git clean -fd`, or `git checkout -- .` without explicit approval.

## Branching

- Use short, lowercase, kebab-case branches with a type prefix:
  - `feat/project-gallery`
  - `fix/mobile-nav-focus`
  - `chore/ci-node-version`
  - `docs/readme-setup`
- Branch from the current default branch and keep the branch scoped to one outcome.
- Rebase only on branches you own and only after confirming no one else is using them.

## Commit messages

Use Conventional Commits:

```text
<type>(<scope>): <imperative summary>

<optional body explaining why and notable trade-offs>

<optional footer, e.g. Refs #12>
```

Common types: `feat`, `fix`, `refactor`, `test`, `docs`, `build`, `ci`, `chore`, `perf`, `style`.

Examples:

```text
feat(projects): add filterable project list
fix(a11y): restore focus when the dialog closes
chore(deps): update vite to 8.3.4
```

Keep the summary under ~72 characters, use the imperative mood, and explain the why in the body when it is not obvious.

## Pre-commit review

1. Run `git status` and `git diff --stat`.
2. Read the full diff for accidental debug code, secrets, and unrelated changes.
3. Run the project checks that cover the change.
4. Confirm generated files and lockfile changes are intentional.
5. Stage specific paths rather than `git add -A` when the worktree contains unrelated changes.
6. Ask for approval before creating the commit.

## Pull requests

Include:

- The problem and the approach.
- Screenshots or recordings for visible UI changes.
- Accessibility notes for interactive changes.
- Exact validation commands and outcomes.
- Risks, follow-ups, and anything intentionally out of scope.
- Deployment notes if configuration or environment variables changed.

Keep pull requests reviewable. Split unrelated refactors from behavior changes.

## Conflicts

- Resolve conflicts in context; do not blindly accept one side.
- Re-run checks after resolution.
- Explain any dependency or lockfile conflict resolution.
- If the correct resolution is unclear, stop and ask rather than guessing.

## Common mistakes

- Committing secrets or `.env` files.
- Mixing formatting-only changes with behavior changes.
- Committing generated build output.
- Force-pushing a shared branch.
- Writing vague messages such as `fix stuff` or `updates`.
- Committing a failing build because "it works locally."
- Amending or squashing commits that were already pushed.

## Security

- Treat the repository as public. Never commit credentials, tokens, private URLs, or personal data.
- Review `.gitignore` whenever a new tool generates local files.
- If a secret is committed, stop, rotate it, and ask the user how to handle history. Deleting the file is not enough.
- Use signed commits or verified authors only when the user has configured them; do not change global Git identity as part of a task.

# Portfolio Foundation

A clean, feature-oriented foundation for a future React portfolio. **Status: foundation only.** The only UI is the default Vite starter shell; no portfolio pages, sections, content, backend, database, authentication, or external API have been implemented.

## Stack

- React 19 + TypeScript 6
- Vite 8
- Tailwind CSS 4 (CSS-first configuration)
- shadcn/ui (Radix primitives, Nova preset, neutral theme)
- Lucide React
- Motion for React
- ESLint 10 with the flat config format
- GitHub Actions and Vercel deployment configuration

## Requirements

- Node.js **22.12 or newer** (Node 24 recommended)
- npm 11 or newer

## Getting started

```sh
npm ci
npm run dev
```

The development server prints the local URL. The starter shell is intentionally temporary and should be replaced when portfolio implementation begins.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run lint` | Run ESLint with zero warnings allowed |
| `npm run typecheck` | Type-check the app and Vite config |
| `npm run build` | Type-check and create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Structure

```text
.
├── public/
│   ├── images/
│   ├── icons/
│   └── projects/
├── src/
│   ├── app/
│   │   ├── providers/
│   │   └── routes/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── shared/
│   │   └── sections/
│   ├── features/
│   │   ├── projects/{components,hooks,data,types}/
│   │   ├── skills/
│   │   ├── experience/
│   │   └── contact/
│   ├── hooks/
│   ├── lib/
│   ├── data/
│   ├── types/
│   ├── styles/
│   │   ├── globals.css
│   │   └── starter.css
│   ├── App.tsx
│   └── main.tsx
├── .opencode/
│   ├── agents/
│   └── skills/
├── .github/workflows/ci.yml
├── components.json
├── eslint.config.js
├── vercel.json
└── vite.config.ts
```

Empty directories are preserved with `.gitkeep`. Feature code should stay inside its feature; shared primitives belong in `src/components`, and cross-cutting utilities belong in `src/lib`.

## Styling

- `src/styles/globals.css` is the design-system entry point: Tailwind, the Geist font, theme tokens, dark-mode tokens, and the shadcn utility CSS.
- The shadcn utility CSS is inlined (ejected from shadcn 4.22.1) so the CLI stays an on-demand tool and is not a project dependency.
- Tailwind CSS 4 is configured through `@tailwindcss/vite` and CSS, not `tailwind.config.js`.
- shadcn configuration is in `components.json` (`radix-nova`, neutral base, Lucide icons).
- `src/lib/utils.ts` re-exports the project's `cn` helper.
- `src/styles/starter.css` exists only to style the temporary Vite starter shell. Delete it together with the starter content when implementation starts.

Add only the shadcn components a feature needs:

```sh
npx shadcn@latest add button card dialog
```

## Environment variables

Copy `.env.example` to `.env.local` for local overrides. Only `VITE_`-prefixed variables are exposed to the browser, so they must never contain secrets. Real deployment secrets belong in Vercel's environment settings, never in the repository.

## OpenCode agents

Project agents live in `.opencode/agents/` and use the OpenCode V2 Markdown format (`description`, `mode`, `permissions`, and the prompt body). They are subagents: the primary agent delegates work to them. Each agent has least-privilege permissions and cannot launch further subagents.

| Agent | Responsibility |
| --- | --- |
| `frontend-developer` | React/TypeScript implementation, component architecture, styling, accessibility, performance |
| `ui-ux-designer` | Design system, responsive behavior, accessibility, visual review (read-only) |
| `backend-database-developer` | API design, schema, migrations, secure server-side work — only when explicitly approved |
| `data-visualization-specialist` | Charts, dashboards, data shaping, visualization accessibility |
| `qa-code-reviewer` | Review, testing, debugging, regression checks; test-only edits |
| `devops-deployment` | Git hygiene, CI, environment configuration, Vercel readiness; no autonomous deploys |

Example prompts:

```text
Use the frontend-developer subagent to refactor the project card into the projects feature.
Use the qa-code-reviewer subagent to review the current changes.
Use the ui-ux-designer subagent to audit the new page for accessibility.
```

## Reusable skills

Skills live in `.opencode/skills/<id>/SKILL.md` and are discovered by OpenCode:

- `react-best-practices`
- `typescript-conventions`
- `ui-ux-design`
- `tailwind-shadcn`
- `data-visualization`
- `qa-testing`
- `git-workflow`
- `security-review`
- `vercel-deployment`

They are loaded on demand by agents. No global OpenCode configuration or third-party agent collection was installed.

## Quality checks

```sh
npm run lint
npm run typecheck
npm run build
```

CI runs the same checks on pushes to `main` and on pull requests using `.github/workflows/ci.yml`.

## Git and GitHub

The repository includes `.gitignore`, Conventional Commit guidance in the `git-workflow` skill, and a GitHub Actions quality workflow. Git history and remotes are intentionally not created or modified by this foundation. When ready:

```sh
git init -b main
git add .
git commit -m "chore: initialize portfolio foundation"
git remote add origin <your-repository-url>
git push -u origin main
```

Do not commit `.env.local`, `dist/`, `node_modules/`, or Vercel project state.

## Vercel

`vercel.json` pins the Vite framework, `npm ci`, and the `dist` output. Import the repository into Vercel and configure environment variables there. Preview deployments can be tested before production promotion.

SPA rewrites are intentionally not configured until client-side routing exists. Add a rewrite to `/index.html` only when a router is introduced.

No deployment has been performed.

## Security notes

- No secrets are included in the repository; only `.env.example` is tracked.
- All dependencies are installed from the lockfile.
- The shadcn CLI is used on demand through `npx`; it is not installed in the project. This keeps its dependency tree out of the build and audit surface.
- `npm audit` reported 0 vulnerabilities after the final clean install. Re-run it before release and review advisories rather than applying forced downgrades.

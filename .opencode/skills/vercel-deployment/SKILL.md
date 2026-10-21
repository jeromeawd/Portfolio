---
name: Vercel Deployment
description: Use when preparing or reviewing Vercel deployment for this Vite app, including build settings, environment variables, previews, production promotion, caching, and SPA routing.
---

# Vercel Deployment

## When to use

Use when configuring Vercel, checking deployment readiness, documenting environment variables, or diagnosing a build that differs between local and Vercel. Do not deploy without explicit approval.

## Project settings

- Framework preset: **Vite**
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`
- Node version: 22.12 or newer, aligned with `package.json` engines and CI.
- The app is a static SPA; no server runtime is required.

The repository's `vercel.json` should stay minimal and consistent with these values.

## Environment variables

- Vite exposes only variables prefixed with `VITE_` to the browser. Treat all of them as public.
- Keep real secrets in Vercel's encrypted environment settings, scoped to the correct environment.
- Add variable names and safe placeholders to `.env.example`; never commit real values.
- Changing an environment variable requires a new deployment to take effect.
- Do not use `vercel env pull` to overwrite a local file without checking for existing local values.

## Workflow

1. Confirm the local build passes with `npm ci` followed by `npm run build`.
2. Verify `package.json` engines, lockfile, `vercel.json`, and the Vite output directory.
3. Confirm required environment variables exist for the target environment.
4. Deploy a preview first and test the built output.
5. Check routing, asset caching, fonts, and security headers on the preview.
6. Promote to production only after explicit approval.
7. Record the deployment URL, commit SHA, and rollback target.

## Routing and caching

- Hash-named assets under `dist/assets` can be cached immutably.
- `index.html` must not be cached long-term; it references hashed assets.
- If client-side routing is added, add a Vercel rewrite that sends unknown paths to `/index.html`. Do not add the rewrite before a router exists; it can mask 404s.
- Do not add catch-all rewrites that shadow static files or API routes.

## Security headers

When the site has a stable content and script inventory, consider:

- `Content-Security-Policy` with an explicit allowlist.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` to disable features the site does not use.
- HSTS only on the production domain with HTTPS confirmed.

Do not add a restrictive CSP that breaks fonts, analytics, or inline styles without testing it on a preview.

## CLI and automation

```sh
npx vercel          # preview, requires an authenticated account
npx vercel --prod   # production, requires explicit approval
```

- Use project-local `npx`, not a global install.
- Never place a Vercel token in the repository or a workflow log.
- GitHub integration can create preview deployments per pull request; production should follow the chosen branch policy.
- Do not connect a custom domain, change DNS, or promote production without approval.

## Common mistakes

- Deploying without running the production build locally.
- Using `npm install` instead of `npm ci` and getting a different dependency tree.
- Forgetting that `VITE_` variables are public and baked into the bundle at build time.
- Adding an SPA rewrite before routing exists.
- Caching `index.html` aggressively.
- Committing `.vercel/` or `.env.local`.
- Assuming a preview environment has production secrets.
- Promoting a preview without a rollback plan.

## Output

Report: configuration reviewed, checks run, preview URL if one exists, environment variables required, security headers considered, and the explicit approval still needed for production.

---
name: Security Review
description: Use when reviewing a change for client-side security, secrets exposure, dependency and supply-chain risk, unsafe HTML, external links, forms, headers, or least-privilege configuration.
---

# Security Review

## When to use

Use for security-focused reviews of frontend code, dependency changes, environment configuration, external integrations, forms, and deployment headers. Use `vercel-deployment` for platform configuration and `qa-testing` for general verification.

## Threat model for this project

This is a static React portfolio with no backend by default. The main risks are:

- Secrets accidentally exposed in client bundles, source maps, or Git history.
- Supply-chain risk from dependencies, CDNs, fonts, icons, analytics, and build tooling.
- Cross-site scripting through untrusted HTML, URLs, markdown, or third-party embeds.
- Privacy leaks through analytics, form endpoints, referrers, or error reporting.
- Weak transport, framing, or content-security headers on the deployed site.
- Over-permissioned agents or automation with shell access.

Adding a backend, database, authentication, or form processor changes the threat model. Review it separately before implementation.

## Checklist

- [ ] No secrets or private tokens in tracked files, client code, `VITE_` variables, logs, or fixtures.
- [ ] `.env*` files are ignored except `.env.example`, which contains names and safe placeholders only.
- [ ] Every environment variable has an owner, purpose, and scope documented.
- [ ] Dependencies are necessary, maintained, and installed from the lockfile.
- [ ] `npm audit --omit=dev` is reviewed for production risk; dev-only findings are documented.
- [ ] No unnecessary third-party scripts, remote fonts, or CDNs.
- [ ] No `dangerouslySetInnerHTML` or raw HTML injection with untrusted content.
- [ ] User-controlled URLs are validated; outbound links use `rel="noopener noreferrer"` with `target="_blank"`.
- [ ] Forms validate input client-side for usability and would validate again server-side if a backend is added.
- [ ] Authentication and authorization are never enforced only in the client.
- [ ] No sensitive data in URLs, localStorage, sessionStorage, or analytics events.
- [ ] The deployed site uses HTTPS and appropriate security headers.
- [ ] CI and agent permissions follow least privilege.

## Workflow

1. Identify what is trusted, what crosses a boundary, and where it is stored or rendered.
2. Inspect the diff plus the surrounding data flow, not just the changed line.
3. Check dependency and configuration changes separately from application code.
4. Classify findings by exploitability and impact: high, medium, low, informational.
5. Provide a concrete remediation and a verification method for each finding.
6. Do not run exploit code, access production data, or test against systems you do not own.

## Secrets and configuration

- Only `VITE_` variables reach the browser. They are public; never use them for secrets.
- Store real secrets in the platform's encrypted environment settings, never in the repository.
- Rotate any exposed credential immediately and treat Git history cleanup as a separate, approved operation.
- Do not weaken CSP, CORS, TLS, or cookie settings to make a local demo work.

## Common mistakes

- Assuming a private repository makes secrets safe.
- Putting an API key in `VITE_API_KEY` and calling it secure.
- Trusting `dangerouslySetInnerHTML`, markdown HTML, or user-supplied SVG.
- Adding analytics that collect more data than necessary.
- Ignoring transitive dependency advisories or blindly running `npm audit fix --force`.
- Using `target="_blank"` without `noopener`.
- Giving an automation agent broad shell or deploy permissions.
- Reviewing only the client when a backend or form endpoint is involved.

## Output

Report findings in severity order with file and line references, the realistic attack path, the remediation, and the checks performed. State clearly what remains unverified.

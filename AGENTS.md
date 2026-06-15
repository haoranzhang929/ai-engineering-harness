# AI Agent Instructions

This is the primary instruction file for AI coding agents working in this repository.

## Project Purpose

`ai-engineering-harness` is a lightweight TypeScript scaffold for small engineering projects that may use AI assistance. It is intended for prototypes, small tools, technical experiments, and general software engineering workflows.

The repository should stay generic, minimal, readable, and suitable for use as a public GitHub template.

## Operating Principles

- Keep changes small and easy to review.
- Prefer explicit, readable code over clever abstractions.
- Make requirements, assumptions, trade-offs, and verification steps visible.
- Preserve framework independence unless a project clearly needs a framework.
- Avoid creating agent platforms, dashboards, prompt runners, transcript parsers, or orchestration systems.
- Do not add private, proprietary, or sensitive content.

## Coding Style

- Use TypeScript with strict type checking.
- Avoid `any`; prefer precise types and small helper functions.
- Keep functions focused and names clear.
- Do not introduce abstractions before there is a real need.
- Use ESM imports and exports.
- Follow the existing ESLint and TypeScript configuration.

## Dependency Policy

- Avoid unnecessary dependencies.
- Do not add dependencies without a clear reason.
- Prefer the standard library and small local functions when they are sufficient.
- If a dependency is added, document why it is needed and consider security, maintenance, license, and project size.

## Testing Expectations

- Add or update tests for behavior changes.
- Include happy-path and edge-case coverage for project logic.
- Keep tests meaningful and focused on observable behavior.
- Do not fabricate test results.

## Documentation Expectations

- Update README or docs when behavior, workflows, commands, or project intent changes.
- Record important decisions in `docs/decisions/`.
- Use the templates in `docs/` and `ai-log/` when useful.
- Keep AI collaboration notes curated and professional; do not store raw private transcripts.

## Security and Privacy Rules

- Never add secrets, tokens, credentials, private keys, private prompts, or sensitive data.
- Do not commit `.env` files or local-only notes.
- Treat AI-generated code and text as untrusted until reviewed.
- Do not paste proprietary content into prompts, documentation, tests, or logs.

## AI Collaboration Policy

AI may assist with:

- requirement analysis
- implementation options
- edge-case discovery
- test suggestions
- documentation review
- code review

AI must not:

- claim ownership of final code
- add secrets, tokens, credentials, private task prompts, or sensitive data
- introduce dependencies without justification
- perform large rewrites without first proposing a plan
- fabricate test results

The human engineer owns final implementation, validation, trade-offs, license compliance, and readiness.

## Required Verification

Before considering a change ready, run:

```sh
npm run verify
```

This command must pass unless the result is clearly documented with a reason and follow-up.

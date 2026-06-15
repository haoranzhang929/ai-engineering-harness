# Contributing

Thank you for helping improve this harness. Keep contributions small, practical, and easy to review.

## Install

Use Node.js 24 and npm.

```sh
npm ci
```

## Verify

Run the full verification command before opening a pull request:

```sh
npm run verify
```

This runs type checking, linting, tests, and a build.

## Coding Style

- Write strict TypeScript.
- Avoid `any`.
- Prefer direct, readable code.
- Keep abstractions small and justified.
- Do not add dependencies unless they are necessary and explained.

## Documentation Expectations

Update documentation when you change behavior, commands, project structure, or workflow guidance. Use the templates in `docs/` when capturing requirements, assumptions, trade-offs, or decisions.

## Pull Request Expectations

Include:

- a concise summary
- verification performed
- relevant risks or trade-offs
- AI assistance disclosure, when applicable
- notes for reviewers

## AI-Assisted Contributions

AI assistance is allowed, but the contributor remains responsible for the final change. Do not submit AI-generated output that has not been reviewed, tested, and checked for sensitive data or licensing concerns.

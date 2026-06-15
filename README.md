# ai-engineering-harness

[![Verify](https://github.com/haoranzhang929/ai-engineering-harness/actions/workflows/verify.yml/badge.svg)](https://github.com/haoranzhang929/ai-engineering-harness/actions/workflows/verify.yml)
[![CodeQL](https://github.com/haoranzhang929/ai-engineering-harness/actions/workflows/codeql.yml/badge.svg)](https://github.com/haoranzhang929/ai-engineering-harness/actions/workflows/codeql.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

A lightweight TypeScript engineering scaffold for small AI-assisted software projects.

This repository is designed to be used as a public GitHub template for prototypes, small tools, technical experiments, and general engineering workflows. It provides a minimal project structure, repeatable verification commands, and plain-language documentation templates for working with AI coding assistants while keeping ownership and review with the human engineer.

## Why This Exists

AI-assisted development works best when the task, assumptions, trade-offs, and validation steps are visible. This harness gives a small project enough structure to support that workflow without introducing a product framework, agent runtime, dashboard, or custom tooling.

The goal is to help a developer start with clear requirements, implement in small steps, verify continuously, and document important decisions.

## Core Principles

- Keep the scaffold minimal and practical.
- Prefer explicit, readable code over clever abstractions.
- Make AI collaboration visible, reviewable, and human-owned.
- Make verification easy and repeatable.
- Avoid unnecessary dependencies.
- Avoid framework lock-in.
- Do not store private prompts, secrets, credentials, or sensitive content.

## Repository Structure

```text
.
├── src/                    # Small TypeScript source files
├── examples/               # Runnable examples for local exploration
├── tests/                  # Vitest tests
├── docs/                   # Workflow notes, templates, and decisions
├── prompts/                # Reusable AI prompt templates
├── ai-log/                 # Curated AI collaboration note templates
└── .github/                # GitHub Actions, CodeQL, Dependabot, and PR template
```

Key files:

- `AGENTS.md` is the primary instruction file for AI coding agents.
- `AI_USAGE_TEMPLATE.md` records how AI assistance was used on a change.
- `docs/workflow.md` describes the recommended engineering workflow.
- `docs/decisions/` stores lightweight architecture decision records.

## Use as a Template

1. Create a new repository from this template.
2. Rename the package for your project:

   ```sh
   npm pkg set name="your-project-name"
   npm install
   npm run verify
   ```

   `npm install` refreshes `package-lock.json` so the lockfile matches the renamed package metadata.

3. Replace the tiny example in `src/`, `examples/`, and `tests/` with your project code.
4. Capture project requirements in `docs/requirements.template.md` or a copy of it.
5. Record assumptions, trade-offs, and AI collaboration notes as the work evolves.

For existing repositories, use `starters/existing-project-harness.md` to retrofit workflow, documentation, and verification guardrails without replacing the project's stack.

## Install

Use Node.js 24 and npm.

```sh
npm ci
```

For a fresh local setup before a lockfile exists:

```sh
npm install
```

## Run Checks

```sh
npm run verify
```

The verification command runs type checking, linting, format checking, tests, and a production build:

```sh
npm run typecheck && npm run lint && npm run format:check && npm run test && npm run build
```

Individual commands are also available:

```sh
npm run dev
npm run test
npm run test:watch
npm run lint
npm run format
npm run format:check
npm run typecheck
npm run build
```

## AI Collaboration Workflow

AI tools may help with requirement analysis, implementation options, edge-case discovery, test suggestions, documentation review, and code review. They should support engineering judgment rather than replace it.

Recommended flow:

1. Capture the task and acceptance criteria.
2. Ask AI to identify assumptions, risks, and edge cases.
3. Ask for a small implementation plan before writing code.
4. Implement one narrow change at a time.
5. Run verification locally.
6. Review AI-assisted changes as human-owned code.
7. Summarize useful AI assistance in curated notes without storing raw private transcripts.

Use `AI_USAGE_TEMPLATE.md` or the templates in `ai-log/` when a change should disclose AI assistance.

## Verification Workflow

Run `npm run verify` before opening a pull request. CI runs the same command on pushes to `main` and on pull requests.

The repository also includes CodeQL analysis for JavaScript and TypeScript and Dependabot configuration for npm dependency updates.

## Documentation Workflow

Use the templates in `docs/` to keep project context lightweight and reviewable:

- Start with requirements and acceptance criteria.
- Record assumptions that affect implementation choices.
- Document trade-offs when choosing between reasonable alternatives.
- Add a decision record for choices that future maintainers should understand.
- Summarize AI collaboration in polished notes rather than raw transcripts.

## Security and Privacy

Do not commit secrets, tokens, credentials, `.env` files, private prompts, proprietary content, raw AI transcripts, or sensitive user data. Prefer curated summaries over raw transcripts. Treat AI-generated content as untrusted until reviewed.

If you find a vulnerability, follow `SECURITY.md` and avoid opening a public issue for sensitive details.

## Intentionally Not Included

This repository does not include:

- a frontend framework
- a backend web framework
- a database
- Docker
- Storybook
- Playwright
- monorepo tooling
- a custom CLI
- a prompt runner
- an AI chat transcript parser
- agent orchestration

Those can be added by a project that needs them, with clear justification and verification.

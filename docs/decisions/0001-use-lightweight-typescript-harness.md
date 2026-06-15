# 0001: Use a Lightweight TypeScript Harness

## Status

Accepted

## Context

Small AI-assisted engineering projects benefit from clear requirements, typed implementation, repeatable checks, and visible decisions. A heavy framework or custom agent system would add maintenance cost before there is a demonstrated need.

The repository should work as a reusable public template for prototypes, small tools, technical experiments, and general workflows.

## Decision

Use a minimal TypeScript harness with Node.js 24, npm, strict TypeScript settings, ESLint flat config, Vitest, GitHub Actions verification, CodeQL, Dependabot, and plain Markdown documentation templates.

Avoid frontend frameworks, backend frameworks, databases, Docker, monorepo tooling, custom CLIs, prompt runners, transcript parsers, and agent orchestration.

## Consequences

The repository is small, easy to understand, and quick to adapt. Projects that need additional infrastructure can add it later with explicit justification.

The harness does not provide application architecture beyond a simple TypeScript project layout. Teams must choose project-specific frameworks or services when their requirements demand them.

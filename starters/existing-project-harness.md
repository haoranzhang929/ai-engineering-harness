# Existing Project Harness Starter

Use this starter when applying the AI engineering harness to an existing repository.

This is for retrofitting workflow, documentation, and verification guardrails into a project that already has its own stack and conventions. It should support the existing project, not replace its architecture, package manager, build system, test runner, lint setup, CI, or documentation structure.

## Purpose

This starter helps an AI coding agent add a lightweight AI-assisted engineering workflow to an existing project.

The goal is to make engineering work:

- easier to verify
- easier to review
- clearer about requirements and assumptions
- transparent about AI assistance
- safer around secrets and private content
- aligned with the project's existing conventions

## When to Use This Starter

Use this starter when:

- the project already exists
- the stack is already chosen
- you want better requirement tracking
- you want clearer verification commands
- you want curated AI collaboration notes
- you want reusable prompts for planning, review, and testing
- you want a lightweight `AGENTS.md` or equivalent instruction file

Do not use this starter to force TypeScript, Node.js, npm, Vitest, ESLint, GitHub Actions, or any other tooling onto a project that does not already use or need it.

## Operating Principles

- Inspect before changing.
- Preserve existing project conventions.
- Produce a plan before editing.
- Make changes in small, reviewable steps.
- Prefer documentation and verification wiring over architecture changes.
- Add only minimal harness files.
- Do not assume TypeScript, Node.js, npm, Vitest, ESLint, Prettier, GitHub Actions, or any specific framework unless the project already uses them.
- Detect the package manager from lockfiles, such as `package-lock.json`, `npm-shrinkwrap.json`, `pnpm-lock.yaml`, `yarn.lock`, `bun.lock`, `bun.lockb`, `Pipfile.lock`, `poetry.lock`, `uv.lock`, `Cargo.lock`, `go.sum`, or equivalent project files.
- Detect existing install, test, build, lint, typecheck, format, and CI commands before adding or changing commands.
- Avoid dependencies unless there is a clear, explicit justification.
- Keep AI collaboration notes curated. Do not store raw transcripts.
- Do not commit secrets, credentials, private prompts, proprietary content, or sensitive data.
- Treat AI-generated changes as untrusted until reviewed and verified.
- Run existing verification commands after changes.
- The human engineer owns final implementation, validation, trade-offs, license compliance, and readiness.

## Copy-Paste Prompt for AI Coding Agents

```text
You are helping retrofit a lightweight AI-assisted engineering harness into an existing repository.

Important:
Do not assume this project uses TypeScript, Node.js, npm, Vitest, ESLint, Prettier, GitHub Actions, or any specific framework.

First inspect the project and preserve its existing conventions.

Your goal is to add minimal workflow and documentation support for:
- requirement tracking
- assumptions
- trade-offs
- AI collaboration summaries
- reusable AI prompts
- verification clarity
- safe handling of private or sensitive content

Do not replace the existing architecture.
Do not change the package manager.
Do not add dependencies unless there is a clear justification and I approve it.
Do not rewrite existing build, lint, test, format, typecheck, or CI configuration unless needed and explained.
Do not add dashboards, CLIs, prompt runners, transcript parsers, agent orchestration, databases, Docker, or frameworks.
Do not commit secrets, credentials, private prompts, proprietary content, raw AI transcripts, or sensitive data.

Step 1 - Inspect

Inspect the repository and report:

1. Primary language and framework, if any
2. Package manager or build tool, inferred from lockfiles and project files
3. Existing scripts or commands for:
   - install
   - dev
   - test
   - lint
   - typecheck
   - build
   - format
   - verify or CI
4. Existing documentation structure
5. Existing CI configuration
6. Existing AI instruction files, such as:
   - AGENTS.md
   - CLAUDE.md
   - .github/copilot-instructions.md
7. Existing security and privacy guidance
8. Gaps that a lightweight harness could fill

Do not edit files yet.

Step 2 - Propose a minimal plan

Propose a small plan with:

1. Files to add
2. Files to modify
3. Existing conventions to preserve
4. Verification commands to run
5. Risks
6. What you will intentionally not change

Prefer adding documentation and prompts before adding tooling.
Do not proceed to edits until the plan is clear.

Step 3 - Add only minimal harness files

Add only files that fit this project.

Suggested files, if missing and appropriate:

- AGENTS.md
- AI_USAGE_TEMPLATE.md
- docs/requirements.template.md
- docs/assumptions.template.md
- docs/tradeoffs.template.md
- docs/ai-collaboration.template.md
- prompts/01-analyze-task.md
- prompts/02-plan-implementation.md
- prompts/03-implement-small-step.md
- prompts/04-review-code.md
- prompts/05-generate-tests.md
- prompts/06-final-review.md
- ai-log/README.md
- ai-log/*.template.md

Only add .github/copilot-instructions.md if this repository uses GitHub and the file does not already exist.
Only add CLAUDE.md if useful for this project.
Only modify CI if there is already a clear verification command and the change is minimal.

Step 4 - Preserve verification

If the project already has a verification command, document it.

If the project has separate commands, such as test, lint, typecheck, format, and build, suggest a unified verify command only if it fits the existing package manager or build system.

Do not add a verify command that breaks existing workflows.

Step 5 - Review

After changes, summarize:

1. Files added
2. Files modified
3. Existing conventions preserved
4. Verification commands run
5. Any commands that could not be run
6. Any remaining manual steps
7. Any risks or follow-up recommendations

Before finalizing, check for:

- secrets
- credentials
- private prompts
- proprietary content
- raw AI transcripts
- unnecessary dependencies
- broad rewrites
- duplicate tooling
- broken existing commands
```

## Suggested Minimal Files to Add

For most existing projects, the smallest useful set is:

```text
AGENTS.md
AI_USAGE_TEMPLATE.md
docs/requirements.template.md
docs/assumptions.template.md
docs/tradeoffs.template.md
docs/ai-collaboration.template.md
prompts/01-analyze-task.md
prompts/02-plan-implementation.md
prompts/03-implement-small-step.md
prompts/04-review-code.md
prompts/05-generate-tests.md
prompts/06-final-review.md
ai-log/README.md
```

Optional files:

```text
.github/copilot-instructions.md
CLAUDE.md
.github/pull_request_template.md
```

Only add optional files if they fit the project.

## Verification Checklist

Before considering the retrofit complete:

- [ ] Existing package manager was detected from lockfiles or project conventions
- [ ] Existing package manager was preserved
- [ ] Existing framework and architecture were preserved
- [ ] Existing scripts were detected and documented
- [ ] Existing scripts were not broken
- [ ] Existing CI was not replaced unnecessarily
- [ ] No unnecessary dependencies were added
- [ ] Added harness files are minimal and useful
- [ ] AI instructions are clear and project-specific
- [ ] AI usage documentation emphasizes curated summaries, not raw transcripts
- [ ] Secrets, private prompts, credentials, proprietary content, and sensitive data are excluded
- [ ] Existing verification commands pass, or failures are documented
- [ ] Changes are small enough to review

## What Not to Do

Do not:

- replace the project's stack
- assume TypeScript, Node.js, npm, Vitest, or ESLint
- add a new framework
- add a new package manager
- add a database
- add Docker
- add a CLI
- add a dashboard
- add agent orchestration
- add prompt execution tooling
- add raw transcript parsing
- rewrite existing CI without a clear reason
- add dependencies just because this harness uses them elsewhere
- copy private prompts or sensitive task content into the repository

## Final Review Checklist

Before sharing or merging the retrofit:

- [ ] The harness supports the project instead of taking over the project
- [ ] The added files are useful without being noisy
- [ ] Existing conventions are preserved
- [ ] The AI collaboration policy is clear
- [ ] The human ownership boundary is clear
- [ ] The verification path is documented
- [ ] Existing verification commands were run after changes
- [ ] The project remains easy to understand
- [ ] No sensitive content was committed

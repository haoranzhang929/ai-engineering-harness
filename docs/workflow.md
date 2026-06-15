# Engineering Workflow

This workflow is designed for small projects where clear thinking and repeatable checks matter more than heavy process.

## 1. Capture Requirements

Write down the problem, explicit requirements, acceptance criteria, and known constraints before implementation begins.

## 2. Identify Assumptions

Record assumptions that affect the design or implementation. Include why each assumption exists and how it can be validated.

## 3. Define the Smallest Useful Solution

Choose the smallest implementation that satisfies the current requirements. Keep future possibilities visible without building them early.

## 4. Implement Incrementally

Make one narrow change at a time. Keep code readable, typed, and easy to review.

## 5. Validate Continuously

Run focused tests while working and run `npm run verify` before considering the change ready.

## 6. Review AI-Assisted Changes

Treat AI-assisted output as a draft. Review correctness, edge cases, security, privacy, dependencies, tests, and maintainability.

## 7. Document Decisions and Trade-Offs

Use the templates in `docs/` to capture important choices, alternatives considered, intentional simplifications, and future improvements.

## 8. Perform Final Cleanup

Remove unused code, unnecessary files, local-only notes, and sensitive content. Confirm documentation and verification results before opening a pull request.

# Security Policy

## Reporting Security Issues

If you believe you found a security issue, do not open a public issue with sensitive details. Report it privately to the repository owner or maintainer using the preferred private contact method listed on the repository.

Include enough information to reproduce or understand the issue, but do not include unrelated secrets, credentials, or sensitive user data.

## Secret Handling

- Do not commit secrets, tokens, credentials, private keys, or `.env` files.
- Do not paste secrets into AI prompts, documentation, examples, tests, or logs.
- Rotate any credential that may have been exposed.
- Treat AI-generated code as untrusted until reviewed.

## Local Configuration

Use local environment files only on your machine. `.env` and `.env.*` are ignored by default and should remain untracked.

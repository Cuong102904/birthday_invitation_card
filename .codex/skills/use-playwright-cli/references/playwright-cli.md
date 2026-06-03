# Playwright CLI Quick Reference

## When to use

Use Playwright CLI when you need browser-level validation that cannot be answered from source code alone.

## Prompt pattern

Ask Codex to do three things:

1. Open the target app or page
2. Perform the user flow
3. Report the result with evidence

Example:

```text
Use $use-playwright-cli to open http://localhost:5173, submit the form, and report any console errors.
```

## Practical checklist

- Confirm the URL
- Confirm the app is running
- Describe the exact flow
- Request screenshot or error output if the result matters

## Best practices

- Keep selectors stable
- Prefer visible text and roles when possible
- Test one flow at a time
- Ask for the minimal evidence needed to verify the issue

---
name: react-best-practices
description: Build or review React and Next.js interfaces with attention to rendering, data flow, performance, and component boundaries. Use when editing React code, especially data fetching or client/server boundaries.
---

# React Best Practices

- Read the app's framework and version, route structure, and existing component patterns before proposing changes.
- Keep state close to the components that need it. Prefer derived values over duplicated state, and avoid effects for work that can happen during render or in an event handler.
- In Next.js, choose server and client components deliberately. Keep client boundaries small and do not move server-only work into the browser.
- Look for sequential network requests that can run independently, oversized client imports, unnecessary re-renders, and repeated expensive calculations.
- Preserve accessible semantics and predictable loading, empty, error, and success states while optimizing.
- Measure or inspect the relevant route before claiming a performance improvement. Avoid memoization or caching without a concrete reason.
- Follow the project's established data-fetching and caching rules; framework defaults differ by version.

For Vercel Engineering's detailed React and Next.js rules, see [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices).

# ADR 0001: Static Site Stack

## Status

Accepted

## Context

The Marine Data Science website should be static and deployable to GitHub Pages. The prepared source material is already Markdown/MDX-like and includes local assets, frontmatter, and page bodies. The demo should produce a maintainable research-group site rather than a disposable prototype.

## Decision

Use Astro with TypeScript and MDX/content collections as the primary site stack.

The implementation should:

- statically generate pages for GitHub Pages
- keep client-side JavaScript minimal
- use TypeScript for content schemas, helpers, and route logic
- use MDX/content collections or equivalent Astro content APIs for structured content loading
- use plain Astro components and CSS before adding additional UI frameworks

## Consequences

Astro keeps the site simple and static while still supporting reusable components, typed content, MDX pages, and modern build tooling. It also fits a content-heavy academic website better than a client-rendered app.

The project should not introduce a heavier framework unless a future ADR documents a concrete need that Astro cannot satisfy.

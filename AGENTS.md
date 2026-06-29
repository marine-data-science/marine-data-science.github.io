# Repository Guidance

This repository contains the source material and implementation workspace for a demo website for the Marine Data Science research group.

## Project Direction

- Build a static website that can be deployed to GitHub Pages.
- Use Astro, TypeScript, and MDX/content collections unless a later ADR replaces that decision.
- Keep client-side JavaScript minimal. Prefer static rendering and progressive enhancement only where there is a clear user benefit.
- The site should serve two main audiences:
  - students looking for thesis topics, teaching information, and approachable entry points into the group
  - researchers, institutions, and companies looking for expertise and possible cooperation partners

## Source Boundaries

- Treat `1 - content/` as prepared source material for the website.
- Treat `2 - styling/` as the visual direction and asset source for the website.
- Treat `3 - prepared prompts/` as demo planning material. These files are not website content and must not become generated site pages.
- Do not move or rename the prepared folders during the initial implementation.
- Preserve content provenance where available, especially frontmatter such as `sourceUrl`.
- Use `2 - styling/design-direction.md` as the source of truth for visual impression. Do not duplicate or reinvent the design brief unless an implementation conflict is discovered and documented.

## Architecture Expectations

- Prefer clean, maintainable architecture over throwaway demo code.
- Separate content ingestion and normalization from visual rendering.
- Use typed schemas or content collection definitions for structured content once the Astro scaffold exists.
- Keep reusable UI components focused on stable concepts such as layout, navigation, cards, metadata rows, page shells, and contact sections.
- Avoid hard-copying prepared content into components. Components should render content loaded from source files.
- Keep routes and navigation explicit and reviewable.

## Content Modeling Expectations

- Model People, Research, Projects, and Theses as first-class content areas.
- Support overview and detail pages for complex entities where source material exists.
- Support People entries that appear only on the overview page without inventing detail pages.
- Keep Publications compact and year-grouped rather than forcing every publication into an individual MDX page.
- Treat Theses as a hybrid area: a student-facing landing/list page plus individual detail pages for topics with full source files.
- Start Teaching as a simple page; split it into a richer model only when the content requires it.

## Quality And Testing

- Use TDD where appropriate. Add tests for non-trivial schemas, content loading helpers, route generation, parsing logic, and behavior that could regress.
- Do not add tests for static prose unless the prose encodes a real constraint.
- Run the closest available verification after each meaningful implementation step. Once the app exists, prefer build and typecheck as the baseline gate.
- Keep implementation steps small and reviewable.
- Do not silently normalize editorial issues in crawled content. Document typos, missing alt text, malformed links, path mismatches, and language inconsistencies so they can be reviewed.

## Documentation

- Keep technical decisions in `docs/adr/`.
- Keep current architecture guidance in `docs/architecture.md`.
- Update or add an ADR when changing stack, routing, content model, deployment strategy, or source-boundary rules.

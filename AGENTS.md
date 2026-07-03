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

- Treat `content/` as the durable source material for the website.
- Treat `content/README.md` as the editorial guide for non-developer content updates.
- Treat `docs/design-direction.md` as the visual direction source of truth.
- Treat `public/brand/` as the static logo and brand asset source used by the site.
- The former demo prompt material has been removed and must not be recreated as routed or publishable website content.
- Preserve content provenance where available, especially frontmatter such as `sourceUrl`.
- Use `docs/design-direction.md` as the source of truth for visual impression. Do not duplicate or reinvent the design brief unless an implementation conflict is discovered and documented.

## Architecture Expectations

- Prefer clean, maintainable architecture over throwaway demo code.
- Separate content ingestion and normalization from visual rendering.
- Use Astro content collections and typed schemas for structured content.
- Keep reusable UI components focused on stable concepts such as layout, navigation, cards, metadata rows, page shells, and contact sections.
- Avoid hard-copying prepared content into components. Components should render content loaded from source files.
- Do not use overview-page frontmatter arrays as item data. Item metadata belongs in each item MDX file.
- Keep routes and navigation explicit and reviewable.

## Content Modeling Expectations

- Model People, Research, Projects, and Theses as first-class content areas.
- Model Teaching as an item collection when teaching material has its own source files.
- Support overview and detail pages for complex entities where source material exists.
- Support People entries that appear only on the overview page via `detailPage: false`, and support external profile links via URL-valued `detailPage`.
- Keep Publications compact and year-grouped rather than forcing every publication into an individual MDX page.
- Treat Theses as a hybrid area: a student-facing landing/list page plus individual detail pages for topics with full source files.

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

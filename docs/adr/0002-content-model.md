# ADR 0002: Content Model

## Status

Accepted

## Context

Prepared content lives in `1 - content/` and was crawled from the existing source site. Some areas have overview pages and detail pages, while others are compact list-like pages. The new site should better serve students and external cooperation partners without inventing content that is not present.

## Decision

Model the main content areas as follows:

- People: first-class area with an overview and optional detail pages.
- Research: first-class collection with overview and detail pages.
- Projects: first-class collection with overview and detail pages.
- Theses: hybrid area with a student-facing landing/list page and detail pages for topics with full files.
- Teaching: simple page initially.
- Publications: compact year-grouped page.
- General pages: support simple static pages such as Home.

Overview pages may use structured frontmatter arrays when available. Detail pages should preserve the MDX body and source metadata.

## Consequences

This model keeps complex entities navigable without over-modeling simple lists. It also handles current source gaps, such as people listed on the overview page without individual profile files and thesis topics that exist only as inline list items.

Future content expansion can promote Teaching or Publications into richer models if the material grows.

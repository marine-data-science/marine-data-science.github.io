# ADR 0002: Content Model

## Status

Accepted

## Context

The site started from prepared content crawled from the previous MDS website. Some early overview pages duplicated item data in frontmatter arrays, while detail pages carried their own content. That made future maintenance error-prone because titles, summaries, images, roles, rooms, tags, and status fields could drift between overview pages and item pages.

The site should be maintainable by research group staff who primarily edit MDX files and should not need to change Astro components for routine content updates.

## Decision

Use Astro content collections as the structured content layer.

Model the main content areas as follows:

- People: one MDX file per person, including overview-only people.
- Research: one MDX file per research topic.
- Projects: one MDX file per active project.
- Teaching: one MDX file per teaching item, semester project, or summer school.
- Theses: one MDX file per thesis topic, including list-only topics.
- Publications: compact year-grouped page.
- General pages: support simple static pages such as Home and section overview pages.

Overview pages such as `content/research/index.mdx` contain page-level metadata and copy only. Their visible title, eyebrow label, and short description come from frontmatter; their Markdown body is rendered below the page introduction. They must not contain frontmatter arrays of item data. Item metadata belongs to the item file itself.

The homepage is a special page at `content/pages/home.mdx`. Its frontmatter controls the homepage hero through `title`, `eyebrow`, and `summary`. It may contain a `sections` array, but that array is only a composition list for the homepage: each entry references a collection and optionally sets `limit` to a number or `all`. Section titles and summaries still come from the matching collection overview file, and item details still come from item files.

People and thesis topics can be overview-only with `detailPage: false`. People can also use an external profile link by setting `detailPage` to an absolute URL. Former members are represented with `alumni: true` in their person file.

## Consequences

Adding or updating content usually means editing one MDX file in `content/`.

The frontend renders overview pages from collection entries instead of maintaining separate arrays in components or index files. This removes title-based heuristics and duplicated metadata. The only allowed homepage-level array is `home.mdx.sections`, which controls collection order and item limits, not item metadata.

The editorial guide in `content/README.md` becomes part of the content system. It explains the schema and file conventions for non-developer contributors.

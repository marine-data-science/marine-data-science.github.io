# ADR 0003: Source Boundaries After Demo Cleanup

## Status

Accepted

## Context

The repository originally contained three prepared input folders:

- `1 - content/`
- `2 - styling/`
- `3 - prepared prompts/`

Those folders were useful during the AI-agent workshop/demo phase, but they were not a durable structure for routine website maintenance. The prompt material was process context, not website source. The design direction belongs with documentation, while runtime logo assets belong with static public assets.

## Decision

Use the repository sources as follows:

- `content/` is the durable source for website content and content-owned assets.
- `content/README.md` is the editorial guide for adding and updating content.
- `docs/design-direction.md` is the visual direction source of truth.
- `docs/design-assets/` stores design source files for reference.
- `public/brand/` contains static logo assets used by the site layout.
- `docs/` contains technical documentation and architectural decision records.

The former demo prompt folder has been removed. It must not be routed, imported as content, indexed, or published as part of the website.

## Consequences

Routine content work happens in `content/`.

Visual direction and architecture guidance live in `docs/`.

The generated site still publishes only the Astro output in `dist/`; source folders are not uploaded directly.

# ADR 0003: Demo Source Boundaries

## Status

Accepted

## Context

The repository contains three prepared input folders:

- `1 - content/`
- `2 - styling/`
- `3 - prepared prompts/`

Only some of these folders are website source material. The prompts are useful for the demo workflow but should not appear in the generated site.

## Decision

Use the folders as follows:

- `1 - content/` is website source content and asset material.
- `2 - styling/` is the visual direction and logo asset source.
- `3 - prepared prompts/` is planning and demo material only.

The initial implementation must not move or rename these folders. The generated site must not route, import as page content, index, or publish files from `3 - prepared prompts/`.

## Consequences

This keeps the demo narrative and the website implementation cleanly separated. Future contributors can inspect the prompts for process context without accidentally leaking them into the public site.

If source folders are reorganized later, that change should be documented in a new ADR or an amendment to this one.

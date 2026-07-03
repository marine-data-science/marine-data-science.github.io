# Source Issues For Human Review

These notes record issues found while refining the first static website version. Typos, German website copy, broken Markdown lists, and repeated crawled footer blocks that could be fixed safely were corrected directly in `content/`.

## Remaining Editorial Issues

- Some direct English translations should still be reviewed by domain owners, especially the German project pages `AI4Pumps`, `Data4Sim`, `Show2Instruct`, and the UBB Cluj-Napoca teaching material.
- Publication titles, venue titles, project names, funding program names, addresses, names, and technical terms were preserved where they function as citations or proper nouns.
- People entries now store roles, rooms, and addresses in structured frontmatter. Email addresses are only present where they are known from the source.

## Links And Asset Issues

- Several teaching/source PDF links point to `/s/...` assets that are not present in `content/`. Rendered links point back to `https://www.mds-lab.de/s/...` instead of creating broken local pages.
- Most image frontmatter still has empty alt text in the crawled source. The implementation uses the content title as a conservative fallback alt text, but proper descriptive alt text should be added later.
- One publication link in the ultrasound source has a malformed `https:// https://doi...` URL. The Markdown renderer strips the duplicated protocol when encountered.

## Content Model Gaps

- People listed only on `people/index.mdx` do not receive invented detail pages.
- Thesis state and overview summaries now live in individual `content/theses/*.mdx` item files. This should be reviewed when topics change status.
- Publications remain a compact year-grouped list as required. Individual publication detail pages were not created.

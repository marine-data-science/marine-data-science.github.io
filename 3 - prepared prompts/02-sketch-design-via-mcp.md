# 02 - Sketch Design Via MCP

## Purpose

Use this after the architecture/content-model run and before implementation.

This step shows that agents are not only coding tools. The agent should use the project context and the accepted decisions to create an initial visual design direction in Sketch via MCP. The output is not the final website implementation; it is a design artifact that can guide and constrain the later code work.

This is the moment to show:

- MCP servers connect agents to tools beyond the chat window
- the agent can use repository context, docs, and design notes before acting in another application
- design can be part of an agentic workflow, not just coding
- the human still reviews taste, fit, hierarchy, and audience alignment

## Copy-paste prompt

```text
Please create an initial website design concept in Sketch via MCP.

Before using Sketch, inspect and respect the repository context:

- `AGENTS.md`
- `docs/architecture.md`
- `docs/adr/`
- `1 - content/`
- `2 - styling/design-direction.md`
- `2 - styling/Logo_MDS_1-3-Final_color.png`
- `2 - styling/Logo_MDS_1-3-Final_color.svg`

Important source boundaries:

- `1 - content/` is website source content.
- `2 - styling/` is the design and asset source.
- `3 - prepared prompts/` contains demo planning notes only. Do not treat it as website content.

Accepted decisions from the previous run:

- The site will be a static Astro/TypeScript/MDX website for GitHub Pages.
- People, Research, Projects, and Theses are first-class content areas.
- Teaching starts as a simple page.
- Publications should remain compact and list-like rather than one page per publication.
- Theses are a hybrid area: student-facing overview/list plus detail pages where full topic files exist.
- The main audiences are:
  - students looking for thesis topics, teaching information, and approachable entry points into the group
  - researchers, institutions, and companies looking for expertise and possible cooperation partners

Design task:

Create a first Sketch design concept for the website. Focus on the homepage and the visual system that later pages can reuse.

The Sketch concept should include:

1. A homepage layout for desktop.
2. A mobile or narrow-width variant, at least as a rough responsive direction.
3. A header/navigation concept.
4. A first-viewport section that immediately signals "Marine Data Science" and shows a hint of real content below.
5. Preview sections for Research, Projects, People, and Theses using real content from `1 - content/`.
6. A visual treatment for cards/list entries that can work for complex research topics without feeling crowded.
7. Typography and color decisions derived from `2 - styling/design-direction.md` and the logo.
8. Notes in or next to the Sketch file explaining the key design choices and trade-offs.

Constraints:

- Do not create a generic SaaS landing page.
- Do not create a playful or decorative ocean-themed page.
- Do not invent content.
- Use the logo and local assets where useful.
- Keep the design academic, modern, minimal, maritime/marine, and approachable.
- Make the design practical enough that it can later be implemented as a static website.

After creating the Sketch design, report:

- what you created
- which repository decisions informed the design
- what should be reviewed by a human before implementation
- what the next implementation prompt should ask the coding agent to build
```

## Review checkpoint

Discuss with the audience:

- Did the agent use docs and repository decisions before entering Sketch?
- Is MCP visible as a tool connection, not magic?
- Does the design serve both target audiences?
- Does the design use the logo/design direction without merely copying the logo?
- Which design choices are taste/judgment calls that a human must review?
- What should be changed before code implementation starts?

## Good outcome

The Sketch file contains a credible first website concept: homepage, navigation, responsive direction, real content examples, and reusable visual patterns. It should be good enough to guide implementation, but still clearly subject to human critique.

## Optional redirect prompt

Use this if the first design is too generic, too playful, or too detached from the source material:

```text
Please revise the Sketch concept based on this feedback:

- Make it more academic and less like a generic product landing page.
- Use more real content from `1 - content/` above the fold.
- Make the student path to thesis topics clearer.
- Make the cooperation/research-expertise path clearer.
- Reduce decorative marine elements; keep the maritime impression through color, spacing, logo, and content.

Keep the existing concept as a reference, but produce a cleaner second iteration and summarize what changed.
```

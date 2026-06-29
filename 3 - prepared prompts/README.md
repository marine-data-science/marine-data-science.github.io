# Prepared Demo Prompts

These prompts are designed for the recorded/live-review demo described in the workshop concept notes.

The demo narrative:

1. Give the agent context and constraints.
2. Let it inspect the repository and propose a plan.
3. Let it use Sketch via MCP to create a first design concept.
4. Ask it to implement a concrete first slice from the accepted architecture and design.
5. Review what changed.
6. Redirect the agent toward visual quality, content structure, accessibility, and deployment.

The prompts are intentionally not microscopic. They should leave room for the agent to make decisions while still keeping each run bounded enough for a demo checkpoint.

## Suggested Recording Checkpoints

- `demo/01-orientation-plan` after the agent has inspected the repo and proposed architecture.
- `demo/02-sketch-design` after a first Sketch concept exists via MCP.
- `demo/03-scaffold` after the app scaffold builds locally.
- `demo/04-content-model` after content loading and typed collections exist.
- `demo/05-homepage-slice` after the first visible page exists.
- `demo/06-core-pages` after Research, Projects, People, and Theses are implemented.
- `demo/07-polish-review` after accessibility, responsive layout, and visual polish.
- `demo/08-deployment` after GitHub Pages workflow exists.

## How To Use

For each prompt:

1. Paste the `Copy-paste prompt` section into Codex or Claude Code.
2. Let the agent work.
3. Pause and inspect the result using the `Review checkpoint` section.
4. Branch, tag, or commit if the state is useful for the later video walkthrough.

Keep the human review visible. The point of the demo is not that the agent magically knows everything. The point is the loop: task, context, work, review, redirect, decision.

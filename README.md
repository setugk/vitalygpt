# VitalyGPT MCP

A Model Context Protocol (MCP) server that makes [Vitaly Friedman](https://www.linkedin.com/in/vitalyfriedman/)'s UX insights available as a tool to any LLM.

Vitaly is the founder of [Smashing Magazine](https://www.smashingmagazine.com/) and one of the most prolific UX educators on the internet. This project collects his insights and serves them as structured, searchable knowledge — so you can reference his thinking directly inside Claude, Cursor, or any MCP-compatible client while designing your next product.

> **Status:** Personal use / early preview. Shared with Vitaly for feedback before wider distribution.

---

## What it does

Four tools, zero setup friction:

| Tool | Description |
|---|---|
| `list_topics` | See all UX topic areas covered |
| `search_insights` | Full-text search across all insights |
| `get_topic` | Get all insights for a specific topic |
| `get_random_insight` | Random insight for design inspiration |

**Topics covered:** Forms & Inputs · Navigation & IA · Research & Usability Testing · UX Strategy & Metrics · Design Process · Careers & Communication · UI Components & Patterns · AI & Design Tools

---

## Setup

**Requirements:** Node.js 18+

Add to your `.mcp.json`:

```json
{
  "mcpServers": {
    "vitalygpt": {
      "command": "npx",
      "args": ["-y", "@vitalygpt/mcp"]
    }
  }
}
```

---

## Contributing

Content lives in [`content/`](./content/) as plain markdown files — one file per topic. Each insight follows this format:

```markdown
## Insight Title

One-paragraph summary of the key takeaway.

**Full post:**

The original post content.

**Source:** [LinkedIn](https://linkedin.com/...) · Vitaly Friedman · YYYY-MM-DD
**Tags:** tag1, tag2, tag3
```

To add a new insight: edit the relevant topic file and submit a PR. No code knowledge required.

**Topic files:**
- `content/forms-and-inputs.md`
- `content/navigation-and-ia.md`
- `content/research-and-testing.md`
- `content/strategy-and-metrics.md`
- `content/process-and-workflow.md`
- `content/careers-and-communication.md`
- `content/components-and-patterns.md`
- `content/ai-and-tools.md`

---

## Roadmap

- [x] Publish to npm as `@vitalygpt/mcp`
- [ ] Deduplicate near-identical entries
- [ ] Add semantic search (embeddings)
- [ ] Support for contributions from Vitaly directly

---

## Attribution

All insights are sourced from Vitaly Friedman's public LinkedIn posts, with attribution and links to originals. This project is not affiliated with Vitaly or Smashing Magazine. Shared with permission (pending).

## License

MIT

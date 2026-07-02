#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import * as fs from "fs";
import * as path from "path";

const CONTENT_DIR = path.join(__dirname, "..", "content");
const GITHUB_RAW = "https://raw.githubusercontent.com/setugk/vitalygpt/main/content";
const hasLocalContent = fs.existsSync(path.join(CONTENT_DIR, "ai-and-tools.md"));

interface Insight {
  topic: string;
  topicLabel: string;
  title: string;
  body: string;
}

const TOPIC_LABELS: Record<string, string> = {
  "forms-and-inputs": "Forms & Inputs",
  "navigation-and-ia": "Navigation & Information Architecture",
  "research-and-testing": "Research & Usability Testing",
  "strategy-and-metrics": "UX Strategy & Metrics",
  "process-and-workflow": "Design Process & Workflow",
  "careers-and-communication": "Careers & Communication",
  "components-and-patterns": "UI Components & Patterns",
  "ai-and-tools": "AI & Design Tools",
};

async function loadInsights(): Promise<Insight[]> {
  const insights: Insight[] = [];

  for (const [topicSlug, topicLabel] of Object.entries(TOPIC_LABELS)) {
    let content: string;

    if (hasLocalContent) {
      const filePath = path.join(CONTENT_DIR, `${topicSlug}.md`);
      if (!fs.existsSync(filePath)) continue;
      content = fs.readFileSync(filePath, "utf-8");
    } else {
      const res = await fetch(`${GITHUB_RAW}/${topicSlug}.md`);
      if (!res.ok) continue;
      content = await res.text();
    }

    const blocks = content.split(/\n---\n/).slice(1);
    for (const block of blocks) {
      const trimmed = block.trim();
      if (!trimmed) continue;
      const titleMatch = trimmed.match(/^##\s+(.+)/m);
      const title = titleMatch ? titleMatch[1].trim() : "(untitled)";
      insights.push({ topic: topicSlug, topicLabel, title, body: trimmed });
    }
  }

  return insights;
}

function searchInsights(insights: Insight[], query: string): Insight[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return insights.filter((ins) => {
    const haystack = `${ins.title} ${ins.body} ${ins.topicLabel}`.toLowerCase();
    return terms.every((t) => haystack.includes(t));
  });
}

let insights: Insight[] = [];

const server = new Server(
  { name: "vitalygpt", version: "0.2.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "search_insights",
      description:
        "Search Vitaly Friedman's UX insights by keyword or topic. Returns matching insights with full content.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description:
              "Search query — e.g. 'dropdown', 'mobile navigation', 'usability testing'",
          },
        },
        required: ["query"],
      },
    },
    {
      name: "get_topic",
      description:
        "Get all UX insights for a specific topic area (e.g. forms, navigation, research).",
      inputSchema: {
        type: "object",
        properties: {
          topic: {
            type: "string",
            description:
              "Topic slug. Use list_topics to see available topics.",
          },
        },
        required: ["topic"],
      },
    },
    {
      name: "list_topics",
      description: "List all available UX topic areas covered in the knowledge base.",
      inputSchema: { type: "object", properties: {} },
    },
    {
      name: "get_random_insight",
      description:
        "Get a random UX insight from Vitaly Friedman. Great for inspiration during design sessions.",
      inputSchema: { type: "object", properties: {} },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "list_topics") {
    const topicCounts = Object.entries(TOPIC_LABELS).map(([slug, label]) => {
      const count = insights.filter((i) => i.topic === slug).length;
      return `- **${label}** (\`${slug}\`) — ${count} insight${count !== 1 ? "s" : ""}`;
    });
    return {
      content: [
        {
          type: "text",
          text: `# VitalyGPT — Available Topics\n\n${topicCounts.join("\n")}`,
        },
      ],
    };
  }

  if (name === "search_insights") {
    const query = (args as { query: string }).query;
    const results = searchInsights(insights, query);
    if (results.length === 0) {
      return {
        content: [
          { type: "text", text: `No insights found for query: "${query}"` },
        ],
      };
    }
    const text = results
      .map((r) => `### [${r.topicLabel}]\n\n${r.body}`)
      .join("\n\n---\n\n");
    return {
      content: [
        {
          type: "text",
          text: `# Search results for "${query}" (${results.length} found)\n\n${text}`,
        },
      ],
    };
  }

  if (name === "get_topic") {
    const topic = (args as { topic: string }).topic;
    const results = insights.filter((i) => i.topic === topic);
    if (results.length === 0) {
      return {
        content: [
          {
            type: "text",
            text: `No insights found for topic "${topic}". Use list_topics to see available topics.`,
          },
        ],
      };
    }
    const label = TOPIC_LABELS[topic] ?? topic;
    const text = results.map((r) => r.body).join("\n\n---\n\n");
    return {
      content: [
        {
          type: "text",
          text: `# ${label}\n\n${text}`,
        },
      ],
    };
  }

  if (name === "get_random_insight") {
    const insight = insights[Math.floor(Math.random() * insights.length)];
    return {
      content: [
        {
          type: "text",
          text: `# Random Insight — ${insight.topicLabel}\n\n${insight.body}`,
        },
      ],
    };
  }

  return {
    content: [{ type: "text", text: `Unknown tool: ${name}` }],
    isError: true,
  };
});

async function main() {
  insights = await loadInsights();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);

#!/usr/bin/env node
import * as fs from "fs";
import * as path from "path";
import { execSync } from "child_process";

const REPO_DIR = path.join(__dirname, "..");
const CONTENT_DIR = path.join(REPO_DIR, "content");
const KARAKEEP_API = process.env.KARAKEEP_API_ADDR || "https://bookmarks.setugk.com";
const API_KEY = process.env.KARAKEEP_API_KEY;
const DRY_RUN = process.argv.includes("--dry-run");

// Priority-ordered: first match wins
const TAG_TO_TOPIC: [string, string][] = [
  ["form-design", "forms-and-inputs"],
  ["forms", "forms-and-inputs"],
  ["form", "forms-and-inputs"],
  ["navigation", "navigation-and-ia"],
  ["information-architecture", "navigation-and-ia"],
  ["ia", "navigation-and-ia"],
  ["menu", "navigation-and-ia"],
  ["user-research", "research-and-testing"],
  ["ux-research", "research-and-testing"],
  ["usability-testing", "research-and-testing"],
  ["research", "research-and-testing"],
  ["usability", "research-and-testing"],
  ["metrics", "strategy-and-metrics"],
  ["ux-strategy", "strategy-and-metrics"],
  ["strategy", "strategy-and-metrics"],
  ["analytics", "strategy-and-metrics"],
  ["design-process", "process-and-workflow"],
  ["process", "process-and-workflow"],
  ["workflow", "process-and-workflow"],
  ["design-systems", "process-and-workflow"],
  ["design-leadership", "careers-and-communication"],
  ["careers", "careers-and-communication"],
  ["career", "careers-and-communication"],
  ["communication", "careers-and-communication"],
  ["components", "components-and-patterns"],
  ["ui-patterns", "components-and-patterns"],
  ["design-patterns", "components-and-patterns"],
  ["ai", "ai-and-tools"],
  ["artificial-intelligence", "ai-and-tools"],
  ["llm", "ai-and-tools"],
  ["tools", "ai-and-tools"],
];

function classifyByContent(text: string): string {
  const t = text.toLowerCase();
  if (/\bform\b|\binput\b|\bcheckbox\b|\bdropdown\b/.test(t)) return "forms-and-inputs";
  if (/\bnav(igation)?\b|\bmenu\b|\bbreadcrumb\b|\binformation architecture\b/.test(t)) return "navigation-and-ia";
  if (/\bresearch\b|\busability\b|\btesting\b|\buser test/.test(t)) return "research-and-testing";
  if (/\bmetric\b|\bkpi\b|\banalytics\b|\bconversion\b|\bstrategy\b/.test(t)) return "strategy-and-metrics";
  if (/\bprocess\b|\bworkflow\b|\bdesign system\b/.test(t)) return "process-and-workflow";
  if (/\bcareer\b|\bjob\b|\bhiring\b|\bportfolio\b/.test(t)) return "careers-and-communication";
  if (/\bai\b|\bartificial intelligence\b|\bgpt\b|\bllm\b/.test(t)) return "ai-and-tools";
  return "components-and-patterns";
}

function classifyTopic(tags: string[], content: string): string {
  for (const [tag, topic] of TAG_TO_TOPIC) {
    if (tags.some((t) => t.toLowerCase() === tag)) return topic;
  }
  return classifyByContent(content);
}

function extractExistingUrls(): Set<string> {
  const urls = new Set<string>();
  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith(".md")) continue;
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    for (const m of content.matchAll(/\*\*Source:\*\*[^\n]*\((https?:\/\/[^)]+)\)/g)) {
      urls.add(m[1]);
    }
  }
  return urls;
}

interface Bookmark {
  id: string;
  createdAt: string;
  tags: { id: string; name: string }[];
  content?: {
    url?: string;
    title?: string | null;
    description?: string | null;
    author?: string | null;
    datePublished?: string | null;
  };
}

function isVitalyBookmark(b: Bookmark): boolean {
  const author = (b.content?.author || "").trim().toLowerCase();
  if (author === "vitaly friedman") return true;
  return b.tags.some((t) => t.name.toLowerCase() === "vitaly");
}

async function fetchVitalyBookmarks(): Promise<Bookmark[]> {
  const all: Bookmark[] = [];
  let cursor: string | undefined;

  do {
    const url = `${KARAKEEP_API}/api/v1/bookmarks?limit=100${cursor ? `&cursor=${cursor}` : ""}`;
    const res = await fetch(url, { headers: { Authorization: `Bearer ${API_KEY}` } });
    if (!res.ok) throw new Error(`Karakeep API error: ${res.status}`);
    const data = (await res.json()) as { bookmarks: Bookmark[]; nextCursor?: string };
    all.push(...data.bookmarks);
    cursor = data.nextCursor;
  } while (cursor);

  return all.filter(isVitalyBookmark);
}

// content.title is just the LinkedIn post's page title (e.g. "#ux #design | Vitaly
// Friedman") -- the real hook line lives at the start of content.description.
function extractTitle(description: string, fallback: string): string {
  const firstLine = description.split("\n")[0] || "";
  const noUrls = firstLine
    .replace(/\(https?:\/\/\S+\)/g, "")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+,/g, ",")
    .replace(/\s{2,}/g, " ");
  const stripped = noUrls.replace(/^[^\p{L}\p{N}]+/u, "").trim();
  const text = stripped || firstLine.trim();
  if (!text) return fallback;
  const sentence = text.match(/^(.{10,160}?[.!?])(\s|$)/);
  if (sentence) return sentence[1].trim();
  if (text.length <= 140) return text;
  const cut = text.slice(0, 140);
  const lastSpace = cut.lastIndexOf(" ");
  return (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trim() + "…";
}

function formatInsight(b: Bookmark): string {
  const description = (b.content?.description || "").trim();
  const fallbackTitle = (b.content?.title || "Untitled").replace(/\n.*/s, "").trim();
  const title = extractTitle(description, fallbackTitle);
  const date = (b.content?.datePublished || b.createdAt || "").slice(0, 10) || "unknown";
  const tags = b.tags
    .map((t) => t.name)
    .filter((t) => t.toLowerCase() !== "vitaly")
    .join(", ");
  const url = b.content?.url || "";

  return `\n---\n\n## ${title}\n\n${description}\n\n**Source:** [LinkedIn](${url}) · Vitaly Friedman · ${date}\n**Tags:** ${tags || "ux"}\n`;
}

async function main() {
  if (!API_KEY) {
    console.error("Error: KARAKEEP_API_KEY environment variable is required.");
    process.exit(1);
  }

  console.log("Fetching Vitaly bookmarks from Karakeep...");
  const existing = extractExistingUrls();
  const bookmarks = await fetchVitalyBookmarks();
  const newBookmarks = bookmarks.filter((b) => b.content?.url && !existing.has(b.content.url));

  if (newBookmarks.length === 0) {
    console.log("Nothing new to sync.");
    return;
  }

  console.log(`Found ${newBookmarks.length} new bookmark(s)${DRY_RUN ? " (dry run)" : ""}:\n`);
  for (const b of newBookmarks) {
    const tags = b.tags.map((t) => t.name);
    const description = b.content?.description || "";
    const topic = classifyTopic(tags, description);
    const insight = formatInsight(b);

    if (DRY_RUN) {
      console.log(`[${topic}]${insight}`);
    } else {
      fs.appendFileSync(path.join(CONTENT_DIR, `${topic}.md`), insight, "utf-8");
      console.log(`  [${topic}] ${extractTitle(description, b.content?.url || "untitled")}`);
    }
  }

  if (DRY_RUN) {
    console.log(`--- Dry run: nothing written, committed, or pushed. ---`);
    return;
  }

  execSync("git add content/", { cwd: REPO_DIR, stdio: "inherit" });
  execSync(`git commit -m "sync: add ${newBookmarks.length} new insight(s)"`, { cwd: REPO_DIR, stdio: "inherit" });
  execSync("git push", { cwd: REPO_DIR, stdio: "inherit" });

  console.log(`Done. ${newBookmarks.length} insight(s) synced and pushed to GitHub.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

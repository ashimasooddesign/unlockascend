// Fetches the Substack RSS feed at build time and writes:
//  - src/data/posts.json (used by the Blog pages)
//  - public/sitemap.xml (so blog post URLs are indexed)
//
// Runs via predev/prebuild npm hooks. Network failures fall back to the
// existing src/data/posts.json so builds never break offline.

import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { resolve } from "path";
import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";

const FEED_URL = "https://ascendwithashima.substack.com/feed";
const BASE_URL = "https://unlockascend.lovable.app";

export interface Post {
  slug: string;
  title: string;
  description: string;
  url: string;
  pubDate: string;
  author: string;
  image?: string;
  contentHtml: string;
  readingMinutes: number;
}

function slugFromUrl(url: string): string {
  const m = url.match(/\/p\/([^/?#]+)/);
  return m ? m[1] : url.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
}

function stripHtml(html: string): string {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHtml(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "p", "br", "strong", "em", "i", "b", "u", "a", "blockquote",
      "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li",
      "hr", "img", "figure", "figcaption", "pre", "code",
    ],
    allowedAttributes: {
      a: ["href", "title", "rel", "target"],
      img: ["src", "alt", "title", "width", "height", "loading"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer", target: "_blank" }),
      img: (tagName, attribs) => ({
        tagName: "img",
        attribs: { ...attribs, loading: "lazy" },
      }),
    },
  });
}

function firstImage(html: string): string | undefined {
  const m = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return m?.[1];
}

async function fetchFeed(): Promise<Post[]> {
  const res = await fetch(FEED_URL, {
    headers: { "user-agent": "AscendBlogSync/1.0" },
  });
  if (!res.ok) throw new Error(`Substack RSS responded ${res.status}`);
  const xml = await res.text();

  const parser = new XMLParser({
    ignoreAttributes: false,
    cdataPropName: "__cdata",
  });
  const parsed = parser.parse(xml);
  const items = parsed?.rss?.channel?.item ?? [];
  const list: any[] = Array.isArray(items) ? items : [items];

  return list.map((item): Post => {
    const get = (v: any): string => {
      if (v == null) return "";
      if (typeof v === "string") return v;
      if (typeof v === "object" && "__cdata" in v) return String(v.__cdata ?? "");
      return String(v);
    };
    const title = get(item.title).trim();
    const link = get(item.link).trim();
    const pubDate = get(item.pubDate).trim();
    const author = get(item["dc:creator"] || item.author).trim();
    const description = stripHtml(get(item.description));
    const rawContent = get(item["content:encoded"]) || get(item.description);
    const contentHtml = cleanHtml(rawContent);
    const wordCount = stripHtml(rawContent).split(/\s+/).length;
    const enclosureUrl =
      typeof item.enclosure === "object" ? item.enclosure["@_url"] : undefined;

    return {
      slug: slugFromUrl(link),
      title,
      description: description.slice(0, 280),
      url: link,
      pubDate,
      author,
      image: enclosureUrl || firstImage(rawContent),
      contentHtml,
      readingMinutes: Math.max(1, Math.round(wordCount / 220)),
    };
  });
}

function writeSitemap(posts: Post[]) {
  const today = new Date().toISOString().slice(0, 10);
  const staticEntries = [
    { loc: "/", priority: "1.0", changefreq: "monthly" },
    { loc: "/yoga-sutra-study", priority: "0.9", changefreq: "monthly" },
    { loc: "/navratri-sadhana", priority: "0.8", changefreq: "monthly" },
    { loc: "/one-on-one", priority: "0.8", changefreq: "monthly" },
    { loc: "/blog", priority: "0.9", changefreq: "weekly" },
  ];

  const urls = [
    ...staticEntries.map(
      (e) =>
        `  <url>\n    <loc>${BASE_URL}${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
    ),
    ...posts.map((p) => {
      const last = p.pubDate ? new Date(p.pubDate).toISOString().slice(0, 10) : today;
      return `  <url>\n    <loc>${BASE_URL}/blog/${p.slug}</loc>\n    <lastmod>${last}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`;
  writeFileSync(resolve("public/sitemap.xml"), xml);
}

async function main() {
  const dataDir = resolve("src/data");
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  const outFile = resolve(dataDir, "posts.json");

  let posts: Post[] = [];
  try {
    posts = await fetchFeed();
    console.log(`[substack] fetched ${posts.length} posts`);
  } catch (err) {
    console.warn(`[substack] fetch failed: ${(err as Error).message}`);
    if (existsSync(outFile)) {
      posts = JSON.parse(readFileSync(outFile, "utf8"));
      console.warn(`[substack] using cached ${posts.length} posts`);
    } else {
      posts = [];
      console.warn(`[substack] no cache available; writing empty list`);
    }
  }

  writeFileSync(outFile, JSON.stringify(posts, null, 2));
  writeSitemap(posts);
  console.log(`[substack] wrote posts.json + sitemap.xml`);
}

main();

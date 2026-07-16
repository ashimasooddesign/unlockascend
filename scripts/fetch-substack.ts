// Fetches ALL posts from the Substack Archive API at build time and writes:
//  - src/data/posts.json (used by the Blog pages)
//  - public/sitemap.xml (so blog post URLs are indexed)
//
// Falls back to the RSS feed and finally to the cached posts.json so builds
// never break offline.

import { writeFileSync, existsSync, mkdirSync, readFileSync } from "fs";
import { resolve } from "path";
import { XMLParser } from "fast-xml-parser";
import sanitizeHtml from "sanitize-html";

const SUBSTACK = "https://ascendwithashima.substack.com";
const ARCHIVE_URL = `${SUBSTACK}/api/v1/archive`;
const FEED_URL = `${SUBSTACK}/feed`;
const BASE_URL = "https://unlockascend.lovable.app";

export interface Post {
  slug: string;
  title: string;
  description: string;
  url: string;
  pubDate: string;
  author: string;
  image?: string;
  audioUrl?: string;
  audioType?: string;
  contentHtml: string;
  readingMinutes: number;
  tags: string[];
  type: "essay" | "podcast";
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

function stripLeadingImage(html: string): string {
  return html.replace(
    /^\s*(?:<div[^>]*captioned-image[^>]*>[\s\S]*?<\/div>|<figure[\s\S]*?<\/figure>|<p>\s*<img[\s\S]*?<\/p>|<img[^>]*>)\s*/i,
    ""
  );
}

async function fetchJson(url: string) {
  const res = await fetch(url, { headers: { "user-agent": "AscendBlogSync/1.0" } });
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

async function fetchArchive(): Promise<Post[]> {
  const seen = new Set<string>();
  const listItems: any[] = [];
  let offset = 0;
  const limit = 50;
  for (let page = 0; page < 20; page++) {
    const batch = await fetchJson(`${ARCHIVE_URL}?sort=new&limit=${limit}&offset=${offset}`);
    if (!Array.isArray(batch) || batch.length === 0) break;
    let added = 0;
    for (const p of batch) {
      if (seen.has(p.slug)) continue;
      seen.add(p.slug);
      listItems.push(p);
      added++;
    }
    if (added === 0) break;
    offset += batch.length;
  }

  const posts: Post[] = [];
  for (const item of listItems) {
    let bodyHtml = "";
    try {
      const full = await fetchJson(`${SUBSTACK}/api/v1/posts/${item.slug}`);
      bodyHtml = full?.body_html || "";
    } catch (err) {
      console.warn(`[substack] body fetch failed for ${item.slug}: ${(err as Error).message}`);
    }
    const description = (item.search_engine_description || item.subtitle || item.description || stripHtml(bodyHtml)).slice(0, 280);
    const words = item.wordcount || stripHtml(bodyHtml).split(/\s+/).length;
    const author = (item.publishedBylines?.[0]?.name) || "Ashima Sood";
    const audioUrl = item.podcast_url || undefined;
    const image = item.cover_image || firstImage(bodyHtml);
    posts.push({
      slug: item.slug,
      title: (item.title || "").trim(),
      description: description.trim(),
      url: item.canonical_url || `${SUBSTACK}/p/${item.slug}`,
      pubDate: item.post_date,
      author,
      image,
      audioUrl,
      audioType: audioUrl ? "audio/mpeg" : undefined,
      contentHtml: cleanHtml(stripLeadingImage(bodyHtml)),
      readingMinutes: Math.max(1, Math.round(words / 220)),
      tags: (item.postTags || []).map((t: any) => t.name).filter(Boolean),
      type: item.type === "podcast" || audioUrl ? "podcast" : "essay",
    });
  }
  return posts;
}

async function fetchFeed(): Promise<Post[]> {
  const res = await fetch(FEED_URL, { headers: { "user-agent": "AscendBlogSync/1.0" } });
  if (!res.ok) throw new Error(`RSS ${res.status}`);
  const xml = await res.text();
  const parser = new XMLParser({ ignoreAttributes: false, cdataPropName: "__cdata" });
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
    const link = get(item.link).trim();
    const rawContent = get(item["content:encoded"]) || get(item.description);
    const enclosures = Array.isArray(item.enclosure) ? item.enclosure : item.enclosure ? [item.enclosure] : [];
    const audioEnc = enclosures.find((e: any) => String(e?.["@_type"] ?? "").startsWith("audio/"));
    const imageEnc = enclosures.find((e: any) => String(e?.["@_type"] ?? "").startsWith("image/"));
    const audioUrl = audioEnc?.["@_url"];
    const words = stripHtml(rawContent).split(/\s+/).length;
    return {
      slug: slugFromUrl(link),
      title: get(item.title).trim(),
      description: stripHtml(get(item.description)).slice(0, 280),
      url: link,
      pubDate: get(item.pubDate).trim(),
      author: get(item["dc:creator"] || item.author).trim() || "Ashima Sood",
      image: imageEnc?.["@_url"] || firstImage(rawContent),
      audioUrl,
      audioType: audioEnc?.["@_type"],
      contentHtml: cleanHtml(stripLeadingImage(rawContent)),
      readingMinutes: Math.max(1, Math.round(words / 220)),
      tags: [],
      type: audioUrl ? "podcast" : "essay",
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
      (e) => `  <url>\n    <loc>${BASE_URL}${e.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
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
    posts = await fetchArchive();
    console.log(`[substack] archive fetched ${posts.length} posts`);
  } catch (err) {
    console.warn(`[substack] archive failed: ${(err as Error).message}`);
    try {
      posts = await fetchFeed();
      console.warn(`[substack] fell back to RSS (${posts.length})`);
    } catch (err2) {
      console.warn(`[substack] RSS failed: ${(err2 as Error).message}`);
      if (existsSync(outFile)) {
        posts = JSON.parse(readFileSync(outFile, "utf8"));
        console.warn(`[substack] using cached ${posts.length} posts`);
      }
    }
  }

  writeFileSync(outFile, JSON.stringify(posts, null, 2));
  writeSitemap(posts);
  console.log(`[substack] wrote posts.json + sitemap.xml`);
}

main();

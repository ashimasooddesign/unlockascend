import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useSeo } from "@/hooks/useSeo";
import posts from "@/data/posts.json";
import ascendLogo from "@/assets/ascend-logo.svg";

interface Post {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  image?: string;
  audioUrl?: string;
  audioType?: string;
  readingMinutes: number;
  tags?: string[];
  type?: "essay" | "podcast";
}

const all = posts as Post[];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

type SortKey = "newest" | "oldest" | "title";
type TypeFilter = "all" | "essays" | "podcasts";

const Blog = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("newest");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const counts = new Map<string, number>();
    for (const p of all) for (const t of p.tags || []) counts.set(t, (counts.get(t) || 0) + 1);
    return Array.from(counts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 14)
      .map(([t]) => t);
  }, []);

  const hasPodcasts = all.some((p) => p.audioUrl);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = all.filter((p) => {
      if (typeFilter === "podcasts" && !p.audioUrl) return false;
      if (typeFilter === "essays" && p.audioUrl) return false;
      if (activeTag && !(p.tags || []).some((t) => t.toLowerCase() === activeTag.toLowerCase())) return false;
      if (q) {
        const hay = `${p.title} ${p.description} ${(p.tags || []).join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
    list = list.slice().sort((a, b) => {
      if (sort === "title") return a.title.localeCompare(b.title);
      const ta = new Date(a.pubDate).getTime();
      const tb = new Date(b.pubDate).getTime();
      return sort === "oldest" ? ta - tb : tb - ta;
    });
    return list;
  }, [query, sort, typeFilter, activeTag]);

  useSeo({
    title: "Blog — Ascend with Ashima",
    description:
      "Essays and reflections on the Yoga Sutras, Ayurveda, Vedanta and the Bhagavad Gita — for grounded, thoughtful living.",
    canonical: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Ascend with Ashima — Blog",
      url: "/blog",
      blogPost: all.slice(0, 20).map((p) => ({
        "@type": "BlogPosting",
        headline: p.title,
        datePublished: p.pubDate,
        author: { "@type": "Person", name: p.author },
        url: `/blog/${p.slug}`,
      })),
    },
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24">
        <div className="container max-w-6xl">
          <header className="mb-12 text-center">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary/70 mb-4">
              Blog
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-brand mb-6">
              Essays &amp; Reflections
            </h1>
            <p className="font-body text-base text-foreground/70 max-w-xl mx-auto">
              On the Yoga Sutras, Ayurveda, Vedanta and the Bhagavad Gita — for
              grounded, thoughtful living.
            </p>
          </header>

          {/* Controls */}
          <div className="mb-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 justify-between">
            <div className="flex flex-1 max-w-md">
              <label htmlFor="blog-search" className="sr-only">Search articles</label>
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full bg-transparent border border-border rounded-sm px-4 py-2.5 font-body text-sm placeholder:text-foreground/40 focus:outline-none focus:border-brand transition-colors"
              />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              {hasPodcasts && (
                <div className="flex" role="tablist" aria-label="Filter by type">
                  {(["all", "essays", "podcasts"] as const).map((key) => (
                    <button
                      key={key}
                      role="tab"
                      aria-selected={typeFilter === key}
                      onClick={() => setTypeFilter(key)}
                      className={`font-body text-[11px] tracking-widest uppercase px-3 py-2 border -ml-px first:ml-0 transition-colors ${
                        typeFilter === key
                          ? "border-brand text-brand bg-brand/5"
                          : "border-border text-foreground/60 hover:text-brand"
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              )}
              <label className="sr-only" htmlFor="blog-sort">Sort</label>
              <select
                id="blog-sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="bg-transparent border border-border rounded-sm px-3 py-2 font-body text-xs tracking-widest uppercase text-foreground/70 focus:outline-none focus:border-brand transition-colors"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="title">A–Z</option>
              </select>
            </div>
          </div>

          {/* Tag chips */}
          {allTags.length > 0 && (
            <div className="mb-10 flex flex-wrap gap-2">
              <button
                onClick={() => setActiveTag(null)}
                className={`font-body text-[11px] tracking-widest uppercase px-3 py-1.5 border rounded-full transition-colors ${
                  activeTag === null
                    ? "border-brand text-brand bg-brand/5"
                    : "border-border text-foreground/60 hover:text-brand"
                }`}
              >
                All topics
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                  className={`font-body text-[11px] tracking-widest uppercase px-3 py-1.5 border rounded-full transition-colors ${
                    activeTag === tag
                      ? "border-brand text-brand bg-brand/5"
                      : "border-border text-foreground/60 hover:text-brand"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}

          <p className="font-body text-xs tracking-widest uppercase text-foreground/50 mb-6">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>

          {filtered.length === 0 ? (
            <p className="text-center font-body text-foreground/60 py-20">
              No articles match your filters.
            </p>
          ) : (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <li key={p.slug} className="group flex flex-col">
                  <Link to={`/blog/${p.slug}`} className="block overflow-hidden rounded-sm bg-muted/40 aspect-[16/9] mb-4">
                    {p.image ? (
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center p-8 bg-muted/30">
                        <img
                          src={ascendLogo}
                          alt=""
                          className="w-1/2 max-w-[120px] h-auto opacity-40 transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    )}
                  </Link>
                  <p className="font-body text-[11px] tracking-widest uppercase text-foreground/50 mb-2 flex items-center gap-2 flex-wrap">
                    {p.audioUrl && (
                      <span className="inline-flex items-center gap-1 text-brand">● Podcast</span>
                    )}
                    <time dateTime={p.pubDate}>{formatDate(p.pubDate)}</time>
                    <span aria-hidden>·</span>
                    <span>{p.readingMinutes} min</span>
                  </p>
                  <Link to={`/blog/${p.slug}`} className="block">
                    <h2 className="font-display text-xl md:text-2xl text-brand group-hover:text-primary transition-colors mb-2 leading-snug">
                      {p.title}
                    </h2>
                    <p className="font-body text-sm text-foreground/70 leading-relaxed line-clamp-3">
                      {p.description}
                    </p>
                  </Link>
                  {p.tags && p.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.tags.slice(0, 3).map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTag(t)}
                          className="font-body text-[10px] tracking-wider uppercase text-foreground/50 hover:text-brand hover:underline underline-offset-4 transition-all"
                        >
                          #{t}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Blog;

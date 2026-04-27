import { useEffect, useState } from "react";

const SUBSTACK_URL = "https://ascendwithashima.substack.com";
const FEED_URL = `${SUBSTACK_URL}/feed`;

type Post = {
  title: string;
  excerpt: string;
  date: string;
  href: string;
};

const stripHtml = (html: string) =>
  html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();

const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const BlogSection = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchFeed = async () => {
      // Use a public CORS-friendly RSS-to-JSON proxy since Substack's feed
      // doesn't expose CORS headers for browser fetches.
      const endpoint = `https://api.allorigins.win/raw?url=${encodeURIComponent(FEED_URL)}`;
      try {
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`Feed request failed: ${res.status}`);
        const xml = await res.text();
        const doc = new DOMParser().parseFromString(xml, "text/xml");
        const items = Array.from(doc.querySelectorAll("item")).slice(0, 6);

        const parsed: Post[] = items.map((item) => {
          const title = item.querySelector("title")?.textContent?.trim() ?? "Untitled";
          const link = item.querySelector("link")?.textContent?.trim() ?? SUBSTACK_URL;
          const pubDate = item.querySelector("pubDate")?.textContent?.trim() ?? "";
          const descriptionRaw =
            item.querySelector("description")?.textContent ??
            item.getElementsByTagName("content:encoded")[0]?.textContent ??
            "";
          const text = stripHtml(descriptionRaw);
          const excerpt = text.length > 140 ? `${text.slice(0, 140).trim()}…` : text;
          return { title, href: link, date: formatDate(pubDate), excerpt };
        });

        if (!cancelled) setPosts(parsed);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Unable to load posts");
      }
    };
    fetchFeed();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="writing" className="py-24 md:py-36">
      <div className="container max-w-4xl">
        <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-3">
              Writing
            </h2>
            <p className="font-body text-base text-muted-foreground max-w-lg leading-relaxed">
              Reflections on practice, scripture, and the inner life — published on{" "}
              <a
                href={SUBSTACK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-brand transition-colors"
              >
                Substack
              </a>
              .
            </p>
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-brand border-b border-brand pb-1 hover:opacity-70 transition-opacity"
          >
            View all
          </a>
        </div>

        {posts === null && !error && (
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="py-6 md:py-7 flex flex-col md:flex-row md:items-baseline md:gap-8 animate-pulse">
                <span className="h-3 w-16 bg-muted rounded-sm md:w-24 mb-3 md:mb-0" />
                <span className="flex-1 space-y-2">
                  <span className="block h-5 w-3/4 bg-muted rounded-sm" />
                  <span className="block h-3 w-full bg-muted/70 rounded-sm" />
                </span>
              </li>
            ))}
          </ul>
        )}

        {error && (
          <p className="font-body text-sm text-muted-foreground py-8">
            Unable to load posts right now.{" "}
            <a
              href={SUBSTACK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-brand transition-colors"
            >
              Read on Substack →
            </a>
          </p>
        )}

        {posts && posts.length > 0 && (
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {posts.map((post) => (
              <li key={post.href}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col md:flex-row md:items-baseline md:gap-8 py-6 md:py-7 transition-colors hover:bg-muted/40 -mx-4 px-4 rounded-sm"
                >
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground md:w-24 shrink-0 mb-2 md:mb-0">
                    {post.date}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl md:text-2xl font-light text-foreground group-hover:text-brand transition-colors">
                      {post.title}
                    </span>
                    {post.excerpt && (
                      <span className="block mt-1 font-body text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </span>
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 w-12 h-px bg-primary opacity-40 mx-auto" />
      </div>
    </section>
  );
};

export default BlogSection;

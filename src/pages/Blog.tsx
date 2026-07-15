import { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { useSeo } from "@/hooks/useSeo";
import posts from "@/data/posts.json";

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
}

const all = (posts as Post[]).slice().sort(
  (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
);

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const Blog = () => {
  const [filter, setFilter] = useState<"all" | "essays" | "podcasts">("all");
  const hasPodcasts = all.some((p) => p.audioUrl);
  const filtered = all.filter((p) =>
    filter === "all" ? true : filter === "podcasts" ? !!p.audioUrl : !p.audioUrl
  );

  useSeo({
    title: "Writing — Ascend with Ashima",
    description:
      "Essays and reflections on the Yoga Sutras, Ayurveda, Vedanta and the Bhagavad Gita — for grounded, thoughtful living.",
    canonical: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Ascend with Ashima — Writing",
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
        <div className="container max-w-3xl">
          <header className="mb-16 text-center">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary/70 mb-4">
              Writing
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-brand mb-6">
              Essays &amp; Reflections
            </h1>
            <p className="font-body text-base text-foreground/70 max-w-xl mx-auto">
              On the Yoga Sutras, Ayurveda, Vedanta and the Bhagavad Gita — for
              grounded, thoughtful living.
            </p>
          </header>

          {hasPodcasts && (
            <div className="flex justify-center gap-2 mb-12" role="tablist" aria-label="Filter posts">
              {(["all", "essays", "podcasts"] as const).map((key) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={filter === key}
                  onClick={() => setFilter(key)}
                  className={`font-body text-xs tracking-widest uppercase px-4 py-2 border transition-colors ${
                    filter === key
                      ? "border-brand text-brand"
                      : "border-border text-foreground/60 hover:text-brand"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <p className="text-center font-body text-foreground/60">
              New writing coming soon.
            </p>
          ) : (
            <ul className="space-y-12">
              {filtered.map((p) => (
                <li key={p.slug} className="border-b border-border pb-12 last:border-0">
                  {p.image && (
                    <Link to={`/blog/${p.slug}`} className="block group">
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="w-full aspect-[2/1] object-cover rounded-sm mb-6"
                      />
                    </Link>
                  )}
                  <p className="font-body text-[11px] tracking-widest uppercase text-foreground/50 mb-3 flex items-center gap-3">
                    {p.audioUrl && (
                      <span className="inline-flex items-center gap-1 text-brand">
                        <span aria-hidden>●</span> Podcast
                      </span>
                    )}
                    <time dateTime={p.pubDate}>{formatDate(p.pubDate)}</time>
                    <span>·</span>
                    <span>{p.readingMinutes} min read</span>
                  </p>
                  <Link to={`/blog/${p.slug}`} className="group block">
                    <h2 className="font-display text-2xl md:text-3xl text-brand group-hover:text-primary transition-colors mb-3">
                      {p.title}
                    </h2>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {p.description}
                    </p>
                  </Link>
                  {p.audioUrl && (
                    <audio
                      controls
                      preload="none"
                      src={p.audioUrl}
                      className="w-full mt-5"
                    >
                      <a href={p.audioUrl}>Download episode</a>
                    </audio>
                  )}
                  <Link
                    to={`/blog/${p.slug}`}
                    className="inline-block mt-4 font-body text-xs tracking-widest uppercase text-primary hover:text-brand transition-colors"
                  >
                    {p.audioUrl ? "Read the notes →" : "Read essay →"}
                  </Link>
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

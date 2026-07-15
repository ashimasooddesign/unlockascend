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

          {all.length === 0 ? (
            <p className="text-center font-body text-foreground/60">
              New writing coming soon.
            </p>
          ) : (
            <ul className="space-y-12">
              {all.map((p) => (
                <li key={p.slug} className="border-b border-border pb-12 last:border-0">
                  <Link to={`/blog/${p.slug}`} className="group block">
                    {p.image && (
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="w-full aspect-[2/1] object-cover rounded-sm mb-6"
                      />
                    )}
                    <p className="font-body text-[11px] tracking-widest uppercase text-foreground/50 mb-3">
                      <time dateTime={p.pubDate}>{formatDate(p.pubDate)}</time>
                      <span className="mx-2">·</span>
                      {p.readingMinutes} min read
                    </p>
                    <h2 className="font-display text-2xl md:text-3xl text-brand group-hover:text-primary transition-colors mb-3">
                      {p.title}
                    </h2>
                    <p className="font-body text-foreground/70 leading-relaxed">
                      {p.description}
                    </p>
                    <span className="inline-block mt-4 font-body text-xs tracking-widest uppercase text-primary">
                      Read essay →
                    </span>
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

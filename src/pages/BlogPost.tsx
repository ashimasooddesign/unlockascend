import { Link, useParams, Navigate } from "react-router-dom";
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
  url: string;
  audioUrl?: string;
  audioType?: string;
  contentHtml: string;
  readingMinutes: number;
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = (posts as Post[]).find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  useSeo({
    title: `${post.title} — Ascend with Ashima`,
    description: post.description,
    canonical: `/blog/${post.slug}`,
    ogImage: post.image,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.pubDate,
      author: { "@type": "Person", name: post.author },
      image: post.image,
      mainEntityOfPage: `/blog/${post.slug}`,
    },
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-24">
        <article className="container max-w-2xl">
          <Link to="/blog" className="link-subtle">
            ← All writing
          </Link>

          <header className="mt-8 mb-10">
            <p className="font-body text-[11px] tracking-widest uppercase text-foreground/50 mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
              {post.audioUrl && (
                <span className="text-brand">● Podcast</span>
              )}
              <time dateTime={post.pubDate}>{formatDate(post.pubDate)}</time>
              <span>·</span>
              <span>{post.readingMinutes} min read</span>
            </p>
            <h1 className="font-display text-3xl md:text-5xl text-brand leading-tight">
              {post.title}
            </h1>
            {post.audioUrl && (
              <div className="mt-8">
                <audio
                  controls
                  preload="metadata"
                  src={post.audioUrl}
                  className="w-full"
                >
                  <a href={post.audioUrl}>Download episode</a>
                </audio>
              </div>
            )}
          </header>




          <div
            className="prose prose-neutral max-w-none font-body
              prose-headings:font-display prose-headings:text-brand
              prose-p:text-foreground/85 prose-p:leading-relaxed
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-primary/40 prose-blockquote:text-foreground/75
              prose-img:rounded-sm prose-hr:border-border"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          <footer className="mt-16 pt-8 border-t border-border text-center">
            <p className="font-body text-sm text-foreground/70 mb-4">
              Originally published on Substack.
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Read on Substack →
            </a>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
};

export default BlogPost;

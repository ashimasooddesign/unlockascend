const SUBSTACK_URL = "https://ascendwithashima.substack.com";
const SUBSTACK_EMBED = "https://ascendwithashima.substack.com/embed";

const posts = [
  {
    title: "Svadhyaya",
    excerpt: "The practice of turning inward.",
    date: "Apr 25",
    href: `${SUBSTACK_URL}/p/svadhyaya`,
  },
  {
    title: "Why Practice Feels Inconsistent",
    excerpt: "What if inconsistency isn't failure, but information.",
    date: "Apr 21",
    href: `${SUBSTACK_URL}/p/why-practice-feels-inconsistent`,
  },
  {
    title: "What Effortlessness Actually Means",
    excerpt: "On 'Sahaj'.",
    date: "Apr 18",
    href: `${SUBSTACK_URL}/p/what-effortlessness-actually-means`,
  },
  {
    title: "On Dharana: What It Means to Stay",
    excerpt: "The capacity to remain.",
    date: "Apr 14",
    href: `${SUBSTACK_URL}/p/on-dharana-what-it-means-to-stay`,
  },
];

const BlogSection = () => {
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
                  <span className="block mt-1 font-body text-sm text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Substack subscribe embed */}
        <div className="mt-16 flex flex-col items-center text-center gap-6">
          <h3 className="font-display text-2xl md:text-3xl font-light text-brand">
            Subscribe to Ascend
          </h3>
          <p className="font-body text-base text-muted-foreground max-w-md leading-relaxed">
            Receive new reflections in your inbox. Free, occasional, and never noisy.
          </p>
          <div className="w-full max-w-xl rounded-sm overflow-hidden border border-border/60 bg-card">
            <iframe
              src={SUBSTACK_EMBED}
              title="Subscribe to Ascend with Ashima"
              loading="lazy"
              width="100%"
              height="320"
              style={{ border: 0, background: "transparent" }}
            />
          </div>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase bg-brand text-primary-foreground px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
          >
            Subscribe on Substack
          </a>
        </div>

        <div className="mt-12 w-12 h-px bg-primary opacity-40 mx-auto" />
      </div>
    </section>
  );
};

export default BlogSection;

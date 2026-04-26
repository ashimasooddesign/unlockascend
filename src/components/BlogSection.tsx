const SUBSTACK_URL = "https://ascendwithashima.substack.com";

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

        <div className="mt-12 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default BlogSection;

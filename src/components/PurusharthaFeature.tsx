import { Link } from "react-router-dom";

const PurusharthaFeature = () => {
  return (
    <section
      aria-label="Featured mentorship — Purushartha"
      className="border-y border-border/60 bg-secondary/40"
    >
      <div className="container max-w-5xl py-16 md:py-24">
        <div className="grid md:grid-cols-[auto_1fr_auto] gap-10 md:gap-14 items-center">
          {/* Mark — four arcs for the four aims */}
          <div className="flex md:block justify-center">
            <svg
              viewBox="0 0 200 200"
              className="w-24 h-24 md:w-32 md:h-32 text-brand"
              aria-hidden="true"
            >
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
              <path d="M100 30 A70 70 0 0 1 170 100" fill="none" stroke="currentColor" strokeWidth="1.25" />
              <path d="M170 100 A70 70 0 0 1 100 170" fill="none" stroke="currentColor" strokeWidth="1.25" />
              <path d="M100 170 A70 70 0 0 1 30 100" fill="none" stroke="currentColor" strokeWidth="1.25" />
              <path d="M30 100 A70 70 0 0 1 100 30" fill="none" stroke="currentColor" strokeWidth="1.25" />
              <circle cx="100" cy="100" r="3" fill="currentColor" />
            </svg>
          </div>

          <div className="text-center md:text-left">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary/80 mb-3">
              New · A Private Mentorship
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-light text-brand leading-tight mb-3">
              Purushartha
            </h2>
            <p className="font-display italic text-lg md:text-xl text-muted-foreground mb-4">
              The four aims that, together, make a whole life.
            </p>
            <p className="font-body text-base text-foreground/80 max-w-xl md:max-w-2xl leading-relaxed mx-auto md:mx-0">
              A months-long, one-on-one container for those who have outgrown ordinary coaching.
              Health, relationships, work and money — met at the root.
            </p>
            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-1 font-body text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              <span>Purpose</span><span>·</span>
              <span>Means</span><span>·</span>
              <span>Desire</span><span>·</span>
              <span>Freedom</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Link
              to="/purushartha"
              className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors underline underline-offset-8 whitespace-nowrap"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurusharthaFeature;

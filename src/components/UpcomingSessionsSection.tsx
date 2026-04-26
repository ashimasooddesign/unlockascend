const UpcomingSessionsSection = () => {
  return (
    <section id="sessions" className="py-24 md:py-36 bg-card wash-warm">
      <div className="container max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-6">
          Upcoming Sessions
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-16 max-w-2xl">
          Small-group containers designed for depth, consistency, and inner transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Yoga Sutra Study — Aug 14 */}
          <div className="group relative rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm p-8 md:p-10 space-y-5 transition-shadow hover:shadow-lg">
            <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-primary/80 mb-1">
              August 14 - November 30, 2026 · Semester 1
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground leading-snug">
              Yoga Sutra Study
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              A 14-week, small-group journey through Chapters 1 &amp; 2 of the <em>Yoga Sutra</em> - slow, cross-referenced, and rooted in lived experience.
            </p>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>3 live sessions per week (Mon · Wed · Fri)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Cross-referenced with Bhagavad Gita, Samkhya, Vedanta &amp; Ayurveda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Maximum 10 participants - application required</span>
              </li>
            </ul>
            <div className="pt-3">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOBlW7ludogmikvOidGxVjYvQKZdxS8fIFqCy0yn6brT17Qw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-sm tracking-widest uppercase text-primary hover:text-foreground transition-colors underline underline-offset-4"
              >
                Apply now →
              </a>
            </div>
          </div>

          {/* Navratri Sadhana — Oct 11 */}
          <div className="group relative rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm p-8 md:p-10 space-y-5 transition-shadow hover:shadow-lg">
            <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-primary/80 mb-1">
              October 11 - 19, 2026 · 9-Day Immersive
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground leading-snug">
              Sharad Navratri Sadhana
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Nine days of devotion, discipline, and inner alignment - woven into the sacred rhythm of Navratri.
            </p>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span><em>Devi Mahatmyam</em> study - verse-by-verse, guided</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Ayurvedic fasting - timed and supported</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Chanting, mudras &amp; chakra balancing</span>
              </li>
            </ul>
            <p className="font-body text-sm text-muted-foreground/80 italic pt-1">
              Details and registration opening soon.
            </p>
          </div>
        </div>

        <div className="mt-16 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default UpcomingSessionsSection;

const UpcomingSessionsSection = () => {
  return (
    <section id="sessions" aria-label="Upcoming yoga and scripture study sessions" className="py-24 md:py-36 bg-card wash-warm">
      <div className="container max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-6">
          Upcoming Sessions
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-16 max-w-2xl">
          Small-group containers designed for depth, consistency, and inner transformation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10">
          {/* Yoga Sutra Study */}
          <div className="group relative rounded-2xl border border-border/60 bg-background/60 backdrop-blur-sm p-8 md:p-10 space-y-5 transition-shadow hover:shadow-lg">
            <span className="inline-block font-body text-xs tracking-[0.2em] uppercase text-primary/80 mb-1">
              One-on-One · Begin when you are ready
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground leading-snug">
              Yoga Sutra Study
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              A close reading of Patanjali's <em>Yoga Sutra</em> — structured as a practical framework for understanding your patterns, thoughts, and lived reality.
            </p>
            <ul className="space-y-2 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Around 2 hours a week, one-on-one, at a rhythm that fits your life</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Quantum understanding of the text interlinked with coaching frameworks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✦</span>
                <span>Small-group study returns in time — ask to join the waitlist</span>
              </li>
            </ul>
            <div className="pt-3 flex flex-wrap items-center gap-x-4 gap-y-3">
              <a
                href="mailto:team@unlockascend.com?subject=Yoga%20Sutra%20Study"
                className="btn-primary"
              >
                Write to begin →
              </a>
              <a href="/yoga-sutra-study" className="btn-secondary">
                Learn more
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
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-3">
              <p className="font-body text-sm text-muted-foreground/80 italic">
                Registration opens soon.{" "}
                <a href="#connect" className="link-action not-italic">
                  reach out to be notified first →
                </a>
              </p>
              <a href="/navratri-sadhana" className="btn-secondary">
                Learn more
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default UpcomingSessionsSection;

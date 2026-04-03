const UpcomingSessionsSection = () => {
  return (
    <section id="sessions" className="py-24 md:py-36 bg-card wash-warm">
      <div className="container max-w-5xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-16">
          Upcoming Sessions
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Navratri Sadhana */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
              Sharad Navratri Sadhana
            </h3>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              A 9-day immersive aligned with the rhythm of Navratri.
            </p>
            <div className="space-y-3 font-body text-base text-muted-foreground">
              <p className="font-medium text-foreground">Includes:</p>
              <ul className="space-y-2 ml-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><em>Devi Mahatmyam</em> Study (verse-by-verse, guided)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Ayurvedic Fasting (timed and supported)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Chanting, Mudras & Chakra Balancing</span>
                </li>
              </ul>
            </div>
            <p className="font-body text-base text-muted-foreground italic leading-relaxed">
              A space for devotion, discipline, and inner alignment.
            </p>
          </div>

          {/* Yoga Sutra Study */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl md:text-3xl font-light text-foreground">
              Yoga Sutra Study <span className="text-lg text-muted-foreground">(14 Weeks)</span>
            </h3>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              A structured study of Chapters 1 & 2 of the <em>Yoga Sutra</em>.
            </p>
            <ul className="space-y-2 ml-1 font-body text-base text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Slow, guided exploration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Cross-referenced with traditional and practical insights</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✦</span>
                <span>Space for reflection and discussion</span>
              </li>
            </ul>

            <div className="pt-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOBlW7ludogmikvOidGxVjYvQKZdxS8fIFqCy0yn6brT17Qw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-body text-sm tracking-widest uppercase text-primary hover:text-foreground transition-colors underline underline-offset-4"
              >
                Apply here →
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

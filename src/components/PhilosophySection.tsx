const PhilosophySection = () => {
  return (
    <section aria-label="Yoga Sutra philosophy quote" className="py-28 md:py-44 wash-terracotta">
      <div className="container max-w-3xl text-center">
        <p className="font-display text-lg md:text-xl font-light text-muted-foreground leading-relaxed italic tracking-wide" lang="sa">
          प्रकाशक्रियास्थितिस्वभावं भूतइन्द्रियात्मकं पुरुषस्य भोगापवर्गार्थं दृश्यं।
        </p>
        <blockquote className="mt-10 md:mt-12 font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed">
          The objective world <span className="italic text-muted-foreground">(Dṛśyam)</span> is composed of the three qualities <span className="italic text-muted-foreground">(Gunas)</span>: illumination <span className="italic text-muted-foreground">(Prakāśa)</span>, activity <span className="italic text-muted-foreground">(Kriyā)</span>, and inertia <span className="italic text-muted-foreground">(Sthiti)</span>. It consists of the elements <span className="italic text-muted-foreground">(Bhūta)</span> and the senses <span className="italic text-muted-foreground">(Indriya)</span>, and its ultimate purpose is to serve both as an experience <span className="italic text-muted-foreground">(Bhoga)</span> and as a means to ultimate liberation <span className="italic text-muted-foreground">(Apavarga)</span>.
        </blockquote>
        <p className="mt-12 font-body text-xs text-muted-foreground tracking-[0.25em] uppercase">
          Patanjali's <em>Yoga Sutra</em> · 2.18
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

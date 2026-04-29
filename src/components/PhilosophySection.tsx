const PhilosophySection = () => {
  return (
    <section aria-label="Yoga Sutra philosophy quote" className="py-24 md:py-36 wash-terracotta">
      <div className="container max-w-3xl text-center">
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug italic">
          "Yoga is the settling of the mind into silence. When the mind has settled, 
          we are established in our essential nature, which is unbounded consciousness."
        </blockquote>
        <p className="mt-8 font-body text-sm text-muted-foreground tracking-widest uppercase">
          Patanjali's <em>Yoga Sutra</em>, 1.2–1.3
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

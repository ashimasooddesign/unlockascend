const PhilosophySection = () => {
  return (
    <section className="py-24 md:py-36 wash-terracotta">
      <div className="container max-w-3xl text-center">
        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug italic">
          "Yoga is the settling of the mind into silence. When the mind has settled, 
          we are established in our essential nature, which is unbounded consciousness."
        </blockquote>
        <p className="mt-8 font-body text-sm text-muted-foreground tracking-widest uppercase">
          Patanjali's <em>Yoga Sutra</em>, 1.2–1.3
        </p>
        <div className="mt-16 w-12 h-px bg-primary opacity-40 mx-auto" />
        <p className="mt-8 font-body text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
          This work is not about adding more. It is about returning - to rhythm, to 
          presence, to the quiet intelligence that precedes thought.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

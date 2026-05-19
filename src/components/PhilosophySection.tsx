const PhilosophySection = () => {
  return (
    <section aria-label="Yoga Sutra philosophy quote" className="py-24 md:py-36 wash-terracotta">
      <div className="container max-w-3xl text-center">
        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-snug italic" lang="sa">
          प्रकाशक्रियास्थितिस्वभावं भूतइन्द्रियात्मकं पुरुषस्य भोगापवर्गार्थं दृश्यं।
        </p>
        <blockquote className="mt-8 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          The objective world (Dṛśyam) is composed of the three qualities (Gunas): illumination (Prakāśa), activity (Kriyā), and inertia (Sthiti). It consists of the elements (Bhūta) and the senses (Indriya), and its ultimate purpose is to serve both as an experience (Bhoga) and as a means to ultimate liberation (Apavarga).
        </blockquote>
        <p className="mt-8 font-body text-sm text-muted-foreground tracking-widest uppercase">
          Patanjali's <em>Yoga Sutra</em>, 2.18
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;

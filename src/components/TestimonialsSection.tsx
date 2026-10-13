const testimonials = [
  {
    quote:
      "Ashima truly meets you where you are… she designed a sustainable approach that works for me. Because of her, I've been able to stay consistent, and the impact has been life-changing.",
    name: "Namratha M",
    descriptor: "1 year of bespoke sadhana — asan, pranayam, dhyan",
  },
  {
    quote:
      "Working with Ashima has been a one of a kind experience… it provides psychological safety and somatic healing rather than meditating alone.",
    name: "Vrinda Movva",
    descriptor: "Meditation 1 on 1",
  },
  {
    quote:
      "Her voice and energy created a calming, peaceful space. I felt deeply relaxed, centered, and recharged.",
    name: "Shivani Gupta",
    descriptor: "Garbhopanishad study participant",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" aria-label="Participant testimonials" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-16 text-center">
          What Participants Say
        </h2>

        <div className="space-y-12">
          {testimonials.map((t, i) => (
            <div key={i}>
              <blockquote className="text-center px-4 md:px-8">
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
                <footer className="mt-5 font-body text-sm tracking-wide text-foreground/70">
                  — {t.name}, <span className="text-muted-foreground/80">{t.descriptor}</span>
                </footer>
              </blockquote>
              {i < testimonials.length - 1 && (
                <div className="mt-12 w-24 h-px bg-primary/20 mx-auto" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 w-12 h-px bg-primary opacity-40 mx-auto" />
      </div>
    </section>
  );
};

export default TestimonialsSection;

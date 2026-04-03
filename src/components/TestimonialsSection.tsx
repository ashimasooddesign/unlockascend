const testimonials = [
  {
    quote:
      "Ashima truly meets you where you are… she designed a sustainable approach that works for me. Because of her, I've been able to stay consistent, and the impact has been life-changing.",
    name: "Namratha M",
    location: "US",
  },
  {
    quote:
      "Working with Ashima has been a one of a kind experience… it provides psychological safety and somatic healing rather than meditating alone.",
    name: "Vrinda Movva",
    location: "IN",
  },
  {
    quote:
      "Her voice and energy created a calming, peaceful space. I felt deeply relaxed, centered, and recharged.",
    name: "Shivani Gupta",
    location: "IN",
  },
  {
    quote:
      "Ashima has been gentle, kind, and sharp… she makes the text feel alive and lived. The small community that forms is also incredibly valuable.",
    name: "Paul",
    location: "IN",
  },
  {
    quote:
      "Compassionate wisdom… placing traditional teachings towards a future that supports others.",
    name: "C. Russell",
    location: "US",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-16">
          What Participants Say
        </h2>

        <div className="grid gap-10 md:gap-12">
          {testimonials.map((t, i) => (
            <blockquote key={i} className="border-l-2 border-primary/30 pl-6 md:pl-8">
              <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
                "{t.quote}"
              </p>
              <footer className="mt-3 font-body text-sm tracking-wide text-foreground/70">
                — {t.name}, {t.location}
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-16 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default TestimonialsSection;

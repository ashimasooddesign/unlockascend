import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    },
    []
  );

  // Auto-advance every 6s
  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-16 text-center">
          What Participants Say
        </h2>

        <div className="relative min-h-[200px] flex items-center">
          {/* Prev */}
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 p-2 text-muted-foreground/50 hover:text-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial */}
          <blockquote
            key={current}
            className="text-center px-8 md:px-12 animate-fade-in"
          >
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
              "{t.quote}"
            </p>
            <footer className="mt-6 font-body text-sm tracking-wide text-foreground/70">
              — {t.name}, {t.location}
            </footer>
          </blockquote>

          {/* Next */}
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 p-2 text-muted-foreground/50 hover:text-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current
                  ? "bg-primary scale-125"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        <div className="mt-16 w-12 h-px bg-primary opacity-40 mx-auto" />
      </div>
    </section>
  );
};

export default TestimonialsSection;

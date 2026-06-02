import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
  {
    quote:
      "Ashima has been gentle, kind, and sharp… she makes the text feel alive and lived. The small community that forms is also incredibly valuable.",
    name: "Paul",
    descriptor: "Devi Mahatmyam study participant",
  },
  {
    quote:
      "Compassionate wisdom… placing traditional teachings towards a future that supports others.",
    name: "C. Russell",
    descriptor: "Devi Mahatmyam study participant",
  },
  {
    quote:
      "Introduction to Patanjali Yoga Sutras by Ashima as the Teacher brought me closer to myself and provided answers to some of my questions on life and living. The profound content of the Chapters and the clear explanation of the sutras by her, through experiences and examples helped me understand better. Verse 2.33 on Pratipaksha bhavanam has become my mool mantra. The revision before the session and consolidation at the end with interconnections during the session, helped put things in perspective. Meditation was another highlight of the sessions. Ashima's energy took me to a calming and reflective space, energising me in a quiet way. The unhurried pace, open-endedness with no prescriptions and her humility helped me internalize and put the learning into action. Look forward to our last Chapter after a short break because of work commitments.",
    name: "Bela",
    descriptor: "Yog Sutra study participant, IN",
  },
  {
    quote:
      'It will come to you when it\'s meant to."\n\nThis is something I\'ve heard Ashima say often when speaking about spiritual teachings.\n\nAnd in my experience of starting Sutra Studies with Ashima, I feel like it really did.\n\nI began sutra study sessions with Ashima when I was at a crossroads in my career and life, in a liminal space between two chapters — a time when I was rebuilding and re-evaluating my sense of purpose, direction, and personal values. Our sessions were exactly what I needed.\n\nAshima has a rare ability to bring clarity and depth to each conversation. She invited reflection, created space for genuine inquiry, and allowed each persons meaning-making journey to unfold naturally.\n\nHer sessions was marked by simplicity and depth. We would often read the sutras (at times requesting repeats), discuss our understandings, ask questions, share experiences, and close with a group meditation.\n\nIt\'s clear that Ashima is a spiritual teacher grounded in experience, deep personal practice, and intentional study. This comes through in the way she holds space, the questions she asks, and how she responds, weaving connections between the Yoga Sutras, Ayurveda, Advaita Vedanta, the Bhagavad Gita, Samkhya philosophy, elements of Western psychology, and more.\n\nHer presence felt grounded yet incisive, humble yet assured, balanced and steady in a way that is rare to find.\n\nGrateful and heart-full, Shima Sood 🙏🤍',
    name: "Anchal",
    descriptor: "Yog Sutra Study participant, CA",
  },
];

const TestimonialsSection = () => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" aria-label="Participant testimonials" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-16 text-center">
          What Participants Say
        </h2>

        <div className="space-y-12">
          {visible.map((t, i) => (
            <div key={i}>
              <blockquote className="text-center px-4 md:px-8">
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
                  "{t.quote}"
                </p>
                <footer className="mt-5 font-body text-sm tracking-wide text-foreground/70">
                  — {t.name}, <span className="text-muted-foreground/80">{t.descriptor}</span>
                </footer>
              </blockquote>
              {i < visible.length - 1 && (
                <div className="mt-12 w-24 h-px bg-primary/20 mx-auto" />
              )}
            </div>
          ))}
        </div>

        {!expanded && testimonials.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setExpanded(true)}
              className="inline-flex items-center gap-1.5 font-body text-sm text-brand hover:opacity-70 transition-opacity"
            >
              Read more reflections
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-16 w-12 h-px bg-primary opacity-40 mx-auto" />
      </div>
    </section>
  );
};

export default TestimonialsSection;

import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is Ascend, and what do you offer?",
    a: "Ascend is a small practice built around classical yoga, Ayurveda, and scripture study. I offer group study circles, seasonal Ayurvedic programs, yoga and meditation sessions, and occasional one-on-one work, all rooted in traditional teaching and designed for people who want depth over quick fixes. Everything here moves slowly, on purpose.",
  },
  {
    q: "Do I need a background in yoga or Vedanta to join?",
    a: "No, but curiosity and some patience are essential. The study circles and sessions are designed to meet people where they are, whether you've been practicing for years or you're just beginning to feel drawn to these traditions. What matters more than prior knowledge is a genuine willingness to sit with the material slowly.",
  },
  {
    q: "What tradition or lineage does your teaching come from?",
    a: "My foundation is in classical yoga and Advaita Vedanta. I hold a 900-hour Teacher Training Certification from The Yoga Institute, Mumbai, one of the oldest yoga institutions in the world, where my grounding in the classical texts began. I've studied the Yoga Sutras of Patanjali, the Bhagavad Gita, and the Devi Mahatmyam, among others, and these texts remain at the centre of everything I teach.",
  },
  {
    q: "Is this a religious practice? Do I need to be Hindu?",
    a: "These teachings come from within the Sanatana Dharma tradition, and I hold that context with care, it isn't something I set aside for the sake of accessibility. You don't need to identify as Hindu to study here, but you do need to come with genuine respect for where these teachings come from. The questions the texts ask, about the nature of the self, right action, the ground beneath experience, are ones any sincere seeker will recognise. If you're drawn to this work, that draw is usually reason enough.",
  },
  {
    q: "How is this different from a regular yoga class or wellness programme?",
    a: "Most yoga classes focus on asana, the physical postures. What I offer goes significantly further: we read the source texts, study the philosophy, and practice Ayurvedic principles as a way of living, not just a set of health tips. The goal isn't a better workout or a stress-relief technique. It's a more grounded understanding of yourself and how you move through the world.",
  },
  {
    q: "How do the study circles work, what does a session actually look like?",
    a: "We read slowly. A typical session involves reading a passage from the text together, sitting with it, discussing what it's asking of us, not just intellectually, but in terms of how we actually live. There's no rushing through chapters to cover content. The pace is deliberate, and the conversation tends to go places a lecture format never could.",
  },
  {
    q: "Why do you cap groups at 10 participants?",
    a: "Because that's the number at which real conversation is still possible. Beyond that, people start performing rather than inquiring. The small size also means I can actually track where each person is in their understanding and practice, something that matters a lot when you're working with texts this layered.",
  },
  {
    q: "Why is there an application process?",
    a: "Partly because of the small group size, there simply isn't room for everyone. But more importantly, these study circles work best when everyone in the room is genuinely committed to the process. A short application helps me understand where you are, what you're looking for, and whether this particular offering is the right fit for you right now. It's not about qualification, it's about fit.",
  },
  {
    q: "Are the sessions online or in person?",
    a: "All sessions are currently online, which means participants join from across the world. In my experience this hasn't diminished the quality of the study. If anything, it's brought together people who wouldn't have found each other otherwise. You'll need a stable internet connection, a quiet space, and the willingness to show up fully.",
  },
  {
    q: "What's the time commitment for a study circle like the Yoga Sutra Study?",
    a: "The Yoga Sutra Study runs 14 weeks with three live sessions per week, Monday, Wednesday, and Friday. Beyond the live sessions, I'd suggest setting aside some time each day to sit with what's come up, even if it's just 10 minutes. This isn't a course you can passively consume. It asks something of you between sessions too.",
  },
  {
    q: "What is Ayurvedic guidance, and how does it work in practice?",
    a: "Ayurveda is a classical Indian system of medicine and lifestyle rooted in understanding your individual constitution, your prakriti, and how to live in alignment with it across seasons, stages of life, and daily rhythms. My guidance isn't prescriptive in the way a clinical consultation might be. It's more about learning to read your own body and energy honestly, and making small, sustainable adjustments that accumulate over time.",
  },
  {
    q: "What are one-on-one sessions for, who are they best suited to?",
    a: "Usually people who are at a particular crossroads, a transition in work or life, a spiritual question that's become urgent, or someone who's been practicing independently for a while and wants more directed guidance. These sessions are unhurried conversations that draw on philosophy, practice, and Ayurvedic understanding depending on what's most alive for you.",
  },
  {
    q: "I've tried meditation apps and yoga classes and they haven't stuck. Will this be different?",
    a: "Possibly, but I'd be honest with you about why. Apps and drop-in classes are designed for ease of entry, which also means ease of exit. What I offer asks for more commitment up front, and that's precisely what tends to make it stick. When you've applied, been accepted, and shown up three times a week to the same group of people reading the same text together, something different starts to happen. The accountability is built into the structure.",
  },
  {
    q: "Do you teach in English or Hindi?",
    a: "All sessions are taught in English. When we study Sanskrit texts, I work through the original Sanskrit alongside accessible English translations, so you don't need to know Sanskrit, though over time you'll naturally start to recognise terms and their meanings. That's part of the process.",
  },
  {
    q: "How do I know which offering is right for me?",
    a: "If you're drawn to a particular text or practice, start there, that pull is usually meaningful. If you're unsure, the best thing is to read through the Substack for a few weeks and see what resonates, or simply write to me. I'd rather spend ten minutes in conversation helping you find the right fit than have you join something that isn't quite right for where you are.",
  },
];

const FaqSection = () => {
  useEffect(() => {
    const id = "faq-jsonld";
    const existing = document.getElementById(id);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = id;
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  return (
    <section id="faq" aria-label="Frequently asked questions" className="py-24 md:py-32">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-base text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          On the practice, the lineage, and how the study circles, Ayurvedic
          guidance, and one-on-one sessions work.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="font-display text-left text-lg md:text-xl text-brand font-light">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;

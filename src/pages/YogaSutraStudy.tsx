import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const faqs: FaqItem[] = [
  {
    question: "Do I need prior knowledge of Sanskrit or yoga philosophy?",
    answer:
      "No. The text is translated and unpacked verse by verse, and each idea is cross-referenced with lived experience so the meaning lands as practical understanding, not memorisation.",
  },
  {
    question: "When does the study begin?",
    answer:
      "There are no fixed dates. The study now runs one-on-one, and we begin when you are ready. Write to me and we will find a rhythm that fits your life.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Around two hours of live online study each week, shaped around your schedule, with time kept open after each session for questions and integration.",
  },
  {
    question: "Is there a waitlist for small-group study?",
    answer:
      "Yes. If you would rather study alongside others, write to me and I will add you to the waitlist for the next small group.",
  },
  {
    question: "What will I leave with?",
    answer:
      "A clearer way of seeing your own patterns, a practical framework drawn from the Yoga Sutra, and a steadier approach to relationships, challenges, and the way thoughts shape reality.",
  },
];

const reflections = [
  {
    name: "Bela",
    descriptor: "India · Yog Sutra study participant",
    paragraphs: [
      "\"Introduction to Patanjali Yoga Sutras by Ashima as the Teacher brought me closer to myself and provided answers to some of my questions on life and living. The profound content of the Chapters and the clear explanation of the sutras by her, through experiences and examples helped me understand better. Verse 2.33 on Pratipaksha bhavanam has become my mool mantra. The revision before the session and consolidation at the end with interconnections during the session, helped put things in perspective. Meditation was another highlight of the sessions. Ashima's energy took me to a calming and reflective space, energising me in a quiet way. The unhurried pace, open-endedness with no prescriptions and her humility helped me internalize and put the learning into action. Look forward to our last Chapter after a short break because of work commitments.\"",
    ],
  },
  {
    name: "Anchal",
    descriptor: "CA · Yog Sutra study participant",
    paragraphs: [
      "\"It will come to you when it's meant to.\"",
      "This is something I've heard Ashima say often when speaking about spiritual teachings.",
      "And in my experience of starting Sutra Studies with Ashima, I feel like it really did.",
      "I began sutra study sessions with Ashima when I was at a crossroads in my career and life, in a liminal space between two chapters, a time when I was rebuilding and re-evaluating my sense of purpose, direction, and personal values. Our sessions were exactly what I needed.",
      "Ashima has a rare ability to bring clarity and depth to each conversation. She invited reflection, created space for genuine inquiry, and allowed each persons meaning-making journey to unfold naturally.",
      "Her sessions was marked by simplicity and depth. We would often read the sutras (at times requesting repeats), discuss our understandings, ask questions, share experiences, and close with a group meditation.",
      "It's clear that Ashima is a spiritual teacher grounded in experience, deep personal practice, and intentional study. This comes through in the way she holds space, the questions she asks, and how she responds, weaving connections between the Yoga Sutras, Ayurveda, Advaita Vedanta, the Bhagavad Gita, Samkhya philosophy, elements of Western psychology, and more.",
      "Her presence felt grounded yet incisive, humble yet assured, balanced and steady in a way that is rare to find.",
      "Grateful and heart-full 🙏🤍",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Yoga Sutra Study — One-on-One",
  description:
    "A one-on-one online study of Patanjali's Yoga Sutra, cross-referenced with coaching, scriptural frameworks, and a quantum understanding of how thoughts shape reality.",
  provider: {
    "@type": "Organization",
    name: "Ascend",
    sameAs: "https://unlockascend.com/",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    courseWorkload: "PT2H",
  },
};

const YogaSutraStudy = () => {
  useSeo({
    title: "Yoga Sutra Study Online — One-on-One with Ashima Sood | Ascend",
    description:
      "A one-on-one study of Patanjali's Yoga Sutra. Quantum understanding of how thoughts shape reality. Build a framework that works for you. Begin when you are ready.",
    canonical: "https://unlockascend.com/yoga-sutra-study",
    keywords:
      "Yoga Sutra study, Patanjali Yoga Sutra online, one-on-one scripture study, quantum understanding, swadhyay, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="One-on-One · Begin When You Are Ready"
      title="Yoga Sutra Study"
      lead="A close reading of Patanjali's Yoga Sutra — structured not as information, but as a framework for understanding your patterns, your thoughts, and the reality you live in."
      ctaHref="mailto:team@unlockascend.com?subject=Yoga%20Sutra%20Study"
      ctaLabel="Write to begin →"
      ctaNote="Studied one-on-one. Ask to join the waitlist for the next small group."
      faqs={faqs}
    >

      <p>
        The <em>Yoga Sutra</em> is not a book to be finished. It is a map of the
        mind, written with such density that a single verse can hold a lifetime
        of practice. In this study, we approach the text as a practical tool — a
        way to understand how your thoughts shape your experience, and to build a
        personal framework that actually works for your life.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        What we will explore
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ A quantum understanding of the text as a living tool</li>
        <li>✦ How to improve your human experience through self-inquiry</li>
        <li>✦ Creating a framework that works for your patterns and behaviours</li>
        <li>✦ The structure of mind, movement, and the conditions for steadiness</li>
        <li>✦ Coaching and scriptural frameworks interlinked to validate your path</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Format
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ Around two hours of live one-on-one study each week</li>
        <li>✦ Time kept open after each session for questions and integration</li>
        <li>✦ You will have my support throughout to self-evaluate and apply what you learn</li>
        <li>✦ Live assignments during sessions</li>
        <li>✦ Take-home assignments to deepen the work</li>
        <li>✦ Recordings available for lifetime access</li>
      </ul>
      <p className="font-body text-sm text-muted-foreground italic">
        No fixed dates. We begin when you are ready, at a pace and rhythm that suits your life. If
        you would prefer to study in a small group,{" "}
        <a href="mailto:team@unlockascend.com?subject=Yoga%20Sutra%20Study%20Waitlist" className="link-action not-italic">
          ask to join the waitlist →
        </a>
      </p>


      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        What you can expect
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ A change in your approach to life — reality shifting</li>
        <li>✦ Quantum understanding of how thoughts shape reality</li>
        <li>✦ Clearer thinking</li>
        <li>✦ Coaching and scriptural frameworks interlinked to validate your journey</li>
        <li>✦ Improved relationships</li>
        <li>✦ A better approach to challenges</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Who it is for
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ Yoga teachers wanting to deepen their relationship with the text</li>
        <li>✦ Individuals wanting to explore the Yoga Sutra from a different dimension</li>
        <li>✦ People wanting to supplement therapy sessions and understand themselves more fully</li>
        <li>✦ Yogis and sadhaks looking to perform <em>swadhyay</em></li>
        <li>✦ A safe space — I am an ally</li>
        <li>✦ A judgement-free zone</li>
        <li>✦ Beginners who are feeling called to the texts</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        What participants say
      </h2>
      <div className="space-y-10">
        {reflections.map((r) => (
          <figure key={r.name}>
            <blockquote className="font-body text-base md:text-lg text-foreground/90 leading-relaxed italic space-y-4">
              {r.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </blockquote>
            <figcaption className="mt-3 font-body text-sm text-muted-foreground">
              {r.name} · {r.descriptor}
            </figcaption>
          </figure>
        ))}
      </div>
    </LandingPageLayout>
  );
};

export default YogaSutraStudy;


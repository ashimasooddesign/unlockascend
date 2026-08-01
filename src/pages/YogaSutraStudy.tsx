import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const faqs: FaqItem[] = [
  {
    question: "Do I need prior knowledge of Sanskrit or yoga philosophy?",
    answer:
      "No. The text is translated and unpacked verse by verse, and each idea is cross-referenced with lived experience so the meaning lands as practical understanding, not memorisation.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Two hours of live online study each week, from August 22 to December 14, 2026, with the third Saturday of each month off. I also hang back for 30 minutes after each session for questions and integration.",
  },
  {
    question: "Why is the group capped at 10 participants?",
    answer:
      "Small numbers allow real dialogue, individual attention, and the kind of trust that classical study traditionally happens in. It is the opposite of a webinar.",
  },
  {
    question: "Why is an application required?",
    answer:
      "To make sure the group is suited to the depth of the work. The application is short — a few questions about what brings you to the Yoga Sutra and what you are hoping to understand.",
  },
  {
    question: "What will I leave with?",
    answer:
      "A clearer way of seeing your own patterns, a practical framework drawn from the Yoga Sutra, and a steadier approach to relationships, challenges, and the way thoughts shape reality.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Yoga Sutra Study — Semester 1",
  description:
    "A 14-week small-group online study of Patanjali's Yoga Sutra, cross-referenced with coaching, scriptural frameworks, and a quantum understanding of how thoughts shape reality.",
  provider: {
    "@type": "Organization",
    name: "Ascend",
    sameAs: "https://unlockascend.com/",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    startDate: "2026-08-22",
    endDate: "2026-12-14",
    courseWorkload: "PT2H",
  },
};

const YogaSutraStudy = () => {
  useSeo({
    title: "Yoga Sutra Study Online — Small Group with Ashima Sood | Ascend",
    description:
      "A 14-week small-group study of Patanjali's Yoga Sutra. Quantum understanding of how thoughts shape reality. Build a framework that works for you. August 22 - December 14, 2026.",
    canonical: "https://unlockascend.com/yoga-sutra-study",
    keywords:
      "Yoga Sutra study, Patanjali Yoga Sutra online, quantum understanding, swadhyay, scripture study, coaching, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="14-Week Semester · Begins August 22, 2026"
      title="Yoga Sutra Study"
      lead="A close reading of Patanjali's Yoga Sutra — structured not as information, but as a framework for understanding your patterns, your thoughts, and the reality you live in."
      ctaHref="https://docs.google.com/forms/d/e/1FAIpQLSeOBlW7ludogmikvOidGxVjYvQKZdxS8fIFqCy0yn6brT17Qw/viewform?usp=header"
      ctaLabel="Apply for Semester 1"
      ctaNote="Maximum 10 participants. Application required."
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
        <li>✦ Two hours of live online study each week</li>
        <li>✦ I hang back for 30 minutes after each session for questions and integration</li>
        <li>✦ You will have my support throughout to self-evaluate and apply what you learn</li>
        <li>✦ Live assignments during sessions</li>
        <li>✦ Take-home assignments to deepen the work</li>
        <li>✦ Recordings available for lifetime access</li>
      </ul>
      <p className="font-body text-sm text-muted-foreground italic">
        August 22 - December 14, 2026. Third Saturday of each month off.
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
    </LandingPageLayout>
  );
};

export default YogaSutraStudy;


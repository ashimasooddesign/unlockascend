import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const faqs: FaqItem[] = [
  {
    question: "Do I need prior knowledge of Sanskrit or yoga philosophy?",
    answer:
      "No. We translate every sutra, build vocabulary slowly, and cross-reference each verse with the Bhagavad Gita, Samkhya and Vedanta so the meaning lands in lived experience rather than memorisation.",
  },
  {
    question: "What is the time commitment?",
    answer:
      "Three live online sessions per week (Monday, Wednesday, Friday) for 14 weeks, plus light reflection between sessions. Recordings are shared if you miss a class.",
  },
  {
    question: "Why is the group capped at 10 participants?",
    answer:
      "Small numbers allow real dialogue, individual attention to your questions, and the kind of trust that classical study traditionally happens in. It is the opposite of a webinar.",
  },
  {
    question: "Why is an application required?",
    answer:
      "To make sure the group is suited to the depth of the work. The application is short — a few questions about your practice and what brings you to the Yoga Sutra.",
  },
  {
    question: "What will we cover across the 14 weeks?",
    answer:
      "Chapters 1 (Samadhi Pada) and 2 (Sadhana Pada) of Patanjali's Yoga Sutra — the nature of mind, the obstacles to clarity, the eight limbs, and the practical methods Patanjali offers for steadiness.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Yoga Sutra Study — Semester 1",
  description:
    "A 14-week, small-group online study of Chapters 1 and 2 of Patanjali's Yoga Sutra, cross-referenced with the Bhagavad Gita, Samkhya, Vedanta and Ayurveda.",
  provider: {
    "@type": "Organization",
    name: "Ascend",
    sameAs: "https://unlockascend.com/",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    startDate: "2026-08-14",
    endDate: "2026-11-30",
    courseWorkload: "PT3H",
  },
};

const YogaSutraStudy = () => {
  useSeo({
    title: "Yoga Sutra Study Online — 14-Week Small Group with Ashima Sood | Ascend",
    description:
      "A 14-week small-group study of Patanjali's Yoga Sutra (Chapters 1 & 2) — slow, cross-referenced with Bhagavad Gita, Samkhya, Vedanta and Ayurveda. Begins August 14, 2026.",
    canonical: "https://unlockascend.com/yoga-sutra-study",
    keywords:
      "Yoga Sutra study, Patanjali Yoga Sutra online, Samadhi Pada, Sadhana Pada, scripture study, Vedanta, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="14-Week Semester · Begins August 14, 2026"
      title="Yoga Sutra Study"
      lead="A slow, small-group reading of Patanjali's Yoga Sutra — Chapters 1 and 2 — held over fourteen weeks of live online sessions."
      ctaHref="https://docs.google.com/forms/d/e/1FAIpQLSeOBlW7ludogmikvOidGxVjYvQKZdxS8fIFqCy0yn6brT17Qw/viewform?usp=header"
      ctaLabel="Apply for Semester 1"
      ctaNote="Maximum 10 participants. Application required."
      faqs={faqs}
    >
      <p>
        The <em>Yoga Sutra</em> is not a book to be finished. It is a map of the mind, written
        with such density that a single verse can hold a year of practice. This study is built
        around that fact: we move slowly, verse by verse, returning to the same ideas from
        different angles until they begin to live inside you rather than on the page.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        How the study is shaped
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ Three live online sessions each week (Monday, Wednesday, Friday)</li>
        <li>✦ Each verse cross-referenced with the Bhagavad Gita, Samkhya Karika, Vedanta and Ayurveda</li>
        <li>✦ Sanskrit translated and unpacked — no prior language knowledge needed</li>
        <li>✦ Maximum ten participants, application required</li>
        <li>✦ Recordings of every session for personal review</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        What we will read
      </h2>
      <p>
        <strong>Chapter 1 — Samadhi Pada.</strong> The nature of yoga, the movements of the
        mind, the obstacles to clarity, and the conditions under which steadiness becomes
        possible.
      </p>
      <p>
        <strong>Chapter 2 — Sadhana Pada.</strong> The five afflictions, the eight limbs of
        yoga, and the daily practices Patanjali offers for those who want to actually live
        this — not only think about it.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Who it is for
      </h2>
      <p>
        Practitioners who want to move past the surface of yoga — beyond posture, beyond
        wellness — and meet the tradition on its own terms. You do not need to be a teacher,
        and you do not need to be a beginner. You only need the willingness to read slowly.
      </p>
    </LandingPageLayout>
  );
};

export default YogaSutraStudy;

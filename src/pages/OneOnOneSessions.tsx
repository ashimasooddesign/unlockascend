import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const faqs: FaqItem[] = [
  {
    question: "What happens in a one-on-one session?",
    answer:
      "We meet over video for a contemplative conversation. There is no fixed format — we begin with what is most alive for you, and from there the work might draw on yoga philosophy, Ayurvedic guidance, scripture, or practice. The shape follows what is needed.",
  },
  {
    question: "Is this therapy or coaching?",
    answer:
      "Neither. This is contemplative companionship grounded in the yogic and Vedantic traditions. It is not a clinical service. If something therapeutic is needed, that will be named honestly.",
  },
  {
    question: "Who comes for one-on-one work?",
    answer:
      "Most often: people in transition — career, relationship, grief, parenthood, midlife — and people deepening an existing practice who want a steadier mirror. There is no 'right' moment to begin.",
  },
  {
    question: "How many sessions do most people do?",
    answer:
      "Some come once for a specific question. Others meet monthly or seasonally over a longer period. We decide together after the first session what cadence, if any, would actually serve you.",
  },
  {
    question: "How do I begin?",
    answer:
      "Write in with a few sentences about what's bringing you to the work. Ashima reads every message personally and replies to schedule a first session if it feels like a good fit.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "One-on-One Contemplative Sessions with Ashima Sood",
  serviceType: "Contemplative guidance",
  description:
    "Private online sessions with Ashima Sood for those in transition or deepening practice — integrating yoga philosophy, Ayurveda, scripture and personal discernment.",
  provider: {
    "@type": "Person",
    name: "Ashima Sood",
    url: "https://unlockascend.com/",
  },
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://unlockascend.com/one-on-one",
    availableLanguage: "English",
  },
};

const OneOnOneSessions = () => {
  useSeo({
    title: "One-on-One Sessions with Ashima Sood — Yoga, Ayurveda & Scripture | Ascend",
    description:
      "Private contemplative sessions with Ashima Sood for those in transition or deepening practice. Integrating yoga philosophy, Ayurveda and scripture. Online, worldwide.",
    canonical: "https://unlockascend.com/one-on-one",
    keywords:
      "one on one yoga session, private Ayurveda consultation, contemplative coaching, scripture mentorship, Vedanta, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="Private Sessions · Online, Worldwide"
      title="One-on-One Sessions"
      lead="Contemplative conversations for those in transition or deepening practice — held privately, online, and shaped entirely around what you are actually living."
      ctaHref="/#connect"
      ctaLabel="Begin a conversation"
      ctaNote="Ashima reads every message personally."
      faqs={faqs}
    >
      <p>
        There are seasons in a life when the usual answers stop being enough. A relationship
        ends. A role no longer fits. A practice deepens and the questions get larger rather
        than smaller. These sessions are for those seasons — a private space to think out loud,
        with someone who listens carefully and draws on a long tradition for what to offer back.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        What the work draws from
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ Classical yoga philosophy — the <em>Yoga Sutra</em>, the <em>Bhagavad Gita</em>, Vedanta</li>
        <li>✦ Ayurvedic understanding of constitution, season and rhythm</li>
        <li>✦ Practical guidance on <em>sadhana</em> — what to actually do, day to day</li>
        <li>✦ Honest reflection — held with care, never with prescription</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Who comes
      </h2>
      <p>
        People navigating a real transition — career change, grief, the early years of
        parenthood, a midlife reordering. Practitioners deepening an existing practice and
        wanting a clearer mirror. Students of the texts who want to take a question further
        than a group setting allows.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        How sessions work
      </h2>
      <p>
        Sessions are held over video. Some people come once for a specific question. Others
        meet monthly or seasonally. After the first conversation we decide together what
        cadence — if any — would actually serve you. There is no package to commit to upfront.
      </p>
    </LandingPageLayout>
  );
};

export default OneOnOneSessions;

import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const faqs: FaqItem[] = [
  {
    question: "What is Sharad Navratri?",
    answer:
      "Navratri means 'nine nights' — a sacred period observed across India in which the feminine principle (Devi) is honoured in her three aspects: Durga, Lakshmi and Saraswati. Sharad Navratri falls in autumn and is traditionally a time of inner cleansing, fasting, and devotion.",
  },
  {
    question: "What does the Devi Mahatmyam study involve?",
    answer:
      "We read the Devi Mahatmyam verse by verse across the nine days — translating Sanskrit, drawing out the symbolism of each battle and each form of the Goddess, and connecting it to the inner work the text is actually describing.",
  },
  {
    question: "Do I have to fast?",
    answer:
      "No. Ayurvedic fasting is offered as an optional, supported strand of the immersive — with guidance on what to eat, when to eat, and how to listen to your body. You can participate fully in the study and practice without fasting.",
  },
  {
    question: "Is this only for Hindus?",
    answer:
      "No. The work is open to anyone drawn to it. We approach the texts and rituals with respect for their tradition, and we explain the inner meaning of every practice so that participation is conscious rather than performative.",
  },
  {
    question: "When does registration open?",
    answer:
      "Registration opens closer to the dates. You can write in now to be added to the early-notice list and receive details before the public opening.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Sharad Navratri Sadhana — Devi Mahatmyam Study & Ayurvedic Fasting",
  description:
    "A nine-day online immersive of Devi Mahatmyam study, Ayurvedic fasting, chanting, mudras and chakra balancing, held during Sharad Navratri 2026.",
  startDate: "2026-10-11",
  endDate: "2026-10-19",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "VirtualLocation",
    url: "https://unlockascend.com/navratri-sadhana",
  },
  organizer: {
    "@type": "Organization",
    name: "Ascend",
    url: "https://unlockascend.com/",
  },
};

const NavratriSadhana = () => {
  useSeo({
    title: "Navratri Sadhana 2026 — Devi Mahatmyam Study & Ayurvedic Fasting | Ascend",
    description:
      "Nine-day online Sharad Navratri immersive with Ashima Sood: Devi Mahatmyam verse-by-verse study, Ayurvedic fasting, chanting, mudras and chakra balancing. Oct 11–19, 2026.",
    canonical: "https://unlockascend.com/navratri-sadhana",
    keywords:
      "Navratri sadhana, Sharad Navratri 2026, Devi Mahatmyam study, Ayurvedic fasting, chanting, chakra balancing, Goddess worship, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="9-Day Immersive · October 11 – 19, 2026"
      title="Sharad Navratri Sadhana"
      lead="Nine days of devotion, discipline and inner alignment — woven into the sacred rhythm of Navratri and held in small group online."
      ctaHref="/#connect"
      ctaLabel="Join the early-notice list"
      ctaNote="Registration opens closer to the dates."
      faqs={faqs}
    >
      <p>
        Navratri is the season the tradition gives us for inner reordering. Across nine nights,
        the Goddess is honoured in her three movements — destroyer of what no longer serves,
        nourisher of what is becoming, and revealer of what is true. This sadhana is a
        supported container for walking those nine nights with intention.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        The nine days
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ <em>Devi Mahatmyam</em> studied verse by verse, with translation and inner meaning</li>
        <li>✦ Ayurvedic fasting — timed, supported, and entirely optional</li>
        <li>✦ Daily chanting, mudras and chakra balancing</li>
        <li>✦ Live online sessions held in a small, intentional group</li>
        <li>✦ A simple daily rhythm to follow between sessions</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        The Devi Mahatmyam
      </h2>
      <p>
        The <em>Devi Mahatmyam</em> ('Glory of the Goddess') is one of the most loved texts in
        the Shakta tradition. On its surface it tells of three battles between the Goddess and
        forces of disorder. Read carefully, it is a teaching on the inner work of recognising,
        meeting and transforming the obstacles inside our own awareness.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Who it is for
      </h2>
      <p>
        Anyone drawn to the feminine principle of the tradition — whether familiar with
        Navratri from childhood or meeting it for the first time. No prior background is
        assumed. What is asked is the willingness to set aside nine days for slowing down,
        listening, and beginning again.
      </p>
    </LandingPageLayout>
  );
};

export default NavratriSadhana;

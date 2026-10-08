import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";
import ashimaSadhana from "@/assets/ashima-sadhana.jpg.asset.json";
import devimahatmyamBook from "@/assets/devimahatmyam-book.jpg.asset.json";

const STUDY_URL =
  "https://topmate.io/ashima_sood/2338894/pay?utm_source=public_profile&utm_campaign=ashima_sood&skipped_service_page=1";
const SADHANA_URL =
  "https://topmate.io/ashima_sood/2338667/pay?utm_source=public_profile&utm_campaign=ashima_sood&skipped_service_page=1";
const COMPLETE_URL =
  "https://topmate.io/ashima_sood/2338933/pay?utm_source=public_profile&utm_campaign=ashima_sood&skipped_service_page=1";

const faqs: FaqItem[] = [
  {
    question: "What is Sharad Navratri?",
    answer:
      "Navratri means 'nine nights', a sacred period observed across India in which the feminine principle (Devi) is honoured in her three aspects: Durga, Lakshmi and Saraswati. Sharad Navratri falls in autumn and is traditionally a time of inner cleansing, fasting, and devotion.",
  },
  {
    question: "What are the three ways to participate?",
    answer:
      "There are three options: the Complete Navratri Sadhana + Devi Mahatmyam Immersion (₹7,777 / $95), which combines both and is the recommended option, the Navratri Sadhana (nine days of guided practice, ₹4,444 / $60), and the Devi Mahatmyam Study (three live 90-minute sessions on Saptami, Ashtami and Navami, ₹3,999 / $50).",
  },
  {
    question: "What time are the sessions?",
    answer:
      "Daily Sadhana sessions begin at 6:00 PM IST (7:30 AM US Central / 2:30 PM Central European Time). On Saptami, Ashtami and Navami, the live sessions begin at 5:30 PM IST (7:00 AM US Central / 1:30 PM Central European Time) and run for 90 minutes.",
  },
  {
    question: "Do I have to fast?",
    answer:
      "No. Fasting is offered as optional, supported guidance, kept simple and adaptable. You can participate fully in the meditation, chanting, study and Sadhana without fasting. If you are pregnant, breastfeeding, diabetic, taking medication that requires food, or have any health condition or history of disordered eating, please consult your doctor before changing your diet. You are also welcome to write to me to discuss adapting the practice.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Recordings are uploaded after each live session is completed, so you can follow the practice at your own pace. The Zoom link is shared closer to the start date.",
  },
  {
    question: "Is this only for Hindus?",
    answer:
      "No. The work is open to anyone drawn to it. We approach the texts and rituals with respect for their tradition, and we explain the inner meaning of every practice so that participation is conscious rather than performative.",
  },
  {
    question: "Which translation of the Devi Mahatmyam will we use?",
    answer:
      "The primary reference for the study is Dr. Ketu Ramachandra Shekhar's version and commentary. You are welcome to use another translation alongside the sessions if you prefer.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Navratri Sadhana 2026",
  description:
    "A small, guided nine-day Navratri Sadhana with Ashima Sood: Devi sadhana and upasana, meditation, chanting, bija mantra recitation, Ayurvedic fasting guidance, contemplation, and a three-day Devi Mahatmyam immersion. October 11-19, 2026.",
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
  offers: [
    {
      "@type": "Offer",
      name: "Complete Navratri Sadhana + Devi Mahatmyam Immersion",
      price: "95",
      priceCurrency: "USD",
      url: COMPLETE_URL,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Navratri Sadhana",
      price: "60",
      priceCurrency: "USD",
      url: SADHANA_URL,
      availability: "https://schema.org/InStock",
    },
    {
      "@type": "Offer",
      name: "Devi Mahatmyam Study",
      price: "50",
      priceCurrency: "USD",
      url: STUDY_URL,
      availability: "https://schema.org/InStock",
    },
  ],
};

const NavratriSadhana = () => {
  useSeo({
    title: "Navratri Sadhana 2026 — Devi Practice, Chanting & Devi Mahatmyam | Ascend",
    description:
      "A small, guided nine-day Navratri Sadhana with Ashima Sood, October 11-19, 2026. Devi sadhana, meditation, chanting, bija mantra recitation, Ayurvedic fasting guidance and a three-day Devi Mahatmyam immersion.",
    canonical: "https://unlockascend.com/navratri-sadhana",
    keywords:
      "Navratri sadhana, Sharad Navratri 2026, Devi Mahatmyam study, Devi upasana, bija mantra chanting, Ayurvedic fasting, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="Nine Days · October 11 – 19, 2026"
      title="Navratri Sadhana 2026"
      lead="Nine days of practice, contemplation and relationship with the Devi, held in a small guided group online."
      faqs={faqs}
    >
      <p>
        This is a small, guided nine-day Navratri Sadhana combining Devi sadhana and upasana,
        meditation, chanting, bija mantra recitation, Ayurvedic fasting guidance, contemplation,
        and a three-day <em className="font-display">Devi Mahatmyam</em> immersion.
      </p>

      <figure>
        <img
          src={ashimaSadhana.url}
          alt="Ashima Sood seated in evening sadhana beside a lit diya"
          className="w-full aspect-[4/3] object-cover rounded-xl"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="mt-3 font-body text-xs tracking-[0.25em] uppercase text-muted-foreground">
          Evening sadhana during Navratri
        </figcaption>
      </figure>


      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Three ways to participate
      </h2>
      <ol className="space-y-8 list-none pl-0">
        <li className="border border-border/60 bg-secondary/40 p-6">
          <p className="font-body text-[11px] tracking-[0.25em] uppercase text-primary/80 mb-2">
            Recommended
          </p>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">
            1. Complete Navratri Sadhana + Devi Mahatmyam Immersion
          </h3>
          <p className="font-body text-sm tracking-[0.18em] uppercase text-primary/80 mb-2">
            ₹7,777 / $95
          </p>
          <p>
            The complete nine-day Sadhana plus all three 90-minute{" "}
            <em className="font-display">Devi Mahatmyam</em> study sessions.
          </p>
          <a
            href={COMPLETE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 inline-block"
          >
            Join the complete program →
          </a>
        </li>
        <li>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">
            2. Navratri Sadhana
          </h3>
          <p className="font-body text-sm tracking-[0.18em] uppercase text-primary/80 mb-2">
            ₹4,444 / $60
          </p>
          <p>
            Nine days of guided practice from October 11 to 19. Includes meditation, chanting,
            bija mantra recitation, Devi sadhana and upasana, contemplative practices and
            Ayurvedic fasting guidance.
          </p>
          <a
            href={SADHANA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-4 inline-block"
          >
            Join Navratri Sadhana →
          </a>
        </li>
        <li>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">
            3. Devi Mahatmyam Study
          </h3>
          <p className="font-body text-sm tracking-[0.18em] uppercase text-primary/80 mb-2">
            ₹3,999 / $50
          </p>
          <p>
            Three live 90-minute sessions on Saptami, Ashtami and Navami. For people who already
            have their own Navratri practice and want focused study of the{" "}
            <em className="font-display">Devi Mahatmyam</em>.
          </p>
          <a
            href={STUDY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary mt-4 inline-block"
          >
            Join the study →
          </a>
        </li>
      </ol>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">Schedule</h2>
      <ul className="space-y-3 list-none pl-0">
        <li className="flex items-start gap-3">
          <span className="text-primary mt-0.5">✦</span>
          <span>
            <strong className="font-normal text-foreground">Daily Sadhana</strong> · 6:00 PM IST
            (7:30 AM US Central / 2:30 PM Central European Time)
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-0.5">✦</span>
          <span>
            <strong className="font-normal text-foreground">
              Saptami, Ashtami &amp; Navami
            </strong>{" "}
            · 5:30 PM IST (7:00 AM US Central / 1:30 PM Central European Time), 90 minutes
          </span>
        </li>
        <li className="flex items-start gap-3">
          <span className="text-primary mt-0.5">✦</span>
          <span>
            <strong className="font-normal text-foreground">Recordings</strong> · uploaded after
            each live session, so you can follow at your own pace
          </span>
        </li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Before Navratri begins
      </h2>
      <ul className="space-y-3 list-none pl-0">
        <li>✦ Find a journal</li>
        <li>✦ Choose a simple, quiet space for daily practice</li>
        <li>✦ Let people at home know you will need some uninterrupted practice time</li>
        <li>✦ Optionally, light a lamp at sunset in your own local time zone</li>
      </ul>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        The nine days
      </h2>
      <p>
        The nine days are dedicated to the nine forms of the Devi. The daily practice includes
        Devi sadhana and upasana, meditation, chanting and contemplation. For the first seven
        days, bija mantra recitations are included and taught according to appropriate chanting
        rules and specifications.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        The Devi Mahatmyam
      </h2>
      <p>
        On Saptami, Ashtami and Navami, the <em className="font-display">Devi Mahatmyam</em> is
        explored as a tale of inner conflict, with attention to its narrative, philosophical and
        contemplative dimensions. The primary reference for the study is Dr. Ketu Ramachandra
        Shekhar's version and commentary; you are welcome to use another translation alongside the
        sessions. Each of the three live study sessions is 90 minutes and includes Devi sadhana,
        upasana, chanting and recitation, study and contemplation.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Fasting
      </h2>
      <p>
        The fasting guidance is kept simple, accessible and adaptable, rather than restrictive.
        Suggested options include sabudana preparations such as khichdi and kheer, rajgira and
        paneer preparations (including paneer makhmali), sweet potato, fruits, nuts and seeds, and
        other simple Navratri-appropriate foods.
      </p>
      <p className="text-muted-foreground">
        Fasting is not appropriate for everyone. If you are pregnant, breastfeeding, diabetic,
        taking medication that requires food, or have a medical condition, a history of disordered
        eating, or any other health circumstance that may make fasting unsuitable, please consult
        your doctor or a qualified healthcare professional before changing your diet. You may also
        contact me to discuss adapting the practice. You can participate fully in the meditation,
        chanting, study and Sadhana without fasting.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-6">
        Live sessions and recordings
      </h2>
      <p>
        All sessions are held live on Zoom; the link is shared closer to the start date.
        Recordings are uploaded after each live session is completed, so you can follow along at
        your own pace.
      </p>
    </LandingPageLayout>
  );
};

export default NavratriSadhana;

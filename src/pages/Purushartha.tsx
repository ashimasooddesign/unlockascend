import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const faqs: FaqItem[] = [
  {
    question: "How is this different from coaching?",
    answer:
      "Most coaching picks one domain — career, relationship, mindset — and works it in isolation. Purushartha begins from the premise that the four aims of a life (purpose, means, desire, freedom) are one system. It is trauma-informed, and it draws on classical practice as well as mindset work, so change reaches further than insight and holds under pressure.",
  },
  {
    question: "Who is this mentorship for?",
    answer:
      "Entrepreneurs, coaches and healers, senior professionals, and people rebuilding after a long stretch of caregiving or transition — those who have already done the workshops and read the books, and are ready to meet what is underneath.",
  },
  {
    question: "How long is the container?",
    answer:
      "A multi-month arc, built to let real change settle. The precise length and cadence are shaped in the discovery call based on where you are and what you are working with.",
  },
  {
    question: "What happens between sessions?",
    answer:
      "You are not holding the work alone all week. There is direct support between sessions, and simple practices to carry the work into daily life.",
  },
  {
    question: "How do I begin?",
    answer:
      "Write in for a discovery call. It is a short, honest conversation — no pressure — to see whether Purushartha fits where you are and where you are trying to go. Ashima responds personally.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Purushartha — Private Mentorship with Ashima Sood",
  serviceType: "Private mentorship",
  description:
    "A private, months-long mentorship for those who have outgrown ordinary coaching. Health, relationships, work and money — met at the root, through mindset work, nervous-system practice and classical wisdom.",
  provider: {
    "@type": "Person",
    name: "Ashima Sood",
    url: "https://unlockascend.com/",
  },
  areaServed: "Worldwide",
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://unlockascend.com/purushartha",
    availableLanguage: "English",
  },
};

const Purushartha = () => {
  useSeo({
    title: "Purushartha — A Mentorship Beyond Coaching | Ascend with Ashima Sood",
    description:
      "A private, months-long mentorship for those who have outgrown ordinary coaching. Health, relationships, work and money, met at the root.",
    canonical: "https://unlockascend.com/purushartha",
    keywords:
      "Purushartha, private mentorship, trauma informed coaching, yoga mentorship, Ayurveda mentorship, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="A Private Mentorship"
      title="Purushartha"
      lead="The four aims that, together, make a whole life. A one-on-one mentorship for people who have already done the workshops, read the books, and tried the usual coaching — and are ready to meet what is underneath."
      ctaHref="/#connect"
      ctaLabel="Book a discovery call"
      ctaNote="I respond personally. — Ashima"
      faqs={faqs}
    >
      {/* Signature mark — four arcs for the four aims */}
      <div className="flex flex-col items-center py-2">
        <svg
          viewBox="0 0 200 200"
          className="w-32 h-32 md:w-40 md:h-40 text-brand"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          <path d="M100 30 A70 70 0 0 1 170 100" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <path d="M170 100 A70 70 0 0 1 100 170" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <path d="M100 170 A70 70 0 0 1 30 100" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <path d="M30 100 A70 70 0 0 1 100 30" fill="none" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="100" cy="100" r="3" fill="currentColor" />
        </svg>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 font-body text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
          <span>Purpose</span>
          <span>·</span>
          <span>Means</span>
          <span>·</span>
          <span>Desire</span>
          <span>·</span>
          <span>Freedom</span>
        </div>
      </div>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        Beyond coaching
      </h2>
      <p className="font-display italic text-lg md:text-xl text-foreground/80 not-italic">
        Most coaching manages the surface. This works at the root.
      </p>
      <p>
        <em className="font-display">Purushartha</em>, a term from the classical tradition I trained in,
        names the four aims a life is built from: purpose, means, desire, and freedom. Most coaching picks
        one and works it in isolation — a career strategy here, a relationship script there. This
        mentorship starts from a different premise: that the four are one system, and the pattern showing
        up in your business is the same one showing up in your marriage and your body.
      </p>
      <p>
        This is trauma-informed work. Before we build new habits or new goals, we look honestly at the
        thoughts and identities you built to survive what you have already been through, so the shift is
        not another layer of willpower stacked on an old wound — it is an actual change in what is
        running underneath.
      </p>
      <p>
        Over several months, in private one-on-one sessions, we pair deliberate mindset work with the
        ancient healing tools I have trained in for over a decade, so the change reaches further than
        insight and actually holds under pressure.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        Is this you
      </h2>
      <p>
        You already have a full life. Something in it still feels unfinished.
      </p>
      <p>
        You might be an entrepreneur carrying a business that runs on your energy and nothing else, or a
        coach or healer who has spent years holding space for others and quietly run out of anyone to hold
        space for you. You might be steady in a corporate career and still restless, sensing there is a
        version of your life you have not stepped into yet. You might be rebuilding after a sabbatical or
        a long stretch spent caring for a home and everyone in it, wondering where you went. Or you might
        simply be someone who, by every outward measure, has everything — and still feels something is
        amiss. If any of that is familiar, this mentorship was built with you in mind.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        The arc of the work
      </h2>
      <p>
        Without giving away the full map, here is the shape of the journey we walk together.
      </p>
      <ol className="space-y-6 list-none pl-0 pt-2">
        <li>
          <span className="font-display italic text-primary/80 text-sm block mb-1">i.</span>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">Rebuilding the mind</h3>
          <p className="text-base">
            We begin by deliberately reshaping the thoughts running your life on autopilot, so you can
            tell the difference between an inherited belief and a choice you are actually making.
          </p>
        </li>
        <li>
          <span className="font-display italic text-primary/80 text-sm block mb-1">ii.</span>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">Meeting what is underneath</h3>
          <p className="text-base">
            We trace the identity built by old pain against the one you would consciously choose, and
            start closing the gap between them — working directly with the nervous system so the shift
            settles in the body.
          </p>
        </li>
        <li>
          <span className="font-display italic text-primary/80 text-sm block mb-1">iii.</span>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">Living from the new ground</h3>
          <p className="text-base">
            With the old patterns loosened, we turn to what you are building next — your relationships,
            your work, your longer-term vision — and put in place a way of deciding and acting that holds
            after our sessions end.
          </p>
        </li>
      </ol>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        How we work together
      </h2>
      <p>
        This is an intensive, private container — not a course you move through alone.
      </p>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 pt-2">
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Format</dt>
          <dd className="text-base text-foreground">One-on-one, live sessions, held with full attention</dd>
        </div>
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Length</dt>
          <dd className="text-base text-foreground">A multi-month arc, built to let real change settle</dd>
        </div>
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Between sessions</dt>
          <dd className="text-base text-foreground">Direct support so you are not holding the work alone</dd>
        </div>
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Approach</dt>
          <dd className="text-base text-foreground">Mindset work, nervous-system practice, and classical wisdom, woven together</dd>
        </div>
      </dl>
      <p className="pt-2">
        Because this is a small, high-touch mentorship and not a group program, I take on a limited
        number of people at a time. The full structure, energy exchange, and fit are things we talk
        through on a discovery call.
      </p>
    </LandingPageLayout>
  );
};

export default Purushartha;

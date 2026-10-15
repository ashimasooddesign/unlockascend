import LandingPageLayout, { FaqItem } from "@/components/LandingPageLayout";
import { useSeo } from "@/hooks/useSeo";

const DISCOVERY_CALL_URL = "https://unlockascend.gumroad.com/l/discoverpurushartha";

const CallCta = ({ note }: { note?: string }) => (
  <div className="text-center py-2">
    <a
      href={DISCOVERY_CALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-primary"
    >
      Book a discovery call →
    </a>
    {note && (
      <p className="mt-3 font-body text-sm text-muted-foreground italic">{note}</p>
    )}
  </div>
);

const faqs: FaqItem[] = [
  {
    question: "How is this different from coaching?",
    answer:
      "Most coaching picks one domain — career, relationship, mindset — and works it in isolation. The Purushartha Project begins from the premise that the four aims of a life (purpose, means, desire, freedom) are one system. It is trauma-informed, and it draws on classical practice as well as mindset work, so change reaches further than insight and holds under pressure.",
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
      "Write in for a discovery call. It is a short, honest conversation — no pressure — to see whether The Purushartha Project fits where you are and where you are trying to go. Ashima responds personally.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "The Purushartha Project — Private Mentorship with Ashima Sood",
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
    title: "The Purushartha Project | Private Mentorship",
    description:
      "Explore personalised mentorship combining self-inquiry, mindset work, contemplative practice, and traditional Indian wisdom to support clearer, more conscious choices.",
    canonical: "https://unlockascend.com/purushartha",
    keywords:
      "The Purushartha Project, purushartha, private mentorship, trauma informed coaching, yoga mentorship, Ayurveda mentorship, Ashima Sood, Ascend",
    jsonLd,
  });

  return (
    <LandingPageLayout
      eyebrow="A Private Mentorship"
      title="The Purushartha Project"
      lead="Private, one-to-one mentorship for people who are ready to understand what is shaping their lives, and choose what comes next more consciously."
      ctaHref="https://unlockascend.gumroad.com/l/discoverpurushartha"
      ctaLabel="Book a discovery call"
      ctaNote="I respond personally. Ashima"
      faqs={faqs}
    >
      <p>You might be successful in your career and still feel disconnected from what you want.</p>
      <p>
        You might know your patterns, understand where they came from, and still find yourself
        repeating them.
      </p>
      <p>
        You might be facing a decision about your work, relationships, money, or the life you want to
        build, and find it difficult to distinguish what you genuinely want from what you've learned
        to expect of yourself.
      </p>
      <p>
        <em className="font-display">The Purushartha Project</em> is an individualised mentorship for
        exploring these questions at their roots.
      </p>
      <p>
        Drawing on self-inquiry, mindset work, nervous-system practices, and traditional Indian
        wisdom, we work together to understand the beliefs and responses shaping your experience,
        reconnect with your values, and develop a more conscious way of moving forward.
      </p>
      <p>
        This isn't about following someone else's formula for a better life. It's about understanding
        your own life more clearly, so the choices you make are more genuinely your own.
      </p>

      <CallCta note="A short, honest conversation to see whether this work fits where you are." />

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
      </div>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        Why Purushartha?
      </h2>
      <p>
        In the Indian philosophical tradition, the four <em className="font-display">puruṣārthas</em>{" "}
        describe four aims of human life:
      </p>
      <ul className="space-y-2 list-none pl-0">
        <li><strong className="font-medium text-foreground"><em>Dharma</em>:</strong> Purpose, responsibility, and right action.</li>
        <li><strong className="font-medium text-foreground"><em>Artha</em>:</strong> Resources, material wellbeing, and the means to live.</li>
        <li><strong className="font-medium text-foreground"><em>Kāma</em>:</strong> Desire, enjoyment, and fulfilment.</li>
        <li><strong className="font-medium text-foreground"><em>Mokṣa</em>:</strong> Freedom or liberation.</li>
      </ul>
      <p>
        Rather than treating work, relationships, material wellbeing, and inner freedom as separate
        pursuits, this framework invites us to consider how they relate to one another, and what a
        well-lived life means to us.
      </p>
      <p>
        The mentorship takes this wider view into the specifics of your life, combining classical
        insight with practical, individualised work.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        You may recognise yourself here
      </h2>
      <dl className="space-y-6">
        {[
          ["You keep repeating a pattern you thought you'd already worked through.", "You understand it intellectually, but it still shows up in your choices or relationships."],
          ["Your life looks successful, but something feels missing.", "You have built a career or life that once made sense, and you're questioning what you want from this next chapter."],
          ["You struggle to trust your own decisions.", "You weigh every option, anticipate everyone else's reactions, and find it hard to know what feels right for you."],
          ["You carry more than your share.", "In work, relationships, or family life, you often adapt to other people's needs and lose sight of your own."],
          ["You are in a transition.", "You may be changing direction, returning to yourself after years of caregiving, or trying to work out what matters now."],
        ].map(([t, d]) => (
          <div key={t}>
            <dt className="font-display text-xl font-normal text-foreground mb-1">{t}</dt>
            <dd className="text-base">{d}</dd>
          </div>
        ))}
      </dl>
      <p>
        You don't need to identify with every point. You only need to recognise that something in your
        life deserves a closer look.
      </p>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        The arc of the work
      </h2>
      <ol className="space-y-6 list-none pl-0 pt-2">
        <li>
          <span className="font-display italic text-primary/80 text-sm block mb-1">01.</span>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">Understand the patterns</h3>
          <p className="text-base">
            Identify the beliefs, assumptions, and automatic responses shaping how you think, feel, and
            act. Begin distinguishing what you learned to do from what you consciously want to choose.
          </p>
        </li>
        <li>
          <span className="font-display italic text-primary/80 text-sm block mb-1">02.</span>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">Create room for a different response</h3>
          <p className="text-base">
            Work with the emotional and bodily responses that can keep familiar patterns in place.
            Depending on your needs, this may involve self-inquiry, EFT, somatic practices, meditation,
            or other tools suited to the work.
          </p>
        </li>
        <li>
          <span className="font-display italic text-primary/80 text-sm block mb-1">03.</span>
          <h3 className="font-display text-xl font-normal text-foreground mb-1">Put clarity into practice</h3>
          <p className="text-base">
            Bring what you've learned into your everyday life: decisions, relationships, work,
            boundaries, and the priorities you want to live by. Develop practices that can continue
            beyond our time together.
          </p>
        </li>
      </ol>

      <h2 className="font-display text-2xl md:text-3xl font-light text-brand pt-8">
        A private mentorship, shaped around you
      </h2>
      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 pt-2">
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Format</dt>
          <dd className="text-base text-foreground">One-to-one sessions with Ashima, held live.</dd>
        </div>
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Duration</dt>
          <dd className="text-base text-foreground">An 8- or 10-week engagement, depending on your needs and the scope of the work.</dd>
        </div>
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Between-session support</dt>
          <dd className="text-base text-foreground">Direct support between sessions, within the agreed boundaries of the mentorship.</dd>
        </div>
        <div>
          <dt className="font-body text-xs tracking-[0.18em] uppercase text-primary/80 mb-1">Approach</dt>
          <dd className="text-base text-foreground">A personalised combination of self-inquiry, mindset work, nervous-system practices, contemplative methods, and traditional Indian wisdom.</dd>
        </div>
      </dl>
      <p className="pt-2">
        We begin by understanding what you want to work through, what you've already tried, and what
        feels most important now. From there, we shape the work around your needs and capacity.
      </p>
      <p>
        This is a high-touch, private engagement, with a limited number of places available at a time.
      </p>
      <p>
        The first step is a conversation. We'll explore what you're navigating, whether this approach
        is a good fit, and what working together could look like. There is no obligation to continue.
      </p>
    </LandingPageLayout>
  );
};

export default Purushartha;

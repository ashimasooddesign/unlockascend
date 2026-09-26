import ascendLogo from "@/assets/ascend-logo.svg";

const INSTAGRAM_URL = "https://www.instagram.com/unlockascend";
const INSTAGRAM_EMBED = `${INSTAGRAM_URL}/embed`;

const ContactSection = () => {
  return (
    <section id="connect" aria-label="Contact Ashima" className="py-24 md:py-36 bg-card wash-sage">
      <div className="container max-w-2xl text-center">
        <img
          src={ascendLogo}
          alt=""
          aria-hidden="true"
          className="h-12 md:h-14 w-auto mx-auto mb-8 opacity-90"
        />
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-6">
          Begin a Conversation
        </h2>
        <p className="font-body text-base text-muted-foreground leading-relaxed mb-10">
          If something here resonates, I would welcome hearing from you.
          Whether you're seeking guidance, a study companion, or simply a thoughtful space -
          reach out.
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 italic">
          Whether you're drawn to a specific offering, have a question about fit, or simply
          want to say hello, you're welcome to write. I respond personally.
        </p>
        <a href="mailto:team@unlockascend.com" className="btn-primary">
          team@unlockascend.com
        </a>

        <div className="mt-16">
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-5">
            Follow along
          </p>
          <div className="mx-auto max-w-[420px] rounded-xl overflow-hidden border border-border/70 bg-background shadow-sm">
            <iframe
              src={INSTAGRAM_EMBED}
              title="Ascend on Instagram"
              loading="lazy"
              scrolling="no"
              className="block w-full"
              style={{ border: "none", minHeight: 560 }}
            />
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="link-action mt-5"
          >
            @unlockascend →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

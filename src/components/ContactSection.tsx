const ContactSection = () => {
  return (
    <section id="connect" className="py-24 md:py-36 bg-card wash-sage">
      <div className="container max-w-2xl text-center">
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
          want to say hello — you're welcome to write. I respond personally.
        </p>
        <
          href="mailto:team@unlockascend.com"
          className="inline-block font-body text-sm tracking-widest uppercase text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity"
        >
          team@unlockascend.com
        </a>
      </div>
    </section>
  );
};

export default ContactSection;

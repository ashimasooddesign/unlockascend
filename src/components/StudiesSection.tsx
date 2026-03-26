const StudiesSection = () => {
  return (
    <section id="studies" className="py-24 md:py-36 bg-card wash-warm">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-earth mb-14">
          Studies & Learning Circles
        </h2>
        <div className="space-y-8 font-body text-base md:text-lg leading-[1.85]">
          <p className="text-earth">
            Ascend hosts small, reflective study circles rooted in the classical yogic and
            Vedantic traditions.
          </p>
          <p className="text-earth-light italic font-display text-lg md:text-xl leading-relaxed">
            These sessions approach sacred texts slowly and thoughtfully - allowing participants
            to explore their philosophical depth and practical relevance to modern life.
          </p>
          <p className="text-earth">
            Over time, these gatherings have included guided studies of texts such as the{" "}
            <em className="font-display text-accent">Bhagavad Gita</em>,{" "}
            <em className="font-display text-accent">Yoga Sutra</em>,{" "}
            <em className="font-display text-accent">Devi Mahatmyam</em>,{" "}
            <em className="font-display text-accent">Garbhopanishad</em>, and{" "}
            <em className="font-display text-accent">Sankhya Karika</em>.
          </p>
          <p className="text-earth-light">
            Each study creates space for careful reading, discussion, and contemplation -
            helping participants engage with the teachings not just intellectually, but as
            living wisdom that can inform everyday choices and inner clarity.
          </p>
        </div>
        <div className="mt-14 w-12 h-px bg-accent opacity-40" />
      </div>
    </section>
  );
};

export default StudiesSection;

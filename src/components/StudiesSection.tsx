const StudiesSection = () => {
  return (
    <section id="studies" className="py-24 md:py-36 bg-card wash-warm">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-12">
          Studies & Learning Circles
        </h2>
        <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            <em>Ascend</em> hosts small, reflective study circles rooted in the classical yogic and 
            Vedantic traditions. These sessions approach sacred texts slowly and thoughtfully, 
            allowing participants to explore their philosophical depth and practical relevance 
            to modern life.
          </p>
          <p>
            Over time, these gatherings have included guided studies of texts such as the 
            <em>Bhagavad Gita</em>, <em>Yoga Sutra</em>, <em>Devi Mahatmyam</em>, <em>Garbhopanishad</em>, and <em>Sankhya Karika</em>. 
            Each study creates space for careful reading, discussion, and contemplation - 
            helping participants engage with the teachings not just intellectually, but as 
            living wisdom that can inform everyday choices and inner clarity.
          </p>
        </div>
        <div className="mt-12 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default StudiesSection;

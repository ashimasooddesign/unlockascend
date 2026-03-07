const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-12">
          The Path Here
        </h2>
        <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            My training began in architecture and human-centered design — disciplines rooted in 
            structure, proportion, and deep attention to how people inhabit space. Over time, that 
            same inquiry turned inward.
          </p>
          <p>
            The Bhagavad Gita opened a door I hadn't known was there — into questions of dharma, 
            discernment, and what it means to act with clarity. The Devi Mahatmyam deepened this 
            further, drawing me into devotional and philosophical traditions that continue to shape 
            my understanding.
          </p>
          <p>
            Today I work at the intersection of traditional yogic practice, Ayurvedic wisdom, and 
            contemplative study. I hold space for people — especially women navigating transitions, 
            identity, motherhood, and growth — to slow down, inquire honestly, and reconnect with 
            what already knows.
          </p>
        </div>
        <div className="mt-12 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default AboutSection;

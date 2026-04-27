import ashimaPhoto from "@/assets/ashima-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-12">
          About Ashima
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          <div className="w-48 h-60 md:w-56 md:h-72 flex-shrink-0 rounded-md overflow-hidden">
            <img
              src={ashimaPhoto}
              alt="Ashima Sood"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Ashima Sood is a yogi, Ayurvedic practitioner, and facilitator of scripture-based 
              study with a background in design and architecture. Trained as a UX designer with 
              a Master's degree in Interaction Design, she spent over a decade working in 
              human-centered systems and research before being drawn more deeply into the 
              contemplative traditions of <em>yoga</em> and <em>Vedanta</em>.
            </p>
            <p>
              This wasn't a pivot — it was a return. The same questions that had animated her 
              design work — how do we understand experience, how do we make systems that serve 
              the person within — were the ones the classical texts had always been asking.
            </p>
            <p>
              Her work brings together classical yogic practice, Ayurvedic lifestyle guidance, 
              and reflective study of texts such as the <em>Bhagavad Gita</em>, <em>Yoga Sutra</em>, and <em>Devi 
              Mahatmyam</em>. She holds a 900-hour Teacher Training Certification from The Yoga 
              Institute, Mumbai — one of the oldest yoga institutions in the world — where her 
              grounding in the classical texts began. Rather than focusing on trends or quick 
              fixes, Ashima's approach emphasizes steadiness, discernment, and the gradual 
              cultivation of inner clarity.
            </p>
            <p>
              Through <em>Ascend</em>, she creates spaces for people to slow down, reconnect with their 
              bodies and rhythms, and explore timeless teachings in ways that remain relevant to 
              modern life.
            </p>
          </div>
        </div>
        <div className="mt-12 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default AboutSection;

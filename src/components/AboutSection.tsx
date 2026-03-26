import ashimaPhoto from "@/assets/ashima-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-earth mb-14">
          About Ashima
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          <div className="w-48 h-60 md:w-56 md:h-72 flex-shrink-0 rounded-sm overflow-hidden">
            <img
              src={ashimaPhoto}
              alt="Ashima Sood"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-8 font-body text-base md:text-lg leading-[1.85]">
            <p className="text-earth">
              Ashima Sood is a yogi, Ayurvedic practitioner, and facilitator of scripture-based
              study with a background in design and architecture.
            </p>
            <p className="text-earth-light">
              Trained as a UX designer with a Master's degree in Interaction Design, she spent
              over a decade working in human-centered systems and research before being drawn
              more deeply into the contemplative traditions of yoga and{" "}
              <em className="font-display text-accent">Vedanta</em>.
            </p>
            <p className="text-earth">
              Her work brings together classical yogic practice, Ayurvedic lifestyle guidance,
              and reflective study of texts such as the{" "}
              <em className="font-display text-accent">Bhagavad Gita</em>,{" "}
              <em className="font-display text-accent">Yoga Sutra</em>, and{" "}
              <em className="font-display text-accent">Devi Mahatmyam</em>.
            </p>
            <p className="text-earth-light italic font-display text-lg md:text-xl leading-relaxed">
              Rather than focusing on trends or quick fixes, her approach emphasizes steadiness,
              discernment, and the gradual cultivation of inner clarity.
            </p>
            <p className="text-earth">
              Through Ascend, she creates spaces for people to slow down, reconnect with their
              bodies and rhythms, and explore timeless teachings in ways that remain relevant to
              modern life.
            </p>
          </div>
        </div>
        <div className="mt-14 w-12 h-px bg-accent opacity-40" />
      </div>
    </section>
  );
};

export default AboutSection;

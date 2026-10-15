const AboutSection = () => {
  return (
    <section id="about" aria-label="About Ashima Sood" className="py-24 md:py-36 wash-sage">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-12">
          Meet Ashima Sood
        </h2>
        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
          <div className="w-48 h-60 md:w-56 md:h-72 flex-shrink-0 rounded-md overflow-hidden bg-muted">
            <img
              src="/ashima-photo.jpg"
              alt="Ashima Sood"
              loading="lazy"
              decoding="async"
              width={765}
              height={1280}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              Ashima Sood is the founder of <em>Ascend</em>, a space for exploring classical Indian
              wisdom and its relevance to modern life.
            </p>
            <p>
              Before founding Ascend, Ashima spent over a decade working in human-centred design and
              research, following an earlier background in architecture. Her work as a UX strategist
              involved understanding people's experiences, uncovering the patterns shaping their
              behaviour, and designing systems around human needs.
            </p>
            <p>
              That interest in how we think, act, and experience the world eventually led her deeper
              into <em>yoga</em>, <em>Ayurveda</em>, <em>Vedanta</em>, and contemplative practice.
            </p>
            <p>
              Ashima holds a 900-hour yoga teacher training certification from The Yoga Institute,
              Mumbai, and has pursued sustained study of classical texts, including the{" "}
              <em>Yoga Sutras</em>, <em>Bhagavad Gita</em>, and <em>Devi Mahatmyam</em>.
            </p>
            <p>
              Today, she brings together traditional practice, careful inquiry, and contemporary
              approaches to self-understanding through private mentorship, scripture study, and
              guided practice.
            </p>
            <p>
              Her approach is grounded in the belief that understanding ourselves is not only an
              intellectual exercise. It is something we explore, practise, and bring into the choices
              we make every day.
            </p>
          </div>
        </div>
        <div className="mt-12 w-12 h-px bg-primary opacity-40" />
      </div>
    </section>
  );
};

export default AboutSection;

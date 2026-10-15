import studiesImage from "@/assets/studies-image.jpg";

const StudiesSection = () => {
  return (
    <section id="studies" aria-label="Studies and learning circles" className="py-24 md:py-36 bg-card wash-warm">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-brand mb-12">
              Studies & Learning Circles
            </h2>
            <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                <em>Ascend</em> offers guided study of classical Indian philosophical and spiritual
                texts. Rather than rushing through a text to complete a syllabus, these learning
                circles create space for careful reading, questions, discussion, and contemplation.
              </p>
              <p>Our studies have included:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><em>Yoga Sutras of Patanjali</em></li>
                <li><em>Bhagavad Gita</em></li>
                <li><em>Devi Mahatmyam</em> (Durga Saptashati)</li>
                <li><em>Garbhopanishad</em></li>
                <li><em>Sankhya Karika</em> and Ayurveda basics</li>
                <li><em>Vigyan Bhairav Tantra</em></li>
                <li><em>Aparokshanubhuti</em></li>
                <li><em>Drg-Drsya-Viveka</em></li>
              </ul>
              <p>
                Each study creates space for careful reading, discussion, and contemplation, helping
                participants engage with the teachings not only intellectually, but as living wisdom
                that can inform everyday choices and inner clarity.
              </p>
              <p>
                Availability varies by program. Explore current offerings or enquire about one-to-one
                study and future learning circles.
              </p>
              <p>
                Our annual <em>Ritucharya</em> program is a sustained exploration of Ayurveda's
                seasonal wisdom, woven into practice and daily life across the changing seasons.
              </p>
              <p>
                <a
                  href="https://docs.google.com/document/d/1S5pF-iiPAcWJOO43VfT24fkY2kixDyu_rs95WzhMzFo/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-action"
                >
                  Details of ongoing program →
                </a>
              </p>
            </div>
            <div className="mt-12 w-12 h-px bg-primary opacity-40" />
          </div>
          <div className="order-first md:order-none">
            <img
              src={studiesImage}
              alt="Study and contemplation session"
              className="w-full aspect-[3/4] md:aspect-[3/4] object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudiesSection;

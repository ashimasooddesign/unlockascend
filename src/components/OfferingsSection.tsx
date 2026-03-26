import offeringImage from "@/assets/offering-stilllife.jpg";

const offerings = [
  {
    title: "Yoga & Meditation",
    description:
      "<em>Asana</em>, <em>pranayama</em>, and seated meditation rooted in classical tradition - practiced with patience, not performance.",
  },
  {
    title: "Ayurvedic Guidance",
    description:
      "Seasonal and daily rhythms (<em>ritucharya</em>, <em>dinacharya</em>) woven into life with care - not prescription, but attunement.",
  },
  {
    title: "Scripture Study",
    description:
      "Small-group inquiry into the <em>Bhagavad Gita</em>, <em>Yoga Sutra</em>, <em>Devi Mahatmyam</em>, and <em>Garbhopanishad</em> - reading slowly, together.",
  },
  {
    title: "One-on-One Sessions",
    description:
      "Contemplative conversations for those in transition - integrating practice, philosophy, and personal discernment.",
  },
];

const OfferingsSection = () => {
  return (
    <section id="offerings" className="py-24 md:py-36 bg-card">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-12">
              Offerings
            </h2>
            <div className="space-y-10">
              {offerings.map((offering) => (
                <div key={offering.title}>
                  <h3 className="font-display text-xl md:text-2xl font-normal text-foreground mb-2">
                    {offering.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src={offeringImage}
              alt="Brass diya lamp on weathered wood"
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;

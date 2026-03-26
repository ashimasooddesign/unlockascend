import offeringImage from "@/assets/offering-stilllife.jpg";

const offerings = [
  {
    title: "Yoga & Meditation",
    description:
      "Asana, pranayama, and seated meditation rooted in classical tradition.",
    emphasis: "Practiced with patience, not performance.",
  },
  {
    title: "Ayurvedic Guidance",
    description:
      "Seasonal and daily rhythms (ritucharya, dinacharya) woven into life with care.",
    emphasis: "Not prescription, but attunement.",
  },
  {
    title: "Scripture Study",
    description:
      "Small-group inquiry into the Bhagavad Gita, Yoga Sutra, Devi Mahatmyam, and Garbhopanishad.",
    emphasis: "Reading slowly, together.",
  },
  {
    title: "One-on-One Sessions",
    description:
      "Contemplative conversations for those in transition.",
    emphasis: "Integrating practice, philosophy, and personal discernment.",
  },
];

const OfferingsSection = () => {
  return (
    <section id="offerings" className="py-24 md:py-36 bg-card">
      <div className="container max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-light text-earth mb-14">
              Offerings
            </h2>
            <div className="space-y-10">
              {offerings.map((offering) => (
                <div key={offering.title}>
                  <h3 className="font-display text-xl md:text-2xl font-normal text-foreground mb-3">
                    {offering.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-earth leading-[1.8] mb-1">
                    {offering.description}
                  </p>
                  <p className="font-display text-sm md:text-base text-accent italic">
                    {offering.emphasis}
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

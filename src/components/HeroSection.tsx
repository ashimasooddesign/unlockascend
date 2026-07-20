import heroImage from "@/assets/hero-abstract.jpg";
import ascendWordmark from "@/assets/ascend-wordmark.png";

const HeroSection = () => {
  return (
    <section aria-label="Introduction" className="relative min-h-screen flex flex-col justify-end pb-20 md:pb-32">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Contemplative watercolor in sage and terracotta tones"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="relative z-10 container max-w-4xl">
        <h1 className="mb-6">
          <span className="sr-only">
            Ascend — Yoga, Ayurveda and scripture study with Ashima Sood
          </span>
          <img
            src={ascendWordmark}
            alt="Ascend"
            data-hero-wordmark="true"
            className="h-12 md:h-[4.2rem] lg:h-[5.4rem] w-auto"
          />
        </h1>
        <p className="font-display text-xl md:text-2xl font-light text-muted-foreground max-w-xl leading-relaxed italic">
          Yoga · Ayurveda · Contemplative Study · with Ashima
        </p>
        <div className="mt-8 w-12 h-px bg-primary opacity-60" />
        <p className="mt-6 font-body text-sm md:text-base text-muted-foreground max-w-md leading-relaxed">
          Grounded guidance for those seeking clarity — not coping — through traditional practice,
          self-inquiry, and a return to what is essential.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-3">
          <a href="#sessions" className="btn-secondary">
            Upcoming sessions
          </a>
          <a href="#connect" className="btn-secondary">
            Begin a conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

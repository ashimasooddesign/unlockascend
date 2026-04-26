import hyphenKonnectLogo from "@/assets/the-hyphen-konnect.png";
import loveProtectSustainLogo from "@/assets/love-protect-sustain.png";
import soulSenseiLogo from "@/assets/soul-sensei.svg";

const CredibilityStrip = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border/50">
      <div className="container max-w-5xl flex flex-col items-center gap-10 md:gap-12">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground text-center">
          Trusted by communities and platforms including
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 sm:gap-x-16 md:gap-x-20 gap-y-10 md:gap-y-12 w-full">
          <a
            href="https://www.thehyphenkonnect.com/professionals/ashima-sood"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 sm:h-10 items-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={hyphenKonnectLogo}
              alt="The Hyphen Konnect"
              className="max-h-full w-auto object-contain"
            />
          </a>
          <a
            href="https://www.loveprotectsustain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 sm:h-10 items-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={loveProtectSustainLogo}
              alt="Love Protect Sustain"
              className="max-h-[40%] w-auto object-contain"
            />
          </a>
          <a
            href="https://www.soulsensei.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 sm:h-10 items-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={soulSenseiLogo}
              alt="Soul Sensei"
              className="max-h-[55%] w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;

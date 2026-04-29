import hyphenKonnectLogo from "@/assets/the-hyphen-konnect.png";
import loveProtectSustainLogo from "@/assets/love-protect-sustain.png";
import soulSenseiLogo from "@/assets/soul-sensei.svg";

const CredibilityStrip = () => {
  return (
    <section aria-label="Trusted by communities and platforms" className="py-16 border-t border-border/50">
      <div className="container max-w-5xl flex flex-col items-center gap-6">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Trusted by communities and platforms including
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-12 gap-y-6">
          <a
            href="https://www.thehyphenkonnect.com/professionals/ashima-sood"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="flex h-8 sm:h-10 items-center opacity-70 group-hover:opacity-100 transition-opacity">
              <img
                src={hyphenKonnectLogo}
                alt="The Hyphen Konnect"
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="font-body text-xs text-muted-foreground/80 text-center max-w-[12rem]">
              Narcissistic abuse survivor community
            </p>
          </a>
          <a
            href="https://www.loveprotectsustain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="flex h-8 sm:h-10 items-center opacity-70 group-hover:opacity-100 transition-opacity">
              <img
                src={loveProtectSustainLogo}
                alt="Love Protect Sustain"
                className="max-h-[40%] w-auto object-contain"
              />
            </div>
            <p className="font-body text-xs text-muted-foreground/80 text-center max-w-[12rem]">
              Sustainable clothing brand
            </p>
          </a>
          <a
            href="https://www.soulsensei.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="flex h-8 sm:h-10 items-center opacity-70 group-hover:opacity-100 transition-opacity">
              <img
                src={soulSenseiLogo}
                alt="Soul Sensei"
                className="max-h-[55%] w-auto object-contain"
              />
            </div>
            <p className="font-body text-xs text-muted-foreground/80 text-center max-w-[12rem]">
              Spiritual learning platform
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;

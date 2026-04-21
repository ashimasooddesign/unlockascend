import hyphenKonnectLogo from "@/assets/the-hyphen-konnect.png";
import loveProtectSustainLogo from "@/assets/love-protect-sustain.png";
import soulSenseiLogo from "@/assets/soul-sensei.svg";

const CredibilityStrip = () => {
  return (
    <section className="py-16 border-t border-border/50">
      <div className="container max-w-5xl flex flex-col items-center gap-6">
        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Trusted by communities and platforms including
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          <a
            href="https://www.thehyphenkonnect.com/professionals/ashima-sood"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={hyphenKonnectLogo}
              alt="The Hyphen Konnect"
              className="h-10 w-auto"
            />
          </a>
          <a
            href="https://www.loveprotectsustain.com"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={loveProtectSustainLogo}
              alt="Love Protect Sustain"
              className="h-4 w-auto"
            />
          </a>
          <a
            href="https://soulsensei.co"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img
              src={soulSenseiLogo}
              alt="Soul Sensei"
              className="h-6 w-auto"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CredibilityStrip;

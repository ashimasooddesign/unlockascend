import hyphenKonnectLogo from "@/assets/the-hyphen-konnect.png";
import loveProtectSustainLogo from "@/assets/love-protect-sustain.png";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border">
      {/* Credibility Strip */}
      <div className="py-8 border-b border-border/50">
        <div className="container max-w-5xl flex flex-col items-center gap-3">
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
            Trusted by communities and platforms including
          </p>
          <div className="flex items-center gap-8">
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
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-10 container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ascend
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.trustpilot.com/review/unlockascend.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Trustpilot
          </a>
          <a
            href="https://ascendwithashima.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Substack
          </a>
          <a
            href="https://www.instagram.com/unlockascend/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Instagram
          </a>
        </div>
        <p className="font-body text-xs text-muted-foreground">
          Rooted in tradition. Shaped by inquiry.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

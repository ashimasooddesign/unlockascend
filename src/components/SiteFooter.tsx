const SiteFooter = () => {
  return (
    <footer className="border-t border-border">
      <div className="py-10 container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ascend
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.trustpilot.com/review/unlockascend.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
          >
            Trustpilot
          </a>
          <a
            href="https://ascendwithashima.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
          >
            Substack
          </a>
          <a
            href="https://www.instagram.com/unlockascend/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground hover:underline underline-offset-4 transition-all"
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

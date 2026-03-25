const SiteFooter = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ascend
        </span>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/unlockascend/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.trustpilot.com/review/unlockascend.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            Trustpilot
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

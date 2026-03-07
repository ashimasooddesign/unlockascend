const SiteHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container max-w-5xl flex items-center justify-between py-5">
        <span className="font-display text-lg font-normal text-foreground tracking-wide">
          Ascend
        </span>
        <div className="flex items-center gap-8">
          {["About", "Offerings", "Connect"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;

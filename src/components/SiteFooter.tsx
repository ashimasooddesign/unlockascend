const SiteFooter = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ashima
        </span>
        <p className="font-body text-xs text-muted-foreground">
          Rooted in tradition. Shaped by inquiry.
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

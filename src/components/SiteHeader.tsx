import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ascendLogo from "@/assets/ascend-logo.svg";
import ascendWordmark from "@/assets/ascend-wordmark.png";

const navItems = ["About", "Studies", "Offerings", "Connect"];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [showWordmark, setShowWordmark] = useState(false);

  useEffect(() => {
    const heroWordmark = document.querySelector<HTMLImageElement>(
      'section h1 img[alt="Ascend"]'
    );
    if (!heroWordmark) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero wordmark is no longer visible, show wordmark in header
        setShowWordmark(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    observer.observe(heroWordmark);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container max-w-5xl flex items-center justify-between py-5">
        <a href="#" className="relative flex items-center h-8">
          <img
            src={ascendLogo}
            alt="Ascend"
            className={`h-8 transition-opacity duration-500 ${
              showWordmark ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={ascendWordmark}
            alt="Ascend"
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-5 w-auto transition-opacity duration-500 ${
              showWordmark ? "opacity-100" : "opacity-0"
            }`}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Open menu" className="text-foreground">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col items-start gap-8 pt-16">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default SiteHeader;

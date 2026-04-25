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

    // Header is ~72px tall. Use scroll position with hysteresis so the
    // swap doesn't flicker if the user hovers right at the threshold.
    const HEADER_OFFSET = 72;
    const HYSTERESIS = 16;

    let ticking = false;
    let current = false;

    const evaluate = () => {
      ticking = false;
      const rect = heroWordmark.getBoundingClientRect();
      // Distance from the bottom of the hero wordmark to the bottom of the header.
      const distance = rect.bottom - HEADER_OFFSET;

      if (!current && distance < -HYSTERESIS) {
        current = true;
        setShowWordmark(true);
      } else if (current && distance > HYSTERESIS) {
        current = false;
        setShowWordmark(false);
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container max-w-5xl flex items-center justify-between py-5">
        <a
          href="#"
          aria-label="Ascend home"
          className="relative flex items-center h-8 w-32 md:w-36 shrink-0"
        >
          <img
            src={ascendLogo}
            alt=""
            aria-hidden="true"
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-auto transition-opacity duration-500 ease-out ${
              showWordmark ? "opacity-0" : "opacity-100"
            }`}
          />
          <img
            src={ascendWordmark}
            alt=""
            aria-hidden="true"
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-7 md:h-8 w-auto max-w-full object-contain object-left transition-opacity duration-500 ease-out ${
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

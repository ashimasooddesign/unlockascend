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

    let observer: IntersectionObserver | null = null;

    const setup = () => {
      observer?.disconnect();

      // Header is ~72px tall; trigger swap as the hero wordmark passes
      // just under the header. Use a small bottom margin so we cross-fade
      // a touch before it fully exits, and a thin slab threshold for stability.
      const headerOffset = 72;
      const rect = heroWordmark.getBoundingClientRect();
      const wordmarkHeight = Math.max(rect.height, 1);

      observer = new IntersectionObserver(
        ([entry]) => {
          setShowWordmark(!entry.isIntersecting);
        },
        {
          // Shrink the viewport from the top by header height, and from the
          // bottom enough that the observer flips right as the hero wordmark
          // tucks behind the header — not when the section ends.
          rootMargin: `-${headerOffset}px 0px -${Math.max(
            0,
            window.innerHeight - headerOffset - wordmarkHeight - 24
          )}px 0px`,
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(heroWordmark);
    };

    setup();

    const onResize = () => setup();
    window.addEventListener("resize", onResize);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
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

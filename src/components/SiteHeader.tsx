import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ascendLogo from "@/assets/ascend-logo.svg";
import ascendWordmark from "@/assets/ascend-wordmark.png";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Studies", href: "#studies" },
  { label: "Offerings", href: "#offerings" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#connect" },
];



const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const [showWordmark, setShowWordmark] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [bannerDismissed, setBannerDismissed] = useState(() => {
    try {
      return localStorage.getItem("yoga-day-banner-dismissed") === "true";
    } catch {
      return false;
    }
  });
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const heroWordmark = document.querySelector<HTMLImageElement>(
      'img[data-hero-wordmark="true"]'
    );
    const headerEl = document.querySelector<HTMLElement>("header");
    if (!heroWordmark || !headerEl) return;

    // Trigger the swap when the hero wordmark's center crosses the bottom
    // of the actual header — measured live so it matches on every viewport.
    // Hysteresis is scaled to the wordmark height so the buffer feels the
    // same on mobile and desktop without flicker.
    let ticking = false;
    let current = false;

    const evaluate = () => {
      ticking = false;
      const heroRect = heroWordmark.getBoundingClientRect();
      const headerBottom = headerEl.getBoundingClientRect().bottom;

      const heroCenter = heroRect.top + heroRect.height / 2;
      const distance = heroCenter - headerBottom;
      const hysteresis = Math.max(8, heroRect.height * 0.15);

      if (!current && distance < -hysteresis) {
        current = true;
        setShowWordmark(true);
      } else if (current && distance > hysteresis) {
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
    window.addEventListener("orientationchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("orientationchange", onScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="bg-primary/[0.08] text-center py-2 px-4">
        <span className="font-body text-xs tracking-widest uppercase text-primary/80">
          Yoga Day session —{" "}
        </span>
        <a
          href="https://topmate.io/ashima_sood/2138265"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs tracking-widest uppercase text-primary underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Register here →
        </a>
      </div>
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
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-8 w-auto ${
              reducedMotion ? "" : "transition-opacity duration-500 ease-out"
            } ${showWordmark ? "opacity-0" : "opacity-100"}`}
          />
          <img
            src={ascendWordmark}
            alt=""
            aria-hidden="true"
            className={`absolute left-0 top-1/2 -translate-y-1/2 h-7 md:h-8 w-auto max-w-full object-contain object-left ${
              reducedMotion ? "" : "transition-opacity duration-500 ease-out"
            } ${showWordmark ? "opacity-100" : "opacity-0"}`}
          />
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs tracking-widest uppercase text-brand hover:opacity-70 transition-opacity"
            >
              {item.label}
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
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body text-sm tracking-widest uppercase text-brand hover:opacity-70 transition-opacity"
              >
                {item.label}
              </a>
            ))}
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default SiteHeader;

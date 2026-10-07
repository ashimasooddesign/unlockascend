import { useState } from "react";
import { X } from "lucide-react";

// Banner is shown only until Navratri begins (Oct 11, 2026 IST).
const NAVRATRI_START = new Date("2026-10-11T00:00:00+05:30");

const NavratriBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed || new Date() >= NAVRATRI_START) return null;

  return (
    <div
      role="region"
      aria-label="Navratri Sadhana announcement"
      className="bg-brand text-brand-foreground"
    >
      <div className="container max-w-5xl flex items-center justify-center gap-3 py-2.5 px-4 text-center">
        <p className="font-body text-xs md:text-sm tracking-wide">
          Sharad Navratri Sadhana begins October 11 - nine days of practice,
          study, and devotion.{" "}
          <a
            href="/navratri-sadhana"
            className="underline underline-offset-4 decoration-current/60 hover:decoration-current font-medium"
          >
            Join the sadhana →
          </a>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default NavratriBanner;

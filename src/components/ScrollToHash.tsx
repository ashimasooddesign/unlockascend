import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to element matching location.hash after client-side navigation.
 * Header is fixed (~72px), so we offset the scroll target.
 */
const HEADER_OFFSET = 80;

const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // On plain route change, jump to top
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = hash.slice(1);
    // Wait a tick for the target page to mount
    const attempt = (tries = 0) => {
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else if (tries < 20) {
        setTimeout(() => attempt(tries + 1), 50);
      }
    };
    attempt();
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching the URL hash after navigation.
 * Place this inside <BrowserRouter>.
 */
const ScrollToHash = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay to let the page render before scrolling
      const timeout = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      // Scroll to top when navigating to a new page without hash
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;

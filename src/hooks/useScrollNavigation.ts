import { useNavigate, useLocation } from "react-router-dom";

/**
 * Returns a function that navigates to a section.
 * If already on the homepage, scrolls smoothly.
 * If on a subpage, navigates to /#sectionId.
 */
export const useScrollNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(`/#${sectionId}`);
  };

  return scrollToSection;
};

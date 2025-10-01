// src/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Jump to top on every route or query change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    // If you want a smooth animation, use: behavior: "smooth"
  }, [pathname, search]);

  return null;
}

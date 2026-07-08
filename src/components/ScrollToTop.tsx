"use client";

import { useEffect } from "react";

export function ScrollToTop() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const scrollToTop = () => {
      if (!window.location.hash) {
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();

    window.addEventListener("pageshow", scrollToTop);
    return () => window.removeEventListener("pageshow", scrollToTop);
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";

function resetScroll() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  window.scrollTo(0, 0);
}

export function ScrollToTop() {
  useEffect(() => {
    resetScroll();

    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        resetScroll();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

// Floating "scroll to top" button — appears once the user has scrolled
// past a threshold, smooth-scrolls back to the top of the page on click.
export function BackToTop({ color = "#0d9463" }: { color?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-5 right-5 z-50 w-11 h-11 rounded-full flex items-center justify-center border shadow-lg transition-all duration-300"
      style={{
        background: color,
        borderColor: color,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp size={18} color="#ffffff" />
    </button>
  );
}

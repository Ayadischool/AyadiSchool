"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);

      // Show button when user scrolls down 100px
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 flex items-center justify-center w-12 h-12 text-black  shadow-lg rounded-full border-gray-500 hover:border-green-500 transition-all duration-300"
        >
          <FaArrowUp size={20} />
          {/* Green border progress indicator */}
          <svg
            className="absolute top-0 left-0 w-full h-full"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22c55e" /* Green color */
              strokeWidth="6"
              strokeDasharray="251.2"
              strokeDashoffset={251.2 - (251.2 * scrollProgress) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

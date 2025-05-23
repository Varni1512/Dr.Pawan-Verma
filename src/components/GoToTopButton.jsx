import React, { useState, useEffect } from "react";

const GoToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: 1000,
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div
        style={{
          marginBottom: 8,
          color: "#F1BF1C",
          fontWeight: "600",
          fontSize: 14,
          userSelect: "none",
          transform: visible ? "translateY(0)" : "translateY(10px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          animation: visible
            ? "moveUpFade 0.5s ease forwards"
            : "none",
        }}
      >
        Move to top
      </div>
      <button
        onClick={scrollToTop}
        aria-label="Go to top"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "#F1BF1C",
          border: "none",
          color: "white",
          fontSize: 40,   // Increased from 30 to 40
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#d0a810")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#F1BF1C")}
      >
        ↑
      </button>



      <style>{`
        @keyframes moveUpFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default GoToTopButton;

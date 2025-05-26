import React, { useState, useEffect } from "react";

const quotes = [
  "Fall asleep with a dream and wake up with a purpose.",
  "Follow the law like Ram; break the rules like Krishna.",
  "The first rule of leadership is to break all the rules.",
  "Don’t think outside the box. Do away with the box itself.",
  "Innovation distinguishes between a leader and a follower.",
  "Leadership is the capacity to translate vision into reality.",
  "If you spend your life trying to be good at everything, you will never be great at anything.",
  "The secret of good leadership is to be great at something rather than being good at everything.",
  "If you continue leading today with the methods of yesterday, you are bound to go out of leadership tomorrow.",
  "Change and disruptions not only destroy the old order, but they also hide within themselves the potential for creating new opportunities.",
  "If you want to lead in the twenty-first century, all you need is something to live for and something to die for; someone to love and something to hope for.",
  "Success does not necessarily come to people who are the brightest or the smartest; it comes to those who work hard and pursue a larger purpose with consistency and a determination to succeed.",
];


export default function Hero() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto py-8 md:py-16 px-4 md:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8">
        {/* Left side */}
        <div className="flex flex-col items-center md:items-start relative w-full md:w-auto">
          <div className="relative pt-5 pl-0 md:pl-3 w-full md:w-auto flex justify-center md:justify-start">
            {/* Border container - hidden on small screens */}
            <div className="absolute top-0 left-0 hidden md:block w-[731px] h-[482px] border-2 border-[#F4E9CD] z-0"></div>

            {/* Image */}
            <img
              src="/pawan.jpg"
              alt="Dr. Pawan Verma"
              className="relative z-10 w-full max-w-[400px] md:max-w-none md:w-[741px] h-auto md:h-[490px] rounded-[13px] object-cover md:-translate-x-[2px] md:-translate-y-[2px]"
            />
          </div>

          {/* Description */}
          <div className="relative w-full max-w-lg mt-6 px-2 md:px-0 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-black font-['AAfacad'] mb-2">
              Trusted Author, Renowned Speaker, and Strategic Management Consultant
            </h3>

            <p className="text-[#7B7B7B] text-sm font-['AAfacad'] md:text-base">
              Helping organizations and leaders achieve breakthrough results, through visionary leadership, impactful speaking, and strategic management consulting.
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="w-full md:w-2/3 lg:w-1/2 px-4 md:px-12 flex flex-col items-center md:items-start text-center md:text-left pt-24">
          <h2 className="text-2xl md:text-4xl font-['Abril_Fatface'] font-extrabold text-[#D4AF37] mb-4">
            DR. PAWAN VERMA
          </h2>

          <div
            className="relative mb-6 w-full max-w-2xl pt-12 px-2 md:px-4 h-[180px] md:h-[200px] mx-auto"
          >

            <div
              className="absolute top-12 left-1 text-5xl md:text-6xl font-serif text-[#D4AF37] select-none -translate-x-3 -translate-y-3 md:left-0"
              style={{ left: '0.25rem' }}
            >
              “
            </div>

            <p className="text-md md:text-2xl italic text-[#7B7B7B] font-['Abhaya_Libre']">
              {quotes[currentQuoteIndex]}
              <span className="text-5xl md:text-6xl font-serif text-[#D4AF37] align-top leading-none ml-2">”</span>
            </p>

          </div>

          {/* Dots */}
          <div className="flex gap-3 justify-center mb-8 w-full">
            {quotes.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuoteIndex(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${currentQuoteIndex === i ? "bg-yellow-500" : "bg-gray-300"
                  }`}
                aria-label={`Show quote ${i + 1}`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 pt-28 justify-center items-center w-full">
            <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-medium py-2 px-6 rounded-md transition duration-300 text-center max-w-[250px] w-full md:w-auto">
              <a href="/about">Learn More</a>
            </button>
            <button className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-medium py-2 px-6 rounded-md transition duration-300 text-center max-w-[250px] w-full md:w-auto">
              <a href="/contact">Contact Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

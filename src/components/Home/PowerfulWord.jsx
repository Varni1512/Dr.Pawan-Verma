import { useState, useEffect } from "react";

const PowerfulWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/gallery/Receiving the Rotary Star Platinum Trophy.jpg",
      quote:
        "The people who change the world are not the brightest of the lot; they are not the only ones with great ideas. What distinguishes them is their ability to learn from their failures and move forward with passion and perseverance.",
    },
    {
      image: "/gallery/Receiving the Rotary Star Platinum Trophy.jpg",
      quote:
        "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
    },
    {
      image: "/gallery/Receiving the Rotary Star Platinum Trophy.jpg",
      quote:
        "Perseverance is the hard work you do after you get tired of doing the hard work you already did.",
    },
  ];

  // Auto-change quotes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f5e9d1] min-h-[700px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Some Powerful Words.
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
        </div>

        <div className="p-4 flex items-stretch gap-4 min-h-[400px] flex-wrap sm:flex-nowrap">
          {/* Image section - static image */}
          <div className="w-full sm:w-1/3">
            <img
              src={slides[0].image}
              alt="Powerful person"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          {/* Text section with pagination dots */}
          <div className="w-full sm:w-2/3 bg-white rounded-lg p-6 shadow-inner flex flex-col items-center justify-center">
            <div>
              <p className="text-gray-800 text-lg font-medium leading-relaxed text-left mb-2">
                {slides[currentIndex].quote}
              </p>
              <div className="h-0.5 bg-[#B8860B] w-full mb-4" />
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-[#B8860B] scale-110"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerfulWords;

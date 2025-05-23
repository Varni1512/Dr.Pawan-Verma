import { useState, useRef, useEffect } from "react";

const AvailableOn = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoScrollIntervalRef = useRef(null);

  const amazonLogo = "/amazon02.png";
  const flipkartLogo = "/flipcart03.png";
  const kindleLogo = "/amazonkindle.png";
  const goodreadsLogo = "/Goodreads.png";

  const logos = [
    { src: amazonLogo, alt: "Amazon" },
    { src: flipkartLogo, alt: "Flipkart" },
    { src: kindleLogo, alt: "Amazon Kindle" },
    { src: goodreadsLogo, alt: "Goodreads" },
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return;

      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = 160;
      const visibleCount = Math.floor(containerWidth / cardWidth);

      setTotalSlides(Math.max(0, logos.length - Math.max(1, visibleCount)));
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, [logos.length]);

  useEffect(() => {
    if (totalSlides > 0) {
      autoScrollIntervalRef.current = setInterval(() => {
        const nextSlide = (activeSlide + 1) % (totalSlides + 1);
        scrollToSlide(nextSlide);
      }, 3000);
    }

    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, [activeSlide, totalSlides]);

  const scrollToSlide = (index) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.querySelector("div").offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth =
        scrollContainerRef.current.querySelector("div").offsetWidth;
      const newActiveSlide = Math.round(scrollLeft / cardWidth);

      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
        if (autoScrollIntervalRef.current) {
          clearInterval(autoScrollIntervalRef.current);
          autoScrollIntervalRef.current = setInterval(() => {
            const nextSlide = (activeSlide + 1) % (totalSlides + 1);
            scrollToSlide(nextSlide);
          }, 3000);
        }
      }
    }
  };

  return (
    <section className="relative w-full py-10 flex flex-col items-center justify-center bg-white">
      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-gray-800 relative mb-14 inline-block 
  after:absolute after:left-1/2 after:bottom-[-6px] after:translate-x-[-50%] 
  after:w-[140%] after:h-1 after:bg-yellow-500 after:content-['']"
      >
        Available on
      </h2>

      {/* Mobile view - Horizontal scroll *
       <div className="md:hidden w-full px-4 mt-6">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide pb-4"
          onScroll={handleScroll}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="min-w-[160px] w-[160px] h-[160px] bg-gray-100 border border-gray-300 rounded-lg shadow-md flex-shrink-0 flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain max-w-full max-h-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg";
                }}
              />
            </div>
          ))}
        </div>

        {/* Pagination dots for mobile *
        {totalSlides > 0 && (
          <div className="flex justify-center mt-4">
            {[...Array(totalSlides + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`mx-1 rounded-full w-3 h-3 ${
                  index === activeSlide ? "bg-yellow-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>  */}

      {/* <div className="grid grid-cols-3 gap-x-10 gap-y-10 w-full max-w-5xl mx-auto px-4">
        {logos.map((logo, index) => {
          let extraClasses = "";

          // Position Goodreads (index 3) below Flipkart (index 1)
          if (index === 3) {
            extraClasses = "col-start-2 row-start-2"; // Centered below Flipkart
          }

          return (
            <div
              key={index}
              className={`w-full sm:w-72 h-34 sm:h-40 bg-white border-4 border-gray-700 rounded-lg shadow-md flex items-center justify-center p-4 sm:p-6 ${extraClasses}`}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="object-contain w-56 sm:w-56 h-96 sm:h-80"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg";
                }}
              />
            </div>
          );
        })}
      </div> */}


<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-8 w-full max-w-5xl mx-auto px-4">
  {logos.map((logo, index) => {
    let extraClasses = "";

    if (index === 3) {
      extraClasses = "sm:col-start-2 sm:row-start-2"; // for tablet/desktop only
    }

    return (
      <div
        key={index}
        className={`w-full h-32 sm:h-40 bg-white border-4 border-gray-700 rounded-lg shadow-md flex items-center justify-center p-4 sm:p-6 ${extraClasses}`}
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="object-contain w-36 h-20 sm:w-56 sm:h-32"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder.svg";
          }}
        />
      </div>
    );
  })}
</div>



      <div className="flex flex-wrap justify-center items-center text-center mt-8 px-4 gap-2 text-base sm:text-xl font-semibold">
        <span>See me on Amazon Author Page :</span>
        <a
          href="https://amzn.to/32if0TJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline break-all"
        >
          https://amzn.to/32if0TJ
        </a>
      </div>
    </section>
  );
};

export default AvailableOn;

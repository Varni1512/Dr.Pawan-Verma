 

import { useState, useRef, useEffect } from "react"
 
import { Link } from "react-router-dom"

const Gallery = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const scrollContainerRef = useRef(null)

  const images = [
    {
      src:"/gallery05.jpeg",
      alt: "Pawan Verma speaking at an event",
      className: "col-span-2 md:col-span-1 row-span-2",
    },
    {
      src: "/gallery02.jpeg",
      alt: "Pawan Verma at desk",
    },
    {
      src: "/gallery03.png",
      alt: "Pawan Verma at book launch",
    },
    {
      src: "/gallery04.jpeg",
      alt: "Pawan Verma with award",
    },
    {
      src: "/gallery01.jpeg",
      alt: "Pawan Verma on stage",
    },
  ]

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return

      const containerWidth = scrollContainerRef.current.clientWidth
      const cardWidth = 280 // Approximate width of a card including margins
      const visibleCount = Math.floor(containerWidth / cardWidth)

      setTotalSlides(Math.max(0, images.length - Math.max(1, visibleCount)))
    }

    updateVisibleSlides()
    window.addEventListener("resize", updateVisibleSlides)

    return () => {
      window.removeEventListener("resize", updateVisibleSlides)
    }
  }, [images.length])

  const scrollToSlide = (index) => {
    setActiveSlide(index)
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector("div").offsetWidth
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft
      const cardWidth = scrollContainerRef.current.querySelector("div").offsetWidth
      const newActiveSlide = Math.round(scrollLeft / cardWidth)

      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide)
      }
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-2xl md:text-3xl font-bold">Dig A Little Deeper Into My Life.</h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
        </div>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className={image.className || ""}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Mobile view - Horizontal scroll */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-[280px] w-[280px] h-[200px] flex-shrink-0 mx-2">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Pagination dots for mobile */}
          {totalSlides > 0 && (
            <div className="flex justify-center mt-4">
              {[...Array(totalSlides + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`mx-1 rounded-full w-3 h-3 ${index === activeSlide ? "bg-yellow-500" : "bg-gray-300"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <Link to="/gallery" className="inline-block px-6 py-3 bg-[#B8860B] text-white font-medium rounded-md hover:bg-[#906c0a] transition-colors duration-300">
            View More
          </Link>
        </div>
      </div>
    </section>  
  )
}

export default Gallery;
import { Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import thumb01 from '/Hero01.jpeg';

const VideoCard = ({ title, views, time, duration, youtubeId, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const playVideo = () => {
    setIsLoading(true);
    setIsPlaying(true);
  };

  const videoThumbnail = thumbnail || `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <div className="group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-lg min-w-[280px] w-full flex-shrink-0 mx-2">
      {isPlaying ? (
        <div className="relative w-full h-40 rounded-lg mb-2 overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            className="w-full h-40 object-cover"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setIsLoading(false)}
          ></iframe>
        </div>
      ) : (
        <div className="relative overflow-hidden rounded-lg mb-2">
          <img
            src={videoThumbnail}
            alt={title}
            className="w-full h-44 object-cover transition duration-500 transform group-hover:scale-110"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.svg?height=160&width=280";
            }}
          />
          <div 
            className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer backdrop-blur-[2px]"
            onClick={playVideo}
          >
            <div className="bg-red-600 rounded-full p-3 transform transition-transform duration-300 hover:scale-110 hover:bg-red-700">
              <Play className="text-white animate-pulse" size={24} />
            </div>
          </div>
          <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm bg-opacity-70">
            {duration}
          </div>
        </div>
      )}
      <div className="p-3">
        <h3 className="font-medium text-sm mb-1 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-xs flex items-center gap-1">
          <span>{views} views</span>
          <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
          <span>{time} ago</span>
        </p>
      </div>
    </div>
  );
};

const Videos = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const scrollContainerRef = useRef(null);
  
  const videos = [
    {
      title: "The 10X Leader",
      views: "1.4K",
      time: "3 months",
      duration: "14:32",
      youtubeId: "IMr5o23lekQ",
    },
    {
      title: "Read This Gripping Crime Thriller - UNBORN",
      views: "6K",
      time: "2 years",
      duration: "5:45",
     // youtubeId: "zddpPGLsedw",
     youtubeId: "mlQDb0WamyA",
    },
    {
      title: "India Authors Award 2021",
      views: "10K",
      time: "3 years",
      duration: "1:28",
      youtubeId: "xNhHIi6WXlA",
    },
    {
      title: "BEFORE YOU OVERTHINK, WATCH THIS",
      views: "21K",
      time: "2 years",
      duration: "4:19",
      youtubeId: "42LrSyYOwHU",
    },
  ];

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (!scrollContainerRef.current) return;

      const containerWidth = scrollContainerRef.current.clientWidth;
      const cardWidth = 280; // Approximate width of a card including margins
      const visibleCount = Math.floor(containerWidth / cardWidth);

      setTotalSlides(Math.max(0, videos.length - Math.max(1, visibleCount)));
    };

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);

    return () => {
      window.removeEventListener("resize", updateVisibleSlides);
    };
  }, [videos.length]);

  const scrollToSlide = (index) => {
    setActiveSlide(index);
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.querySelector("div").offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const cardWidth = scrollContainerRef.current.querySelector("div").offsetWidth;
      const newActiveSlide = Math.round(scrollLeft / cardWidth);

      if (newActiveSlide !== activeSlide) {
        setActiveSlide(newActiveSlide);
      }
    }
  };

  return (
    <section className=" bg-gradient-to-b from-white to-[#f5e9d1] ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-0.5 w-12 bg-[#B8860B]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Dr. Verma's Talk
            </h2>
            <div className="h-0.5 w-12 bg-[#B8860B]" />
          </div>
          <span className="ml-3 text-red-600 inline-block transform transition-transform hover:scale-110 duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
          </span>
        </div>
        
        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid  md:grid-cols-2 items-center  lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
        
        {/* Mobile view - Horizontal scroll */}
        <div className="md:hidden">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={handleScroll}
          >
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>

          {/* Pagination dots for mobile */}
          {totalSlides > 0 && (
            <div className="flex justify-center mt-4 pb-5">
              {[...Array(totalSlides + 1)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  className={`mx-1 rounded-full w-3 h-3 ${index === activeSlide ? "bg-yellow-500" : "bg-gray-300"} transition-colors duration-300`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Add this to your global CSS to hide scrollbars but keep functionality
const style = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export default Videos;
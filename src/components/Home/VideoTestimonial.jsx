import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";

const VideoTestimonials = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Why 10x Leader Is a Game-Changer for Modern Leaders",
      videoLink: "/videos/ms-Camelia.mp4",
    },
    {
      id: 2,
      title: "The Leadership Book Everyone's Talking About: 10x Leader",
      videoLink: "/videos/ReviewByMale.mp4",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="py-10 px-4 text-center">
      {/* Title */}
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="h-0.5 w-12 bg-[#B8860B]" />
          <h2 className="text-2xl md:text-3xl font-bold">
            What the Experts Are Saying About 10x Leader
          </h2>
          <div className="h-0.5 w-12 bg-[#B8860B]" />
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:flex justify-center gap-6 flex-wrap">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video.videoLink)}
            className="cursor-pointer w-full max-w-sm rounded-lg p-4 shadow-md flex flex-col items-center"
          >
            <div className="relative w-full h-48 rounded-md border-2 border-[#B8860B] overflow-hidden bg-black">
              <video
                className="w-full h-full object-contain"
                src={video.videoLink}
                muted
                preload="metadata"
                playsInline
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play className="w-10 h-10 text-orange-500" />
              </div>
            </div>
            <div className="flex justify-between items-start w-full mt-4">
              <p className="text-sm font-medium text-left">{video.title}</p>
              <span className="text-2xl leading-none rotate-90 text-gray-600">
                ⋯
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden overflow-hidden relative">
        <MobileCarousel
          videos={videos}
          currentIndex={currentIndex}
          onSelect={(index) => setCurrentIndex(index)}
          onVideoClick={(link) => setSelectedVideo(link)}
        />
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/67 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white/90 backdrop-blur-md rounded-lg shadow-lg p-4 w-[90%] max-w-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedVideo(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-auto max-h-[400px] rounded-md"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoTestimonials;

const MobileCarousel = ({ videos, currentIndex, onSelect, onVideoClick }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.offsetWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div ref={containerRef} className="flex overflow-x-hidden w-full">
      {videos.map((video, index) => (
        <div
          key={video.id}
          className="min-w-full px-4"
          onClick={() => onVideoClick(video.videoLink)}
        >
          <div className="relative w-full h-48 rounded-md border-2 border-[#B8860B] overflow-hidden bg-black">
            <video
              className="w-full h-full object-contain"
              src={video.videoLink}
              muted
              preload="metadata"
              playsInline
              autoPlay={index === currentIndex}
              loop
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <Play className="w-10 h-10 text-orange-500" />
            </div>
          </div>
          <div className="mt-4 text-left">
            <p className="text-sm font-medium">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

"use client"

import { useState, useRef } from "react"
import { Calendar, ExternalLink, Filter, Newspaper, Play, Radio, Share2, Video, X } from "lucide-react"

const MediaPage = () => {
  const [activeFilter, setActiveFilter] = useState("article")
  const [searchQuery, setSearchQuery] = useState("")
  const [videoPlaying, setVideoPlaying] = useState(null)
  const videoModalRef = useRef(null)

  // Media categories
  const categories = [
    { id: "article", name: "Articles", icon: <Newspaper className="w-4 h-4" /> },
    { id: "video", name: "Videos", icon: <Video className="w-4 h-4" /> },
    { id: "interview", name: "Interviews", icon: <Radio className="w-4 h-4" /> },
  ]

  // Extract YouTube video ID from URL
 

  // Get YouTube thumbnail URL from video ID
 

  // Media items data - using only the specific data provided
  const mediaItems = [
    {
      id: 1,
      type: "video",
      title: "Delivering the Keynote Address on the occasion of the Centenary Celebrations of the Osmania University",
      source: "Osmania University, Hyderabad",
      date: "October 15, 2022",
      description:
        "Dr. Pawan Verma delivers an inspiring keynote address at the prestigious Centenary Celebrations of Osmania University, sharing insights on leadership and education.",
      youtubeId: "mlQDb0WamyA", // Placeholder - will be replaced with actual ID
      duration: "45:22",
      featured: true,
    },
    {
      id: 2,
      type: "video",
      title: "Addressing the CEO Knowledge Forum of ICICI Bank on Innovation and Creativity",
      source: "ICICI Bank",
      date: "August 22, 2022",
      description:
        "Dr. Verma shares innovative approaches to leadership and creativity with top executives at ICICI Bank's CEO Knowledge Forum.",
        youtubeId: "FVhCHqnd1f4", // Placeholder - will be replaced with actual ID
      duration: "38:15",
    },
    {
      id: 3,
      type: "article",
      title: "Be the CEO of your Own Life",
      source: "The Daily Pioneer",
      date: "July 15, 2022",
      description:
        "Dr. Pawan Verma discusses how individuals can apply CEO-level strategic thinking to their personal lives for greater success and fulfillment.",
      link: "https://www.dailypioneer.com/2019/sunday-edition/be-the-ceo-of-your-own-life.html", // Will be replaced with actual link
    },
    {
      id: 4,
      type: "article",
      title: "Featured in De Mode Global Edition",
      source: "De Mode Global",
      date: "June 2020",
      description:
        "An exclusive feature on Dr. Pawan Verma's leadership philosophy and his impact on the business world in the global edition of De Mode magazine.",
      link: "https://fc042cdd-0312-4946-95ec-9f3bc75590e7.filesusr.com/ugd/b0c432_b6a9cf84e72c4c2a832333a1bb075f58.pdf", // Will be replaced with actual link
      pdfUrl: "#", // Will be replaced with actual PDF link
    },
    {
      id: 5,
      type: "interview",
      title: "A Chit-chat Session with the Writing Geeks",
      source: "Writing Geeks",
      date: "May 18, 2022",
      description:
        "An informal conversation where Dr. Verma discusses his writing process, inspirations, and journey as an author.",
      link: "https://writinggeeks.in/blog/i-find-it-disturbing-that-our-leadership-development-programs-today-end-up-promoting-more-mediocrity-than-excellence-among-leaders-says-pawan-verma-in-an-exclusive-interview/", // Will be replaced with actual link
    },
    {
      id: 6,
      type: "interview",
      title: "An Interview with Author News",
      source: "Author News",
      date: "April 10, 2022",
      description:
        "Dr. Verma shares insights about his books, writing philosophy, and views on leadership in this in-depth interview.",
      link: "https://theauthornews.com/authors/interview/an-exclusive-interview-with-the-author-of-age-of-the-imperfect-leader-pawan-verma/", // Will be replaced with actual link
    },
    {
      id: 7,
      type: "interview",
      title: "An Interview with Author Times",
      source: "Author Times",
      date: "March 25, 2022",
      description:
        "A comprehensive discussion about Dr. Verma's literary works and their impact on leadership thinking in the corporate world.",
      link: "https://authortimes.com/authors/it-is-practically-a-myth-buster-that-questions-the-expectation-from-leaders-to-be-perfect-and-infallible-says-pawan-verma-in-a-recent-interview/1436/", // Will be replaced with actual link
    },
    {
      id: 8,
      type: "article",
      title: "Soak in Knowledge",
      source: "Millennium Post",
      date: "February 12, 2022",
      description:
        "An article highlighting Dr. Verma's perspectives on continuous learning and knowledge acquisition in the modern business environment.",
      link: "https://www.millenniumpost.in/features/soak-in-knowledge-385714", // Will be replaced with actual link
    },
    {
      id: 9,
      type: "article",
      title: "Celebrating the Imperfect Leader",
      source: "The New Indian Express – Indulge Express",
      date: "January 30, 2022",
      description:
        "A feature article exploring Dr. Verma's groundbreaking concept of 'Imperfect Leadership' and why embracing imperfections leads to better leadership.",
      link: "https://www.indulgexpress.com/culture/books/2019/Nov/04/celebrating-the-imperfect-leader-dr-pawan-verma-launches-his-newest-self-help-book-19523.html", // Will be replaced with actual link
    },
    {
      id: 10,
      type: "article",
      title: "Of Imperfect Leaders",
      source: "Outlook India",
      date: "December 15, 2021",
      description:
        "Outlook India explores Dr. Verma's leadership philosophy and how it challenges traditional notions of perfect leadership.",
      link: "https://www.outlookindia.com/", // Will be replaced with actual link
    },
    {
      id: 11,
      type: "article",
      title: "Celebrating the Imperfect Leader",
      source: "The News Strike",
      date: "November 22, 2021",
      description:
        "An in-depth analysis of Dr. Verma's book 'Age of the Imperfect Leader' and its implications for modern leadership practices.",
      link: "https://thenewsstrike.com/celebrating-the-imperfect-leader-dr-pawan-verma-launches-his-latest-self-help-book-on-leadership", // Will be replaced with actual link
    },
    {
      id: 12,
      type: "article",
      title: "A Different Take on Leadership",
      source: "Hitavada, Nagpur",
      date: "October 5, 2021",
      description:
        "Hitavada explores Dr. Verma's unique perspective on leadership that challenges conventional wisdom and offers fresh insights.",
      link: "https://www.ehitavada.com/index.php?edition=Mpage&date=2020-09-29&page=1", // Will be replaced with actual link
    },
  ]

  // Filter media items based on active filter and search query
  const filteredMedia = mediaItems.filter((item) => item.type === activeFilter )

  // Handle video modal open
  const openVideoModal = (videoUrl) => {
    setVideoPlaying(videoUrl)
    document.body.style.overflow = "hidden" // Prevent scrolling when modal is open
  }

  // Handle video modal close
  const closeVideoModal = () => {
    setVideoPlaying(null)
    document.body.style.overflow = "auto" // Restore scrolling when modal is closed
  }

  // Close modal when clicking outside of video
  const handleModalClick = (e) => {
    if (videoModalRef.current && e.target === videoModalRef.current) {
      closeVideoModal()
    }
  }

  // Render media item card based on type
  const renderMediaCard = (item) => {
    switch (item.type) {
      case "article":
        return (
          <div className="bg-[#372b12] text-white h-full w-full rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1  hover:shadow-lg flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm text-white mb-2">
                <Newspaper className="w-4 h-4 mr-1" />
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{item.date}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-200 mb-4 flex-grow">{item.description}</p>
        
              <div className="mt-auto flex justify-between  items-center">
                <a
                  href={item.link}
                  className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article <ExternalLink className="ml-1 h-4 w-4" />
                </a>
               
              </div>
            </div>
          </div>
        );
        

      case "video":
        return (
          <div className="bg-[#372b12] text-white h-full w-full rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
            <div
              className="aspect-video relative overflow-hidden  cursor-pointer"
              onClick={() =>
                openVideoModal(`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`)
              }
            >
              <img
                src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/placeholder.svg?height=200&width=350";
                }}
              />
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="bg-yellow-500 rounded-full p-3">
                  <Play className="h-6 w-6" />
                </div>
              </div>
              <div className="absolute top-0 left-0 bg-yellow-500  px-3 py-1 text-xs font-bold">
                Video
              </div>
              <div className="absolute bottom-2 right-2  bg-opacity-70 text-white px-2 py-1 text-xs rounded">
                {item.duration}
              </div>
            </div>
        
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm  mb-2">
                <Video className="w-4 h-4 mr-1" />
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{item.date}</span>
              </div>
              <h3 className="font-bold text-xl mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-200 mb-4 line-clamp-2 flex-grow">{item.description}</p>
        
              <div className="mt-auto flex justify-between items-center">
                <button
                  onClick={() => openVideoModal(item.videoUrl)}
                  className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center"
                >
                  Watch Video <Play className="ml-1 h-4 w-4" />
                </button>
               
              </div>
            </div>
          </div>
        );
        

      case "interview":
      default:
        return (
          <div className="bg-[#372b12] text-white h-full w-full rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1  overflow-hidden   hover:shadow-lg flex flex-col">
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center text-sm mb-2">
                <Radio className="w-4 h-4 mr-1" />
                <span>{item.source}</span>
                <span className="mx-2">•</span>
                <Calendar className="w-4 h-4 mr-1" />
                <span>{item.date}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-200 mb-4 flex-grow">{item.description}</p>
        
              <div className="mt-auto flex justify-between items-center">
                <a
                  href={item.link || "#"}
                  className="text-yellow-600 hover:text-yellow-800 font-medium flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More <ExternalLink className="ml-1 h-4 w-4" />
                </a>
                 
              </div>
            </div>
          </div>
        );
        
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#f5e9d1] py-20">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Media Coverage</h1>
            <p className="text-xl mb-8">
              Explore articles, interviews, videos, and press coverage featuring Dr. Pawan Verma
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <br />
            <br />
            <div className="text-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Media Content Section */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Media Archive
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
              <p className="mt-4 text-gray-600">Browse Dr. Verma's media appearances, interviews, and articles</p>
            </div>

            {/* Category Filters */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2  justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 cursor-pointer py-2 rounded-full flex items-center text-sm font-medium transition-colors duration-200 ${
                      activeFilter === category.id
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Media Grid */}
            {filteredMedia.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMedia.map((item) => (
                  <div key={item.id}>{renderMediaCard(item)}</div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-lg">No media items found matching your criteria.</p>
                <button
                  onClick={() => {
                    setActiveFilter("article")
                  }}
                  className="mt-4 text-yellow-600 hover:text-yellow-800 font-medium"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
 
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoPlaying && (
        <div
          ref={videoModalRef}
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={handleModalClick}
        >
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors duration-200 z-10"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={videoPlaying}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MediaPage


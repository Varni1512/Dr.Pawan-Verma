"use client"
import { Link } from 'react-router-dom'
import { useState, useRef } from "react"
import { X, ChevronLeft, ChevronRight, Award, BookOpen, Users, User, Heart } from "lucide-react"

// import pt01 from '/gallery/pt01.png'


const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(null)
  const lightboxRef = useRef(null)

  // Gallery categories
  const categories = [
    { id: "all", name: "All Photos", icon: <Users className="w-4 h-4" /> },
    { id: "portraits", name: "Portraits", icon: <User className="w-4 h-4" /> },
    { id: "awards", name: "Awards & Recognition", icon: <Award className="w-4 h-4" /> },
    { id: "books", name: "Literary Works", icon: <BookOpen className="w-4 h-4" /> },
    { id: "events", name: "Events & Appearances", icon: <Users className="w-4 h-4" /> },
    { id: "personal", name: "Personal Moments", icon: <Heart className="w-4 h-4" /> },
  ]

  // Gallery items data
  const galleryItems = [
    {
      id: 1,
      category: "portraits",
      title: "Dr. Pawan Verma - Professional Portrait",
      description: "Official portrait of Dr. Pawan Verma in formal business attire",
      image:'/gallery/Pawan Verma - Photo1.jpg',
      alt: "Professional portrait of Dr. Pawan Verma",
      year: "2023",
    },
    {
      id: 2,
      category: "portraits",
      title: "Dr. Pawan Verma at Work",
      description: "Dr. Verma in his office environment working at his desk",
      image:
        '/gallery/pt01.png',
      alt: "Dr. Pawan Verma at his office desk",
      year: "2022",
    },
    {
      id: 3,
      category: "awards",
      title: "Leadership Excellence Award 2024",
      description: "Certificate recognizing Dr. Verma as a Pioneer in Transformative Leadership and Strategic Thought",
      image:'/gallery/LEA Award 2024.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 4,
      category: "awards",
      title: "Receiving Hon Doctorate",
      description: "",
      image:'/gallery/Celebrating with Team - Rotary Trophy & Awards.jpeg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 5,
      category: "awards",
      title: " ISTD Book Award 2019",
      description: "",
      image:'/gallery/Receiving ISTD Book Award 2019.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2019",
    },
    {
      id: 6,
      category: "awards",
      title: "Best Leadership Author Trophy 2024",
      description: "",
      image:'/gallery/Best Leadership Author Trophy 2024.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 7,
      category: "awards",
      title: "Receiving REX Award",
      description: "Certificate recognizing Dr. Verma as a Pioneer in Transformative Leadership and Strategic Thought",
      image:'/gallery/Receiving REX Global Fellowship & Award 2014.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 8,
      category: "awards",
      title: "Receiving the Rotary Trophy",
      description: "",
      image:'/gallery/Receiving the Rotary Trophy.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 9,
      category: "awards",
      title: "Leadership Excellence Award 2024",
      description: "Certificate recognizing Dr. Verma as a Pioneer in Transformative Leadership and Strategic Thought",
      image:'/gallery/LEA Award 2024.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 10,
      category: "awards",
      title: "Sahityakosh Samman Medal",
      description: "Gold medal awarded to Dr. Verma for literary excellence",
      image:'/gallery/Sahityakosh Samman 2022 - Medal.jpeg',
      alt: "Sahityakosh Samman 2022 gold medal",
      year: "2022",
    },
    {
      id: 11,
      category: "awards",
      title: "Rotary Star Polaris Trophy",
      description: "Award presented to Dr. Verma as President of Rotary Club of Millennium City Navi Mumbai",
      image:'/gallery/Rotary Star Polaris Trophy.jpg',
      alt: "Rotary Star Polaris Trophy",
      year: "2018",
    },
    {
      id: 12,
      category: "awards",
      title: "Rotary International Citation - Making a Difference",
      description: "Awarded for helping Rotary make a different in the lives of peoples all over the worlds.",
      image:'/gallery/Rotary International Citation - Making a Difference.jpg',
      alt: "Rotary Star Polaris Trophy",
      year: "2018",
    },
    {
      id: 13,
      category: "awards",
      title: "Sahityakosh Awardee",
      description: "Sahityakosh Awardee awarded to Dr. Verma for literary excellence",
      image:'/gallery/Sahityakosh Award 2022.png',
      alt: "Sahityakosh Samman 2022 gold medal",
      year: "2022",
    },
    {
      id: 14,
      category: "awards",
      title: "Leadership Excellence Award Trophy 2024",
      description: "Certificate recognizing Dr. Verma as a Pioneer in Transformative Leadership and Strategic Thought",
      image:'/gallery/LEA Trophy 2024.jpg',
      alt: "Leadership Excellence Award 2024 certificate",
      year: "2024",
    },
    {
      id: 15,
      category: "books",
      title: "New Arrivals at Rupa Publications",
      description: "Dr. Verma's book 'Age of the Imperfect Leader' featured among new releases",
      image:
        '/gallery/In Good Company.jpg',
      alt: "Book display featuring Age of the Imperfect Leader",
      year: "2022",
    },
    {
      id: 16,
      category: "books",
      title: "The 10X Leader - Advance Praise",
      description: "Endorsements from business leaders for Dr. Verma's book 'The 10X Leader'",
      image:'/gallery/Pawan Verma - Pic1 (1).jpg',
      alt: "Back cover of The 10X Leader book showing endorsements",
      year: "2023",
    },
    {
      id: 17,
      category: "events",
      title: "Pune International Literary Festival",
      description: "Dr. Verma speaking at the 12th Pune International Literary Festival panel discussion",
      image:
        "/gallery/Pune LitFest 2024.jpg",
      alt: "Dr. Verma at Pune Literary Festival panel",
      year: "2024",
    },
  
    {
      id: 18,
      category: "events",
      title: "Receiving the Rotary Star Platinum Trophy",
      description: "Award presented to Dr. Verma as President of Rotary Club of Millennium City Navi Mumbai",
      image:'/gallery/Receiving the Rotary Trophy.jpg',
      alt: "Rotary Star Polaris Trophy",
      year: "2018",
    },
    {
      id: 19,
      category: "events",
      title: "Book Signing Event",
      description: "Dr. Verma with a reader holding his book 'Age of the Imperfect Leader'",
      image:"/gallery/With a Reader.jpg",
      alt: "Dr. Verma with a reader at book signing event",
      year: "2023",
    },
    {
      id: 20,
      category: "personal",
      title: "With Wife Neelima",
      description: "Dr. Pawan Verma with his wife Neelima during a personal occasion",
      image:'/gallery/With Wife Neelima.jpg',
      alt: "Dr. Pawan Verma with his wife Neelima",
      year: "2021",
    },
    {
      id: 21,
      category: "events",
      title: "Receiving the Rotary Star Platinum Trophy",
      description: "Award presented to Dr. Verma as President of Rotary Club of Millennium City Navi Mumbai",
      image:'/gallery/Receiving the Rotary Star Platinum Trophy.jpg',
      alt: "Rotary Star Polaris Trophy",
      year: "2018",
    },
  ]

  // Filter gallery items based on active filter
  const filteredGallery = galleryItems.filter((item) => {
    return activeFilter === "all" || item.category === activeFilter
  })

  // Open lightbox with selected image
  const openLightbox = (item) => {
    setCurrentImage(item)
    setLightboxOpen(true)
    document.body.style.overflow = "hidden" // Prevent scrolling when lightbox is open
  }

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = "auto" // Restore scrolling when lightbox is closed
  }

  // Navigate to previous image in lightbox
  const prevImage = () => {
    const currentIndex = galleryItems.findIndex((item) => item.id === currentImage.id)
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setCurrentImage(galleryItems[prevIndex])
  }

  // Navigate to next image in lightbox
  const nextImage = () => {
    const currentIndex = galleryItems.findIndex((item) => item.id === currentImage.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setCurrentImage(galleryItems[nextIndex])
  }

  // Close lightbox when clicking outside of image
  const handleLightboxClick = (e) => {
    if (lightboxRef.current && e.target === lightboxRef.current) {
      closeLightbox()
    }
  }

  // Handle keyboard navigation in lightbox
  const handleKeyDown = (e) => {
    if (!lightboxOpen) return

    switch (e.key) {
      case "ArrowLeft":
        prevImage()
        break
      case "ArrowRight":
        nextImage()
        break
      case "Escape":
        closeLightbox()
        break
      default:
        break
    }
  }

  // Add keyboard event listener
  useState(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [lightboxOpen, currentImage])

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#f5e9d1] py-7">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl mb-8">
              A visual journey through Dr. Pawan Verma's professional life, achievements, and personal moments
            </p>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
            <br />
            <br />
            <div className="text-center">
              <Link
                to="/contact"
                className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
              >
                Contact Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gradient-to-b from-white to-[#f5e9d1] py-7">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Image Collection
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
              <p className="mt-4 text-gray-600">Browse through moments captured throughout Dr. Verma's journey</p>
            </div>

            {/* Category Filters */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    className={`px-4 py-2 rounded-full flex items-center text-sm font-medium transition-colors duration-200 ${
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

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => openLightbox(item)}
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-100">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null
                        e.target.src = "/placeholder.svg?height=400&width=400"
                      }}
                    />
                    <div className="absolute top-0 left-0 bg-yellow-500 text-black px-3 py-1 text-xs font-bold">
                      {categories.find((cat) => cat.id === item.category)?.name || "Photo"}
                    </div>
                    <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white px-3 py-1 text-xs">
                      {item.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1 line-clamp-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredGallery.length === 0 && (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600 text-lg">No images found in this category.</p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="mt-4 text-yellow-600 hover:text-yellow-800 font-medium"
                >
                  View all photos
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && currentImage && (
        <div
          ref={lightboxRef}
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleLightboxClick}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors duration-200 z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="max-w-5xl w-full">
            <div className="relative">
              <img
                src={currentImage.image || "/placeholder.svg"}
                alt={currentImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain mx-auto"
              />
            </div>

            <div className="bg-black bg-opacity-70 text-white p-4 mt-2 rounded">
              <h3 className="text-xl font-bold mb-1">{currentImage.title}</h3>
              <p className="text-gray-300">{currentImage.description}</p>
              <p className="text-gray-400 text-sm mt-2">{currentImage.year}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage


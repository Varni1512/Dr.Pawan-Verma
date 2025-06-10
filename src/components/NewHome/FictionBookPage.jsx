import React, { useState } from "react";

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      id: 1,
      category: "Fiction",
      title: "Unbroken",
      author: "Pawan Verma",
      image: "/book4.png",
      rating: 5,
      categories: ["Fiction", "Crime thriller"],
      description: `Unbroken is a gripping thriller featuring Roma Anand, a young artist whose life takes a terrifying turn during her painting exhibition in Macau. Caught between two powerful intelligence agencies—R&AW and ISI—over a top-secret defence asset, she becomes an unexpected witness to murder. With her fingerprints at the crime scene, Roma is forced into a dangerous game of cat and mouse. Hunted, alone, and unaware of the truth she carries, she must stay one step ahead to survive. A high-stakes thriller full of suspense, mystery, and a strong female lead.`,
      readMoreLink: "/book/unbroken",
      buyLink: "https://www.amazon.in/Unbroken-Pawan-Verma/dp/B09MWGHDZQ",
    },
    {
      id: 2,
      category: "Fiction",
      title: "No Closure No Forgiveness",
      author: "Pawan Verma",
      image: "/Fiction.png",
      rating: 5,
      categories: ["Fiction", "Crime thriller"],
      description: `"No Closure, No Forgiveness" by Dr. Pawan Verma is a powerful book that explores emotional pain, justice, and the struggle to heal from past traumas. It looks at how people and societies deal with betrayal, grief, and unspoken wounds. Dr.Verma shares deep insights and real stories that show why closure and forgiveness are so hard — especially when the pain is never truly addressed. This thought-provoking book encourages readers to face their emotions, seek truth, and understand the cost of staying silent.`,
      readMoreLink: "/book/no-closure-no-forgiveness",
      buyLink: "https://www.amazon.in/Thriller-Closure-Forgiveness-Murder-Revenge-ebook/dp/B01BCG3FKW",
    },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? books.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === books.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentBook = books[currentIndex];

  const renderStars = (rating) => {
    const maxStars = 5;
    return (
      <>
        {[...Array(maxStars)].map((_, i) => (
          <span key={i} className={i < rating ? "text-[#D4AF37]" : "text-gray-300"}>
            ★
          </span>
        ))}
      </>
    );
  };

  return (
    <div id='fiction' className="max-w-6xl mx-auto p-4 relative">
      <div className="w-52 h-1 bg-[#D9A61E] mx-auto mb-6"></div>

      <div className="border border-gray-200 rounded-lg p-6 bg-white relative shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <img src="/book.png" alt="book icon" className="w-6 h-6 mr-1" />
            <h3
              className="text-2xl font-bold text-black"
              style={{
                fontFamily: "'Instrument Sans', sans-serif",
                fontWeight: 700,
              }}
            >
              {currentBook.categories.join(" - ")}
            </h3>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute top-1/2 left-[-2rem] transform -translate-y-1/2 w-12 h-12 bg-[#D9A61E] hover:bg-[#D9A61E] rounded-full items-center justify-center text-white text-2xl shadow-md cursor-pointer transition-colors z-20"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="hidden md:flex absolute top-1/2 right-[-2rem] transform -translate-y-1/2 w-12 h-12 bg-[#D9A61E] hover:bg-[#D9A61E] rounded-full items-center justify-center text-white text-2xl shadow-md cursor-pointer transition-colors z-20"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Image */}
          <div className="flex flex-col items-center md:items-start w-full md:w-[220px]">
            <div className="w-[202px] h-[296px] relative">
              <img
                src={currentBook.image}
                alt={`${currentBook.title} by ${currentBook.author}`}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold">{currentBook.title}</h3>
              <div className="text-lg flex">{renderStars(currentBook.rating)}</div>
            </div>

            <p
              className="mb-6"
              style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}
            >
              {currentBook.description}
            </p>

            <div className="flex gap-4">
              <a
                href={currentBook.readMoreLink}
                className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                Read More
              </a>
              <a
                href={currentBook.buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white font-medium py-2 px-6 rounded-md transition duration-300"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Arrows */}
      <div className="flex justify-center gap-6 mt-6 md:hidden">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-[#D9A61E] rounded-full flex items-center justify-center text-white shadow-md"
          aria-label="Previous"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="w-12 h-12 bg-[#D9A61E] rounded-full flex items-center justify-center text-white shadow-md"
          aria-label="Next"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

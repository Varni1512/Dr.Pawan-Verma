import React, { useState } from 'react';

export default function BookCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const books = [
    {
      id: 1,
      category: "Non-Fiction",
      title: "The 10X Leader",
      author: "Pawan Verma",
      image: "/NonFiction.png",
      rating: 5,
      categories: ["Non-Fiction", "Leadership"],
      description:
        "Leadership expert Dr. Pawan Verma introduces the 10X Leader – a new kind of leader who sees leadership as a way to make the world better. With a strong sense of purpose and a focus on the future, the 10X Leader uses ideas and innovation to bring real change to organizations and communities.",
      readMoreLink:
        "/book/the-10x-leader",
      buyLink:
        "https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership-ebook/dp/B0D9H7QZ2G",
    },
    {
      id: 2,
      category: "Non-Fiction",
      title: "Age of the Imperfect Leader",
      author: "Pawan Verma",
      image: "/book5.png",
      rating: 5,
      categories: ["Non-Fiction", "Leadership"],
      description: `Leadership expert Dr. Pawan Verma breaks the myth that great leaders need to be perfect at everything. Instead, he shows that true leadership success comes from focusing on your biggest strengths and not being afraid of your weaknesses. Backed by real-life stories of well-known leaders, this book offers practical advice for professionals and executives who want to turn leadership challenges into real opportunities. It’s a down-to-earth, insightful guide that helps you grow as a leader and gain a competitive edge in your career and your organization.`,
      readMoreLink:
        "/book/age-of-the-imperfect-leader",
      buyLink:
        "https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449",
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
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "★";
    }
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto p-4 relative">
      {/* Header */}
      <h2
        className="text-3xl sm:text-4xl text-center mb-2 text-black"
        style={{ fontFamily: "'Inria Serif', serif" }}
      >
        Latest Books
      </h2>
      <div className="w-52 h-1 bg-[#D9A61E] mx-auto mb-6"></div>

      {/* Book Showcase Container with category inside */}
      <div className="border border-gray-200 rounded-lg p-6 bg-white relative shadow-lg">

        {/* Category header inside the box, centered at top */}
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

        {/* Left arrow - visible on md and above, vertically on left side */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute top-1/2 left-[-2rem] transform -translate-y-1/2 w-12 h-12 bg-[#D9A61E] hover:bg-[#D9A61E] rounded-full items-center justify-center text-white text-2xl shadow-md cursor-pointer transition-colors z-20"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right arrow - visible on md and above, vertically on right side */}
        <button
          onClick={goToNext}
          className="hidden md:flex absolute top-1/2 right-[-2rem] transform -translate-y-1/2 w-12 h-12 bg-[#D9A61E] hover:bg-[#D9A61E] rounded-full items-center justify-center text-white text-2xl shadow-md cursor-pointer transition-colors z-20"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Book Content Row */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Left column: Image */}
          <div className="flex flex-col items-center md:items-start w-full md:w-[220px]">
            {/* Book Image */}
            <div className="w-[202px] h-[296px] relative">
              <img
                src={currentBook.image}
                alt={`${currentBook.title} by ${currentBook.author}`}
                className="w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>

          {/* Right column: Book Details */}
          <div className="flex-1">
            {/* Title and Rating */}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-2xl font-bold">{currentBook.title}</h3>
              <div className="text-[#D4AF37] text-lg">{renderStars(currentBook.rating)}</div>
            </div>

            {/* Categories */}
            <div className="mb-4">
              <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-sm">
                <img src="/book.png" alt="book icon" className="w-4 h-4 mr-1" />
                {currentBook.categories.join(" - ")}
              </span>
            </div>

            {/* Description */}
            <p
              className="mb-6"
              style={{ fontFamily: "Inter, sans-serif", color: "#7B7B7B" }}
            >
              {currentBook.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <a
                href={currentBook.readMoreLink}
                target=""
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

      {/* Mobile navigation arrows */}
      <div className="flex justify-center gap-6 mt-6 md:hidden">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 bg-[#D9A61E] hover:bg-[#D9A61E] rounded-full flex items-center justify-center text-white text-2xl shadow-md cursor-pointer transition-colors"
          aria-label="Previous"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="w-12 h-12 bg-[#D9A61E] hover:bg-[#D9A61E] rounded-full flex items-center justify-center text-white text-2xl shadow-md cursor-pointer transition-colors"
          aria-label="Next"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

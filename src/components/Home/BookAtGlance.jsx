import React from "react";
import { Link } from "react-router-dom";
import booklogo from "/booklogo.png";

const books = [
  {
    title: "The 10X Leader",
    img: "/singlebook02.jpg",
    link: "https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership-ebook/dp/B0D9H7QZ2G",
  },
  {
    title: "Age of the Imperfect Leader",
    img: "/ageOf.jpg",
    link: "https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449",
  },
  {
    title: "Unbroken",
    img: "/singlebook03.jpg",
    link: "https://www.amazon.in/Unbroken-Pawan-Verma/dp/B09MWGHDZQ",
  },
  {
    title: "No Closure No Forgiveness",
    img: "/singlebook04.jpg",
    link: "https://www.amazon.in/Thriller-Closure-Forgiveness-Murder-Revenge-ebook/dp/B01BCG3FKW",
  },
];

const BooksGlance = () => {
  return (
    <div className="bg-white py-10 px-4 md:px-20">
      <div className="text-center mb-4">
        <div className="inline-flex items-center justify-center gap-1 mb-1">
          <div className="h-0.5 w-12 bg-[#B8860B]" />
          <h2 className="text-2xl md:text-3xl font-bold">Book at a Glance</h2>
          <img
            src={booklogo}
            alt="Book icon"
            className="h-14 w-14"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder.svg?height=32&width=32";
            }}
          />
          <div className="h-0.5 w-12 bg-[#B8860B]" />
        </div>
      </div>

      {/* Mobile view (2 books per row) */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-10 justify-items-center md:hidden">
        {books.map((book, index) => {
          const formattedTitle = book.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              to={`/book/${formattedTitle}`}
              key={index}
              className="flex flex-col items-center"
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-48 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
              />
              <div className="mt-2 h-2 bg-yellow-500 w-34" />
            </Link>
          );
        })}
      </div>

      {/* Desktop/laptop view (original ladder style) */}
      <div className="hidden md:flex gap-13 justify-center items-end">
        {books.map((book, index) => {
          // const formattedTitle = book.title.toLowerCase().replace(/\s+/g, "-");
          return (
            <Link
              to={book.link}
              key={index}
              className="flex flex-col items-center transition-all duration-300 relative"
              style={{ marginBottom: `${(books.length - 1 - index) * 80}px` }}
            >
              <img
                src={book.img}
                alt={book.title}
                className="h-64 rounded-md shadow-lg hover:scale-105 duration-300"
              />
              <div className="mt-2 h-3 bg-yellow-500 w-78" />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BooksGlance;

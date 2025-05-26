import { Star, ArrowLeft } from "lucide-react";
import book2 from '/singlebook02.jpg';

import Testimonials from "../Home/Testimonials";
import OtherBooks from "../Pages/OtherBooks";
import { Link } from "react-router-dom";
import VideoTestimonials from "../Home/VideoTestimonial";

const BookTheLeader = () => {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="px-4 pt-6">
        <Link to="/#nonfiction">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f39c12] hover:bg-[#e67e22] transition"
            title="Go Back"
          >
            <ArrowLeft size={20} className="text-white" />
          </div>
        </Link>
      </div>

      {/* Book Details Section */}
      <section className="py-12 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="md:w-1/3 flex justify-center">
              <img
                src={book2}
                alt="Age of The IMPERFECT LEADER"
                className="w-full max-w-[250px] object-contain"
              />
            </div>

            {/* Book Details */}
            <div className="md:w-2/3">
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">
                The 10X Leader
              </h1>
              <h2>Finally, a book that demystifies the complexities of leadership success!</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base text-justify mb-6">
                the 10X leader—the one who looks at leadership as a responsibility to make the
                world a better place to live...
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                This book is carefully designed to help contemporary leaders get rid of the
                Industrial Age mindset and cultivate new beliefs...
              </p>

              <div className="flex space-x-4 mb-6">
                <Link
                  to="https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership-ebook/dp/B0D9H7QZ2G"
                  className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Other Books Section */}
      <OtherBooks bookTitle={"The 10X Leader"} />

      {/* Book Testimonials Section */}
      <VideoTestimonials />
      <Testimonials />
    </div>
  );
};

export default BookTheLeader;

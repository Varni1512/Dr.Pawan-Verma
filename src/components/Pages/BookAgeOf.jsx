import { Star, ArrowLeft } from "lucide-react";
import book2 from '/singlebook01.png';
import { Link } from "react-router-dom";

import Testimonials from "../Home/Testimonials";
import OtherBooks from "../Pages/OtherBooks";

const BookAgeOf = () => {
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
                Age of The Imperfect Leader
              </h1>
              <h2>Finally, a book that demystifies the complexities of leadership success!</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
                  ))}
                </div>
              </div>
              <p className="text-sm md:text-base mb-6 text-justify">
                With a down-to-earth approach, leadership expert and practitioner Dr. Pawan Verma gets beyond the rhetoric associated with leadership and asserts that the secret of exceptional leadership is to be great at something rather than being good at everything...
              </p>
              <p className="text-sm md:text-base mb-6 text-justify">
                In a powerful narrative, enriched with stories from the lives of great leaders, this book debunks the myth of perfect leaders and unravels the key secrets of leadership success in the modern world...
              </p>

              <div className="flex space-x-4 mb-6">
                <Link
                  to="https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449"
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
      <OtherBooks bookTitle={"Age of the Imperfect Leader"} />

      {/* Book Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default BookAgeOf;

 
 
import { Star} from "lucide-react"
import book2 from '/singlebook01.png';
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
 
 
import Testimonials from "../Home/Testimonials";
import Books from "../Home/Books";
import OtherBooks from "../Pages/OtherBooks";
import AvailableOn from "../Home/AvailableOn";

const BookAgeOf = () => {
  return (
    <div className="bg-white">
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
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">Age of The Imperfect Leader</h1>
              <h2>Finally, a book that demystifies the complexities of leadership success!</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
            ))}
            </div>

          </div>
              <p className="text-sm md:text-base mb-6 text-justify">
              With a down-to-earth approach, leadership expert and practitioner Dr. Pawan Verma gets beyond the rhetoric associated with leadership and asserts that the secret of exceptional leadership is to be great at something rather than being good at everything. He therefore, makes the unequivocal suggestion that you should have the courage to be imperfect and the determination to make your strengths so formidable that your weaknesses become irrelevant.
              How’s that for a change?!
              </p>  
              <p className="text-sm md:text-base mb-6 text-justify">
              In a powerful narrative, enriched with stories from the lives of great leaders, this book debunks the myth of perfect leaders and unravels the key secrets of leadership success in the modern world. It is the pragmatic guide for leaders aspiring to convert their leadership challenges into a competitive advantage for themselves and for their organizations.
              </p>

              <div className="flex space-x-4 mb-6">
                <Link to="https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449" className="bg-[rgb(243,156,18)] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300">
                  Buy Now
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available On Section */}
      {/* <AvailableOn/> */}
      
      {/* My Other Books Section */}
      <OtherBooks bookTitle={"Age of the Imperfect Leader"}   />
      {/* Book Testimonials Section */}
       <Testimonials/>
    </div>
  )
}

export default BookAgeOf;


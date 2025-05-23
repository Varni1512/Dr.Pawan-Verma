 
 
import { Star, ArrowLeft } from "lucide-react";
import book2 from '/singlebook04.jpg';
 
 
import Testimonials from "../Home/Testimonials";
import Books from "../Home/Books";
import OtherBooks from "../Pages/OtherBooks";
import AvailableOn from "../Home/AvailableOn";
import { Link } from "react-router-dom";

const BookNoClo = () => {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="px-4 pt-6">
        <Link to="/#non-fiction">
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
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">NO CLOSURE NO FORGIVENESS</h1>
              <h2>The Thirsting for Revenge!</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
            ))}
            </div>

          </div>
              <p className="text-sm md:text-base text-justify mb-6">
              The Thirsting for Revenge & Yearning for Love Patrick Brenner is a broken, distraught father, seeking revenge on his wife Irene, whom he considers responsible for the accidental death of his little son David. He is also gunning for Detective Jessica Galloway and her boyfriend Andrew Hoffman, especially since they had helped his son’s killer escape the clutches of law in one of the most horrendous miscarriages of justice the city had ever seen. Since there was no justice, he is now out to deliver justice, all by himself.
              </p>  
              <p className="text-sm md:text-base text-justify mb-6">
              Detective Jessica Galloway had fallen in love with one of the witnesses who testified on Irene Brenner’s behalf, leading to her acquittal. She is now torn between her passionate love for Andrew and her compelling urge to hunt down the suspect and bring him to book.
              </p>

              <div className="flex space-x-4 mb-6">
                <Link to="https://www.amazon.in/Thriller-Closure-Forgiveness-Murder-Revenge-ebook/dp/B01BCG3FKW" className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300">
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
      <OtherBooks bookTitle={"NO CLOSURE NO FORGIVENESS"}   />
      {/* Book Testimonials Section */}
       <Testimonials/>
    </div>
  )
}

export default BookNoClo;


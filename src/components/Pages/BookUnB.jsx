 
 
import { Star, ArrowLeft } from "lucide-react";
import book2 from '/singlebook03.jpg';
 
 
import Testimonials from "../Home/Testimonials";
import Books from "../Home/Books";
import OtherBooks from "../Pages/OtherBooks";
import AvailableOn from "../Home/AvailableOn";
import { Link } from "react-router-dom";

const BookUnB = () => {
  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="px-4 pt-6">
        <Link to="/#fiction">
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
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">UNBROKEN</h1>
              <h2>UNBROKEN: A Heart-Pounding Spy Thriller You Won’t Be Able to Put Down</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
            ))}
            </div>

          </div>
              <p className="text-sm md:text-base text-justify mb-6">
              Roma Anand’s painting exhibition in Macau is a dream come true—until everything goes horribly wrong. By sheer bad luck, she stumbles into a deadly battle between two secret intelligence agencies: India’s R&AW and Pakistan’s ISI. At the center of it all? A top-secret defence software stolen by the enemy.
              </p> 
              <p className="text-sm md:text-base text-justify mb-6">
              Before she knows it, Roma’s life is turned upside down. She witnesses two brutal murders and somehow ends up with her fingerprints on one of the murder weapons. Now, both sides are hunting her—and she doesn’t even know why.
              </p> 
              <p className="text-sm md:text-base text-justify mb-6">
              Running for her life, Roma feels like a scared rabbit being chased by ruthless predators who won’t stop until she’s caught. But tired of running, she decides it’s time to fight back.
              </p> 
              <p className="text-sm md:text-base text-justify mb-6">
              What follows is a gripping cat-and-mouse game filled with danger, twists, and one woman’s fierce quest for justice—fueled by the loss of her husband and a burning desire to take down her enemies.
              </p> 
              <p className="text-sm md:text-base text-justify mb-6">
              Will Roma outsmart the assassins closing in?<br />Can she turn the tables and finally get the justice she deserves?
              </p>  
              <p className="text-sm md:text-base text-justify mb-6">
                If you love thrillers packed with suspense, action, and a strong, fearless heroine, UNBROKEN will keep you hooked until the very last page.
              </p>
            
              <div className="flex space-x-4 mb-6">
                <Link to="https://www.amazon.in/Unbroken-Pawan-Verma/dp/B09MWGHDZQ" className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300">
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
      <OtherBooks bookTitle={"UNBROKEN"}   />
      {/* Book Testimonials Section */}
       <Testimonials/>
    </div>
  )
}

export default BookUnB;


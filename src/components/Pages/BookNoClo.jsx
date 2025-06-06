

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
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">NO CLOSURE NO FORGIVENESS</h1>
              <h2>A Gripping Thriller of Revenge, Love, and Justice</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
                  ))}
                </div>

              </div>
              <p className="text-sm md:text-base text-justify mb-6">
                Patrick Brenner’s world shattered the day he lost his son David in a tragic accident. Blaming his wife Irene for the heartbreaking loss and furious over the miscarriage of justice that let the real killer walk free Patrick is now on a dangerous path of revenge. With no faith in the law, he’s determined to deliver justice himself.
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                Caught in the middle is Detective Jessica Galloway, who is torn between two powerful forces: her passionate love for Andrew Hoffman, a key witness who helped secure Irene’s acquittal, and her relentless drive to catch the real killer. But can she bring justice without losing herself?
              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                <span className="font-bold">No Closure No Forgiveness</span> weaves together intense emotion, a gripping thriller, and a poignant love story—drawing you into a world where revenge and redemption collide.
              </p>

              <p className="text-sm md:text-base text-justify mb-6">
                Will Patrick find peace or be consumed by his thirst for vengeance?<br />Can Jessica balance her heart and her duty to uncover the truth?

              </p>
              <p className="text-sm md:text-base text-justify mb-6">
                <spam className="font-bold">If you crave edge-of-your-seat suspense with deep emotional connections, this is the book you can’t afford to miss.</spam> Prepare to be hooked from the first page—and don’t be surprised if you stay up all night turning the pages.
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
      <OtherBooks bookTitle={"NO CLOSURE NO FORGIVENESS"} />
      {/* Book Testimonials Section */}
      <Testimonials />
    </div>
  )
}

export default BookNoClo;

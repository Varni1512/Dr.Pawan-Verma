 
 
import { Star} from "lucide-react"
import book2 from '/singlebook03.jpg';
 
 
import Testimonials from "../Home/Testimonials";
import Books from "../Home/Books";
import OtherBooks from "../Pages/OtherBooks";
import AvailableOn from "../Home/AvailableOn";
import { Link } from "react-router-dom";

const BookUnB = () => {
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
              <h1 className="text-2xl md:text-3xl font-bold text-[#1a5276] mb-2">UNBROKEN</h1>
              <h2>Unbroken : Courage. Resilience. Hope. Faith</h2>
              <div className="flex mb-1">
                <div className="flex gap-2 my-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className={i < 4 ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} />
            ))}
            </div>

          </div>
              <p className="text-sm md:text-base text-justify mb-6">
              An Edge-of-the-Seat Thriller. While Roma Anand is celebrating the success of her painting exhibition in Macau, little does she realize what the night has in store for her. By a sheer coincidence, she gets trapped in a fierce battle between two dreaded intelligence agencies - R&AW and ISI - for possession of a vital defence asset. She is able to escape, but not before she has become witness to two murders and has her finger prints on one of the murder weapons.A Cat-and-Mouse Game Roma is chased down endlessly as she has unwittingly snatched the contentious asset from the two rivals, even though she herself is not aware of it. Left alone in the world, she runs like a scared rabbit, but her predators ferret her out of her hideouts. Tired of running, she decides to take on her enemies and deliver justice on them. What follows is a cat-and-mouse game, a fierce battle between a wife, seeking revenge for the murder of her husband and a bunch of professional assassins who know no mercy. Will Roma be able to deliver justice on her predators?Download your copy today!Take action right away and Click the Orange "Buy now with 1-Click" Button.Tags: Thriller, Mystery, murder, Suspense, Crime, Revenge, Love, Romance, Passion, Retribution, detective books, best sellers fiction, crime fiction novels, crime thrillers, best mystery novel, murder mysteries in kindle books, new releases in mystery thriller novels, kindle crime novels, new books
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


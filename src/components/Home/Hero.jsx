// import image01 from '/Hero01.png';
import { ChevronRight, ChevronLeft } from "lucide-react";
import img03 from "/gallery03.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "/10X.png";
import image2 from "/ageOfLeader.png";
import image3 from "/noClosure.png";
import image4 from "/unBroken.png";

const books = [
  {
    title: "The 10X Leader",
    subtitle: "DEAR LEADER, THE WORLD AROUND YOU HAS CHANGED. HAVE YOU?",
    description:
      "Leadership expert Pawan Verma introduces you to a new kind of leader, the 10X leader—the one who looks at leadership as a responsibility to make the world a better place to live. Equipped with a larger purpose and a future-oriented mindset, this 10X leader harnesses the power of ideas and networks to transform businesses and societies, and above all, our lives and experiences.Verma presents a new approach, termed AGILE (Alive and Adaptive, Grit, Innovation, Learning and Excellence), that suggests how to deal with the volatility, uncertainty, complexities, and ambiguities of the VUCA world and create order out of chaos. It also emphasizes some of the fundamental human values—love, joy, peace, and hope—that are highly celebrated but rarely utilized at workplace.This book is carefully designed to help contemporary leaders get rid of the Industrial Age mindset and cultivate new beliefs and practices relevant to our times. It offers a refreshing perspective that has a huge potential of transforming lives and societies. Verma’s message to the leader in you is clear: Don’t think outside the box. Do away with the box itself!",
    image: image1,
    rating: 4.7,
    link: "https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership-ebook/dp/B0D9H7QZ2G",
  },
  {
    title: "Age of the Imperfect Leader",
    subtitle:
      "Finally, a book that demystifies the complexities of leadership success!",
    description:
      "With a down-to-earth approach, leadership expert and practitioner Pawan Verma goes beyond the rhetoric associated with leadership and makes the unequivocal suggestion that you should have the courage to be imperfect and if you try to be good at everything, your never be great at anything. How’s that for a change? In a powerful narrative enriched with examples from great leaders, the age of the imperfect leader debunks the myth of perfect leaders. The book identifies the key secrets of leadership success in the modern world: discovering your strengths and investing in these areas, focusing on the strengths of your team members instead of their weaknesses, making your leadership team well-rounded, being a principled pragmatist and creating the eco-system needed for success in the contemporary world.",
    image: image2,
    rating: 4.4,
    link: "https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449",
  },
  {
    title: "Unbroken",
    subtitle: "Courage. Resilience. Hope. Faith",
    description:
      "An Edge-of-the-Seat Thriller. While Roma Anand is celebrating the success of her painting exhibition in Macau, little does she realize what the night has in store for her. By a sheer coincidence, she gets trapped in a fierce battle between two dreaded intelligence agencies - R&AW and ISI - for possession of a vital defence asset. She is able to escape, but not before she has become witness to two murders and has her finger prints on one of the murder weapons.A Cat-and-Mouse Game Roma is chased down endlessly as she has unwittingly snatched the contentious asset from the two rivals, even though she herself is not aware of it. Left alone in the world, she runs like a scared rabbit, but her predators ferret her out of her hideouts. Tired of running, she decides to take on her enemies and deliver justice on them. What follows is a cat-and-mouse game, a fierce battle between a wife, seeking revenge for the murder of her husband and a bunch of professional assassins who know no mercy. Will Roma be able to deliver justice on her predators?Download your copy today!Take action right away and Click the Orange",
    image: image4,
    rating: 4.5,
    link: "https://www.amazon.in/Unbroken-Pawan-Verma/dp/B09MWGHDZQ",
  },
  {
    title: "No Closure No Forgiveness",
    subtitle: "An Edge of the Seat Thriller!",
    description:
      "“If you're looking for an edge of your seat thriller, with emotion in abundance and a love story threading through the background then this is the book for you. I simply couldn't put it down, and found it so easy to connect with the characters, especially our main character, Patrick, that I felt emotionally invested in the story, willing for a happy ending.Be warned however, once you pick up this book, you may struggle to get anything else done, as you simply won't want to stop reading until the very end!” – An amazon.co.uk customer",
    image: image3,
    rating: 3.3,
    link: "https://www.amazon.in/Thriller-Closure-Forgiveness-Murder-Revenge-ebook/dp/B01BCG3FKW",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const currentBook = books[index];
  const [showFull, setShowFull] = useState(false);

  const goToNext = () => {
    setShowFull(false);
    setIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const goToPrev = () => {
    setShowFull(false);
    setIndex((prevIndex) =>
      prevIndex === 0 ? books.length - 1 : prevIndex - 1
    );
  };

  const truncateDescription = (desc) => {
    const words = desc.split(" ");
    return words.length > 50 ? words.slice(0, 50).join(" ") + "..." : desc;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center mb-1">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500 text-3xl">
            ★
          </span>
        ))}
        {halfStar && <span className="text-yellow-500 text-3xl">☆</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300 text-3xl">
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    
    <section
      id="home"
      className="bg-gradient-to-b mt-5 from-white to-[#f5e9d1] w-full min-h-[650px]"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* About Section */}
        <div className="mt-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="md:w-1/3 lg:w-1/2 flex  ">
            <div className="relative group">
              {/* Main image container */}
              <div className="relative  mb-2  w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-[#d7a547] shadow-2xl transition-transform duration-500 hover:scale-105">
                <img
                  src={img03}
                  alt="Dr. Pawan Verma"
                  className="w-full h-full  object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="md:w-2/3 lg:w-1/2 space-y-6 text-center md:text-left">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-[#B8860B] pb-4 mb-6">
              Let’s Connect — Dr. Pawan Verma
            </h2> */}
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify">
              Dr. Pawan Verma is an Author, Thought Leader, Professional
              Speaker, and Management Consultant from India's financial services
              sector. His leadership vision stems from his rich experience in
              guiding start-ups, serving on boards, and leading business
              initiatives in large organizations such as the Reliance Group of
              Industries, Reliance ADA Group, LIC of India, and an Indo-Japanese
              start-up, Star Union Dai-ichi Life Insurance.
            </p>

            <div className="w-24 h-0.5 bg-[#B8860B]" />
          </div>
        </div>

        <div className="relative mt-16">
          {/* Arrows for Desktop */}
          <div className="hidden md:flex justify-between w-full">
            <button
              onClick={goToPrev}
              className="absolute left-[-5rem] top-1/2 -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-2 shadow-md hover:bg-yellow-500"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-[-5rem] top-1/2 -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-2 shadow-md hover:bg-yellow-500"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Book Carousel */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 lg:gap-20 pb-10">
            {/* Text Content */}
            <div className="md:w-1/2 flex flex-col items-start text-left space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {currentBook.title}
              </h2>
              <h4 className="text-xl font-bold text-gray-700 mb-1">
                {currentBook.subtitle}
              </h4>
              {renderStars(currentBook.rating)}

              <p className="text-gray-800 text-justify mb-2 font-bold">
                {showFull
                  ? currentBook.description
                  : truncateDescription(currentBook.description)}
              </p>

              <Link
                to={`/book/${currentBook.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="text-yellow-500 text-left font-semibold underline mb-4 transition"
              >
                Read More
              </Link>

              <Link
                to={currentBook.link}
                target="_blank"
                className="bg-[#f39c12] hover:bg-[#e67e22] text-white  font-semibold px-8 py-2 w-38 rounded-sm text-center transition duration-300"
              >
                Buy Now
              </Link>
            </div>

            {/* Image */}
            <div className="flex flex-col items-center md:max-w-[400px]">
              <img
                src={currentBook.image}
                alt={currentBook.title}
                className="w-full rounded-lg shadow-md max-w-xs md:max-w-md object-cover"
              />

              {/* Mobile Arrows Below Image */}
              <div className="flex justify-center gap-8 mt-4 md:hidden">
                <button
                  onClick={goToPrev}
                  className="bg-yellow-400 rounded-full p-2 shadow-md hover:bg-yellow-500"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={goToNext}
                  className="bg-yellow-400 rounded-full p-2 shadow-md hover:bg-yellow-500"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

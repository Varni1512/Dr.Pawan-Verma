import { useState } from "react"
// import { Facebook, Twitter, Instagram, ChevronRight, BookOpen, Heart, Star, Search, ExternalLink } from "lucide-react"
import {Star, ExternalLink} from "lucide-react"
// import auther from '/milani.png'

const PublishingPage = () => {
  const [activeTab, setActiveTab] = useState("romance")

  // Book categories
  const categories = [
    { id: "leadership", name: "Leadership" },
    { id: "thriller", name: "Thriller" },
    { id: "fiction", name: "Fiction" },
    { id: "nonfiction", name: "Non-Fiction" },
    { id: "romance", name: "Romance" },
    { id: "paranormal", name: "Paranormal" },
  ]

  // Books data
  const books = {
    romance: [
      {
        id: 1,
        title: "The Billionaire's Seduction",
        image:'/Malini/Mbook4.jpg',
        series: "Hit and Run Part 1",
        description: "A steamy romance between a powerful billionaire and a woman who changes his world forever.",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.com/Billionaires-Seduction-Adult-Romance-Erotica-ebook/dp/B01ENZP4US"
      },
      {
        id: 2,
        title: "The Billionaire's Obsession",
        image:'/Malini/Mbook11.jpg',
        series: "A Love Too Close",
        description: "When obsession meets desire, boundaries blur in this passionate tale of forbidden attraction.",
        rating: 4.2,
        amazonLink: "https://www.amazon.com/Billionaires-Obsession-Love-Too-Close-ebook/dp/B01E604U1O"
      },
      {
        id: 3,
        title: "Torn Between",
        image:'/Malini/Mbook7.jpg',
        series: "Passion And Guilt",
        description: "A stepbrother romance that explores the tension between desire and family loyalty.",
        rating: 4.3,
        amazonLink: "https://www.amazon.in/gp/product/B01F5D5O2A/"
      },
      {
        id: 4,
        title: "Bad Boy Romance",
        image:'/Malini/Mbook9.jpg',
        series: "Stepbrother with Benefits",
        description: "She never expected her new stepbrother would be the bad boy who'd steal her heart.",
        rating: 4.7,
        amazonLink: "https://www.amazon.in/gp/product/B01G26424U/"
      },
      {
        id: 5,
        title: "Innocence Lost",
        image:'/Malini/Mbook10.jpg',
        series: "Secrets of a Loving Heart",
        description: "A historical romance that follows a young woman's journey through love and self-discovery.",
        rating: 4.4,
        amazonLink: "https://www.amazon.in/gp/product/B01FH3IR8Q/"
      },
      {
        id: 6,
        title: "Love And Romance",
        image:'/Malini/Mbook13.jpg',
        series: "",
        description: "An emotional journey through the complexities of modern relationships and true connection.",
        rating: 4.1,
        amazonLink: "https://www.amazon.in/gp/product/B01EG9B7M0/"
      },
    ],
    thriller: [
      {
        id: 17,
        title: "Unbroken",
        image:'/singlebook03.jpg',
        series: "Hit and Run Part 3",
        description: "An Edge-of-the-Seat Thriller. While Roma Anand is celebrating the success of her painting exhibition in Macau, little does she realize what the night has in store for her. By a sheer coincidence, she gets trapped in a fierce battle between two dreaded intelligence agencies - R&AW and ISI - for possession of a vital defence asset. She is able to escape, but not before she has become witness to two murders and has her finger prints on one of the murder weapons.A Cat-and-Mouse Game Roma is chased down endlessly as she has unwittingly snatched the contentious asset from the two rivals, even though she herself is not aware of it. Left alone in the world, she runs like a scared rabbit, but her predators ferret her out of her hideouts. Tired of running, she decides to take on her enemies and deliver justice on them. What follows is a cat-and-mouse game, a fierce battle between a wife, seeking revenge for the murder of her husband and a bunch of professional assassins who know no mercy. Will Roma be able to deliver justice on her predators?Download your copy today!Take action right away and Click the Orange",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.in/Unbroken-Pawan-Verma/dp/B09MWGHDZQ"
      },
      {
        id: 7,
        title: "Passionate Desires",
        image:'/Malini/Mbook12.jpg',
        series: "Hooked and Trapped",
        description: "A spine-chilling thriller that will keep you on the edge of your seat until the very last page.",
        rating: 4.6,
        featured: true,
        amazonLink: "https://www.amazon.in/gp/product/B01FKLOI88/"
      },
    ],
    paranormal: [
      {
        id: 8,
        title: "The Forgotten Promise",
        image:'/Malini/Mbook8.jpg',
        series: "Alpha Demon Shifter Romance Part 1",
        description: "A paranormal romance featuring demons, shifters, and a promise that transcends time.",
        rating: 4.8,
        featured: true,
        amazonLink: "https://www.amazon.in/gp/product/B01I5P6XK2/"
      },
      {
        id: 9,
        title: "Pet Cause",
        image:'/Malini/Mbook14.jpg',
        series: "Paw Passion",
        description:
          "A unique paranormal tale that explores the bond between humans and their supernatural companions.",
        rating: 4.3,
        amazonLink: "https://www.amazon.in/gp/product/B01FKN63FC/"
      },
    ],
    nonfiction: [
      {
        id: 10,
        title: "Anti Aging",
        image:'/Malini/Mbook1.jpg',
        series: "Health & Beauty",
        description: "Natural Ways To Staying Healthier Looking Younger - discover timeless beauty secrets.",
        rating: 4.7,
        featured: true,
        amazonLink: "https://www.amazon.in/gp/product/B01AGFREWA/"
      },
      {
        id: 11,
        title: "Acne Cure",
        image:'/Malini/Mbook2.jpg',
        series: "Health & Beauty",
        description: "A Practical Guide to Natural Cure for Acne - effective solutions for clear, beautiful skin.",
        rating: 4.5,
        amazonLink: "https://www.amazon.in/gp/product/B01GVF1KC4/"
      },
      {
        id: 12,
        title: "Solo Travels & Singles Holidays",
        image:'/Malini/Mbook3.jpg',
        series: "Travel",
        description: "Safe Travel Tips for Women with Wanderlust - empowering guide for solo female travelers.",
        rating: 4.9,
        amazonLink: "https://www.amazon.in/gp/product/B01DA43J2I"
      },
      {
        id: 13,
        title: "The Billionaire's Seduction(Part 2)",
        image:'/Malini/Mbook5.jpg',
        series: "Hit and Run Part 2",
        description: "A steamy romance between a powerful billionaire and a woman who changes his world forever.",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.com/Billionaires-Seduction-Hit-Run-Part-ebook/dp/B01GQQDMQA?ref_=saga_dp_bnx_dsk_dp"
      },
      {
        id: 14,
        title: "The Billionaire's Seduction(Part 3)",
        image:'/Malini/Mbook6.jpg',
        series: "Hit and Run Part 3",
        description: "A steamy romance between a powerful billionaire and a woman who changes his world forever.",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.com/Billionaires-Seduction-Hit-Part-part-ebook/dp/B01H4PSGX6?ref_=saga_dp_bnx_dsk_dp"
      },
    ],
    leadership:[
      {
        id: 15,
        title: "The 10X Leader",
        image:'/singlebook02.jpg',
        series: "Hit and Run Part 3",
        description: "The 10X leader—the one who looks at leadership as a responsibility to make the world a better place to live. Equipped with a larger purpose and a future-oriented mindset, this 10X leader harnesses the power of ideas and networks to transform businesses and societies, and above all, our lives and experiences.",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.in/10X-Leader-Breaking-Conventional-Leadership-ebook/dp/B0D9H7QZ2G"
      },
      {
        id: 16,
        title: "Age of the Imperfect Leader",
        image:'/ageOf.jpg',
        series: "Hit and Run Part 3",
        description: "With a down-to-earth approach, leadership expert and practitioner Dr. Pawan Verma gets beyond the rhetoric associated with leadership and asserts that the secret of exceptional leadership is to be great at something rather than being good at everything. He therefore, makes the unequivocal suggestion that you should have the courage to be imperfect and the determination to make your strengths so formidable that your weaknesses become irrelevant.How’s that for a change?!",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.in/Age-Imperfect-Leader-Leading-Strength/dp/9353336449"
      }
    ],
    fiction:[
      {
        id: 18,
        title: "No Closure No Forgiveness",
        image:'/singlebook04.jpg',
        series: "Hit and Run Part 3",
        description: "“If you're looking for an edge of your seat thriller, with emotion in abundance and a love story threading through the background then this is the book for you. I simply couldn't put it down, and found it so easy to connect with the characters, especially our main character, Patrick, that I felt emotionally invested in the story, willing for a happy ending.Be warned however, once you pick up this book, you may struggle to get anything else done, as you simply won't want to stop reading until the very end!” – An amazon.co.uk customer",
        rating: 4.5,
        featured: true,
        amazonLink: "https://www.amazon.in/Thriller-Closure-Forgiveness-Murder-Revenge-ebook/dp/B01BCG3FKW"
      }
    ]
  }
 

  // Render star ratings
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? "text-yellow-500 fill-yellow-500"
                : i === fullStars && hasHalfStar
                  ? "text-yellow-500 fill-yellow-500 opacity-60"
                  : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-b from-white to-[#f5e9d1] py-10">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
               <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Malini White</h1>
                <p className="text-xl text-yellow-500 mb-6">Author of Romance, Thriller & Self-Help Books</p>
                <p className="text-lg leading-relaxed mb-8">
                  Exploring the depths of human emotions through compelling stories and practical guides for holistic
                  living.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="#books"
                    className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300 flex items-center space-x-2"
                  >
                    Explore Books
                  </a>
                  <a
                    href="#about"
                    className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300 flex items-center space-x-2"
                  >
                    About the Author
                  </a>
                </div>
              </div> 

              <div className="md:w-1/2 md:pl-12">
                <div className="relative rounded-lg w-full h-96 bg-[#3C2E26]">
                  <img
                    src={auther}
                    alt="Malini White"
                    className="rounded-lg w-full h-96 max-w-md mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* About the Author Section */}
      <section id="about" className="py-7 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-full mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                About the Author
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
            </div>

            <div className="p-8 rounded-lg">
              <div className="prose prose-lg max-w-none">
                <p className="mb-4 text-justify">
                  I'm Malini White, an indie author who has written extensively for my readers in the Western world,
                  particularly, US, Canada and Europe. Even though I have written some short stories for my Indian
                  readers, here's my chance to connect with the Indian readers in a more engaging manner.
                </p>

                <p className="mb-4 text-justify">
                  As an author, I celebrate womanhood in all its manifestations– beauty & grace, love & romance,
                  patience & forbearance, kindness & sacrifice. Don't mistake me for a feminist, but I believe that
                  women are the finest creations of God as they happen to be the epitome of all that is good within the
                  universe.
                </p>

                <p className="mb-4 text-justify">
                  Nourishing beauty & grace in body, mind & soul has always been a mission for me. It's my passion for
                  healthy living & nurturing a vibrant personality that I believe, I should be sharing with the rest of
                  the world. No wonder, in most of my writings, you would find my passion flowing through the pages
                  while simultaneously trying to enrich you with knowledge & information. I believe in approaching life
                  in a holistic manner and I do hope that it is getting reflected in my work and that everyone finds
                  something of relevance to them.
                </p>

                <blockquote className="border-l-4 text-center border-yellow-500 pl-4 italic">
                  When I'm not writing about leading healthy life styles and building vibrant personalities, you would
                  find me taking you to a complex world of human beliefs & prejudices, passions and emotions. A dreamer
                  & story-teller, I enjoy connecting with people through my stories and helping them fathom the depths
                  of human emotions and scale the heights of individual passions.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-5 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic font-light">
              "Come and join me in my journey of life and share my passion for exploring the universe of men & women
              with all its beauty, mysteries and fantasies."
            </blockquote>
            <div className="w-16 h-1 bg-yellow-500 mx-auto my-8"></div>
            <p className="text-xl">Malini White</p>
          </div>
        </div>
      </section>
     
      {/* Book Categories Section */}
      <section id="books" className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="max-w-full mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                My Books
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
              <p className="mt-4 text-gray-600">Browse my collection by category</p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center  mb-8 ">

              {categories.map((category) => (
                
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`py-3 px-6 font-medium transition-colors duration-200 ${
                    activeTab === category.id
                      ? "text-yellow-600 border-b-2 border-yellow-500"
                      : "text-gray-600 hover:text-yellow-600"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Responsive Books Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {(books[activeTab] || []).map((book) => (
                <div
                  key={book.id}
                  className="rounded-md shadow-md overflow-hidden transition-transform duration-300   flex flex-col">
                  <div className="relative aspect-[3/4] ">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover p-4"
                    />
                  </div>
                  <div className="p-4 flex-grow">
                   <div className="mt-3 flex mb-2">
                      {renderRating(book.rating)}
                    </div>
                    <h3 className="font-bold text-lg mb-2 line-clamp-1">{book.title}</h3>
                    {book.series && <p className="text-sm text-gray-500 mb-2">{book.series}</p>}
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">{book.description}</p>
                  </div>
                  <div className="px-4 pb-4">
                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-2 px-4 rounded-md text-sm w-full flex items-center justify-center transition duration-200"
                    >
                      Buy on Amazon <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PublishingPage
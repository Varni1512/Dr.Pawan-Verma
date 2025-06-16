import { Link } from 'react-router-dom'
import img from '/auther01.jpg'
import pdf from '/profile.pdf'

import {
  BookOpen,
  CheckCircle,
  GraduationCap,
  Trophy,
  ChevronRight,
  Target,
  Users,
  Mic,
} from "lucide-react"

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#f5e9d1]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#f5e9d1] py-7">
        <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500 mx-auto">
                  <img
                    src={img}
                    alt="Pawan Verma"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="md:w-2/3 md:pl-12 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Pawan Verma</h1>
              <p className="text-xl md:text-2xl text-yellow-500 mb-6">Leadership Author | Motivational Speaker | Storyteller | Thought Leader</p>
              <p className="text-lg leading-relaxed mb-8 text-justify">
                Dr. Pawan Verma is an award-winning author, motivational speaker, and respected thought leader with over 35 years of leadership experience in India's financial services industry. Known for blending practical corporate insights with the power of storytelling, Dr. Verma inspires audiences through his leadership books and gripping fiction thrillers. As a seasoned management consultant, he brings real-world strategies and a deep understanding of what it takes to lead, grow, and succeed in today's fast-changing world.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="#about"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Learn More
                </a>
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Contact Now
                </Link>
                <a
                  href={pdf}
                  download
                  className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300 flex items-center space-x-2"
                >
                  <span>Download profile</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Leader Who Walks the Talk */}
      <section id="about" className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                A Leader Who Walks the Talk
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-justify space-y-4">
              <p>
                Dr. Pawan Verma brings over 35 years of rich leadership experience across the life insurance, general insurance, and housing finance sectors---both in India and globally. He has served as Director on the Boards of several institutions, including Delhi Financial Corporation, Delhi Co-operative Housing Finance Corporation, and Innovative Insurance Co. Ltd.
              </p>

              <p>
                He has also held senior roles at top institutions including the Reliance Group of Industries, LIC of India, and Star Union Dai-ichi Life Insurance, where he served as Chief Operating Officer (COO). Pawan is known for driving innovation, building customer-centric systems, and implementing transformative digital platforms that shaped the way these companies serve people today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestselling Author Section */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Bestselling Author of Leadership & Fiction Books
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Leadership Books */}
            <div className="bg-[#45320d] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Leadership Books</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">The 10X Leader: Breaking the Rules of Conventional Leadership</span>
                    <p className="text-sm text-gray-200 mt-1">A practical guide for bold leaders who want to break norms and create lasting impact.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Age of the Imperfect Leader</span>
                    <p className="text-sm text-gray-200 mt-1">A fresh take on modern leadership that embraces imperfection, authenticity, and adaptability.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Fiction Thrillers */}
            <div className="bg-[#45320d] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Fiction Thrillers</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">UNBROKEN</span>
                    <p className="text-sm text-gray-200 mt-1">A powerful, suspenseful thriller with a strong female lead, praised for its emotional depth and tension.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">No Closure No Forgiveness</span>
                    <p className="text-sm text-gray-200 mt-1">An edge-of-the-seat crime thriller full of raw emotions and social relevance.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              His short stories and e-books are available on <span className="font-semibold">Amazon</span>, <span className="font-semibold">Juggernaut</span>, and other platforms. His opinion pieces and thought leadership have featured in major Indian publications like <span className="font-semibold">The Times of India</span>, <span className="font-semibold">Hindustan Times</span>, <span className="font-semibold">Economic Times</span>, and <span className="font-semibold">The Indian Express</span>.
            </p>
            <Link
              to="/book/age-of-the-impatient-leader"
              className="inline-flex items-center bg-yellow-500 text-black px-6 py-3 rounded-md hover:bg-yellow-600 transition duration-300 font-bold"
            >
              Explore Books <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* High-Impact Speaker Section */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              High-Impact Speaker on Leadership, Innovation & More
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 text-center mb-8">
              As a passionate keynote speaker, Dr. Pawan Verma brings energy, humour, and deep insight to every stage he steps on. He speaks at global conferences, corporate events, and academic forums on topics such as:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#2d2514] text-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Mic className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Speaking Topics</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Leadership in Disruptive Times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Innovation, Creativity & Agility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Trends in the Insurance & Financial Sector</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Values-Based Leadership & Personal Growth</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#2d2514] text-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-500 p-3 rounded-full mr-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Global Presence</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>ETFs Asia (Hong Kong)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>APAC FST Conferences (Hong Kong, Macau, Kuala Lumpur)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Member, SpeakIn (Indian Speaker's Bureau)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Represented by London Speakers Bureau</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-center text-lg text-gray-700">
              He consistently leaves his listeners inspired and empowered through his engaging presentations.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Achievements Section */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Academic Achievements & Recognitions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#2d2514] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Education & Certifications</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>MBA in Management</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Doctorate (Honoris Causa), Azteca University, Mexico</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Fellow, Insurance Institute of India</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Certified Corporate Director, Institute of Directors, New Delhi</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2d2514] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Awards & Recognition</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>REX Karmaveer Chakra Awardee</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Global Fellow, iCONGO (in association with the United Nations)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Expert Panel Member for Research Forums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mentor to Emerging Leaders and Entrepreneurs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              Dr. Verma actively serves on expert panels for research forums and mentors emerging leaders and entrepreneurs, dedicated to raising leadership standards across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Dr. Pawan Verma's Mission
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[#382b0f] text-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-yellow-500 p-4 rounded-full mr-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed">
                "To inspire today's leaders and storytellers to lead with authenticity, impact lives meaningfully, and challenge the status quo---one insight, one story, and one stage at a time."
              </blockquote>
              <footer className="text-right text-yellow-500 mt-6 text-lg">
                - Dr. Pawan Verma
              </footer>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

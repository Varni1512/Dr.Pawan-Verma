import img2 from '/gallery01.jpeg'
import { useRef } from "react"
import { CheckCircle } from "lucide-react"
// import { Link } from 'react-router-dom'
import pdf from '/Speaking.pdf'

const SpeakingPage = () => {

  const videoRef = useRef(null)

  return (
    <div className="bg-gradient-to-b mt-5 from-white to-[#f5e9d1] ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b mt-5  from-white to-[#f5e9d1] ">
        <div className="absolute inset-0 opacity-30 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row ">
            <div className="md:w-1/2 mb-8 md:mb-0 mt-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Pawan Verma</h1>
              <p className="text-xl text-yellow-500 mb-6">Provocative. Practical. Powerful.</p>
              <p className="text-lg leading-relaxed mb-8 text-justify">
                Dr. Pawan Verma is a high-impact leadership speaker, motivational storyteller, and renowned thought leader, known for challenging conventional thinking and inspiring audiences across industries, age groups, and cultures. With 30+ years of senior leadership experience in India's financial services sector, Dr. Verma combines deep corporate wisdom with compelling storytelling and stage presence—making every session engaging, relevant, and transformative.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={pdf}
                  download
                  className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
                >
                  Speaking Profile
                </a>
                <a
                  href="/contact"
                  className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
                >
                  Contact Now
                </a>
              </div>
            </div>

            <div className="md:w-1/2  md:pl-12  ">
              <div className="relative">
                <img
                  src={img2}
                  alt="Dr. Pawan Verma Speaking"
                  className="rounded-lg md:h-[518px] mb-5 shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-10 bg-gradient-to-b  from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">200+</div>
              <p className="text-gray-700 font-medium">Speaking Engagements</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">15+</div>
              <p className="text-gray-700 font-medium">Countries Visited</p>
            </div>

            <div className="p-6">
              <div className="text-4xl font-bold text-yellow-500 mb-2">30+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invite Dr. Verma */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Why invite Dr. Verma as a Speaker?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Proven Leadership Experience</h3>
                  <p className="text-gray-600 text-justify">
                    He has held key roles at Reliance Group, LIC of India, and Star Union Dai-ichi Life Insurance, apart from being a Director on the boards of a few companies.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Bestselling Author</h3>
                  <p className="text-gray-600 text-justify">
                    He has written acclaimed leadership books and award-winning crime thrillers
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Global Exposure</h3>
                  <p className="text-gray-600 text-justify">
                    He served as Chairman of the prestigious ETFs Asia Conferences (Hong Kong, 2012 & 2013), addressing international leaders.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Prestigious Keynotes</h3>
                  <p className="text-gray-600 text-justify">
                    He spoke at Osmania University's Centenary and other top institutions
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">International Reach</h3>
                  <p className="text-gray-600 text-justify">
                    He has delivered sessions across India, Hong Kong, Macau, Kuala Lumpur, and more
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Authentic & Impactful Style</h3>
                  <p className="text-gray-600 text-justify">
                    He is known for a warm, witty, and interactive delivery that leaves a lasting impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Speaking Topics */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Signature Speaking Topics
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-2">10X Leadership in a VUCA World</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Age of the Imperfect Leader: Strength, Empathy, Grit & Growth</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Unlocking Innovation & Creativity in Work and Life</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Mindset, Motivation & Finding Meaning at Work</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Team Building & People-Centric Leadership</h3>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg text-gray-800 mb-2">The Future of Insurance & Financial Services <span className="text-sm text-gray-600">(Domain Expertise)</span></h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Select Events & Prestigious Forums */}
      <section id="experience" className="py-7 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Select Events & Prestigious Forums
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">ETFs Asia Conference, Hong Kong — Chairman (2012 & 2013)</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">APAC Financial Services Technology Summits — Hong Kong, Macau, Kuala Lumpur</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">ICICI Bank CEO Knowledge Forum</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Indian Postal Life Insurance Top Management Seminar</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">SOA University, National Insurance Academy, Bombay Management Association</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">CII, FICCI, Indian Merchants Chamber, and other leading institutions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Dr. Verma Stand Out */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              What Makes Dr. Verma Stand Out?
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl font-semibold text-gray-800 mb-8 italic">
              "Pawan doesn't just speak—he provokes, engages, and empowers."
            </blockquote>
            
            <p className="text-lg text-gray-700 text-justify leading-relaxed">
              Dr. Verma goes beyond buzzwords. He challenges leaders to <strong>redefine success</strong>, <strong>embrace imperfection</strong>, and <strong>lead with courage and authenticity</strong>. His sessions are full of real stories, audience interaction, and powerful takeaways—ensuring every talk is not only insightful but truly unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className=" bg-gradient-to-b     from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Watch Dr. Verma in Action
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
            <p className="mt-4 text-gray-800 max-w-3xl mx-auto">
              Get a glimpse of his energy, stage presence, and impact across global platforms.
            </p>
          </div>

          <div className="max-w-4xl   mx-auto">
            <div className="relative py-5 aspect-video mb-8">
              <iframe
                className="w-full h-full  rounded-lg"
                src="https://www.youtube.com/embed/FVhCHqnd1f4"
                title="Dr. Pawan Verma Speaking"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ref={videoRef}
              ></iframe>
            </div>
            <div className="relative py-5 aspect-video mb-8">
              <iframe
                className="w-full h-full  rounded-lg"
                src="https://www.youtube.com/embed/mlQDb0WamyA?si=Vg9NO-uNjbfLU6AR"
                title="Dr. Pawan Verma Speaking"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>

              </iframe>
            </div>
            <div className="relative py-5 aspect-video mb-8">
              <iframe
                className="w-full h-full  rounded-lg"
                src="https://www.youtube.com/embed/sbztT86gYVs?si=nn-Y0DP6H9WI2eMS"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>

              </iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default SpeakingPage

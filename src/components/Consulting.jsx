import { Link } from 'react-router-dom'
import { CheckCircle, Users, Briefcase, BarChart, Target} from "lucide-react"
import pdf from '/Consulting.pdf'

import usero2 from '/user02.jpg'
import TestimonialsPage from "./Pages/TestimonialPage";

const ConsultingPage = () => {
  const testimonials = [
    {
      name: "Rajiv Mehta",
      image: usero2,
      designation: "CEO, Financial Services Company",
      rating: 5,
      testimonial:
        "Dr. Verma's strategic guidance was instrumental in our digital transformation journey. His deep understanding of the financial services sector, combined with his innovative approach to leadership, helped us navigate complex challenges and achieve remarkable results.",

    },
    {
      name: "Priya Sharma",
      image: usero2,
      designation: "COO, Insurance Provider",
      rating: 5,
      testimonial:
        "We engaged Dr. Verma to help restructure our operations and improve efficiency. His methodical approach, combined with his extensive experience in the insurance sector, provided us with practical solutions that were easy to implement and delivered immediate results.",
    },
  ];

  return (
    <div className="bg-gradient-to-b">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-[#f5e9d1] py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Consulting with Dr. Pawan Verma
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Leadership | Insurance | Strategy | Innovation
            </p>

            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>

            <p className="text-lg text-gray-700 mb-8 text-justify">
              Dr. Pawan Verma is a globally recognized leadership author, contrarian thinker, and management consultant with over three decades of cross-functional expertise in the financial services industry. With a career that spans corporate strategy, innovation, insurance, and business transformation, he brings a distinctive blend of practical wisdom and visionary thinking to every consulting engagement.
            </p>

            <p className="text-lg text-gray-700 mb-8 text-justify">
              A former Chief Operating Officer of the Indo-Japanese joint venture Star Union Dai-ichi Life Insurance, Dr. Verma has also held senior leadership roles at LIC of India, Reliance Group of Industries, and Reliance ADA Group. He has served as Director on the Boards of several institutions, including Delhi Financial Corporation, Delhi Co-operative Housing Finance Corporation, and Innovative Insurance Co. Ltd.
            </p>

            <div className="text-center">
              <div className="inline-flex gap-4">
                <Link
                  to="/contact"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Contact Now
                </Link>
                <a
                  href={pdf}
                  download
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
                >
                  Consulting Profile
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Areas of Expertise
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
              <p className="mt-4 text-gray-600">
                Dr. Verma offers deep consulting capabilities in the following domains:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-[#4d3e1f] text-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Leadership & Organizational Development</h3>
                    <p className="text-gray-200 text-justify">
                      Transforming leadership culture to meet the challenges of a VUCA world.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Insurance Industry Strategy</h3>
                    <p className="text-gray-200 text-justify">
                      Advisory on market entry, regulatory compliance, product innovation, and customer-centric processes in life, general, and health insurance.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <BarChart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business Growth & Expansion</h3>
                    <p className="text-gray-200 text-justify">
                      Crafting scalable strategies for startups, MSMEs, and established organizations venturing into new markets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Restructuring & Governance</h3>
                    <p className="text-gray-200 text-justify">
                      Board-level guidance on corporate governance, organizational restructuring, and strategic realignment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation & Digital Transformation</h3>
                    <p className="text-gray-200 text-justify">
                      Aligning creativity with execution for competitive advantage in rapidly changing business environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Perspective Section */}
      <section className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Global Perspective, Local Impact
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 text-justify">
                Dr. Verma has consulted for businesses across India and select Asian markets, offering both on-site and remote advisory services. His strategic insights have shaped insurance and financial service landscapes in diverse regulatory and business ecosystems.
              </p>

              <p className="text-lg text-gray-700 text-justify">
                He has been on expert panels of several prestigious global knowledge networks, including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Gerson Lehrman Group (USA)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Coleman Research Group (USA)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Insight Alpha (Singapore)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">AlphaSights (Hong Kong)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-3" />
                  <span className="text-gray-700">Guidepoint (Singapore)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Credentials & Affiliations
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">MBA from Patna University</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Doctorate in Management (Honoris Causa), Azteca University, Mexico</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Fellow, Insurance Institute of India</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Certified Corporate Director, Institute of Directors, New Delhi</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Life Member, Bombay Management Association</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Member, Indian Speaker Bureau -- SpeakIn</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Represented by London Speaker Bureau</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Active Rotarian and thought leader</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Verma */}
      <section className="py-7 mb-5 bg-gradient-to-b mt-5 from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Why Choose Dr. Verma
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
              <p className="mt-4 text-justify text-gray-600">Distinctive advantages that set our consulting services apart</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">35+ Years of Executive Experience</h3>
                  <p className="text-gray-600 text-justify">
                    Practical insights from decades of leadership in major organizations including Reliance Group, LIC
                    of India, and Star Union Dai-ichi Life Insurance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Cross-Functional Expertise</h3>
                  <p className="text-gray-600 text-justify">
                    Comprehensive knowledge across corporate strategy, operations, sales, marketing, IT, risk
                    management, and compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Thought Leadership</h3>
                  <p className="text-gray-600 text-justify">
                    Author of multiple books on leadership and management, including the acclaimed "Age of the Imperfect
                    Leader."
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Practical, Results-Oriented Approach</h3>
                  <p className="text-gray-600 text-justify">
                    Focus on implementable strategies that deliver measurable outcomes, not just theoretical frameworks.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Global Perspective</h3>
                  <p className="text-gray-600 text-justify">
                    International experience including chairing conferences in Hong Kong and speaking at events across
                    Asia.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-lg mb-1">Customized Solutions</h3>
                  <p className="text-gray-600 text-justify">
                    Tailored approaches that address your organization's specific challenges rather than
                    one-size-fits-all solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-7 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Let's Work Together
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 text-justify">
              Whether you are seeking to reshape your leadership strategy, enter a new insurance market, or navigate business transformation, Dr. Verma's consulting approach is collaborative, tailored, and impact-driven.
            </p>

            <p className="text-lg text-gray-700 mb-8">
              For consulting inquiries, please reach out via the Contact Page or email at{" "}<br />
              <a href="mailto:office@pawanverma.in" className="text-yellow-600 hover:underline">
                office@pawanverma.in
              </a>{" "}
              /{" "}
              <a href="mailto:office.pawanverma@gmail.com" className="text-yellow-600 hover:underline">
                office.pawanverma@gmail.com
              </a>
            </p>

            <div className="text-center">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConsultingPage

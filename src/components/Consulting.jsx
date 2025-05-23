import { CheckCircle, Users, Briefcase, BarChart, Target, ChevronRight } from "lucide-react"

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
              Management Consulting Services
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Strategic guidance for organizations seeking transformative growth and operational excellence
            </p>

            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-10"></div>

            <p className="text-lg text-gray-700 mb-8">
              With over 35 years of experience in leadership roles across financial services and other sectors, Dr.
              Pawan Verma provides expert consulting services to help organizations navigate complex challenges and
              achieve sustainable success.
            </p>

            <div className="text-center">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
              >
                Contact Us
              </button>
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
                Specialized consulting services tailored to your organization's unique needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              <div className="bg-[#4d3e1f] text-white  p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Strategic Leadership</h3>
                    <p className="text-gray-200 text-justify">
                      Develop effective leadership strategies and frameworks to guide your organization through change
                      and growth. Learn to embrace the "Imperfect Leader" philosophy for authentic and effective
                      leadership.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white  p-6 rounded-lg  shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <BarChart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Financial Services Optimization</h3>
                    <p className="text-gray-200 text-justify">
                      Leverage decades of experience in insurance, banking, and financial services to optimize
                      operations, improve customer experience, and drive sustainable growth in your financial
                      institution.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white  p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Organizational Transformation</h3>
                    <p className="text-gray-200 text-justify">
                      Guide your organization through critical transitions with strategic planning, change management,
                      and cultural alignment to ensure successful transformation and sustainable results.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#4d3e1f] text-white  p-6 rounded-lg shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="bg-yellow-500 p-2 rounded-full mr-4">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation & Digital Strategy</h3>
                    <p className="text-gray-200 text-justify">
                      Develop and implement innovative approaches to business challenges, including digital
                      transformation strategies that position your organization for success in rapidly changing markets.
                    </p>
                  </div>
                </div>
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

      {/* Testimonials */}

      {/* <TestimonialsPage testimonials={testimonials} heading={"Consulting"}  /> */}



      {/* Contact Section */}
      {/* <section id="contact" className="py-7 bg-gradient-to-b mt-5 from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold inline-block relative">
                Request a Consultation
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
              </h2>
              <p className="mt-4 text-gray-600">Take the first step toward transforming your organization</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="name"
                       
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name 
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                       placeholder="company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                       placeholder="phone"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select a Service</option>
                    <option value="strategic-leadership">Strategic Leadership</option>
                    <option value="financial-services">Financial Services Optimization</option>
                    <option value="organizational-transformation">Organizational Transformation</option>
                    <option value="innovation">Innovation & Digital Strategy</option>
                    <option value="other">Other (Please specify)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your needs
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Please describe your organization's challenges and what you hope to achieve through consulting."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-md transition duration-300"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}


    </div>
  )
}

export default ConsultingPage


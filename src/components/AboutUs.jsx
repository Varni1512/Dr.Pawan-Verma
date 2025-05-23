import { Link } from 'react-router-dom'
import img from '/auther01.jpg'
import pdf from '/Dr.-Pawan-Verma-A-Profile.pdf'

import {
  Calendar,
  Award,
  Briefcase,
  BookOpen,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
  CheckCircle,
  Building2,
  GraduationCap,
  Trophy,
  ChevronRight,
} from "lucide-react"
import HeroSection from './NewHome/HeroSection'

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-b  from-white to-[#f5e9d1] ">

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Pawan Verma</h1>
        <p className="text-xl md:text-2xl text-yellow-500 mb-6">Author | Speaker | Management Consultant</p>
        <p className="text-lg leading-relaxed mb-8 text-justify">
          A visionary leader with over 25 years of experience in guiding businesses and individuals toward
          excellence. My journey from the financial services sector to becoming an author and thought leader has
          been driven by a passion for transformative leadership.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            href="#biography"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
          >
            My Story
          </a>
          <Link
            to="/contact"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
          >
            Contact Us
          </Link>

          <a
            href={pdf}
            download
            className="group bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300 flex items-center space-x-2"
          >
            <span>Download Resume</span>
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
      {/* Biography Section */}
      <section id="biography" className="py-7 bg-gradient-to-b from-white to-[#f5e9d1]">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold inline-block relative">
          Biography
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
        </h2>
      </div>

      {/* Justified text with spacing */}
      <div className="prose prose-lg max-w-none text-justify space-y-4">
        <p>
          Dr. Pawan Verma is an accomplished Author, Thought Leader, Professional Speaker and Management
          Consultant from India's financial services sector. His leadership vision stems from his rich experience
          in guiding start-ups, serving on boards and leading business initiatives in large organizations, such as
          the Reliance Group of Industries, Reliance ADA Group, LIC of India and an Indo-Japanese start-up, Star
          Union Dai-ichi Life Insurance.
        </p>

        <p>
          Born and raised in Mumbai, Pawan developed an early interest in business and leadership. He completed
          his education with distinction, earning a doctorate in Business Management with a focus on
          organizational leadership. His academic background, combined with hands-on industry experience, has
          given him a unique perspective on the challenges facing modern businesses.
        </p>

        <p>
          Throughout his career, Pawan has been known for his innovative approach to leadership and management. He
          believes that true leadership is not about perfection but about embracing imperfections and learning
          from them. This philosophy forms the core of his bestselling book "Age of the Imperfect Leader," which
          has been praised for its fresh take on leadership in today's rapidly changing business environment.
        </p>

        <p>
          As a speaker, Pawan has addressed audiences across India and internationally, sharing insights on
          leadership, innovation, and organizational transformation. His engaging presentation style and practical
          advice have made him a sought-after speaker at corporate events, conferences, and educational
          institutions.
        </p>

        <blockquote className="text-center font-semibold text-lg italic text-gray-700">
          "If you continue doing business today with the methods of yesterday, you are bound to go out of business
          tomorrow."
          <footer className="text-right text-gray-500">- Pawan Verma</footer>
        </blockquote>

        <p>
          When not writing or speaking, Pawan enjoys reading, traveling, and mentoring young entrepreneurs. He
          lives with his family in Mumbai and continues to be actively involved in various business and
          philanthropic initiatives.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Professional Journey */}
    <section className="py-7  bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Professional Journey
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              Over 35 years of experience in leadership, innovation, and management across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Career Highlights */}
            <div className="bg-[#45320d] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Career Highlights</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>COO of Star Union Dai-ichi Life Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Senior leadership roles at Reliance Group of Industries</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Executive positions at Reliance ADA Group</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Management roles at LIC of India</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Guided multiple start-ups to success</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Served on multiple corporate boards</span>
                </li>
              </ul>
            </div>

            {/* Expertise Areas */}
            <div className="bg-[#45320d] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl  font-bold">Areas of Expertise</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Corporate Strategy & Enterprise Development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Managing Profit & Growth Centers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sales, Distribution & Marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Information Technology & Operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Risk Underwriting & Business Excellence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Legal & Compliance</span>
                </li>
              </ul>
            </div>

            {/* Industry Experience */}
            <div className="bg-[#45320d] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Industry Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Life Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>General Insurance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Housing Finance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Financial Services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Management Consulting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Corporate Leadership</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="max-w-5xl mx-auto mb-7">
            <h3 className="text-2xl font-bold mb-8 text-center">Career Milestones</h3>
             
            <div className="relative border-l-4 border-yellow-500 ml-6 md:ml-0 md:mx-auto pl-6 md:pl-0">
              <TimelineItem
                year="2018 - Present"
                title="Author & Professional Speaker"
                description="Published multiple bestselling books on leadership and management. Regular speaker at international conferences and corporate events. Provides management consulting services to organizations worldwide."
                icon={<BookOpen className="w-6 h-6" />}
                isLeft={true}
              />

              <TimelineItem
                year="2012 - 2018"
                title="Chief Operating Officer"
                description="Led Star Union Dai-ichi Life Insurance as COO, designing and implementing pioneering SOPs and customer-facing solutions supported by innovative technology platforms. Drove significant business growth and operational excellence."
                icon={<Briefcase className="w-6 h-6" />}
                isLeft={false}
              />

              <TimelineItem
                year="2005 - 2012"
                title="Senior Executive, Reliance Group"
                description="Held senior leadership positions at Reliance Group of Industries and Reliance ADA Group. Led strategic initiatives and business development across multiple verticals within the organization."
                icon={<Briefcase className="w-6 h-6" />}
                isLeft={true}
              />

              <TimelineItem
                year="1998 - 2005"
                title="Management Leader, Financial Services"
                description="Managed operations and strategic initiatives in the life insurance, general insurance, and housing finance sectors. Developed expertise in cross-functional disciplines including sales, marketing, and risk management."
                icon={<Briefcase className="w-6 h-6" />}
                isLeft={false}
              />

              <TimelineItem
                year="1988 - 1998"
                title="Early Career, LIC of India"
                description="Built a strong foundation in the insurance industry at LIC of India. Developed expertise in insurance operations, customer service, and business development."
                icon={<Briefcase className="w-6 h-6" />}
                isLeft={true}
              />
            </div>
          </div>

          {/* Author Profile */}
          <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Literary Achievements</h3>
                <p className="text-gray-600 mb-6">
                  Dr. Verma is an accomplished author with multiple published works spanning different genres, from
                  leadership and management to fiction thrillers.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">Age of the Imperfect Leader</h4>
                      <p className="text-sm text-gray-600">
                        A disruptive approach to leadership that serves as a pragmatic guide for leaders
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">The Woman Unbroken</h4>
                      <p className="text-sm text-gray-600">Upcoming edge-of-the-seat crime thriller</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">No Closure No Forgiveness</h4>
                      <p className="text-sm text-gray-600">Crime thriller that received warm welcome from readers</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500 p-2 rounded-full mr-3">
                      <BookOpen className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold">E-Books & Short Stories</h4>
                      <p className="text-sm text-gray-600">Published on Amazon and juggernaut.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-gray-600 text-justify">
                    Dr. Verma has also contributed articles to leading publications including The Times of India,
                    Hindustan Times, Economic Times, Indian Express, The Pioneer, BFSI Vision, Insurance Times, and IRDA
                    Journal.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">5+</div>
                    <p className="text-sm text-gray-600">Books Published</p>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">50K+</div>
                    <p className="text-sm text-gray-600">Copies Sold</p>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">15+</div>
                    <p className="text-sm text-gray-600">Countries Reached</p>
                  </div>

                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">100+</div>
                    <p className="text-sm text-gray-600">Articles Published</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/book/age-of-the-impatient-leader"
                    className="inline-flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
                  >
                    Explore Books <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2d2514] text-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-500 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Education</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Doctoral degree in Management (Honoris Causa)</span>
                    <p className="text-sm text-gray-200">Azteca University, Mexico</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Master of Business Administration (MBA)</span>
                    <p className="text-sm text-gray-200">Business Management</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Fellow</span>
                    <p className="text-sm text-gray-200">Insurance Institute of India</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Certified Corporate Director</span>
                    <p className="text-sm text-gray-200">Institute of Directors, New Delhi</p>
                  </div>
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
                  <div>
                    <span className="font-medium">REX Karmaveer Chakra Award</span>
                    <p className="text-sm text-gray-200">iCONGO - International Confederation of NGOs</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">REX Karmaveer Global Fellowship</span>
                    <p className="text-sm text-gray-200">In collaboration with the United Nations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Expert Panel Member</span>
                    <p className="text-sm text-gray-200">Leading global research and knowledge forums</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Chairman</span>
                    <p className="text-sm text-gray-200">ETFs Asia Conferences at Hong Kong (2012 & 2013)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-7  bg-gradient-to-b from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              Achievements & Recognition
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AchievementCard
              title="Best Business Author"
              organization="India Authors Award"
              year="2021"
              description="Recognized for outstanding contribution to business literature through 'The 10X Leader'"
            />

            <AchievementCard
              title="Management Guru Award"
              organization="Business Excellence Forum"
              year="2019"
              description="Honored for innovative management practices and thought leadership in the financial sector"
            />

            <AchievementCard
              title="Distinguished Alumni"
              organization="Mumbai Business School"
              year="2017"
              description="Recognized for exceptional career achievements and contributions to management education"
            />

            <AchievementCard
              title="Leadership Excellence Award"
              organization="Asian Leadership Forum"
              year="2015"
              description="Awarded for transformative leadership at Star Union Dai-ichi Life Insurance"
            />

            <AchievementCard
              title="Top 50 Financial Leaders"
              organization="Financial Express"
              year="2010"
              description="Named among India's top 50 influential leaders in the financial services sector"
            />

            <AchievementCard
              title="Innovation Champion"
              organization="Insurance Leadership Summit"
              year="2008"
              description="Recognized for pioneering digital transformation initiatives in the insurance industry"
            />
          </div>
        </div>
      </section>

     

     
    </div>
  )
}

// Timeline Item Component
const TimelineItem = ({ year, title, description, icon, isLeft }) => {
  return (
    <div
      className={`mb-12 relative ${isLeft ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"} md:w-[45%] md:pl-0 md:pr-0`}
    >
      <div className="absolute top-0 -left-10 md:left-auto md:right-auto md:-ml-8 md:-mr-8 bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center">
        {icon}
      </div>
      <div className="ml-10 md:ml-0">
        <div className="bg-[#2d2514] text-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mx-3 mb-2">
            <Calendar className="w-5 h-5  mr-2" />
            <span className="font-bold  ">{year}</span>
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-200 text-justify">{description}</p>
        </div>
      </div>
    </div>
  )
}

// Achievement Card Component
const AchievementCard = ({ title, organization, year, description }) => {
  return (
    <div className=" bg-[#382b0f] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="flex items-center mb-4">
        <Award className="w-8 h-8  mr-3" />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm  ">
            {organization} • {year}
          </p>
        </div>
      </div>
      <p className="text-gray-200 ">{description}</p>
    </div>
  )
}


export default AboutPage


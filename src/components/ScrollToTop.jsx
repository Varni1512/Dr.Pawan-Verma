import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // Runs whenever the route changes

  return null;
};

export default ScrollToTop;



 

// import img from '/auther01.jpg'

// import {
//   Calendar,
//   Award,
//   Briefcase,
//   BookOpen,
//   MapPin,
//   Mail,
//   Phone,
//   ExternalLink,
//   CheckCircle,
//   Building2,
//   GraduationCap,
//   Trophy,
//   ChevronRight,
// } from "lucide-react"

// const AboutPage = () => {
//   return (
//     <div className="bg-white">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-black to-gray-800 text-white py-20">
//         <div className="absolute inset-0 opacity-20 bg-[url('/placeholder.svg')] bg-cover bg-center"></div>
//         <div className="container mx-auto px-4 relative">
//           <div className="flex flex-col md:flex-row items-center">
//             <div className="md:w-1/3 mb-8 md:mb-0">
//               <div className="relative">
//                 <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-500 mx-auto">
//                   <img
//                     src={img}
//                     alt="Pawan Verma"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
               
//               </div>
//             </div>

//             <div className="md:w-2/3 md:pl-12 text-center md:text-left">
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">Pawan Verma</h1>
//               <p className="text-xl md:text-2xl text-yellow-500 mb-6">Author | Speaker | Management Consultant</p>
//               <p className="text-lg leading-relaxed mb-8">
//                 A visionary leader with over 25 years of experience in guiding businesses and individuals toward
//                 excellence. My journey from the financial services sector to becoming an author and thought leader has
//                 been driven by a passion for transformative leadership.
//               </p>
//               <div className="flex flex-wrap justify-center md:justify-start gap-4">
//                 <a
//                   href="#biography"
//                   className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded-md transition duration-300"
//                 >
//                   My Story
//                 </a>
//                 <a
//                   href="#contact"
//                   className="bg-transparent hover:bg-white/10 text-white border border-white py-2 px-6 rounded-md transition duration-300"
//                 >
//                   Get in Touch
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Biography Section */}
//       <section id="biography" className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold inline-block relative">
//                 Biography
//                 <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
//               </h2>
//             </div>

//             <div className="prose prose-lg max-w-none">
//               <p>
//                 Dr. Pawan Verma is an accomplished Author, Thought Leader, Professional Speaker and Management
//                 Consultant from India's financial services sector. His leadership vision stems from his rich experience
//                 in guiding start-ups, serving on boards and leading business initiatives in large organizations, such as
//                 the Reliance Group of Industries, Reliance ADA Group, LIC of India and an Indo-Japanese start-up, Star
//                 Union Dai-ichi Life Insurance.
//               </p>

//               <p>
//                 Born and raised in Mumbai, Pawan developed an early interest in business and leadership. He completed
//                 his education with distinction, earning a doctorate in Business Management with a focus on
//                 organizational leadership. His academic background, combined with hands-on industry experience, has
//                 given him a unique perspective on the challenges facing modern businesses.
//               </p>

//               <p>
//                 Throughout his career, Pawan has been known for his innovative approach to leadership and management. He
//                 believes that true leadership is not about perfection but about embracing imperfections and learning
//                 from them. This philosophy forms the core of his bestselling book "Age of the Imperfect Leader," which
//                 has been praised for its fresh take on leadership in today's rapidly changing business environment.
//               </p>

//               <p>
//                 As a speaker, Pawan has addressed audiences across India and internationally, sharing insights on
//                 leadership, innovation, and organizational transformation. His engaging presentation style and practical
//                 advice have made him a sought-after speaker at corporate events, conferences, and educational
//                 institutions.
//               </p>

//               <blockquote>
//                 "If you continue doing business today with the methods of yesterday, you are bound to go out of business
//                 tomorrow."
//                 <footer>- Pawan Verma</footer>
//               </blockquote>

//               <p>
//                 When not writing or speaking, Pawan enjoys reading, traveling, and mentoring young entrepreneurs. He
//                 lives with his family in Mumbai and continues to be actively involved in various business and
//                 philanthropic initiatives.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Professional Journey */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold inline-block relative">
//               Professional Journey
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
//             </h2>
//             <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
//               Over 35 years of experience in leadership, innovation, and management across various sectors
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//             {/* Career Highlights */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="bg-yellow-500 p-3 rounded-full mr-4">
//                   <Briefcase className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold">Career Highlights</h3>
//               </div>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>COO of Star Union Dai-ichi Life Insurance</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Senior leadership roles at Reliance Group of Industries</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Executive positions at Reliance ADA Group</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Management roles at LIC of India</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Guided multiple start-ups to success</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Served on multiple corporate boards</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Expertise Areas */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="bg-yellow-500 p-3 rounded-full mr-4">
//                   <Award className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold">Areas of Expertise</h3>
//               </div>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Corporate Strategy & Enterprise Development</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Managing Profit & Growth Centers</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Sales, Distribution & Marketing</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Information Technology & Operations</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Risk Underwriting & Business Excellence</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Legal & Compliance</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Industry Experience */}
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="bg-yellow-500 p-3 rounded-full mr-4">
//                   <Building2 className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold">Industry Experience</h3>
//               </div>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Life Insurance</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>General Insurance</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Housing Finance</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Financial Services</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Management Consulting</span>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <span>Corporate Leadership</span>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Career Timeline */}
//           <div className="max-w-5xl mx-auto mb-16">
//             <h3 className="text-2xl font-bold mb-8 text-center">Career Milestones</h3>
//             <div className="relative border-l-4 border-yellow-500 ml-6 md:ml-0 md:mx-auto pl-6 md:pl-0">
//               <TimelineItem
//                 year="2018 - Present"
//                 title="Author & Professional Speaker"
//                 description="Published multiple bestselling books on leadership and management. Regular speaker at international conferences and corporate events. Provides management consulting services to organizations worldwide."
//                 icon={<BookOpen className="w-6 h-6" />}
//                 isLeft={true}
//               />

//               <TimelineItem
//                 year="2012 - 2018"
//                 title="Chief Operating Officer"
//                 description="Led Star Union Dai-ichi Life Insurance as COO, designing and implementing pioneering SOPs and customer-facing solutions supported by innovative technology platforms. Drove significant business growth and operational excellence."
//                 icon={<Briefcase className="w-6 h-6" />}
//                 isLeft={false}
//               />

//               <TimelineItem
//                 year="2005 - 2012"
//                 title="Senior Executive, Reliance Group"
//                 description="Held senior leadership positions at Reliance Group of Industries and Reliance ADA Group. Led strategic initiatives and business development across multiple verticals within the organization."
//                 icon={<Briefcase className="w-6 h-6" />}
//                 isLeft={true}
//               />

//               <TimelineItem
//                 year="1998 - 2005"
//                 title="Management Leader, Financial Services"
//                 description="Managed operations and strategic initiatives in the life insurance, general insurance, and housing finance sectors. Developed expertise in cross-functional disciplines including sales, marketing, and risk management."
//                 icon={<Briefcase className="w-6 h-6" />}
//                 isLeft={false}
//               />

//               <TimelineItem
//                 year="1988 - 1998"
//                 title="Early Career, LIC of India"
//                 description="Built a strong foundation in the insurance industry at LIC of India. Developed expertise in insurance operations, customer service, and business development."
//                 icon={<Briefcase className="w-6 h-6" />}
//                 isLeft={true}
//               />
//             </div>
//           </div>

//           {/* Author Profile */}
//           <div className="bg-gray-50 rounded-lg shadow-lg overflow-hidden mb-16">
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               <div className="p-8">
//                 <h3 className="text-2xl font-bold mb-4">Literary Achievements</h3>
//                 <p className="text-gray-600 mb-6">
//                   Dr. Verma is an accomplished author with multiple published works spanning different genres, from
//                   leadership and management to fiction thrillers.
//                 </p>

//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <div className="bg-yellow-500 p-2 rounded-full mr-3">
//                       <BookOpen className="h-4 w-4 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">Age of the Imperfect Leader</h4>
//                       <p className="text-sm text-gray-600">
//                         A disruptive approach to leadership that serves as a pragmatic guide for leaders
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-yellow-500 p-2 rounded-full mr-3">
//                       <BookOpen className="h-4 w-4 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">The Woman Unbroken</h4>
//                       <p className="text-sm text-gray-600">Upcoming edge-of-the-seat crime thriller</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-yellow-500 p-2 rounded-full mr-3">
//                       <BookOpen className="h-4 w-4 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">No Closure No Forgiveness</h4>
//                       <p className="text-sm text-gray-600">Crime thriller that received warm welcome from readers</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-yellow-500 p-2 rounded-full mr-3">
//                       <BookOpen className="h-4 w-4 text-white" />
//                     </div>
//                     <div>
//                       <h4 className="font-bold">E-Books & Short Stories</h4>
//                       <p className="text-sm text-gray-600">Published on Amazon and juggernaut.com</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-6">
//                   <p className="text-sm text-gray-600">
//                     Dr. Verma has also contributed articles to leading publications including The Times of India,
//                     Hindustan Times, Economic Times, Indian Express, The Pioneer, BFSI Vision, Insurance Times, and IRDA
//                     Journal.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-yellow-50 p-8 flex flex-col justify-center">
//                 <div className="grid grid-cols-2 gap-6">
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-yellow-600 mb-1">5+</div>
//                     <p className="text-sm text-gray-600">Books Published</p>
//                   </div>

//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-yellow-600 mb-1">50K+</div>
//                     <p className="text-sm text-gray-600">Copies Sold</p>
//                   </div>

//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-yellow-600 mb-1">15+</div>
//                     <p className="text-sm text-gray-600">Countries Reached</p>
//                   </div>

//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-yellow-600 mb-1">100+</div>
//                     <p className="text-sm text-gray-600">Articles Published</p>
//                   </div>
//                 </div>

//                 <div className="mt-8 text-center">
//                   <a
//                     href="#books"
//                     className="inline-flex items-center bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition duration-300"
//                   >
//                     Explore Books <ChevronRight className="ml-1 h-4 w-4" />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Education & Credentials */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="bg-yellow-500 p-3 rounded-full mr-4">
//                   <GraduationCap className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold">Education</h3>
//               </div>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">Doctoral degree in Management (Honoris Causa)</span>
//                     <p className="text-sm text-gray-600">Azteca University, Mexico</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">Master of Business Administration (MBA)</span>
//                     <p className="text-sm text-gray-600">Business Management</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">Fellow</span>
//                     <p className="text-sm text-gray-600">Insurance Institute of India</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">Certified Corporate Director</span>
//                     <p className="text-sm text-gray-600">Institute of Directors, New Delhi</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//               <div className="flex items-center mb-4">
//                 <div className="bg-yellow-500 p-3 rounded-full mr-4">
//                   <Trophy className="h-6 w-6 text-white" />
//                 </div>
//                 <h3 className="text-xl font-bold">Awards & Recognition</h3>
//               </div>
//               <ul className="space-y-3">
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">REX Karmaveer Chakra Award</span>
//                     <p className="text-sm text-gray-600">iCONGO - International Confederation of NGOs</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">REX Karmaveer Global Fellowship</span>
//                     <p className="text-sm text-gray-600">In collaboration with the United Nations</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">Expert Panel Member</span>
//                     <p className="text-sm text-gray-600">Leading global research and knowledge forums</p>
//                   </div>
//                 </li>
//                 <li className="flex items-start">
//                   <CheckCircle className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <span className="font-medium">Chairman</span>
//                     <p className="text-sm text-gray-600">ETFs Asia Conferences at Hong Kong (2012 & 2013)</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold inline-block relative">
//               Achievements & Recognition
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
//             </h2>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <AchievementCard
//               title="Best Business Author"
//               organization="India Authors Award"
//               year="2021"
//               description="Recognized for outstanding contribution to business literature through 'The 10X Leader'"
//             />

//             <AchievementCard
//               title="Management Guru Award"
//               organization="Business Excellence Forum"
//               year="2019"
//               description="Honored for innovative management practices and thought leadership in the financial sector"
//             />

//             <AchievementCard
//               title="Distinguished Alumni"
//               organization="Mumbai Business School"
//               year="2017"
//               description="Recognized for exceptional career achievements and contributions to management education"
//             />

//             <AchievementCard
//               title="Leadership Excellence Award"
//               organization="Asian Leadership Forum"
//               year="2015"
//               description="Awarded for transformative leadership at Star Union Dai-ichi Life Insurance"
//             />

//             <AchievementCard
//               title="Top 50 Financial Leaders"
//               organization="Financial Express"
//               year="2010"
//               description="Named among India's top 50 influential leaders in the financial services sector"
//             />

//             <AchievementCard
//               title="Innovation Champion"
//               organization="Insurance Leadership Summit"
//               year="2008"
//               description="Recognized for pioneering digital transformation initiatives in the insurance industry"
//             />
//           </div>
//         </div>
//       </section>

     

//       {/* Contact Section */}
//       <section id="contact" className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold inline-block relative">
//               Get in Touch
//               <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
//             </h2>
//             <p className="mt-4 text-gray-600">
//               For speaking engagements, consulting opportunities, or book-related inquiries
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {/* Contact Info */}
//               <div className="bg-gray-50 p-8 rounded-lg">
//                 <h3 className="text-xl font-bold mb-6">Contact Information</h3>

//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <MapPin className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold">Office Address</h4>
//                       <p className="text-gray-600">Mumbai, Maharashtra, India</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <Mail className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold">Email</h4>
//                       <p className="text-gray-600">office@pawanverma.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <Phone className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold">Phone</h4>
//                       <p className="text-gray-600">(+91) 93222-45678</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <ExternalLink className="w-6 h-6 text-yellow-500 mr-4 mt-1 flex-shrink-0" />
//                     <div>
//                       <h4 className="font-bold">Social Media</h4>
//                       <div className="flex space-x-4 mt-2">
//                         <a href="#" className="text-gray-600 hover:text-yellow-500">
//                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                               fillRule="evenodd"
//                               d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                               clipRule="evenodd"
//                             ></path>
//                           </svg>
//                         </a>
//                         <a href="#" className="text-gray-600 hover:text-yellow-500">
//                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
//                           </svg>
//                         </a>
//                         <a href="#" className="text-gray-600 hover:text-yellow-500">
//                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                               fillRule="evenodd"
//                               d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                               clipRule="evenodd"
//                             ></path>
//                           </svg>
//                         </a>
//                         <a href="#" className="text-gray-600 hover:text-yellow-500">
//                           <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path
//                               fillRule="evenodd"
//                               d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Form */}
//               <div className="bg-gray-50 p-8 rounded-lg">
//                 <h3 className="text-xl font-bold mb-6">Send a Message</h3>

//                 <form className="space-y-4">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
//                       placeholder="John Doe"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
//                       placeholder="How can I help you?"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       rows="4"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
//                       placeholder="Your message here..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-md transition duration-300"
//                   >
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// // Timeline Item Component
// const TimelineItem = ({ year, title, description, icon, isLeft }) => {
//   return (
//     <div
//       className={`mb-12 relative ${isLeft ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"} md:w-[45%] md:pl-0 md:pr-0`}
//     >
//       <div className="absolute top-0 -left-10 md:left-auto md:right-auto md:-ml-8 md:-mr-8 bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center">
//         {icon}
//       </div>
//       <div className="ml-10 md:ml-0">
//         <div className="bg-gray-50 p-6 rounded-lg shadow-md">
//           <div className="flex items-center mb-2">
//             <Calendar className="w-5 h-5 text-yellow-500 mr-2" />
//             <span className="font-bold text-gray-600">{year}</span>
//           </div>
//           <h3 className="text-xl font-bold mb-2">{title}</h3>
//           <p className="text-gray-600">{description}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Achievement Card Component
// const AchievementCard = ({ title, organization, year, description }) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
//       <div className="flex items-center mb-4">
//         <Award className="w-8 h-8 text-yellow-500 mr-3" />
//         <div>
//           <h3 className="font-bold text-lg">{title}</h3>
//           <p className="text-sm text-gray-600">
//             {organization} • {year}
//           </p>
//         </div>
//       </div>
//       <p className="text-gray-700">{description}</p>
//     </div>
//   )
// }

// export default AboutPage


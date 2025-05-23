 
import img2 from '/gallery01.jpeg'

 

import { useRef } from "react"
import {  Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link } from 'react-router-dom'
 
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Inspiring Audiences Worldwide</h1>
              <p className="text-xl text-yellow-500 mb-6">Transformative Insights for Business Leaders</p>
              <p className="text-lg leading-relaxed mb-8 text-justify">
                Dr. Pawan Verma delivers powerful, engaging presentations that challenge conventional thinking and
                inspire transformative action. With over two decades of experience in leadership and management, his
                talks combine practical wisdom with cutting-edge insights.
              </p>
              <div className="flex flex-wrap gap-4">
               
                <a
                  href="#experience"
                  className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
                >
                  Speaking Experience
                </a>
                <Link
                  to="/contact"
                  className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300"
                >
                Contact Us
                </Link>
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
              <div className="text-4xl font-bold text-yellow-500 mb-2">25+</div>
              <p className="text-gray-700 font-medium">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Speaker Profile */}
      <section id="experience" className="py-7 bg-white">
  <div className="container mx-auto px-4">
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold inline-block relative">
        Speaking Experience
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
      </h2>
    </div>

    {/* Content */}
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none text-justify space-y-6">
        <p>
          Dr. Pawan Verma is a professional speaker who has spoken at various academic conferences, corporate events, and industry platforms both in India and abroad. His rich professional background makes him an ideal speaker on topics such as leadership, management, innovation, creativity, motivation, and team-building. He is also a domain expert in insurance.
        </p>

        <p>
          Pawan was the Chairman of the ETFs Asia Conference at Hong Kong in 2012 and 2013. He has also addressed the APAC Financial Services Technology Summits on multiple occasions in Hong Kong, Macau, and Kuala Lumpur.
        </p>

        <p>
          He was the Keynote Speaker at the Centenary Celebrations of Osmania University, Hyderabad. Additionally, he has spoken at academic conferences organized by institutions such as SOA University (Bhubaneswar), National Insurance Academy, and Bombay Management Association.
        </p>

        <p>
          Pawan has also delivered speeches at various corporate events and conferences, including ICICI Bank's CEO Knowledge Forum and top management seminars of Indian Postal Life Insurance. He has also addressed industry forums such as CII, FICCI, and Indian Merchants Chamber and has moderated expert panel discussions on topics related to Information Technology and Financial Services.
        </p>

        <p>
          As a leadership speaker, Pawan inspires intellectual curiosity and offers fresh, disruptive perspectives relevant to today’s VUCA world. He is known for his interactive style, humor, and high-energy delivery, making his speeches engaging and impactful across diverse audiences.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Featured Video */}
      <section className=" bg-gradient-to-b     from-white to-[#f5e9d1]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold inline-block relative">
              See Dr. Verma in Action
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"></div>
            </h2>
            <p className="mt-4 text-gray-800 max-w-3xl mx-auto">
              Watch excerpts from Dr. Verma's recent presentations to get a sense of his speaking style and content.
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
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>

              </iframe>
            </div>
            <div className="relative py-5 aspect-video mb-8">
              <iframe 
              className="w-full h-full  rounded-lg"
              src="https://www.youtube.com/embed/sbztT86gYVs?si=nn-Y0DP6H9WI2eMS" 
              title="YouTube video player" 
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" 
              allowfullscreen>

              </iframe>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  )
}

 

export default SpeakingPage


// book  section
{/* <section id="booking" className="py-7 bg-gradient-to-b  from-white to-[#f5e9d1] ">
<div className="container mx-auto px-4">
  <div className="text-center mb-12">
    <div className="flex items-center justify-center gap-3 mb-2">
      <div className="h-0.5 w-12 bg-[#B8860B]" />
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        Book a Session
      </h2>
      <div className="h-0.5 w-12 bg-[#B8860B]" />
    </div>
    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
      Schedule a consultation with Dr. Verma or send us a message. 
      We'll get back to you as soon as possible.
    </p>
  </div>

  <div className="flex flex-col md:flex-row gap-8 justify-between max-w-6xl mx-auto">
    {/* Contact Information Side */}
    // <div className="w-full md:w-5/12 bg-gradient-to-br from-in-50 to-indigo-50 p-8 rounded-lg shadow-md">
    //   <div className="mb-10">
    //     <h3 className="text-2xl font-bold text-gray-800 mb-4">Get In Touch</h3>
    //     <p className="text-gray-600 mb-6">
    //     To invite Dr. Pawan Verma for a talk, please get in touch:
    //     </p>
        
      //   <Link to='/contact' className="bg-[#f39c12] text-white px-6 py-2 rounded-sm hover:bg-[#e67e22] transition duration-300">
      //     Contact Us
      //   </Link>
      // </div>
      
    //   <div className="space-y-4 mb-10">
    //     <div className="flex items-center gap-4">
    //       <div className="bg-blue-100 p-3 rounded-full">
    //         <Phone className="h-5 w-5 text-blue-700" />
    //       </div>
    //       <div>
    //         <p className="text-sm text-gray-500">Phone</p>
    //         <p className="font-medium">+91-93222-49691</p>
    //       </div>
    //     </div>
        
    //     <div className="flex items-center gap-4">
    //       <div className="bg-green-100 p-3 rounded-full">
    //         <Mail className="h-5 w-5 text-green-700" />
    //       </div>
    //       <div>
    //         <p className="text-sm text-gray-500">Email</p>
    //         <p className="font-medium">contact@drverma.com</p>
    //       </div>
    //     </div>
        
        
    //   </div>
      
    //   <div>
    //     <h4 className="text-lg font-medium mb-3">Connect With Us</h4>
    //     <div className="flex gap-3">
    //     <a href="https://www.instagram.com/pawan.amrev/" className="bg-black text-white p-2 rounded-full hover:bg-gray-700 transition duration-300">
    //       <Instagram size={18} />
    //     </a>
    //     <a href="https://www.facebook.com/AuthorPawan" className="bg-black text-white p-2 rounded-full hover:bg-gray-600 transition duration-300">
    //       <Facebook size={18} />
    //     </a>
    //     <a href="https://x.com/pawankverma" className="bg-black text-white p-2 rounded-full hover:bg-gray-600 transition duration-300">
    //       <Twitter size={18} />
    //     </a>
    //     <a href="https://www.linkedin.com/in/pawanv/" className="bg-black text-white p-2 rounded-full hover:bg-gray-600 transition duration-300">
    //       <Linkedin size={18} />
    //     </a>
    //     <a href="https://www.youtube.com/channel/UCedk61TyParbxvKHyDev6ag" className="bg-black text-white p-2 rounded-full hover:bg-gray-600 transition duration-300">
    //       <Youtube size={18} />
    //     </a>

    //     </div>
    //   </div>
    // </div>

    {/* Form Side */}
    // <div className="w-full md:w-7/12 bg-white p-8 rounded-lg shadow-md border border-gray-100">
    //   <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h3>
      
    //   <form  className="space-y-4">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <div>
    //         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
    //           Full Name
    //         </label>
    //         <input
    //           type="text"
    //           id="name"
    //           name="name"
              // value={formData.name}
              // onChange={handleChange}
          //     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
          //     required
          //   />
          // </div>
          
          // <div>
          //   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          //     Email Address
          //   </label>
          //   <input
          //     type="email"
          //     id="email"
          //     name="email"
              // value={formData.email}
              // onChange={handleChange}
        //       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
               
        //     />
        //   </div>
        // </div>
        
        // <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        //   <div>
        //     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
        //       Phone Number
        //     </label>
        //     <input
        //       type="tel"
        //       id="phone"
        //       name="phone"
        //       // value={formData.phone}
        //       // onChange={handleChange}
        //       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
        //     />
        //   </div>
          
        //   <div>
        //     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
        //       Subject
        //     </label>
        //     <input
        //       type="text"
        //       id="subject"
        //       name="subject"
        //       // value={formData.subject}
        //       // onChange={handleChange}
        //       className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300"
        //     />
        //   </div>
        // </div>
        
        // <div>
        //   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
        //     Your Message
        //   </label>
        //   <textarea
        //     id="message"
        //     name="message"
        //     rows="4"
          //   value={formData.message}
          //   onChange={handleChange}
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition duration-300 resize-none"
             
//           ></textarea>
//         </div>
        
//         <div>
//           <button
//             type="submit"
//             className="w-full bg-[#B8860B] hover:bg-[#a07208] text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
//           >
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
// </section> */}
import React from 'react';
import { Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react';

function Contactus() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-[#f5e9d1] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Section - Contact Info */}
          <div 
            className="lg:w-2/5 relative"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="p-12 relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8">Contact Me</h2>
              <p className="text-gray-300 mb-12 text-lg">
                Get in touch with me on social media & screen now on website
              </p>

              <div className="space-y-8">
                <div>
                  <p className="text-gray-400">Phone Number</p>
                  <div className="space-y-2">
                    <p className="text-white font-medium">Mobile: (+91) 9322249691</p>
                  </div>
                </div>

                <div>
                  <p className="text-gray-400">Email Address</p>
                  <div className="space-y-2">
                    <p className="text-white font-medium">office.pawanverma@gmail.com</p>
                    <p className="text-white font-medium">office@pawanverma.in</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="flex space-x-4">
                <a href="https://www.instagram.com/pawan.amrev/"  className="bg-white p-3 rounded-full hover:bg-gray-300 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/AuthorPawan" className="bg-white p-3 rounded-full hover:bg-gray-300transition duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://x.com/pawankverma" className="bg-white p-3 rounded-full hover:bg-gray-300 transition duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/pawanv/" className="bg-white p-3 rounded-full hover:bg-gray-300 transition duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCedk61TyParbxvKHyDev6ag" className="bg-white p-3 rounded-full hover:bg-gray-300transition duration-300">
                <Youtube size={18} />
              </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="lg:w-3/5 p-12 bg-gradient-to-b  from-white to-[#f5e9d1]">
            <div className="max-w-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-sm shadow-sm "
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-sm   shadow-sm "
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="mt-1 block w-full px-4 py-1 border border-gray-300 rounded-sm shadow-sm "
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;

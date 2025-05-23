import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const AuthorContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F3EB] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl flex shadow-lg rounded-xl overflow-hidden">
        {/* Left Side - Contact Information */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src="/api/placeholder/600/800" 
            alt="Books background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 p-8 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl">Contact Me</h2>
              <p className="mb-6">Get in touch with me on social media & never miss an update.</p>
            </div>
            
            <div>
              <div className="mb-4">
                <h3 className="font-semibold">Phone Number</h3>
                <p>Mobile - (+91) 93222-49691</p>
                <p>Office - (+91) 93222-49691</p>
              </div>
              
              <div className="mb-6">
                <h3 className="font-semibold">Email Address</h3>
                <p>Personal - office.pawanverma@gmail.com</p>
                <p>Business - office@pawanverma.in</p>
              </div>
              
              <div className="flex space-x-4">
                <Instagram className="text-white w-6 h-6 cursor-pointer" />
                <Facebook className="text-white w-6 h-6 cursor-pointer" />
                <Twitter className="text-white w-6 h-6 cursor-pointer" />
                <Linkedin className="text-white w-6 h-6 cursor-pointer" />
                <Youtube className="text-white w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-1/2 bg-white p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorContactPage;
import React from 'react';
import { Linkedin, Youtube, Twitter, Facebook, Instagram } from 'lucide-react';


const SocialMediaSection = () => {
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://www.linkedin.com/in/pawanv"
    },
    {
      id: 2,
      name: "YouTube",
      icon: <Youtube className="h-6 w-6" />,
      url: "https://www.youtube.com/channel/UCedk61TyParbxvKHyDev6ag"
    },
    {
      id: 3,
      name: "Twitter",
      icon: <Twitter className="h-6 w-6" />,
      url: "https://twitter.com/pawankverma"
    },
    {
      id: 4,
      name: "Facebook",
      icon: <Facebook className="h-6 w-6" />,
      url: "https://www.facebook.com/AuthorPawan"
    },
    {
      id: 5,
      name: "Instagram",
      icon: <Instagram className="h-6 w-6" />,
      url: "https://www.instagram.com/pawan.amrev/"
    }
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Social Media</h2>
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        {socialLinks.map((social) => (
          <div key={social.id} className="flex flex-col items-center">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 hover:bg-[#D9A61E] rounded-full p-6 transition-colors mb-3"
            >
              {React.cloneElement(social.icon, { className: "h-8 w-8 text-black" })}
            </a>
            <span className="text-md text-black">{social.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SocialMediaSection;
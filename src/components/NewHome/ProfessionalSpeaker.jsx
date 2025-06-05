import React from 'react';

const ProfessionalSpeaker = () => {
  const speakerInfo = [
    {
      id: 1,
      title: 'Addressing Masterclass on Indian Insurance Sector',
      image: '/speaker/7.jpg'
    },
    {
      id: 2,
      title: 'Addressing the REX Conclive 2014 for a Social Cause',
      image: '/speaker/8.jpg'
    },
    {
      id: 3,
      title: 'At India Authors Award 2021',
      image: '/speaker/9.jpg'
    },
    {
      id: 4,
      title: 'Creating New Markets - ETFs Asia Conference Hong Kong',
      image: '/speaker/10.jpg'
    },
    {
      id: 5,
      title: 'Masterclass on Indian Insurance Sector',
      image: '/speaker/11.jpg'
    },
    {
      id: 6,
      title: 'Panel Discussion at SME CEO Session',
      image: '/speaker/12.jpg'
    },
    {
      id: 7,
      title: 'Service with a Smile - SOA University Conference Plenary Session',
      image: '/speaker/13.jpg'
    },
    {
      id: 8,
      title: 'Technology for Humanity - Financial Services Technology Seminar at Hong Kong',
      image: '/speaker/14.jpg'
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Professional Speaker</h2>
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
      </div>
      <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-[Inter] text-center px-4">
       Dr. Pawan Verma is a keynote speaker, who has addressed number of academic conferences, corporate events and industry platforms, both in India and abroad. His rich professional background and experience makes him the ideal person to share his thoughts and experiences on topics such as leadership and management, innovation and creativity, motivation and team-building, etc.
      </p>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {speakerInfo.map(item => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-50"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={`Professional Speaker ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-800 font-medium pt-4 leading-relaxed">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSpeaker;

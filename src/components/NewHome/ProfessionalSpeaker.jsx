import React from 'react';

const ProfessionalSpeaker = () => {
  const speakerInfo = [
    {
      id: 1,
      title: 'An expert is typically an individual whose knowledge and experience are deeply rooted within a specific industry or field.',
      image: '/Professional1.png'
    },
    {
      id: 2,
      title: 'The core task of a professional speaker is to deliver speeches or presentations at various events, such as conferences, seminars, corporate meetings, or special occasions.',
      image: '/Professional2.png'
    },
    {
      id: 3,
      title: 'Professional speakers are skilled at engaging audiences and delivering impactful presentations.',
      image: '/Professional3.png'
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Professional Speaker</h2>
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
      </div>
      <p className="text-gray-600 max-w-5xl mx-auto text-base sm:text-lg font-[Inter]">
        Dr. Pawan Verma is a keynote speaker, who has addressed number of academic conferences, corporate events and industry platforms, both in India and abroad. His rich professional background and experience makes him the ideal person to share his thoughts and experiences on topics such as leadership and management, innovation and creativity, motivation and team-building, etc.
      </p>
      

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Speaker Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {speakerInfo.map((item) => (
            <div key={item.id} className="rounded-2xl overflow-hidden shadow-lg bg-gray-50">
              <div className="relative h-64">
                <img
                  src={item.image}
                  alt={`Professional Speaker ${item.id}`}
                  className="w-[415px] h-[279px] object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-800 font-medium pt-4">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSpeaker;

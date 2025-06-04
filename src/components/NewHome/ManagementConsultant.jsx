import React from 'react';

const ManagementConsultant = () => {
  const speakerInfo = [
    {
      id: 1,
      title: 'A One-to-One Session at a Start-up Fest',
      image: '/speaker/1.jpg'
    },
    {
      id: 2,
      title: 'Accelerating Growth with Innovation & Creativity - Madurai SMEs',
      image: '/speaker/2.jpg'
    },
    {
      id: 3,
      title: 'Building Strategic Leadership Capabilities - Raipur SMEs',
      image: '/speaker/3.jpg'
    },
    {
      id: 4,
      title: 'Explaining Leadership to Rotarians',
      image: '/speaker/4.jpg'
    },
    {
      id: 5,
      title: 'Overcoming Distribution Challenges - Postal Life Insurance',
      image: '/speaker/5.jpg'
    },
    {
      id: 6,
      title: 'With LIC Executives on Creative Problem Solving at NIA Pune',
      image: '/speaker/6.jpg'
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 font-['Instrument_Sans'] text-black">Management Consultant</h2>
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
      </div>
      <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg font-[Inter] text-center px-4">
        Dr. Pawan Verma is an independent Management Consultant and Trainer, and is associated with a number of national and international platforms in the consulting space. He has done both on-site & off-site consulting for Indian and a few select Asian markets on a range of issues, including insurance regulations, organization-restructuring & development, market entry & expansion strategies, global business strategies & dimensions, marketing Strategies & future outlook, etc
      </p>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
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

export default ManagementConsultant;

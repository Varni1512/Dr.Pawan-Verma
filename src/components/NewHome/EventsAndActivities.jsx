import React from 'react';

const EventsAndActivities = () => {
  const speakerInfo = [
    {
      id: 1,
      title: 'A View of the Audience at Book Launch at  Gymkhana Auditorium',
      image: '/event/1.jpg'
    },
    {
      id: 2,
      title: 'Addressing Rotary South Asia Thalassaemia Conf',
      image: '/event/2.jpg'
    },
    {
      id: 3,
      title: 'At a Book Signing Event',
      image: '/event/3.jpg'
    },
    {
      id: 4,
      title: 'Book Launch - A View of the Audience',
      image: '/event/4.jpg'
    },
    {
      id: 5,
      title: 'Book Launch by Rotary District Governor',
      image: '/event/5.JPG'
    },
    {
      id: 6,
      title: 'Receiving the REX Dellowship 2019',
      image: '/event/6.jpg'
    },
    {
      id: 7,
      title: 'Speaking at the Book Launch',
      image: '/event/7.JPG'
    },
    {
      id: 8,
      title: 'Receiving the Rotary Star Platinum Trophy',
      image: '/event/8.jpg'
    },
    {
      id: 9,
      title: 'Receiving the Rotary Trophy',
      image: '/event/9.jpg'
    }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center pt-12 mb-2 font-['Instrument_Sans'] text-black">Events and Activities at a Glance</h2>
      <div className="flex justify-center mb-8 sm:mb-12">
        <div className="w-24 sm:w-48 h-1 bg-[#D9A61E]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
          {speakerInfo.map(item => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-50"
            >
              <div className="relative h-68 overflow-hidden">
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
      <div className="flex justify-center">
                <button className="bg-black text-white px-12 py-4 text-lg font-semibold rounded hover:bg-gray-800 transition-colors">
                    <a href="/media">View All Events</a>
                </button>
            </div>

    </div>
  );
};

export default EventsAndActivities;
